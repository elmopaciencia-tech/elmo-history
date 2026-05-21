import { createHash } from "node:crypto";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const assetsDir = "assets";
const originalsDir = "originals";

const pages = [
  {
    id: "origins",
    url: "https://preview.shorthand.com/y8NycyYcsiLD3nRA",
    outputFile: "index.html",
  },
  {
    id: "history",
    url: "https://preview.shorthand.com/CgNc1CVdwoC1HDml",
    outputFile: "history.html",
  },
  {
    id: "decline",
    url: "https://preview.shorthand.com/JbFPgyQDJwX66ooB",
    outputFile: "decline.html",
  },
  {
    id: "identity",
    url: "https://preview.shorthand.com/ac7OP0isUN7M4fPE",
    outputFile: "identity.html",
  },
];

const routeByUrl = new Map(pages.map((page) => [page.url, page.outputFile]));
const downloadedByKey = new Map();
const failures = [];

const requestHeaders = {
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
};

const decodeUrl = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("\\u0026", "&")
    .replaceAll("\\/", "/");

const stripTrailingPunctuation = (value) => value.replace(/[.;]+$/, "").replace(/\)+$/, "");

const shouldLocalizeUrl = (url) => {
  try {
    const parsed = new URL(url);
    if (
      parsed.hostname === "media.shorthand.com" ||
      parsed.hostname === "app.shorthand.com" ||
      parsed.hostname === "fonts.googleapis.com" ||
      parsed.hostname === "fonts.gstatic.com" ||
      parsed.hostname === "iframely.shorthand.com"
    ) {
      return true;
    }
    if (parsed.hostname === "preview.shorthand.com") {
      return (
        parsed.pathname.startsWith("/themes/") ||
        parsed.pathname.startsWith("/fonts/") ||
        parsed.pathname === "/favicon.ico"
      );
    }
  } catch {
    return false;
  }
  return false;
};

const urlKey = (url) => {
  const parsed = new URL(url);
  if (parsed.hostname === "fonts.googleapis.com") return parsed.href;
  return `${parsed.origin}${parsed.pathname}`;
};

const extensionFor = (url, contentType = "") => {
  const parsed = new URL(url);
  const ext = path.extname(parsed.pathname);
  if (ext) return ext;
  if (contentType.includes("text/css")) return ".css";
  if (contentType.includes("javascript")) return ".js";
  if (contentType.includes("font/woff2")) return ".woff2";
  if (contentType.includes("font/woff")) return ".woff";
  if (contentType.includes("image/svg")) return ".svg";
  if (contentType.includes("image/png")) return ".png";
  if (contentType.includes("image/jpeg")) return ".jpg";
  if (contentType.includes("text/html")) return ".html";
  return ".bin";
};

const localAssetPathFor = (url, contentType = "") => {
  const parsed = new URL(url);
  const rawBase = path.basename(parsed.pathname, path.extname(parsed.pathname)) || parsed.hostname;
  const cleanBase = rawBase.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(0, 70);
  const hash = createHash("sha256").update(urlKey(url)).digest("hex").slice(0, 12);
  const domainDir = path.join(assetsDir, parsed.hostname.replace(/[^a-zA-Z0-9.-]/g, "-"));
  return path.join(domainDir, `${cleanBase}-${hash}${extensionFor(url, contentType)}`).split(path.sep).join("/");
};

const fileExists = async (filePath) => {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
};

const extractUrls = (source) => {
  const urls = new Set();
  for (const match of source.matchAll(/https?:\/\/[^\s"'<>]+/g)) {
    const url = stripTrailingPunctuation(decodeUrl(match[0]));
    if (shouldLocalizeUrl(url)) urls.add(url);
  }
  return [...urls];
};

const replaceAllUrlVariants = (source, originalUrl, replacement) => {
  const escapedAmp = originalUrl.replaceAll("&", "&amp;");
  const escapedSlash = originalUrl.replaceAll("/", "\\/");
  const escapedAmpAndSlash = escapedAmp.replaceAll("/", "\\/");
  return source
    .replaceAll(originalUrl, replacement)
    .replaceAll(escapedAmp, replacement)
    .replaceAll(escapedSlash, replacement)
    .replaceAll(escapedAmpAndSlash, replacement);
};

const downloadAsset = async (url) => {
  const key = urlKey(url);
  if (downloadedByKey.has(key)) return downloadedByKey.get(key);

  const provisionalPath = localAssetPathFor(url);
  if (await fileExists(provisionalPath)) {
    downloadedByKey.set(key, provisionalPath);
    return provisionalPath;
  }

  const response = await fetch(url, { headers: requestHeaders });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

  const contentType = response.headers.get("content-type") || "";
  const localPath = localAssetPathFor(url, contentType);
  await mkdir(path.dirname(localPath), { recursive: true });

  const body = Buffer.from(await response.arrayBuffer());
  await writeFile(localPath, body);
  downloadedByKey.set(key, localPath);

  if (contentType.includes("text/css") || localPath.endsWith(".css")) {
    let css = body.toString("utf8");
    for (const nestedUrl of extractUrls(css)) {
      try {
        const nestedLocalPath = await downloadAsset(nestedUrl);
        const relativePath = path
          .relative(path.dirname(localPath), nestedLocalPath)
          .split(path.sep)
          .join("/");
        css = replaceAllUrlVariants(css, nestedUrl, relativePath);
      } catch (error) {
        failures.push({ url: nestedUrl, error: error.message });
      }
    }
    await writeFile(localPath, css, "utf8");
  }

  return localPath;
};

const runQueue = async (items, workerCount = 10) => {
  let cursor = 0;
  await Promise.all(
    Array.from({ length: workerCount }, async () => {
      while (cursor < items.length) {
        const item = items[cursor++];
        await item();
      }
    }),
  );
};

const removeBalancedDivById = (html, id) => {
  const idIndex = html.indexOf(`id="${id}"`);
  if (idIndex === -1) return html;
  const start = html.lastIndexOf("<div", idIndex);
  if (start === -1) return html;

  let cursor = start;
  let depth = 0;
  const tagPattern = /<\/?div\b[^>]*>/gi;
  tagPattern.lastIndex = start;

  for (const match of html.matchAll(tagPattern)) {
    if (match.index < start) continue;
    if (match[0].startsWith("</")) {
      depth -= 1;
      if (depth === 0) {
        return html.slice(0, start) + html.slice(match.index + match[0].length);
      }
    } else {
      depth += 1;
    }
    cursor = match.index + match[0].length;
  }

  return html.slice(0, cursor) + html.slice(cursor);
};

const removeElementByClass = (html, className) => {
  const classIndex = html.indexOf(className);
  if (classIndex === -1) return html;
  const start = html.lastIndexOf("<div", classIndex);
  if (start === -1) return html;

  let depth = 0;
  const tagPattern = /<\/?div\b[^>]*>/gi;
  tagPattern.lastIndex = start;

  for (const match of html.matchAll(tagPattern)) {
    if (match.index < start) continue;
    if (match[0].startsWith("</")) {
      depth -= 1;
      if (depth === 0) {
        return html.slice(0, start) + html.slice(match.index + match[0].length);
      }
    } else {
      depth += 1;
    }
  }

  return html;
};

const cleanPreviewChrome = (html) => {
  let output = removeBalancedDivById(html, "shorthand-preview-overlay");
  output = removeElementByClass(output, "PreviewFooter--outer");
  output = removeElementByClass(output, 'data-testid="PreviewFooter"');
  output = output.replace(/<script>\s*\(function\(\) \{\s*var o = document\.getElementById\("shorthand-preview-overlay"\);[\s\S]*?<\/script>\s*/g, "");
  output = output.replace(/<script[^>]+src="[^"]*footer\.[^"]*\.js"[^>]*><\/script>\s*/g, "");
  output = output.replace(/#shorthand-preview-overlay[\s\S]*?#shorthand-preview-overlay button:active \{[\s\S]*?\}\s*/g, "");
  output = output.replace(/body\.scroll-lock \{\s*overflow: hidden;\s*\}\s*/g, "");
  output = output.replace(/"trackTime": true/g, '"trackTime": false');
  output = output.replace(/"endpoint": "https:\/\/gateway\.shorthand\.com\/analytics\/story"/g, '"endpoint": ""');
  output = output.replace(/"isPreview": true/g, '"isPreview": false');
  return output;
};

const rewriteNavigation = (html) => {
  let output = html;
  for (const [sourceUrl, localFile] of routeByUrl.entries()) {
    output = replaceAllUrlVariants(output, sourceUrl, localFile);
  }
  output = output.replaceAll("https://shorthand.com/", "index.html");
  return output;
};

const normalizeFontsAndEmbeds = (html) => {
  let output = html;
  output = output.replace(/<meta name="robots" content="noindex">\s*/g, "");
  output = output.replace(/<link[^>]+rel="canonical"[^>]*>\s*/g, "");
  output = output.replace(/href="assets\/fonts\.googleapis\.com\/css-[^"]+"/g, 'href="assets/fonts.googleapis.com/google-fonts.css"');
  output = output.replace(
    /<link type="text\/css" rel="stylesheet" href="assets\/fonts\.googleapis\.com\/google-fonts\.css">/g,
    '<link rel="icon" href="favicon.ico"><link type="text/css" rel="stylesheet" href="assets/fonts.googleapis.com/google-fonts.css">',
  );
  output = output.replace(/url\("\/fonts\//g, 'url("fonts/');
  output = output.replace(/<script defer="" charset="utf-8" src="assets\/iframely\.shorthand\.com\/embed-[^"]+\.js"><\/script>/g, "");
  output = output.replace(/<script[^>]+src="https:\/\/analytics\.shorthand\.com\/analytics_4\.js"[^>]*><\/script>\s*/g, "");
  output = output.replace(
    /<iframe title="Chinese Opera History in Singapore"[^>]*data-iframely-url="assets\/iframely\.shorthand\.com\/sv8zySH-[^"]+"[^>]*><\/iframe>/g,
    '<iframe title="Chinese Opera History in Singapore" allow="autoplay *; accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;" allowfullscreen="" scrolling="no" src="https://www.youtube-nocookie.com/embed/cYWRnH7HBBU?rel=0&amp;playsinline=1" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;"></iframe>',
  );
  return output;
};

const addLocalFileFallback = (html) => {
  const fallback = `    <script>
      if (location.protocol === "file:") {
        document.documentElement.classList.add("LocalFileFallback");
      }
    </script>
    <style>
      html.LocalFileFallback .isAnimated > .Theme-BackgroundModel .AnimatedImage__fallback,
      html.LocalFileFallback .isAnimated > .Theme-BackgroundModel .AnimatedImage__fallbackOverlay {
        display: block !important;
      }

      html.LocalFileFallback .Theme-BackgroundModel sh-model {
        display: none !important;
      }
    </style>
`;

  if (html.includes("LocalFileFallback")) return html;
  return html.replace("</head>", `${fallback}  </head>`);
};

const ensureCommonAssets = async () => {
  const commonUrls = [
    "https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|PT+Serif:400,400i,700,700i&display=swap",
    "https://preview.shorthand.com/fonts/CircularXXSub-Book.woff",
    "https://preview.shorthand.com/fonts/CircularXXSub-Book.woff2",
    "https://preview.shorthand.com/favicon.ico",
    "https://preview.shorthand.com/themes/0-base/assets/logo.png",
  ];
  for (const url of commonUrls) {
    await downloadAsset(url);
  }
};

await mkdir(originalsDir, { recursive: true });
await ensureCommonAssets();

const pageSources = [];
for (const page of pages) {
  console.log(`Fetching ${page.outputFile} from ${page.url}`);
  const response = await fetch(page.url, { headers: requestHeaders });
  if (!response.ok) throw new Error(`${page.url}: ${response.status} ${response.statusText}`);
  const html = await response.text();
  const originalPath = path.join(originalsDir, `${page.id}.html`);
  await writeFile(originalPath, html, "utf8");
  pageSources.push({ page, html });
}

const assetsToDownload = new Set();
for (const { html } of pageSources) {
  for (const url of extractUrls(html)) assetsToDownload.add(url);
}

console.log(`Localizing ${assetsToDownload.size} unique asset URLs.`);
let complete = 0;
await runQueue(
  [...assetsToDownload].map((url) => async () => {
    try {
      await downloadAsset(url);
      complete += 1;
      if (complete % 25 === 0 || complete === assetsToDownload.size) {
        console.log(`  ${complete}/${assetsToDownload.size}`);
      }
    } catch (error) {
      failures.push({ url, error: error.message });
    }
  }),
);

for (const { page, html } of pageSources) {
  let output = html;
  for (const url of extractUrls(output)) {
    if (downloadedByKey.has(urlKey(url))) {
      output = replaceAllUrlVariants(output, url, downloadedByKey.get(urlKey(url)));
    }
  }
  output = cleanPreviewChrome(output);
  output = rewriteNavigation(output);
  output = normalizeFontsAndEmbeds(output);
  output = addLocalFileFallback(output);
  await writeFile(page.outputFile, output, "utf8");
  console.log(`Wrote ${page.outputFile}`);
}

await writeFile(
  "asset-download-report.json",
  JSON.stringify(
    {
      pages: pages.map(({ url, outputFile }) => ({ url, outputFile })),
      localizedAssetCount: downloadedByKey.size,
      failureCount: failures.length,
      failures,
    },
    null,
    2,
  ),
  "utf8",
);

console.log(`Done with ${failures.length} failures.`);

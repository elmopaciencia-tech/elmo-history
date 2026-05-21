import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const inputFile = "original-shorthand.html";
const outputFile = "index.html";
const assetsDir = "assets";

const html = await readFile(inputFile, "utf8");
let rewrittenHtml = html;
const downloaded = new Map();
const failures = [];

const entityDecode = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("\\u0026", "&")
    .replaceAll("\\/", "/");

const isLocalAssetUrl = (url) => {
  try {
    const parsed = new URL(url);
    return (
      parsed.hostname === "media.shorthand.com" ||
      parsed.hostname === "app.shorthand.com" ||
      parsed.hostname === "fonts.googleapis.com" ||
      parsed.hostname === "fonts.gstatic.com" ||
      parsed.hostname === "iframely.shorthand.com"
    );
  } catch {
    return false;
  }
};

const extensionFor = (url, contentType = "") => {
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname);
  if (ext) return ext;
  if (contentType.includes("text/css")) return ".css";
  if (contentType.includes("javascript")) return ".js";
  if (contentType.includes("font/woff2")) return ".woff2";
  if (contentType.includes("image/svg")) return ".svg";
  return ".bin";
};

const basenameFor = (url, contentType) => {
  const parsed = new URL(url);
  const rawBase = path.basename(parsed.pathname, path.extname(parsed.pathname)) || parsed.hostname;
  const cleanBase = rawBase.replace(/[^a-zA-Z0-9._-]+/g, "-").slice(0, 70);
  const hash = createHash("sha256").update(url).digest("hex").slice(0, 12);
  return `${cleanBase}-${hash}${extensionFor(url, contentType)}`;
};

const extractUrls = (source) => {
  const urls = new Set();
  const matches = source.matchAll(/https?:\/\/[^\s"'<>),]+/g);
  for (const match of matches) {
    const url = entityDecode(match[0]).replace(/[.;]+$/, "");
    if (isLocalAssetUrl(url)) urls.add(url);
  }
  return urls;
};

const replaceEveryVariant = (source, originalUrl, localPath) => {
  const escapedAmp = originalUrl.replaceAll("&", "&amp;");
  const escapedSlash = originalUrl.replaceAll("/", "\\/");
  const escapedAmpAndSlash = escapedAmp.replaceAll("/", "\\/");
  return source
    .replaceAll(originalUrl, localPath)
    .replaceAll(escapedAmp, localPath)
    .replaceAll(escapedSlash, localPath)
    .replaceAll(escapedAmpAndSlash, localPath);
};

const downloadOne = async (url) => {
  if (downloaded.has(url)) return downloaded.get(url);

  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type") || "";
  const domainDir = path.join(assetsDir, new URL(url).hostname.replace(/[^a-zA-Z0-9.-]/g, "-"));
  await mkdir(domainDir, { recursive: true });
  const filePath = path.join(domainDir, basenameFor(url, contentType));
  const body = Buffer.from(await response.arrayBuffer());
  await writeFile(filePath, body);
  const localPath = filePath.split(path.sep).join("/");
  downloaded.set(url, localPath);

  if (contentType.includes("text/css") || localPath.endsWith(".css")) {
    let css = body.toString("utf8");
    const cssUrls = [...extractUrls(css)];
    for (const cssUrl of cssUrls) {
      try {
        const nestedLocalPath = await downloadOne(cssUrl);
        const relativePath = path
          .relative(path.dirname(localPath), nestedLocalPath)
          .split(path.sep)
          .join("/");
        css = replaceEveryVariant(css, cssUrl, relativePath);
      } catch (error) {
        failures.push({ url: cssUrl, error: error.message });
      }
    }
    await writeFile(filePath, css, "utf8");
  }

  return localPath;
};

const runQueue = async (items, workerCount = 8) => {
  let cursor = 0;
  const workers = Array.from({ length: workerCount }, async () => {
    while (cursor < items.length) {
      const current = items[cursor++];
      try {
        const localPath = await downloadOne(current);
        rewrittenHtml = replaceEveryVariant(rewrittenHtml, current, localPath);
        process.stdout.write(".");
      } catch (error) {
        failures.push({ url: current, error: error.message });
        process.stdout.write("x");
      }
    }
  });
  await Promise.all(workers);
  process.stdout.write("\n");
};

const initialUrls = [...extractUrls(html)];
console.log(`Found ${initialUrls.length} localizable asset URLs.`);
await runQueue(initialUrls);

rewrittenHtml = rewrittenHtml
  .replace(/<script[^>]+src="https:\/\/analytics\.shorthand\.com\/analytics_4\.js"[^>]*><\/script>/g, "")
  .replace(/<link[^>]+rel="canonical"[^>]*>/g, "")
  .replace(/<meta name="robots" content="noindex">\s*/g, "");

await writeFile(outputFile, rewrittenHtml, "utf8");
await writeFile(
  "asset-download-report.json",
  JSON.stringify(
    {
      source: "https://preview.shorthand.com/y8NycyYcsiLD3nRA",
      outputFile,
      downloadedCount: downloaded.size,
      failureCount: failures.length,
      failures,
    },
    null,
    2,
  ),
  "utf8",
);

console.log(`Wrote ${outputFile}`);
console.log(`Downloaded ${downloaded.size} assets with ${failures.length} failures.`);

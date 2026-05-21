import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const fetchBuffer = async (url) => {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36",
    },
  });
  if (!response.ok) throw new Error(`${url}: ${response.status} ${response.statusText}`);
  return Buffer.from(await response.arrayBuffer());
};

const fontCssUrl =
  "https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|PT+Serif:400,400i,700,700i&display=swap";
const fontCssPath = "assets/fonts.googleapis.com/google-fonts.css";
await mkdir(path.dirname(fontCssPath), { recursive: true });

let fontCss = (await fetchBuffer(fontCssUrl)).toString("utf8");
const fontUrls = [...fontCss.matchAll(/https:\/\/fonts\.gstatic\.com\/[^)]+/g)].map((match) => match[0]);
await mkdir("assets/fonts.gstatic.com", { recursive: true });

for (const fontUrl of fontUrls) {
  const parsed = new URL(fontUrl);
  const ext = path.extname(parsed.pathname) || ".woff2";
  const hash = createHash("sha256").update(fontUrl).digest("hex").slice(0, 12);
  const filePath = `assets/fonts.gstatic.com/font-${hash}${ext}`;
  await writeFile(filePath, await fetchBuffer(fontUrl));
  fontCss = fontCss.replaceAll(fontUrl, `../fonts.gstatic.com/${path.basename(filePath)}`);
}

await writeFile(fontCssPath, fontCss, "utf8");

await mkdir("fonts", { recursive: true });
await writeFile("fonts/CircularXXSub-Book.woff2", await fetchBuffer("https://preview.shorthand.com/fonts/CircularXXSub-Book.woff2"));
await writeFile("fonts/CircularXXSub-Book.woff", await fetchBuffer("https://preview.shorthand.com/fonts/CircularXXSub-Book.woff"));
await writeFile("favicon.ico", await fetchBuffer("https://preview.shorthand.com/favicon.ico"));

let html = await readFile("index.html", "utf8");
html = html.replace(
  /href="assets\/fonts\.googleapis\.com\/css-[^"]+"/,
  'href="assets/fonts.googleapis.com/google-fonts.css"',
);
html = html.replace(
  /<link type="text\/css" rel="stylesheet" href="assets\/fonts\.googleapis\.com\/google-fonts\.css">/,
  '<link rel="icon" href="favicon.ico"><link type="text/css" rel="stylesheet" href="assets/fonts.googleapis.com/google-fonts.css">',
);
await writeFile("index.html", html, "utf8");

console.log("Fixed local font and favicon references.");

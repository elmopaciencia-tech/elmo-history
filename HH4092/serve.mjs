#!/usr/bin/env node
// Dependency-free local server for the built presentation (dist/).
// Usage: node serve.mjs [port] [folder]    Default: port 4173, folder ./dist
import {createServer} from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {networkInterfaces} from 'node:os';

const here = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.argv[2] || 4173);
const root = path.resolve(here, process.argv[3] || 'dist');
const host = process.env.HOST || '127.0.0.1';
const types = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.pdf': 'application/pdf', '.woff2': 'font/woff2', '.woff': 'font/woff', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm', '.md': 'text/markdown; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.csv': 'text/csv; charset=utf-8'};

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const rel = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    let file = path.resolve(root, rel || 'index.html');
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403); res.end('Forbidden'); return; }
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff'});
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'}); res.end('Not found');
  }
});
server.on('error', e => { console.error(e.code === 'EADDRINUSE' ? `Port ${port} is busy. Try: node serve.mjs ${port + 1}` : e.message); process.exitCode = 1; });
server.listen(port, host, () => {
  console.log(`The Reef That Balanced Its Books is running.\n\n  Story:     http://127.0.0.1:${port}/\n`);
  if (host === '0.0.0.0') {
    const ips = Object.values(networkInterfaces()).flat().filter(i => i && i.family === 'IPv4' && !i.internal).map(i => i.address);
    ips.forEach(ip => console.log(`  On this network: http://${ip}:${port}/`));
  }
  console.log('Keep this window open. Press Ctrl+C to stop.');
});

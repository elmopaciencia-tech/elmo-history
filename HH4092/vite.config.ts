import {defineConfig} from 'vite';
import {resolve} from 'node:path';

// Multi-page static build. base './' keeps every asset path relative so the
// dist folder can be served from any directory or moved to another laptop.
export default defineConfig({
  base: './',
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        sources: resolve(__dirname, 'sources.html')
      }
    }
  }
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Checker from 'vite-plugin-checker';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Checker()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  build: {
    outDir: path.resolve(process.cwd(), 'public'),
  },
  server: {
    // Ensure all requests fallback to index.html
    // This is important for client-side routing to work properly
    fs: {
      strict: false,
    },
    proxy: {
      // Add proxy configurations if necessary
    },
    // If you're using Vue Router, you may need to configure
    // the server to rewrite all non-file requests to your index.html
    // This is necessary for client-side routing to work properly
    // You can use Vite's middleware option to achieve this
    middlewareMode: 'html',
  },
});

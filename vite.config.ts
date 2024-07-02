import { fileURLToPath, URL } from 'node:url';
import md from 'unplugin-vue-markdown/vite';
import vue from '@vitejs/plugin-vue';
import ssr from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    ssr(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md({}),
  ],
});

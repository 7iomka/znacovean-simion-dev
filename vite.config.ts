import { fileURLToPath, URL } from 'node:url';
import md from 'unplugin-vue-markdown/vite';
import vue from '@vitejs/plugin-vue';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vike({
      prerender: true,
    }),
    md({}),
  ],
  css: {
    devSourcemap: true,
  },
}));

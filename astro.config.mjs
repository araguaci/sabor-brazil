import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://sabor-brazil.vercel.app',
  output: 'server',
  adapter: vercel(),
  markdown: {
    syntaxHighlight: false,
  },
});

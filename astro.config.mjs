import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://currentsuspect.me',
  outDir: 'docs',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});

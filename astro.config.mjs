import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site-wide config. `site` is required for canonical URLs, sitemap, and OG tags.
export default defineConfig({
  site: 'https://txttocsv.com',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});

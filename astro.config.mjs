// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://buildprivacypolicy.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});

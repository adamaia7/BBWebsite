// @ts-check
import { defineConfig } from 'astro/config';

// საიტი baubild.ge დომენზეა, ამიტომ base = / (დომენის ფესვი).
// სატესტო github.io მისამართზე დასაბრუნებლად: SITE_URL=https://adamaia7.github.io და BASE_PATH=/BBWebsite.
export default defineConfig({
  site: process.env.SITE_URL || 'https://baubild.ge',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});

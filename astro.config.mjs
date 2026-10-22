// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages-ზე საიტი https://adamaia7.github.io/bbwebsite/ მისამართზეა, ამიტომ base = /bbwebsite.
// baubild.ge დომენზე გადასვლისას: SITE_URL=https://baubild.ge და BASE_PATH=/ (იხ. README).
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://adamaia7.github.io',
  base: process.env.BASE_PATH ?? '/bbwebsite',
  trailingSlash: 'ignore',
});

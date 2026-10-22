// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages-ზე საიტი https://adamaia7.github.io/BBWebsite/ მისამართზეა (დიდი ასოებით), ამიტომ base = /BBWebsite.
// baubild.ge დომენზე გადასვლისას: SITE_URL=https://baubild.ge და BASE_PATH=/ (იხ. README).
export default defineConfig({
  site: process.env.SITE_URL || 'https://adamaia7.github.io',
  base: process.env.BASE_PATH || '/BBWebsite',
  trailingSlash: 'ignore',
});

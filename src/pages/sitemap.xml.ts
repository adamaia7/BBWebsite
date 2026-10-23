import type { APIRoute } from 'astro';
import { LANGS, homeUrl } from '../i18n';

// საიტის რუკა Google-ისთვის. ახალი გვერდის დამატებისას აქ ჩაამატე.
export const GET: APIRoute = ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const lastmod = new Date().toISOString().slice(0, 10);
  const alternates = LANGS.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(homeUrl(l))}"/>`,
  ).join('\n');
  const urls = LANGS.map(
    (lang) => `  <url>
    <loc>${abs(homeUrl(lang))}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(homeUrl('ka'))}"/>
  </url>`,
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

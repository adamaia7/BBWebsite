import type { APIRoute } from 'astro';
import { LANGS, homeUrl, type Lang } from '../i18n';
import { SERVICE_SLUGS, serviceUrl } from '../i18n/services';
import { GUIDE_SLUGS, guides, guideUrl } from '../i18n/guides';

// საიტის რუკა Google-ისთვის. ახალი გვერდის დამატებისას აქ ჩაამატე.
export const GET: APIRoute = ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  // lastmod მხოლოდ იქ, სადაც ნამდვილი თარიღი გვაქვს: სტატიის გამოქვეყნების თარიღი (published).
  // აწყობის თარიღს არ ვწერთ, რადგან ის ყოველ deploy-ზე ყველა გვერდზე იცვლება და Google ასეთ lastmod-ს აღარ ენდობა.
  const published = (slug: string) => guides.ka.find((g) => g.slug === slug)?.published;
  const newest = guides.ka.map((g) => g.published).sort().at(-1);
  // თითო გვერდი ყველა ენაზე: მთავარი + სერვისები + რჩევები
  const pages: { path: (l: Lang) => string; lastmod?: string }[] = [
    { path: homeUrl },
    ...SERVICE_SLUGS.map((slug) => ({ path: (l: Lang) => serviceUrl(l, slug) })),
    { path: (l: Lang) => guideUrl(l), lastmod: newest },
    ...GUIDE_SLUGS.map((slug) => ({ path: (l: Lang) => guideUrl(l, slug), lastmod: published(slug) })),
  ];
  const urls = pages
    .flatMap(({ path, lastmod }) =>
      LANGS.map(
        (lang) => `  <url>
    <loc>${abs(path(lang))}</loc>
${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ''}${LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(path(l))}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(path('ka'))}"/>
  </url>`,
      ),
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

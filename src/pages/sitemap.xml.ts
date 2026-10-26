import type { APIRoute } from 'astro';
import { LANGS, homeUrl, type Lang } from '../i18n';
import { SERVICE_SLUGS, serviceUrl } from '../i18n/services';

// საიტის რუკა Google-ისთვის. ახალი გვერდის დამატებისას აქ ჩაამატე.
export const GET: APIRoute = ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  // lastmod განზრახ არ არის: აწყობის თარიღი ყველა გვერდზე ყოველ deploy-ზე იცვლება და Google ასეთ
  // არაზუსტ lastmod-ს ენდობა აღარ. შეცვლის თარიღს თითო გვერდზე, როცა ნამდვილად გვექნება, მაშინ დავამატოთ.
  // თითო გვერდი ყველა ენაზე: მთავარი + სერვისები
  const pages: ((l: Lang) => string)[] = [homeUrl, ...SERVICE_SLUGS.map((slug) => (l: Lang) => serviceUrl(l, slug))];
  const urls = pages
    .flatMap((page) =>
      LANGS.map(
        (lang) => `  <url>
    <loc>${abs(page(lang))}</loc>
${LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(page(l))}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(page('ka'))}"/>
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

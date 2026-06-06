import type { APIRoute } from 'astro';

// EN / TR path pairs. EN lives at the root, TR under /tr (prefixDefaultLocale: false).
const pagePairs: { en: string; tr: string }[] = [
  { en: '/', tr: '/tr/' },
  { en: '/products', tr: '/tr/products' },
  { en: '/hardware', tr: '/tr/hardware' },
  { en: '/team', tr: '/tr/team' },
  { en: '/contact', tr: '/tr/contact' },
];

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://bite-systems.com')).origin;
  const abs = (path: string) => `${base}${path}`;

  // Each localized URL lists itself plus its alternate-language siblings.
  const entryFor = (loc: string, pair: { en: string; tr: string }) => {
    const alternates = [
      `    <xhtml:link rel="alternate" hreflang="en" href="${abs(pair.en)}" />`,
      `    <xhtml:link rel="alternate" hreflang="tr" href="${abs(pair.tr)}" />`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pair.en)}" />`,
    ].join('\n');
    return `  <url>\n    <loc>${abs(loc)}</loc>\n${alternates}\n  </url>`;
  };

  const urls = pagePairs
    .flatMap(pair => [entryFor(pair.en, pair), entryFor(pair.tr, pair)])
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

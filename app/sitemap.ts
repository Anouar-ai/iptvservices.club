import type { MetadataRoute } from 'next';

const SITE_URL = 'https://iptvservices.club';

// Only list URLs that resolve — listing 404s burns crawl budget and can trigger a crawl-quality review.
// Add entries back here as each route is implemented in app/.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = '2026-04-23';
  const pages: Array<{ path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '', priority: 1.0, freq: 'weekly' },
  ];

  return pages.map(({ path, priority, freq }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: freq,
    priority,
  }));
}

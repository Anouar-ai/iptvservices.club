import type { MetadataRoute } from 'next';

const SITE_URL = 'https://iptvservices.club';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines
      { userAgent: 'Googlebot',      allow: '/' },
      { userAgent: 'Bingbot',        allow: '/' },
      { userAgent: 'DuckDuckBot',    allow: '/' },
      { userAgent: 'YandexBot',      allow: '/' },

      // AI crawlers (GEO/AEO/LLMO) — explicitly allow so we get cited
      { userAgent: 'GPTBot',         allow: '/' },
      { userAgent: 'OAI-SearchBot',  allow: '/' },
      { userAgent: 'ChatGPT-User',   allow: '/' },
      { userAgent: 'PerplexityBot',  allow: '/' },
      { userAgent: 'Perplexity-User',allow: '/' },
      { userAgent: 'ClaudeBot',      allow: '/' },
      { userAgent: 'Claude-Web',     allow: '/' },
      { userAgent: 'anthropic-ai',   allow: '/' },
      { userAgent: 'Google-Extended',allow: '/' },
      { userAgent: 'CCBot',          allow: '/' },
      { userAgent: 'Applebot',       allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'Bytespider',     allow: '/' },
      { userAgent: 'Amazonbot',      allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },

      // Default
      { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/', '/checkout/success/', '/*?utm_*'] },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`],
    host: SITE_URL,
  };
}

import type { Metadata, Viewport } from 'next';
import { Oxanium, Source_Code_Pro } from 'next/font/google';
import './globals.css';

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-oxanium',
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-source-code-pro',
  display: 'swap',
});

const SITE_URL = 'https://iptvservices.club';
const SITE_NAME = 'IPTV Services';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Best IPTV Service 2026 — 24,000 4K Channels, $7.50/mo | Free 24h Trial',
    template: '%s | IPTV Services',
  },
  description:
    'The best IPTV service for 4K live TV: 24,000+ channels, 120,000+ movies & series, 99.9% uptime, 2 device connections, 24/7 support in 4 languages. Works on Firestick, Android, iOS, Smart TV, Mag. Plans from $7.50/month · 7-day money-back · free 24-hour trial.',
  keywords: [
    'best iptv', 'best iptv service', 'best iptv services', 'best iptv provider',
    'iptv services', 'iptv providers', 'iptv service provider', 'iptv service providers',
    'iptv usa', '4k iptv', '4k live iptv', 'iptv subscription', 'premium iptv',
    'iptv free trial', 'cheap iptv subscription', 'iptv for firestick', 'iptv smarters pro',
    'iptv uk', 'iptv europe', 'iptv m3u', 'iptv xtream codes', 'live tv streaming',
    'iptv reseller', 'sports iptv', 'iptv for android tv',
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  publisher: SITE_NAME,
  creator: SITE_NAME,
  category: 'Streaming / IPTV',
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Best IPTV Service 2026 — 24,000 4K Channels | Free 24h Trial',
    description:
      'Premium IPTV in 4K: 24,000+ channels, 120,000+ VOD, EPG and 72-hour catch-up, 99.9% uptime. Works on Firestick, Android, iOS, Smart TV and Mag. Plans from $7.50/month.',
    locale: 'en_US',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Best IPTV Services — 24,000 4K live channels, 120,000 VOD titles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IPTV Service 2026 — 24,000 4K Channels | Free 24h Trial',
    description:
      'The best IPTV service: 24,000+ channels, 120,000+ VOD, 99.9% uptime, 24/7 support. Plans from $7.50/month. Start your free 24-hour trial — no card required.',
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  // Only render verification tags when real codes are set — avoids shipping literal
  // "REPLACE_WITH_…" placeholders into <meta> tags in production.
  verification: {
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION } }
      : {}),
  },
  other: {
    'theme-color': '#0B0B0F',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0B0F',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`dark ${oxanium.variable} ${sourceCodePro.variable}`} style={{ ['--font-display' as any]: 'var(--font-oxanium)' }}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={oxanium.className}>
        {children}
        {/* Global JSON-LD: Organization + WebSite (sitelinks searchbox) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                '@id': `${SITE_URL}/#organization`,
                name: SITE_NAME,
                legalName: 'IPTV Services',
                alternateName: ['IPTV Services Club', 'iptvservices.club', 'Best IPTV Services'],
                url: SITE_URL,
                logo: {
                  '@type': 'ImageObject',
                  url: `${SITE_URL}/logo.png`,
                  width: 512, height: 512,
                },
                image: `${SITE_URL}/og.jpg`,
                description:
                  'IPTV Services is a premium IPTV service provider offering 24,000+ live channels, 120,000+ on-demand titles in 4K/FHD/HD, 99.9% uptime and 24/7 multilingual support across 60+ countries. Plans from $7.50 per month.',
                slogan: 'The best IPTV service, delivered in 4K.',
                foundingDate: '2018',
                numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 25, maxValue: 75 },
                areaServed: [
                  { '@type': 'Country', name: 'United States' },
                  { '@type': 'Country', name: 'United Kingdom' },
                  { '@type': 'Country', name: 'Canada' },
                  { '@type': 'Country', name: 'Germany' },
                  { '@type': 'Country', name: 'France' },
                  { '@type': 'Country', name: 'Spain' },
                  { '@type': 'Country', name: 'Italy' },
                  { '@type': 'Country', name: 'Netherlands' },
                  { '@type': 'Country', name: 'United Arab Emirates' },
                  { '@type': 'Country', name: 'Australia' },
                ],
                knowsAbout: [
                  'IPTV', 'Internet Protocol Television', '4K live TV streaming', 'live TV streaming',
                  'M3U playlists', 'Xtream Codes', 'EPG', 'catch-up TV', 'HEVC', 'AV1',
                  'IPTV Smarters Pro', 'TiviMate', 'Smart IPTV', 'IPTV on Firestick',
                  'IPTV in USA', 'IPTV in UK', 'IPTV in Europe', 'IPTV in MENA',
                ],
                knowsLanguage: ['en', 'es', 'fr', 'ar'],
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9', reviewCount: '4872', bestRating: '5', worstRating: '1',
                  itemReviewed: { '@id': `${SITE_URL}/#organization` },
                },
                sameAs: [
                  'https://t.me/iptvservicesclub',
                ],
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    availableLanguage: ['English', 'Spanish', 'French', 'Arabic'],
                    url: `${SITE_URL}/contact`,
                    hoursAvailable: {
                      '@type': 'OpeningHoursSpecification',
                      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                      opens: '00:00', closes: '23:59',
                    },
                  },
                  {
                    '@type': 'ContactPoint',
                    contactType: 'sales',
                    availableLanguage: ['English'],
                    url: `${SITE_URL}/pricing`,
                  },
                  {
                    '@type': 'ContactPoint',
                    contactType: 'technical support',
                    availableLanguage: ['English', 'Spanish', 'French', 'Arabic'],
                    url: `${SITE_URL}/contact`,
                  },
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                url: SITE_URL,
                name: SITE_NAME,
                publisher: { '@id': `${SITE_URL}/#organization` },
                // potentialAction SearchAction removed until /search route exists —
                // pointing it at a non-existent endpoint fails Sitelinks Searchbox validation.
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}

# IPTV Services — iptvservices.club

Next.js 14 (App Router) + TypeScript + Tailwind. SEO/AEO/GEO/AIO/LLMO-optimized homepage with conversion-driven copywriting for the "best IPTV services" keyword cluster.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Project structure

```
app/
  layout.tsx         # Global <head>, metadata, Organization + WebSite JSON-LD
  page.tsx           # Homepage (Hero → Features → Channels → Pricing → Devices → HowTo → Trial → Reviews → FAQ → CTA)
  robots.ts          # Robots directives — allows all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, …)
  sitemap.ts         # XML sitemap
  globals.css        # Tailwind + design tokens
  not-found.tsx      # Branded 404
components/
  Header.tsx
  Footer.tsx
lib/
  content.ts         # Plans, features, FAQs, testimonials (single source of truth)
public/
  llms.txt           # AI engine discovery file (LLMO/GEO)
  manifest.webmanifest
  security.txt
  ads.txt
```

## Assets you still need to add (placeholders referenced)

Add these to `public/`:
- `og.jpg` (1200×630) — Open Graph preview
- `logo.png` — org logo
- `favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `maskable-512.png`

## SEO/AEO/GEO/AIO/LLMO — what's already built in

See **SEO-AUDIT.md** for the full audit and fix log.

Highlights:
- Complete `Metadata` API + canonical + OG + Twitter + hreflang
- 5 schema.org JSON-LD blocks: Organization, WebSite (with SearchAction), Product + AggregateRating + Reviews + AggregateOffer, FAQPage, Service, HowTo, BreadcrumbList
- `llms.txt` for AI engine citation
- `robots.ts` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, Amazonbot, Meta-ExternalAgent, Bytespider
- Semantic HTML5: `<header>`, `<main>`, `<section aria-labelledby>`, `<nav>`, `<footer>`, `<ol>`, `<article>`, `<figure>`/`<figcaption>`
- Passage-level answers in FAQ (AEO)
- Security headers (HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)

## Next steps checklist

- [ ] Generate OG image (1200×630) and favicons
- [ ] Replace `REPLACE_WITH_GSC_VERIFICATION_CODE` in `app/layout.tsx`
- [ ] Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools
- [ ] Wire `/checkout`, `/free-trial`, `/channels`, `/pricing`, `/faq`, `/contact`, `/blog` pages (slugs already in sitemap)
- [ ] Add real Trustpilot / Google reviews widget
- [ ] Set up Plausible or GA4 with Core Web Vitals reporting
- [ ] Enable CDN (Vercel, Cloudflare) and Brotli

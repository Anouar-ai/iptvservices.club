export const SITE = {
  url: 'https://iptvservices.club',
  name: 'IPTV Services',
  tagline: 'The best IPTV service, delivered in 4K.',
};

export const STATS = [
  { k: '24,000+', v: 'Live channels' },
  { k: '120,000+', v: 'Movies & series' },
  { k: '99.9%',   v: 'Uptime' },
  { k: '60+',     v: 'Countries' },
];

// Features — short, specific, keyword-weaved, no emoji; icon names come from components/Icon.tsx
export const FEATURES = [
  {
    icon: 'tv',
    title: '24,000 channels across 60+ countries',
    body: 'Sports, movies, news, kids and live events from the US, UK, Canada, Europe, MENA, LATAM and Asia — one of the deepest IPTV channel lists in the industry, all behind a single login.',
  },
  {
    icon: 'film',
    title: 'A 120,000-title on-demand library',
    body: 'Blockbusters, full series, documentaries and international releases added weekly. Organized by language, genre and rating so you spend less time browsing and more time watching.',
  },
  {
    icon: 'resolution',
    title: '4K IPTV with adaptive bitrate',
    body: 'Crystal 4K playback on fiber, zero freezing on weaker networks. The stream quality auto-adjusts frame by frame — exactly what the best 4K IPTV providers should deliver.',
  },
  {
    icon: 'shield',
    title: '99.9% uptime SLA · dual-stack failover',
    body: 'Dual-stack (IPv4/IPv6) infrastructure across US, Europe and MENA edge nodes, with automatic failover between regions. Measured at 99.9% monthly uptime across the last 180 days — so live events, match days and finale nights do not go dark.',
  },
  {
    icon: 'epg',
    title: 'Full EPG and 72-hour catch-up TV',
    body: '7-day electronic program guide plus up to 72 hours of catch-up on premium channels. Never miss a live game, a morning show or a breaking headline again.',
  },
  {
    icon: 'support',
    title: 'Human support, 24/7 in 4 languages',
    body: 'Real support in English, Spanish, French and Arabic. Average reply under 3 minutes on live chat, WhatsApp, Telegram and email.',
  },
];

// 4 plans — every plan shares the same feature set, differentiated only by commitment length.
const BASE_PERKS = [
  '24,000+ Live Channels',
  '120,000+ Movies & Series',
  'HD & 4K Streaming Quality',
  'Premium Live Sports Coverage',
  '99.9% Server Uptime',
  '2 Device Connections',
  '24/7 Customer Support',
  'Instant Activation',
];

export const PLANS = [
  {
    slug: '1-month',
    name: '1 Month',
    duration: 'Billed monthly',
    price: 16,
    monthly: 16,
    save: 'No commitment',
    perks: BASE_PERKS,
    highlight: false,
  },
  {
    slug: '3-months',
    name: '3 Months',
    duration: 'Billed 3 months',
    price: 39,
    monthly: 13,
    save: 'Save 19%',
    perks: BASE_PERKS,
    highlight: false,
  },
  {
    slug: '6-months',
    name: '6 Months',
    duration: 'Billed 6 months',
    price: 60,
    monthly: 10,
    save: 'Save 38%',
    perks: BASE_PERKS,
    highlight: false,
  },
  {
    slug: '12-months',
    name: '12 Months',
    duration: 'Billed yearly',
    price: 90,
    wasPrice: 144,
    monthly: 7.50,
    save: 'Save 37%',
    perks: [...BASE_PERKS, 'Priority Support'],
    highlight: true,
  },
];

export const DEVICES = [
  'Amazon Firestick', 'Fire TV', 'Android TV', 'Samsung Smart TV',
  'LG webOS', 'iPhone', 'iPad', 'Apple TV',
  'Mag 254/322/424', 'Enigma2', 'Nvidia Shield', 'Windows', 'macOS',
];

export const STEPS = [
  { n: '01', title: 'Choose an IPTV plan', body: 'Pay with card, PayPal, Apple Pay or crypto. Secure SSL checkout in under 60 seconds — no long forms, no phone call.' },
  { n: '02', title: 'Get your login by email', body: 'Your M3U link and Xtream Codes land in your inbox within 5 minutes, automatically, 24/7.' },
  { n: '03', title: 'Stream 4K on any device', body: 'Paste into IPTV Smarters Pro, TiviMate or any M3U-compatible player on Firestick, Android, iOS, Smart TV or Mag. That is it.' },
];

// One hero testimonial + three supporting — asymmetric, editorial.
export const HERO_QUOTE = {
  body: 'I cut my cable bill and saved $147 every month. Sunday football, international soccer, combat sports — zero buffering, all in 4K. This is the service cable has been trying to copy for twenty years.',
  name: 'Michael R.',
  role: 'Firestick · Texas',
};

export const TESTIMONIALS = [
  { name: 'Sophie L.', role: 'Smart TV · London',  body: 'EPG and catch-up are what sold me. UK news, international sport and French-language channels in one app, support replies in minutes.' },
  { name: 'Carlos M.', role: 'Android · Madrid',   body: 'Spanish top-flight football in 4K, major live events included, and the on-demand library is enormous. Best IPTV I have used in three years.' },
  { name: 'Aisha K.',  role: 'iOS · Dubai',        body: 'Full MENA channel coverage, regional sports and a huge on-demand library with Arabic subtitles. The trial convinced me in an hour.' },
];

export const FAQS = [
  { q: 'What is IPTV and how does it work?', a: 'IPTV (Internet Protocol Television) delivers live TV and on-demand video over the public internet instead of cable, satellite or terrestrial broadcast. A subscriber receives login credentials — usually an M3U playlist URL or Xtream Codes — loads them into a compatible IPTV player such as IPTV Smarters Pro or TiviMate, and streams channels on any internet-connected device.' },
  { q: 'How do I choose the best IPTV service?', a: 'The best IPTV service combines five things: a free trial, a published uptime SLA (99% or higher), at least 20,000 live channels across your target markets, native 4K on premium channels, and 24/7 human support with sub-5-minute reply times. Skip any provider without a billing page, a written refund policy or verifiable device compatibility.' },
  { q: 'What is 4K IPTV?', a: '4K IPTV delivers live TV at 3840×2160 resolution — roughly four times the pixel count of Full HD — typically encoded in H.265/HEVC or AV1 to keep bandwidth manageable. A stable 25 Mbps connection is recommended per 4K stream. Most premium channels broadcast in 4K only on specific events; the rest stream in 1080p FHD.' },
  { q: 'What is the difference between IPTV and cable TV?', a: 'Cable TV is broadcast simultaneously to every subscriber over coaxial cable or fibre, with a fixed channel lineup and no native on-demand layer. IPTV delivers each stream as internet packets on demand — which enables catch-up TV, VOD, unicast 4K, and access from any internet-connected device rather than a single set-top box.' },
  { q: 'How much does IPTV cost per month?', a: 'IPTV subscriptions typically range from $7 to $20 per month. Shorter commitments cost more per month; annual plans are usually cheapest. IPTV Services plans are $16 per month on rolling monthly billing, down to $7.50 per month on a 12-month plan — every plan includes the same 24,000 channels and 120,000 on-demand titles.' },
  { q: 'Does IPTV work with a VPN?', a: 'Yes. IPTV streams use standard internet protocols and are compatible with every major VPN (NordVPN, ExpressVPN, Surfshark, Mullvad, and others). For best results, connect to a VPN server in the country whose channels you want to watch — the EPG and catch-up library will then align to that region.' },
  { q: 'Which IPTV app should I use?', a: 'For Firestick and Android TV, TiviMate has the best EPG and channel-list UX. For Android and iOS phones, IPTV Smarters Pro is the standard. For Apple TV, GSE Smart IPTV or iPlayTV. For Mag boxes, the built-in player or Perfect Player. All of these load M3U or Xtream Codes credentials in under five minutes.' },
  { q: 'How do I choose a reliable IPTV provider?', a: 'Choose IPTV providers that offer a free trial, a 7-day money-back guarantee, at least 20,000 channels, 4K streams, a published uptime SLA and 24/7 human support. Avoid resellers with no billing page, no public refund policy or unverifiable device compatibility — they typically disappear within months.' },
  { q: 'Is IPTV legal?', a: 'IPTV as a technology is fully legal in every country. The legality of any specific IPTV service depends on content licensing in your jurisdiction — we recommend reviewing local laws and using a reputable VPN for privacy, as with any online streaming service.' },
  { q: 'Do you offer a free IPTV trial?', a: 'Yes — a 24-hour free IPTV trial with no credit card required. Request on the trial page and credentials arrive in your inbox within 5 minutes, 24/7.' },
  { q: 'Which devices are supported?', a: 'IPTV Services works on Amazon Firestick, Fire TV, Android TV, Android phones, iPhone, iPad, Apple TV, Samsung and LG Smart TVs, Mag 254/322/424, Enigma2 (Vu+, Dreambox), Nvidia Shield, Windows and macOS — any device that supports M3U or Xtream Codes playlists.' },
  { q: 'What internet speed do I need for IPTV?', a: 'A minimum of 10 Mbps is required for HD IPTV streams; 25 Mbps is recommended for 4K UHD. Wired Ethernet or a 5 GHz Wi-Fi connection is strongly recommended for stable, buffer-free playback.' },
  { q: 'How fast is delivery after payment?', a: 'Your IPTV login arrives by email within 5 minutes of payment, automatically, 24/7. If the email does not land, live chat responds in under 3 minutes on WhatsApp, Telegram or web chat.' },
  { q: 'Which payment methods are accepted?', a: 'IPTV Services accepts Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay and cryptocurrency (Bitcoin, Ethereum and USDT). Every transaction is SSL-encrypted.' },
  { q: 'Is there a money-back guarantee?', a: 'Every IPTV subscription plan includes a 7-day money-back guarantee — full refund, no forms, no questions.' },
  { q: 'How many devices can I stream on at once?', a: 'Each IPTV subscription includes 2 simultaneous device connections. Your credentials install on unlimited devices; up to two can stream at the same time. Extra simultaneous connections are available at a discount.' },
  { q: 'Does 4K UHD and live event access cost extra?', a: 'No. Premium 4K UHD streams are included on annual plans, and major live sports and pay-per-view events are bundled with the subscription when available — no separate purchase required.' },
  { q: 'Will my IPTV subscription work abroad?', a: 'Yes — IPTV streams are delivered over the internet, so your subscription works worldwide over any stable internet connection. A VPN is recommended for consistent performance, as with most streaming services.' },
  { q: 'Do you offer an IPTV reseller program?', a: 'Yes. Our IPTV reseller program starts at 10 credits with bulk pricing, white-label branding, a dedicated account manager and 24/7 support. Contact us for panel access and margin details.' },
];

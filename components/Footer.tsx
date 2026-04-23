import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/[0.06] bg-ink-900 pb-20 md:pb-16">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-fire-500"></span>
            <span className="text-[15px] font-semibold tracking-[-0.01em]">IPTV Services</span>
          </div>
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/60">
            Premium IPTV for cord-cutters. 22,000+ live channels, 120,000+ on-demand titles, 99.9% uptime.
            Trusted in 60+ countries.
          </p>
        </div>

        <FooterCol title="Product" items={[
          ['Pricing', '#pricing'],
          ['Features', '#features'],
          ['Channels', '/channels'],
          ['Free 24h trial', '#free-trial'],
          ['Reseller', '/reseller'],
        ]} />

        <FooterCol title="Support" items={[
          ['FAQ', '#faq'],
          ['Contact', '/contact'],
          ['Setup guides', '/devices'],
          ['Refund policy', '/refund-policy'],
        ]} />

        <FooterCol title="Legal" items={[
          ['Terms', '/terms'],
          ['Privacy', '/privacy'],
          ['DMCA', '/dmca'],
          ['About', '/about'],
        ]} />
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-[12px] text-white/45 sm:flex-row">
          <p>© {year} IPTV Services · iptvservices.club</p>
          <p>English · Español · Français · العربية</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">{title}</h3>
      <ul className="space-y-2.5 text-[14px] text-white/75">
        {items.map(([label, href]) => (
          <li key={label}><Link href={href} className="transition hover:text-white">{label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

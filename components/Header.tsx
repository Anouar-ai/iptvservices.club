import Link from 'next/link';
import { Icon } from './Icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink-900/80 backdrop-blur-md">
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Primary">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="IPTV Services — Home">
          <span aria-hidden="true" className="grid h-2 w-2 place-items-center rounded-full bg-fire-500 shadow-[0_0_12px_rgba(245,165,36,0.85)]"></span>
          <span className="text-[15px] font-semibold tracking-[-0.01em]">IPTV Services</span>
        </Link>

        <ul className="hidden items-center gap-9 text-[14px] text-white/70 md:flex">
          <li><Link href="#pricing"     className="hover:text-white">Pricing</Link></li>
          <li><Link href="#features"    className="hover:text-white">Features</Link></li>
          <li><Link href="#devices"     className="hover:text-white">Devices</Link></li>
          <li><Link href="#faq"         className="hover:text-white">FAQ</Link></li>
        </ul>

        <div className="flex items-center gap-2.5">
          <Link href="#free-trial" className="hidden text-[14px] font-medium text-white/80 hover:text-white sm:inline">Free trial</Link>
          <Link href="#pricing" className="btn-primary !py-2 !px-4 !text-[13px]">
            Get started <Icon name="arrow" size={14} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

import Link from 'next/link';
import { Icon } from './Icon';

export default function StickyCTA() {
  return (
    <div
      aria-hidden="false"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-900/95 px-4 py-3 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 md:gap-6">
        <div className="md:flex md:items-baseline md:gap-4">
          <div className="text-[11px] uppercase tracking-[0.18em] text-white/55">From</div>
          <div className="text-[17px] font-semibold tracking-tight md:text-[18px]">
            $7.50<span className="text-sm font-normal text-white/60">/month</span>
          </div>
          <div className="hidden text-[13px] text-white/55 md:block">· 24,000+ channels · 4K · 7-day money-back</div>
        </div>
        <Link href="#pricing" className="btn-primary flex-1 justify-center !py-3 !text-[14px] md:flex-initial md:!py-2.5 md:!text-[13px]">
          Get started <Icon name="arrow" size={14} />
        </Link>
      </div>
    </div>
  );
}

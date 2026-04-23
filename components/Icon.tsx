import type { ReactElement, SVGProps } from 'react';

type IconName =
  | 'tv' | 'film' | 'resolution' | 'shield' | 'devices' | 'refund'
  | 'epg' | 'support' | 'check' | 'star' | 'arrow' | 'play'
  | 'globe' | 'lightning' | 'wallet' | 'clock' | 'sparkle' | 'chevron'
  | 'whatsapp' | 'card';

const P = { strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const paths: Record<IconName, ReactElement> = {
  tv: (
    <g {...P} stroke="currentColor" fill="none">
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </g>
  ),
  film: (
    <g {...P} stroke="currentColor" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8h4M3 12h4M3 16h4M17 8h4M17 12h4M17 16h4M10 8h4v8h-4z" />
    </g>
  ),
  resolution: (
    <g {...P} stroke="currentColor" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 10v4M9 10v4M7 12h2M12 10v4M14 10v4M12 12h2M17 10v4M17 10h2a0 0 0 0 1 0 0v4h-2" />
    </g>
  ),
  shield: (
    <g {...P} stroke="currentColor" fill="none">
      <path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </g>
  ),
  devices: (
    <g {...P} stroke="currentColor" fill="none">
      <rect x="2" y="5" width="14" height="10" rx="1.5" />
      <rect x="14" y="9" width="8" height="11" rx="1.5" />
      <path d="M6 18h8" />
    </g>
  ),
  refund: (
    <g {...P} stroke="currentColor" fill="none">
      <path d="M21 12a9 9 0 1 1-3.1-6.8" />
      <path d="M21 4v5h-5" />
    </g>
  ),
  epg: (
    <g {...P} stroke="currentColor" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4M8 14h3M13 14h3M8 18h3M13 18h3" />
    </g>
  ),
  support: (
    <g {...P} stroke="currentColor" fill="none">
      <path d="M4 12a8 8 0 1 1 16 0v5a3 3 0 0 1-3 3h-1v-7h4M4 12v5a3 3 0 0 0 3 3h1v-7H4" />
    </g>
  ),
  check: (
    <g {...P} stroke="currentColor" fill="none">
      <path d="m5 12 4.5 4.5L19 7" />
    </g>
  ),
  star: (
    <path fill="currentColor" d="M12 2.5l2.97 6.02 6.64.96-4.8 4.68 1.13 6.61L12 17.77l-5.94 3.12 1.13-6.61-4.8-4.68 6.64-.96L12 2.5z" />
  ),
  arrow: (
    <g {...P} stroke="currentColor" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </g>
  ),
  play: (
    <path fill="currentColor" d="M8 5.5v13l11-6.5L8 5.5z" />
  ),
  globe: (
    <g {...P} stroke="currentColor" fill="none">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
    </g>
  ),
  lightning: (
    <path fill="currentColor" d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
  ),
  wallet: (
    <g {...P} stroke="currentColor" fill="none">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M16 13h2M3 10h18" />
    </g>
  ),
  clock: (
    <g {...P} stroke="currentColor" fill="none">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </g>
  ),
  sparkle: (
    <path fill="currentColor" d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
  ),
  chevron: (
    <g {...P} stroke="currentColor" fill="none">
      <path d="m6 9 6 6 6-6" />
    </g>
  ),
  whatsapp: (
    <path fill="currentColor" d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.3 8.3 0 1 1 12 20.3z" />
  ),
  card: (
    <g {...P} stroke="currentColor" fill="none">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <path d="M2.5 10h19M6 15h3" />
    </g>
  ),
};

export function Icon({ name, className, size = 20, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

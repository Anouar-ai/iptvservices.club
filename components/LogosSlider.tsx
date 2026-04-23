'use client';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const logos = [
  { id: 'amazon-fire-tv', description: 'Amazon Fire TV', image: '/logos/Amazon-Fire-TV.svg', className: 'h-5 w-auto' },
  { id: 'android',        description: 'Android',        image: '/logos/Android.svg',        className: 'h-4 w-auto' },
  { id: 'apple-tv',       description: 'Apple TV',       image: '/logos/Apple-TV.svg',       className: 'h-[18px] w-auto' },
  { id: 'chromecast',     description: 'Chromecast',     image: '/logos/Chromecast.svg',     className: 'h-5 w-auto' },
  { id: 'lg',             description: 'LG',             image: '/logos/LG.svg',             className: 'h-[18px] w-auto' },
  { id: 'hisense',        description: 'Hisense',        image: '/logos/Hisense.svg',        className: 'h-[14px] w-auto' },
  { id: 'nvidia',         description: 'NVIDIA Shield',  image: '/logos/nvidia-bigger.svg',  className: 'h-4 w-auto' },
  { id: 'ios',            description: 'iOS',            image: '/logos/ios-bigger.svg',     className: 'h-4 w-auto' },
];

export function LogosSlider() {
  return (
    <div className="relative h-[72px] w-full overflow-hidden">
      <InfiniteSlider className="flex h-full w-full items-center" duration={30} gap={64}>
        {logos.map(logo => (
          <div key={logo.id} className="flex w-32 items-center justify-center opacity-70 transition hover:opacity-100">
            <img src={logo.image} alt={logo.description} className={logo.className} loading="lazy" />
          </div>
        ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className="pointer-events-none absolute left-0 top-0 h-full w-[160px]"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute right-0 top-0 h-full w-[160px]"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}

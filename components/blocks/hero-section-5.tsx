'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const deviceLogos = [
  { src: '/logos/Amazon-Fire-TV.svg', alt: 'Amazon Fire TV', h: 'h-5' },
  { src: '/logos/Android.svg',        alt: 'Android',        h: 'h-4' },
  { src: '/logos/Apple-TV.svg',       alt: 'Apple TV',       h: 'h-[18px]' },
  { src: '/logos/Chromecast.svg',     alt: 'Chromecast',     h: 'h-5' },
  { src: '/logos/LG.svg',             alt: 'LG',             h: 'h-[18px]' },
  { src: '/logos/Hisense.svg',        alt: 'Hisense',        h: 'h-[14px]' },
  { src: '/logos/nvidia-bigger.svg',  alt: 'NVIDIA Shield',  h: 'h-4' },
  { src: '/logos/ios-bigger.svg',     alt: 'iOS',            h: 'h-4' },
];

export function HeroSection() {
  return (
    // Wrapper is a <div> — page.tsx already provides the single <main id="main">.
    <div className="overflow-x-hidden">
      <section>
        <div className="relative py-24 md:pb-32 lg:pb-36 lg:pt-56">
          {/* Background video card */}
          <div className="absolute inset-1 aspect-[2/3] overflow-hidden rounded-3xl border border-white/5 sm:aspect-video lg:rounded-[3rem]">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/og.jpg"
              className="size-full object-cover opacity-60 lg:opacity-75"
              src="/video/hero.webm"
            />
            {/* Readability gradient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/40 to-ink-900"
            />
          </div>

          {/* Foreground copy */}
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <span className="kicker">Streaming since 2018 · 60+ countries</span>
              <h1 className="h1 mt-6 max-w-3xl text-balance">
                The IPTV service cable has been trying to copy for <span className="text-fire-500">twenty years.</span>
              </h1>
              <p className="lead mt-7 max-w-2xl text-balance lg:mx-0">
                24,000 live channels. 120,000 on-demand titles in 4K. Two logins, every screen — from <strong className="font-semibold text-white">$7.50 a month</strong>. Activation in under five minutes, or your money back.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Link href="#pricing" className="btn-primary">
                  <span className="whitespace-nowrap">See plans from $7.50</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link href="#free-trial" className="btn-ghost">
                  <span className="whitespace-nowrap">Try 24 hours free</span>
                </Link>
              </div>

              {/* Micro-trust strip — sits close to CTAs to reduce click anxiety */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12.5px] text-white/55 lg:justify-start">
                <span className="inline-flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-fire-500" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
                  No credit card for trial
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-fire-500" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
                  7-day money-back
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-fire-500" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>
                  Cancel anytime
                </span>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4 text-[13px] text-white/55 lg:justify-start">
                <div className="flex items-center gap-1 text-fire-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.5l2.97 6.02 6.64.96-4.8 4.68 1.13 6.61L12 17.77l-5.94 3.12 1.13-6.61-4.8-4.68 6.64-.96L12 2.5z" />
                    </svg>
                  ))}
                </div>
                <span className="tabular-nums"><span className="font-semibold text-white">4.9</span> from <span className="font-semibold text-white">4,872</span> subscribers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powering strip */}
      <section className="pb-2">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:border-white/10 md:pr-6">
              <p className="text-center text-sm text-white/55 md:text-end">Works on every major device</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider duration={40} durationOnHover={20} gap={112}>
                {deviceLogos.map((logo) => (
                  <div key={logo.alt} className="flex items-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`mx-auto ${logo.h} w-fit opacity-70 transition hover:opacity-100`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </InfiniteSlider>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink-900" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink-900" />
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

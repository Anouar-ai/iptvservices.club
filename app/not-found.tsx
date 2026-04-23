import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="text-sm uppercase tracking-widest text-accent-500">Error 404</p>
        <h1 className="mt-3 text-4xl font-black">We couldn't find that channel.</h1>
        <p className="mt-3 max-w-md text-white/75">The page you are looking for is off the air. Head back to the homepage to continue streaming.</p>
        <Link href="/" className="btn-primary mt-6 inline-flex">← Back to homepage</Link>
      </div>
    </main>
  );
}

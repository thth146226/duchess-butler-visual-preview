/**
 * Footer.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Footer with navigation links (Server Component)
 */

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gold-soft pt-54 pb-70 text-umber">
      <div className="wrap foot grid gap-30 md:grid-cols-3">
        {/* Brand & description */}
        <div>
          <span className="brand block text-1.3rem letter-spacing-06 font-400 text-ink mb-2.5">
            Duchess <span className="text-gold">&amp;</span> Butler
          </span>
          <p className="small max-w-34 leading-1.65">
            The original tablescaping company.* Curated tableware hire for weddings, brand events and private dining — 126,000+ pieces, styled since 2015.
          </p>
          <p className="small mt-3.5 opacity-70 leading-1.65">
            *Self-declared attribution, per existing About page. Prototype: links and forms are simulated.
          </p>
        </div>

        {/* Primary links */}
        <div className="flex flex-col gap-1">
          <Link href="/collection" className="block py-1 text-85 hover:text-ink transition-colors">
            Collection
          </Link>
          <Link href="/studio" className="block py-1 text-85 hover:text-ink transition-colors">
            The Studio
          </Link>
          <Link href="/lookbook" className="block py-1 text-85 hover:text-ink transition-colors">
            Lookbook
          </Link>
          <Link href="/weddings" className="block py-1 text-85 hover:text-ink transition-colors">
            Weddings
          </Link>
          <Link href="/brand-events" className="block py-1 text-85 hover:text-ink transition-colors">
            Brand Events
          </Link>
          <Link href="/private-dining" className="block py-1 text-85 hover:text-ink transition-colors">
            Private Dining
          </Link>
        </div>

        {/* Secondary links */}
        <div className="flex flex-col gap-1">
          <Link href="/my-table" className="block py-1 text-85 hover:text-ink transition-colors">
            My Table
          </Link>
          <Link href="/composer" className="block py-1 text-85 hover:text-ink transition-colors">
            Composer preview
          </Link>
          <Link href="/enquiry" className="block py-1 text-85 hover:text-ink transition-colors">
            Enquiry
          </Link>
        </div>
      </div>
    </footer>
  );
}

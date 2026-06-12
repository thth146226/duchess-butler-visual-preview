/**
 * Footer.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Footer with navigation links (Server Component)
 */

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <span className="site-footer__brand">
            Duchess <span className="text-gold">&amp;</span> Butler
          </span>
          <p className="small">
            The original tablescaping company.* Curated tableware hire for
            weddings, brand events and private dining — 126,000+ pieces, styled
            since 2015.
          </p>
          <p className="small mt-3 opacity-70">
            *Self-declared attribution, per existing About page. Prototype: links
            and forms are simulated.
          </p>
        </div>

        <div className="flex flex-col">
          <Link href="/collection" className="site-footer__link">
            Collection
          </Link>
          <Link href="/studio" className="site-footer__link">
            The Studio
          </Link>
          <Link href="/lookbook" className="site-footer__link">
            Lookbook
          </Link>
          <Link href="/weddings" className="site-footer__link">
            Weddings
          </Link>
          <Link href="/brand-events" className="site-footer__link">
            Brand Events
          </Link>
          <Link href="/private-dining" className="site-footer__link">
            Private Dining
          </Link>
        </div>

        <div className="flex flex-col">
          <Link href="/my-table" className="site-footer__link">
            My Table
          </Link>
          <Link href="/composer" className="site-footer__link">
            Composer preview
          </Link>
          <Link href="/enquiry" className="site-footer__link">
            Enquiry
          </Link>
        </div>
      </div>
    </footer>
  );
}

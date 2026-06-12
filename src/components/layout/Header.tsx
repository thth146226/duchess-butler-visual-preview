/**
 * Header.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Site navigation & brand header (Server Component)
 */

import Link from 'next/link';

export default function Header() {
  return (
    <header className="site sticky top-0 z-50 bg-linen/92 backdrop-blur-8 border-b border-gold-soft">
      <div className="wrap flex items-center h-72 gap-28">
        {/* Brand logo */}
        <Link href="/" className="brand font-serif text-1.3xl letter-spacing-06 font-400 whitespace-nowrap">
          Duchess <span className="text-gold">&amp;</span> Butler
        </Link>

        {/* Primary navigation */}
        <nav className="links hidden md:flex gap-26 ml-auto">
          <Link
            href="/collection"
            className="text-78 letter-spacing-14 uppercase pb-1.5 border-b border-transparent hover:border-gold transition-colors"
          >
            Collection
          </Link>
          <Link
            href="/studio"
            className="text-78 letter-spacing-14 uppercase pb-1.5 border-b border-transparent hover:border-gold transition-colors"
          >
            The Studio
          </Link>
          <Link
            href="/weddings"
            className="text-78 letter-spacing-14 uppercase pb-1.5 border-b border-transparent hover:border-gold transition-colors"
          >
            Weddings
          </Link>
          <Link
            href="/brand-events"
            className="text-78 letter-spacing-14 uppercase pb-1.5 border-b border-transparent hover:border-gold transition-colors"
          >
            Brand Events
          </Link>
          <Link
            href="/lookbook"
            className="text-78 letter-spacing-14 uppercase pb-1.5 border-b border-transparent hover:border-gold transition-colors"
          >
            Lookbook
          </Link>
        </nav>

        {/* My Table link */}
        <Link
          href="/my-table"
          className="mytable-link text-78 letter-spacing-14 uppercase border border-ink px-4 py-2.25 whitespace-nowrap hover:bg-ink hover:text-linen transition-all"
        >
          My Table <span id="mtCount">(0)</span>
        </Link>
      </div>
    </header>
  );
}

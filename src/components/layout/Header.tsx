/**
 * Header.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Site navigation & brand header (Server Component)
 */

import Link from "next/link";

const NAV_LINKS = [
  { href: "/collection", label: "Collection" },
  { href: "/studio", label: "The Studio" },
  { href: "/weddings", label: "Weddings" },
  { href: "/brand-events", label: "Brand Events" },
  { href: "/lookbook", label: "Lookbook" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="site-brand">
          Duchess <span className="text-gold">&amp;</span> Butler
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="site-nav__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/my-table" className="site-header__cta">
          My Table <span id="mtCount">(0)</span>
        </Link>

        <details className="site-mobile-menu">
          <summary aria-label="Open menu">Menu</summary>
          <nav className="site-mobile-menu__panel" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="site-mobile-menu__link"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

/**
 * src/app/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Homepage
 */

import Button from "@/components/ui/Button";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="hero py-clamp-12 md:py-clamp-24">
        <div className="wrap hero-grid gap-clamp-7 md:gap-clamp-16 md:grid-cols-[5fr_7fr]">
          {/* Hero copy */}
          <div className="hero-copy fade">
            <span className="eyebrow block mb-5.5">
              Luxury tablescape hire · UK
            </span>
            <h1 className="display d-xl mb-6.5">
              The table,
              <br />
              composed.
            </h1>
            <p className="lede mb-8.5">
              Complete tablescapes, not lists of items. Begin with a curated
              look — our stylists refine every detail.
            </p>
            <div className="hero-ctas flex gap-3.5 flex-wrap">
              <Button asLink href="/collection" variant="primary">
                Explore the collection
              </Button>
              <Button asLink href="/studio" variant="ghost">
                Discover the Studio
              </Button>
            </div>
          </div>

          {/* Hero photo */}
          <div className="fade">
            <PhotoPlaceholder
              variant="blush"
              aspectRatio="3/3.4"
              caption="D&B photography · placeholder · full tablescape hero"
              className="md:-mt-6"
            />
          </div>
        </div>
      </section>

      {/* Divider section with values */}
      <section className="pt-0">
        <div className="wrap">
          <hr className="rule" />
          <div className="grid g-3 pt-clamp-9 md:pt-clamp-16">
            {/* Since 2015 */}
            <div className="fade">
              <span className="eyebrow">Since 2015</span>
              <p
                className="lede text-base mt-2.5"
                style={{
                  maxWidth: "100%",
                }}
              >
                The original tablescaping company,* founded by
                Maria-Antonia Almeida — Rolex, Peroni, Disney.
              </p>
            </div>

            {/* 126,000+ pieces */}
            <div className="fade">
              <span className="eyebrow">126,000+ pieces</span>
              <p
                className="lede text-base mt-2.5"
                style={{
                  maxWidth: "100%",
                }}
              >
                Linens, chargers, china, cutlery and glass — curated, cared
                for, delivered by our own team.
              </p>
            </div>

            {/* Styled, not sold */}
            <div className="fade">
              <span className="eyebrow">Styled, not sold</span>
              <p
                className="lede text-base mt-2.5"
                style={{
                  maxWidth: "100%",
                }}
              >
                Start your vision. Our team refines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intent section */}
      <section>
        <div className="wrap">
          <hr className="rule mb-clamp-9 md:mb-clamp-16" />
          <h2 className="display d-lg mb-clamp-7 md:mb-clamp-14">
            Plan your event
          </h2>
          <div className="grid g-3">
            {/* Weddings */}
            <Link href="/weddings" className="intent block">
              <PhotoPlaceholder
                variant="sage"
                aspectRatio="3/4"
                caption="Weddings"
              />
              <figcaption className="absolute left-0 right-0 bottom-0 p-5.5 bg-gradient-to-b from-transparent to-ink/55 text-linen">
                <div className="display text-1.5rem">Weddings</div>
                <div className="small text-linen/80">
                  From ceremonies to marquees, celebrations styled.
                </div>
              </figcaption>
            </Link>

            {/* Brand Events */}
            <Link href="/brand-events" className="intent block">
              <PhotoPlaceholder
                variant="blush"
                aspectRatio="3/4"
                caption="Brand Events"
              />
              <figcaption className="absolute left-0 right-0 bottom-0 p-5.5 bg-gradient-to-b from-transparent to-ink/55 text-linen">
                <div className="display text-1.5rem">Brand Events</div>
                <div className="small text-linen/80">
                  Corporate presentations, launches & experiential.
                </div>
              </figcaption>
            </Link>

            {/* Private Dining */}
            <Link href="/private-dining" className="intent block">
              <PhotoPlaceholder
                variant="terra"
                aspectRatio="3/4"
                caption="Private Dining"
              />
              <figcaption className="absolute left-0 right-0 bottom-0 p-5.5 bg-gradient-to-b from-transparent to-ink/55 text-linen">
                <div className="display text-1.5rem">Private Dining</div>
                <div className="small text-linen/80">
                  [Placeholder — decision pending]
                </div>
              </figcaption>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section>
        <div className="wrap text-center">
          <div className="notice border border-gold-soft bg-ivory p-6.5">
            <h3 className="display mb-2">Ready to begin?</h3>
            <p className="lede mx-auto mb-6">
              Start with a curated look in the Studio, or browse individual
              pieces in the Collection.
            </p>
            <Button asLink href="/studio" variant="primary">
              Enter the Studio
            </Button>
          </div>
        </div>
      </section>

      {/* Footnote */}
      <section className="pt-clamp-14 md:pt-clamp-20">
        <div className="wrap text-center">
          <p className="small opacity-70">
            *Self-declared attribution, per existing About page. Prototype:
            all links and forms are simulated.
          </p>
        </div>
      </section>
    </>
  );
}

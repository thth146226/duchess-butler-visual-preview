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
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy fade">
              <span className="eyebrow">Luxury tablescape hire · UK</span>
              <h1 className="display d-xl">
                The table,
                <br />
                composed.
              </h1>
              <p className="lede">
                Complete tablescapes, not lists of items. Begin with a curated
                look — our stylists refine every detail.
              </p>
              <div className="hero-ctas">
                <Button asLink href="/collection" variant="primary">
                  Explore the collection
                </Button>
                <Button asLink href="/studio" variant="ghost">
                  Discover the Studio
                </Button>
              </div>
            </div>

            <div className="hero-media fade">
              <PhotoPlaceholder
                variant="blush"
                aspectRatio="3/3.4"
                size="hero"
                caption="D&B photography · placeholder · full tablescape hero"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <hr className="rule" />
          <div className="grid g-3 section-intro">
            <div className="authority-item fade">
              <span className="eyebrow">Since 2015</span>
              <p className="lede lede--full">
                The original tablescaping company,* founded by Maria-Antonia
                Almeida — Rolex, Peroni, Disney.
              </p>
            </div>

            <div className="authority-item fade">
              <span className="eyebrow">126,000+ pieces</span>
              <p className="lede lede--full">
                Linens, chargers, china, cutlery and glass — curated, cared for,
                delivered by our own team.
              </p>
            </div>

            <div className="authority-item fade">
              <span className="eyebrow">Styled, not sold</span>
              <p className="lede lede--full">Start your vision. Our team refines.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <hr className="rule section-title" />
          <h2 className="display d-lg section-title">Plan your event</h2>
          <div className="grid g-3">
            <Link href="/weddings" className="intent-card fade">
              <PhotoPlaceholder
                variant="sage"
                aspectRatio="3/4"
                hideCaption
              />
              <div className="intent-card__overlay">
                <div className="intent-card__title display">Weddings</div>
                <p className="intent-card__desc">
                  From ceremonies to marquees, celebrations styled.
                </p>
              </div>
            </Link>

            <Link href="/brand-events" className="intent-card fade">
              <PhotoPlaceholder
                variant="blush"
                aspectRatio="3/4"
                hideCaption
              />
              <div className="intent-card__overlay">
                <div className="intent-card__title display">Brand Events</div>
                <p className="intent-card__desc">
                  Corporate presentations, launches &amp; experiential.
                </p>
              </div>
            </Link>

            <Link href="/private-dining" className="intent-card fade">
              <PhotoPlaceholder
                variant="terra"
                aspectRatio="3/4"
                hideCaption
              />
              <div className="intent-card__overlay">
                <div className="intent-card__title display">Private Dining</div>
                <p className="intent-card__desc">
                  Intimate settings · placeholder pending IA.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice">
            <h3 className="display">Ready to begin?</h3>
            <p className="lede">
              Start with a curated look in the Studio, or browse individual
              pieces in the Collection.
            </p>
            <Button asLink href="/studio" variant="primary">
              Enter the Studio
            </Button>
          </div>
        </div>
      </section>

      <section className="section-footnote">
        <div className="wrap text-center">
          <p className="small opacity-70">
            *Self-declared attribution, per existing About page. Prototype: all
            links and forms are simulated.
          </p>
        </div>
      </section>
    </>
  );
}

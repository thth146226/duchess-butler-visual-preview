/**
 * src/app/lookbook/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Lookbook — gallery of styled tables
 */

import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";
import {
  MOCK_LOOKS,
  type LookCategory,
} from "@/lib/mock/looks";

export const metadata = {
  title: "Lookbook — Duchess & Butler",
  description: "Curated table styling inspiration",
};

const CATEGORY_LABELS: Record<LookCategory, string> = {
  wedding: "Wedding",
  "brand-event": "Brand Event",
  "private-dining": "Private Dining",
  seasonal: "Seasonal",
};

export default function LookbookPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid hero-grid--copy-only">
            <div className="hero-copy fade">
              <span className="eyebrow">Inspiration</span>
              <h1 className="display d-xl">Lookbook.</h1>
              <p className="lede">
                Pre-styled tables from our collections. Starting points for your
                own composition — curated by event type, refined by our
                stylists.
              </p>
              <div className="hero-ctas">
                <Button asLink href="/studio" variant="primary">
                  Create your own
                </Button>
                <Button asLink href="/composer" variant="ghost">
                  Open the Composer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="lookbook-intro fade">
            <span className="eyebrow">Curated starting points</span>
            <p className="lede lede--full">
              Seven styled tables across weddings, brand events, private dining
              and seasonal settings. Visual placeholders only — names and
              finishes are indicative.
            </p>
          </div>

          <div className="lookbook-grid">
            {MOCK_LOOKS.map((look) => (
              <article key={look.id} className="lookbook-item fade">
                <PhotoPlaceholder
                  variant={look.photo}
                  aspectRatio="4/5"
                  caption={look.name}
                />
                <div className="look-meta">
                  <div className="look-meta__copy">
                    <h3 className="card-title">{look.name}</h3>
                    <p className="small">{look.caption}</p>
                  </div>
                  <div className="look-meta__tags">
                    <span className="tag tag--muted">
                      {CATEGORY_LABELS[look.category]}
                    </span>
                    <span className="tag">{look.collection}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice notice--wide">
            <h3 className="display">Inspired?</h3>
            <p className="lede">
              Use the Composer to build your own direction of travel, or send
              one itemised enquiry with your preferences.
            </p>
            <div className="btn-row">
              <Button asLink href="/composer" variant="primary">
                Composer
              </Button>
              <Button asLink href="/enquiry" variant="ghost">
                Enquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

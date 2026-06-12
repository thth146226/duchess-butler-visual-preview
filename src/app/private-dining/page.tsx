/**
 * src/app/private-dining/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Private Dining landing page — PLACEHOLDER ONLY
 */

import Button from "@/components/ui/Button";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export const metadata = {
  title: "Private Dining — Duchess & Butler",
  description: "Curated tableware for private dining experiences",
};

export default function PrivateDiningPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid hero-grid--balanced">
            <div className="hero-copy fade">
              <span className="eyebrow">Intimate · Composed</span>
              <h1 className="display d-xl">Private Dining.</h1>
              <p className="lede">
                [PLACEHOLDER — IA decision pending. This route exists in the
                visual prototype but is not yet fully defined per Chunk 2 scope.]
              </p>
              <div className="hero-ctas">
                <Button asLink href="/collection" variant="primary">
                  Browse the Collection
                </Button>
                <Button asLink href="/studio" variant="ghost">
                  Use the Composer
                </Button>
              </div>
            </div>
            <div className="hero-media fade">
              <PhotoPlaceholder
                variant="terra"
                aspectRatio="3/3.4"
                size="hero"
                caption="Private dining · placeholder pending IA"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice">
            <h3 className="display">Coming soon</h3>
            <p className="lede">
              This section is a placeholder pending product definition. In the
              meantime, explore the Collection or use the Composer to plan your
              table.
            </p>
            <div className="btn-row">
              <Button asLink href="/collection" variant="primary">
                Collection
              </Button>
              <Button asLink href="/composer" variant="ghost">
                Composer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

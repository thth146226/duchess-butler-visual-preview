/**
 * src/app/weddings/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Weddings landing page
 */

import Button from "@/components/ui/Button";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export const metadata = {
  title: "Weddings — Duchess & Butler",
  description: "Curated table styling for weddings",
};

export default function WeddingsPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid hero-grid--balanced">
            <div className="hero-copy fade">
              <span className="eyebrow">Ceremonies · Marquees</span>
              <h1 className="display d-xl">Weddings.</h1>
              <p className="lede">
                From intimate ceremonies to grand marquees, we curate every
                detail. Tables composed to scale, with your colours and vision at
                the heart.
              </p>
              <div className="hero-ctas">
                <Button asLink href="/studio" variant="primary">
                  Start in the Studio
                </Button>
                <Button asLink href="/enquiry" variant="ghost">
                  Send an enquiry
                </Button>
              </div>
            </div>
            <div className="hero-media fade">
              <PhotoPlaceholder
                variant="sage"
                aspectRatio="3/3.4"
                size="hero"
                caption="Wedding tablescape · placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice">
            <h3 className="display">Plan your celebration</h3>
            <p className="lede">
              126,000+ pieces in curated collections. Begin in the Studio with
              a look, or browse the Collection for individual pieces.
            </p>
            <div className="btn-row">
              <Button asLink href="/collection" variant="primary">
                See the Collection
              </Button>
              <Button asLink href="/composer" variant="ghost">
                Use the Composer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

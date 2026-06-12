/**
 * src/app/studio/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * The Studio page — placeholder linking to Composer
 */

import Button from "@/components/ui/Button";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export const metadata = {
  title: "The Studio — Duchess & Butler",
  description:
    "Compose a table from the real rental collection. Layer linens, tableware and finishing details before sending one itemised enquiry.",
};

export default function StudioPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid hero-grid--balanced">
            <div className="hero-copy fade">
              <span className="eyebrow">The Tablescape Studio</span>
              <h1 className="display d-xl">
                Compose a table from the real rental collection
              </h1>
              <p className="lede">
                Start your vision. Our team refines. The Studio helps you layer
                linens, tableware and finishing details before sending one
                itemised enquiry to our stylists.
              </p>
              <div className="hero-ctas">
                <Button asLink href="/composer" variant="primary">
                  Open the Composer
                </Button>
                <Button asLink href="/collection" variant="ghost">
                  Browse the Collection
                </Button>
              </div>
            </div>
            <div className="hero-media fade">
              <PhotoPlaceholder
                variant="slate"
                aspectRatio="3/3.4"
                size="hero"
                caption="Studio workspace · placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <hr className="rule" />
          <h2 className="display d-lg section-intro section-title">
            How it works
          </h2>
          <div className="steps-grid">
            <div className="step-card fade">
              <span className="eyebrow">1. Explore the collection</span>
              <p className="lede lede--full">
                Add pieces that catch your eye to My Table.
              </p>
            </div>
            <div className="step-card fade">
              <span className="eyebrow">2. Compose your setting</span>
              <p className="lede lede--full">
                Layer each slot in a 2.5D preview using placeholder finishes in
                this prototype.
              </p>
            </div>
            <div className="step-card fade">
              <span className="eyebrow">3. Save and share</span>
              <p className="lede lede--full">
                Keep a private direction of travel for your planner, partner or
                venue.
              </p>
            </div>
            <div className="step-card fade">
              <span className="eyebrow">4. Send one itemised enquiry</span>
              <p className="lede lede--full">
                Availability is confirmed personally at quote stage. No checkout,
                no automatic pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice notice--wide">
            <h3 className="display">Start designing now</h3>
            <p className="lede">
              This is a visual prototype. Availability is confirmed personally
              at quote stage; the Studio begins the conversation, and our
              stylists refine the details.
            </p>
            <Button asLink href="/composer" variant="primary">
              Open the Composer
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

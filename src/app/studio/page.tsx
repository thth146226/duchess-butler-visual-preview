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
        <div className="wrap hero-grid gap-clamp-7 md:gap-clamp-16 md:grid-cols-[5fr_7fr] md:items-end">
          <div className="hero-copy fade">
            <span className="eyebrow block mb-5.5">The Tablescape Studio</span>
            <h1 className="display d-xl mb-6.5">
              Compose a table from the real rental collection
            </h1>
            <p className="lede mb-8.5">
              Start your vision. Our team refines. The Studio helps you layer
              linens, tableware and finishing details before sending one
              itemised enquiry to our stylists.
            </p>
            <div className="hero-ctas flex gap-3.5 flex-wrap">
              <Button asLink href="/composer" variant="primary">
                Open the Composer
              </Button>
              <Button asLink href="/collection" variant="ghost">
                Browse the Collection
              </Button>
            </div>
          </div>
          <div className="fade">
            <PhotoPlaceholder
              variant="slate"
              aspectRatio="3/3.4"
              caption="Studio workspace · placeholder"
              className="md:-mt-6"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <hr className="rule" />
          <h2 className="display d-lg mb-clamp-7 md:mb-clamp-14 pt-clamp-9 md:pt-clamp-16">
            How it works
          </h2>
          <div className="grid g-3 md:grid-cols-2">
            <div className="fade">
              <span className="eyebrow">1. Explore the collection</span>
              <p className="lede text-base mt-2.5">
                Add pieces that catch your eye to My Table.
              </p>
            </div>
            <div className="fade">
              <span className="eyebrow">2. Compose your setting</span>
              <p className="lede text-base mt-2.5">
                Layer each slot in a 2.5D preview using placeholder finishes in
                this prototype.
              </p>
            </div>
            <div className="fade">
              <span className="eyebrow">3. Save and share</span>
              <p className="lede text-base mt-2.5">
                Keep a private direction of travel for your planner, partner or
                venue.
              </p>
            </div>
            <div className="fade">
              <span className="eyebrow">4. Send one itemised enquiry</span>
              <p className="lede text-base mt-2.5">
                Availability is confirmed personally at quote stage. No checkout,
                no automatic pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice border border-gold-soft bg-ivory p-6.5">
            <h3 className="display mb-2">Start designing now</h3>
            <p className="lede mx-auto mb-6 text-base">
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

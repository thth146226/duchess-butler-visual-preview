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
        <div className="wrap hero-grid gap-clamp-7 md:gap-clamp-16 md:grid-cols-[5fr_7fr] md:items-end">
          <div className="hero-copy fade">
            <span className="eyebrow block mb-5.5">
              Intimate · Composed
            </span>
            <h1 className="display d-xl mb-6.5">Private Dining.</h1>
            <p className="lede mb-8.5">
              [PLACEHOLDER — IA decision pending. This route exists in the
              visual prototype but is not yet fully defined per Chunk 2 scope.]
            </p>
            <div className="hero-ctas flex gap-3.5 flex-wrap">
              <Button asLink href="/collection" variant="primary">
                Browse the Collection
              </Button>
              <Button asLink href="/studio" variant="ghost">
                Use the Composer
              </Button>
            </div>
          </div>
          <div className="fade">
            <PhotoPlaceholder
              variant="terra"
              aspectRatio="3/3.4"
              caption="Private dining · placeholder pending IA"
              className="md:-mt-6"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice border border-gold-soft bg-ivory p-6.5">
            <h3 className="display mb-2">Coming soon</h3>
            <p className="lede mx-auto mb-6 text-base">
              This section is a placeholder pending product definition. In the
              meantime, explore the Collection or use the Composer to plan your
              table.
            </p>
            <div className="flex gap-3 justify-center">
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

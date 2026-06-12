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
        <div className="wrap hero-grid gap-clamp-7 md:gap-clamp-16 md:grid-cols-[5fr_7fr] md:items-end">
          <div className="hero-copy fade">
            <span className="eyebrow block mb-5.5">Ceremonies · Marquees</span>
            <h1 className="display d-xl mb-6.5">Weddings.</h1>
            <p className="lede mb-8.5">
              From intimate ceremonies to grand marquees, we curate every
              detail. Tables composed to scale, with your colours and vision at
              the heart.
            </p>
            <div className="hero-ctas flex gap-3.5 flex-wrap">
              <Button asLink href="/studio" variant="primary">
                Start in the Studio
              </Button>
              <Button asLink href="/enquiry" variant="ghost">
                Send an enquiry
              </Button>
            </div>
          </div>
          <div className="fade">
            <PhotoPlaceholder
              variant="sage"
              aspectRatio="3/3.4"
              caption="Wedding tablescape · placeholder"
              className="md:-mt-6"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice border border-gold-soft bg-ivory p-6.5">
            <h3 className="display mb-2">Plan your celebration</h3>
            <p className="lede mx-auto mb-6 text-base">
              126,000+ pieces in curated collections. Begin in the Studio with
              a look, or browse the Collection for individual pieces.
            </p>
            <div className="flex gap-3 justify-center">
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

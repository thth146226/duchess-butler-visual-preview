/**
 * src/app/lookbook/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Lookbook — gallery of styled tables
 */

import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";
import { MOCK_LOOKS } from "@/lib/mock/looks";

export const metadata = {
  title: "Lookbook — Duchess & Butler",
  description: "Curated table styling inspiration",
};

export default function LookbookPage() {
  return (
    <>
      <section className="hero py-clamp-12 md:py-clamp-24">
        <div className="wrap hero-grid gap-clamp-7 md:gap-clamp-16 md:grid-cols-[5fr_7fr]">
          <div className="hero-copy fade">
            <span className="eyebrow block mb-5.5">Inspiration</span>
            <h1 className="display d-xl mb-6.5">Lookbook.</h1>
            <p className="lede mb-8.5">
              Pre-styled tables from our collections. Starting points for your
              own composition.
            </p>
            <div className="hero-ctas flex gap-3.5 flex-wrap">
              <Button asLink href="/studio" variant="primary">
                Create your own
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="grid g-4">
            {MOCK_LOOKS.map((look) => (
              <article key={look.id} className="fade">
                <PhotoPlaceholder
                  variant={look.photo}
                  aspectRatio="4/5"
                  caption={look.name}
                />
                <div className="look-meta flex justify-between items-baseline mt-3.5">
                  <div>
                    <h3 className="font-serif font-400 text-1.25rem mb-1">
                      {look.name}
                    </h3>
                    <p className="small">{look.caption}</p>
                  </div>
                  <span className="tag text-xs letter-spacing-22 uppercase text-gold border border-gold-soft px-2.5 py-1">
                    {look.collection}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice border border-gold-soft bg-ivory p-6.5">
            <h3 className="display mb-2">Inspired?</h3>
            <p className="lede mx-auto mb-6 text-base">
              Use the Composer to build your own, or send us an enquiry with
              your preferences.
            </p>
            <div className="flex gap-3 justify-center">
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

/**
 * src/app/studio/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * The Studio page — placeholder linking to Composer
 */

import Button from "@/components/ui/Button";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export const metadata = {
  title: "The Studio — Duchess & Butler",
  description: "Build your own tablescape with the Composer",
};

export default function StudioPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid gap-clamp-7 md:gap-clamp-16 md:grid-cols-[5fr_7fr] md:items-end">
          <div className="hero-copy fade">
            <span className="eyebrow block mb-5.5">Composition tool</span>
            <h1 className="display d-xl mb-6.5">
              The Studio&rsquo;
              <br />
              Design your look&rsquo;
            </h1>
            <p className="lede mb-8.5">
              Choose your finishing options per slot. See your selections in
              real time, layered at scale.
            </p>
            <div className="hero-ctas flex gap-3.5 flex-wrap">
              <Button asLink href="/composer" variant="primary">
                Open the Composer
              </Button>
              <Button asLink href="/collection" variant="ghost">
                Browse pieces instead
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
          <div className="grid g-3 pt-clamp-9 md:pt-clamp-16">
            <div className="fade">
              <span className="eyebrow">Edit instantly</span>
              <p className="lede text-base">
                Change linens, chargers, napkins and décor without leaving the
                tool.
              </p>
            </div>
            <div className="fade">
              <span className="eyebrow">Live preview</span>
              <p className="lede text-base">
                See every layer: how your pieces combine at table height, at
                scale.
              </p>
            </div>
            <div className="fade">
              <span className="eyebrow">Your vision</span>
              <p className="lede text-base">
                When you&rsquo;re happy, send an enquiry. Our stylists refine the
                details.
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
              This is a visual preview. The real Composer (Chunk 2) will handle
              availability, pricing, and direct booking.
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

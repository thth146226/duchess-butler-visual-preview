/**
 * src/app/brand-events/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Brand Events landing page
 */

import Button from "@/components/ui/Button";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export const metadata = {
  title: "Brand Events — Duchess & Butler",
  description: "Experiential and corporate table styling",
};

export default function BrandEventsPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid gap-clamp-7 md:gap-clamp-16 md:grid-cols-[5fr_7fr] md:items-end">
          <div className="hero-copy fade">
            <span className="eyebrow block mb-5.5">
              Corporate · Experiential
            </span>
            <h1 className="display d-xl mb-6.5">Brand Events&rsquo;</h1>
            <p className="lede mb-8.5">
              Launch presentations, product debuts, and brand dinners. We style
              tables that reinforce your message. Experiences, not venues.
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
              variant="slate"
              aspectRatio="3/3.4"
              caption="Brand event tablescape · placeholder"
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
              <span className="eyebrow">Message-led design</span>
              <p className="lede text-base">
                Your brand colours, your aesthetic. We align pieces with the
                story you&rsquo;re telling.
              </p>
            </div>
            <div className="fade">
              <span className="eyebrow">Scale & logistics</span>
              <p className="lede text-base">
                100 guests or 1,000. We deliver, install, and manage the full
                lifecycle.
              </p>
            </div>
            <div className="fade">
              <span className="eyebrow">Composed, not rented</span>
              <p className="lede text-base">
                Not a transactional list. Every table is an experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice border border-gold-soft bg-ivory p-6.5">
            <h3 className="display mb-2">Plan your brand moment</h3>
            <p className="lede mx-auto mb-6 text-base">
              Use the Studio to explore possibilities, or get in touch with our
              team directly.
            </p>
            <Button asLink href="/enquiry" variant="primary">
              Send an enquiry
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

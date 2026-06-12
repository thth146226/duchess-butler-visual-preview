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
        <div className="wrap">
          <div className="hero-grid hero-grid--balanced">
            <div className="hero-copy fade">
              <span className="eyebrow">Corporate · Experiential</span>
              <h1 className="display d-xl">Brand Events.</h1>
              <p className="lede">
                Launch presentations, product debuts, and brand dinners. We style
                tables that reinforce your message. Experiences, not venues.
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
                variant="slate"
                aspectRatio="3/3.4"
                size="hero"
                caption="Brand event tablescape · placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <hr className="rule" />
          <div className="grid g-3 section-intro">
            <div className="authority-item fade">
              <span className="eyebrow">Message-led design</span>
              <p className="lede lede--full">
                Your brand colours, your aesthetic. We align pieces with the
                story you&rsquo;re telling.
              </p>
            </div>
            <div className="authority-item fade">
              <span className="eyebrow">Scale &amp; logistics</span>
              <p className="lede lede--full">
                100 guests or 1,000. We deliver, install, and manage the full
                lifecycle.
              </p>
            </div>
            <div className="authority-item fade">
              <span className="eyebrow">Composed, not rented</span>
              <p className="lede lede--full">
                Not a transactional list. Every table is an experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice">
            <h3 className="display">Plan your brand moment</h3>
            <p className="lede">
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

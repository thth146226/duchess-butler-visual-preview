/**
 * src/app/enquiry/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Enquiry page — server hero + client form
 */

import EnquiryForm from "@/components/enquiry/EnquiryForm";

export const metadata = {
  title: "Enquiry — Duchess & Butler",
  description: "Get in touch with us",
};

export default function EnquiryPage() {
  return (
    <>
      <section className="hero hero--compact">
        <div className="wrap">
          <div className="hero-grid hero-grid--copy-only">
            <div className="hero-copy">
              <span className="eyebrow">Get in touch</span>
              <h1 className="display d-xl">Enquiry Form.</h1>
              <p className="lede">
                Tell us about your event. Our team will reach out within 24
                hours with recommendations. Availability is confirmed personally
                at quote stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EnquiryForm />
    </>
  );
}

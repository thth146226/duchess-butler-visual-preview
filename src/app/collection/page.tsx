/**
 * src/app/collection/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Collection page — routes to Client Component
 */

import CollectionClient from "@/components/collection/CollectionClient";

export const metadata = {
  title: "Collection — Duchess & Butler",
  description: "Browse 126,000+ pieces across curated collections",
};

export default function CollectionPage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid hero-grid--copy-only">
            <div className="hero-copy fade">
              <span className="eyebrow">Browse · Select</span>
              <h1 className="display d-xl">The Collection.</h1>
              <p className="lede">
                126,000+ pieces across ten curated collections. Filter by
                collection or browse all items. Click any piece to view details
                or add it to your table.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CollectionClient />
    </>
  );
}

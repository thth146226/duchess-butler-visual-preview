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
        <div className="wrap hero-grid gap-clamp-7 md:gap-clamp-16 md:grid-cols-[5fr_7fr]">
          <div className="hero-copy fade">
            <span className="eyebrow block mb-5.5">Browse · Select</span>
            <h1 className="display d-xl mb-6.5">
              The Collection.
            </h1>
            <p className="lede mb-8.5">
              126,000+ pieces across ten curated collections. Filter by
              collection or browse all items. Click any piece to view details
              or add it to your table.
            </p>
          </div>
        </div>
      </section>

      <CollectionClient />
    </>
  );
}

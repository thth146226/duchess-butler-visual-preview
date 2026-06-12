/**
 * src/components/collection/CollectionClient.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Collection filter & grid (Client Component)
 */

"use client";

import { useState } from "react";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { MOCK_COLLECTIONS } from "@/lib/mock/collections";
import { MOCK_ITEMS } from "@/lib/mock/items";

export default function CollectionClient() {
  const [activeCollection, setActiveCollection] =
    useState<string>("All");

  const filteredItems =
    activeCollection === "All"
      ? MOCK_ITEMS
      : MOCK_ITEMS.filter((item) => item.collection === activeCollection);

  return (
    <>
      {/* Filter controls */}
      <section>
        <div className="wrap">
          <div className="mb-clamp-7 md:mb-clamp-14">
            <h2 className="display d-lg mb-clamp-7 md:mb-clamp-14">
              Filter by collection
            </h2>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setActiveCollection("All")}
                className={`btn sm ${
                  activeCollection === "All"
                    ? "bg-ink text-linen border border-ink"
                    : "bg-transparent text-ink border border-ink ghost"
                }`}
              >
                All items
              </button>
              {MOCK_COLLECTIONS.map((collection) => (
                <button
                  key={collection}
                  onClick={() => setActiveCollection(collection)}
                  className={`btn sm ${
                    activeCollection === collection
                      ? "bg-ink text-linen border border-ink"
                      : "bg-transparent text-ink border border-ink ghost"
                  }`}
                >
                  {collection}
                </button>
              ))}
            </div>
          </div>

          {/* Grid or empty state */}
          {filteredItems.length === 0 ? (
            <div className="empty border-2 border-dashed border-gold-soft p-clamp-10 md:p-clamp-20">
              <h3 className="display mb-2.5">No items found</h3>
              <p className="small">
                Try selecting a different collection.
              </p>
            </div>
          ) : (
            <div className="grid g-4">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/product/${item.id}`}
                  className="card fade hover:opacity-85 transition-opacity"
                >
                  <PhotoPlaceholder
                    variant={item.photo}
                    aspectRatio="4/5"
                    caption={item.name}
                    className="mb-4"
                  />
                  <h3 className="font-serif font-400 text-1.25rem mb-1">
                    {item.name}
                  </h3>
                  <span className="tag text-xs letter-spacing-22 uppercase text-gold border border-gold-soft px-2.5 py-1">
                    {item.collection}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="wrap text-center">
          <div className="notice border border-gold-soft bg-ivory p-6.5">
            <h3 className="display mb-2">Ready to compose?</h3>
            <p className="lede mx-auto mb-6 text-base">
              Browse individual pieces here, or start with a curated look in the
              Studio.
            </p>
            <Button asLink href="/studio" variant="primary">
              Go to the Studio
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

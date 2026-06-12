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
  const [activeCollection, setActiveCollection] = useState<string>("All");

  const filteredItems =
    activeCollection === "All"
      ? MOCK_ITEMS
      : MOCK_ITEMS.filter((item) => item.collection === activeCollection);

  return (
    <>
      <section className="section-tight">
        <div className="wrap">
          <h2 className="display d-lg section-title">Filter by collection</h2>
          <div className="btn-group section-title">
            <button
              type="button"
              onClick={() => setActiveCollection("All")}
              className={`btn btn-sm ${activeCollection === "All" ? "is-active" : "btn-ghost"}`}
            >
              All items
            </button>
            {MOCK_COLLECTIONS.map((collection) => (
              <button
                key={collection}
                type="button"
                onClick={() => setActiveCollection(collection)}
                className={`btn btn-sm ${activeCollection === collection ? "is-active" : "btn-ghost"}`}
              >
                {collection}
              </button>
            ))}
          </div>

          {filteredItems.length === 0 ? (
            <div className="empty">
              <h3 className="display">No items found</h3>
              <p className="small">Try selecting a different collection.</p>
            </div>
          ) : (
            <div className="grid g-4">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/product/${item.id}`}
                  className="card fade"
                >
                  <PhotoPlaceholder
                    variant={item.photo}
                    aspectRatio="4/5"
                    caption={item.name}
                    size="card"
                  />
                  <h3 className="card-title">{item.name}</h3>
                  <span className="tag">{item.collection}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="wrap text-center">
          <div className="notice">
            <h3 className="display">Ready to compose?</h3>
            <p className="lede">
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

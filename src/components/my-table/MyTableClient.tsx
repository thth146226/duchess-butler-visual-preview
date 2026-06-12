/**
 * src/components/my-table/MyTableClient.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * My Table — cart with localStorage persistence
 */

"use client";

import { useState, useEffect, useCallback } from "react";
import { MOCK_ITEMS } from "@/lib/mock/items";
import { loadMyTable, saveMyTable, clearMyTable } from "@/lib/storage/myTable";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";

export default function MyTableClient() {
  const [items, setItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize from localStorage
  // This is the recommended pattern for syncing with external storage (React docs)
  // The effect is required to avoid hydration mismatch and sync with persistent data
  useEffect(() => {
    const validIds = MOCK_ITEMS.map((item) => item.id);
    const loaded = loadMyTable(validIds);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(loaded);
    setIsLoading(false);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => {
      const updated = prev.filter((item) => item !== id);
      saveMyTable(updated);
      return updated;
    });
  }, []);

  const handleClear = useCallback(() => {
    if (confirm("Clear all items from My Table?")) {
      setItems([]);
      clearMyTable();
    }
  }, []);

  const cartItems = items
    .map((id) => MOCK_ITEMS.find((item) => item.id === id))
    .filter(Boolean);

  if (isLoading) {
    return (
      <section>
        <div className="wrap text-center">
          <div className="spinner" />
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid gap-clamp-7 md:gap-clamp-16">
          <div className="hero-copy fade">
            <span className="eyebrow block mb-5.5">Your selection</span>
            <h1 className="display d-xl mb-6.5">My Table.</h1>
            <p className="lede mb-8.5">
              Items you&rsquo;ve added persist in your browser. This is a mock cart —
              no real transactions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          {cartItems.length === 0 ? (
            <div className="empty border-2 border-dashed border-gold-soft p-clamp-10 md:p-clamp-20">
              <h3 className="display mb-2.5">Your table is empty</h3>
              <p className="small mb-6">
                Browse the Collection to add items.
              </p>
              <Button asLink href="/collection" variant="primary">
                Explore the Collection
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="display d-md">
                  {cartItems.length} item
                  {cartItems.length !== 1 ? "s" : ""}
                </h2>
                <button
                  onClick={handleClear}
                  className="btn ghost sm"
                >
                  Clear all
                </button>
              </div>

              <div className="grid g-4 mb-clamp-7 md:mb-clamp-14">
                {cartItems.map((item) => (
                  <article
                    key={item!.id}
                    className="card fade relative"
                  >
                    <PhotoPlaceholder
                      variant={item!.photo}
                      aspectRatio="4/5"
                      caption={item!.name}
                      className="mb-4"
                    />
                    <h3 className="font-serif font-400 text-1.25rem mb-1">
                      {item!.name}
                    </h3>
                    <div className="flex justify-between items-baseline gap-2 mt-3">
                      <span className="tag text-xs letter-spacing-22 uppercase text-gold border border-gold-soft px-2.5 py-1">
                        {item!.collection}
                      </span>
                      <button
                        onClick={() => removeItem(item!.id)}
                        className="text-xs text-umber hover:text-ink transition-colors uppercase letter-spacing-14"
                      >
                        Remove
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center">
                <div className="notice border border-gold-soft bg-ivory p-6.5">
                  <h3 className="display mb-2">Next step?</h3>
                  <p className="lede mx-auto mb-6 text-base">
                    Send an enquiry with your selections, or continue shopping.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button asLink href="/enquiry" variant="primary">
                      Send enquiry
                    </Button>
                    <Button asLink href="/collection" variant="ghost">
                      Continue shopping
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

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
        <div className="wrap">
          <div className="hero-grid hero-grid--copy-only">
            <div className="hero-copy fade">
              <span className="eyebrow">Your selection</span>
              <h1 className="display d-xl">My Table.</h1>
              <p className="lede">
                Items you&rsquo;ve added persist in your browser. This is a mock
                cart — no real transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          {cartItems.length === 0 ? (
            <div className="empty">
              <h3 className="display">Your table is empty</h3>
              <p className="small" style={{ marginBottom: "1.5rem" }}>
                Browse the Collection to add items.
              </p>
              <Button asLink href="/collection" variant="primary">
                Explore the Collection
              </Button>
            </div>
          ) : (
            <>
              <div
                className="flex justify-between items-center"
                style={{ marginBottom: "1.5rem" }}
              >
                <h2 className="display d-md">
                  {cartItems.length} item
                  {cartItems.length !== 1 ? "s" : ""}
                </h2>
                <button
                  type="button"
                  onClick={handleClear}
                  className="btn btn-sm btn-ghost"
                >
                  Clear all
                </button>
              </div>

              <div className="grid g-4 section-title">
                {cartItems.map((item) => (
                  <article key={item!.id} className="card fade">
                    <PhotoPlaceholder
                      variant={item!.photo}
                      aspectRatio="4/5"
                      caption={item!.name}
                      size="card"
                    />
                    <h3 className="card-title">{item!.name}</h3>
                    <div className="card-meta">
                      <span className="tag">{item!.collection}</span>
                      <button
                        type="button"
                        onClick={() => removeItem(item!.id)}
                        className="small"
                        style={{
                          background: "none",
                          border: "none",
                          textTransform: "uppercase",
                          letterSpacing: "0.14em",
                          fontSize: "0.62rem",
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center">
                <div className="notice">
                  <h3 className="display">Next step?</h3>
                  <p className="lede">
                    Send an enquiry with your selections, or continue shopping.
                  </p>
                  <div className="btn-row">
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

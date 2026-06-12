/**
 * src/app/product/[id]/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Product detail page
 */

import { MOCK_ITEMS } from "@/lib/mock/items";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";
import AddToMyTableButton from "@/components/product/AddToMyTableButton";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const item = MOCK_ITEMS.find((i) => i.id === id);
  return {
    title: `${item?.name || "Product"} — Duchess & Butler`,
  };
}

export async function generateStaticParams() {
  return MOCK_ITEMS.map((item) => ({
    id: item.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const item = MOCK_ITEMS.find((i) => i.id === id);

  if (!item) {
    return (
      <section>
        <div className="wrap text-center">
          <div className="notice border border-gold-soft bg-ivory p-6.5">
            <h3 className="display mb-2">Not found</h3>
            <p className="lede mx-auto mb-6 text-base">
              This product doesn&rsquo;t exist in the mock data.
            </p>
            <Button asLink href="/collection" variant="primary">
              Back to Collection
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-clamp-12 md:py-clamp-24">
        <div className="wrap">
          <Link
            href="/collection"
            className="crumb block text-xs letter-spacing-20 uppercase text-umber mb-7.5 hover:text-ink transition-colors"
          >
            ← Back to Collection
          </Link>

          <div className="prod gap-clamp-7 md:gap-clamp-16 md:grid-cols-[6fr_5fr]">
            {/* Image */}
            <div>
              <PhotoPlaceholder
                variant={item.photo}
                aspectRatio="4/5"
                caption={item.name}
              />
            </div>

            {/* Details */}
            <div>
              <span className="eyebrow mb-2.5 block">{item.collection}</span>
              <h1 className="display d-lg mb-6.5">{item.name}</h1>

              <div className="specs border-t border-gold-soft">
                <div className="flex justify-between py-2.75 border-b border-gold-soft/18">
                  <dt className="text-umber text-88">Slot</dt>
                  <dd className="text-88">{item.slot}</dd>
                </div>
                <div className="flex justify-between py-2.75 border-b border-gold-soft/18">
                  <dt className="text-umber text-88">Collection</dt>
                  <dd className="text-88">{item.collection}</dd>
                </div>
                <div className="flex justify-between py-2.75">
                  <dt className="text-umber text-88">Type</dt>
                  <dd className="text-88">Mock item&rsquo;</dd>
                </div>
              </div>

              <div className="mt-6.5">
                <p className="small mb-6.5 text-umber">
                  MOCK / VISUAL PROTOTYPE ONLY — No pricing, stock information,
                  or real availability shown.
                </p>
                <div className="flex gap-3 flex-col sm:flex-row">
                  <Button asLink href="/composer" variant="primary">
                    Add to Studio
                  </Button>
                  <AddToMyTableButton itemId={item.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related items */}
      <section>
        <div className="wrap">
          <h2 className="display d-md mb-clamp-7 md:mb-clamp-14">
            Same slot, different collections
          </h2>
          <div className="grid g-4">
            {MOCK_ITEMS.filter((i) => i.slot === item.slot && i.id !== id)
              .slice(0, 4)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/product/${related.id}`}
                  className="card fade"
                >
                  <PhotoPlaceholder
                    variant={related.photo}
                    aspectRatio="4/5"
                    caption={related.name}
                    className="mb-4"
                  />
                  <h3 className="font-serif font-400 text-1.25rem mb-1">
                    {related.name}
                  </h3>
                  <span className="tag text-xs letter-spacing-22 uppercase text-gold border border-gold-soft px-2.5 py-1">
                    {related.collection}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

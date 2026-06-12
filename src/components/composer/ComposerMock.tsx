/**
 * src/components/composer/ComposerMock.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Interactive Composer with 2.5D SVG mock and accordion slots
 */

"use client";

import { useState } from "react";
import { COMPOSER_SLOTS } from "@/lib/mock/composer";
import Button from "@/components/ui/Button";

interface ComposerState {
  [key: string]: number;
}

export default function ComposerMock({ preselectedSlot }: { preselectedSlot?: string }) {
  const [guests, setGuests] = useState(12);
  const [selections, setSelections] = useState<ComposerState>(
    Object.fromEntries(COMPOSER_SLOTS.map((s) => [s.key, 0]))
  );
  const [expandedSlot, setExpandedSlot] = useState<string | null>(
    preselectedSlot || null
  );

  const getSelectionColor = (key: string) => {
    const slot = COMPOSER_SLOTS.find((s) => s.key === key);
    if (!slot) return "#e7dece";
    const index = selections[key] || 0;
    return slot.options[index]?.[0] || "#e7dece";
  };

  const getSelectionName = (key: string) => {
    const slot = COMPOSER_SLOTS.find((s) => s.key === key);
    if (!slot) return "—";
    const index = selections[key] || 0;
    return slot.options[index]?.[1] || "—";
  };

  const handleGuestChange = (delta: number) => {
    setGuests(Math.max(1, guests + delta));
  };

  const handleOptionClick = (slotKey: string, optionIndex: number) => {
    setSelections((prev) => ({
      ...prev,
      [slotKey]: optionIndex,
    }));
  };

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid gap-clamp-7 md:gap-clamp-16">
          <div className="hero-copy fade">
            <span className="eyebrow block mb-5.5">Interactive preview</span>
            <h1 className="display d-xl mb-6.5">The Composer.</h1>
            <p className="lede mb-8.5">
              Select finishes for each slot. Watch your table compose in real
              time. This is a visual preview — the real Composer (Chunk 2) will
              handle availability and pricing.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="composer-shell gap-32 md:grid-cols-[7fr_5fr]">
            {/* Stage / SVG Preview */}
            <div>
              <div className="stage bg-ivory border border-gold-soft p-clamp-3.5 md:p-clamp-8.5">
                {/* Mock SVG table view — 2.5D representation */}
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Table composition preview"
                >
                  {/* Table top */}
                  <ellipse cx="200" cy="150" rx="140" ry="80" fill={getSelectionColor("linen")} stroke="#2b2722" strokeWidth="1" />

                  {/* Placemats */}
                  <rect
                    x="160"
                    y="120"
                    width="80"
                    height="60"
                    fill={getSelectionColor("placemat")}
                    stroke="#2b2722"
                    strokeWidth="0.5"
                    opacity="0.8"
                  />
                  <rect
                    x="160"
                    y="140"
                    width="80"
                    height="40"
                    fill={getSelectionColor("charger")}
                    stroke="#2b2722"
                    strokeWidth="0.5"
                    opacity="0.7"
                  />

                  {/* Dinner plate */}
                  <circle
                    cx="200"
                    cy="155"
                    r="22"
                    fill={getSelectionColor("dinner")}
                    stroke="#2b2722"
                    strokeWidth="0.5"
                  />

                  {/* Napkin */}
                  <rect
                    x="240"
                    y="130"
                    width="35"
                    height="35"
                    fill={getSelectionColor("napkin")}
                    stroke="#2b2722"
                    strokeWidth="0.5"
                    opacity="0.85"
                  />

                  {/* Glassware (simple circle) */}
                  <circle
                    cx="250"
                    cy="185"
                    r="8"
                    fill={getSelectionColor("glass")}
                    stroke="#2b2722"
                    strokeWidth="0.5"
                  />

                  {/* Cutlery (simple bars) */}
                  <line
                    x1="145"
                    y1="155"
                    x2="165"
                    y2="155"
                    stroke={getSelectionColor("cutlery")}
                    strokeWidth="2"
                  />
                  <line
                    x1="235"
                    y1="155"
                    x2="255"
                    y2="155"
                    stroke={getSelectionColor("cutlery")}
                    strokeWidth="2"
                  />

                  {/* Décor accent */}
                  <circle
                    cx="140"
                    cy="120"
                    r="6"
                    fill={getSelectionColor("decor")}
                    stroke="#2b2722"
                    strokeWidth="0.5"
                  />

                  {/* Label */}
                  <text
                    x="200"
                    y="250"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#6f6354"
                    letterSpacing="1.5"
                  >
                    for {guests} guest{guests !== 1 ? "s" : ""}
                  </text>
                </svg>
                <p className="small text-center mt-2.5 text-umber">
                  Preview · colours and scale are illustrative only
                </p>
              </div>
            </div>

            {/* Panel with controls */}
            <div>
              <div className="panel bg-ivory border border-gold-soft p-5 md:p-6">
                {/* Guest count */}
                <div className="guests flex items-center gap-3.5 pb-4.5 border-b border-gold-soft/18">
                  <button
                    onClick={() => handleGuestChange(-1)}
                    disabled={guests <= 1}
                    className="btn sm disabled:opacity-45 disabled:cursor-not-allowed"
                  >
                    −
                  </button>
                  <output className="font-serif text-1.3rem text-center min-w-9">
                    {guests}
                  </output>
                  <button
                    onClick={() => handleGuestChange(1)}
                    className="btn sm"
                  >
                    +
                  </button>
                  <span className="small ml-auto">guest{guests !== 1 ? "s" : ""}</span>
                </div>

                {/* Slot accordions */}
                {COMPOSER_SLOTS.map((slot) => {
                  const isOpen = expandedSlot === slot.key;
                  return (
                    <details
                      key={slot.key}
                      open={isOpen}
                      onToggle={(e) => {
                        setExpandedSlot(
                          (e.target as HTMLDetailsElement).open
                            ? slot.key
                            : null
                        );
                      }}
                      className="slotgroup border-b border-gold-soft/18 last:border-b-0"
                    >
                      <summary className="cursor-pointer flex justify-between gap-3 items-baseline py-3.75 px-0 list-none">
                        <span className="sl text-sm letter-spacing-22 uppercase font-500 text-umber">
                          {slot.label}
                        </span>
                        <span className="sv font-serif italic text-base text-ink text-right">
                          {getSelectionName(slot.key)}
                          <span className="small block font-normal not-italic text-umber">
                            {slot.qtyLabel(guests)}
                          </span>
                        </span>
                        <span className="ml-1 font-serif text-1.2rem text-gold flex-shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </summary>

                      {/* Color options */}
                      <div className="opts flex gap-2.5 flex-wrap py-0.5 pb-4.5">
                        {slot.options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOptionClick(slot.key, idx)}
                            style={{
                              backgroundColor: option[0],
                              borderColor:
                                selections[slot.key] === idx
                                  ? "#a8854b"
                                  : "rgba(43, 39, 34, 0.25)",
                              boxShadow:
                                selections[slot.key] === idx
                                  ? "0 0 0 2px #fbf8f2, 0 0 0 3.5px #a8854b"
                                  : "none",
                            }}
                            aria-pressed={
                              selections[slot.key] === idx
                            }
                            title={option[1]}
                            className="opt w-10.5 h-10.5 rounded-full border border-1 transition-all duration-250 hover:translate-y-0.5"
                          />
                        ))}
                      </div>
                    </details>
                  );
                })}

                {/* Line items summary */}
                <div className="lineitems border border-gold-soft bg-ivory p-5 mt-6.5 mb-6.5">
                  <h4 className="font-serif font-400 text-1.15rem mb-2.5">
                    Summary
                  </h4>
                  {COMPOSER_SLOTS.map((slot) => (
                    <div
                      key={slot.key}
                      className="sumline flex justify-between gap-3 py-1.75 text-85"
                    >
                      <span className="q text-umber whitespace-nowrap">
                        {slot.label}
                      </span>
                      <span>
                        <b>{getSelectionName(slot.key)}</b> ·{" "}
                        <span className="text-umber">
                          {slot.qtyLabel(guests)}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-3 flex-col">
                  <Button asLink href="/enquiry" variant="primary" className="w-full text-center">
                    Send enquiry
                  </Button>
                  <Button
                    asLink
                    href="/collection"
                    variant="ghost"
                    className="w-full text-center"
                  >
                    Browse collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section>
        <div className="wrap text-center">
          <div className="notice border border-gold-soft bg-ivory p-6.5">
            <p className="small mb-0">
              MOCK / VISUAL PROTOTYPE ONLY. The real Composer (Chunk 2) will
              connect to live availability, pricing, and booking.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

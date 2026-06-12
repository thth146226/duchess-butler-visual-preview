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
        <div className="wrap">
          <div className="hero-grid hero-grid--copy-only">
            <div className="hero-copy fade">
              <span className="eyebrow">Interactive preview</span>
              <h1 className="display d-xl">The Composer.</h1>
              <p className="lede">
                Select finishes for each slot. Watch your table compose in real
                time. This is a visual prototype. Availability is confirmed
                personally at quote stage. No checkout, no automatic pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="composer-shell">
            <div>
              <div className="stage">
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
                <p className="small text-center" style={{ marginTop: "0.65rem" }}>
                  Preview · colours and scale are illustrative only
                </p>
              </div>
            </div>

            <div>
              <div className="panel">
                <div
                  className="flex items-center gap-3"
                  style={{
                    paddingBottom: "1rem",
                    marginBottom: "1rem",
                    borderBottom: "1px solid rgba(168, 133, 75, 0.18)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleGuestChange(-1)}
                    disabled={guests <= 1}
                    className="btn btn-sm btn-ghost"
                  >
                    −
                  </button>
                  <output
                    className="display"
                    style={{
                      fontSize: "1.3rem",
                      textAlign: "center",
                      minWidth: "2.25rem",
                    }}
                  >
                    {guests}
                  </output>
                  <button
                    type="button"
                    onClick={() => handleGuestChange(1)}
                    className="btn btn-sm btn-ghost"
                  >
                    +
                  </button>
                  <span className="small" style={{ marginLeft: "auto" }}>
                    guest{guests !== 1 ? "s" : ""}
                  </span>
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
                      className="slotgroup"
                    >
                      <summary>
                        <span className="slotgroup__label">{slot.label}</span>
                        <span className="slotgroup__value">
                          {getSelectionName(slot.key)}
                          <span className="slotgroup__value-note">
                            {slot.qtyLabel(guests)}
                          </span>
                        </span>
                        <span className="slotgroup__toggle">
                          {isOpen ? "−" : "+"}
                        </span>
                      </summary>

                      <div className="slotgroup__opts">
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
                            className="composer-opt"
                          />
                        ))}
                      </div>
                    </details>
                  );
                })}

                {/* Line items summary */}
                <div className="lineitems" style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                  <h4 className="lineitems-title">Summary</h4>
                  {COMPOSER_SLOTS.map((slot) => (
                    <div
                      key={slot.key}
                      className="sumline"
                    >
                      <span>{slot.label}</span>
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
                <div className="flex flex-col gap-3">
                  <Button asLink href="/enquiry" variant="primary" className="btn-block">
                    Send enquiry
                  </Button>
                  <Button asLink href="/collection" variant="ghost" className="btn-block">
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
          <div className="notice">
            <p className="small">
              MOCK / VISUAL PROTOTYPE ONLY. This is a visual prototype.
              Availability is confirmed personally at quote stage. No checkout,
              no automatic pricing. 3D is not included in this prototype.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

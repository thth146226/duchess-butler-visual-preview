# Assets

Asset pipeline specifications for the **production build**. The visual prototype uses gradient `PhotoPlaceholder` components only — no real SKU photography or Composer PNG layers.

## Asset classes

| Class | Owner | Chunk | Notes |
|-------|-------|-------|-------|
| **Catalog photography** | Brand / D&B stylists | 1 | WooCommerce media; synced to `studio_items` mirror |
| **Composer 2.5D layers** | Design + retouch | 3 gate | Transparent PNGs per slot/finish; no WebGL |
| **Curated look scenes** | Brand | 3 gate | 7–8 editorial scenes; category-tagged |
| **OG / PDF renders** | Engineering | 3+ | Generated from 2.5D stack (permanent fallback renderer) |
| **Marketing placeholders** | Prototype only | — | Frozen in `visual-preview-v0.4-approved` |

## Composer PNG requirements (Chunk 3 gate)

- Transparent background, consistent table horizon and scale.
- Named by convention: `{slot}/{finish_id}.png` (exact schema TBD in ADR).
- QA checklist: edge halos, shadow consistency, mobile legibility at 375px.

## Builder Collection (Chunk 3 gate)

- **40–60 SKUs** minimum, mapped to Composer slots.
- Each SKU must exist in WooCommerce PIM before mirror sync.

## Storage

- **WooCommerce:** canonical product images.
- **CDN / object storage:** Composer layers and look scene masters (path TBD Chunk 3 — Open question #5).
- **Supabase Storage (optional):** shared composition preview thumbnails — evaluate in Chunk 2.

**Evidence required:** WooCommerce install URL + API access (Open question #4) before catalog asset sync planning is finalised.

## Prototype reference

Do not replace prototype placeholders until Chunk 3 assets are approved. Tag: `visual-preview-v0.4-approved`.

See also: [`../planning/governance-review.md`](../planning/governance-review.md)

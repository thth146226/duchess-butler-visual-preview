# Data Model

Supabase schema definitions, ERDs, and RLS policies belong here. **No migrations are created until Chunk 1 is signed.**

## Planned core entities (Supabase)

| Entity | Purpose |
|--------|---------|
| `studio_items` | Mirror of WooCommerce catalog fields needed by Studio/Composer |
| `curated_looks` | Editorial look definitions (7–8 scenes, category, linked SKUs) |
| `compositions` | Saved table settings; private by default |
| `composition_shares` | Public share tokens → RPC `get_composition(share_id)` |
| `leads` | Enquiry submissions from validated Server Action |
| `events_telemetry` | Product analytics events (lead ladder, Composer usage) |

## Source of truth

| Domain | System of record |
|--------|------------------|
| Catalog SKUs, pricing flags, stock *display policy* | **WooCommerce** (PIM) |
| Studio session state, saves, shares, leads | **Supabase** |
| Transactional email | ESP (TBD Chunk 2) |

## Security principles

- **Never** `NEXT_PUBLIC` service role.
- Public composition reads **only** via `get_composition(share_id)` RPC — no anon `SELECT` on `compositions`.
- RLS enabled on all user-facing tables from day one.
- Share tokens: unguessable `share_id`, expiry/revocation — **Decision required** (see governance review).
- Lead retention and lawful basis — **Evidence required** from Legal (Open question #7).

## Planning gaps (governance review)

| Gap | Status |
|-----|--------|
| `composition_items` junction table | **Decision required** at Chunk 2 |
| Index strategy for `studio_items` sync | Planned post Q#4 field mapping |
| Lead retention period | **Decision required** — Legal |

## Deliverables (post Chunk 1 signed acceptance)

- [ ] ERD diagram
- [ ] SQL migration files (versioned)
- [ ] RLS policy document per table
- [ ] WooCommerce → `studio_items` sync field mapping

Canonical plan: [`../planning/technical-implementation-plan.md`](../planning/technical-implementation-plan.md)  
Governance review: [`../planning/governance-review.md`](../planning/governance-review.md)

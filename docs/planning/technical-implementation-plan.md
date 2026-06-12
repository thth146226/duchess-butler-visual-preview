# Duchess & Butler — Technical Implementation Plan

**Document type:** Planning only — no production implementation  
**Status:** Draft — governance review applied (see [`governance-review.md`](./governance-review.md))  
**Visual reference:** Tag `visual-preview-v0.4-approved` · Branch `prototype/nextjs-visual-preview-v0-2`  
**PRD baseline:** v6  
**Last updated:** 2026-06-12  

> **Governance lock:** Until Chunk 1 **signed acceptance** is recorded, this repository must not receive: Supabase migrations, Vercel production env vars, WooCommerce credentials, Server Actions that persist leads, or any code deployed to the customer-facing production domain. Planning, ADRs, and discovery spikes only.

---

## 1. Executive summary

The approved **visual prototype v0.4** validates brand direction, information architecture, and UX copy for a luxury tablescape hire experience. It is **not** production code: catalog, Composer, enquiry, and My Table are mock-only (localStorage, simulated forms, gradient placeholders).

The **MVP production build** delivers:

1. **Site Core Premium** — marketing and catalog surfaces as Server Components, fed by WooCommerce as PIM.
2. **Tablescape Studio + Composer 2.5D** — client island for layering real rental SKUs using Canvas or absolutely positioned transparent PNGs (no WebGL in MVP).

**Supabase** holds Studio state: catalog mirror, curated looks, compositions, leads, and telemetry. **Enquiry** becomes a validated Server Action (Zod) with persistence and email dispatch.

Work is **gated by chunks**. No Chunk 2/3 production code starts before **signed Chunk 1 acceptance**. Composer Chunk 3 opens only when **40–60 Builder SKUs + 7–8 curated look scenes + QA** are approved. **3D (Chunk 4)** is explicitly out of MVP scope; 2.5D remains the permanent fallback and OG/PDF renderer.

This document defines target architecture, sequencing, security, and quality gates. It does **not** authorise migrations, env vars, WooCommerce wiring, or Supabase integration in the prototype repository until gates are met.

---

## 2. What is already approved

Frozen under `visual-preview-v0.4-approved`:

| Area | Approved artefact |
|------|-------------------|
| **Visual language** | Linen/ink/gold tokens, serif/sans pairing, premium buttons, fixed site chrome |
| **IA / routes** | `/`, `/studio`, `/collection`, `/composer`, `/lookbook`, `/weddings`, `/brand-events`, `/private-dining`, `/my-table`, `/enquiry`, `/product/[id]` |
| **Copy guardrails** | No “Chunk N”, no live availability, no automatic pricing, no direct booking; quote-stage language |
| **Studio narrative** | “Start your vision. Our team refines.” · lead ladder framing |
| **Lookbook portfolio shape** | 7 looks: 3 weddings · 2 brand events · 1 private dining · 1 seasonal |
| **Composer UX shell** | Slot accordions, guest count, 2.5D preview area, summary panel, enquiry CTA |
| **Lead ladder UX** | Add to My Table → (Save/Share placeholders) → Enquiry |
| **Prototype banner** | “mock content only · no prices · no live availability · no 3D” |
| **Responsive QA** | Desktop 1440 · tablet 768 · mobile 390/375; header offset fix (`a690788`) |

**Repository stack (prototype):** Next.js 16 App Router, React 19, Tailwind CSS 4, TypeScript — no backend dependencies.

---

## 3. What remains mock / prototype

| Surface | Current behaviour | Production replacement |
|---------|-------------------|------------------------|
| **Collection / PDP** | `MOCK_ITEMS`, static params | WooCommerce PIM → `studio_items` mirror |
| **Lookbook** | `MOCK_LOOKS`, placeholders | `curated_looks` + real photography |
| **Composer** | SVG mock, hex swatches | 2.5D layer stack from approved PNGs |
| **My Table** | `localStorage` (`dnb-proto-mytable`) | Supabase composition draft / session |
| **Save / Share** | Not implemented | `compositions` + `get_composition(share_id)` RPC |
| **Enquiry** | Client-side mock validation | Server Action + Zod + `leads` + ESP |
| **Pricing / stock** | Not shown (by design) | Human quote stage only; no checkout |
| **Analytics** | None | `events_telemetry` |
| **Images** | `PhotoPlaceholder` gradients | CDN + WooCommerce media |
| **Private dining IA** | Placeholder page | Product decision pending (Chunk 1 scope item) |

**Rule:** Do not mutate prototype routes or copy on the approved tag. Future build work starts on a **discovery branch** (`planning/chunk-1-discovery`) — not a `production/*` branch — until Chunk 1 signed acceptance. See [Governance review](./governance-review.md).

---

## 4. Chunk gates and sequencing

```
┌─────────────────────────────────────────────────────────────────┐
│  Chunk 1 — Site Core Premium (+ signed acceptance)               │
│  WooCommerce PIM · catalog SSR · marketing pages · SEO baseline  │
│  Supabase project shell · studio_items mirror · no Composer prod │
└───────────────────────────────┬─────────────────────────────────┘
                                │ SIGNED ACCEPTANCE REQUIRED
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│  Chunk 2 — Studio state & Enquiry                                │
│  My Table persistence · Save draft · Enquiry Server Action       │
│  Leads table · email · telemetry hooks · RLS foundation          │
└───────────────────────────────┬─────────────────────────────────┘
                                │ ASSETS + QA GATE
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│  Chunk 3 — Composer 2.5D (40–60 SKUs · 7–8 looks · PNG QA)      │
│  Lazy client island · Canvas/abs PNG stack · Share · OG/PDF      │
│  NO WebGL                                                        │
└───────────────────────────────┬─────────────────────────────────┘
                                │ MEASURED GATE (metrics TBD)
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│  Chunk 4 — Optional 3D (post-MVP)                                │
│  WebGL/R3F evaluation only after Chunk 3 KPIs                    │
│  2.5D remains permanent fallback                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Gate criteria (summary)

| Gate | Entry criteria | Exit / sign-off |
|------|----------------|-----------------|
| **Chunk 1** | PRD v6 signed; WC PIM access; domain/DNS plan | Catalog live from PIM; mirror sync; Lighthouse/SEO baseline; **written acceptance** |
| **Chunk 2** | Chunk 1 signed | Enquiry E2E (persist + email); My Table server-backed; RLS reviewed |
| **Chunk 3** | Builder Collection 40–60 SKUs approved; 7–8 look scenes + PNG QA | Composer 2.5D with real assets; Share via RPC; no WebGL |
| **Chunk 4** | Chunk 3 measured gate | Separate PRD amendment; 3D prototype spike |

**Hard rule:** No production code for Chunk 2 or 3 begins before Chunk 1 acceptance is recorded (ADR + sign-off artefact in `docs/adr/`).

**Chunk 1 pre-implementation (no code/migrations/env vars until all ✅):** See checklist in [`governance-review.md`](./governance-review.md) §5.

---

## 5. Target production architecture

```
                    ┌──────────────────┐
                    │   End users      │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │  Vercel (Next.js) │
                    │  App Router SSR   │
                    └────────┬─────────┘
           ┌─────────────────┼─────────────────┐
           │                 │                 │
   ┌───────▼──────┐  ┌───────▼──────┐  ┌───────▼──────┐
   │ WooCommerce  │  │  Supabase    │  │  ESP (email) │
   │ (PIM / REST) │  │  Postgres    │  │  transactional│
   │ + Media CDN  │  │  RLS + RPC   │  │              │
   └──────────────┘  └──────────────┘  └──────────────┘
```

| Layer | Responsibility |
|-------|----------------|
| **Next.js (Vercel)** | SSR/SSG marketing & catalog; Server Actions; API routes for webhooks/sync |
| **WooCommerce** | SKU master, collections, attributes, media URLs, hire metadata |
| **Supabase** | Studio mirror, compositions, shares, leads, telemetry |
| **CDN** | Composer PNG layers, look scenes, optimised catalog images |
| **ESP** | Enquiry notifications to stylists |

**Non-goals in MVP:** Checkout, live stock API, automatic pricing, customer accounts, WebGL.

---

## 6. Next.js App Router architecture

### Repository strategy

| Branch / tag | Purpose | Deploy |
|--------------|---------|--------|
| `prototype/nextjs-visual-preview-v0-2` + `visual-preview-v0.4-approved` | Frozen reference — read-only | Prototype preview only |
| `planning/chunk-1-discovery` (**recommended**) | Discovery, ADRs, field-mapping docs, non-persisted spikes | Preview only — **no production domain** |
| `chunk-1/discovery-governance` (alternative name) | Same as above | Preview only |
| `staging` | Post-acceptance integration testing | Staging domain |
| `main` | Customer-facing production | Production domain — **after Chunk 1 signed acceptance** |

**Rejected naming:** `production/chunk-1` — implies live production before acceptance.

**Decision required:** Final repo strategy (same repo vs monorepo) — Open question #10; resolve via ADR-000 before kickoff.

### App structure (target)

```
src/
  app/                    # Routes (mostly Server Components)
  components/
    ui/                   # Design system (port from prototype)
    layout/               # Header, Footer, chrome
    catalog/              # Server + minimal client filters
    studio/               # Server wrappers
    composer/             # Client island entry only
  lib/
    woocommerce/          # PIM client (server-only)
    supabase/             # Server + browser clients (anon only in browser)
    validations/          # Zod schemas (enquiry, composition)
    composer/             # 2.5D engine (client)
  actions/                # Server Actions ('use server')
```

### Rendering strategy

- **Default:** Server Components, `fetch` with caching tags for catalog.
- **Composer:** Single lazy-loaded client boundary (`next/dynamic`, `ssr: false` or partial SSR shell).
- **Mutations:** Server Actions only — no public write RPC from browser except via action endpoints.

---

## 7. Route map

| Route | Prototype | Production | Rendering |
|-------|-----------|------------|-------------|
| `/` | ✅ | Marketing home | Server |
| `/studio` | ✅ | Studio hub | Server |
| `/collection` | ✅ | Catalog index | Server + client filter island |
| `/product/[slug]` | `[id]` mock | PDP from PIM | Server (ISR) |
| `/lookbook` | ✅ 7 mocks | Curated looks gallery | Server |
| `/lookbook/[slug]` | — | Look detail | Server |
| `/composer` | ✅ mock | Composer 2.5D | Server shell + client island |
| `/composer/share/[shareId]` | — | Public shared composition | Server via RPC |
| `/my-table` | ✅ localStorage | Saved draft / session | Server + client |
| `/enquiry` | ✅ mock form | Enquiry form | Server + client form → Action |
| `/weddings` | ✅ | Landing | Server |
| `/brand-events` | ✅ | Landing | Server |
| `/private-dining` | placeholder | TBD post Chunk 1 IA | Server |
| `/api/webhooks/woocommerce` | — | Sync trigger | Route handler |
| `/api/health` | — | Ops | Route handler |

**Migration note:** Prototype uses `/product/m1` style IDs; production should use **WooCommerce slugs** with redirect map from legacy URLs if any.

---

## 8. Component boundaries: Server vs Client

| Component / area | Server | Client | Notes |
|------------------|--------|--------|-------|
| Layout chrome, Footer | ✅ | | My Table **count** needs client hydration or server session |
| Marketing heroes | ✅ | | Port prototype markup |
| Collection grid | ✅ | Filter chips optional client | Prefer URL searchParams server-side |
| PDP | ✅ | Add to My Table button | Action or optimistic client + revalidate |
| Lookbook grid | ✅ | | |
| Studio “How it works” | ✅ | | Copy frozen from prototype |
| **Composer** | Shell only | ✅ entire island | Lazy load |
| Enquiry form fields | | ✅ | Submit → Server Action |
| My Table list | ✅ load | ✅ mutations | Supabase-backed |
| Analytics beacons | | ✅ lightweight | POST via Server Action or edge |
| Toast / modals | | ✅ | |

**Principle:** Push data fetching to the server; isolate interactivity to the smallest client subtrees.

---

## 9. WooCommerce as PIM

WooCommerce is the **system of record** for hire catalog metadata.

### Sync model (recommended — post Chunk 1 acceptance only)

1. **Webhook** (product create/update/delete) → Next.js route handler → idempotent upsert `studio_items`.
2. **Nightly reconciliation job** (Vercel cron) for drift recovery.
3. **No direct WC queries from browser.**

### Sync reliability (planning requirements)

| Requirement | Detail |
|-------------|--------|
| Idempotency | Upsert keyed on `wc_product_id`; safe replay |
| Failure handling | Dead-letter log + alert — **Evidence required:** alerting owner TBD with D&B Ops |
| Conflict policy | WooCommerce wins on catalog fields; Supabase-only fields (`composition_*`) never overwritten by sync |
| Rollback | Disable webhook + revert to last known good mirror snapshot — see §20 Rollback |

**Evidence required before sync design finalised:** WooCommerce install URL + API access (Open question #4).

### Fields to mirror into `studio_items` (minimum)

| Field | Use |
|-------|-----|
| `wc_product_id`, `slug`, `sku` | Identity |
| `name`, `collection`, `slot` | Catalog + Composer |
| `image_url`, `thumbnail_url` | Grid + 2.5D reference |
| `composer_eligible` | Builder Collection flag |
| `finish_variant_group` | Maps to PNG layer set |
| `display_order`, `status` | Merchandising |
| `updated_at` | Cache invalidation |

### Explicit non-sync

- Live stock counts for public display (quote-stage only).
- Price for automatic checkout (not in MVP).

---

## 10. Supabase data model

Detailed ERD: [`../data-model/README.md`](../data-model/README.md)

### Core tables (draft)

```sql
-- Illustrative only — NOT migration-ready

studio_items          -- mirror of WC catalog for Studio
curated_looks         -- editorial scenes (7–8)
curated_look_items    -- M:N look ↔ studio_items
compositions          -- user/table settings (private default)
composition_items     -- line items per composition
composition_shares    -- share_id, expires_at, composition_id
leads                 -- enquiry payloads
events_telemetry      -- event_name, payload, session_id, created_at
```

### Composition document (logical)

```typescript
// Illustrative TypeScript shape
interface Composition {
  id: uuid;
  session_id?: string;
  user_id?: uuid;          // optional future auth
  guest_count: number;
  slot_selections: Record<SlotKey, FinishId>;
  source: 'composer' | 'lookbook' | 'my-table';
  created_at: timestamp;
  updated_at: timestamp;
}
```

---

## 11. RLS / security model

| Table | anon | authenticated | service_role |
|-------|------|---------------|--------------|
| `studio_items` | SELECT published | — | sync writes |
| `curated_looks` | SELECT published | — | admin |
| `compositions` | **no SELECT** | INSERT/UPDATE own (future) | admin |
| `composition_shares` | **no direct SELECT** | — | admin |
| `leads` | **no access** | — | insert via Server Action only |
| `events_telemetry` | INSERT scoped | — | read analytics |

### Public share rule

- **Never** expose `compositions` to anon `SELECT`.
- Public read path: **`get_composition(share_id)`** RPC returning sanitised snapshot (no PII, no internal IDs).

### Share link security (planning requirements)

| Control | Detail |
|---------|--------|
| Token format | Unguessable `share_id` (≥128-bit entropy) |
| Expiry | **Decision required** — default TTL (e.g. 90 days) vs event-date-linked |
| Revocation | Owner/admin can invalidate share row |
| Rate limiting | RPC throttled per IP — implement at Chunk 2/3 |
| Abuse | No enumeration; generic 404 on invalid/expired share |

### Composition ownership — **Decision required** (Open question #3)

| Model | Implication |
|-------|-------------|
| Anonymous session | `session_id` cookie + server-side draft; Share via opaque link only |
| Magic-link email | Owner can re-open Save/Share; requires ESP + token table |

**No implementation of Save/Share ownership until Product closes Open question #3.**

### Server Action security

- Enquiry Action uses **service role on server only** (env var without `NEXT_PUBLIC` prefix).
- Rate limiting at edge (Vercel) or Supabase function — TBD Chunk 2.
- Zod validation on all inputs; honeypot field for spam.

### Secrets

| Secret | Location |
|--------|----------|
| `SUPABASE_SERVICE_ROLE_KEY` | Vercel env (server only) |
| `SUPABASE_ANON_KEY` | Server + client (RLS-protected) |
| `WOOCOMMERCE_CONSUMER_*` | Vercel env (server only) |
| `ESP_API_KEY` | Vercel env (server only) |

---

## 12. Composer 2.5D architecture

### Renderer choice

| Option | MVP recommendation |
|--------|---------------------|
| **HTML Canvas** | Primary — layer compositing, export to PNG for OG/PDF |
| **Absolute-positioned PNG `<img>` layers** | Acceptable for static previews; simpler debugging |
| **WebGL / R3F** | **Forbidden in Chunk 3** |

### Layer stack (logical z-order)

1. Table / linen base  
2. Placemat  
3. Charger  
4. Dinner plate  
5. Napkin  
6. Cutlery  
7. Glassware  
8. Décor accents  

Each slot maps to **approved finish PNGs** (transparent), not hex fills.

### Client module layout

```
lib/composer/
  engine/           # draw loop, layer manager
  assets/           # manifest loader (URLs from CDN)
  state/            # slot selections, guest count
  export/           # PNG snapshot for share/OG
```

### Performance

- Lazy-load Composer bundle (`dynamic(..., { loading: ComposerSkeleton })`).
- Preload only active slot assets; idle prefetch adjacent slots.
- Target: LCP on `/composer` shell < 2.5s mobile (Chunk 3 QA gate).

### Permanent fallback

2.5D renderer remains available even if Chunk 4 3D is added — used for **OG images, PDF exports, low-power devices**.

---

## 13. Asset pipeline

See [`../assets/README.md`](../assets/README.md)

| Stage | Owner | Output |
|-------|-------|--------|
| **Photography / retouch** | Brand | Master PNGs per finish |
| **QA** | Design + Engineering | Checklist sign-off |
| **Manifest generation** | Engineering | JSON manifest `{ slot, finishId, url, width, height, anchor }` |
| **CDN publish** | DevOps | Versioned path `/composer/v1/...` |
| **WC media** | Ops | Catalog images |

**Versioning:** Manifest version bump invalidates CDN cache; compositions store `asset_version` for reproducible renders.

---

## 14. Builder Collection requirements

Minimum **40–60 SKUs** before Chunk 3 Composer production:

| Requirement | Detail |
|-------------|--------|
| Slot coverage | All Composer slots represented × multiple finishes |
| WC linkage | Each SKU live in WooCommerce with hire metadata |
| Mirror sync | Present in `studio_items` with `composer_eligible = true` |
| PNG layers | Each finish variant has QA-approved transparent asset |
| Naming | Internal SKU codes; customer-facing names from PIM |
| Legal | Hire terms attached in WC/admin — not in MVP UI |

Prototype `MOCK_ITEMS` (~12 items) is **not** the Builder Collection.

---

## 15. Curated Looks requirements

Minimum **7–8 look scenes** (matches approved prototype distribution):

| Category | Count |
|----------|-------|
| Weddings | 3 |
| Brand events | 2 |
| Private dining | 1–2 |
| Seasonal | 1 |

Each look record includes:

- Editorial photography (Web-optimised)
- Category tag
- Linked `studio_items` (starting SKU bundle)
- Optional `composition_template` JSON for “Open in Composer”
- **No final marketing names locked in prototype** — production names from brand sign-off

---

## 16. Lead flow: My Table → Save → Share → Enquiry

```
Browse catalog ──► Add to My Table ──► Save composition (Supabase)
                           │                    │
                           │                    ▼
                           │              Share (share_id link)
                           │                    │
                           ▼                    ▼
                    Open Composer ◄────── RPC get_composition
                           │
                           ▼
                      Enquiry form
                           │
                           ▼
              Server Action (Zod) ──► leads + ESP email
```

| Step | Prototype | Production |
|------|-----------|------------|
| **Add to My Table** | localStorage | Session or anonymous draft in Supabase |
| **Save** | — | Persist `compositions` + `composition_items` |
| **Share** | — | Create `composition_shares`; public URL |
| **Enquiry** | Mock client validation | Server Action → `leads` + email to stylists |

### Enquiry payload (minimum)

- Contact: name, email  
- Event: type, date, guest count  
- Composition reference: `composition_id` or `share_id`  
- Line items snapshot (read-only copy)  
- Notes  
- Telemetry: `source`, `session_id`, `utm_*`

**Copy rule (retained):** “Availability is confirmed personally at quote stage. No checkout, no automatic pricing.”

### Lead privacy & GDPR (planning — **Evidence required** from Legal)

| Topic | Requirement |
|-------|-------------|
| Lawful basis | Documented before enquiry form persists PII (ties to Open question #7) |
| Retention | **Decision required** — lead row retention period + deletion process |
| ESP processing | DPA with email provider before Chunk 2 |
| Storage | `leads` table: server-only insert; no anon read; encrypt at rest (Supabase default) |
| Telemetry | No PII in `events_telemetry`; enquiry events use internal `lead_id` reference only |
| Data subject requests | Process TBD with D&B Legal before production launch |

---

## 17. Analytics / telemetry

Table: `events_telemetry`

| Event | When |
|-------|------|
| `catalog_item_viewed` | PDP view |
| `my_table_item_added` | Add to My Table |
| `composition_saved` | Save |
| `composition_shared` | Share link created |
| `composer_slot_changed` | Finish selected |
| `enquiry_submitted` | Successful Server Action |
| `enquiry_failed_validation` | Zod rejection |

**Privacy:** No PII in telemetry payloads; hash session client-side; GDPR notice in footer (Chunk 1 legal).

**Tooling:** Supabase table first; optional export to Plausible/GA4 later — ADR required.

---

## 18. SEO, redirects and migration risk

| Risk | Mitigation |
|------|------------|
| URL change `/product/m1` → `/product/[slug]` | 301 map from mock IDs if ever indexed |
| Legacy WordPress URLs | Redirect CSV from current site audit (Chunk 1) |
| Thin placeholder pages | `private-dining` noindex until IA complete |
| OG images | Composer 2.5D export per share (Chunk 3) |
| Sitemap | Generated from WooCommerce published products |
| Structured data | `Product` schema on PDP — hire, not retail offer |

**Prototype domain vs production:** Vercel preview URLs should carry `noindex` (already appropriate for prototype).

---

## 19. Testing and quality gates

| Layer | Tooling | Gate |
|-------|---------|------|
| **Unit** | Vitest | Zod schemas, composer state reducers |
| **Component** | Storybook (optional) | UI port from prototype |
| **E2E** | Playwright | Enquiry submit, share link read, catalog browse |
| **Visual regression** | Chromatic or Percy | Against prototype screenshots |
| **a11y** | axe in CI | WCAG 2.1 AA on marketing + form |
| **Performance** | Lighthouse CI | Chunk 1 baseline scores documented |
| **Security** | RLS policy tests | anon cannot read `compositions` |
| **Load** | k6 (optional) | Enquiry Action rate limits |

### Chunk sign-off checklists

Each chunk requires written checklist + approver signature stored in `docs/adr/` or project wiki.

---

## 20. Environments and deployment workflow

| Environment | Branch | Purpose |
|-------------|--------|---------|
| **Prototype** | `prototype/*` tag `visual-preview-v0.4-approved` | Frozen — no deploy changes |
| **Preview** | PR branches | CI lint/build/e2e |
| **Staging** | `staging` | WC staging + Supabase staging |
| **Production** | `main` | Customer-facing |

### CI pipeline (target)

1. `npm run lint`  
2. `npm run build`  
3. Unit tests  
4. Playwright smoke  
5. Deploy preview (Vercel)  
6. Manual QA for staging promotion  

**Env vars:** Introduced per chunk in Vercel — never committed. **No env vars in this repository until Chunk 1 signed acceptance.**

### Rollback strategy (planning)

| Scenario | Rollback action |
|----------|-----------------|
| Bad catalog sync | Pause WC webhook + cron; restore `studio_items` from nightly snapshot; re-run reconciliation |
| Broken deploy (Chunk 1+) | Vercel instant rollback to previous deployment; feature flags off |
| Erroneous share exposure | Revoke `composition_shares` rows; disable `get_composition` RPC via migration flag |
| Lead/ESP incident | Disable enquiry Server Action; queue leads locally — **Decision required:** fallback queue owner |
| Prototype contamination | Never deploy from `prototype/*`; tag `visual-preview-v0.4-approved` is immutable reference |

**Evidence required:** Nightly `studio_items` snapshot ownership and RPO/RTO targets — agree with D&B Ops at Chunk 1 acceptance.

---

## 21. 3D roadmap and non-goals

### MVP non-goals

- WebGL, R3F, Three.js in Chunk 3  
- Real-time availability API  
- Checkout / payments  
- Automatic pricing engine  
- Customer login / accounts (unless scoped later)  
- WooCommerce cart on front-end  
- Exposing Supabase service role to client  
- Anon open SELECT on compositions  

### Chunk 4 — 3D (post-gate)

| Prerequisite | Detail |
|--------------|--------|
| Chunk 3 KPIs | Composer completion rate, enquiry conversion, performance budget |
| Asset pipeline | GLB/USDZ standards TBD |
| Fallback | 2.5D always available |

3D is **not promised** in any public copy until Chunk 4 PRD amendment is signed.

---

## 22. Open questions

| # | Question | Owner | Blocking |
|---|----------|-------|----------|
| 1 | Private dining IA — keep route or merge into weddings? | Product | Chunk 1 |
| 2 | ESP selection (Resend, Postmark, SendGrid)? | Engineering | Chunk 2 |
| 3 | Anonymous vs magic-link identity for Save/Share? | Product | Chunk 2 |
| 4 | WooCommerce hosting — existing install URL + API access | Client/Ops | Chunk 1 — **see [governance-review.md §3](./governance-review.md)** |
| 5 | CDN for Composer PNGs — Vercel Blob vs Cloudflare R2 | Engineering | Chunk 3 |
| 6 | Exact Builder Collection SKU list sign-off | Brand | Chunk 3 gate |
| 7 | Legal pages migration (Terms, Privacy, hire conditions) | Legal | Chunk 1 — **see [governance-review.md §3](./governance-review.md)** |
| 8 | Analytics: Supabase-only vs dual-write to Plausible | Product | Chunk 2 |
| 9 | PDF quote export scope — in MVP or post Chunk 3? | Product | Chunk 3 |
| 10 | Production repo strategy — same repo new branch vs monorepo | Engineering | Chunk 1 kickoff — **see [governance-review.md §3](./governance-review.md)** |

---

## Appendix A — Prototype file inventory (reference)

| Path | Role |
|------|------|
| `src/lib/mock/items.ts` | Sample catalog |
| `src/lib/mock/looks.ts` | 7 look placeholders |
| `src/lib/mock/composer.ts` | Slot definitions |
| `src/lib/storage/myTable.ts` | localStorage adapter |
| `src/components/composer/ComposerMock.tsx` | SVG mock Composer |
| `src/components/enquiry/EnquiryForm.tsx` | Mock enquiry |
| `src/app/globals.css` | Design tokens + layout |

## Appendix B — Related docs

- [Governance review](./governance-review.md)
- [Architecture overview](../architecture/README.md)
- [ADR index](../adr/README.md)
- [Asset pipeline](../assets/README.md)
- [Data model](../data-model/README.md)

---

*This document is planning-only. **No production implementation**, migrations, or env vars until Chunk 1 **signed acceptance** and Open questions #4, #7, #10 are closed (see governance review).*

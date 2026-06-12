# Governance Review — Technical Implementation Plan

**Review type:** Planning / governance only — no production implementation  
**Reviewer role:** Principal Engineer · Technical Architect · Product Governance  
**Documents reviewed:**  
- `docs/planning/technical-implementation-plan.md`  
- `docs/adr/README.md`  
- `docs/assets/README.md`  
- `docs/data-model/README.md`  
- `docs/architecture/README.md`  
**Visual baseline:** Tag `visual-preview-v0.4-approved`  
**Review date:** 2026-06-12  
**Outcome:** Plan is **directionally aligned with v6/PRD** but **not ready for Chunk 1 implementation** until blocking decisions and governance artefacts are closed.

---

## 1. Compliance with v6 / PRD constraints

| Constraint | Verdict | Notes |
|------------|---------|-------|
| Visual prototype = reference, not production | ✅ Pass | Tag and mock inventory documented |
| MVP = Site Core + Composer 2.5D | ✅ Pass | Chunk sequencing correct |
| 3D only after measured gate (Chunk 4) | ✅ Pass | Explicit non-goals |
| WooCommerce = PIM / source of truth | ✅ Pass | Mirror model defined |
| Supabase = mirror / compositions / leads + RLS | ⚠️ Partial | RLS draft OK; ownership & share abuse gaps |
| Composer 2.5D, no WebGL in MVP | ✅ Pass | Forbidden in Chunk 3 |
| Real assets before Composer production | ✅ Pass | 40–60 SKUs + 7–8 looks gate |
| No live availability / payment / direct booking / auto pricing | ✅ Pass | Non-goals + copy rules |

---

## 2. Risk register (gaps found in original plan)

| Area | Severity | Gap | Mitigation (planning) |
|------|----------|-----|------------------------|
| **Branch naming** | Medium | `production/chunk-1` implied live prod | Renamed → `planning/chunk-1-discovery` |
| **Governance language** | High | Some sections read as build-ready | Added explicit pre-acceptance locks |
| **WooCommerce sync** | High | No idempotency, DLQ, or rollback | Added sync failure + rollback section |
| **Supabase schema** | Medium | `composition_items`, indexes, retention undefined | Flagged in data-model README |
| **RLS / share links** | High | No expiry, revocation, rate limit on RPC | Added share security requirements |
| **Magic link / owner** | High | Open Q#3 unresolved | **Decision required** before Chunk 2 |
| **Lead privacy** | High | Retention, ESP DPA, lawful basis not specified | Added privacy governance section |
| **Asset pipeline** | Medium | CDN path TBD (Q#5) — Chunk 3 | Catalog assets blocked by Q#4 |
| **SEO redirects** | Medium | Legacy WP audit owner missing | **Evidence required** |
| **Testing gates** | Medium | Chunk 1 checklist not templated | Sign-off template required pre-kickoff |
| **Analytics** | Low | Session hashing unspecified | ADR at Chunk 2 |
| **Rollback strategy** | High | **Missing entirely** | Added §20 appendix in main plan |
| **Environment strategy** | Medium | Staging WC/Supabase URLs depend on Q#4 | Blocked until WC access confirmed |

---

## 3. Open questions #4, #7, #10 — exact text & Chunk 1 blockers

### Open question #4 (exact text)

> **WooCommerce hosting — existing install URL + API access**  
> Owner: Client/Ops · Blocking: Chunk 1

**Why it blocks Chunk 1:**  
Without a confirmed WooCommerce base URL and API access model, engineering cannot:

- Define webhook endpoint targets or staging vs production PIM separation  
- Map product attributes (`collection`, `slot`, hire metadata) to `studio_items`  
- Configure server-only credentials (even in planning docs, field names depend on WC schema)  
- Stand up a staging catalog sync or SEO redirect audit against live SKUs  
- Validate legal/product copy against real hire listings  

**To close — Decision required + Evidence required:**

| Action | Owner | Deliverable |
|--------|-------|-------------|
| Confirm WC install URL(s) — prod + staging | D&B / Ops | Written URL list |
| Issue REST API credentials (read-only for Chunk 1) | D&B / Ops | Secure handoff process — not in repo |
| Product attribute audit workshop | Product + Engineering | Field mapping spreadsheet |
| Webhook feasibility (hosting/firewall) | Ops | Yes/no + endpoint path |

---

### Open question #7 (exact text)

> **Legal pages migration (Terms, Privacy, hire conditions)**  
> Owner: Legal · Blocking: Chunk 1

**Why it blocks Chunk 1:**  
Site Core Premium cannot launch publicly without:

- Footer links to Terms, Privacy Policy, and hire conditions  
- GDPR lawful basis statement for enquiry form (lead capture)  
- Cookie/consent approach if analytics added  
- Hire-specific disclaimers (“quote stage”, no automatic pricing) legally reviewed  

Chunk 1 exit criteria include “catalog live from PIM” on a **customer-facing** surface — legal pages are part of that surface.

**To close — Decision required + Evidence required:**

| Action | Owner | Deliverable |
|--------|-------|-------------|
| Legal content workshop | D&B Legal | Approved copy for Terms, Privacy, hire conditions |
| Enquiry form privacy notice | Legal | Text + checkbox requirement decision |
| Migration source | D&B | Current site URLs or document exports |
| Sign-off artefact | Legal | Dated approval email or signed PDF |

---

### Open question #10 (exact text)

> **Production repo strategy — same repo new branch vs monorepo**  
> Owner: Engineering · Blocking: Chunk 1 kickoff

**Why it blocks Chunk 1 kickoff:**  
Kickoff implies branching, CI targets, Vercel project linkage, and prototype freeze enforcement:

- Same repo: risk of accidental changes to `visual-preview-v0.4-approved` tag baseline  
- Monorepo: package boundaries, shared design tokens, deploy isolation  
- Affects who deploys `main`, preview URLs, and rollback scope  

**To close — Decision required:**

| Option | Pros | Cons |
|--------|------|------|
| **A. Same repo, `planning/chunk-1-discovery` branch** | Single history; easy prototype diff | Requires branch protection + path CI guards |
| **B. New repo `duchess-butler-web`** | Hard separation from prototype | Dual maintenance; token port effort |
| **C. Monorepo (`apps/web`, `packages/ui`)** | Scales to future apps | Overhead for MVP |

**Recommended for governance review:** Option A with branch protection on `prototype/*` tags and no deploy from discovery branch to production domain until Chunk 1 signed acceptance.  
**Meeting required:** Engineering + D&B stakeholder — record outcome as **ADR-000-repo-strategy** (status: Proposed until meeting).

---

## 4. Branch naming decision

| Name | Assessment |
|------|------------|
| `production/chunk-1` | ❌ Rejected — implies production deployment |
| `planning/chunk-1-discovery` | ✅ **Recommended** — discovery, docs, spikes only |
| `chunk-1/discovery-governance` | ✅ Acceptable alternative |

**Rule:** No branch matching `production/*` may receive WooCommerce credentials, Supabase migrations, or production Vercel env vars until **Chunk 1 signed acceptance** artefact exists.

---

## 5. Pre-implementation checklist (Chunk 1 kickoff)

All must be ✅ before any migration, env var, or WC/Supabase wiring:

- [ ] Open Q#4 closed (WC URL + API access evidence)  
- [ ] Open Q#7 closed (Legal pages signed)  
- [ ] Open Q#10 closed (ADR-000 repo strategy accepted)  
- [ ] ADR-000 filed and accepted  
- [ ] Chunk 1 acceptance criteria document signed by D&B  
- [ ] Branch protection rules configured  
- [ ] `planning/chunk-1-discovery` (or successor) created — **not** `production/*`  
- [ ] Rollback runbook acknowledged (see main plan §20)  

---

## 6. Recommendation

| Question | Answer |
|----------|--------|
| **Advance to Chunk 1 implementation now?** | **No** |
| **Advance to Chunk 1 discovery / governance / ADR work?** | **Yes** — on `planning/chunk-1-discovery` only |
| **Is the Technical Implementation Plan approved as target architecture?** | **Conditionally yes** — subject to amendments in this review |

---

## 7. Change log

| Date | Change |
|------|--------|
| 2026-06-12 | Initial governance review; plan amendments applied in `technical-implementation-plan.md` |

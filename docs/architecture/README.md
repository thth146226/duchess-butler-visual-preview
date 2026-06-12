# Architecture

This folder holds system-level architecture artefacts for the **production build** of Duchess & Butler.

## Purpose

- High-level diagrams and decision records that span Next.js, WooCommerce (PIM), Supabase, email, and CDN.
- **Not** the visual prototype — see tag `visual-preview-v0.4-approved` on branch `prototype/nextjs-visual-preview-v0-2`.

## Contents (planned)

| Artefact | Status |
|----------|--------|
| System context diagram | Planned — Chunk 1 gate |
| Request/data flow (catalog → Studio → Enquiry) | Planned |
| Environment topology (preview / staging / production) | Planned |
| Security boundaries (RLS, service role, public RPC) | Planned |

## Canonical reference

Primary sequencing and stack decisions live in:

- [`../planning/technical-implementation-plan.md`](../planning/technical-implementation-plan.md)
- [`../planning/governance-review.md`](../planning/governance-review.md) — governance review outcome and Chunk 1 blockers

Architecture Decision Records (ADRs) live in [`../adr/`](../adr/).

> **Planning only:** No production implementation, migrations, or env vars until Chunk 1 signed acceptance.

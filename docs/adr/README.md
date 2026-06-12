# Architecture Decision Records (ADR)

ADRs capture **why** production choices were made. They are created during the real build, not during the frozen visual prototype.

## Format

Each ADR should follow this template:

```markdown
# ADR-NNN: Title

**Status:** Proposed | Accepted | Superseded  
**Date:** YYYY-MM-DD  
**Chunk gate:** Chunk 1 | 2 | 3 | 4  

## Context
What problem or constraint forced a decision?

## Decision
What we chose.

## Consequences
Positive, negative, and follow-ups.

## Alternatives considered
Brief list.
```

## Naming

- `ADR-001-woocommerce-as-pim.md`
- `ADR-002-composer-25d-canvas-not-webgl.md`
- `ADR-003-public-compositions-via-rpc.md`

## Rules

- No ADR may authorise WebGL/R3F in Chunk 3 MVP.
- No ADR may expose Supabase service role to the browser.
- Chunk 2/3 ADRs require **signed Chunk 1 acceptance** before implementation begins.

## Index

| ID | Title | Status |
|----|-------|--------|
| — | *None filed yet — planning phase* | — |

See also:

- [`../planning/technical-implementation-plan.md`](../planning/technical-implementation-plan.md)
- [`../planning/governance-review.md`](../planning/governance-review.md) — planning-only review; no ADRs authorise implementation before Chunk 1 signed acceptance

# AGENTS.md

> Agent contract for Bahçe-i Firdevs. Read this top-to-bottom before
> writing or modifying code. The Iron Rules are enforced.

## Project, in one paragraph

Bahçe-i Firdevs, telefondan çiçek arayan kişinin ürünü görüp hazır mesajla WhatsApp'a ulaşmasını sağlayan Türkçe statik vitrindir. En kırılgan varsayım, ziyaretçinin WhatsApp görüşmesini yeterince kolay ve güvenilir bulmasıdır.

## Hard rules (you will be held to these)

- TDD with proof in commit history (test commit precedes implementation)
- Function ≤30 LoC, file ≤200 LoC, complexity ≤8
- Coverage ≥85% line, ≥80% branch; 100% on critical paths
- Conventional commits; PR/diff ≤400 LoC
- No magic numbers; no commented-out code; no swallowed errors
- Public APIs fully typed; no `any` without a justification comment
- Every new dependency requires an ADR in `.genesis/DECISIONS.md`

## Decision log

All architectural and significant decisions live in `.genesis/DECISIONS.md`. Read it before structural changes and reference ADR IDs in commits or code.

## Updating progress

Append `YYYY-MM-DD HH:MM | ADR-refs | summary` to `.genesis/PROGRESS.md` after every meaningful action.

## When blocked

Routine choices use existing ADRs. New commercial claims, constitutional scope, dependencies, payment, data storage or cross-module architecture are surfaced to the user before implementation.

---

(end of cold-start contract; depth follows)

## Architecture summary

Next.js App Router renders typed local catalog data. `Product` is the narrow waist shared by cards, detail pages, metadata and WhatsApp messages. There is no database, checkout or authentication. See `docs/ARCHITECTURE.md`.

## Quality standards summary

Strict TypeScript, test-first critical logic, small modules and mobile visual verification are mandatory. Generated Next types and lockfiles are exempt from file limits. See `docs/QUALITY_STANDARDS.md`.

## Testing approach

Pure URL/catalog logic gets unit tests; shared UI gets component tests; the final mobile WhatsApp flow gets a small end-to-end check. Test commits precede implementation commits.

## Critical paths

- WhatsApp number normalization and message encoding
- Product resolution and 404 behavior
- Product-specific CTA targets

## What this project deliberately does not do

- Cart, online payment, membership, admin or order persistence
- Multi-language, multi-market or non-flower categories
- Unverified delivery and pricing promises

## Next.js 16 note

Read the relevant guide in `node_modules/next/dist/docs/` before using framework APIs; Next.js 16.2.1 may differ from remembered conventions.

## Tooling

```bash
pnpm install
pnpm test
pnpm lint
pnpm typecheck
pnpm dev
```

## Conventions

- Commit messages use conventional commits.
- Branches use `feat/`, `fix/`, `docs/` or `chore/` prefixes.
- ADR and progress files are append-only.

## See also

- `.genesis/CONSTITUTION.md` — immutable principles
- `docs/CHARTER.md` — mission
- `docs/ARCHITECTURE.md` — technical design
- `docs/QUALITY_STANDARDS.md` — full rules
- `.genesis/DECISIONS.md` — decision log
- `.genesis/PROGRESS.md` — journal

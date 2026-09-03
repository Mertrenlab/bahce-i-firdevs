# Copilot Instructions for Bahçe-i Firdevs

When suggesting code:

- Follow TDD; implementation follows a failing test.
- Keep functions ≤30 lines, handwritten files ≤200 lines and complexity ≤8.
- Use strict public types; do not use `any` without justification.
- Use named constants and explicit errors.
- Keep the app a static flower catalog with WhatsApp ordering.
- Do not add cart, payment, accounts, admin or a database.
- Use conventional commit messages.

For architectural changes, draft an ADR in `.genesis/DECISIONS.md` first and reference existing ADR IDs.

## See also

- `AGENTS.md` — full agent contract
- `docs/ARCHITECTURE.md` — technical design
- `docs/QUALITY_STANDARDS.md` — enforced rules

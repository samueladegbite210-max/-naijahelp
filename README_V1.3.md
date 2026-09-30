# NaijaHelp v1.3 — Staging Hardening

This build continues the nationwide NaijaHelp marketplace toward a deployable staging environment.

## Important changes
- Booking status transitions are role- and state-controlled.
- Providers must be verified and registered for the requested service/location before quoting.
- Paystack webhook verification is hardened and duplicate webhook delivery is ignored.
- Paystack has a dedicated `/api/payments/paystack/webhook` endpoint.
- Demo accounts are opt-in via `SEED_DEMO=true` and are not created by default.
- Prisma dependencies are pinned to a known compatible major/minor line instead of `latest`.
- Docker startup runs Prisma schema synchronization and reference-data seeding.
- Added a repository smoke test and staging end-to-end test plan.

## What is still not claimed
This is a staging codebase, not a claim of public production deployment. A real deployment still requires user-owned hosting/domain credentials, PostgreSQL infrastructure, Paystack credentials, private document storage, monitoring, backups and final policy/legal review.

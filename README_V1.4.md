# NaijaHelp v1.4 — Staging Hardening

This release moves the existing nationwide marketplace toward a repeatable staging deployment.

## Included

- Customer/provider/admin single-app frontend
- Nigeria 36 states + FCT reference data
- State → LGA → Area structure
- Provider verification and service/location matching
- Requests, quotes, bookings and status transitions
- Messaging and notifications
- Reviews, reports and admin audit logs
- Paystack initialization/webhook foundation
- PostgreSQL + Prisma
- Docker staging deployment
- `/health` and database-aware `/ready` endpoints
- `X-Request-Id` response/request tracing foundation
- Optional trusted-proxy configuration
- Graceful SIGTERM/SIGINT shutdown
- Repeatable smoke-test script

## Important

This is a **staging build**, not a claim of public production deployment. Real hosting, domain, database, private document storage, monitoring/backups and production payment credentials still need to be configured in user-controlled infrastructure.

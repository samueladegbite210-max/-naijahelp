# NaijaHelp v1.0 — Production Preparation

This release continues the NaijaHelp nationwide marketplace foundation. It is **production preparation**, not a claim of production readiness.

## Added in v1.0
- Hardened API authorization by customer/provider/admin role.
- Helmet security headers and restricted CORS configuration.
- Request validation and safer error handling.
- Basic API rate limiting for auth, public reads and messaging.
- Account status controls (active/suspended/deactivated).
- Persistent notifications and real-time Socket.IO messaging foundation.
- Request-scoped messaging authorization.
- Payment records + immutable payment event records.
- Payment gateway configuration hook for Paystack and webhook foundation.
- Reviews restricted to completed bookings and the actual customer.
- Reports/disputes with admin moderation.
- Verification document review and admin audit logs.
- Provider service-area matching across State → LGA → Area.
- Admin marketplace stats endpoint.
- Graceful server shutdown.
- Node 20+ deployment target.

## Still required before public launch
- Configure production PostgreSQL, secrets and HTTPS.
- Replace in-memory rate limiting with Redis-backed limiting.
- Implement and test Paystack/Flutterwave server-side initialization, webhook signature verification using raw request bytes, reconciliation and refunds.
- Implement private object storage with signed upload/download URLs and malware/type validation for identity documents.
- Add automated unit/integration/end-to-end tests and CI.
- Add database migrations and backups in the deployment environment.
- Add observability: structured logs, metrics, error tracking and alerts.
- Perform security review, privacy/legal review and payment-provider compliance review for Nigeria.
- Add abuse controls: blocking, fraud/rating-abuse detection and stronger moderation queues.

## Local development

1. Copy `backend/.env.example` to `backend/.env`.
2. Start PostgreSQL with `docker compose up -d postgres`.
3. In `backend/` run `npm install`.
4. Run `npm run prisma:generate`.
5. Run `npm run prisma:validate`.
6. Run `npm run build`.
7. Run `npm run seed` for development data.
8. Start API with `npm run dev`.

The frontend API base defaults to `http://localhost:4000` and can be changed with `localStorage.naijahelp_api_base`.

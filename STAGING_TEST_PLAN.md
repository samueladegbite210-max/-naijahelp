# NaijaHelp Staging Test Plan

## Automated checks already run
- Frontend JavaScript syntax checks: PASS
- NaijaHelp repository smoke test: PASS
- Required frontend files: PASS
- Health endpoint and Paystack webhook routes present: PASS
- Booking transition guard present: PASS
- Provider verification/coverage guard present: PASS
- Prisma client version pinned: PASS

## Required staging flow
1. Start PostgreSQL and the app with Docker Compose.
2. Confirm `GET /health` returns `ok: true`.
3. Confirm the seed creates 37 states (36 states + FCT) and service categories.
4. Create a customer account.
5. Create a provider account.
6. Configure provider services and coverage.
7. Submit provider verification documents using private object storage in staging.
8. Approve the provider from admin.
9. Customer creates a request for a service and location.
10. Provider sees only matching requests.
11. Provider submits a quote.
12. Customer accepts the quote and booking is created.
13. Test messaging from both sides.
14. Provider moves booking from CONFIRMED → IN_PROGRESS → COMPLETED.
15. Customer can cancel only while the booking is CONFIRMED.
16. Customer initializes Paystack payment in a test environment.
17. Paystack webhook marks the payment PAID/FAILED and duplicate webhook delivery is idempotent.
18. Customer submits a review only after completion.
19. Admin can review reports, verification documents and audit logs.

## Launch blockers to resolve before public production
- Deploy PostgreSQL with backups and tested restore.
- Configure private object storage for verification documents; do not use public document URLs.
- Configure real Paystack production credentials and webhook URL.
- Configure HTTPS, domain, CORS and production secrets.
- Add production-grade distributed rate limiting (Redis or equivalent) instead of process-local memory buckets.
- Add monitoring, error tracking and alerting.
- Complete legal/policy review for terms, privacy, provider verification, disputes and payments.
- Load-test the marketplace and messaging paths.

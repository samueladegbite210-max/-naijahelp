# NaijaHelp v1.4 — Staging Runbook

## 1. Configure
Copy `.env.example` to `.env` and set at minimum:

- `JWT_SECRET` — long random secret
- `CORS_ORIGINS` — exact staging origin(s)
- `PUBLIC_APP_URL` — staging HTTPS URL
- `PAYSTACK_SECRET_KEY` — Paystack test secret for staging payment tests
- `PAYSTACK_CALLBACK_URL` — staging callback URL
- `TRUST_PROXY=true` only when running behind a trusted reverse proxy

Do not commit `.env` or payment secrets.

## 2. Start

```bash
docker compose up --build
```

The application waits for PostgreSQL, applies the Prisma schema for this staging build, loads nationwide reference data, then starts the API/web app.

## 3. Verify

Open:

- `/health` — process health
- `/ready` — process + PostgreSQL readiness
- `/` — customer entry
- `/provider-app.html` — provider entry
- `/admin-app.html` — admin entry

## 4. End-to-end test

1. Register a customer.
2. Register a provider.
3. Upload provider verification-document records using a private staging storage URL.
4. Admin reviews/approves the provider.
5. Customer creates a service request with state/LGA/area.
6. Provider sees the matching request.
7. Provider submits a quote.
8. Customer accepts the quote.
9. Provider starts and completes the booking.
10. Customer initializes Paystack test payment.
11. Paystack webhook updates the payment.
12. Customer leaves a review.
13. Admin checks audit/report records.

## 5. Production gate

Do not use `SEED_DEMO=true` in production. Before public launch, replace staging database credentials, configure private object storage, backups, monitoring, HTTPS, production CORS, Paystack live credentials, and reviewed legal/policy documents.

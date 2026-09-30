# NaijaHelp v1.1 — run as one application

This package is the next step from prototype/source packages: the backend serves the customer/provider/admin frontend from the same origin.

## Local production-like run
1. Install Docker + Docker Compose.
2. Copy `.env.example` to `.env`.
3. Set strong `POSTGRES_PASSWORD` and `JWT_SECRET`.
4. Run `docker compose up --build`.
5. Open `http://localhost:4000`.
6. Run the seed in the app container when you want demo data: `docker compose exec app npx tsx prisma/seed.ts`.

## Payment
Set `PAYSTACK_SECRET_KEY` only on the server. The app initializes Paystack server-side and verifies webhook signatures. Do not put the secret key in frontend code.

## Before public launch
The existing production checklist still applies: HTTPS, real domain/CORS, backups, Redis rate limiting, private object storage and signed URLs for verification documents, malware/type validation, staging migration tests, monitoring, legal/policy review, and end-to-end tests.


## v1.2 deployment path

1. Set a strong `JWT_SECRET` in the shell/environment (never commit it).
2. Set `CORS_ORIGINS` and `PUBLIC_APP_URL` to the real HTTPS domain.
3. Set `PAYSTACK_SECRET_KEY` only on the server if live payments are enabled.
4. Run `docker compose up -d --build`.
5. Check `/health` and then test customer → provider → quote → booking → payment → review.

The included PostgreSQL configuration is for staging/self-hosted deployment. For public production, use encrypted backups, restricted database networking, HTTPS/TLS termination, secret management, monitoring, and a production database policy.

# NaijaHelp — Staging Deployment

This package includes `render.yaml` for a Render Blueprint deployment. Render can create the Docker web service and managed PostgreSQL database from the Blueprint. Before deploying, connect the repository containing this package to Render.

## Required secret during setup
- `PAYSTACK_SECRET_KEY`: use the Paystack **test** secret key for staging.
- `DEMO_PASSWORD`: optional; leave empty if demo seeding is disabled.

## Important
- Keep `SEED_DEMO=false` for a clean staging environment unless you deliberately want demo accounts.
- Do not put real production Paystack keys in staging.
- After deployment, verify `/health` and `/ready`, then run the customer/provider/admin journey.

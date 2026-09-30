# NaijaHelp v0.8 — Payments, Notifications & Coverage

This release adds the marketplace's money/communication data layer.

## Added
- Payment model with NGN currency
- Payment lifecycle/status tracking
- Booking payment creation endpoint
- Payment lookup endpoint
- Notification model and notification API
- Provider coverage API supporting State -> LGA -> Area
- Frontend API adapter methods for all of the above

## Payment gateway
A gateway is intentionally represented as an adapter boundary. Do not put secret API keys in the frontend. The next production integration should use a server-side Nigerian payment provider and webhooks to confirm payments.

## Database migration
After installing dependencies:
1. `npx prisma generate`
2. `npx prisma migrate dev --name payments_notifications`
3. `npm run seed`

## Production checklist
- Connect a real payment gateway server-side
- Verify payment using signed webhooks
- Never trust a browser-only "paid" status
- Add transaction reconciliation
- Add notification delivery (in-app + email/SMS/push)
- Add idempotency keys for payment creation
- Add refunds/disputes

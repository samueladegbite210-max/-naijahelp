# NaijaHelp v1.0 launch gate

## Must pass before public launch
- [ ] Production `JWT_SECRET` generated and stored outside source control.
- [ ] Production PostgreSQL configured with automated backups.
- [ ] HTTPS enabled end-to-end.
- [ ] CORS restricted to the real app domains.
- [ ] Redis-backed rate limiting added.
- [ ] Payment gateway initialization + webhook signature verification tested.
- [ ] Payment idempotency and reconciliation tested.
- [ ] Private object storage + signed URLs implemented for verification documents.
- [ ] File MIME/size validation and malware scanning implemented.
- [ ] Role/authorization integration tests pass.
- [ ] Customer → provider → quote → booking → completion → review E2E test passes.
- [ ] Messaging authorization and abuse controls tested.
- [ ] Admin actions produce audit logs.
- [ ] Monitoring, error tracking and alerting configured.
- [ ] Privacy, terms, provider agreement, dispute/cancellation and payment policies reviewed for Nigerian requirements.
- [ ] Production seed credentials removed/changed.
- [ ] Database migration process tested on a staging copy.

- [ ] Verify real HTTPS domain, CORS_ORIGINS and PUBLIC_APP_URL
- [ ] Configure production PostgreSQL backups and restricted network access
- [ ] Configure Paystack live secret only after merchant account is ready
- [ ] Run full marketplace smoke test on staging before public launch

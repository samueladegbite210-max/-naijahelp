# NaijaHelp v0.9 — Trust & Communication

## Added
- Customer reviews for completed bookings
- Provider review listing endpoint
- User reports/dispute records
- Admin report moderation
- Provider verification document records
- Admin verification-document review
- Admin audit log
- Frontend API adapter methods for trust workflows

## Important production note
Verification documents should be uploaded to private object storage, not accepted as arbitrary public URLs. The production implementation should use signed upload URLs, malware/type validation, access controls, retention rules, and encryption.

The current review/report layer is a foundation. Before public launch, add:
- dispute evidence and conversation history
- provider/customer blocking
- moderation queues
- anti-fraud/rating-abuse controls
- immutable/auditable payment events
- real notification delivery
- secure file storage

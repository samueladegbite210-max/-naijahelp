# NaijaHelp v0.6 — Provider Application

This version adds the provider-facing workflow and backend endpoints.

## Provider flow
1. Create provider account
2. Sign in
3. Set business name and description
4. Select services offered
5. Select states served
6. View matching open customer requests
7. Submit a quote
8. See accepted jobs
9. Start a job
10. Mark a job completed

## Important
The provider currently selects states as service areas. The database already supports LGA and Area records, so the next provider onboarding pass can add cascading State -> LGA -> Area coverage.

Provider verification is still controlled by the `verificationStatus` field and should be handled by the admin system before public launch.

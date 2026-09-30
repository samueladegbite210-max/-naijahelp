# NaijaHelp v0.7 — Admin & Moderation

## Admin capabilities
- Sign in as ADMIN
- Marketplace statistics
- List providers
- Verify provider
- Reject provider
- Return provider to pending
- List users
- Monitor service requests
- Cancel a service request

## Demo admin seed
The seed creates:
- Email: `admin@naijahelp.local`
- Password: `Demo12345!`

Change this immediately for any non-local environment.

## Important production requirements
This is an operational foundation, not a final security system. Before launch:
- strong admin authentication / MFA
- audit log for admin actions
- granular permissions
- provider identity/document verification
- report/appeal workflow
- rate limits and abuse protection
- secure secrets and production database

# NaijaHelp v0.4 — Full-stack integration roadmap

This package combines the existing Nigeria-wide frontend prototype with the v0.3 backend foundation.

## Run backend
Use `NaijaHelp_v0.3_backend.zip` alongside this project.

1. Start PostgreSQL (`docker compose up -d`).
2. Configure backend `.env`.
3. Run `npm install`.
4. Run `npx prisma generate`.
5. Run `npx prisma migrate dev --name init`.
6. Run `npm run seed`.
7. Run `npm run dev`.

## Connect frontend
`js/api.js` provides the API adapter.

Default backend:
`http://localhost:4000`

To point the frontend to another backend:
```js
localStorage.setItem("naijahelp_api_base", "https://api.yourdomain.com");
```

## What is connected conceptually
- Authentication
- Nationwide states
- Service categories
- Provider discovery
- Customer requests
- Provider quotes
- Quote acceptance
- Booking status
- Job messaging

The current HTML prototype still contains demo UI/state. The next implementation pass should replace those demo handlers with calls to `window.NaijaHelpAPI`.

## Production sequence
1. Wire login/register UI.
2. Replace demo provider search with `/api/providers`.
3. Replace demo request creation with `/api/requests`.
4. Replace demo quote flow with quote endpoints.
5. Replace demo booking timeline with booking status endpoint.
6. Add provider dashboard actions.
7. Add admin verification.
8. Add payments/notifications.
9. Deploy database + API + web frontend.

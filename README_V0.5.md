# NaijaHelp v0.5 — Customer Application

Open `customer-app.html` from a web server and run the v0.3 backend on `http://localhost:4000`.

This version adds a real customer-facing flow:
- customer registration/login
- live service and state loading
- LGA/Area cascading location selection
- verified provider search
- service request creation
- viewing requests and quotes
- accepting quotes

The backend remains the source of truth.

For local testing, serve the frontend over HTTP rather than opening the HTML directly, e.g. with VS Code Live Server or:
`python -m http.server 8080`
then visit `http://localhost:8080/customer-app.html`.

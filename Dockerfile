FROM node:20-alpine AS build
WORKDIR /app
COPY backend/package*.json ./backend/
RUN cd backend && npm install --no-audit --no-fund
COPY backend/prisma ./backend/prisma
RUN cd backend && npx prisma generate
COPY backend/tsconfig.json ./backend/
COPY backend/src ./backend/src
RUN cd backend && npm run build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/backend/node_modules ./backend/node_modules
COPY --from=build /app/backend/package*.json ./backend/
COPY --from=build /app/backend/prisma ./backend/prisma
COPY --from=build /app/backend/dist ./backend/dist
COPY css ./public/css
COPY js ./public/js
COPY index.html customer-app.html provider-app.html admin-app.html trust-center.html money-notifications.html payment-callback.html manifest.json service-worker.js ./public/
WORKDIR /app/backend
EXPOSE 4000
CMD ["sh","-c","npx prisma db push --skip-generate && npm run seed && node dist/server.js"]

import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve(import.meta.dirname, '..');
const server = fs.readFileSync(path.join(root,'backend/src/server.ts'),'utf8');
const schema = fs.readFileSync(path.join(root,'backend/prisma/schema.prisma'),'utf8');
const seed = fs.readFileSync(path.join(root,'backend/prisma/seed.ts'),'utf8');
const compose = fs.readFileSync(path.join(root,'docker-compose.yml'),'utf8');
const pkg = JSON.parse(fs.readFileSync(path.join(root,'backend/package.json'),'utf8'));

for (const file of ['index.html','customer-app.html','provider-app.html','admin-app.html','payment-callback.html','js/api.js','js/realtime.js','css/app.css']) {
  assert.ok(fs.existsSync(path.join(root,file)), `missing ${file}`);
}
assert.match(server,/app\.get\("\/health"/);
assert.match(server,/app\.get\("\/ready"/);
assert.match(server,/X-Request-Id/);
assert.match(server,/disable\("x-powered-by"\)/);
assert.match(server,/app\.post\("\/api\/payments\/paystack\/webhook"/);
assert.match(server,/Invalid booking status transition/);
assert.match(server,/Provider verification is required before quoting/);
assert.match(schema,/model PaymentEvent/);
assert.match(schema,/model VerificationDocument/);
assert.match(seed,/Federal Capital Territory/);
assert.match(seed,/SEED_DEMO === "true"/);
assert.match(compose,/postgres:16-alpine/);
assert.equal(pkg.dependencies['@prisma/client'],'6.19.0');

console.log('NaijaHelp v1.4 staging smoke test: PASS');

# notifications

Sends order and shipping emails/SMS. Written in 2018, lightly maintained since.

## Stack
- **Node 14** (EOL 2023-04-30)
- **Express 4.16**
- **`request` 2.88** — deprecated since 2020, no longer maintained
- Old `lodash` with prototype-pollution CVEs

## Modernization signals for CM
- Node 14 EOL → Node 20/22 runtime upgrade
- Deprecated `request` library → replace with `fetch`/`axios` (API-change remediation)
- Vulnerable transitive deps (`lodash` 4.17.11)
- CommonJS `require` → could be modernized to ESM

## Run
```bash
npm install
node index.js
```

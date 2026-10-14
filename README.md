# notifications

Sends order and shipping emails/SMS. Written in 2018, lightly maintained since.

## Stack
- **Node 22** (current LTS)
- **Express 5.2**
- Built-in global `fetch` (replaced the deprecated `request` library)
- `lodash` 4.18 (no known CVEs)

## Modernization signals for CM
- Runtime upgraded from Node 14 (EOL) to Node 22 LTS
- Deprecated `request` library replaced with the native `fetch` API
- Dependencies upgraded past the vulnerable `lodash` 4.17.11
- CommonJS `require` → could be modernized to ESM

## Run
```bash
node --version   # should report v22.x
npm install
node index.js
```

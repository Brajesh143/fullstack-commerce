# Enterprise Backend

A lightweight Node.js API server for the enterprise-application workspace. It uses Node's built-in HTTP module and does not require external runtime dependencies.

## Commands

```bash
npm start
npm run dev
npm test
```

The server listens on port `3000` by default. Set `PORT` to use another port.

## Endpoints

- `GET /health` — returns `{ "status": "ok" }`
- Any other route returns HTTP `404`

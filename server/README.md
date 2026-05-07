# Cloud Surge Contact API (Render)

Same pattern as **Vibe Surge waitlist**: Azure Communication Email, sender `Donotreply@vibesurge.uk`, form data sent to **info@cloudsurge.uk**. Deploy as a **Web Service** on Render.

## Env vars (set in Render Dashboard or `server/.env`)

| Variable | Required | Description |
|----------|----------|-------------|
| `AZURE_COMMUNICATION_CONNECTION_STRING` | Yes | Azure Communication Services connection string. |
| `AZURE_SENDER_EMAIL` | No | Sender address (must be registered in Azure). Default: `Donotreply@vibesurge.uk`. |
| `CONTACT_RECIPIENT_EMAIL` | No | Where form submissions are sent. Default: `info@cloudsurge.uk`. |
| `PORT` | No | Set by Render automatically. |

## Deploy on Render

1. **New → Web Service**
2. Connect this repo; set **Root Directory** to `server` (or build/start from repo root with `cd server`).
3. **Build:** `npm install`
4. **Start:** `npm start`
5. Add the env vars above in **Environment**.
6. Deploy. Copy the service URL (e.g. `https://cloudsurge-contact-api.onrender.com`).

## Frontend (React app)

In your React app’s build env (e.g. Vite build on Render or CI), set:

- `VITE_API_URL=https://your-render-service-url.onrender.com`

So the contact form POSTs to `VITE_API_URL/api/send-email`. For **local dev**, the Vite dev server proxies `/api` to `http://localhost:5000`, so run this server with `npm run dev` in `server/` and use the React app without setting `VITE_API_URL`.

## Local run

```bash
cd server
cp .env.example .env   # optional, or set env in shell
npm install
npm run dev
```

Then start the React app; it will use the proxy to `http://localhost:5000`.

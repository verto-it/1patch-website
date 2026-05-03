# 1Patch Website


Public-facing React + Vite website for 1Patch.

**Port (dev):** `5173`  
**License:** AGPL-3.0-only

---

## Prerequisites

- Node.js 20 LTS or 22 LTS

---

## Development

```powershell
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Production Build

```powershell
npm run build
```

Output is written to `dist/`. Serve with any static host (nginx, Caddy, etc.).

**Example nginx config:**

```nginx
server {
    listen 443 ssl;
    server_name 1patch.example.com;

    ssl_certificate     /etc/ssl/1patch/server.crt;
    ssl_certificate_key /etc/ssl/1patch/server.key;

    root /var/www/1patch;
    index index.html;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests" always;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Typecheck

```powershell
npx tsc --noEmit
```

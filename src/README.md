# Website Source

This folder contains the public 1Patch website built with React, Vite, and `react-router-dom`.

## Structure

| Path | Notes |
|---|---|
| `main.tsx` | Creates the router and registers all public routes. |
| `components/Layout.tsx` | Shared navigation shell, footer, and scroll restoration. |
| `pages/Home.tsx` | Product landing page and copy-to-clipboard helper. |
| `pages/Features.tsx` | Feature overview. |
| `pages/Security.tsx` | Security model and controls. |
| `pages/SelfHosting.tsx` | Self-hosting guidance. |
| `pages/SetupGuide.tsx` | Step-by-step install and configuration guide. |
| `pages/SiemSetup.tsx` | SIEM setup walkthrough and generated config helpers. |
| `pages/Rules.tsx` and `pages/RuleCreate.tsx` | Rule concepts and template-driven rule creation. |
| `pages/Downloads.tsx` | Download and install entry points. |
| `pages/*legal*` | Privacy, terms, imprint, legal, and contact pages. |
| `styles.css` | Global design tokens and all page-specific CSS. |

## Development Flow

Run `npm run dev` from `1patch-website/` for local development and `npm run build` for typecheck plus production output. The build emits static files to `dist/`.

## Documentation Notes

React components and helper functions have JSDoc. CSS does not need JSDoc; keep styling documentation in token names, selectors, and section ordering.

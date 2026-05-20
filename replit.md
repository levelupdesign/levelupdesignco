# LevelUp Design Co.

A web presence and digital consulting site for LevelUp Design Co., a Málaga-based web design and business optimization agency run by Juan Leiva. The site showcases services, past projects, and converts visitors into WhatsApp leads.

## Run & Operate

- `pnpm --filter @workspace/levelup-design run dev` — run the frontend (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- Required env: `DATABASE_URL` — Postgres connection string (for api-server only)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite + Tailwind CSS v4 + wouter (routing)
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- Build: esbuild (CJS bundle for api-server)

## Where things live

- `artifacts/levelup-design/` — main React/Vite frontend
- `artifacts/levelup-design/src/pages/` — page components (one per route)
- `artifacts/levelup-design/src/components/sections/` — landing page sections
- `artifacts/levelup-design/src/components/ui/` — shadcn UI components
- `artifacts/levelup-design/src/styles.css` — Tailwind v4 theme (oklch colors, custom brand tokens)
- `artifacts/levelup-design/public/` — static assets (images, favicon)
- `artifacts/api-server/` — backend Express API
- `lib/db/src/schema/` — Drizzle DB schema
- `lib/api-spec/openapi.yaml` — API contract

## Architecture decisions

- Converted from TanStack Start/Router (Lovable/v0 export) to standard Vite + React with wouter routing
- Custom Tailwind v4 theme with oklch colors — brand is burgundy (`--brand: oklch(0.38 0.12 18)`)
- Custom fonts: Cormorant Garamond (serif/headings) + Inter (sans/body) via Google Fonts
- No backend needed for this site — purely frontend with external WhatsApp links
- All pages are under `src/pages/`, route components are plain React components (no file-based routing)

## Product

- **Home (`/`)** — hero, founder intro, services overview, how-we-work
- **Trabajos (`/trabajos`)** — portfolio of completed projects
- **Página web Málaga (`/pagina-web-malaga`)** — landing page for web design service
- **Conseguir clientes Málaga (`/conseguir-clientes-malaga`)** — landing page for client acquisition service
- **Cómo conseguir clientes (`/como-conseguir-clientes-negocio`)** — SEO content/guide page

## User preferences

- App was migrated from a Lovable/v0 TanStack Start export to the Replit pnpm_workspace stack

## Gotchas

- `@import url(...)` for Google Fonts MUST come before `@import "tailwindcss"` in styles.css
- The old `src/routes/` and `src/router.tsx` files are kept for reference but are not used — routing is handled by `src/App.tsx` with wouter

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

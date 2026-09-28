# Styleora — Frontend

E-commerce storefront frontend built with React 19, Vite, Tailwind CSS v4, Redux Toolkit and React Router 7.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Stack

- React 19 + Vite
- Tailwind CSS v4 — design tokens defined in `src/index.css` via `@theme` (use utilities like `bg-ink`, `text-gold`, `border-gold/40` instead of raw hex values)
- Redux Toolkit — cart & wishlist state (`src/store`)
- React Router 7 — route table lives in `src/App.jsx`, layout in `src/layouts/MainLayout.jsx`
- framer-motion for overlay animations, lucide-react for icons

## Project structure

- `src/components/Navbar` — navbar feature: desktop nav + mega menu, mobile menu, search overlay, cart drawer, account dropdown
- `src/hooks` — shared hooks (`useEscapeKey`, `useBodyScrollLock`)
- `src/store` — Redux store, cart/wishlist slices and selectors
- `src/pages` — route pages (stubs: Home, Shop, Cart, NotFound)
- `src/layouts` — `MainLayout` (fixed navbar + `<Outlet />`)
- `src/utils` — helpers (`formatPrice`)

## Path alias

`@/` maps to `src/` (configured in `jsconfig.json` and `vite.config.js`). Prefer it for cross-folder imports; relative paths are fine within a feature folder.

## Notes / TODO

- Cart & wishlist are seeded with demo data in `src/store/*Slice.js` until the product API exists.
- Search results and recent searches are demo data (`src/components/Navbar/navbar.data.js` + `SearchOverlay`).
- i18n (EN/AR) is not wired yet — the language switchers are UI-only; wiring them needs a real i18n solution (e.g. i18next) plus `dir="rtl"` handling.
- Routes like `/login`, `/product/:id`, `/checkout` currently fall through to the `NotFound` page until those pages are built.
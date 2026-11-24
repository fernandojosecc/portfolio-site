# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — ESLint (flat config, `eslint-config-next`)

There is no test suite. `VERIFICATION_CHECKLIST.md` is a manual post-deploy checklist for the live site.

## Architecture

Personal portfolio for fernandocontreras.dev: Next.js 16 App Router, React 19, plain JavaScript (no TypeScript), React Compiler enabled (`next.config.mjs`). Deploys automatically on push to `main` (see `WORKFLOW.md`; commits use `feat:`/`fix:`/`docs:` prefixes, work happens on feature branches merged via PR).

- `app/page.js` is the single-page home (client component). It composes `components/` (Navbar, Hero, Terminal, Projects, Contact, Footer, CustomCursor) and wires one IntersectionObserver that adds `.visible` to any `.reveal` element for scroll animations.
- `app/layout.js` loads Playfair Display and DM Mono via `next/font` as CSS variables (`--font-playfair`, `--font-dm-mono`) and mounts `GoogleAnalytics`.
- Design tokens (`--cream`, `--ink`, `--ink-mid`, `--ink-light`, `--yellow`, `--yellow-pale`) live in `app/globals.css`. Components mostly use inline styles that reference these variables; `lib/styles.js` holds shared style objects and hover handlers.
- Per-app sections for the user's mobile apps live in their own routes: `app/pomopal/{privacy,support}` and `app/sketchshelf/{,privacy,support}`. The privacy/support pages are thin wrappers around `components/LegalPage.js` (title, `updated` date, children). These URLs are submitted to the App Store, so don't rename or remove them.
- `app/sketchshelf/page.js` is a landing page whose `APP_STORE_URL` constant is empty until the app is published; empty renders a "Coming soon" state. Screenshots are in `public/sketchshelf/`.
- `public/app-ads.txt` is served at the site root for AdMob verification; keep it at that path.

## Gotchas

- `lib/gtag.js`: `GA_MEASUREMENT_ID` defaults to a hardcoded ID, but `isGAEnabled` is true only when the ID differs from that default. In practice, analytics events fire only when `NEXT_PUBLIC_GA_ID` is set to a different value. Check this before relying on tracking.
- Contact email and social links are hardcoded in components and the legal pages; update all occurrences if they change.

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
- Per-project pages live in their own routes: `app/pomopal/{,privacy,support}`, `app/sketchshelf/{,privacy,support}` and `app/bmo-cyberdeck`. The privacy/support pages are thin wrappers around `components/LegalPage.js` (title, `updated` date, children). These URLs are submitted to the App Store, so don't rename or remove them.
- `components/Projects.js` holds the projects as data (`allProjects`): a filterable list with a hover preview panel. `slides` are the pictures that crossfade in the panel, `links` override the default link buttons, and `hidden: true` removes a project from the site without deleting it. With nothing hovered, the panel shows the first project.
- The Pomopal and Sketchshelf landing pages each have an `APP_STORE_URL` constant (empty means a "Coming soon" state). Screenshots are in `public/pomopal/` and `public/sketchshelf/`. Photos must have EXIF stripped before going in `public/` (phone photos carry GPS).
- `public/app-ads.txt` is served at the site root for AdMob verification; keep it at that path.

## Gotchas

- `lib/gtag.js`: Google Analytics only runs in production builds (`NODE_ENV === "production"`), so it never loads under `npm run dev`.
- Contact email and social links are hardcoded in components and the legal pages; update all occurrences if they change.

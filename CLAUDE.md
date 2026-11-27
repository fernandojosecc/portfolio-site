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
- `app/layout.js` loads Playfair Display (headlines), Inter (body, `--font-sans` → `--font-body`) and DM Mono (labels) via `next/font` as CSS variables (`--font-playfair`, `--font-sans`, `--font-dm-mono`) and mounts `GoogleAnalytics`.
- Styling is plain CSS in `app/globals.css`: design tokens on `:root`, then per-area classes (`.proj-*`, `.site-nav*`, `.hero-*`, `.contact-*`, `.pg-*` for sub-pages, `.legal`) with some inline styles referencing the tokens. A later "Luxe layer" section overrides earlier rules for the same selectors (`.reveal`, `.pill`, `.status-dot`), so check for a second definition before editing one. `lib/styles.js` and `app/page.module.css` are leftovers that nothing imports.
- Type roles: `h1`–`h6` get Playfair, body text gets Inter, and DM Mono is applied by the selector list under "Type roles" at the end of `globals.css`; add new label classes there.
- Motion: `.rise` (staggered on load, order set by the `--d` custom property) and `.reveal` (on scroll). New animations need to respect `prefers-reduced-motion`.
- Per-project pages live in their own routes: `app/pomopal/{,privacy,support}`, `app/sketchshelf/{,privacy,support}` and `app/bmo-cyberdeck`. Sub-pages wrap their content in `components/PageShell.js` (Navbar, CustomCursor, Footer and the same `.reveal` observer as the home page). The privacy/support pages are thin wrappers around `components/LegalPage.js` (title, `updated` date, children). These URLs are submitted to the App Store, so don't rename or remove them.
- `components/Projects.js` holds the projects as data (`allProjects`): a filterable list with a hover preview panel. `slides` are the pictures that crossfade in the panel, `links` override the default link buttons, and `hidden: true` removes a project from the site without deleting it. With nothing hovered, the panel shows the first visible project. A project without `slides` gets a terminal-style card instead, and the row title links to the link labelled "Details…" if there is one, otherwise the first link. The panel is hidden on small screens, where each row shows `thumb` (or the first slide's `src`).
- Project facts are repeated outside `allProjects`; when adding or changing a project, also check the `ls projects/` lines in `components/Terminal.js`, the `stats` counts in `components/Contact.js`, the bio and stack in `components/Hero.js`, and `README.md`.
- The Pomopal and Sketchshelf landing pages each have an `APP_STORE_URL` constant (in Sketchshelf, empty shows "Coming soon"; Pomopal has no such fallback). The same App Store links are repeated in `components/Projects.js`, and the app ID in each page's `apple-itunes-app` metadata. Screenshots are in `public/pomopal/` and `public/sketchshelf/`. Photos must have EXIF stripped before going in `public/` (phone photos carry GPS).
- `public/app-ads.txt` is served at the site root for AdMob verification; keep it at that path.

## Gotchas

- `lib/gtag.js`: Google Analytics only runs in production builds (`NODE_ENV === "production"`), so it never loads under `npm run dev`. `NEXT_PUBLIC_GA_ID` overrides the built-in measurement ID.
- The native cursor is hidden above 768px (`cursor: none`) in favor of `components/CustomCursor.js`. Its hover state triggers on links, buttons, form fields, tabs and `.cursor-hover`.
- `app/opengraph-image.js` hardcodes its own hex colors, which don't follow the CSS tokens.
- Contact email and social links are hardcoded in components, the legal pages and `README.md`; update all occurrences if they change.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal **developer portfolio** for HafizK (a software developer with ~2 years' experience, based in Malaysia, employed — not freelance). It's positioned for career growth: honest tone, oriented toward job opportunities while still showing what he can build. Built as a **Vite + React 19** single-page app with **Framer Motion** for animation. Visual identity is **editorial-minimal**: flat near-black base (no decorative background, no glassmorphism), a fixed left sidebar nav on desktop with numbered section links, a persistent "open to opportunities" status, and social links, single cyan accent (amber reserved for status dots), mono-label/serif-body typography. The original light single-file version is archived at `legacy/hafizk-portfolio-v1.html`.

Note: an earlier draft was written as a freelance/client services pitch — that framing was intentionally removed. Keep copy honest and career-oriented, not client-solicitation (the user is employed; overt freelance solicitation could also conflict with an employment contract). Page order: Hero → Projects (`#work`) → What I build (`#build`) → Skills (`#stack`) → About (`#about`) → Experience (`#experience`) → Contact (`#contact`).

## Commands

```powershell
npm install       # install dependencies
npm run dev       # dev server with HMR at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the built dist/ locally
```

There is no test suite or linter configured. `npm run build` is the fastest correctness check — it compiles all JSX and fails on bad imports.

## Architecture

- `index.html` — Vite entry; loads Google Fonts (Archivo / Newsreader / JetBrains Mono) and Devicon CSS over CDN. These two external resources are required for correct rendering.
- `src/main.jsx` — React root; imports the single global stylesheet.
- `src/App.jsx` — composes the page: `Glyphs`, `Nav`, then each section in order, and `Footer`. No decorative background layer.
- `src/styles/global.css` — **all styling lives here** (no CSS modules). Design tokens are CSS variables in `:root`: the dark palette (`--bg`, `--bg-2`, `--ink*`), a single primary accent `--cyan` (`--accent`) plus a secondary `--amber` (`--accent-2`) reserved for status/availability indicators, and the three font families. Change colors/type there, not inline. Surfaces are flat — `--bg-2` fill + a `--line`/`--line-strong` border, no glassmorphism or `backdrop-filter`.
- `src/components/` — one file per section (`Hero`, `Projects`, `Build`, `Stack`, `About`, `Experience`, `Contact`, `Footer`, `Nav`) plus `social-links.js` (the shared Email/LinkedIn/GitHub list used by both Nav and Contact) and `motion.jsx` (shared animation helpers).

## Conventions to preserve

- **Animation helpers live in `src/components/motion.jsx`.** `Reveal` (single scroll-in element), `RevealGroup` + `RevealItem` (staggered children), and the shared `EASE` curve. Prefer these over hand-rolling `whileInView` per component so timing stays consistent.
- **Every animation must respect reduced motion.** All helpers and inline animations gate on Framer Motion's `useReducedMotion()` and fall back to a static, fully-visible state. Keep any new motion behind the same guard.
- **Section content is data-driven.** Cards, reasons, steps, stack chips, and FAQ items are arrays at the top of their component file — edit copy there, not in JSX.
- **Tech-stack chips (`Stack.jsx`) use two icon sources:** real logos via Devicon classes (`icon: 'devicon-...'`) with a per-chip `brand` hex color, or custom concepts via the local SVG sprite (`glyph: 'g-...'`). To add a custom glyph, add a `<symbol id="g-...">` to `src/components/Glyphs.jsx`.
- **Nav** is a fixed left sidebar on desktop (`>860px`): numbered section links (`01`–`05`), a persistent availability + location status, and social links (from `social-links.js`), with a vertical scroll-progress rail that fills as you pass each section. Collapses to a top bar + animated hamburger menu at `≤860px`. Both layouts share the same `IntersectionObserver` scroll-spy for the active-link/rail state.
- Section eyebrows are prefixed with their sidebar nav number (`01 — Selected work`, `02 — What I build`, …) — keep these in sync if a section is ever reordered.
- **Experience** (`src/components/Experience.jsx`) is a placeholder — the `JOBS` array holds two bracketed dummy roles (`[Role title]` @ `[Company name]`). Swap in real work history (role, company, period, impact bullets) and delete the `.section-note` reminder at the bottom, same pattern as the `Projects` placeholder.
- Responsive breakpoints: 860px (sidebar ↔ mobile top bar) and 560px; content column max-width 720px via `.wrap`; sidebar width is the `--sidebar-w` token (264px).

## Unfilled placeholders

- **Projects** (`src/components/Projects.jsx`) currently renders an honest "building in progress" placeholder panel, not real project cards. `global.css` still carries the flat `.projects`/`.project*`/`.tech-tag` styles for when real work is ready to swap in — build a `PROJECTS` array (title, blurb, tech, `code`/`live` URLs) mapped through those classes, and drop the placeholder.
- **Experience** (`src/components/Experience.jsx`) — see the Conventions entry above; the `JOBS` array is bracketed dummy data.
- **Résumé** — commented out in `src/components/social-links.js`. Drop the PDF into a `public/` folder (create it) and uncomment the entry to make the download link live.
- Live links: Email, LinkedIn (`mhafiz1502`), and GitHub (`apizkayyy`) are defined once in `src/components/social-links.js` and shared by `Nav.jsx` (sidebar) and `Contact.jsx`.

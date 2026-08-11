# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal **developer portfolio** for HafizK (a software developer with ~2 years' experience, based in Malaysia, employed — not freelance). It's positioned for career growth: honest tone, oriented toward job opportunities while still showing what he can build. Built as a **Vite + React 19** single-page app with **Framer Motion** for animation. Visual identity is **dark-minimalist-tech**: near-black base, cyan primary accent, drifting teal/blue/violet aurora background. The original light single-file version is archived at `legacy/hafizk-portfolio-v1.html`.

Note: an earlier draft was written as a freelance/client services pitch — that framing was intentionally removed. Keep copy honest and career-oriented, not client-solicitation (the user is employed; overt freelance solicitation could also conflict with an employment contract). Page order: Hero → Projects (`#work`) → What I build (`#build`) → Skills (`#stack`) → About → Contact.

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
- `src/App.jsx` — composes the page: a gradient scroll-progress bar, `AuroraBackground`, `Glyphs`, `Nav`, then each section in order, and `Footer`.
- `src/components/AuroraBackground.jsx` — the fixed decorative background: three CSS aurora blobs (`mix-blend-mode: screen` + heavy blur), a masked animated tech grid, and a lightweight `<canvas>` particle constellation that links nearby nodes and drifts toward the cursor. Purely decorative (`aria-hidden`) and **fully disabled under `prefers-reduced-motion`** — the canvas isn't even mounted in that case. Real content sits above it via `z-index` on `main`/`.nav`/`footer`.
- `src/styles/global.css` — **all styling lives here** (no CSS modules). Design tokens are CSS variables in `:root`: the dark palette (`--bg`, `--ink*`, accents `--cyan`/`--teal`/`--blue`/`--violet`, glass surfaces `--glass*`) plus the three font families. Change colors/type there, not inline. Cards/nav/chain use glassmorphism (translucent `--glass` + `backdrop-filter`).
- `src/components/` — one file per section (`Hero`, `Build`, `Why`, `Process`, `Stack`, `About`, `Faq`, `Contact`, `Footer`, `Nav`) plus two shared helpers.

## Conventions to preserve

- **Animation helpers live in `src/components/motion.jsx`.** `Reveal` (single scroll-in element), `RevealGroup` + `RevealItem` (staggered children), and the shared `EASE` curve. Prefer these over hand-rolling `whileInView` per component so timing stays consistent.
- **Every animation must respect reduced motion.** All helpers and inline animations gate on Framer Motion's `useReducedMotion()` and fall back to a static, fully-visible state. Keep any new motion behind the same guard.
- **Section content is data-driven.** Cards, reasons, steps, stack chips, and FAQ items are arrays at the top of their component file — edit copy there, not in JSX.
- **Tech-stack chips (`Stack.jsx`) use two icon sources:** real logos via Devicon classes (`icon: 'devicon-...'`) with a per-chip `brand` hex color, or custom concepts via the local SVG sprite (`glyph: 'g-...'`). To add a custom glyph, add a `<symbol id="g-...">` to `src/components/Glyphs.jsx`.
- **Nav** tracks the active section with an `IntersectionObserver` scroll-spy and has an animated mobile menu (hamburger appears ≤720px).
- Responsive breakpoints: 860px and 560px; max content width 1080px via `.wrap`.

## Unfilled placeholders

- **Projects** (`src/components/Projects.jsx`) are placeholders — the `PROJECTS` array holds three dummy entries. Swap in real work (title, blurb, tech, `code`/`live` URLs) and delete the `.section-note` reminder at the bottom of the component.
- **Résumé** — the Contact "Résumé (PDF)" link points to `/HafizK-Resume.pdf`; drop that file into a `public/` folder (create it) to make the download work. Until then the link 404s.
- Live links: LinkedIn (`mhafiz1502`), GitHub (`apizkayyy`), and email (`muhammadhafiz1502@gmail.com`) are wired in `Contact.jsx`.

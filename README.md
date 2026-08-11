# HafizK — Developer Portfolio

A personal developer portfolio, built as a single-page app with a **dark-minimalist-tech** visual identity: a near-black base, cyan primary accent, and a drifting teal/blue/violet aurora background with a lightweight particle constellation.

Built with **Vite + React 19** and **Framer Motion**. All animation respects `prefers-reduced-motion`.

## Tech stack

- [React 19](https://react.dev/)
- [Vite 6](https://vite.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- Google Fonts (Archivo / Newsreader / JetBrains Mono) + [Devicon](https://devicon.dev/), loaded over CDN

## Getting started

```powershell
npm install       # install dependencies
npm run dev       # dev server with HMR at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the built dist/ locally
```

There is no test suite or linter. `npm run build` is the fastest correctness check — it compiles all JSX and fails on bad imports.

## Project structure

```
index.html                 Vite entry; loads Google Fonts + Devicon CSS over CDN
src/
  main.jsx                 React root; imports the global stylesheet
  App.jsx                  Composes the page: scroll-progress bar, background, nav, sections, footer
  styles/global.css        All styling (design tokens as CSS variables in :root)
  components/
    AuroraBackground.jsx   Decorative fixed background (aurora blobs, tech grid, canvas particles)
    Glyphs.jsx             SVG sprite of custom glyphs (<symbol id="g-...">)
    motion.jsx             Shared animation helpers (Reveal, RevealGroup/RevealItem, EASE)
    Nav.jsx                Scroll-spy nav with animated mobile menu
    Hero.jsx               Hero section
    Projects.jsx           Project cards (data-driven)
    Build.jsx              "What I build" section
    Stack.jsx              Tech-stack chips (Devicon logos + custom glyphs)
    About.jsx              About section
    Contact.jsx            Contact links
    Footer.jsx             Footer
legacy/                    Archived original single-file version
```

## Page order

Hero → Projects (`#work`) → What I build (`#build`) → Skills (`#stack`) → About → Contact

## Conventions

- **All styling lives in `src/styles/global.css`.** Design tokens (colors, fonts) are CSS variables in `:root` — change them there, not inline.
- **Section content is data-driven** — cards, chips, and copy are arrays at the top of each component file; edit copy there, not in JSX.
- **Animation helpers live in `src/components/motion.jsx`** and every animation gates on `useReducedMotion()`, falling back to a static, fully-visible state.

## Deployment notes

- The Contact "Résumé (PDF)" link points to `/HafizK-Resume.pdf`. Add the file to a `public/` folder to make the download work.
- Live links: LinkedIn (`mhafiz1502`), GitHub (`apizkayyy`), email (`muhammadhafiz1502@gmail.com`).

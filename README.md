# ASADULLAH.PY
A small pseudonymous personal site. React, TypeScript, Vite, Tailwind, Framer Motion. Static; HashRouter and relative base so it deploys to GitHub Pages, Cloudflare Pages, Vercel or Netlify.

Routes: `/`, `/now`, `/manifesto`, `/guestbook`, `/join`, `/void` (hidden), 404.
Copy lives in `src/data/content.ts`. Forms post to Formspree (`https://formspree.io/f/mvkgyqbg`) with a honeypot and inline validation. No analytics or tracking; time and session are client-side only.

    npm install
    npm run dev
    npm run build

Keys: `g` then `h`/`n`/`m`/`j`. MIT licensed.

Not built yet: about, projects, journal, archive, lab, terminal, search, command palette, ambient audio, tests.

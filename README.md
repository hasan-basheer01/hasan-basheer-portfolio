# Hasan Basheer — Portfolio

Personal portfolio site for **Hasan Basheer** — AI Engineer, Software Engineer, AI Product Builder.

Dark-first, single-page, built as a technology product rather than a résumé page.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, **Framer Motion** for animation
- A single API route (`/api/ask`) powering the "Ask My Portfolio" assistant —
  uses the Anthropic API when `ANTHROPIC_API_KEY` is set, and a local
  knowledge base otherwise. No database.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — the site works without it
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (`next/core-web-vitals`) |
| `npm run type-check` | `tsc --noEmit` |

## Editing content

All copy and data live in [`content/`](./content) — one file per concern
(`profile`, `projects`, `skills`, `experience`, `aiLab`, `currentlyBuilding`,
`contentFeed`, `github`, `socialLinks`). Components never hardcode content.

Update the portfolio by editing those files, not the JSX.

Unverified values carry a `TODO:` comment and `confirmed: false`. See the
"Before Launch" checklist in [`CLAUDE.md`](./CLAUDE.md).

## Sections

Home · About · What I Build · Expertise (tech constellation) · Projects
(expandable 7-part case studies) · Experience (journey + timeline) · AI Lab ·
Currently Building · Content & GitHub · Ask My Portfolio · Contact

## Deploy

Any Node host or Vercel. Set:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain
ANTHROPIC_API_KEY=            # optional
```

## Resume

The source of truth for factual content is `public/Hasan-Basheer-Resume.pdf`,
served at `/Hasan-Basheer-Resume.pdf`.

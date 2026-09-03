# CLAUDE.md — Hasan Basheer Portfolio

> Project rules Claude follows in every conversation for this repo.

---

## Project

Personal portfolio for **Hasan Basheer** — AI Engineer · Software Engineer · AI Product Builder.
A premium, dark-first, single-page site that tells a story:
introduction → identity → capability → proof → depth → evolution → momentum → connection.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict, no `any`)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **AI assistant route:** `app/api/ask` → Anthropic API when `ANTHROPIC_API_KEY` is set, local knowledge-base fallback otherwise

No database. No backend service beyond the single API route.

---

## Structure

```
app/
  layout.tsx          # metadata, fonts, JSON-LD
  page.tsx            # section composition
  globals.css         # design tokens + base layer
  opengraph-image.tsx # dynamic OG image
  robots.ts, sitemap.ts
  api/ask/route.ts    # "Ask Hasan" assistant
components/
  layout/             # Navbar, Footer
  sections/           # one file per page section
  ui/                 # Reveal, Section, SectionHeader, MagneticButton, Tag
  visuals/            # HeroVisual, TechConstellation, ArchitectureFlow
content/              # ALL copy + data — never hardcode content in components
lib/                  # askHasan (client service), askKnowledge (KB builder), utils
```

---

## Content rule (important)

All facts, copy, projects, skills, experience and links live in `content/*.ts`.
Components render `content` — they never contain hardcoded prose or data.
To update the portfolio, edit `content/`, not JSX.

Anything not yet verified is marked with a `TODO:` comment and a `confirmed: false`
flag. **Never fabricate** employers, dates, job titles, metrics, client names,
awards, GitHub stars or technologies. Placeholders only.

Source of truth for facts: Hasan's LinkedIn profile
(https://www.linkedin.com/in/basheer-hasan-b0ab4b220/). The site has no
downloadable resume — do not reintroduce a Resume section, button, or PDF.

---

## Code Standards

### TypeScript
- Interfaces for all data shapes; no `any`.
- `"use client"` only on components that need state, effects or Framer Motion hooks.
- Section components accept no props — they read from `content/`.

### Styling
- Tailwind only. No inline styles except computed values (animation delays, SVG coords).
- Use design tokens from `tailwind.config.ts`: `bg`, `line`, `ink`, `accent`.
- Reusable classes in `globals.css` `@layer components`: `.card`, `.section-label`, `.gradient-text`, `.hairline`, `.glow-ring`.

### Animation
- Every animated component must respect `prefers-reduced-motion` via `useReducedMotion()`.
- Purposeful only: scroll reveal, hover, expansion, node/timeline motion. No infinite spinners, no blocking loaders.
- Keep transforms GPU-friendly (`transform`, `opacity`).

---

## Forbidden

- `any` type
- `console.log` in committed code
- Hardcoded content/prose in components (use `content/`)
- Fabricated facts or placeholder data presented as real
- Inline styles for anything static
- Secrets in the repo (`ANTHROPIC_API_KEY` stays in `.env.local`)

---

## Validation

```bash
npm run type-check
npm run lint
npm run build
```

All three must pass before a change is done.

---

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://hasanbasheer.dev
ANTHROPIC_API_KEY=            # optional — enables live "Ask Hasan" answers
ASK_HASAN_MODEL=claude-haiku-4-5-20251001
```

The site is fully functional without any env vars.

---

## Commit Format

```
feat(section): ...
fix(section): ...
style(design): ...
content: update <what>
chore: ...
```

---

## Before Launch — open TODOs

- Confirm GitHub / YouTube URLs (`content/socialLinks.ts`, `content/github.ts`) — LinkedIn is confirmed
- Add real project repo + demo links (`content/projects.ts`)
- Replace placeholder content items with published posts (`content/contentFeed.ts`)
- Add graduation/college photos and build out the Education gallery section
- Set `NEXT_PUBLIC_SITE_URL` to the real domain
- Decide whether to expose phone number (`content/profile.ts`)
- There is no Resume section/download on this site by design — do not re-add one

# Nedanza Academie

Landing page for [Nedanza Academie](https://academie.nedanza.nl) — the training and specialisation centre of Nedanza Psychologen, offering courses in systemic therapy, the Exodus Model and contactual therapy for mental-health practitioners.

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language** — TypeScript
- **Styling** — Tailwind CSS 4
- **Animations** — Framer Motion + Lenis (smooth scroll)
- **i18n** — next-intl (Dutch / English)
- **Icons** — Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The app starts at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Production build             |
| `npm run start` | Start production server      |
| `npm run lint`  | Run ESLint                   |

## Project Structure

```
app/
  [locale]/          # Locale-based routing (nl, en)
    page.tsx         # Home page
    opleidingen/     # Courses page
    voorbeelden/     # Examples page
    layout.tsx       # Root layout per locale
  globals.css        # Global styles
  sitemap.ts         # Dynamic sitemap
  robots.ts          # Robots configuration
  manifest.ts        # PWA manifest
components/
  animations/        # Framer Motion wrappers (reveals, blobs, transitions)
  layout/            # Navbar, Footer
  pages/             # Page-level content components
  providers/         # Lenis smooth-scroll provider
  seo/               # JSON-LD structured data
  shared/            # Reusable UI (CTABanner, PageHeader)
lib/
  i18n/              # next-intl routing & request config
  constants.ts       # Shared constants
  utils.ts           # Utility helpers (cn, etc.)
messages/
  nl.json            # Dutch translations
  en.json            # English translations
public/
  images/            # Static assets (favicon, icons)
```

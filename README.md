# Mina Gharzi — Portfolio

A bilingual (English / Persian), fully responsive developer portfolio built with Next.js 15, TypeScript, and Tailwind CSS v4 — featuring a fixed sidebar layout, full RTL support, dynamic Open Graph images, and a working contact form backed by Resend.

**Live site:** [my-portfolio-three-delta-71.vercel.app](https://my-portfolio-three-delta-71.vercel.app)

![Portfolio preview](public/preview.png)

## Features

- 🌍 **Bilingual (EN/FA)** — client-side language toggle with full RTL layout mirroring, persisted via cookie and read server-side to avoid any flash of the wrong language on reload
- 🎨 **Custom design system** — theme tokens (colors, typography, spacing, shadows) built on Tailwind v4's `@theme`, no component library
- 📱 **Fully responsive** — tested at 375px, 768px, 1024px, and 1440px breakpoints
- ♿ **Accessible** — semantic HTML, visible focus states, descriptive alt text, single `<h1>` per page, and `prefers-reduced-motion` support
- 📄 **Dynamic project case studies** — `/projects/[slug]` pages generated from a single typed data source
- 📬 **Working contact form** — validated with Zod + React Hook Form, submitted via a Next.js Server Action, delivered through Resend, with basic in-memory rate limiting
- 🔍 **SEO-ready** — per-page metadata, a code-generated Open Graph image (no static asset), `sitemap.xml`, and `robots.txt`
- ✅ **Tested** — unit tests (Vitest) for validation logic, end-to-end tests (Playwright) for language switching, navigation, and the contact form

## Tech Stack

| Category | Tools |
|---|---|
| Framework | Next.js 15 (App Router), React, TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Forms & Validation | React Hook Form, Zod |
| Email | Resend |
| Testing | Vitest, Playwright |
| Fonts | General Sans (Latin), Pinar (Persian) |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/                  # Routes, layout, metadata, sitemap/robots
├── components/
│   ├── ui/               # Button, Card, Badge, FadeIn
│   ├── layout/            # Sidebar, MobileNav, Footer, Container
│   └── sections/          # Hero, About, Skills, Projects, Contact
├── config/                # Nav items and project data (single source of truth)
├── context/                # Language provider (cookie + client state)
├── hooks/                  # useInView (scroll-triggered animation)
└── lib/                     # Utilities and Zod schemas
```

## Getting Started

```bash
git clone https://github.com/mina-gharzi/portfolio.git
cd portfolio
npm install
```

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your@email.com
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests (Vitest) |
| `npm run test:e2e` | Run end-to-end tests (Playwright) |

## Deployment

Deployed on [Vercel](https://vercel.com). Required environment variables (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL`) must be set in the project's Vercel dashboard under **Settings → Environment Variables**.

## Author

**Mina Gharzi** — Frontend Developer
[GitHub](https://github.com/mina-gharzi) · [Email](mailto:minagharzipv@gmail.com)

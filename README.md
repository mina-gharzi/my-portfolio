# Mina Gharzi — Portfolio

A bilingual (English / Persian), fully responsive developer portfolio built with **Next.js 16, TypeScript, and Tailwind CSS v4** — featuring a fixed sidebar layout, full RTL support, dynamic Open Graph images, and a working contact form backed by Resend.

**Live site:** [my-portfolio-three-delta-71.vercel.app](https://my-portfolio-three-delta-71.vercel.app)

![Portfolio preview](public/preview.png)

## Features

* 🌍 **Bilingual (EN/FA)** — Client-side language toggle with full RTL layout mirroring, persisted via cookie and read server-side to avoid any flash of the wrong language on reload.

* 🎨 **Custom design system** — Theme tokens for colors, typography, spacing, and shadows built with Tailwind CSS v4's `@theme`, without relying on a component library.

* 📱 **Fully responsive** — Designed and tested across 375px, 768px, 1024px, and 1440px viewport widths.

* ♿ **Accessible** — Semantic HTML, visible focus states, descriptive alt text, a single `<h1>` per page, and `prefers-reduced-motion` support.

* 📄 **Dynamic project case studies** — `/projects/[slug]` pages generated from a single typed project data source.

* 📬 **Working contact form** — Client-side validation with Zod and React Hook Form, submitted through a Next.js Server Action and delivered using Resend, with basic in-memory rate limiting.

* 🔍 **SEO-ready** — Per-page metadata, dynamically generated Open Graph images, `sitemap.xml`, and `robots.txt`.

* 🌐 **RTL support** — Full right-to-left layout support for Persian content with mirrored navigation and interface elements.

* ✅ **Tested** — Unit tests with Vitest for validation logic and end-to-end tests with Playwright covering language switching, navigation, and the contact form.

## Tech Stack

| Category           | Tools                                               |
| ------------------ | --------------------------------------------------- |
| Framework          | Next.js 16 (App Router), React, TypeScript (strict) |
| Styling            | Tailwind CSS v4                                     |
| Forms & Validation | React Hook Form, Zod                                |
| Email              | Resend                                              |
| Testing            | Vitest, Playwright                                  |
| Fonts              | General Sans (Latin), Pinar (Persian)               |
| Deployment         | Vercel                                              |

## Project Structure

```text
src/
├── app/                    # Routes, layout, metadata, sitemap/robots
├── components/
│   ├── ui/                 # Button, Card, Badge, FadeIn
│   ├── layout/             # Sidebar, MobileNav, Footer, Container
│   └── sections/           # Hero, About, Skills, Projects, Contact
├── config/                 # Navigation items and project data
├── context/                # Language provider (cookie + client state)
├── hooks/                  # Reusable React hooks
└── lib/                    # Utilities, API helpers, and Zod schemas
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mina-gharzi/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your@email.com
```

### 4. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the development server         |
| `npm run build`    | Create a production build            |
| `npm run start`    | Serve the production build           |
| `npm run lint`     | Run ESLint                           |
| `npm run test`     | Run unit tests with Vitest           |
| `npm run test:e2e` | Run end-to-end tests with Playwright |

## Deployment

The portfolio is deployed on **Vercel**.

Required environment variables:

```text
RESEND_API_KEY
RESEND_FROM_EMAIL
RESEND_TO_EMAIL
NEXT_PUBLIC_SITE_URL
```

These variables should be configured in the project's Vercel dashboard under:

**Settings → Environment Variables**

## Author

**Mina Gharzi** — Frontend Developer

[GitHub](https://github.com/mina-gharzi) · [Email](mailto:minagharzipv@gmail.com)

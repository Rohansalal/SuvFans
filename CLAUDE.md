# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server (after build)
```

No test suite is configured.

## Architecture

This is a **Next.js 16.2.1 App Router** website for **SUV FANS LLP**, an Indian industrial fan and HVAC manufacturer based in Bhiwadi, Rajasthan.

### Stack
- **Next.js 16.2.1** with App Router (`app/` directory)
- **React 19.2.4**, **TypeScript 5**
- **Tailwind CSS v4** — configured in `tailwind.config.ts`, global styles in `app/globals.css`
- **shadcn/ui** — pre-built UI primitives in `components/ui/`
- **Framer Motion** — page/section animations
- **Embla Carousel** — product carousels
- **React Hook Form + Zod** — form validation
- **Lucide React** — icons

### Data layer
All product data is static — defined in `lib/products.ts` as a typed `PRODUCTS` array. No database or API. The `Product` interface includes: `id`, `slug`, `name`, `category`, `description`, `longDescription`, `applications`, `features`, `specs`, `keywords`, and `sections`. Company-wide constants (name, address, phone, email) live in `lib/config.ts` via `COMPANY_CONFIG`, sourced from env vars (`NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_WHATSAPP`, `CONTACT_EMAIL`).

### Pages
| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Assembles 10 home section components in order |
| `/products` | `app/products/page.tsx` | Client-side filter/search over `PRODUCTS` array |
| `/about` | `app/about/page.tsx` | Static marketing page |
| `/contact` | `app/contact/page.tsx` | Contact form (client-side, no backend wired) |
| `/careers` | `app/careers/page.tsx` | Job listings + application form |

Product category sub-pages live under `app/products/[category]/`. Air purifier landing is at `app/air-purifiers/`. Quote request at `app/get-quote/`.

### Component organization
```
components/
  layout/       # Navbar, Footer — shared across all pages
  home/         # One file per home page section (HeroSection, TrustSection, etc.)
  products/     # ProductCard, ProductDetail, SpecTable
  common/       # CoverageCalculator (interactive tool)
  ui/           # shadcn/ui primitives (Button, Card, Dialog, etc.) — do not edit these manually
```

The home page (`app/page.tsx`) renders sections in this order:
`HeroSection → TrustSection → ProductCategoriesGrid → WhyChooseUs → ApplicationsSection → IndustriesSection → PureAirSpotlight → Testimonials → ContactCTAStrip`

### Design system
| Token | Value | Usage |
|---|---|---|
| Primary dark blue | `#0B2A3C` | Backgrounds, text |
| Accent blue | `#2E86B8` | Highlights, links |
| Orange | `#F5A02E` | CTAs, emphasis text |
| Font | Roboto Condensed | All text — loaded via `next/font/google` AND Google Fonts `<link>` in layout |
| Body bg | `#F4F6F8` | Page background |

Custom Tailwind colors are in `tailwind.config.ts`: `primary` (#0A2E5C), `accent` (#00A8E8), `secondary` (#F97316). These differ slightly from the inline hex values used in component JSX — the inline values are the active design choices.

### Key patterns
- **`"use client"`** is added to any component that uses hooks, animations, or form state. Server components are the default.
- Forms are client-side only — no server actions or API routes wired up yet. Form submissions currently `console.log` or show a success state.
- Images are served from `public/products/` subdirectories. Remote image domains are allowlisted in `next.config.ts`.
- The `<main>` wrapper in `app/layout.tsx` has `pt-[72px]` to offset the fixed navbar height.

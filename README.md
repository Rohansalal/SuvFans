# SUV FANS LLP Website

Production-ready Next.js 14 website for **SUV FANS LLP**, an Indian HVAC and air ventilation manufacturer based in Bhiwadi, Rajasthan.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4 (with OKLCH colors)
- **UI Components:** shadcn/ui
- **Icons:** lucide-react
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Fonts:** Roboto Condensed (Body) + Sora (Headings, Subheadings) via next/font

## Project Structure
- `app/`: Next.js App Router pages and routes
- `components/`: Reusable UI components (layout, home, products, common)
- `lib/`: Product data (`products.ts`), config (`config.ts`), and utilities
- `public/`: Static assets (images, icons)
- `styles/`: Global CSS and Tailwind configuration

## Key Features
- **Dynamic Product Catalog:** 17+ products across 9 categories
- **Turnkey Solutions:** Dedicated section for HVAC and Clean Room projects
- **PURE AIR Spotlight:** Premium landing page for industrial air purifiers
- **Interactive Coverage Calculator:** Real-time air recirculation time estimation
- **Inquiry Flow:** Professional quote request and contact forms with validation
- **Industrial-Modern Design:** Professional aesthetic with subtle animations and precision-driven layouts

## Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`

## Environment Variables
- `NEXT_PUBLIC_PHONE`: Company phone number
- `NEXT_PUBLIC_EMAIL`: Company contact email
- `NEXT_PUBLIC_WHATSAPP`: WhatsApp number for inquiries
- `CONTACT_EMAIL`: Destination email for form submissions

## License
All rights reserved © SUV FANS LLP

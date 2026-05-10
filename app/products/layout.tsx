import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Fan Products & Catalogue — Centrifugal, Axial, HVLS, HVAC',
  description:
    'Browse the complete SUV FANS product catalogue — centrifugal fans, axial fans, HVLS large diameter fans, tube axial, insulated box fans, industrial coolers, HVAC ducts, turnkey systems and PURE AIR purifiers. Manufactured in Bhiwadi, India.',
  keywords: [
    'industrial fan catalogue India',
    'centrifugal fan products',
    'axial fan products',
    'HVLS fan India',
    'HVAC products manufacturer',
    'industrial fan list',
    'fan supplier India',
  ],
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Industrial Fan Products & Catalogue | SUV FANS',
    description:
      'Full product range — centrifugal, axial, HVLS, tube axial fans, insulated box fans, industrial coolers, HVAC ducts and turnkey solutions.',
    url: '/products',
    type: 'website',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

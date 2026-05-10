import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries Served — Manufacturing, Cold-Chain, Pharma, Logistics',
  description:
    'SUV FANS serves automotive, pharma, food processing, cold-chain logistics, warehousing, commercial kitchens, cleanrooms, data centres, and infrastructure projects across India.',
  keywords: [
    'industrial ventilation by industry',
    'pharma HVAC India',
    'cold storage fan',
    'automotive plant ventilation',
    'food processing HVAC',
    'logistics warehouse cooling',
  ],
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries Served | SUV FANS',
    description:
      'Industrial fan and HVAC solutions across manufacturing, pharma, cold-chain, food processing, and logistics.',
    url: '/industries',
    type: 'website',
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

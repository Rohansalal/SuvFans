import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PURE AIR — Commercial & Industrial Air Purifiers',
  description:
    'PURE AIR commercial and industrial air purifiers from SUV FANS. HEPA filtration, high CADR, clean-air solutions for offices, hospitals, schools, factories and warehouses in India.',
  keywords: [
    'industrial air purifier India',
    'commercial air purifier',
    'HEPA air purifier industrial',
    'office air purifier India',
    'hospital air purifier',
    'PURE AIR purifier',
  ],
  alternates: { canonical: '/air-purifiers' },
  openGraph: {
    title: 'PURE AIR — Commercial & Industrial Air Purifiers | SUV FANS',
    description:
      'High-CADR HEPA air purifiers for offices, hospitals, schools, and industrial facilities.',
    url: '/air-purifiers',
    type: 'website',
  },
};

export default function AirPurifiersLayout({ children }: { children: React.ReactNode }) {
  return children;
}

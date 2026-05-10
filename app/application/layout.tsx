import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Applications — Ventilation Solutions by Sector & Environment',
  description:
    'Precision-engineered HVAC and industrial fan solutions across car parks, tunnels, kitchens, factories, warehouses, cleanrooms, cold-chain, commercial buildings and residential applications.',
  keywords: [
    'car park ventilation India',
    'industrial ventilation applications',
    'tunnel ventilation fan',
    'commercial kitchen ventilation',
    'warehouse cooling HVLS',
    'cold storage ventilation',
    'cleanroom HVAC',
  ],
  alternates: { canonical: '/application' },
  openGraph: {
    title: 'Application Solutions — Industry-Specific HVAC by SUV FANS',
    description:
      'Tailored ventilation for parking, tunnels, factories, kitchens, cleanrooms, cold-chain, and commercial buildings.',
    url: '/application',
    type: 'website',
  },
};

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return children;
}

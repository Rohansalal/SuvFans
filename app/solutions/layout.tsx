import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC & Ventilation Solutions — Custom Engineering by SUV FANS',
  description:
    'Turnkey HVAC and industrial ventilation solutions — system design, equipment selection, installation, and commissioning. Engineered for Indian industry by SUV FANS LLP.',
  keywords: [
    'turnkey HVAC India',
    'custom ventilation solution',
    'HVAC system design',
    'industrial ventilation engineering',
    'HVAC contractor India',
  ],
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'HVAC & Ventilation Solutions | SUV FANS',
    description:
      'Custom-engineered HVAC and ventilation — from design to commissioning.',
    url: '/solutions',
    type: 'website',
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

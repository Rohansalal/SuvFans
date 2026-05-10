import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Quote — Industrial Fans, HVAC & Custom Ventilation Solutions',
  description:
    'Request a project quote for industrial fans, centrifugal blowers, HVLS, axial fans, HVAC ducts, industrial coolers, or turnkey ventilation systems. Engineering consultation included.',
  keywords: [
    'industrial fan quote India',
    'HVAC quote request',
    'HVLS fan price quote',
    'centrifugal fan quotation',
    'custom HVAC solution',
  ],
  alternates: { canonical: '/get-quote' },
  openGraph: {
    title: 'Get a Quote — SUV FANS Industrial Ventilation Solutions',
    description:
      'Custom-engineered industrial fan and HVAC quotes — sizing, specs, delivery and installation guidance.',
    url: '/get-quote',
    type: 'website',
  },
};

export default function GetQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SUV FANS — Industrial HVAC Manufacturer in Bhiwadi, India',
  description:
    'Founded by a mechanical engineer with 19+ years of HVAC and industrial ventilation manufacturing expertise — across Indian, Indo-European JV, and US-based organisations. ISO 9001:2015 certified manufacturer in Bhiwadi, Rajasthan.',
  keywords: [
    'about SUV FANS',
    'industrial fan manufacturer Bhiwadi',
    'HVAC manufacturer Rajasthan',
    'industrial fan company India',
    'ISO 9001 fan manufacturer',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About SUV FANS — Industrial HVAC Manufacturer in India',
    description:
      'ISO 9001:2015 certified manufacturer of industrial fans, centrifugal blowers, HVLS, and turnkey HVAC systems. 19+ years of engineering expertise.',
    url: '/about',
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

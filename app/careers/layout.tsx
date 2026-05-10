import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at SUV FANS — Engineering & Manufacturing Jobs in Bhiwadi',
  description:
    'Join SUV FANS LLP — careers in mechanical engineering, HVAC design, production, sales engineering and technical support at our Bhiwadi, Rajasthan manufacturing facility.',
  keywords: [
    'SUV FANS careers',
    'mechanical engineer jobs Bhiwadi',
    'HVAC engineer jobs India',
    'manufacturing jobs Rajasthan',
    'industrial fan company careers',
  ],
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers at SUV FANS — Build the Future of Industrial Ventilation',
    description:
      'Engineering, design, manufacturing, and sales roles at SUV FANS LLP, Bhiwadi.',
    url: '/careers',
    type: 'website',
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}

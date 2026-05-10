import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact SUV FANS — Industrial Fan & HVAC Inquiries, Bhiwadi India',
  description:
    'Get in touch with SUV FANS LLP — Bhiwadi, Rajasthan. Speak to our engineering team about industrial fan selection, custom HVAC solutions, capacity sizing, project quotes, and technical support.',
  keywords: [
    'contact SUV FANS',
    'industrial fan inquiry India',
    'HVAC quote Bhiwadi',
    'fan engineering consultation',
    'industrial fan supplier contact',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact SUV FANS — Engineering Support & Technical Inquiries',
    description:
      'Talk to our HVAC engineers — fan selection, capacity sizing, project quotes for industrial and commercial ventilation.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

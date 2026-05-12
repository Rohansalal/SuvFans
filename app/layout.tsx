import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import Providers from '@/components/Providers';
import JsonLd from '@/components/seo/JsonLd';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { COMPANY_CONFIG } from '@/lib/config';
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from '@/lib/schema';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const siteName = COMPANY_CONFIG.shortName;

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_CONFIG.siteUrl),
  title: {
    default: `${COMPANY_CONFIG.name} — Industrial Fan & HVAC Manufacturer in India`,
    template: `%s | ${siteName}`,
  },
  description:
    'India-based manufacturer of heavy-duty industrial fans — centrifugal, axial, HVLS, tube axial, insulated box fans, industrial coolers, HVAC ducts and turnkey ventilation systems. ISO 9001:2015 certified, 19+ years of expertise in Bhiwadi, Rajasthan.',
  applicationName: COMPANY_CONFIG.name,
  authors: [{ name: COMPANY_CONFIG.name, url: COMPANY_CONFIG.siteUrl }],
  generator: 'Next.js',
  keywords: [
    'industrial fans manufacturer India',
    'centrifugal fan manufacturer',
    'axial fan manufacturer',
    'HVLS fan India',
    'tube axial fan',
    'insulated box fan',
    'industrial cooler',
    'HVAC manufacturer India',
    'industrial ventilation system',
    'factory exhaust fan',
    'warehouse cooling fan',
    'centrifugal blower',
    'turnkey HVAC',
    'air purifier industrial',
    'kitchen exhaust hood',
    'HVAC ducting',
    'industrial fan Bhiwadi',
    'industrial fan Rajasthan',
    'industrial fan Delhi NCR',
    'SUV FANS LLP',
  ],
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: COMPANY_CONFIG.siteUrl,
    siteName: COMPANY_CONFIG.name,
    title: `${COMPANY_CONFIG.name} — Industrial Fan & HVAC Manufacturer in India`,
    description:
      'Heavy-duty industrial fans, centrifugal blowers, axial fans, HVLS, industrial coolers and turnkey HVAC systems — engineered in Bhiwadi, India.',
    images: [
      {
        url: '/home.webp',
        width: 1200,
        height: 630,
        alt: 'SUV FANS — Industrial Fan & HVAC Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_CONFIG.name} — Industrial Fan & HVAC Manufacturer`,
    description:
      'Centrifugal, Axial, HVLS, Tube Axial fans + Turnkey HVAC. ISO 9001:2015 certified, 19+ years of engineering.',
    images: ['/home.webp'],
    creator: COMPANY_CONFIG.twitter,
    site: COMPANY_CONFIG.twitter,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  category: 'manufacturing',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    google: 'Ueu31jAvptCNWISz7N-BFam6onPXcLvq6npl6u5_1Rg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* DNS prefetch / preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Site-wide JSON-LD: Organization + LocalBusiness + WebSite */}
        <JsonLd
          data={[organizationSchema(), localBusinessSchema(), websiteSchema()]}
        />
      </head>
      <body className={`${jakarta.variable} font-body bg-[#F4F6F8] text-[#0B2A3C] dark:bg-[#0B1A26] dark:text-white`} suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main className="min-h-screen pt-[88px]">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

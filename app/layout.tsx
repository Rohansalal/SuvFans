import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import Providers from '@/components/Providers';
import { Roboto_Condensed } from 'next/font/google';
import { COMPANY_CONFIG } from '@/lib/config';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_CONFIG.name} — Industrial Fans & HVAC Solutions India`,
    template: `%s | ${COMPANY_CONFIG.name}`,
  },
  description: 'Leading manufacturer of heavy-duty industrial fans, centrifugal fans, axial fans, HVLS fans, industrial coolers and turnkey HVAC solutions in India. 19+ years of engineering expertise. Energy efficient fans for factories and warehouses.',
  keywords: 'industrial fans, heavy duty fans, centrifugal fans India, axial fans manufacturer, HVLS fans, industrial coolers, HVAC solutions India, energy efficient fans, air ventilation manufacturer, Bhiwadi Rajasthan',
  openGraph: {
    title: 'SUV FANS LLP — Your Partner in Air Movement',
    description: 'Industrial HVAC & Fan Manufacturer — Centrifugal, Axial, HVLS Fans + Turnkey Solutions',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${robotoCondensed.variable} font-body bg-[#F4F6F8] text-[#0B2A3C] dark:bg-[#0B1A26] dark:text-white`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen pt-[72px]">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

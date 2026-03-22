import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMPANY_CONFIG } from '@/lib/config';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_CONFIG.name} — HVAC & Air Ventilation Solutions`,
    template: `%s | ${COMPANY_CONFIG.name}`,
  },
  description: 'Leading manufacturer of centrifugal fans, axial fans, HVLS fans, industrial coolers and turnkey HVAC solutions in India. 19+ years of engineering expertise.',
  keywords: 'centrifugal fans india, axial fans manufacturer, HVAC solutions india, industrial fans bhiwadi, HVLS fans, air ventilation manufacturer rajasthan',
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${sora.variable} font-sans bg-[#F8FAFC] text-[#1A1A2E]`}>
        <Navbar />
        <main className="min-h-screen pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

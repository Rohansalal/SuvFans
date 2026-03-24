import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMPANY_CONFIG } from '@/lib/config';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-body bg-[#F4F6F8] text-[#0B2A3C]`}>
        <Navbar />
        <main className="min-h-screen pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

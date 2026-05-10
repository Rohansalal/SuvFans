import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import ProductCategoriesGrid from '@/components/home/ProductCategoriesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ApplicationsSection from '@/components/home/ApplicationsSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import PureAirSpotlight from '@/components/home/PureAirSpotlight';
import Testimonials from '@/components/home/Testimonials';
import ContactCTAStrip from '@/components/home/ContactCTAStrip';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'SUV FANS LLP — Industrial Fan & HVAC Manufacturer in India',
  description:
    'Manufacturer of heavy-duty industrial fans — centrifugal, axial, HVLS, tube axial, insulated box fans, industrial coolers, HVAC ducts and turnkey ventilation systems. ISO 9001:2015 certified. 19+ years engineering expertise. Bhiwadi, Rajasthan.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SUV FANS LLP — Industrial Fan & HVAC Manufacturer in India',
    description:
      'Centrifugal, Axial, HVLS, Tube Axial fans + Turnkey HVAC solutions. ISO 9001:2015 certified manufacturer in Bhiwadi, Rajasthan.',
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }])} />
      <HeroSection />
      <TrustSection />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <ApplicationsSection />
      <IndustriesSection />
      <PureAirSpotlight />
      <Testimonials />
      <ContactCTAStrip />
    </>
  );
}

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import ProductCategoriesGrid from '@/components/home/ProductCategoriesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ApplicationsSection from '@/components/home/ApplicationsSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import PureAirSpotlight from '@/components/home/PureAirSpotlight';
import CaseStudies from '@/components/home/CaseStudies';
import Testimonials from '@/components/home/Testimonials';
import ContactCTAStrip from '@/components/home/ContactCTAStrip';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <ApplicationsSection />
      <IndustriesSection />
      <PureAirSpotlight />
      <CaseStudies />
      <Testimonials />
      <ContactCTAStrip />
    </>
  );
}

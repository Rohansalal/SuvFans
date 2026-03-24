import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import ProductCategoriesGrid from '@/components/home/ProductCategoriesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import TechnicalSpecs from '@/components/home/TechnicalSpecs';
import ApplicationsSection from '@/components/home/ApplicationsSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import SolutionsBanner from '@/components/home/SolutionsBanner';
import PureAirSpotlight from '@/components/home/PureAirSpotlight';
import Testimonials from '@/components/home/Testimonials';
import ContactCTAStrip from '@/components/home/ContactCTAStrip';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <TechnicalSpecs />
      <ApplicationsSection />
      <FeaturedProducts />
      <IndustriesSection />
      <SolutionsBanner />
      <PureAirSpotlight />
      <Testimonials />
      <ContactCTAStrip />
    </>
  );
}

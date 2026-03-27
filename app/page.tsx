import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import ProductCategoriesGrid from '@/components/home/ProductCategoriesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ApplicationsSection from '@/components/home/ApplicationsSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import Testimonials from '@/components/home/Testimonials';
import ContactCTAStrip from '@/components/home/ContactCTAStrip';
import PureAirSpotlight from '@/components/home/PureAirSpotlight';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <ApplicationsSection />
      {/* <FeaturedProducts /> */}
      <IndustriesSection />
      <PureAirSpotlight />
      <Testimonials />
      <ContactCTAStrip />
    </>
  );
}

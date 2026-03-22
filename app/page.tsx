import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProductCategoriesGrid from '@/components/home/ProductCategoriesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import StatsBanner from '@/components/home/StatsBanner';
import SolutionsBanner from '@/components/home/SolutionsBanner';
import IndustriesSection from '@/components/home/IndustriesSection';
import PureAirSpotlight from '@/components/home/PureAirSpotlight';
import Testimonials from '@/components/home/Testimonials';
import ContactCTAStrip from '@/components/home/ContactCTAStrip';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <FeaturedProducts />
      <StatsBanner />
      <IndustriesSection />
      <SolutionsBanner />
      <PureAirSpotlight />
      <Testimonials />
      <ContactCTAStrip />
    </>
  );
}

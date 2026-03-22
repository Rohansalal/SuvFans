import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProductCategoriesGrid from '@/components/home/ProductCategoriesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import StatsBanner from '@/components/home/StatsBanner';
import SolutionsBanner from '@/components/home/SolutionsBanner';
import PureAirSpotlight from '@/components/home/PureAirSpotlight';
import ContactCTAStrip from '@/components/home/ContactCTAStrip';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <FeaturedProducts />
      <StatsBanner />
      <SolutionsBanner />
      <PureAirSpotlight />
      <ContactCTAStrip />
    </>
  );
}

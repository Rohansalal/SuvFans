'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Fan } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedProducts = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const featured = PRODUCTS.filter(p => p.id === '1' || p.id === '6' || p.id === '7' || p.id === '14' || p.id === '17');

  return (
    <section className="py-24 bg-[#F4F6F8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* H2: Montserrat */}
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B2A3C] mb-4">
              Featured Products
            </h2>
            <div className="w-24 h-1.5 bg-[#F5A02E] mx-auto mb-6"></div>
            {/* Body: Inter */}
            <p className="font-body text-[#6B7280] max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our premium range of <strong>high-airflow industrial fans</strong> and ventilation solutions engineered for superior performance.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {featured.map((product) => (
                <div key={product.id} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                  <Card className="h-full border-2 border-[#D1D5DB] bg-white shadow-sm hover:shadow-2xl hover:border-[#F5A02E] transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="h-56 bg-gradient-to-br from-[#0B2A3C] to-[#2E86B8] relative overflow-hidden flex items-center justify-center">
                        <Fan size={72} className="text-white/10 group-hover:text-[#F5A02E]/30 transition-colors duration-500" />
                        
                        {product.badge && (
                          <div className="absolute top-4 left-4 bg-[#F5A02E] text-[#0B2A3C] text-[10px] font-heading font-bold uppercase tracking-widest px-3 py-1 shadow-lg">
                            {product.badge}
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        {/* Category Label */}
                        <div className="font-body text-xs font-bold text-[#2E86B8] uppercase tracking-wider mb-2">
                          {product.category}
                        </div>
                        {/* H3: Montserrat - Product Name */}
                        <h3 className="font-heading text-lg font-bold text-[#0B2A3C] mb-3 line-clamp-1 group-hover:text-[#F5A02E] transition-colors">
                          {product.name}
                        </h3>
                        {/* Body: Inter */}
                        <p className="font-body text-[#6B7280] text-sm mb-4 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                        {/* Key Spec Highlight */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="font-body text-[11px] font-bold bg-[#0B2A3C]/10 text-[#0B2A3C] px-3 py-1.5 rounded uppercase tracking-tight">
                            {product.specs.capacityRange}
                          </span>
                        </div>
                        <Button asChild variant="outline" className="font-body w-full border-2 border-[#0B2A3C] text-[#0B2A3C] hover:bg-[#0B2A3C] hover:text-white group font-semibold">
                          <Link href={`/products/${product.slug}`}>
                            View Details
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border-2 border-[#0B2A3C] flex items-center justify-center text-[#0B2A3C] hover:bg-[#0B2A3C] hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border-2 border-[#0B2A3C] flex items-center justify-center text-[#0B2A3C] hover:bg-[#0B2A3C] hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-heading font-bold uppercase tracking-wide px-7 h-11 text-sm shadow-md transition-all hover:-translate-y-0.5">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

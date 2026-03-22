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
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1A1A2E] mb-4">
              Our Featured Products
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our premium range of industrial fans and ventilation solutions engineered for superior performance.
            </p>
          </motion.div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {featured.map((product) => (
              <div key={product.id} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                <Card className="h-full border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#1A1A2E] to-[#0A2E5C] relative overflow-hidden flex items-center justify-center">
                      <Fan size={80} className="text-white/10 group-hover:text-primary/30 transition-colors duration-500" />
                      
                      {product.badge && (
                        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                          {product.badge}
                        </div>
                      )}
                    </div>
                    <div className="p-8">
                      <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                        {product.category}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-[#1A1A2E] mb-4 line-clamp-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="text-[10px] font-bold bg-primary/10 text-[#1A1A2E] px-3 py-1.5 rounded uppercase tracking-tighter">
                          {product.specs.capacityRange}
                        </span>
                      </div>
                      <Button asChild variant="outline" className="w-full border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white group">
                        <Link href={`/products/${product.categorySlug}/${product.slug}`}>
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

        <div className="mt-12 flex justify-center gap-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollPrev}
            className="rounded-full border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white w-12 h-12"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollNext}
            className="rounded-full border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white w-12 h-12"
          >
            <ChevronRight size={24} />
          </Button>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 font-bold">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

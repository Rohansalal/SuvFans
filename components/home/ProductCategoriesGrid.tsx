'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/lib/products';
import { ArrowRight, Fan, Wind, Box, Thermometer, Maximize, Scissors, Shield, Airplay, ArrowUpRight, Zap, Gauge } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categoryIcons: { [key: string]: any } = {
  'centrifugal-inline-cubic-fans': Fan,
  'axial-wall-exhaust-supply-fans': Fan,
  'insulated-housing-cabinet-fan': Box,
  'tube-axial-fans': Fan,
  'belt-driven-cabinet-fans': Fan,
  'hvls-fans': Maximize,
  'hvac-air-duct-kitchen-hoods': Scissors,
  'turnkey-hvac-products': Shield,
  'air-purifiers': Airplay,
};

const ProductCategoriesGrid = () => {
  return (
    <section className="py-24 bg-[#F4F6F8]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[#2E86B8] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Products
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B2A3C] mb-4">
              Product Categories
            </h2>
            <div className="w-24 h-1.5 bg-[#F5A02E] mx-auto mb-6"></div>
            <p className="font-body text-[#6B7280] max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive range of <strong>heavy-duty industrial fans</strong> and ventilation solutions designed for maximum performance and reliability.
            </p>
          </motion.div>
        </div>

        {/* Product Grid - Premium Card Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((cat, index) => {
            const Icon = categoryIcons[cat.slug] || Fan;
            
            // Find a representative image from the PRODUCTS array
            // The user changed cat.slug to be product slugs, so we search by p.slug first
            const product = PRODUCTS.find(p => p.slug === cat.slug || p.categorySlug === cat.slug);
            const categoryImage = product?.image || (cat.slug === 'air-purifiers' ? '/pureair.webp' : null);
            
            // Special handling for air-purifiers route which is top-level
            const href = cat.slug === 'air-purifiers' ? '/air-purifiers' : `/products/${cat.slug}`;
            
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={href} className="group block h-full">
                  <Card className="h-full border-2 border-[#D1D5DB] bg-white shadow-sm hover:shadow-2xl hover:border-[#F5A02E] transition-all duration-300 overflow-hidden relative group-hover:-translate-y-2 rounded-2xl">
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Image/Icon Area - Made significantly larger */}
                      <div className="h-72 relative overflow-hidden flex items-center justify-center bg-gray-100">
                        {categoryImage ? (
                          <Image
                            src={categoryImage}
                            alt={cat.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A3C] to-[#2E86B8] flex items-center justify-center">
                            <Icon size={80} className="text-white/20 group-hover:text-[#F5A02E]/40 transition-colors duration-500" />
                          </div>
                        )}
                        
                        {/* Overlay elements */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-6 left-6 bg-[#F5A02E] text-[#0B2A3C] text-[11px] font-heading font-black uppercase tracking-widest px-4 py-1.5 z-10 shadow-lg rounded-sm">
                          {cat.name}
                        </div>

                        {/* Hover Reveal Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#0B2A3C]/40 backdrop-blur-[2px] z-20">
                          <Button className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-heading font-black uppercase tracking-widest px-6 py-4 rounded-xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                             View Details
                          </Button>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                        <h3 className="font-heading text-2xl font-black text-[#0B2A3C] mb-4 group-hover:text-[#F5A02E] transition-colors uppercase tracking-tight">
                          {cat.name}
                        </h3>
                        
                        <div className="mt-auto flex items-center text-xs font-heading font-black text-[#2E86B8] group-hover:text-[#F5A02E] transition-colors uppercase tracking-[0.2em]">
                          Explore Category <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesGrid;

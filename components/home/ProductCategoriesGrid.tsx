'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '@/lib/products';
import { ArrowRight, Fan, Wind, Box, Thermometer, Maximize, Scissors, Shield, Airplay, ArrowUpRight, Zap, Gauge } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categoryIcons: { [key: string]: any } = {
  'centrifugal-fans': Fan,
  'fume-exhaust-fans': Wind,
  'axial-flow-fans': Fan,
  'insulated-box-fans': Box,
  'industrial-coolers': Thermometer,
  'hvls-fans': Maximize,
  'hvac-ducts': Scissors,
  'turnkey-solutions': Shield,
  'air-purifiers': Airplay,
};

const categorySpecs: { [key: string]: string[] } = {
  'centrifugal-fans': ['Up to 25,000 CMH', 'High Pressure', 'Industrial Grade'],
  'fume-exhaust-fans': ['Up to 120°C', 'Corrosion Resistant', 'Heavy Duty'],
  'axial-flow-fans': ['Up to 100,000 CFM', 'Low Noise', 'Energy Efficient'],
  'insulated-box-fans': ['Ultra Quiet', 'Ceiling Mount', 'Commercial'],
  'industrial-coolers': ['30,000 CMH', 'Water Cooled', 'Energy Saving'],
  'hvls-fans': ['Up to 200,000 CFM', 'Large Coverage', 'Low Speed'],
  'hvac-ducts': ['Custom Built', 'All Sizes', 'Professional'],
  'turnkey-solutions': ['End-to-End', 'Pan-India', 'Expert Team'],
  'air-purifiers': ['HEPA Filter', 'PM0.1 Removal', 'Silent'],
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((cat, index) => {
            const Icon = categoryIcons[cat.slug] || Fan;
            const specs = categorySpecs[cat.slug] || [];
            
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${cat.slug}`} className="group block h-full">
                  <Card className="h-full border-2 border-[#D1D5DB] bg-white shadow-sm hover:shadow-2xl hover:border-[#F5A02E] transition-all duration-300 overflow-hidden relative group-hover:-translate-y-2">
                    <CardContent className="p-0 flex flex-col">
                      {/* Image/Icon Area */}
                      <div className="h-44 bg-gradient-to-br from-[#0B2A3C] to-[#2E86B8] relative overflow-hidden flex items-center justify-center">
                        <Icon size={64} className="text-white/20 group-hover:text-[#F5A02E]/40 transition-colors duration-500" />
                        <div className="absolute inset-0 bg-[#F5A02E]/0 group-hover:bg-[#F5A02E]/10 transition-colors duration-300" />
                        <ArrowUpRight className="absolute top-4 right-4 text-white/60 group-hover:text-[#F5A02E] group-hover:scale-110 transition-all duration-300" size={24} />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-[#F5A02E]/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                          {cat.slug.replace('-', ' ')}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-heading text-xl font-bold text-[#0B2A3C] mb-3 group-hover:text-[#F5A02E] transition-colors">
                          {cat.name}
                        </h3>
                        
                        {/* Quick Specs - Highlighted */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {specs.slice(0, 3).map((spec, idx) => (
                            <span key={idx} className="flex items-center gap-1 text-[11px] font-body font-semibold bg-[#F4F6F8] text-[#0B2A3C] px-2 py-1 rounded">
                              <Zap size={10} className="text-[#F5A02E]" />
                              {spec}
                            </span>
                          ))}
                        </div>
                        
                        <p className="font-body text-[#6B7280] text-sm mb-4 leading-relaxed flex-grow">
                          High-performance {cat.name.toLowerCase()} designed for industrial and commercial applications.
                        </p>
                        
                        {/* View Details CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-[#D1D5DB]">
                          <span className="font-body text-sm font-bold text-[#F5A02E] group-hover:gap-3 transition-all flex items-center gap-2">
                            View Details 
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild className="bg-[#0B2A3C] hover:bg-[#2E86B8] font-heading font-bold uppercase tracking-wide px-8 h-12">
            <Link href="/products">
              View All Products <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategoriesGrid;

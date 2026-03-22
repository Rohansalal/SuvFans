'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '@/lib/products';
import { ArrowRight, Fan, Wind, Filter, Box, Thermometer, Maximize, Scissors, Shield, Airplay, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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

const ProductCategoriesGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1A1A2E] mb-4">
              Our Product Categories
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover our comprehensive range of industrial fans and ventilation solutions designed for optimal air circulation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((cat, index) => {
            const Icon = categoryIcons[cat.slug] || Wind;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${cat.slug}`} className="group">
                  <Card className="h-full border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden relative group-hover:-translate-y-2">
                    <CardContent className="p-0 flex flex-col">
                      {/* Image Area */}
                      <div className="h-48 bg-gradient-to-br from-[#1A1A2E] to-[#0A2E5C] relative overflow-hidden flex items-center justify-center">
                        <Icon size={64} className="text-white/20 group-hover:text-primary/40 transition-colors duration-500" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                        <ArrowUpRight className="absolute top-4 right-4 text-white/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" size={24} />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-heading font-bold text-[#1A1A2E] mb-3 group-hover:text-primary transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-grow">
                          High-performance {cat.name.toLowerCase()} designed for industrial and commercial applications.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                          Explore Products <ArrowRight size={16} />
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

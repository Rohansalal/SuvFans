'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CATALOGUE } from '@/lib/productdetail';
import { ArrowRight, Fan, Wind, Box, Maximize, Shield, Airplay, Layers, Droplets } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categoryIcons: Record<string, typeof Fan> = {
  'centrifugal-fans': Fan,
  'centrifugal-fume-exhaust': Wind,
  'axial-flow-fans': Fan,
  'tube-axial-fans': Wind,
  'insulated-box-fans': Box,
  'industrial-coolers': Droplets,
  'hvac-air-ducts': Layers,
  'large-diameter-fans': Maximize,
  'turnkey-hvac': Shield,
  'pure-air-purifiers': Airplay,
};

const ProductCategoriesGrid = () => {
  return (
    <section className="py-24 bg-[#F4F6F8]">
      <div className="container mx-auto px-4 md:px-6">
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
            <div className="w-24 h-1.5 bg-[#F5A02E] mx-auto mb-6" />
            <p className="font-body text-[#6B7280] max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive range of <strong>heavy-duty industrial fans</strong> and ventilation
              solutions designed for maximum performance and reliability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATALOGUE.map((cat, index) => {
            const Icon = categoryIcons[cat.slug] || Fan;
            const categoryImage = cat.products[0]?.image;
            const productCount = cat.products.length;
            const href =
              cat.slug === 'pure-air-purifiers'
                ? '/air-purifiers'
                : `/products#cat-${cat.slug}`;

            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={href} className="group block h-full">
                  <Card className="h-full border-2 border-[#D1D5DB] bg-white shadow-sm hover:shadow-2xl hover:border-[#F5A02E] transition-all duration-300 overflow-hidden relative group-hover:-translate-y-2 rounded-2xl">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="h-72 relative overflow-hidden flex items-center justify-center bg-[#F4F6F8]">
                        {categoryImage ? (
                          <Image
                            src={categoryImage}
                            alt={cat.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A3C] to-[#2E86B8] flex items-center justify-center">
                            <Icon size={80} className="text-white/20 group-hover:text-[#F5A02E]/40 transition-colors duration-500" />
                          </div>
                        )}

                        <div className="absolute top-6 left-6 bg-[#F5A02E] text-[#0B2A3C] text-[11px] font-heading font-black uppercase tracking-widest px-4 py-1.5 z-10 shadow-lg rounded-sm">
                          Section {cat.order}
                        </div>

                        <div className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-md text-[#0B2A3C] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm shadow">
                          {productCount} {productCount === 1 ? 'product' : 'products'}
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#0B2A3C]/40 backdrop-blur-[2px] z-20">
                          <Button className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-heading font-black uppercase tracking-widest px-6 py-4 rounded-xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            Explore Section
                          </Button>
                        </div>
                      </div>

                      <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                        <h3 className="font-heading text-2xl font-black text-[#0B2A3C] mb-2 group-hover:text-[#F5A02E] transition-colors uppercase tracking-tight">
                          {cat.name}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2">
                          {cat.tagline}
                        </p>

                        <div className="mt-auto flex items-center text-xs font-heading font-black text-[#2E86B8] group-hover:text-[#F5A02E] transition-colors uppercase tracking-[0.2em]">
                          Explore Section
                          <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
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

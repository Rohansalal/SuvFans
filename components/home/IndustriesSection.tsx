'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { INDUSTRIES } from '@/lib/industries';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0A2E5C] mb-6 uppercase">
              Industries <span className="text-primary italic">We Serve</span>
            </h2>
            <p className="text-gray-500 text-lg font-medium">
              Precision-engineered ventilation solutions for diverse industrial and commercial sectors.
            </p>
          </div>
          <Button asChild variant="outline" className="border-[#0A2E5C] text-[#0A2E5C] hover:bg-[#0A2E5C] hover:text-white rounded-xl px-8 font-bold">
            <Link href="/industries">View All Industries <ChevronRight className="ml-2" size={18} /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.slice(0, 3).map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100"
            >
              <Image 
                src={industry.image} 
                alt={industry.name} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E5C] via-[#0A2E5C]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-2xl font-black text-white mb-3 uppercase italic tracking-tight">{industry.name}</h3>
                <p className="text-white/70 text-sm mb-6 line-clamp-2 font-medium">
                  {industry.description}
                </p>
                <Link 
                  href={`/industries/${industry.slug}`} 
                  className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs group/link transition-all"
                >
                  Explore Solutions 
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

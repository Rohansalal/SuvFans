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
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            {/* H2: Montserrat */}
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B2A3C] mb-4">
              Industries <span className="text-[#F5A02E]">We Serve</span>
            </h2>
            {/* Body: Inter */}
            <p className="font-body text-[#6B7280] text-lg font-medium leading-relaxed">
              Precision-engineered ventilation solutions for diverse industrial and commercial sectors.
            </p>
          </div>
          <Button asChild variant="outline" className="font-heading border-2 border-[#0B2A3C] text-[#0B2A3C] hover:bg-[#0B2A3C] hover:text-white font-bold uppercase tracking-wide px-6">
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
              className="group relative h-[400px] rounded-sm overflow-hidden shadow-xl border-2 border-[#D1D5DB] hover:border-[#F5A02E] transition-all duration-300"
            >
              <Image 
                src={industry.image} 
                alt={`${industry.name} - Industrial Ventilation Solutions`}
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3C] via-[#0B2A3C]/60 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                {/* H3: Montserrat */}
                <h3 className="font-heading text-xl font-bold text-white mb-3 uppercase tracking-wide">{industry.name}</h3>
                {/* Body: Inter */}
                <p className="font-body text-white/70 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {industry.description}
                </p>
                <Link 
                  href={`/industries/${industry.slug}`} 
                  className="font-body inline-flex items-center gap-2 text-[#F5A02E] font-bold uppercase tracking-wider text-xs group/link transition-all hover:gap-3"
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

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { INDUSTRIES } from '@/lib/industries';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Factory, ChefHat, Warehouse, Hospital } from 'lucide-react';

const industryIcons = {
  '1': <Factory size={24} />,
  '2': <ChefHat size={24} />,
  '3': <Warehouse size={24} />,
  '4': <Hospital size={24} />,
};

const IndustriesPage = () => {
  return (
    <div className="bg-[#F8FAFC] pb-24">
      {/* Header */}
      <section className="bg-[#0A2E5C] pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="gridInd" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#gridInd)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2 mb-6 uppercase tracking-widest font-bold">
              Sectors We Serve
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Industries <span className="text-primary italic">Overview</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Tailored air movement and ventilation solutions engineered for specific industrial challenges and requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden group hover:border-primary/20 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image 
                    src={industry.image} 
                    alt={industry.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-[#0A2E5C]/20 group-hover:bg-[#0A2E5C]/10 transition-colors" />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {industryIcons[industry.id as keyof typeof industryIcons]}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#0A2E5C] mb-4 group-hover:text-primary transition-colors italic uppercase">
                    {industry.name}
                  </h3>
                  <p className="text-gray-500 mb-8 leading-relaxed font-medium">
                    {industry.description}
                  </p>
                  <Link 
                    href={`/industries/${industry.slug}`} 
                    className="inline-flex items-center gap-2 font-bold text-primary uppercase tracking-widest text-xs group/link"
                  >
                    View Solutions 
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;

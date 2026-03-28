'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wind, ArrowRight, Phone, Mail, Factory, Zap, Shield, Check, ChevronRight } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/config';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-start overflow-hidden bg-[#0B2A3C] pt-[64px] md:pt-[80px]">
      {/* Background Industrial Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/home.webp)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A3C]/95 via-[#0B2A3C]/80 to-[#0B2A3C]/60" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#fff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Airflow Animation Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#F5A02E]/30 to-transparent"
            style={{ top: `${15 + i * 12}%`, left: 0, right: 0 }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear"
            }}
          />
        ))}
      </div>

     

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge - More visible with padding */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-0"
            >
              <div className="h-px w-20 bg-[#F5A02E]" />
              <span className="font-heading text-[#F5A02E] font-bold uppercase tracking-[0.3em] text-base bg-[#0B2A3C]/50 px-4 py-2 rounded border border-[#F5A02E]/30">
                {COMPANY_CONFIG.iso}
              </span>
              <div className="h-px w-20 bg-[#F5A02E]" />
            </motion.div>

            {/* H1: Main Value Proposition */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              High-Performance <span className="text-[#F5A02E]">Industrial Fans</span> <br />
              <span className="text-2xl md:text-3xl font-semibold">for Maximum Airflow</span>
            </h1>
            
            {/* Subtext */}
            <p className="font-body text-lg md:text-xl text-[#D1D5DB] mb-8 max-w-2xl leading-relaxed">
              Engineered for <strong className="text-white">durability, efficiency, and performance</strong>. 
              Our heavy-duty industrial fans deliver superior airflow solutions for factories, warehouses, and commercial spaces across India.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: Factory, text: `${COMPANY_CONFIG.yearsOfExperience}+ Years Experience` },
                { icon: Zap, text: 'Energy Efficient' },
                { icon: Shield, text: 'ISO 9001:2015 Certified' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-2 bg-[#2E86B8]/20 px-4 py-2 rounded-sm border border-[#2E86B8]/30"
                >
                  <item.icon className="text-[#F5A02E]" size={18} />
                  <span className="font-heading text-white font-semibold text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-heading font-bold uppercase tracking-wide text-sm px-7 py-4 h-auto shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <Link href="/get-quote">
                    Get Quote
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-transparent hover:bg-white/10 border-2 border-white/30 text-white font-heading font-bold uppercase tracking-wide text-sm px-7 py-4 h-auto transition-all"
                >
                  <Link href="/products">
                    View Products <ChevronRight className="ml-1" size={18} />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5A02E] via-[#2E86B8] to-[#0B2A3C]" />
    </section>
  );
};

export default HeroSection;

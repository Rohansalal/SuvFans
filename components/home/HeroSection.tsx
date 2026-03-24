'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wind, ArrowRight, Phone, Mail, Factory, Zap, Shield, Check, ChevronRight } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/config';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0B2A3C]">
      {/* Background Industrial Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80)' }}
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

      {/* Rotating Fan Visual */}
      <div className="absolute right-[2%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden xl:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-[600px] h-[600px]">
            <Wind size={600} strokeWidth={0.2} className="text-[#2E86B8]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-4 border-[#F5A02E] animate-spin-slow" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge - More visible with padding */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8 pt-8"
            >
              <div className="h-px w-20 bg-[#F5A02E]" />
              <span className="font-heading text-[#F5A02E] font-bold uppercase tracking-[0.3em] text-base bg-[#0B2A3C]/50 px-4 py-2 rounded border border-[#F5A02E]/30">
                {COMPANY_CONFIG.iso} Certified
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
                  className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-heading font-bold uppercase tracking-wide text-base px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <Link href="/get-quote">
                    Get Quote
                    <ArrowRight className="ml-2" />
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
                  className="bg-transparent hover:bg-white/10 border-2 border-white/30 text-white font-heading font-bold uppercase tracking-wide text-base px-8 py-6 h-auto transition-all"
                >
                  <Link href="/products">
                    View Products <ChevronRight className="ml-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-8 pt-8 border-t border-[#6B7280]/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded bg-[#2E86B8]/20 flex items-center justify-center border border-[#2E86B8]/40 shrink-0">
                  <Phone className="text-[#2E86B8]" size={20} />
                </div>
                <div>
                  <span className="font-body text-[#6B7280] text-xs block uppercase tracking-wide">Call us 24/7</span>
                  <a href={`tel:${COMPANY_CONFIG.phone}`} className="font-heading text-white font-bold hover:text-[#F5A02E] transition-colors">
                    {COMPANY_CONFIG.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded bg-[#2E86B8]/20 flex items-center justify-center border border-[#2E86B8]/40 shrink-0">
                  <Mail className="text-[#2E86B8]" size={20} />
                </div>
                <div>
                  <span className="font-body text-[#6B7280] text-xs block uppercase tracking-wide">Email us</span>
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="font-heading text-white font-bold hover:text-[#F5A02E] transition-colors">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5A02E] via-[#2E86B8] to-[#0B2A3C]" />
    </section>
  );
};

export default HeroSection;

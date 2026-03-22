'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Wind, ArrowRight, ShieldCheck, Zap, Award, Phone, Mail } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/config';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://suvfans.weblok.in/wp-content/uploads/2024/12/0.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/90 via-[#1A1A2E]/70 to-transparent" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Fan Element */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Wind size={500} color="white" strokeWidth={0.3} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold tracking-wider uppercase mb-6 border border-primary/30">
              {COMPANY_CONFIG.name}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              YOUR PARTNER IN <br />
              <span className="text-primary italic">AIR VENTILATION</span>
            </h1>
            <p className="text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed">
              At SUV Fans, we are committed to providing innovative, efficient, and high-quality air ventilation solutions for all your needs. Whether it's industrial, commercial, our range of products is designed to ensure optimal air circulation, improve air quality, and enhance your environment's comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg font-bold group">
                <Link href="/about">
                  ABOUT US
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 hover:bg-white/20 border-2 border-white text-white h-14 px-8 text-lg font-bold backdrop-blur-sm">
                <Link href="/products">
                  OUR PRODUCTS
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <span className="text-gray-400 text-xs block">Call us 24/7</span>
                  <a href={`tel:${COMPANY_CONFIG.phone}`} className="text-white font-semibold hover:text-primary transition-colors">
                    {COMPANY_CONFIG.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <span className="text-gray-400 text-xs block">Mail us anytime</span>
                  <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-white font-semibold hover:text-primary transition-colors">
                    {COMPANY_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award, Shield, Zap, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import { COMPANY_CONFIG } from '@/lib/config';

const WhyChooseUs = () => {
  const values = [
    {
      icon: Award,
      title: "18 Years of Expertise",
      description: "Proven track record in HVAC industry with extensive experience in ventilation solutions."
    },
    {
      icon: Shield,
      title: "High Quality Products",
      description: "ISO certified manufacturing ensuring premium quality air ventilation equipment."
    },
    {
      icon: Zap,
      title: "Comprehensive Range",
      description: "Wide variety of fans and ventilation solutions for diverse industrial needs."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://suvfans.weblok.in/wp-content/uploads/2024/12/Black-and-White-Fan-Fathers-Day-Landscape-na-Card.png" 
                  alt="Industrial Fan"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <span className="text-4xl font-bold block">{ COMPANY_CONFIG.yearsOfExperience }</span>
                  <span className="text-sm uppercase tracking-wider">Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Company</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1A1A2E] mb-6 leading-tight">
              YOUR PARTNER IN AIR VENTILATION
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              At SUV Fans, we are committed to providing innovative, efficient, and high-quality air ventilation solutions for all your needs. Whether it's industrial, commercial, our range of products is designed to ensure optimal air circulation, improve air quality, and enhance your environment's comfort.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="text-primary" size={14} />
                </div>
                <span className="text-gray-700 font-medium">18 Years of Expertise in HVAC Industry</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="text-primary" size={14} />
                </div>
                <span className="text-gray-700 font-medium">High Quality Air Ventilation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="text-primary" size={14} />
                </div>
                <span className="text-gray-700 font-medium">Pan India Supply & Installation</span>
              </div>
            </div>

            <a 
              href="/about"
              className="inline-flex items-center gap-2 bg-[#1A1A2E] text-white px-8 py-4 rounded-lg font-bold hover:bg-primary transition-all duration-300 group"
            >
              READ MORE
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

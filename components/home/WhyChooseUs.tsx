'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award, Shield, Zap, Wrench, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/config';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Durable Build",
      description: "Engineered with premium materials for long-lasting performance in harsh industrial environments."
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "IE3 premium motors and aerodynamic designs reduce energy consumption by up to 30%."
    },
    {
      icon: Wrench,
      title: "Custom Manufacturing",
      description: "Tailored solutions to meet your specific ventilation requirements and site conditions."
    },
    {
      icon: Clock,
      title: "Low Maintenance",
      description: "Robust construction means minimal downtime and reduced maintenance costs."
    }
  ];

  const stats = [
    { value: "30%", label: "Energy Savings" },
    { value: "10+", label: "Years Life" },
    { value: "500+", label: "Clients" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0B2A3C" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[#2E86B8] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Why Choose Us</span>
            
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B2A3C] mb-6 leading-tight">
              Engineered for <span className="text-[#F5A02E]">Performance</span>
            </h2>
            
            <p className="font-body text-[#6B7280] mb-8 text-lg leading-relaxed">
              At SUV Fans, we combine <strong>19+ years of manufacturing expertise</strong> with cutting-edge engineering to deliver ventilation solutions that exceed expectations.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#F4F6F8] p-4 rounded-sm border border-[#D1D5DB] hover:border-[#F5A02E] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded bg-[#0B2A3C] flex items-center justify-center shrink-0">
                      <benefit.icon className="text-[#F5A02E]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-[#0B2A3C] text-sm mb-1">{benefit.title}</h4>
                      <p className="font-body text-[#6B7280] text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature List */}
            <div className="space-y-3 mb-8">
              {[
                `${COMPANY_CONFIG.yearsOfExperience}+ Years of Expertise in HVAC Industry`,
                "ISO 9001:2015 Certified Manufacturing",
                "Pan India Supply & Installation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-[#F5A02E]/10 flex items-center justify-center shrink-0">
                    <Check className="text-[#F5A02E]" size={14} />
                  </div>
                  <span className="font-body text-[#0B2A3C] font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/about"
              className="font-heading inline-flex items-center gap-2 bg-[#0B2A3C] text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#2E86B8] transition-all duration-300 group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-sm overflow-hidden shadow-2xl border-4 border-[#D1D5DB]">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop" 
                  alt="Industrial Fan Manufacturing - SUV Fans Factory"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -left-8 bg-[#0B2A3C] text-white p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <span className="font-heading text-2xl font-bold block text-[#F5A02E]">{stat.value}</span>
                      <span className="font-body text-xs text-[#D1D5DB] uppercase tracking-wide">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-[#F5A02E] text-[#0B2A3C] p-6 shadow-xl">
              <div className="text-center">
                <span className="font-heading text-4xl font-black block">{COMPANY_CONFIG.yearsOfExperience}</span>
                <span className="font-body text-xs font-bold uppercase tracking-wider">Years of Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

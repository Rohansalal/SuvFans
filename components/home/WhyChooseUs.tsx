'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award, Shield, Zap, Wrench, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/config';
import Link from 'next/link';
import Image from 'next/image';
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
                "AMCA-compliant testing procedures",
                "Advanced aerodynamic impeller designs",
                "Pan-India installation and support"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-[#0B2A3C] font-body font-bold">
                  <div className="w-5 h-5 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-[#0B2A3C] hover:bg-[#2E86B8] text-white font-heading font-bold uppercase tracking-wide px-8 h-14">
              <Link href="/about" className="flex items-center gap-2">
                Our Engineering Journey <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>

          {/* Right - Visual Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-sm overflow-hidden border-8 border-[#F4F6F8] shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" 
                alt="Industrial Engineering Excellence"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2A3C]/40 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            {/* <div className="absolute -bottom-10 -left-10 grid grid-cols-2 gap-4">
              {stats.slice(0, 4).map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-sm shadow-xl border-b-4 border-[#F5A02E] text-center min-w-[140px]">
                  <div className="text-[#0B2A3C] font-heading font-bold text-2xl mb-1">{stat.value}</div>
                  <div className="text-[#6B7280] font-body text-xs uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

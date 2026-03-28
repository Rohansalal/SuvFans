'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Award, CheckCircle, Globe } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/config';

const clientLogos = [
  { name: "Tata Steel", src: "/clients/tata.png" },
  { name: "JSW Steel", src: "/clients/jsw.png" },
  { name: "Essar", src: "/clients/essar.png" },
  { name: "Jindal", src: "/clients/jindal.png" },
  { name: "Adani", src: "/clients/adani.png" },
  { name: "Bhilai", src: "/clients/bhilai.png" },
  { name: "SAIL", src: "/clients/sail.png" },
  { name: "Vedanta", src: "/clients/vedanta.png" },
];

const TrustSection = () => {
  const trustItems = [
    {
      icon: Building2,
      number: "500+",
      label: "Industries Served",
      description: "Factories, warehouses & commercial spaces"
    },
    {
      icon: Users,
      number: "19+",
      label: "Years Experience",
      description: "Proven engineering expertise"
    },
    {
      icon: Award,
      number: "9+",
      label: "Product Categories",
      description: "Complete ventilation solutions"
    },
    {
      icon: Globe,
      number: "Pan-India",
      label: "Service Network",
      description: "Installation & support across India"
    }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "Quality Assured Manufacturing",
    "CE Compliant Products",
    "Tested for Performance"
  ];

  return (
    <section className="bg-[#0B2A3C] py-24 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Trust Numbers - Large Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="text-center p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-[#F5A02E]/30 transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-[#F5A02E]/10 flex items-center justify-center border border-[#F5A02E]/20 group-hover:scale-110 transition-transform">
                <item.icon className="text-[#F5A02E]" size={24} />
              </div>
              <div className="font-heading text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-[#F5A02E] transition-colors">
                {item.number}
              </div>
              <div className="font-body text-[#2E86B8] font-black text-xs uppercase tracking-[0.2em] mb-3">
                {item.label}
              </div>
              <div className="font-body text-gray-500 text-sm font-medium leading-relaxed">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges - Larger */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 rounded-3xl p-10 md:p-16 border border-white/10 backdrop-blur-sm"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-black text-white mb-4 uppercase tracking-tight">
              Why Leading Industries Trust SUV Fans
            </h3>
            <p className="font-body text-gray-500 text-sm font-bold uppercase tracking-[0.15em]">
              Certified quality and proven performance for mission-critical ventilation
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#0B2A3C] p-6 rounded-xl border border-white/5 group hover:border-[#F5A02E]/30 transition-all">
                <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                  <CheckCircle size={18} strokeWidth={3} />
                </div>
                <span className="font-body text-white/80 text-xs font-black uppercase tracking-widest">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;

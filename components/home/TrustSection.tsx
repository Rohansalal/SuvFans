'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Award, Shield, CheckCircle, Globe } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/config';

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
    <section className="py-16 bg-[#0B2A3C]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Trust Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded bg-[#F5A02E]/10 flex items-center justify-center border border-[#F5A02E]/30">
                <item.icon className="text-[#F5A02E]" size={28} />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-white mb-1">
                {item.number}
              </div>
              <div className="font-body text-[#F5A02E] font-semibold text-sm uppercase tracking-wide">
                {item.label}
              </div>
              <div className="font-body text-[#6B7280] text-xs mt-1">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 rounded-sm p-6 md:p-8 border border-[#2E86B8]/30"
        >
          <div className="text-center mb-6">
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Why Leading Industries Trust SUV Fans
            </h3>
            <p className="font-body text-[#6B7280] text-sm">
              Certified quality and proven performance for mission-critical ventilation
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="text-[#F5A02E] shrink-0" size={18} />
                <span className="font-body text-[#D1D5DB] text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;

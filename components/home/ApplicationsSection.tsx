'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Factory, Building2, School, Home, Users, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

const applications = [
  {
    icon: Factory,
    title: "Industrial",
    description: "Heavy-duty ventilation for manufacturing plants, assembly lines, and high-temperature production floors. Engineered for durability and maximum air exchange in demanding environments.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    features: ["Heat & Smoke Exhaust", "Dust Collection Systems", "Process Cooling", "Corrosion Resistance"]
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Premium ventilation solutions for shopping malls, office complexes, hotels, and restaurants. Focused on customer comfort, air quality, and ultra-quiet operation.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: ["Kitchen Grease Exhaust", "Office Fresh Air Supply", "Basement Ventilation", "Energy Efficient AHUs"]
  },
  {
    icon: School,
    title: "Institutional",
    description: "Reliable airflow management for hospitals, educational institutions, and government facilities. Ensuring healthy indoor air quality (IAQ) for students, patients, and staff.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    features: ["Hospital Grade Filtration", "Silent Lab Exhaust", "Classroom Ventilation", "Clean Room Solutions"]
  },
  {
    icon: Home,
    title: "Residential",
    description: "Discreet and efficient ventilation for premium residential complexes and high-rise apartments. Designed to blend seamlessly with modern architecture while providing superior air quality.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    features: ["Toilet Exhaust Systems", "Circular Inline Fans", "Compact Cabinet Fans", "Low Power Consumption"]
  },
  {
    icon: Users,
    title: "For OEM Customers",
    description: "Custom-designed fan components and sub-assemblies for original equipment manufacturers. We provide precision-engineered impellers, motors, and housings tailored to your specifications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    features: ["Custom Fan Wheels", "Precision Balancing", "Special Grade Coatings", "Volume Manufacturing"]
  }
];

const ApplicationsSection = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[#2E86B8] font-black uppercase tracking-[0.25em] text-xs mb-4 block">
              Market Applications
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-[#0B2A3C] mb-6 uppercase tracking-tight">
              Where Our <span className="text-[#F5A02E]">Solutions Excel</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F5A02E] mx-auto mb-8"></div>
            <p className="font-body text-gray-500 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
              Proven ventilation excellence across diverse sectors. From heavy manufacturing to residential complexes, we deliver optimized airflow for every environment.
            </p>
          </motion.div>
        </div>

        {/* Applications Grid - Professional List/Card Hybrid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {applications.map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:border-[#2E86B8]/30 transition-all duration-500 ${idx === 4 ? 'lg:col-span-2' : ''}`}
            >
              <div className={`flex flex-col ${idx === 4 ? 'lg:flex-row' : 'md:flex-row'}`}>
                {/* Image Area */}
                <div className={`relative h-64 ${idx === 4 ? 'lg:w-1/2 lg:h-auto' : 'md:w-2/5 md:h-auto'} overflow-hidden`}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"
                    style={{ backgroundImage: `url(${app.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A3C]/90 via-[#0B2A3C]/40 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-8 left-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#F5A02E] flex items-center justify-center shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform">
                      <app.icon className="text-[#0B2A3C]" size={32} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className={`p-8 md:p-10 flex flex-col justify-center ${idx === 4 ? 'lg:w-1/2' : 'md:w-3/5'}`}>
                  <h3 className="font-heading text-2xl md:text-3xl font-black text-[#0B2A3C] mb-4 group-hover:text-[#F5A02E] transition-colors uppercase tracking-tight">
                    {app.title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm md:text-base mb-6 leading-relaxed font-medium">
                    {app.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {app.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-[#F5A02E] shrink-0" strokeWidth={3} />
                        <span className="font-body text-[10px] md:text-xs font-black uppercase tracking-tight text-[#0B2A3C]/70">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-2 font-heading text-xs font-black text-[#2E86B8] hover:text-[#F5A02E] uppercase tracking-[0.2em] transition-all group/link"
                    >
                      Engineering Consultation
                      <ArrowRight className="group-hover/link:translate-x-2 transition-transform" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;

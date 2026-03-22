'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Settings, 
  Truck, 
  Wrench, 
  CheckCircle2, 
  Search, 
  Layout, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SolutionsPage = () => {
  const processes = [
    { icon: Search, title: "Requirement Analysis", desc: "Understanding specific project needs and performance goals." },
    { icon: Layout, title: "Design Engineering", desc: "Developing optimized layouts and equipment selections." },
    { icon: Truck, title: "Supply", desc: "Manufacturing and sourcing high-quality HVAC components." },
    { icon: Wrench, title: "Installation", desc: "Expert on-site installation by our technical teams." },
    { icon: Zap, title: "Commissioning", desc: "Performance testing and system balancing for peak efficiency." },
    { icon: CheckCircle2, title: "Handover", desc: "Final validation and client training for operations." }
  ];

  const products = [
    "Air Handling Units (AHU)",
    "Air Washer Systems",
    "Fan Coil Units (FCU)",
    "Fan Filter Units (FFU)",
    "Air Curtains",
    "Air Distribution Terminals"
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header */}
      <section className="bg-[#0A2E5C] pt-20 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Turnkey HVAC <br /><span className="text-accent italic">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Complete end-to-end HVAC project delivery for industrial, commercial, and healthcare environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section A: Turnkey Solution */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Settings size={24} />
              </div>
              <h2 className="text-3xl font-heading font-bold text-[#0A2E5C]">Complete Project Delivery</h2>
            </div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              SUV FANS LLP specializes in delivering comprehensive HVAC systems that ensure optimal air quality, temperature control, and energy efficiency. Our integrated approach minimizes coordination gaps and guarantees system performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {products.map((p) => (
                <div key={p} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm group hover:border-accent transition-all">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span className="text-sm font-bold text-[#0A2E5C]">{p}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-[#F97316] hover:bg-[#EA580C] text-white h-14 px-8 text-lg font-bold">
              <Link href="/get-quote">Discuss Your Project</Link>
            </Button>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl relative">
             <h3 className="text-2xl font-heading font-bold text-[#0A2E5C] mb-8">Our Process</h3>
             <div className="space-y-8">
               {processes.map((step, idx) => (
                 <div key={step.title} className="flex gap-6 relative group">
                    {idx !== processes.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-[-20px] w-0.5 bg-gray-100 group-hover:bg-accent/30 transition-colors"></div>
                    )}
                    <div className="w-12 h-12 rounded-full bg-[#0A2E5C] text-white flex items-center justify-center shrink-0 shadow-lg relative z-10 group-hover:bg-accent transition-colors">
                      <step.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0A2E5C] mb-1">{step.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section B: Clean Room */}
      <section className="py-24 bg-[#0A2E5C] text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Integrated Clean Room Systems</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We provide specialized complete system delivery for clean room environments, integrating structural elements with high-precision HVAC systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Panels & Structure", desc: "Insulated sandwich panels with flush finishes for sterile environments." },
              { title: "HVAC Integration", desc: "Precise pressure and temperature control with HEPA filtration." },
              { title: "Specialized Ducting", desc: "High-grade stainless steel and galvanized ductwork for air purity." },
              { title: "Electrical Systems", desc: "Integrated power and control systems for clean room operations." }
            ].map((feature) => (
              <div key={feature.title} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-6">
                  <Shield size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg font-bold group">
               <Link href="/contact">
                  Discuss Your Clean Room Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
               </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;

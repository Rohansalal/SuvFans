'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle2, ArrowRight, Wrench, Users } from 'lucide-react';

const SolutionsBanner = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <span className="font-body text-[#2E86B8] font-black tracking-[0.25em] uppercase text-xs mb-4 block">Premium Services</span>
            
            {/* H2: Montserrat */}
            <h2 className="font-heading text-4xl md:text-6xl font-black text-[#0B2A3C] mb-8 leading-tight uppercase tracking-tight">
              Turnkey HVAC <span className="text-[#F5A02E]">Solutions</span>
            </h2>
            
            {/* Body: Inter - Broken into readable blocks */}
            <p className="font-body text-gray-500 mb-10 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
              At SUV Fans, customer satisfaction is our top priority. We deliver solutions that exceed expectations from selection to after-sales support.
            </p>
            
            {/* Feature List - Larger */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "Unmatched Expertise",
                "Comprehensive Range",
                "Quality Assured",
                "Pan India Network"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-[#0B2A3C] font-black uppercase tracking-tight text-xs">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="font-heading bg-[#0B2A3C] hover:bg-[#2E86B8] text-white h-14 px-10 text-xs font-black uppercase tracking-[0.2em] group rounded-xl transition-all shadow-lg hover:shadow-[#2E86B8]/20">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Engineering
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#0B2A3C] to-[#1a3a52] rounded-[2.5rem] p-12 relative overflow-hidden group shadow-2xl border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <Shield size={300} className="text-white" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
                <div className="w-28 h-28 rounded-2xl bg-[#F5A02E] flex items-center justify-center text-[#0B2A3C] mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Wrench size={40} />
                </div>
                {/* H3: Montserrat */}
                <h3 className="font-heading text-3xl font-black text-white mb-4 uppercase tracking-tight">Professional Service</h3>
                {/* Body: Inter */}
                <p className="font-body text-gray-400 max-w-xs leading-relaxed text-sm font-medium uppercase tracking-widest">
                  Expert installation and after-sales support across India.
                </p>
              </div>
            </div>
            
            {/* Floating card - Larger */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 min-w-[200px]">
              <div className="flex items-center gap-4 mb-2">
                <Users size={28} className="text-[#F5A02E]" />
                <span className="font-heading text-4xl font-black text-[#0B2A3C] tracking-tighter">500+</span>
              </div>
              <div className="font-body text-xs font-black uppercase tracking-[0.2em] text-gray-400">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsBanner;

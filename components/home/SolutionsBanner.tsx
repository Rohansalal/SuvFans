'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle2, ArrowRight, Wrench, Users } from 'lucide-react';

const SolutionsBanner = () => {
  return (
    <section className="py-24 bg-[#F4F6F8] overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <span className="font-body text-[#2E86B8] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Premium Services</span>
            
            {/* H2: Montserrat */}
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B2A3C] mb-6 leading-tight">
              Turnkey HVAC <span className="text-[#F5A02E]">Solutions</span>
            </h2>
            
            {/* Body: Inter - Broken into readable blocks */}
            <p className="font-body text-[#6B7280] mb-6 text-lg leading-relaxed">
              At SUV Fans, customer satisfaction is our top priority. We aim to deliver products that not only meet but exceed your expectations.
            </p>
            <p className="font-body text-[#6B7280] mb-8 text-lg leading-relaxed">
              From product selection to after-sales service, we are here to support you every step of the way.
            </p>
            
            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              {[
                "Unmatched Expertise",
                "Comprehensive Product Range",
                "Quality Assured Products",
                "Pan India Service Network"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-[#0B2A3C] font-medium">
                  <CheckCircle2 className="text-[#F5A02E] shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="font-heading bg-[#0B2A3C] hover:bg-[#2E86B8] text-white h-14 px-8 text-lg font-bold uppercase tracking-wide group">
              <Link href="/contact">
                Contact Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#0B2A3C] to-[#2E86B8] rounded-sm p-8 relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Shield size={300} className="text-white" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
                <div className="w-24 h-24 rounded bg-[#F5A02E] flex items-center justify-center text-[#0B2A3C] mb-8 shadow-xl">
                  <Wrench size={48} />
                </div>
                {/* H3: Montserrat */}
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Professional Service</h3>
                {/* Body: Inter */}
                <p className="font-body text-[#D1D5DB] max-w-xs leading-relaxed">
                  Expert installation and after-sales support for all our products across India.
                </p>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-[#0B2A3C] text-white p-6 shadow-2xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <Users size={24} className="text-[#F5A02E]" />
                <span className="font-heading text-3xl font-bold">500+</span>
              </div>
              <div className="font-body text-sm font-medium uppercase tracking-wider text-[#D1D5DB]">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsBanner;

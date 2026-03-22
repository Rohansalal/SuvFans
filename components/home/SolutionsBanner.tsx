'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle2, ArrowRight, Wrench, Users } from 'lucide-react';

const SolutionsBanner = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Premium Services</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1A1A2E] mb-6 leading-tight">
              Enhance Your Environment's <span className="text-primary">Comfort</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              At SUV Fans, customer satisfaction is our top priority. We aim to deliver products that not only meet but exceed your expectations. From product selection to after-sales service, we are here to support you every step of the way.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Unmatched Expertise",
                "Comprehensive Product Range",
                "Quality Assured Products",
                "Pan India Service Network"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#1A1A2E]">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="bg-[#1A1A2E] hover:bg-[#1A1A2E]/90 text-white h-14 px-8 text-lg font-bold group">
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
            <div className="aspect-square bg-gradient-to-br from-[#1A1A2E] to-[#0A2E5C] rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Shield size={300} className="text-white" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center text-white mb-8 shadow-xl shadow-primary/20">
                  <Wrench size={48} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Professional Service</h3>
                <p className="text-gray-300 max-w-xs">
                  Expert installation and after-sales support for all our products across India.
                </p>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-2xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <Users size={24} />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <div className="text-sm font-medium uppercase tracking-wider">Happy Clients</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsBanner;

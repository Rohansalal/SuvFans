'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Wind, Users, Target, History } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/config';

const AboutPage = () => {
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
              About <span className="text-accent italic">SUV FANS</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trusted partner in high-performance air movement and industrial ventilation since 2007.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <History size={24} />
              </div>
              <h2 className="text-3xl font-heading font-bold text-[#0A2E5C]">Our Legacy</h2>
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded in 2007, SUV FANS LLP has grown from a specialized fan manufacturer to a complete HVAC solutions provider. Based in the industrial hub of Bhiwadi, Rajasthan, we serve clients across India with engineering excellence and uncompromised quality.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With over 19 years of collective experience, our team of engineers and technicians work tirelessly to design products that meet the rigorous demands of industrial and commercial environments.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl font-black text-accent mb-1">19+</div>
                  <div className="text-xs font-bold text-[#0A2E5C] uppercase tracking-widest">Years Experience</div>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-3xl font-black text-accent mb-1">100+</div>
                  <div className="text-xs font-bold text-[#0A2E5C] uppercase tracking-widest">Major Projects</div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-[#0A2E5C] rounded-[40px] flex items-center justify-center text-white/5 overflow-hidden">
               <Wind size={400} />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                  <Award size={80} className="text-accent mb-8" />
                  <h3 className="text-3xl font-heading font-bold text-white mb-4">ISO Certified Quality</h3>
                  <p className="text-gray-400">Our manufacturing processes adhere to international standards for safety and performance.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-[#0A2E5C] text-white overflow-hidden relative">
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[40px] border border-white/10">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white mb-8">
                     <Target size={32} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-6">Our Mission</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                     To deliver application-driven air movement solutions that enhance industrial productivity while ensuring the highest standards of safety and environmental responsibility.
                  </p>
               </div>
               
               <div className="bg-white/5 backdrop-blur-sm p-12 rounded-[40px] border border-white/10">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white mb-8">
                     <Users size={32} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold mb-6">Our Vision</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                     To be India's most dependable partner in air movement, recognized for engineering innovation, customer-centric responsiveness, and ease of doing business.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Why Choose Us Redux */}
      <section className="py-24 container mx-auto px-4 md:px-6">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0A2E5C] mb-4">Core Values</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
               { icon: ShieldCheck, title: "Engineering Excellence", desc: "Every fan we manufacture undergoes rigorous static and dynamic balancing." },
               { icon: Zap, title: "Rapid Response", desc: "We pride ourselves on having the fastest turnaround times in the industry." },
               { icon: Award, title: "Uncompromising Integrity", desc: "Transparent processes and honest communication form the bedrock of our business." }
            ].map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center hover:shadow-xl transition-all group">
                 <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    <v.icon size={32} />
                 </div>
                 <h4 className="text-xl font-bold text-[#0A2E5C] mb-4">{v.title}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default AboutPage;

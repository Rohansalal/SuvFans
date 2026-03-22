'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Airplay, Check, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const PureAirSpotlight = () => {
  const specs = [
    "2,000 m³/h Airflow",
    "80W Power",
    ">95% PM10 Efficiency",
    "6-Month Filter Life"
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl border border-gray-100 p-8 md:p-16 relative overflow-hidden shadow-xl"
        >
          {/* Background Highlight */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="border-primary text-primary font-bold uppercase tracking-widest px-3 py-1 bg-primary/5">
                  German Technology
                </Badge>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1A1A2E] mb-6 leading-tight">
                PURE AIR <br />
                <span className="text-primary italic">Commercial Air Purifier</span>
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-lg">
                Premium air purifier featuring German filtration technology by Mann+Hummel, made in India for industrial and commercial use. Removes PM0.1, PM1.0, PM2.5, PM10 with Nano Fiber-Enhanced Filter Design.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-2 rounded-xl border border-gray-100 shadow-sm text-sm font-bold text-[#1A1A2E]">
                    <Check className="text-primary" size={16} />
                    {spec}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg font-bold">
                  <Link href="/air-purifiers">Explore PURE AIR</Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-[#1A1A2E] text-[#1A1A2E] hover:bg-[#1A1A2E] hover:text-white h-14 px-8 text-lg font-bold group">
                  <Link href="/get-quote">
                    Get Quote
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-br from-[#1A1A2E] to-[#0A2E5C] rounded-2xl shadow-2xl p-4 relative overflow-hidden group">
                {/* Product Visualization */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full bg-white/10 rounded-xl flex items-center justify-center relative backdrop-blur-sm"
                   >
                     <Airplay size={140} className="text-white/30" />
                     <div className="absolute top-8 right-8 w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
                   </motion.div>
                </div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 right-6 text-right">
                   <div className="text-4xl font-heading font-black text-white/10 select-none">PURE AIR</div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center hidden md:flex"
              >
                 <span className="text-2xl font-black">German</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Filtration</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PureAirSpotlight;

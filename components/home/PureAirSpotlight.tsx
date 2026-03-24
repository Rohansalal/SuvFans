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
    <section className="py-24 bg-[#F4F6F8]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-16 relative overflow-hidden shadow-2xl border-2 border-[#D1D5DB]"
        >
          {/* Background Highlight */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#2E86B8]/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="font-body border-[#2E86B8] text-[#2E86B8] font-bold uppercase tracking-widest px-3 py-1 bg-[#2E86B8]/5">
                  German Technology
                </Badge>
              </div>
              
              {/* H2: Montserrat */}
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B2A3C] mb-6 leading-tight">
                PURE AIR <br />
                <span className="text-[#F5A02E]">Commercial Air Purifier</span>
              </h2>
              
              {/* Body: Inter */}
              <p className="font-body text-[#6B7280] mb-8 text-lg leading-relaxed max-w-lg">
                Premium air purifier featuring German filtration technology by Mann+Hummel, made in India for industrial and commercial use. Removes PM0.1, PM1.0, PM2.5, PM10 with Nano Fiber-Enhanced Filter Design.
              </p>
              
              {/* Specs - Bold key values */}
              <div className="flex flex-wrap gap-3 mb-10">
                {specs.map((spec) => (
                  <div key={spec} className="font-body flex items-center gap-2 bg-[#F4F6F8] px-4 py-2 rounded-sm border border-[#D1D5DB] shadow-sm text-sm font-semibold text-[#0B2A3C]">
                    <Check className="text-[#F5A02E]" size={16} />
                    {spec}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="font-heading bg-[#0B2A3C] hover:bg-[#2E86B8] text-white h-14 px-8 text-lg font-bold uppercase tracking-wide">
                  <Link href="/air-purifiers">Explore PURE AIR</Link>
                </Button>
                <Button asChild variant="outline" className="font-heading border-2 border-[#0B2A3C] text-[#0B2A3C] hover:bg-[#0B2A3C] hover:text-white h-14 px-8 text-lg font-bold group">
                  <Link href="/get-quote">
                    Get Quote
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-br from-[#0B2A3C] to-[#2E86B8] rounded-sm shadow-2xl p-4 relative overflow-hidden group">
                {/* Product Visualization */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full bg-white/10 rounded flex items-center justify-center relative backdrop-blur-sm"
                   >
                     <Airplay size={140} className="text-white/30" />
                     <div className="absolute top-8 right-8 w-12 h-12 rounded-full border-4 border-[#F5A02E]/30 border-t-[#F5A02E] animate-spin"></div>
                   </motion.div>
                </div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 right-6 text-right">
                   <div className="font-heading text-4xl font-bold text-white/10 select-none">PURE AIR</div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-[#F5A02E] text-[#0B2A3C] p-6 shadow-xl flex flex-col items-center justify-center hidden md:flex"
              >
                 <span className="font-heading text-2xl font-black">German</span>
                 <span className="font-body text-[10px] font-bold uppercase tracking-widest text-[#0B2A3C]/70">Filtration</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PureAirSpotlight;

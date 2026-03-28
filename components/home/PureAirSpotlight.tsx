'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 md:p-20 relative overflow-hidden shadow-xl border border-gray-100 rounded-[2.5rem]"
        >
          {/* Background Highlight */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#2E86B8]/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="font-body border-[#2E86B8]/20 text-[#2E86B8] font-black uppercase tracking-widest text-[11px] px-4 py-1.5 bg-[#2E86B8]/5 rounded-lg">
                  German Technology
                </Badge>
              </div>
              
              {/* H2: Montserrat */}
              <h2 className="font-heading text-4xl md:text-6xl font-black text-[#0B2A3C] mb-8 leading-tight uppercase tracking-tight">
                PURE AIR <br />
                <span className="text-[#F5A02E]">Commercial Air Purifier</span>
              </h2>
              
              {/* Body: Inter */}
              <p className="font-body text-gray-500 mb-10 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
                Premium air purifier featuring German filtration technology by Mann+Hummel. Removes PM0.1 to PM10 with Nano Fiber-Enhanced Filter Design.
              </p>
              
              {/* Specs - Bold key values */}
              <div className="flex flex-wrap gap-3 mb-12">
                {specs.map((spec) => (
                  <div key={spec} className="font-body flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 shadow-sm text-xs font-black uppercase tracking-tight text-[#0B2A3C]/70">
                    <Check className="text-[#F5A02E]" size={14} strokeWidth={3} />
                    {spec}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="font-heading bg-[#0B2A3C] hover:bg-[#2E86B8] text-white h-12 px-8 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg hover:shadow-[#2E86B8]/20">
                  <Link href="/air-purifiers">Explore Product</Link>
                </Button>
                <Button asChild variant="outline" className="font-heading border border-gray-200 text-[#0B2A3C] hover:bg-gray-50 h-12 px-8 text-[10px] font-black uppercase tracking-[0.2em] group rounded-xl transition-all">
                  <Link href="/get-quote" className="flex items-center gap-2">
                    Get Quote
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-[500px] aspect-square bg-white rounded-3xl shadow-2xl relative overflow-hidden group border-4 border-gray-50">
                {/* Product Visualization with the new Image */}
                <Image
                  src="/pureair.webp"
                  alt="PURE AIR Commercial Air Purifier"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 right-6 text-right">
                   <div className="font-heading text-4xl font-black text-white/20 select-none uppercase tracking-tighter">PURE AIR</div>
                </div>
              </div>
              
              {/* Floating Badge - Larger */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-6 -right-6 bg-[#F5A02E] text-[#0B2A3C] w-32 h-32 rounded-2xl shadow-xl flex flex-col items-center justify-center hidden md:flex z-20 border-4 border-white"
              >
                <span className="font-heading text-4xl font-black leading-none">99%</span>
                <span className="font-body text-xs font-black uppercase tracking-tighter text-center leading-tight">PM0.1<br/>Removal</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PureAirSpotlight;

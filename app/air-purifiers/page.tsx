'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Download, ShieldCheck, Zap, Wind, Award, ArrowRight } from 'lucide-react';
import CoverageCalculator from '@/components/common/CoverageCalculator';
import { PRODUCTS } from '@/lib/products';
import Link from 'next/link';

const PureAirPage = () => {
  const pureAir = PRODUCTS.find(p => p.slug === 'pure-air-commercial-industrial');

  const technicalSpecs = [
    { label: "Filtration Efficiency", value: ">95% for PM10, >80% for PM2.5" },
    { label: "Airflow Capacity", value: "2,000 m³/h" },
    { label: "Power Consumption", value: "80W" },
    { label: "Noise Level", value: "<55 dB" },
    { label: "Filter Life", value: "Up to 6 Months" },
    { label: "Warranty", value: "3 Years (excluding electronics)" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0A2E5C] skew-x-12 translate-x-1/4 hidden lg:block"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-accent text-white mb-6 uppercase tracking-widest px-4 py-1 font-bold">German Engineering</Badge>
              <h1 className="text-4xl md:text-7xl font-heading font-black text-[#0A2E5C] mb-6 leading-tight">
                PURE AIR <br />
                <span className="text-accent italic">Excellence.</span>
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                The PURE AIR purifier brings Mann+Hummel nano-fiber technology to commercial and industrial spaces across India.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  "ISO 16890 Certified",
                  ">95% PM10 Efficiency",
                  "Made in India",
                  "3-Year Warranty"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[#0A2E5C] font-bold text-sm">
                    <CheckCircle2 size={18} className="text-accent" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-lg font-bold">
                  <Link href="/get-quote">Request a Quote</Link>
                </Button>
                <Button variant="outline" className="border-[#0A2E5C] text-[#0A2E5C] hover:bg-[#0A2E5C] hover:text-white h-14 px-8 text-lg font-bold">
                  <Download className="mr-2" size={20} />
                  Product Brochure
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="w-full max-w-md aspect-square bg-white rounded-[40px] shadow-2xl overflow-hidden relative group">
                <Image
                  src="/products/air-purifiers/air-purifier-3.jpg"
                  alt="PURE AIR Commercial Air Purifier"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-[#0A2E5C]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              {/* Thumbnail strip */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {[
                  '/products/air-purifiers/air-purifier-1.jpg',
                  '/products/air-purifiers/air-purifier-2.jpg',
                  '/products/air-purifiers/air-purifier-4.jpg',
                ].map((src, i) => (
                  <div key={i} className="relative w-14 h-14 rounded-lg border-2 border-white shadow-md overflow-hidden">
                    <Image src={src} alt={`Air purifier view ${i + 2}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <CoverageCalculator />
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#0A2E5C] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Precision Performance</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {technicalSpecs.map((spec) => (
                  <div key={spec.label} className="border-l-4 border-accent pl-6 py-2">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{spec.label}</div>
                    <div className="text-lg font-bold text-white">{spec.value}</div>
                  </div>
                ))}
             </div>
             
             <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                  <Award size={32} className="text-accent" />
                  Filter Performance
                </h3>
                <div className="space-y-8">
                   {[
                     { label: "PM 0.1 - 1.0 (Bacteria & Virus)", val: "80%", color: "bg-accent" },
                     { label: "PM 2.5 (Smoke & Fog)", val: "85%", color: "bg-accent" },
                     { label: "PM 10 (Dust & Pollen)", val: "95%", color: "bg-accent" }
                   ].map((item) => (
                     <div key={item.label}>
                       <div className="flex justify-between text-sm font-bold mb-3">
                         <span className="text-gray-300">{item.label}</span>
                         <span>{item.val} Capture Rate</span>
                       </div>
                       <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                         <motion.div
                           initial={{ width: 0 }}
                           whileInView={{ width: item.val }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className={`h-full ${item.color}`}
                         ></motion.div>
                       </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Application Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0A2E5C] mb-6">Designed for Excellence</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From healthcare facilities to high-traffic commercial offices, PURE AIR provides reliable filtration for any environment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             {["Offices", "Hospitals", "Hotels", "Cafeterias", "Factories", "Laboratories"].map((app) => (
               <div key={app} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-xl hover:border-accent transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#0A2E5C]/5 flex items-center justify-center text-[#0A2E5C] mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-bold text-[#0A2E5C]">{app}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#0A2E5C] rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
             
             <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Experience PURE AIR?</h2>
                <p className="text-gray-400 mb-10 text-lg">
                  Custom branding and bulk order configurations available. Request your personalized quote today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg" className="bg-[#F97316] hover:bg-[#EA580C] h-14 px-10 text-lg font-bold">
                    <Link href="/get-quote">Get Bulk Pricing</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg font-bold group">
                    <Link href="/contact">
                      Contact Sales
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PureAirPage;

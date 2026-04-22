'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const clientLogos = [
  { name: "Tata Steel", src: "/clients/tata.png" },
  { name: "JSW Steel", src: "/clients/jsw.png" },
  { name: "Essar", src: "/clients/essar.png" },
  { name: "Jindal", src: "/clients/jindal.png" },
  { name: "Adani", src: "/clients/adani.png" },
  { name: "Bhilai", src: "/clients/bhilai.png" },
  { name: "SAIL", src: "/clients/sail.png" },
  { name: "Vedanta", src: "/clients/vedanta.png" },
];

const TrustSection = () => {
  const certifications = [
    "ISO 9001:2015 Certified",
    "Quality Assured Manufacturing",
    "CE Compliant Products",
    "Tested for Performance"
  ];

  return (
    <section className="bg-[#0B2A3C] py-24 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 rounded-3xl p-10 md:p-16 border border-white/10 backdrop-blur-sm"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-black text-white mb-4 uppercase tracking-tight">
              Why Leading Industries Trust SUV Fans
            </h3>
            <p className="font-body text-gray-500 text-sm font-bold uppercase tracking-[0.15em]">
              Certified quality and proven performance for mission-critical ventilation
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#0B2A3C] p-6 rounded-xl border border-white/5 group hover:border-[#F5A02E]/30 transition-all">
                <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                  <CheckCircle size={18} strokeWidth={3} />
                </div>
                <span className="font-body text-white/80 text-xs font-black uppercase tracking-widest">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;

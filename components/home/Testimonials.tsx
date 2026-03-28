'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Plant Manager",
    company: "Industrial Dynamics Ltd.",
    text: "SUV FANS provided us with a complete ventilation solution for our new facility. The axial fans are remarkably efficient and the installation was handled with extreme professionalism.",
    rating: 5
  },
  {
    name: "Sanjay Mehta",
    role: "Operations Director",
    company: "Global Logistics Park",
    text: "The HVLS fans from SUV FANS have significantly improved the air quality and temperature in our warehouse. Their engineering team really knows their stuff.",
    rating: 5
  },
  {
    name: "Amit Sharma",
    role: "Chief Engineer",
    company: "Apex Manufacturing",
    text: "We've been using their centrifugal fans for over 3 years now. The build quality is top-notch and we haven't faced any downtime. Highly recommended for industrial use.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#2E86B8]/5 rounded-full blur-3xl -z-10 -mr-24 -mt-24" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F5A02E]/5 rounded-full blur-3xl -z-10 -ml-24 -mb-24" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[#2E86B8] font-black uppercase tracking-[0.25em] text-xs mb-4 block">
              Client Trust
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-black text-[#0B2A3C] mb-6 uppercase tracking-tight">
              What Our <span className="text-[#F5A02E]">Clients Say</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F5A02E] mx-auto mb-8" />
            <p className="font-body text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Trusted by leading industries across India for ventilation excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-[#F8FAFC] p-10 md:p-12 rounded-2xl border border-gray-100 shadow-sm relative group hover:border-[#2E86B8]/20 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-[#0B2A3C]/5 group-hover:text-[#F5A02E]/10 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>
              
              {/* Star Rating - Larger */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#F5A02E] fill-[#F5A02E]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-body text-gray-500 text-sm md:text-base italic mb-8 leading-relaxed relative z-10 font-medium">
                "{t.text}"
              </p>

              {/* Client Info - Larger */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200/60">
                <div className="w-12 h-12 rounded-xl bg-[#0B2A3C] flex items-center justify-center text-white font-heading font-black text-lg shrink-0 shadow-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-black text-[#0B2A3C] text-sm leading-tight mb-1 uppercase tracking-tight">{t.name}</h4>
                  <p className="font-body text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

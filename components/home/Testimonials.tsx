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
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2E86B8]/5 rounded-full blur-3xl -z-10 -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5A02E]/5 rounded-full blur-3xl -z-10 -ml-32 -mb-32" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* H2: Montserrat */}
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B2A3C] mb-4 uppercase">
              What Our <span className="text-[#F5A02E]">Clients Say</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#F5A02E] mx-auto mb-6" />
            {/* Body: Inter */}
            <p className="font-body text-[#6B7280] max-w-2xl mx-auto text-lg leading-relaxed">
              Trusted by leading industries across India for superior air movement and ventilation excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#F4F6F8] p-8 rounded-sm border-2 border-[#D1D5DB] shadow-lg relative group hover:border-[#F5A02E] hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-8 text-[#0B2A3C]/10 group-hover:text-[#F5A02E]/20 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#F5A02E] fill-[#F5A02E]" />
                ))}
              </div>

              {/* Testimonial Text - Body: Inter */}
              <p className="font-body text-[#6B7280] italic mb-6 leading-relaxed relative z-10">
                "{t.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#D1D5DB]">
                <div className="w-12 h-12 rounded bg-[#0B2A3C] flex items-center justify-center text-white font-heading font-bold text-lg shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  {/* Name - Montserrat */}
                  <h4 className="font-heading font-bold text-[#0B2A3C] leading-none mb-1">{t.name}</h4>
                  {/* Role & Company - Inter */}
                  <p className="font-body text-xs font-semibold text-[#6B7280] uppercase tracking-wide leading-none">
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

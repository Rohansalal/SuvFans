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
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 -ml-32 -mb-32" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0A2E5C] mb-4 uppercase">
              What Our <span className="text-primary italic">Clients Say</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
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
              className="bg-[#F8FAFC] p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative group hover:bg-white hover:border-primary/20 transition-all duration-500"
            >
              <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={60} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-orange-400 fill-orange-400" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 leading-relaxed relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl border border-primary/20">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2E5C] leading-none mb-1">{t.name}</h4>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
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

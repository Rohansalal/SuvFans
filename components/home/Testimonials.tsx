'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Plant Manager",
    company: "Industrial Dynamics Ltd.",
    industry: "Manufacturing",
    text: "SUV FANS provided us with a complete ventilation solution for our new facility. The axial fans are remarkably efficient and the installation was handled with extreme professionalism.",
    rating: 5
  },
  {
    name: "Sanjay Mehta",
    role: "Operations Director",
    company: "Global Logistics Park",
    industry: "Warehousing",
    text: "The HVLS fans from SUV FANS have significantly improved air quality and temperature in our 80,000 sq ft warehouse. Energy savings of 35% within the first quarter.",
    rating: 5
  },
  {
    name: "Amit Sharma",
    role: "Chief Engineer",
    company: "Apex Auto Components",
    industry: "Automotive",
    text: "We've been using their centrifugal fans for over 3 years now. The build quality is top-notch and we haven't faced any downtime. Highly recommended for industrial use.",
    rating: 5
  },
  {
    name: "Dr. Priya Nair",
    role: "Facility Head",
    company: "Fortis Healthcare Jaipur",
    industry: "Healthcare",
    text: "SUV FANS engineered a hospital-grade HVAC solution meeting NABH standards. The air purification system has been critical for our ICU and operation theatre environments.",
    rating: 5
  },
  {
    name: "Vinod Agarwal",
    role: "GM – Projects",
    company: "Reliance Food Processing",
    industry: "Food & Beverage",
    text: "Their industrial exhaust fans meet food-grade compliance requirements. The custom SS impeller fans for our cold chain facilities have worked flawlessly across 2 years.",
    rating: 5
  },
  {
    name: "Suresh Patel",
    role: "Technical Director",
    company: "Gujarat Textiles Ltd.",
    industry: "Textiles",
    text: "Fan sizing was perfectly matched to our spinning floor. The low-noise axial fans reduced workplace sound levels by 12 dB and improved productivity across all shifts.",
    rating: 5
  }
];

const industryColor: Record<string, string> = {
  Manufacturing: 'bg-blue-100 text-blue-700',
  Warehousing: 'bg-purple-100 text-purple-700',
  Automotive: 'bg-orange-100 text-orange-700',
  Healthcare: 'bg-green-100 text-green-700',
  'Food & Beverage': 'bg-yellow-100 text-yellow-700',
  Textiles: 'bg-pink-100 text-pink-700',
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#2E86B8]/5 rounded-full blur-3xl -z-10 -mr-24 -mt-24" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F5A02E]/5 rounded-full blur-3xl -z-10 -ml-24 -mb-24" />

      <div className="container mx-auto px-4 md:px-6">
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
              Trusted by 500+ leading industries across India for ventilation excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#F8FAFC] p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm relative group hover:border-[#2E86B8]/20 hover:shadow-md transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-[#0B2A3C]/5 group-hover:text-[#F5A02E]/10 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#F5A02E] fill-[#F5A02E]" />
                  ))}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${industryColor[t.industry]}`}>
                  {t.industry}
                </span>
              </div>

              <p className="font-body text-gray-500 text-sm italic mb-8 leading-relaxed relative z-10 font-medium">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-gray-200/60">
                <div className="w-10 h-10 rounded-xl bg-[#0B2A3C] flex items-center justify-center text-white font-heading font-black text-base shrink-0 shadow-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-black text-[#0B2A3C] text-sm leading-tight mb-0.5 uppercase tracking-tight">{t.name}</h4>
                  <p className="font-body text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '500+', label: 'Industries Served' },
            { value: '19+', label: 'Years of Trust' },
            { value: '98%', label: 'Client Retention' },
            { value: '4.9★', label: 'Average Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-[#0B2A3C] font-heading">{stat.value}</div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

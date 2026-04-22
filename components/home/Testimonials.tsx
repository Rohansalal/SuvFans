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
    rating: 5,
  },
  {
    name: "Sanjay Mehta",
    role: "Operations Director",
    company: "Global Logistics Park",
    industry: "Warehousing",
    text: "The HVLS fans from SUV FANS have significantly improved air quality and temperature in our 80,000 sq ft warehouse. Energy savings of 35% within the first quarter.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    role: "Chief Engineer",
    company: "Apex Auto Components",
    industry: "Automotive",
    text: "We've been using their centrifugal fans for over 3 years now. The build quality is top-notch and we haven't faced any downtime. Highly recommended for industrial use.",
    rating: 5,
  },
  {
    name: "Dr. Priya Nair",
    role: "Facility Head",
    company: "Fortis Healthcare Jaipur",
    industry: "Healthcare",
    text: "SUV FANS engineered a hospital-grade HVAC solution meeting NABH standards. The air purification system has been critical for our ICU and operation theatre environments.",
    rating: 5,
  },
  {
    name: "Vinod Agarwal",
    role: "GM – Projects",
    company: "Reliance Food Processing",
    industry: "Food & Beverage",
    text: "Their industrial exhaust fans meet food-grade compliance requirements. The custom SS impeller fans for our cold chain facilities have worked flawlessly across 2 years.",
    rating: 5,
  },
  {
    name: "Suresh Patel",
    role: "Technical Director",
    company: "Gujarat Textiles Ltd.",
    industry: "Textiles",
    text: "Fan sizing was perfectly matched to our spinning floor. The low-noise axial fans reduced workplace sound levels by 12 dB and improved productivity across all shifts.",
    rating: 5,
  },
];

const industryColor: Record<string, string> = {
  Manufacturing:    'bg-blue-50 text-blue-700 border border-blue-100',
  Warehousing:      'bg-purple-50 text-purple-700 border border-purple-100',
  Automotive:       'bg-orange-50 text-orange-700 border border-orange-100',
  Healthcare:       'bg-green-50 text-green-700 border border-green-100',
  'Food & Beverage':'bg-yellow-50 text-yellow-700 border border-yellow-100',
  Textiles:         'bg-pink-50 text-pink-700 border border-pink-100',
};

/* Duplicate so the strip loops seamlessly */
const track = [...testimonials, ...testimonials];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="w-[360px] md:w-[400px] shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-5 relative group hover:border-[#2E86B8]/30 hover:shadow-md transition-all duration-300">
    {/* Quote watermark */}
    <Quote
      size={36}
      className="absolute top-6 right-6 text-[#0B2A3C]/5 group-hover:text-[#F5A02E]/10 transition-colors"
      fill="currentColor"
    />

    {/* Stars + industry tag */}
    <div className="flex items-center justify-between">
      <div className="flex gap-0.5">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} size={13} className="text-[#F5A02E] fill-[#F5A02E]" />
        ))}
      </div>
      <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${industryColor[t.industry]}`}>
        {t.industry}
      </span>
    </div>

    {/* Review text */}
    <p className="text-gray-500 text-sm italic leading-relaxed flex-1 relative z-10">
      &ldquo;{t.text}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
      <div className="w-9 h-9 rounded-xl bg-[#0B2A3C] flex items-center justify-center text-white font-black text-sm shrink-0">
        {t.name.charAt(0)}
      </div>
      <div>
        <p className="font-black text-[#0B2A3C] text-xs uppercase tracking-tight leading-tight">{t.name}</p>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5 leading-tight">
          {t.role} · {t.company}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Keyframe injection */}
      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-rtl 40s linear infinite;
          will-change: transform;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section header */}
      <div className="container mx-auto px-4 md:px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#2E86B8] font-black uppercase tracking-[0.25em] text-xs mb-4 block">
            Client Trust
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-[#0B2A3C] mb-5 uppercase tracking-tight">
            What Our <span className="text-[#F5A02E]">Clients Say</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#F5A02E] mx-auto mb-6 rounded-full" />
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Trusted by leading industries across India for ventilation excellence and reliable performance.
          </p>
        </motion.div>
      </div>

      {/* Marquee — full width, bleeds past container */}
      <div className="marquee-wrapper overflow-hidden w-full relative">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-6 px-6 py-4">
          {track.map((t, idx) => (
            <TestimonialCard key={idx} t={t} />
          ))}
        </div>
      </div>

      {/* Social proof bar */}
      <div className="container mx-auto px-4 md:px-6 mt-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-20 pt-10 border-t border-gray-200"
        >
          {[
            { value: '19+', label: 'Years of Trust' },
            { value: '98%', label: 'Client Retention' },
            { value: '4.9★', label: 'Average Rating' },
            { value: 'ISO 9001', label: 'Certified Quality' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-[#0B2A3C] font-heading">{stat.value}</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

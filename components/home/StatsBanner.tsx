'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const StatCounter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const StatsBanner = () => {
  const stats = [
    { label: "Years of Experience", value: 19, suffix: "+" },
    { label: "Product Categories", value: 9, suffix: "+" },
    { label: "Max Capacity (CMH)", value: 25000, suffix: "+" },
    { label: "Projects Delivered", value: 500, suffix: "+" }
  ];

  return (
    <section className="py-20 bg-[#0B2A3C] text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2E86B8" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute left-[-5%] top-[-50%] w-1/3 h-[200%] bg-[#F5A02E]/5 -rotate-12 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Stats: Montserrat Bold for numbers */}
              <div className="font-heading text-4xl md:text-6xl font-bold text-[#F5A02E] mb-3">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              {/* Label: Inter */}
              <div className="font-body text-[#D1D5DB] font-semibold uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5A02E] via-[#2E86B8] to-[#0B2A3C]" />
    </section>
  );
};

export default StatsBanner;

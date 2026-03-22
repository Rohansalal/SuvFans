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
    <section className="py-20 bg-[#1A1A2E] text-white overflow-hidden relative">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(https://suvfans.weblok.in/wp-content/uploads/2024/12/Black-and-White-Fan-Fathers-Day-Landscape-na-Card-1-1.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] via-[#1A1A2E]/90 to-[#1A1A2E]" />
      
      {/* Decorative Element */}
      <div className="absolute left-[-5%] top-[-50%] w-1/3 h-[200%] bg-primary/5 -rotate-12 blur-3xl pointer-events-none"></div>
      
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
              <div className="text-4xl md:text-6xl font-heading font-bold text-primary mb-3">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-300 font-medium uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;

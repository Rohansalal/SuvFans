'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Wind, Zap, Settings, CheckCircle } from 'lucide-react';

const TechnicalSpecs = () => {
  const specs = [
    {
      category: "Airflow Capacity",
      icon: Wind,
      details: [
        { label: "Centrifugal Fans", value: "Up to 25,000 CMH" },
        { label: "Axial Flow Fans", value: "Up to 100,000 CFM" },
        { label: "HVLS Fans", value: "Up to 200,000 CFM" },
        { label: "Industrial Coolers", value: "Up to 30,000 CMH" }
      ]
    },
    {
      category: "Motor Specifications",
      icon: Zap,
      details: [
        { label: "Power Range", value: "0.25 HP to 50 HP" },
        { label: "Voltage", value: "220V / 415V" },
        { label: "Phase", value: "Single & Three Phase" },
        { label: "IP Rating", value: "IP55 / IP65" }
      ]
    },
    {
      category: "Performance",
      icon: Gauge,
      details: [
        { label: "RPM Range", value: "750 to 3000 RPM" },
        { label: "Static Pressure", value: "Up to 70 mmWG" },
        { label: "Temperature Rating", value: "Up to 120°C" },
        { label: "Noise Level", value: "Below 85 dBA" }
      ]
    },
    {
      category: "Efficiency",
      icon: Settings,
      details: [
        { label: "Energy Efficiency", value: "IE3 Premium" },
        { label: "Airflow Efficiency", value: ">85%" },
        { label: "Filter Efficiency", value: ">95% PM10" },
        { label: "Service Life", value: "10+ Years" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[#2E86B8] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Technical Excellence
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B2A3C] mb-4">
              Technical Specifications
            </h2>
            <div className="w-24 h-1.5 bg-[#F5A02E] mx-auto mb-6"></div>
            <p className="font-body text-[#6B7280] max-w-2xl mx-auto text-lg leading-relaxed">
              Industry-leading performance metrics. Our fans are engineered for maximum airflow with minimum energy consumption.
            </p>
          </motion.div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#F4F6F8] rounded-sm p-6 border border-[#D1D5DB] hover:border-[#F5A02E] hover:shadow-lg transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded bg-[#0B2A3C] flex items-center justify-center">
                  <spec.icon className="text-[#F5A02E]" size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0B2A3C]">
                  {spec.category}
                </h3>
              </div>

              {/* Spec Details */}
              <div className="space-y-4">
                {spec.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex justify-between items-center py-2 border-b border-[#D1D5DB]/50 last:border-0">
                    <span className="font-body text-[#6B7280] text-sm">{detail.label}</span>
                    <span className="font-heading text-[#F5A02E] font-bold text-sm">{detail.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            "ISO 9001:2015 Certified",
            "CE Marked",
            "ISI Tested",
            "Quality Assured"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-[#0B2A3C]/5 px-4 py-2 rounded">
              <CheckCircle className="text-[#F5A02E]" size={16} />
              <span className="font-body text-[#0B2A3C] text-sm font-semibold">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;

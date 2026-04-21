'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Factory, Building2, Stethoscope } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    tag: 'Automotive Manufacturing',
    icon: Factory,
    title: 'Complete Ventilation Overhaul for 1.2 Lakh Sq Ft Assembly Plant',
    client: 'Leading Auto Component OEM, Bhiwadi RIICO',
    challenge: 'Extreme heat buildup (48°C+) in press shop causing 15% productivity drop and worker safety concerns during summer months.',
    solution: 'Deployed 8× HVLS fans (24ft diameter) + 14× centrifugal exhaust fans + roof ventilators covering the entire shop floor.',
    results: [
      'Temperature reduced by 9°C on average',
      'Productivity improved by 22%',
      '40% lower energy consumption vs previous cooling system',
      'ROI achieved within 18 months',
    ],
    accentColor: '#2E86B8',
    bgColor: '#EFF8FF',
  },
  {
    id: 2,
    tag: 'Cold Chain Logistics',
    icon: Building2,
    title: 'Custom Air Curtain & Exhaust System for Multi-Temperature Warehouse',
    client: 'Regional 3PL Operator, Kundli Industrial Estate',
    challenge: 'Frequent cold air loss at loading docks causing 30% energy wastage and non-compliance with FSSAI cold chain standards.',
    solution: 'Installed 22× industrial air curtain units at dock doors, 6× axial supply fans for positive pressure, and automated door-linked controls.',
    results: [
      'Cold air retention improved by 78%',
      'Monthly energy bill reduced by ₹1.8 lakh',
      'FSSAI audit cleared with zero observations',
      'System commissioned in 12 working days',
    ],
    accentColor: '#F5A02E',
    bgColor: '#FFFBF0',
  },
  {
    id: 3,
    tag: 'Healthcare HVAC',
    icon: Stethoscope,
    title: 'NABH-Compliant Ventilation for 250-Bed Multi-Specialty Hospital',
    client: 'Private Hospital Group, Jaipur',
    challenge: 'ICU and operation theatres failing NABH air change rate requirements (15–25 ACH). Existing system creating cross-contamination risk.',
    solution: 'Designed & supplied positive pressure AHU systems, HEPA-filtered supply fans, and isolated exhaust networks per NABH HBD guidelines.',
    results: [
      '20 ACH achieved in all critical areas',
      'NABH accreditation obtained in first attempt',
      'Zero HAI incidents post-commissioning',
      'Full installation in 28 days with zero ward disruption',
    ],
    accentColor: '#10B981',
    bgColor: '#ECFDF5',
  },
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-[#F4F6F8] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2E86B8]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F5A02E]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="font-body text-[#2E86B8] font-black uppercase tracking-[0.25em] text-xs mb-4 block">
              Project Portfolio
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-[#0B2A3C] mb-4 uppercase tracking-tight">
              Proven Results, <br />
              <span className="text-[#F5A02E]">Real Projects</span>
            </h2>
            <p className="font-body text-gray-500 text-lg leading-relaxed">
              How leading Indian industries solved critical ventilation challenges with SUV FANS engineering.
            </p>
          </motion.div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 border-2 border-[#0B2A3C] text-[#0B2A3C] hover:bg-[#0B2A3C] hover:text-white font-black uppercase text-xs tracking-widest px-6 py-3 rounded-sm transition-all duration-300 group"
          >
            Discuss Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-500 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left accent bar + tag */}
                <div
                  className="lg:col-span-1 flex lg:flex-col items-center justify-center gap-4 p-6 lg:py-10"
                  style={{ backgroundColor: cs.bgColor }}
                >
                  <cs.icon size={28} style={{ color: cs.accentColor }} />
                  <span
                    className="text-[9px] font-black uppercase tracking-widest text-center hidden lg:block"
                    style={{ color: cs.accentColor }}
                  >
                    {cs.tag.split(' ').map((w, i) => <span key={i} className="block">{w}</span>)}
                  </span>
                </div>

                {/* Main content */}
                <div className="lg:col-span-11 p-8 md:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span
                        className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                        style={{ backgroundColor: cs.bgColor, color: cs.accentColor }}
                      >
                        {cs.tag}
                      </span>
                      <h3 className="font-heading text-xl md:text-2xl font-black text-[#0B2A3C] uppercase tracking-tight leading-tight">
                        {cs.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">{cs.client}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Challenge</p>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Solution</p>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">{cs.solution}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Results</p>
                      <ul className="space-y-1.5">
                        {cs.results.map((r, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="shrink-0 mt-0.5" style={{ color: cs.accentColor }} />
                            <span className="text-xs text-gray-600 font-bold leading-snug">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest group/link transition-colors"
                    style={{ color: cs.accentColor }}
                  >
                    Get a Similar Solution
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

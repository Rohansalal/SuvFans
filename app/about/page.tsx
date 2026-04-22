'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  ShieldCheck,
  Zap,
  Wind,

  Target,
  ArrowRight,
  CheckCircle2,
  Factory,
  MapPin,
  Gauge,
  Thermometer,
  Box,
  Maximize,
  Scissors,
  Airplay,
  ChevronRight,
  Building2,
  Globe,
  BarChart3,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_CONFIG } from '@/lib/config';


const productCategories = [
  { name: 'Centrifugal Inline Cubic Fans', icon: Wind },
  { name: 'Axial Wall Exhaust & Supply Fans', icon: Gauge },
  { name: 'Insulated Housing Cabinet Fans', icon: Box },
  { name: 'Tube Axial Fans', icon: Wind },
  { name: 'Belt Driven Cabinet Fans', icon: Wrench },
  { name: 'HVLS Fans (up to 24 ft)', icon: Maximize },
  { name: 'HVAC Air Duct & Kitchen Hoods', icon: Scissors },
  { name: 'Turnkey HVAC Products', icon: Building2 },
  { name: 'Commercial Air Purifiers', icon: Airplay },
];

const values = [
  {
    icon: CheckCircle2,
    title: 'Ease of Doing Business',
    description: 'Simple processes, clear communication, and dependable execution — from inquiry to delivery.',
  },
  {
    icon: BarChart3,
    title: 'Application-Driven Engineering Expertise',
    description: 'Solutions designed to meet exact project and performance requirements. We engineer for your application, not a catalogue.',
  },
  {
    icon: Zap,
    title: 'Best-in-Class Responsiveness',
    description: 'Quick turnaround, proactive support, and timely product & project delivery. We move as fast as your project demands.',
  },
  {
    icon: Globe,
    title: 'Pan-India Reach',
    description: 'From Bhiwadi, Rajasthan we serve factories, hospitals, malls, tunnels, and infrastructure projects across every Indian state.',
  },
];

const timeline = [
  {
    year: '2021',
    title: 'Company Founded',
    icon: Factory,
    description:
      'SUV FANS LLP was established in Bhiwadi, Rajasthan with a focused mandate: design and manufacture industrial-grade ventilation equipment for India\'s growing industrial sector.',
  },
  {
    year: '2022',
    title: 'Product Range Expanded',
    icon: Wind,
    description:
      'Launched the HVLS fan range — including fans up to 24 ft diameter — targeting large-footprint warehouses, logistics hubs, and automobile assembly plants.',
  },
  {
    year: '2023',
    title: 'ISO 9001:2015 Certified',
    icon: Award,
    description:
      'Achieved ISO 9001:2015 quality management certification and ISHRAE membership, establishing formal benchmarks for manufacturing consistency and engineering excellence.',
  },
  {
    year: '2024',
    title: 'HVAC & Turnkey Division',
    icon: Building2,
    description:
      'Added turnkey HVAC solutions and commercial kitchen hood systems to the portfolio, enabling us to serve complete project requirements rather than just equipment supply.',
  },
  {
    year: '2025',
    title: 'Air Purification Launch',
    icon: Airplay,
    description:
      'Introduced the PURE AIR commercial air purifier range featuring German Mann+Hummel filtration technology, targeting pharmaceutical, healthcare, and premium commercial facilities.',
  },
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'ISHRAE Member', description: 'Indian Society of Heating, Refrigerating & Air Conditioning Engineers' },
  { name: 'BEE Compliant', description: 'Bureau of Energy Efficiency Standards' },
  { name: 'IE3 Motors', description: 'Premium Motor Efficiency Class' },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">

      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
        {/* Full-bleed background image */}
        <Image
          src="/Aboutus.webp"
          alt="SUV FANS manufacturing facility"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Layered gradient overlay — dark at bottom, slightly transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A26] via-[#0B2A3C]/70 to-[#0B2A3C]/30" />
        {/* Subtle diagonal accent strip */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2A3C]/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#F5A02E]" />
              <span className="text-[#F5A02E] font-black text-xs uppercase tracking-[0.25em]">YOUR PARTNER IN AIR MOVEMENT</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 uppercase tracking-tight">
              Industrial Fan<br />
              <span className="text-[#2E86B8]">&amp; HVAC</span><br />
              <span className="text-white">Manufacturer</span><br />
              <span className="text-[#F5A02E] text-4xl md:text-5xl">— Built in India.</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
              Founded by a mechanical engineer with 19+ years of HVAC and air ventilation manufacturing expertise — across Indian, Indo-European JV, and US-based organisations. B.Tech Mechanical Engineering · PGDBA Operations &amp; Research.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Button asChild className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-black uppercase tracking-wider text-sm px-8 h-12 rounded-none">
                <Link href="/products">Our Products <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold uppercase tracking-wider text-sm px-8 h-12 rounded-none">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Bottom stats strip */}
            <div className="flex flex-wrap gap-0 border-t border-white/10 pt-8">
              {[
                { value: '19+', label: 'Years of Engineering Expertise' },
                { value: '9', label: 'Fan & HVAC Product Categories' },
                { value: 'ISO 9001', label: 'Quality Certified Manufacturing' },
                { value: 'Pan-India', label: 'Installation & Support Network' },
              ].map((stat, i) => (
                <div key={i} className={`flex flex-col pr-8 mr-8 ${i < 3 ? 'border-r border-white/10' : ''} mb-4`}>
                  <span className="text-2xl font-black text-[#F5A02E] font-heading leading-none">{stat.value}</span>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest mt-1 font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Company Story ── */}
      <section className="container mx-auto px-4 md:px-6 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 uppercase">
              Manufactured in Bhiwadi.<br />
              <span className="text-secondary">Trusted Across India.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              Founded by a mechanical engineer with 19+ years of experience in HVAC and air ventilation manufacturing, our company is driven by strong technical expertise and global industry exposure. The promoter holds a B.Tech in Mechanical Engineering and a PGDBA in Operations &amp; Research, with extensive hands-on experience in air handling and ventilation systems across Indian, Indo-European joint venture, and US-based organizations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Built on this foundation, we specialize in manufacturing and turnkey HVAC solutions that deliver reliable performance, energy efficiency, and application-focused design for commercial and industrial environments.
            </p>

            <div className="space-y-3">
              {[
                'B.Tech Mechanical Engineering + PGDBA Operations & Research',
                'Experience across Indian, Indo-European JV, and US-based organizations',
                'In-house manufacturing — sheet metal, impeller balancing, acoustic testing',
                'Direct factory support — no middlemen, fast turnaround',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="bg-card border border-border p-8 rounded-sm hover:border-secondary/40 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-sm flex items-center justify-center">
                  <Target size={18} className="text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-primary uppercase tracking-tight text-lg">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To be India's most trusted manufacturer of industrial ventilation equipment — recognised for engineering quality, energy efficiency, and the ability to handle the toughest application environments that others cannot.
              </p>
            </div>

            <div className="bg-primary p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center">
                  <Globe size={18} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-white uppercase tracking-tight text-lg">Our Mission</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                To deliver precision-engineered industrial fans and HVAC solutions that improve air quality, worker safety, and energy performance for factories, warehouses, hospitals, and mission-critical facilities across India.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center">
                  <MapPin size={18} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-primary uppercase tracking-tight text-lg">Registered Office</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {COMPANY_CONFIG.address}
              </p>
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="inline-flex items-center gap-2 text-secondary font-bold text-sm mt-3 hover:text-accent transition-colors"
              >
                {COMPANY_CONFIG.phone} <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What We Manufacture ── */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">Product Range</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary uppercase mb-4">
              9 Categories. One Manufacturer.
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              From compact inline fans for false ceilings to massive HVLS fans covering 50,000+ sq ft — we manufacture the full spectrum of industrial ventilation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card border border-border p-5 rounded-sm flex items-center gap-4 hover:border-accent/40 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 bg-primary/5 rounded-sm flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all shrink-0">
                  <cat.icon size={18} className="text-primary group-hover:text-primary" />
                </div>
                <span className="text-sm font-bold text-primary uppercase tracking-tight">{cat.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors"
            >
              Browse All Products <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">What Drives Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary uppercase mb-4">
            Our Value Proposition
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-7 rounded-sm hover:shadow-md hover:border-secondary/30 transition-all group"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-secondary transition-all">
                <v.icon size={20} className="text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-primary uppercase tracking-tight mb-3 text-base">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-card border-t border-b border-border py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary uppercase mb-4">
              Five Years of Growth
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              From founding in 2021 to a complete industrial ventilation and air purification manufacturer by 2025.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-border z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 group"
                >
                  {/* Year circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-primary border-4 border-background rounded-full flex items-center justify-center group-hover:bg-accent transition-all shadow-md">
                      <item.icon size={18} className="text-white group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  <div className="bg-background border border-border p-6 rounded-sm hover:border-accent/40 hover:shadow-md transition-all text-center">
                    <div className="text-2xl font-heading font-bold text-accent mb-2">{item.year}</div>
                    <h3 className="font-bold text-primary uppercase tracking-tight text-sm mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-6 rounded-sm shadow-sm"
          >
            <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-muted">
              <Image
                src="/certificated/certificate-1536x954.webp"
                alt="SUV FANS ISO 9001:2015 Certificate"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
            <div className="flex items-center justify-between mt-5 pt-5 border-t border-border">
              <div>
                <div className="font-bold text-primary text-sm uppercase tracking-tight">Quality Management System</div>
                <div className="text-xs text-muted-foreground mt-1">ISO 9001:2015 Certified</div>
              </div>
              <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center">
                <ShieldCheck size={18} className="text-accent" />
              </div>
            </div>
          </motion.div>

          {/* Certifications list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">Standards & Compliance</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary uppercase mb-4">
              Built to the Highest Standards
            </h2>
            <div className="w-16 h-1 bg-accent mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Every SUV FANS product meets rigorous national and international standards. Our quality management system governs every step — from incoming raw material inspection through impeller balancing, performance testing, and final dispatch checks.
            </p>

            <div className="space-y-4 mb-8">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-4 p-4 bg-muted border border-border rounded-sm">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-primary text-sm uppercase tracking-tight">{cert.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{cert.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-xs px-7 h-11 rounded-sm">
              <Link href="/contact">
                Speak to Our Engineers <ArrowRight className="ml-2" size={14} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
              Ready to Work With Us?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us your application — our engineers will recommend the right fan, the right spec, and the right price. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-bold uppercase tracking-widest text-sm px-8 h-12 rounded-sm shadow-lg">
                <Link href="/get-quote">Get a Quote <ArrowRight className="ml-2" size={16} /></Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold uppercase tracking-widest text-sm px-8 h-12 rounded-sm">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

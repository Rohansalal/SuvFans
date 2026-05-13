'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Factory,
  Zap,
  Shield,
  Building2,
  Leaf,
  Snowflake,
  Award,
  Gauge,
  Pause,
  Play,
} from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/config';

type Slide = {
  image: string;
  eyebrow: string;
  headline: string;
  highlight: string;
  description: React.ReactNode;
  benefits: { icon: LucideIcon; text: string }[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stat: { value: string; label: string };
};

const SLIDES: Slide[] = [
  {
    image: '/home.webp',
    eyebrow: `${COMPANY_CONFIG.iso} Manufacturer`,
    headline: 'Engineered for Powerful Airflow',
    highlight: 'Robust, energy-efficient industrial fans.',
    description: (
      <>
        9 categories of fans — from <strong className="text-white">centrifugal blowers to 24-ft HVLS giants</strong>, built for Indian industry.
      </>
    ),
    benefits: [
      { icon: Factory, text: `${COMPANY_CONFIG.yearsOfExperience} Years Experience` },
      { icon: Shield, text: 'ISO 9001:2015' },
    ],
    primaryCta: { label: 'Get Quote', href: '/get-quote' },
    secondaryCta: { label: 'View Products', href: '/products' },
    stat: { value: '19+', label: 'Years Built-in-India' },
  },
  {
    image: '/home1.webp',
    eyebrow: 'HVLS Cooling',
    headline: 'HVLS Fans That Move Mountains of Air',
    highlight: 'Cool entire warehouses with 80% less energy.',
    description: (
      <>
        One HVLS unit replaces <strong className="text-white">10–15 conventional fans</strong> across vast factory floors.
      </>
    ),
    benefits: [
      { icon: Building2, text: 'Up to 24 ft' },
      { icon: Leaf, text: '80% Less Energy' },
    ],
    primaryCta: { label: 'Explore HVLS Fans', href: '/products' },
    secondaryCta: { label: 'Coverage Calculator', href: '/products' },
    stat: { value: '24 ft', label: 'Max HVLS Diameter' },
  },
  {
    image: '/homepage1.webp',
    eyebrow: 'Mission-Critical Ventilation',
    headline: 'Precision Airflow for Critical Facilities',
    highlight: 'Cleanroom, cold-chain & pharma-grade systems.',
    description: (
      <>
        Built for <strong className="text-white">−40°C freezers, ISO cleanrooms and pharma corridors</strong>.
      </>
    ),
    benefits: [
      { icon: Snowflake, text: 'Cold-Chain Ready' },
      { icon: Award, text: 'Pharma Grade' },
    ],
    primaryCta: { label: 'Request Spec', href: '/contact' },
    secondaryCta: { label: 'See Applications', href: '/application' },
    stat: { value: '−40°C', label: 'Blast-Freezer Ready' },
  },
  {
    image: '/homepage2.webp',
    eyebrow: 'Efficient by Design',
    headline: 'Lower kWh. Higher Output.',
    highlight: 'Premium-efficiency motors. Aerodynamic blades.',
    description: (
      <>
        <strong className="text-white">IE3–IE5 motors</strong> and CFD-tuned blades — more air per watt.
      </>
    ),
    benefits: [
      { icon: Gauge, text: 'IE3–IE5 Motors' },
      { icon: Zap, text: 'Smart BLDC Drives' },
    ],
    primaryCta: { label: 'Talk to an Engineer', href: '/contact' },
    secondaryCta: { label: 'View Products', href: '/products' },
    stat: { value: 'IE5', label: 'Premium Motor Efficiency' },
  },
];

const SLIDE_DURATION = 6500;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Slide advances when the CSS progress animation finishes. Pausing the
  // animation (via animationPlayState) naturally pauses the slide too —
  // no parallel JS timer to drift out of sync with the visual progress bar.
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);

  const slide = SLIDES[current];

  return (
    <section
      className="relative min-h-[56vh] sm:min-h-[60vh] md:min-h-[64vh] flex items-start overflow-hidden pt-5 sm:pt-6 md:pt-10 pb-6 sm:pb-8 md:pb-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Carousel — cross-fade between slides */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <div
            key={s.image}
            aria-hidden={i !== current}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              quality={70}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Light readability scrim — keeps text legible without hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main content grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        <div>
          {/* Slide content */}
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="will-change-[opacity,transform]"
              >
                {/* Eyebrow Badge */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <div className="h-px w-8 sm:w-14 md:w-20 bg-[#F5A02E]" />
                  <span className="font-heading text-[#F5A02E] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm md:text-base">
                    {slide.eyebrow}
                  </span>
                  <div className="h-px w-8 sm:w-14 md:w-20 bg-[#F5A02E]" />
                </div>

                {/* Headline */}
                <h1 className="font-heading text-[26px] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white sm:leading-tight mb-3 sm:mb-4">
                  {slide.headline}
                  <br className="hidden sm:block" />
                  <span className="block sm:inline text-[#F5A02E] text-base sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-1 sm:mt-0">
                    {slide.highlight}
                  </span>
                </h1>

                {/* Description */}
                <p className="font-body text-sm sm:text-base md:text-lg text-[#D1D5DB] mb-5 sm:mb-6 max-w-2xl leading-relaxed">
                  {slide.description}
                </p>

                {/* Key Benefits */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-7">
                  {slide.benefits.map((item, idx) => (
                    <motion.div
                      key={`${current}-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + idx * 0.06, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-2 bg-[#2E86B8]/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm border border-[#2E86B8]/30 backdrop-blur-sm"
                    >
                      <item.icon className="text-[#F5A02E] w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                      <span className="font-heading text-white font-semibold text-xs sm:text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-heading font-bold uppercase tracking-wide text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-4 h-auto shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <Link href={slide.primaryCta.href}>
                      {slide.primaryCta.label}
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-transparent hover:bg-white/10 border-2 border-white/30 text-white font-heading font-bold uppercase tracking-wide text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-4 h-auto transition-all"
                  >
                    <Link href={slide.secondaryCta.href}>
                      {slide.secondaryCta.label}
                      <ChevronRight className="ml-1" size={16} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel controls */}
            <div className="flex items-center gap-4 mt-2 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous slide"
                  className="grid place-items-center w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-[#F5A02E] hover:bg-[#F5A02E]/10 transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next slide"
                  className="grid place-items-center w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-[#F5A02E] hover:bg-[#F5A02E]/10 transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="flex items-center gap-3">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="group relative h-1.5 overflow-hidden rounded-full transition-all"
                    style={{ width: i === current ? 56 : 28 }}
                  >
                    <span className="absolute inset-0 bg-white/25 group-hover:bg-white/50 transition-colors" />
                    {i === current && (
                      <span
                        key={`progress-${current}`}
                        className="absolute inset-0 bg-[#F5A02E] origin-left will-change-transform"
                        style={{
                          animation: `hero-progress ${SLIDE_DURATION}ms linear forwards`,
                          animationPlayState: paused ? 'paused' : 'running',
                        }}
                        onAnimationEnd={next}
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 ml-1">
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-white/60 tabular-nums">
                  {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
                </span>
                <span
                  className="ml-1 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-white/50"
                  aria-live="polite"
                >
                  {paused ? <Pause size={10} /> : <Play size={10} />}
                  {paused ? 'Paused' : 'Auto'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F5A02E] via-[#2E86B8] to-[#0B2A3C]" />
    </section>
  );
};

export default HeroSection;

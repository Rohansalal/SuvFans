'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { APPLICATIONS } from '@/lib/applications';
import { ArrowRight, Wind, Car, Building2, Factory, ChefHat, Home, Train, MapPin, ShieldCheck } from 'lucide-react';

const applicationIcons: Record<string, React.ElementType> = {
  'air-conditioning': Wind,
  'car-park': Car,
  'commercial-building': Building2,
  'manufacturing-industrial': Factory,
  'kitchen': ChefHat,
  'residential': Home,
  'transport': Train,
};

const ApplicationPage = () => {
  const totalStats = [
    { value: '7', label: 'Application Sectors' },
    { value: '25+', label: 'Fan Series Available' },
    { value: '400°C', label: 'Max Temp Rated' },
    { value: 'ISO 9001', label: 'Quality Certified' },
  ];

  return (
    <div className="bg-background pb-24">
      {/* Hero Header */}
      <section className="bg-primary pt-20 pb-32 relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridApp" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridApp)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-accent" />
              <span className="text-accent font-bold uppercase tracking-widest text-sm">
                Ventilation Solutions
              </span>
              <div className="h-px w-16 bg-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Application <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Precision-engineered ventilation tailored for specific environments — from underground car parks to tunnel infrastructure, industrial factories to premium residences.
            </p>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 container mx-auto px-4 md:px-6">
          <div className="bg-card shadow-2xl border border-border grid grid-cols-2 md:grid-cols-4 rounded-sm">
            {totalStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-6 text-center ${i < totalStats.length - 1 ? 'border-r border-border' : ''}`}
              >
                <div className="text-2xl md:text-3xl font-heading font-bold text-accent">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Cards Grid */}
      <section className="container mx-auto px-4 md:px-6 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {APPLICATIONS.map((app, idx) => {
            const Icon = applicationIcons[app.slug] || Wind;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Link href={`/application/${app.slug}`} className="group block h-full">
                  <div className="bg-card border border-border shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 overflow-hidden h-full flex flex-col rounded-sm">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                      <Image
                        src={app.image}
                        alt={app.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500" />

                      {/* Icon badge */}
                      <div className="absolute top-4 left-4 bg-accent text-primary p-3 rounded-sm shadow-lg">
                        <Icon size={20} />
                      </div>

                      {/* Stat pill */}
                      <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                        {app.stats[0].value} {app.stats[0].label}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-grow">
                      <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors uppercase tracking-tight">
                        {app.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                        {app.description}
                      </p>

                      {/* Environments preview */}
                      <div className="flex items-start gap-2 mb-5">
                        <MapPin size={14} className="text-secondary mt-0.5 shrink-0" />
                        <p className="text-xs text-muted-foreground">
                          {app.environments.slice(0, 3).join(' · ')}
                        </p>
                      </div>

                      {/* Compliance badge */}
                      <div className="flex items-center gap-2 mb-6 pb-6 border-b border-border">
                        <ShieldCheck size={14} className="text-accent shrink-0" />
                        <span className="text-xs font-bold text-muted-foreground truncate">
                          {app.industryRequirements[0]}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-bold text-secondary group-hover:text-accent transition-colors uppercase tracking-widest">
                        Explore Solutions
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="bg-primary rounded-sm p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="gridCTA" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridCTA)" />
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Not Sure Which Solution Fits?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Our engineering team will assess your facility and recommend the right ventilation solution for your specific requirements.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all shadow-lg"
            >
              Get Technical Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationPage;

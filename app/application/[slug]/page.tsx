'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { APPLICATIONS } from '@/lib/applications';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Wind,
  Car,
  Building2,
  Factory,
  ChefHat,
  Home,
  Train,
  MapPin,
  ShieldCheck,
  Zap,
  AlertTriangle,
  ChevronRight,
} from 'lucide-react';

const applicationIcons: Record<string, React.ElementType> = {
  'air-conditioning': Wind,
  'car-park': Car,
  'commercial-building': Building2,
  'manufacturing-industrial': Factory,
  'kitchen': ChefHat,
  'residential': Home,
  'transport': Train,
};

const challengeIcons = [AlertTriangle, Zap, ShieldCheck, Factory];

const ApplicationDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);
  const application = APPLICATIONS.find((a) => a.slug === slug);

  if (!application) {
    notFound();
  }

  const Icon = applicationIcons[application.slug] || Wind;
  const otherApplications = APPLICATIONS.filter((a) => a.slug !== application.slug);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={application.image}
          alt={application.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link
              href="/application"
              className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-6 font-bold uppercase tracking-widest text-xs"
            >
              <ArrowLeft size={14} /> All Applications
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent p-2.5 rounded-sm">
                <Icon size={20} className="text-primary" />
              </div>
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Application</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 uppercase">
              {application.name}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              {application.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="relative bg-card border-b border-border shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {application.stats.map((stat) => (
              <div
                key={stat.label}
                className="group py-8 px-4 text-center relative hover:bg-muted/30 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary group-hover:text-accent transition-colors tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground mt-2">
                  {stat.label}
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-accent transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Column — Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-card border border-border p-8 md:p-12 rounded-md shadow-sm overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-3">
                  <span className="w-8 h-px bg-accent" />
                  Overview
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase tracking-tight">
                  {application.name} Applications
                </h2>
                <div className="w-14 h-1 bg-accent mt-4 mb-6" />
                <p className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
                  {application.longDescription}
                </p>

                {/* Key Applications — full-width pill grid */}
                <div className="mt-10 pt-8 border-t border-border">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-[0.25em] mb-5 flex items-center gap-2">
                    <Zap size={14} className="text-accent" /> Key Applications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {application.applications.map((item) => (
                      <div
                        key={item}
                        className="group flex items-center gap-3 bg-muted/40 hover:bg-accent/5 border border-border hover:border-accent/40 px-4 py-3 rounded-sm transition-all"
                      >
                        <div className="w-7 h-7 rounded-sm bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors">
                          <CheckCircle2 size={14} className="text-accent" />
                        </div>
                        <span className="text-sm font-medium text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Environments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-2">
                  <MapPin size={12} /> Deployment
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase tracking-tight">Where We Operate</h2>
                <div className="w-14 h-1 bg-accent mt-3" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {application.environments.map((env, i) => (
                  <motion.div
                    key={env}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="group bg-card border border-border p-4 rounded-sm flex items-center gap-3 hover:border-accent/50 hover:bg-accent/[0.02] hover:shadow-sm hover:-translate-y-0.5 transition-all"
                  >
                    <div className="w-1.5 h-8 bg-accent/40 group-hover:bg-accent rounded-full shrink-0 transition-colors" />
                    <span className="text-sm font-semibold text-primary leading-snug">{env}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Industry Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-primary rounded-md p-8 md:p-12 overflow-hidden"
            >
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="reqGrid" width="32" height="32" patternUnits="userSpaceOnUse">
                      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#reqGrid)" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-2">
                  <ShieldCheck size={12} /> Compliance
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tight">Industry Requirements</h2>
                <div className="w-14 h-1 bg-accent mt-3 mb-7" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {application.industryRequirements.map((req) => (
                    <div
                      key={req}
                      className="group flex items-start gap-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-accent/30 p-4 rounded-sm transition-all"
                    >
                      <div className="w-6 h-6 rounded-sm bg-accent/15 group-hover:bg-accent/25 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                        <CheckCircle2 size={13} className="text-accent" />
                      </div>
                      <span className="text-sm text-white/85 font-medium leading-snug">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-7">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-2">
                  <AlertTriangle size={12} /> Engineering
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase tracking-tight">
                  Challenges We Solve
                </h2>
                <div className="w-14 h-1 bg-accent mt-3" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {application.challenges.map((challenge, i) => {
                  const ChallengeIcon = challengeIcons[i % challengeIcons.length];
                  return (
                    <motion.div
                      key={challenge.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="group relative bg-card border border-border p-6 md:p-7 rounded-md hover:border-accent/40 hover:shadow-md hover:-translate-y-1 transition-all overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-11 h-11 rounded-md bg-accent/10 group-hover:bg-accent/15 flex items-center justify-center shrink-0 transition-colors">
                          <ChallengeIcon size={18} className="text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-bold text-accent uppercase tracking-[0.25em] mb-1">
                            Challenge {String(i + 1).padStart(2, '0')}
                          </div>
                          <h3 className="font-heading font-bold text-primary text-base leading-tight">{challenge.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Featured Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-7">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-2">
                  <Wind size={12} /> Product Range
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase tracking-tight">
                  Featured Products
                </h2>
                <div className="w-14 h-1 bg-accent mt-3" />
              </div>
              <div className="space-y-6">
                {application.featuredProducts.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group bg-card border border-border rounded-md overflow-hidden hover:shadow-lg hover:border-accent/40 transition-all"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5">
                      <div className="relative h-52 md:h-auto md:col-span-2 overflow-hidden bg-muted">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-primary/10 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <div className="bg-accent text-primary text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-sm shadow-md">
                            Series {String(i + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                        <h4 className="font-heading font-bold text-primary text-lg md:text-xl uppercase tracking-tight mb-3 leading-snug group-hover:text-accent transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{product.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-border">
                          {product.specs.map((spec) => (
                            <div key={spec} className="flex items-center gap-2.5">
                              <div className="w-1 h-4 bg-accent rounded-full shrink-0" />
                              <span className="text-xs font-semibold text-primary/80 leading-snug">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Box */}
            <div className="bg-primary p-10 md:p-12 rounded-sm text-center relative overflow-hidden">
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
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3 uppercase">
                  Need a Custom Solution?
                </h3>
                <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                  Our engineering team can design a ventilation system tailored specifically to your facility's layout, load, and compliance requirements.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-primary font-bold uppercase tracking-widest text-sm px-8 h-12 rounded-sm">
                  <Link href="/get-quote">
                    Get Technical Proposal <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">

            {/* Quick Quote CTA */}
            <div className="bg-accent rounded-sm p-6 text-center">
              <Icon size={28} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-primary text-base uppercase tracking-tight mb-2">
                {application.name} Expert
              </h3>
              <p className="text-primary/70 text-xs mb-4 leading-relaxed">
                Get a site-specific recommendation from our ventilation engineers.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-xs h-10 rounded-sm">
                <Link href="/get-quote">Request Quote</Link>
              </Button>
            </div>

            {/* Key Stats Summary */}
            <div className="bg-card border border-border rounded-sm p-6">
              <h3 className="font-bold text-primary uppercase tracking-widest text-xs mb-4 pb-3 border-b border-border">
                Performance Highlights
              </h3>
              <div className="space-y-3">
                {application.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
                    <span className="text-sm font-bold text-accent">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Environments Quick List */}
            <div className="bg-card border border-border rounded-sm p-6">
              <h3 className="font-bold text-primary uppercase tracking-widest text-xs mb-4 pb-3 border-b border-border flex items-center gap-2">
                <MapPin size={12} className="text-accent" /> Typical Environments
              </h3>
              <ul className="space-y-2">
                {application.environments.map((env) => (
                  <li key={env} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ChevronRight size={11} className="text-accent shrink-0" />
                    {env}
                  </li>
                ))}
              </ul>
            </div>

            {/* Compliance */}
            <div className="bg-card border border-border rounded-sm p-6">
              <h3 className="font-bold text-primary uppercase tracking-widest text-xs mb-4 pb-3 border-b border-border flex items-center gap-2">
                <ShieldCheck size={12} className="text-accent" /> Compliance Standards
              </h3>
              <ul className="space-y-2">
                {application.industryRequirements.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0 mt-1.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Applications */}
            <div className="bg-card border border-border rounded-sm p-6">
              <h3 className="font-bold text-primary uppercase tracking-widest text-xs mb-4 pb-3 border-b border-border">
                Other Applications
              </h3>
              <div className="space-y-2">
                {otherApplications.map((a) => {
                  const OtherIcon = applicationIcons[a.slug] || Wind;
                  return (
                    <Link
                      key={a.id}
                      href={`/application/${a.slug}`}
                      className="flex items-center gap-3 p-3 rounded-sm hover:bg-muted transition-colors group border border-transparent hover:border-border"
                    >
                      <div className="w-7 h-7 bg-secondary/10 rounded-sm flex items-center justify-center shrink-0">
                        <OtherIcon size={13} className="text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-bold text-primary group-hover:text-secondary transition-colors block truncate">{a.name}</span>
                      </div>
                      <ChevronRight size={12} className="text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationDetailPage;

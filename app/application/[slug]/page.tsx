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

        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-16">
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
      <div className="bg-card border-b border-border shadow-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {application.stats.map((stat) => (
              <div key={stat.label} className="py-6 px-4 text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-accent">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left Column — Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 md:p-10 rounded-sm shadow-sm"
            >
              <h2 className="text-2xl font-heading font-bold text-primary mb-2 uppercase border-l-4 border-accent pl-4">
                Application Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-4 text-base">
                {application.longDescription}
              </p>

              {/* Key Applications & Key Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-border">
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap size={14} className="text-accent" /> Key Applications
                  </h3>
                  <ul className="space-y-2.5">
                    {application.applications.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap size={14} className="text-accent" /> Key Products
                  </h3>
                  <ul className="space-y-2.5">
                    {application.keyProducts.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Environments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={18} className="text-accent" />
                <h2 className="text-2xl font-heading font-bold text-primary uppercase">Where We Operate</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {application.environments.map((env, i) => (
                  <motion.div
                    key={env}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card border border-border p-4 rounded-sm flex items-start gap-3 hover:border-accent/40 hover:shadow-sm transition-all"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full shrink-0 mt-1.5" />
                    <span className="text-sm font-medium text-primary">{env}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Industry Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-sm p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck size={20} className="text-accent" />
                <h2 className="text-2xl font-heading font-bold text-white uppercase">Industry Requirements</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {application.industryRequirements.map((req) => (
                  <div key={req} className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-sm">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-heading font-bold text-primary uppercase mb-6">
                Challenges We Solve
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {application.challenges.map((challenge, i) => {
                  const ChallengeIcon = challengeIcons[i % challengeIcons.length];
                  return (
                    <div
                      key={challenge.title}
                      className="bg-card border border-border p-6 rounded-sm hover:border-secondary/40 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 bg-secondary/10 rounded-sm flex items-center justify-center shrink-0">
                          <ChallengeIcon size={16} className="text-secondary" />
                        </div>
                        <h3 className="font-bold text-primary text-sm uppercase tracking-tight">{challenge.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>
                    </div>
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
              <h2 className="text-2xl font-heading font-bold text-primary uppercase mb-6">Featured Products</h2>
              <div className="space-y-5">
                {application.featuredProducts.map((product, i) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card border border-border rounded-sm overflow-hidden hover:shadow-md hover:border-accent/30 transition-all"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/20" />
                      </div>
                      <div className="md:col-span-2 p-6 md:p-8">
                        <h4 className="font-heading font-bold text-primary text-base uppercase mb-2">{product.name}</h4>
                        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{product.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {product.specs.map((spec) => (
                            <div key={spec} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                              <span className="text-xs font-bold text-primary/70 uppercase tracking-tight">{spec}</span>
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

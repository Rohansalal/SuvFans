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
  Users, 
  Target, 
  History, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Globe,
  Leaf
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const stats = [
    { label: 'Project Completed Last Years', value: '5k', icon: CheckCircle2 },
    { label: 'Happy Customer', value: '4k', icon: Users },
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Start Company',
      icon: Wind,
      description: 'Established as a trusted name in the air ventilation industry with a focus on delivering high-quality and efficient ventilation solutions.'
    },
    {
      year: '2022',
      title: 'Expanding Horizons',
      icon: Globe,
      description: 'Introduced energy-efficient models to align with global sustainability goals, reducing energy consumption by up to 25%.'
    },
    {
      year: '2023',
      title: 'Innovation and Recognition',
      icon: Award,
      description: 'Earned certification for quality management and environmental standards, reinforcing our commitment to excellence.'
    },
    {
      year: '2024',
      title: 'Going Global',
      icon: Target,
      description: 'Celebrated the milestone of 1,000+ projects completed with exceptional customer satisfaction.'
    },
    {
      year: '2025',
      title: 'Future-Forward Leadership',
      icon: Zap,
      description: 'Announced plans for a green initiative to make all manufacturing processes carbon-neutral by 2030.'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Hero Section - Matching Product Page Design */}
      <section className="relative bg-[#0B2A3C] text-white pt-[84px] md:pt-[104px] pb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2E86B8]/20 -skew-x-12 translate-x-1/4" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-8 lg:pb-16">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="max-w-4xl mx-auto lg:mx-0">
                <span className="inline-block px-4 py-1 rounded-full bg-[#F5A02E] text-[#0B2A3C] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  Who we are
                </span> 
                <h1 className="text-4xl text-white md:text-6xl lg:text-7xl font-black font-montserrat mb-6 leading-[1.1] uppercase">
                  The Best <br className="hidden md:block" /> 
                  <span className="text-[#2E86B8]">Air Tech Company</span>
                </h1>
                <p className="text-lg md:text-xl font-body text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  At SUV Fans, we are driven by a singular vision: to become the leading provider of innovative and reliable air ventilation solutions. Established with a passion for enhancing air quality and environmental comfort, we have grown to become a trusted name in the industry.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Button asChild size="lg" className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-black h-14 px-8 uppercase tracking-wide shadow-lg shadow-[#F5A02E]/20">
                    <Link href="/products">
                      Discover More
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 font-black h-14 px-8 uppercase tracking-wide backdrop-blur-sm">
                    <Link href="/contact">
                      Our Expertise
                    </Link>
                  </Button>
                </div>

                {/* Quick Stats Overlay */}
                <div className="mt-12 grid grid-cols-2 gap-8 max-w-md mx-auto lg:mx-0 border-t border-white/10 pt-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#2E86B8]/20 flex items-center justify-center text-[#2E86B8]">
                        <stat.icon size={24} />
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white">{stat.value}</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Image/Certification */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full max-w-[450px] mx-auto">
                <div className="absolute inset-0 bg-[#2E86B8]/30 blur-[120px] rounded-full animate-pulse" />
                
                {/* ISHRAE Certification Image Container */}
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-white p-4 group transition-all duration-700 hover:scale-[1.02]">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center">
                    <Image
                      src="/Aboutus.webp"
                      alt="ISHRAE Membership Certificate"
                      fill
                      className="object-contain p-4"
                      priority
                    />
                  </div>
                  {/* Overlay Branding */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2A3C]/10 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badges */}
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 hidden sm:flex items-center gap-4 animate-bounce-slow">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <ShieldCheck className="text-green-600" size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Certified By</p>
                    <p className="text-[#0B2A3C] font-black text-base">ISHRAE Member</p>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-[#F5A02E] p-5 rounded-2xl shadow-2xl border border-white/20 hidden sm:block">
                  <Star className="text-[#0B2A3C]" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Professional Layout */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-4">
            {/* Vision */}
            <div className="group bg-white p-6 lg:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(46,134,184,0.1)] transition-all duration-700">
              <div className="w-12 h-12 rounded-xl bg-[#2E86B8]/10 flex items-center justify-center text-[#2E86B8] mb-4 group-hover:bg-[#2E86B8] group-hover:text-white transition-all duration-500">
                <Target size={24} />
              </div>
              <h2 className="text-xl font-black font-montserrat text-[#0B2A3C] mb-3 uppercase tracking-tighter">
                Our <span className="text-[#2E86B8]">Vision</span>
              </h2>
              <p className="text-gray-500 font-body text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                SUV Fans aims to lead the air ventilation industry by continuing to innovate, expanding our product portfolio, and building lasting relationships with clients worldwide.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-[#0B2A3C] p-6 lg:p-8 rounded-[2rem] shadow-2xl border border-white/5 hover:shadow-[0_20px_50px_rgba(245,160,46,0.15)] transition-all duration-700">
              <div className="w-12 h-12 rounded-xl bg-[#F5A02E]/10 flex items-center justify-center text-[#F5A02E] mb-4 group-hover:bg-[#F5A02E] group-hover:text-[#0B2A3C] transition-all duration-500">
                <Globe size={24} />
              </div>
              <h2 className="text-xl font-black font-montserrat text-white mb-3 uppercase tracking-tighter">
                Our <span className="text-[#F5A02E]">Mission</span>
              </h2>
              <p className="text-gray-300 font-body text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                To deliver state-of-the-art air ventilation systems that cater to diverse industries and spaces, ensuring cleaner, healthier, and more comfortable environments for our clients.
              </p>
            </div>
          </div>

          {/* Certificate Column */}
          <div className="lg:col-span-6 relative">
            <div className="group relative bg-white p-6 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden transition-all duration-700 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B2A3C]/5" />
              <div className="relative aspect-[1536/954] w-full rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
                <Image
                  src="/certificated/certificate-1536x954.webp"
                  alt="SUV FANS Industry Certification"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="mt-6 flex items-center justify-between px-2">
                <div>
                  <h4 className="text-[#0B2A3C] font-black text-sm uppercase tracking-wider">Quality Assurance</h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Industry Certified Excellence</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <ShieldCheck className="text-green-600" size={20} />
                </div>
              </div>
            </div>
            {/* Decorative Accent */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-[#F5A02E]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* History Timeline Section - Premium Showcase */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Subtle Accent */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[10px] font-black text-[#2E86B8] uppercase tracking-[0.4em] mb-4 block"
              >
                Our Legacy
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black font-montserrat text-[#0B2A3C] uppercase tracking-tighter"
              >
                A Journey of <span className="text-[#2E86B8]">Excellence</span>
              </motion.h2>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-gray-400 font-bold text-xs uppercase tracking-widest"
            >
              <div className="h-px w-12 bg-gray-200" />
              Established 2021
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Connector Line for Desktop */}
                {i < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-100 z-0" />
                )}

                <div className="relative z-10 bg-white p-10 rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(46,134,184,0.1)] hover:border-[#2E86B8]/30 transition-all duration-700 flex flex-col h-full overflow-hidden">
                  {/* Decorative Background Icon */}
                  <item.icon className="absolute -right-4 -top-4 w-24 h-24 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-12" />

                  <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                      <span className="text-4xl font-black text-[#2E86B8] group-hover:text-[#0B2A3C] transition-colors duration-500">
                        {item.year}
                      </span>
                      <div className="h-1 w-8 bg-[#F5A02E] mt-2 rounded-full" />
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#0B2A3C] group-hover:bg-[#2E86B8] group-hover:text-white transition-all duration-500 shadow-inner">
                      <item.icon size={24} />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#0B2A3C] uppercase mb-4 tracking-tight leading-tight min-h-[3rem] flex items-center">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed font-body opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest group-hover:text-[#2E86B8] transition-colors">Milestone {i + 1}</span>
                    <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#F5A02E] transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values / Future Goals */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="bg-[#0B2A3C] rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2E86B8]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-[100px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white font-montserrat mb-8 uppercase tracking-tighter leading-tight">
                Committed to a <br />
                <span className="text-[#F5A02E]">Sustainable Future</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
                Our 2030 green initiative represents our dedication to environmental stewardship, aiming to make our entire manufacturing process carbon-neutral while delivering the highest efficiency air systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#F5A02E]">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Green Tech</div>
                    <div className="text-xs text-gray-500">Eco-friendly design</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#2E86B8]">
                    <Zap size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Efficiency</div>
                    <div className="text-xs text-gray-500">25% Energy reduction</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <History size={48} className="text-[#F5A02E] mx-auto mb-6 opacity-20" />
                  <p className="text-white/60 font-body italic text-lg leading-relaxed">
                    "From a small start in 2021 to a global vision for 2030, our journey is built on the trust of 4,000+ happy customers."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

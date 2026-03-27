'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Globe,
  Zap, 
  Heart,
  Send,
  Target,
  ShieldCheck,
  Star,
  Award,
  Download,
  GraduationCap,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const jobs = [
  {
    id: '1',
    title: 'Mechanical Design Engineer',
    department: 'Engineering',
    location: 'Bhiwadi, Rajasthan',
    type: 'Full-time',
    description: 'Lead the design and optimization of industrial fan components using advanced CAD/CFD software for high-efficiency air movement.'
  },
  {
    id: '2',
    title: 'Project Sales Manager',
    department: 'Sales & Marketing',
    location: 'Delhi NCR / Remote',
    type: 'Full-time',
    description: 'Identify and develop business opportunities for turnkey industrial ventilation projects and custom HVAC solutions.'
  },
  {
    id: '3',
    title: 'Production Supervisor',
    department: 'Manufacturing',
    location: 'Bhiwadi, Rajasthan',
    type: 'Full-time',
    description: 'Oversee high-precision assembly lines and ensure manufacturing quality standards meet AMCA and ISO certifications.'
  }
];

const CareersPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Hero Section - Matching Product & About Page Design */}
      <section className="relative bg-[#0B2A3C] text-white pt-[84px] md:pt-[104px] pb-20 overflow-hidden">
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
                  Join SUV FANS
                </span> 
                <h1 className="text-4xl text-white md:text-6xl lg:text-7xl font-black font-montserrat mb-6 leading-[1.1] uppercase">
                  Shape the Future of <br className="hidden md:block" /> 
                  <span className="text-[#2E86B8]">Air Technology</span>
                </h1>
                <p className="text-lg md:text-xl font-body text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We are looking for passionate engineers, innovators, and professionals to help us build the next generation of high-efficiency industrial ventilation systems.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <Button asChild size="lg" className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-black h-14 px-8 uppercase tracking-wide shadow-lg shadow-[#F5A02E]/20">
                    <Link href="#open-positions">
                      View Open Positions
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white/20 text-black hover:bg-white/10 font-black h-14 px-8 uppercase tracking-wide backdrop-blur-sm">
                    <Link href="#culture">
                      Our Culture
                    </Link>
                  </Button>
                </div>

                {/* Quick Stats Overlay */}
                <div className="mt-12 grid grid-cols-2 gap-8 max-w-md mx-auto lg:mx-0 border-t border-white/10 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2E86B8]/20 flex items-center justify-center text-[#2E86B8]">
                      <Users size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-white">200+</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">Team Members</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2E86B8]/20 flex items-center justify-center text-[#2E86B8]">
                      <Globe size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-white">5+</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-tight">Global Locations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - Research & Development choice */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full max-w-[450px] mx-auto">
                <div className="absolute inset-0 bg-[#2E86B8]/30 blur-[120px] rounded-full animate-pulse" />
                
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                    alt="Industrial Engineering Research"
                    fill
                    className="object-cover brightness-110 contrast-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2A3C]/40 via-transparent to-transparent" />
                </div>

                {/* Floating Badges */}
                {/* <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 hidden sm:flex items-center gap-4 animate-bounce-slow">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Rocket className="text-[#2E86B8]" size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Growth</p>
                    <p className="text-[#0B2A3C] font-black text-base">Career Accelerator</p>
                  </div>
                </div> */}

                {/* <div className="absolute -top-6 -right-6 bg-[#F5A02E] p-5 rounded-2xl shadow-2xl border border-white/20 hidden sm:block">
                  <GraduationCap className="text-[#0B2A3C]" size={24} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us - Values Section */}
      <section id="culture" className="py-24 container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-black text-[#2E86B8] uppercase tracking-[0.3em] mb-4 block">Our Culture</span>
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-[#0B2A3C] uppercase tracking-tighter mb-6">
            Why Build Your <span className="text-[#2E86B8]">Career Here?</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#F5A02E] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Innovation Hub", desc: "Work at the cutting edge of fluid dynamics and sustainable engineering solutions." },
            { icon: Heart, title: "Growth Mindset", desc: "Continuous learning with dedicated mentorship from industry veterans." },
            { icon: ShieldCheck, title: "Stable Legacy", desc: "Join a trusted, ISO-certified leader with decades of industrial expertise." }
          ].map((v, idx) => (
            <div key={idx} className="group bg-white p-10 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(46,134,184,0.1)] transition-all duration-700 text-center">
              <div className="w-20 h-20 rounded-[1.5rem] bg-[#2E86B8]/10 flex items-center justify-center text-[#2E86B8] mb-8 group-hover:bg-[#2E86B8] group-hover:text-white transition-all duration-500 mx-auto">
                <v.icon size={36} />
              </div>
              <h3 className="text-2xl font-black font-montserrat text-[#0B2A3C] mb-4 uppercase tracking-tighter">
                {v.title}
              </h3>
              <p className="text-gray-500 font-body text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions Grid */}
      <section id="open-positions" className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black text-[#2E86B8] uppercase tracking-[0.4em] mb-4 block">Current Openings</span>
              <h2 className="text-4xl md:text-5xl font-black font-montserrat text-[#0B2A3C] uppercase tracking-tighter">
                Join Our <span className="text-[#2E86B8]">Expert Team</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 text-gray-400 font-bold text-xs uppercase tracking-widest">
              <div className="h-px w-12 bg-gray-200" />
              {jobs.length} Active Roles
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ y: -5 }}
                className="group bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(46,134,184,0.1)] hover:border-[#2E86B8]/30 transition-all duration-700 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
              >
                <div className="space-y-4 lg:max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-[#2E86B8]/30" />
                    <span className="text-[10px] font-black text-[#2E86B8] uppercase tracking-[0.25em]">
                      {job.department}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black font-montserrat text-[#0B2A3C] group-hover:text-[#2E86B8] transition-colors uppercase tracking-tight">
                    {job.title}
                  </h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed line-clamp-2">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-6 pt-2">
                    <span className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <MapPin size={14} className="text-[#2E86B8]" /> {job.location}
                    </span>
                    <span className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <Clock size={14} className="text-[#2E86B8]" /> {job.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button asChild className="bg-[#0B2A3C] text-white py-4 px-8 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#2E86B8] transition-all duration-300 shadow-lg shadow-[#0B2A3C]/10 h-14">
                    <Link href="#apply">
                      Apply For Role <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Apply Form Section */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div id="apply" className="bg-[#0B2A3C] rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2E86B8]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-[100px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white font-montserrat mb-8 uppercase tracking-tighter leading-tight">
                Send Us Your <br />
                <span className="text-[#F5A02E]">Resume Today</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
                Don't see a role that fits? We are always looking for exceptional talent. Submit your details and our HR team will keep you in mind for future opportunities.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#F5A02E]">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Top Tier Benefits</div>
                    <div className="text-xs text-gray-500">Health, Growth & Stability</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#2E86B8]">
                    <Star size={24} />
                  </div>
                  <div>
                    <div className="text-white font-bold">Award Winning Culture</div>
                    <div className="text-xs text-gray-500">Collaborative Engineering</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-[#0B2A3C] mb-4 uppercase">Application Sent!</h3>
                  <p className="text-gray-500 mb-8">Thank you for your interest in SUV FANS. Our team will review your profile shortly.</p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-[#0B2A3C] text-white hover:bg-[#2E86B8]">
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                  <div className="grid grid-cols-1 gap-5">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-6 py-4 text-[#0B2A3C] placeholder:text-gray-400 focus:outline-none focus:border-[#2E86B8] transition-all font-bold text-sm"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      required
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-6 py-4 text-[#0B2A3C] placeholder:text-gray-400 focus:outline-none focus:border-[#2E86B8] transition-all font-bold text-sm"
                    />
                    <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-6 py-4 text-gray-400 focus:outline-none focus:border-[#2E86B8] transition-all font-bold text-sm appearance-none">
                      <option value="">Interested Department</option>
                      <option value="engineering">Engineering</option>
                      <option value="sales">Sales & Marketing</option>
                      <option value="manufacturing">Manufacturing</option>
                    </select>
                  </div>
                  
                  <div className="relative">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-200 border-dashed rounded-2xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Download size={24} className="text-gray-400 mb-2" />
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center px-4">Click to upload CV (PDF/DOC)</p>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-[#0B2A3C] hover:bg-[#2E86B8] text-white h-16 text-xs font-black uppercase rounded-xl transition-all shadow-xl shadow-[#0B2A3C]/10 tracking-widest">
                    Submit Application
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;

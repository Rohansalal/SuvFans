'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Zap, 
  Heart,
  Send
} from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    id: '1',
    title: 'Mechanical Design Engineer',
    department: 'Engineering',
    location: 'Bhiwadi, Rajasthan',
    type: 'Full-time',
    description: 'Lead the design and optimization of industrial fan components using CAD/CFD software.'
  },
  {
    id: '2',
    title: 'Project Sales Manager',
    department: 'Sales & Marketing',
    location: 'Delhi NCR / Remote',
    type: 'Full-time',
    description: 'Identify and develop business opportunities for turnkey industrial ventilation projects.'
  },
  {
    id: '3',
    title: 'Production Supervisor',
    department: 'Manufacturing',
    location: 'Bhiwadi, Rajasthan',
    type: 'Full-time',
    description: 'Oversee assembly lines and ensure manufacturing quality standards are met.'
  }
];

const CareersPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="bg-[#F8FAFC] pb-24">
      {/* Header */}
      <section className="bg-[#0A2E5C] pt-20 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2 mb-6 uppercase tracking-widest font-bold">
              Join the Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Build Your Career with <span className="text-primary italic">SUV FANS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We are looking for passionate engineers and professionals to help us shape the future of air movement technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Zap, title: "Innovation First", desc: "We encourage creative problem solving and new engineering approaches." },
            { icon: Heart, title: "People Centric", desc: "Our employees are our greatest asset. We invest in your growth and safety." },
            { icon: Users, title: "Collaborative", desc: "Work with veteran engineers and learn the art of industrial ventilation." }
          ].map((v, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl text-center group hover:border-primary/20 transition-all duration-500">
               <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <v.icon size={32} />
               </div>
               <h3 className="text-xl font-bold text-[#0A2E5C] mb-4 uppercase italic">{v.title}</h3>
               <p className="text-gray-500 font-medium leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-[#0A2E5C] mb-12 uppercase italic border-l-8 border-primary pl-6">
            Current Openings
          </h2>
          
          <div className="space-y-6 mb-24">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary/20 transition-all"
              >
                <div className="space-y-3">
                  <Badge variant="secondary" className="bg-[#0A2E5C]/5 text-[#0A2E5C]">{job.department}</Badge>
                  <h3 className="text-2xl font-bold text-[#0A2E5C] group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary" /> {job.type}</span>
                  </div>
                </div>
                <Button asChild className="bg-[#0A2E5C] hover:bg-primary text-white px-8 h-12 rounded-xl transition-all shadow-xl shadow-[#0A2E5C]/10">
                  <Link href="#apply">Apply Now <ArrowRight size={16} className="ml-2" /></Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Quick Apply Form */}
          <div id="apply" className="bg-[#0A2E5C] p-10 md:p-16 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase italic">Application Sent!</h3>
                <p className="text-gray-300 text-lg mb-8">Our HR team will review your profile and get back to you if there's a match.</p>
                <Button onClick={() => setIsSubmitted(false)} className="bg-white text-[#0A2E5C] hover:bg-primary hover:text-white">
                  Submit Another
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-black mb-4 uppercase italic leading-none">Quick Apply</h2>
                <p className="text-gray-300 mb-12 font-medium">Don't see a role that fits? Send us your CV anyway!</p>
                
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required
                      className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-all font-bold"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      required
                      className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-all font-bold"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="Phone Number" 
                      required
                      className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-all font-bold"
                    />
                    <select className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white/30 focus:outline-none focus:border-primary transition-all font-bold appearance-none">
                      <option value="">Select Role</option>
                      <option value="engineering">Engineering</option>
                      <option value="sales">Sales</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="relative">
                    <div className="bg-white/5 border border-dashed border-white/20 rounded-2xl p-8 text-center hover:bg-white/10 transition-all cursor-pointer">
                       <Send size={24} className="mx-auto mb-4 text-primary" />
                       <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Click to upload Resume/CV (PDF/DOC)</p>
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-white hover:text-[#0A2E5C] text-white h-16 text-lg font-black uppercase rounded-2xl transition-all shadow-xl shadow-primary/20">
                    Submit Application
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;

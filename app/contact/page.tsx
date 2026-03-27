'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Globe, 
  Zap, 
  ArrowRight,
  HeadphonesIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { COMPANY_CONFIG } from '@/lib/config';
import { PRODUCT_CATEGORIES } from '@/lib/products';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  city?: string;
  category?: string;
  message?: string;
}

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    category: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.company || formData.company.length < 2) {
      newErrors.company = 'Company name is required';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid business email';
    }
    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = 'Valid phone number is required';
    }
    if (!formData.city || formData.city.length < 2) {
      newErrors.city = 'City name is required';
    }
    if (!formData.category) {
      newErrors.category = 'Please select an inquiry category';
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Please provide more details (min 10 chars)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Hero Section - Premium Industrial Branding */}
      <section className="relative bg-[#0B2A3C] text-white pt-[84px] md:pt-[104px] pb-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2E86B8]/20 -skew-x-12 translate-x-1/4" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1 rounded-full bg-[#F5A02E] text-[#0B2A3C] text-[10px] font-black uppercase tracking-[0.2em] mb-6"
            >
              Connect with SUV FANS
            </motion.span> 
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-4xl md:text-6xl lg:text-7xl font-black font-montserrat mb-6 leading-[1.1] uppercase tracking-tighter"
            >
              Engineering Support & <br className="hidden md:block" /> 
              <span className="text-[#2E86B8]">Technical Inquiries</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-body text-gray-300 mb-0 leading-relaxed max-w-2xl"
            >
              Have a complex ventilation requirement or need a customized solution? Our expert engineering team is ready to assist you from concept to commissioning.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-16 relative z-30 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            
            {/* Direct Contact Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80"
            >
              <h3 className="text-xl font-black font-montserrat text-[#0B2A3C] mb-8 uppercase tracking-tight flex items-center gap-3">
                <HeadphonesIcon size={20} className="text-[#F5A02E]" />
                Direct Channels
              </h3>

              <div className="space-y-8">
                {/* Phone */}
                <div className="group cursor-pointer">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#2E86B8]/10 flex items-center justify-center text-[#2E86B8] group-hover:bg-[#2E86B8] group-hover:text-white transition-all duration-300">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Call Support</p>
                      <a href={`tel:${COMPANY_CONFIG.phone}`} className="text-lg font-black text-[#0B2A3C] hover:text-[#2E86B8] transition-colors">
                        {COMPANY_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group cursor-pointer">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#2E86B8]/10 flex items-center justify-center text-[#2E86B8] group-hover:bg-[#2E86B8] group-hover:text-white transition-all duration-300">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Desk</p>
                      <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-lg font-black text-[#0B2A3C] hover:text-[#2E86B8] transition-colors break-all">
                        {COMPANY_CONFIG.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="group">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400">
                      <Clock size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Working Hours</p>
                      <p className="text-[#0B2A3C] font-bold text-sm">
                        Mon – Sat: 09:00 - 18:00 IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B2A3C] p-8 rounded-[2rem] shadow-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E86B8]/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
              
              <h3 className="text-xl font-black font-montserrat text-white mb-6 uppercase tracking-tight flex items-center gap-3 relative z-10">
                <MapPin size={20} className="text-[#F5A02E]" />
                Headquarters
              </h3>
              
              <div className="relative z-10">
                <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
                  {COMPANY_CONFIG.address}
                </p>
                <div className="flex items-center gap-2 text-[#F5A02E] font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                  <span>View on Google Maps</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>

            {/* Quick Support Links Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80"
            >
              <h3 className="text-sm font-black text-[#0B2A3C] uppercase tracking-widest mb-6">Technical Resources</h3>
              <div className="space-y-4">
                {[
                  { label: 'Download Catalog', icon: Zap },
                  { label: 'Engineering Guide', icon: ShieldCheck },
                  { label: 'Project Portfolio', icon: Globe }
                ].map((item, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#2E86B8]/30 hover:bg-blue-50/30 transition-all text-left group">
                    <div className="flex items-center gap-3">
                      <item.icon size={16} className="text-[#2E86B8]" />
                      <span className="text-xs font-bold text-[#0B2A3C]">{item.label}</span>
                    </div>
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-[#2E86B8] transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Form Section */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 h-full relative overflow-hidden"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                   <div className="w-24 h-24 rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-8 shadow-inner">
                      <CheckCircle2 size={56} />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-black font-montserrat text-[#0B2A3C] mb-4 uppercase tracking-tighter">Inquiry Submitted!</h2>
                   <p className="text-gray-500 max-w-sm mb-10 text-lg">
                     Thank you for reaching out. An engineering expert will contact you within 24 business hours.
                   </p>
                   <Button 
                    onClick={() => setIsSubmitted(false)} 
                    className="bg-[#0B2A3C] hover:bg-[#2E86B8] text-white px-10 h-14 rounded-xl font-black uppercase text-xs tracking-widest transition-all"
                   >
                     Send Another Request
                   </Button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="w-1.5 h-8 bg-[#F5A02E] rounded-full" />
                    <h3 className="text-2xl md:text-3xl font-black font-montserrat text-[#0B2A3C] uppercase tracking-tighter">Send an Engineering Request</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-[#0B2A3C] uppercase tracking-[0.15em] ml-1">Full Name *</label>
                        <Input 
                          placeholder="e.g. John Anderson" 
                          className={`h-14 bg-gray-50/50 border-2 rounded-2xl focus:ring-0 px-6 font-bold text-[#0B2A3C] transition-all ${errors.name ? 'border-red-100 focus:border-red-300' : 'border-gray-100 focus:border-[#2E86B8]'}`}
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.name}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-[#0B2A3C] uppercase tracking-[0.15em] ml-1">Company Name *</label>
                        <Input 
                          placeholder="e.g. Global Industrial Corp" 
                          className={`h-14 bg-gray-50/50 border-2 rounded-2xl focus:ring-0 px-6 font-bold text-[#0B2A3C] transition-all ${errors.company ? 'border-red-100 focus:border-red-300' : 'border-gray-100 focus:border-[#2E86B8]'}`}
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                        />
                        {errors.company && <p className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.company}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-[#0B2A3C] uppercase tracking-[0.15em] ml-1">Business Email *</label>
                        <Input 
                          placeholder="john@company.com" 
                          className={`h-14 bg-gray-50/50 border-2 rounded-2xl focus:ring-0 px-6 font-bold text-[#0B2A3C] transition-all ${errors.email ? 'border-red-100 focus:border-red-300' : 'border-gray-100 focus:border-[#2E86B8]'}`}
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                        />
                        {errors.email && <p className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.email}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-[#0B2A3C] uppercase tracking-[0.15em] ml-1">Phone Number *</label>
                        <Input 
                          placeholder="+91-XXXXX-XXXXX" 
                          className={`h-14 bg-gray-50/50 border-2 rounded-2xl focus:ring-0 px-6 font-bold text-[#0B2A3C] transition-all ${errors.phone ? 'border-red-100 focus:border-red-300' : 'border-gray-100 focus:border-[#2E86B8]'}`}
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                        />
                        {errors.phone && <p className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-[#0B2A3C] uppercase tracking-[0.15em] ml-1">Location / City *</label>
                        <Input 
                          placeholder="e.g. New Delhi" 
                          className={`h-14 bg-gray-50/50 border-2 rounded-2xl focus:ring-0 px-6 font-bold text-[#0B2A3C] transition-all ${errors.city ? 'border-red-100 focus:border-red-300' : 'border-gray-100 focus:border-[#2E86B8]'}`}
                          value={formData.city}
                          onChange={(e) => handleChange('city', e.target.value)}
                        />
                        {errors.city && <p className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.city}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-[#0B2A3C] uppercase tracking-[0.15em] ml-1">Solution Category *</label>
                        <Select value={formData.category} onValueChange={(value) => handleChange('category', value || '')}>
                          <SelectTrigger className={`h-14 bg-gray-50/50 border-2 rounded-2xl focus:ring-0 px-6 font-bold text-[#0B2A3C] transition-all ${errors.category ? 'border-red-100 focus:border-red-300' : 'border-gray-100 focus:border-[#2E86B8]'}`}>
                            <SelectValue placeholder="Select interest" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl border-2 border-gray-100 shadow-2xl p-2 bg-white">
                            {PRODUCT_CATEGORIES.map((cat) => (
                              <SelectItem key={cat.slug} value={cat.slug} className="rounded-lg font-bold text-[#0B2A3C] uppercase text-[10px] tracking-widest p-3">{cat.name}</SelectItem>
                            ))}
                            <SelectItem value="custom" className="rounded-lg font-bold text-[#2E86B8] uppercase text-[10px] tracking-widest p-3">Custom Requirement</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.category && <p className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.category}</p>}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-[#0B2A3C] uppercase tracking-[0.15em] ml-1">Technical Requirement Details *</label>
                      <Textarea 
                        placeholder="Please provide capacity, pressure, or application details..." 
                        className={`min-h-[160px] bg-gray-50/50 border-2 rounded-3xl focus:ring-0 p-6 font-bold text-[#0B2A3C] transition-all resize-none ${errors.message ? 'border-red-100 focus:border-red-300' : 'border-gray-100 focus:border-[#2E86B8]'}`}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                      />
                      {errors.message && <p className="text-[10px] font-bold text-red-500 ml-1 uppercase">{errors.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] h-16 text-xs font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-[#F5A02E]/20 transition-all active:scale-[0.98] disabled:opacity-70" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-[#0B2A3C]/30 border-t-[#0B2A3C] rounded-full animate-spin" />
                          Processing Request...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} />
                          Dispatch Request
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>

        {/* Professional Map Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-white p-4 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
             <div className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.868352222728!2d76.84074817551044!3d28.2417400758784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d39e99a84b39b%3A0x673193e50c41031c!2sSUV%20FANS%20LLP!5e0!3m2!1sen!2sin!4v1711651234567!5m2!1sen!2sin"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 grayscale contrast-125 brightness-100"
                 title="SUV FANS Location"
               ></iframe>
               
               {/* Overlay Map Badge */}
               <div className="absolute top-8 left-8 bg-[#0B2A3C] text-white p-6 rounded-3xl shadow-2xl border border-white/10 hidden md:block max-w-xs">
                 <h4 className="text-lg font-black font-montserrat uppercase tracking-tight mb-2">Visit Our Works</h4>
                 <p className="text-gray-400 text-xs leading-relaxed mb-4">
                   Experience our state-of-the-art manufacturing facility in Bhiwadi.
                 </p>
                 <Button asChild variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10 font-bold text-[10px] uppercase">
                   <a href="https://maps.app.goo.gl/uX6Y3W5K7X5X5X5X5" target="_blank" rel="noopener noreferrer">
                     Get Directions
                   </a>
                 </Button>
               </div>
             </div>
          </div>
        </motion.section>

        {/* Global Reach / Trust Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Global Standards', desc: 'Compliance with AMCA, ISO, and international safety protocols.', icon: Globe },
            { title: 'Response SLA', desc: 'Guaranteed technical response within 24 business hours.', icon: MessageSquare },
            { title: 'After-Sales', desc: 'Comprehensive pan-India service and technical maintenance support.', icon: ShieldCheck }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 bg-white/50 rounded-[2rem] border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-[#2E86B8]/10 flex items-center justify-center text-[#2E86B8] mx-auto mb-6">
                <item.icon size={24} />
              </div>
              <h4 className="text-[#0B2A3C] font-black uppercase text-sm mb-2 tracking-tight">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed font-body">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContactPage;

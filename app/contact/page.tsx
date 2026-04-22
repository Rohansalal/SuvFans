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
  ArrowRight,
  HeadphonesIcon,
  Building2,
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
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '', company: '', email: '', phone: '', city: '', category: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = 'Full name is required';
    if (!formData.company || formData.company.length < 2) newErrors.company = 'Company name is required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid business email required';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid phone number required';
    if (!formData.city || formData.city.length < 2) newErrors.city = 'City is required';
    if (!formData.category) newErrors.category = 'Please select a category';
    if (!formData.message || formData.message.length < 10) newErrors.message = 'Please add more details (min 10 chars)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
      } else {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field: keyof FormErrors) =>
    `h-11 border rounded-lg px-4 text-sm font-medium text-[#0B2A3C] bg-[#F8FAFC] focus:ring-0 transition-colors ${
      errors[field] ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-[#2E86B8]'
    }`;

  return (
    <div className="bg-[#F8FAFC] min-h-screen">

      {/* ── Hero ── */}
      <section className="relative bg-[#0B2A3C] text-white pt-12 md:pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2E86B8]/20 -skew-x-12 translate-x-1/4" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#F5A02E] text-[#0B2A3C] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Connect with SUV FANS
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-white mb-6 leading-[1.05] uppercase tracking-tight">
              Engineering Support &amp;<br />
              <span className="text-[#2E86B8]">Technical Inquiries</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Have a complex ventilation requirement or need a customised solution? Our expert engineering team is ready to assist you from concept to commissioning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main grid ── */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: contact info */}
          <div className="lg:col-span-4 space-y-5 order-2 lg:order-1">

            {/* Direct channels */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
            >
              <h3 className="text-sm font-black text-[#0B2A3C] uppercase tracking-widest mb-6 flex items-center gap-2">
                <HeadphonesIcon size={16} className="text-[#F5A02E]" /> Direct Channels
              </h3>
              <div className="space-y-6">
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#2E86B8]/10 flex items-center justify-center text-[#2E86B8] group-hover:bg-[#2E86B8] group-hover:text-white transition-all shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Call Support</p>
                    <p className="text-sm font-black text-[#0B2A3C] group-hover:text-[#2E86B8] transition-colors">{COMPANY_CONFIG.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${COMPANY_CONFIG.email}`} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#2E86B8]/10 flex items-center justify-center text-[#2E86B8] group-hover:bg-[#2E86B8] group-hover:text-white transition-all shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Email Desk</p>
                    <p className="text-sm font-black text-[#0B2A3C] group-hover:text-[#2E86B8] transition-colors truncate">{COMPANY_CONFIG.email}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">WhatsApp</p>
                    <p className="text-sm font-black text-[#0B2A3C] group-hover:text-green-600 transition-colors">Chat Now</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Working Hours</p>
                    <p className="text-sm font-bold text-[#0B2A3C]">Mon – Sat · 09:00 – 18:00 IST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Address — dark card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B2A3C] rounded-2xl border border-white/5 shadow-lg p-7 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E86B8]/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-5 flex items-center gap-2 relative z-10">
                <MapPin size={16} className="text-[#F5A02E]" /> Works
              </h3>
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-4">
                  <Building2 size={15} className="text-gray-500 mt-0.5 shrink-0" />
                  <p className="text-gray-400 text-sm leading-relaxed">{COMPANY_CONFIG.address}</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/uX6Y3W5K7X5X5X5X5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F5A02E] font-black text-[10px] uppercase tracking-widest hover:gap-3 transition-all"
                >
                  Get Directions <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
            >
              <h3 className="text-sm font-black text-[#0B2A3C] uppercase tracking-widest mb-5">Why Choose Us</h3>
              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, label: 'ISO 9001:2015 Certified', sub: 'Quality management assured' },
                  { icon: Globe, label: 'AMCA Standards', sub: 'Globally compliant products' },
                  { icon: CheckCircle2, label: '24hr Response SLA', sub: 'Technical reply guaranteed' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0B2A3C]/5 flex items-center justify-center shrink-0">
                      <item.icon size={15} className="text-[#2E86B8]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-[#0B2A3C] uppercase tracking-wide">{item.label}</p>
                      <p className="text-[10px] text-gray-400 font-medium">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h2 className="text-2xl font-black font-heading text-[#0B2A3C] mb-3 uppercase tracking-tight">Inquiry Submitted!</h2>
                  <p className="text-gray-500 max-w-sm mb-8 text-sm leading-relaxed">
                    Thank you for reaching out. An engineering expert will contact you within 24 business hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#0B2A3C] hover:bg-[#2E86B8] text-white h-11 px-8 rounded-lg font-black uppercase text-[10px] tracking-widest transition-colors"
                  >
                    Send Another Request
                  </Button>
                </div>
              ) : (
                <>
                  {/* Form header */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                    <div className="w-1 h-7 bg-[#F5A02E] rounded-full" />
                    <div>
                      <h3 className="text-xl font-black font-heading text-[#0B2A3C] uppercase tracking-tight">Send an Engineering Request</h3>
                      <p className="text-gray-400 text-xs mt-0.5">All fields marked * are required</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Full Name *</label>
                        <Input
                          placeholder="e.g. Rajesh Kumar"
                          className={inputClass('name')}
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                        />
                        {errors.name && <p className="text-[10px] font-bold text-red-500 uppercase tracking-wide">{errors.name}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Company Name *</label>
                        <Input
                          placeholder="e.g. Industrial Corp Ltd."
                          className={inputClass('company')}
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                        />
                        {errors.company && <p className="text-[10px] font-bold text-red-500 uppercase tracking-wide">{errors.company}</p>}
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Business Email *</label>
                        <Input
                          type="email"
                          placeholder="email@company.com"
                          className={inputClass('email')}
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                        />
                        {errors.email && <p className="text-[10px] font-bold text-red-500 uppercase tracking-wide">{errors.email}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Phone Number *</label>
                        <Input
                          placeholder="+91 98765 43210"
                          className={inputClass('phone')}
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                        />
                        {errors.phone && <p className="text-[10px] font-bold text-red-500 uppercase tracking-wide">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Location / City *</label>
                        <Input
                          placeholder="e.g. New Delhi"
                          className={inputClass('city')}
                          value={formData.city}
                          onChange={(e) => handleChange('city', e.target.value)}
                        />
                        {errors.city && <p className="text-[10px] font-bold text-red-500 uppercase tracking-wide">{errors.city}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Solution Category *</label>
                        <Select value={formData.category} onValueChange={(v) => handleChange('category', v ?? '')}>
                          <SelectTrigger className={`h-11 border rounded-lg px-4 text-sm font-medium bg-[#F8FAFC] focus:ring-0 transition-colors ${errors.category ? 'border-red-300' : 'border-gray-200 focus:border-[#2E86B8]'}`}>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl border border-gray-100 shadow-xl p-1.5 bg-white z-50">
                            {PRODUCT_CATEGORIES.map((cat) => (
                              <SelectItem key={cat.slug} value={cat.slug} className="rounded-lg text-[11px] font-bold text-[#0B2A3C] uppercase tracking-widest py-2.5 px-3">
                                {cat.name}
                              </SelectItem>
                            ))}
                            <SelectItem value="custom" className="rounded-lg text-[11px] font-bold text-[#2E86B8] uppercase tracking-widest py-2.5 px-3">
                              Custom Requirement
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.category && <p className="text-[10px] font-bold text-red-500 uppercase tracking-wide">{errors.category}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Technical Requirements *</label>
                      <Textarea
                        placeholder="Describe your application — capacity needed, static pressure, installation type, environment conditions..."
                        className={`min-h-[140px] border rounded-lg p-4 text-sm font-medium text-[#0B2A3C] bg-[#F8FAFC] focus:ring-0 resize-none transition-colors ${errors.message ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-[#2E86B8]'}`}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                      />
                      {errors.message && <p className="text-[10px] font-bold text-red-500 uppercase tracking-wide">{errors.message}</p>}
                    </div>

                    {submitError && (
                      <div className="p-3.5 rounded-lg bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wide">
                        {submitError}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#0B2A3C] hover:bg-[#F5A02E] hover:text-[#0B2A3C] text-white h-12 font-black text-[11px] uppercase tracking-widest rounded-lg transition-colors"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={15} /> Submit Engineering Request
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="container mx-auto px-4 md:px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <div className="relative w-full h-[440px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.868352222728!2d76.84074817551044!3d28.2417400758784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d39e99a84b39b%3A0x673193e50c41031c!2sSUV%20FANS%20LLP!5e0!3m2!1sen!2sin!4v1711651234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale"
              title="SUV FANS Location"
            />
            <div className="absolute top-6 left-6 bg-[#0B2A3C] text-white p-5 rounded-2xl shadow-xl border border-white/10 hidden md:block max-w-[260px]">
              <h4 className="text-sm font-black uppercase tracking-tight mb-1.5">Visit Our Works</h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{COMPANY_CONFIG.address}</p>
              <a
                href="https://maps.app.goo.gl/uX6Y3W5K7X5X5X5X5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#F5A02E] font-black text-[10px] uppercase tracking-widest hover:gap-3 transition-all"
              >
                Get Directions <ArrowRight size={11} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
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
      newErrors.name = 'Name is required';
    }
    if (!formData.company || formData.company.length < 2) {
      newErrors.company = 'Company name is required';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = 'Valid phone number is required';
    }
    if (!formData.city || formData.city.length < 2) {
      newErrors.city = 'City is required';
    }
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
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
    
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="bg-[#F8FAFC] pb-24">
      <section className="bg-[#0A2E5C] pt-20 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Have a project in mind? Our experts are here to help you design and implement the perfect air movement solution.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-8">
               <h3 className="text-2xl font-heading font-bold text-[#0A2E5C] mb-8">Contact Information</h3>
               
               <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Our Location</div>
                   <div className="text-sm font-bold text-[#0A2E5C] leading-relaxed">
                     {COMPANY_CONFIG.address}
                   </div>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                   <Phone size={24} />
                 </div>
                 <div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</div>
                   <a href={`tel:${COMPANY_CONFIG.phone}`} className="text-lg font-bold text-[#0A2E5C] hover:text-accent transition-colors">
                     {COMPANY_CONFIG.phone}
                   </a>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                   <Mail size={24} />
                 </div>
                 <div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</div>
                   <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-lg font-bold text-[#0A2E5C] hover:text-accent transition-colors">
                     {COMPANY_CONFIG.email}
                   </a>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                   <Clock size={24} />
                 </div>
                 <div>
                   <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Business Hours</div>
                   <div className="text-sm font-bold text-[#0A2E5C]">
                     Monday – Saturday: 9:00 AM – 6:00 PM
                   </div>
                 </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.523456789!2d76.85!3d28.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDEyJzAwLjAiTiA3NsKwNTElMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                 width="100%"
                 height="400"
                 style={{ border: 0 }}
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 className="w-full h-full rounded-2xl"
                 title="SUV FANS Location"
               ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl h-full">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                   <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                      <CheckCircle2 size={48} />
                   </div>
                   <h2 className="text-3xl font-heading font-bold text-[#0A2E5C] mb-4">Message Sent Successfully!</h2>
                   <p className="text-gray-500 max-w-sm mb-8">
                     Thank you for reaching out. Our team will get back to you within 24 business hours.
                   </p>
                   <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-[#0A2E5C] text-[#0A2E5C]">
                     Send Another Message
                   </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-heading font-bold text-[#0A2E5C] mb-8">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[#0A2E5C] font-bold">Full Name *</label>
                        <Input 
                          placeholder="John Doe" 
                          className="h-12"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                        />
                        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[#0A2E5C] font-bold">Company Name *</label>
                        <Input 
                          placeholder="Industrial Solutions Ltd" 
                          className="h-12"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                        />
                        {errors.company && <p className="text-xs text-red-500">{errors.company}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[#0A2E5C] font-bold">Email Address *</label>
                        <Input 
                          placeholder="john@company.com" 
                          className="h-12"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[#0A2E5C] font-bold">Phone Number *</label>
                        <Input 
                          placeholder="+91 XXXXX XXXXX" 
                          className="h-12"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                        />
                        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[#0A2E5C] font-bold">City *</label>
                        <Input 
                          placeholder="Bhiwadi" 
                          className="h-12"
                          value={formData.city}
                          onChange={(e) => handleChange('city', e.target.value)}
                        />
                        {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[#0A2E5C] font-bold">Interest Category *</label>
                        <Select value={formData.category} onValueChange={(value) => handleChange('category', value || '')}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {PRODUCT_CATEGORIES.map((cat) => (
                              <SelectItem key={cat.slug} value={cat.slug}>{cat.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.category && <p className="text-xs text-red-500">{errors.category}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[#0A2E5C] font-bold">Your Message *</label>
                      <Textarea 
                        placeholder="Please describe your requirements..." 
                        className="min-h-[150px] resize-none"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                      />
                      {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                    </div>

                    <Button type="submit" className="w-full bg-[#F97316] hover:bg-[#EA580C] h-14 text-lg font-bold" disabled={isLoading}>
                      <Send className="mr-2" size={20} />
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

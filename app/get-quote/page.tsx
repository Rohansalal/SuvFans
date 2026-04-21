'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, ClipboardCheck, ArrowRight, Phone, Mail, Clock, Shield } from 'lucide-react';
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/lib/products';
import { COMPANY_CONFIG } from '@/lib/config';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  category: z.string().min(1, "Please select a category"),
  product: z.string().optional(),
  capacity: z.string().min(1, "Required capacity is required"),
  application: z.string().min(5, "Application details are required"),
  quantity: z.string().min(1, "Quantity is required"),
  timeline: z.string().min(1, "Please select a timeline"),
  notes: z.string().optional(),
});

const GetQuotePage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      category: "",
      product: "",
      capacity: "",
      application: "",
      quantity: "1",
      timeline: "",
      notes: "",
    },
  });

  const filteredProducts = PRODUCTS.filter(p => p.categorySlug === selectedCategory);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-[#F4F6F8] pb-24">
      {/* Hero Section */}
      <section className="bg-[#0B2A3C] pt-24 pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2E86B8" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="font-body text-[#2E86B8] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Get Free Consultation
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Request a <span className="text-[#F5A02E]">Quote</span>
            </h1>
            <p className="font-body text-lg text-[#D1D5DB] max-w-2xl mx-auto leading-relaxed">
              Fill out the form below with your technical requirements. Our engineering team will provide a detailed proposal within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-8 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-sm border-2 border-[#D1D5DB] shadow-2xl">
            {isSubmitted ? (
               <div className="text-center py-12">
                 <motion.div
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ duration: 0.5 }}
                 >
                   <div className="w-24 h-24 rounded-full bg-[#F5A02E]/10 text-[#F5A02E] flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={56} />
                   </div>
                 </motion.div>
                 <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B2A3C] mb-6">Quote Request Received!</h2>
                 <p className="font-body text-[#6B7280] text-lg max-w-lg mx-auto mb-10 leading-relaxed">
                   We have received your technical requirements. Our engineering team is reviewing your request and will provide a detailed quotation shortly.
                 </p>
                 <Button onClick={() => setIsSubmitted(false)} variant="outline" className="font-heading border-2 border-[#0B2A3C] text-[#0B2A3C] hover:bg-[#0B2A3C] hover:text-white h-12 px-8 font-bold">
                   Request Another Quote
                 </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded bg-[#0B2A3C] flex items-center justify-center text-[#F5A02E]">
                      <ClipboardCheck size={28} />
                   </div>
                   <div>
                     <h3 className="font-heading text-xl font-bold text-[#0B2A3C]">Technical Inquiry Form</h3>
                     <p className="font-body text-sm text-[#6B7280]">Complete all required fields for accurate quote</p>
                   </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Contact Details */}
                    <div>
                      <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#F5A02E] border-b border-[#D1D5DB] pb-2 mb-6">Contact Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-[#0B2A3C] font-semibold">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="font-body h-12 bg-[#F4F6F8] border-[#D1D5DB]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-[#0B2A3C] font-semibold">Company Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Industrial Corp" className="font-body h-12 bg-[#F4F6F8] border-[#D1D5DB]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-[#0B2A3C] font-semibold">Email Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="john@company.com" className="font-body h-12 bg-[#F4F6F8] border-[#D1D5DB]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-[#0B2A3C] font-semibold">Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 XXXXX XXXXX" className="font-body h-12 bg-[#F4F6F8] border-[#D1D5DB]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-[#0B2A3C] font-semibold">City *</FormLabel>
                              <FormControl>
                                <Input placeholder="Bhiwadi" className="font-body h-12 bg-[#F4F6F8] border-[#D1D5DB]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-[#0B2A3C] font-semibold">State *</FormLabel>
                              <FormControl>
                                <Input placeholder="Rajasthan" className="font-body h-12 bg-[#F4F6F8] border-[#D1D5DB]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Requirement Details */}
                    <div>
                      <h4 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#F5A02E] border-b border-[#D1D5DB] pb-2 mb-6">Requirement Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-[#0B2A3C] font-semibold">Product Category *</FormLabel>
                              <Select 
                                onValueChange={(val) => {
                                  field.onChange(val);
                                  setSelectedCategory(val);
                                }} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="font-body h-12 bg-[#F4F6F8] border-[#D1D5DB]">
                                    <SelectValue placeholder="Select Category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {PRODUCT_CATEGORIES.map((cat) => (
                                    <SelectItem key={cat.slug} value={cat.slug}>{cat.name}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="product"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-[#0B2A3C] font-semibold">Specific Product (Optional)</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="font-body h-12 bg-[#F4F6F8] border-[#D1D5DB]">
                                    <SelectValue placeholder="Select Product" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {filteredProducts.map((p) => (
                                    <SelectItem key={p.slug} value={p.slug}>{p.name}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="capacity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-[#0B2A3C] font-semibold">Required Capacity (CMH) *</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. 15000" className="font-body h-12 bg-[#F4F6F8] border-[#D1D5DB]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="quantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-[#0B2A3C] font-semibold">Quantity *</FormLabel>
                              <FormControl>
                                <Input type="number" min="1" className="font-body h-12 bg-[#F4F6F8] border-[#D1D5DB]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-[#0B2A3C] font-semibold">Required Timeline *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="font-body h-12 bg-[#F4F6F8] border-[#D1D5DB]">
                                    <SelectValue placeholder="Select Timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                                  <SelectItem value="1month">Within 1 Month</SelectItem>
                                  <SelectItem value="3months">1–3 Months</SelectItem>
                                  <SelectItem value="exploring">Just Exploring</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="application"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body text-[#0B2A3C] font-semibold">Application / Use Case Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe where and how the product will be used (e.g., Kitchen exhaust, Factory ventilation)..." 
                              className="font-body min-h-[120px] bg-[#F4F6F8] border-[#D1D5DB] resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 py-4 bg-[#F4F6F8] rounded-sm">
                      <div className="flex items-center gap-2">
                        <Shield className="text-[#F5A02E]" size={18} />
                        <span className="font-body text-sm text-[#6B7280]">ISO 9001:2015 Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="text-[#F5A02E]" size={18} />
                        <span className="font-body text-sm text-[#6B7280]">Response within 24 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="text-[#F5A02E]" size={18} />
                        <span className="font-body text-sm text-[#6B7280]">{COMPANY_CONFIG.phone}</span>
                      </div>
                    </div>

                    {submitError && (
                      <div className="p-4 rounded-sm bg-red-50 border border-red-200 text-red-600 text-sm font-bold uppercase tracking-wide">
                        {submitError}
                      </div>
                    )}

                    <Button type="submit" disabled={isLoading} className="w-full font-heading bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] h-14 text-lg font-bold uppercase tracking-wide group disabled:opacity-70">
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-[#0B2A3C]/30 border-t-[#0B2A3C] rounded-full animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        <>Submit Quote Request <ArrowRight className="ml-2" /></>
                      )}
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuotePage;

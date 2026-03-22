'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, ClipboardCheck, ArrowRight } from 'lucide-react';
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
    console.log(values);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  }

  return (
    <div className="bg-[#F8FAFC] pb-24">
      <section className="bg-[#0A2E5C] pt-20 pb-24 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Fill out the form below with your technical requirements, and our engineering team will provide a detailed proposal.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-16 rounded-[40px] border border-gray-100 shadow-2xl">
            {isSubmitted ? (
               <div className="text-center py-12">
                 <div className="w-24 h-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={56} />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0A2E5C] mb-6">Quote Request Received!</h2>
                 <p className="text-gray-500 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
                   We have received your technical requirements. Our engineering team is reviewing your request and will provide a detailed quotation shortly.
                 </p>
                 <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-[#0A2E5C] text-[#0A2E5C] h-12 px-8">
                   Request Another Quote
                 </Button>
               </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <ClipboardCheck size={28} />
                   </div>
                   <h3 className="text-2xl font-heading font-bold text-[#0A2E5C]">Technical Inquiry Form</h3>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-6">
                         <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent border-b border-accent/20 pb-2 mb-6">Contact Details</h4>
                         <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#0A2E5C] font-bold">Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" className="h-12 bg-gray-50/50" {...field} />
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
                                <FormLabel className="text-[#0A2E5C] font-bold">Company Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Industrial Corp" className="h-12 bg-gray-50/50" {...field} />
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
                                <FormLabel className="text-[#0A2E5C] font-bold">Email Address *</FormLabel>
                                <FormControl>
                                  <Input placeholder="john@company.com" className="h-12 bg-gray-50/50" {...field} />
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
                                <FormLabel className="text-[#0A2E5C] font-bold">Phone Number *</FormLabel>
                                <FormControl>
                                  <Input placeholder="+91 XXXXX XXXXX" className="h-12 bg-gray-50/50" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="city"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[#0A2E5C] font-bold">City *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Bhiwadi" className="h-12 bg-gray-50/50" {...field} />
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
                                  <FormLabel className="text-[#0A2E5C] font-bold">State *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Rajasthan" className="h-12 bg-gray-50/50" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                       </div>

                       <div className="space-y-6">
                         <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent border-b border-accent/20 pb-2 mb-6">Requirement Details</h4>
                         <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#0A2E5C] font-bold">Product Category *</FormLabel>
                                <Select 
                                  onValueChange={(val) => {
                                    field.onChange(val);
                                    setSelectedCategory(val);
                                  }} 
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="h-12 bg-gray-50/50">
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
                                <FormLabel className="text-[#0A2E5C] font-bold">Specific Product (Optional)</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="h-12 bg-gray-50/50">
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

                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="capacity"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[#0A2E5C] font-bold">Required Capacity (CMH) *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g. 15000" className="h-12 bg-gray-50/50" {...field} />
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
                                  <FormLabel className="text-[#0A2E5C] font-bold">Quantity *</FormLabel>
                                  <FormControl>
                                    <Input type="number" min="1" className="h-12 bg-gray-50/50" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="timeline"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[#0A2E5C] font-bold">Required Timeline *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="h-12 bg-gray-50/50">
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
                          <FormLabel className="text-[#0A2E5C] font-bold">Application / Use Case Details *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe where and how the product will be used (e.g., Kitchen exhaust, Factory ventilation)..." 
                              className="min-h-[120px] bg-gray-50/50 resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-[#F97316] hover:bg-[#EA580C] h-16 text-xl font-bold group">
                       Generate Quote Request
                       <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Factory, Warehouse, Building2, Waves, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const applications = [
  {
    icon: Factory,
    title: "Manufacturing & Factories",
    description: "Heavy-duty ventilation for industrial plants, assembly lines, and production floors. Removes heat, fumes, and dust for worker safety.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    products: ["Centrifugal Fans", "Axial Fans", "Exhaust Systems"]
  },
  {
    icon: Warehouse,
    title: "Warehouses & Logistics",
    description: "Large area cooling and air circulation for storage facilities. HVLS fans provide uniform cooling across vast spaces.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    products: ["HVLS Fans", "Industrial Coolers", "Air Circulators"]
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description: "Ventilation for malls, offices, hotels, and public buildings. Quiet, efficient solutions for customer comfort.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    products: ["Box Fans", "Air Purifiers", "AHU Systems"]
  },
  {
    icon: Waves,
    title: "HVAC Systems",
    description: "Integration with heating, ventilation, and air conditioning systems. Custom ducting and hoods for complete solutions.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    products: ["HVAC Ducts", "Turnkey Solutions", "Custom Fabrication"]
  }
];

const ApplicationsSection = () => {
  return (
    <section className="py-24 bg-[#F4F6F8]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[#2E86B8] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Applications
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B2A3C] mb-4">
              Where Our Fans Excel
            </h2>
            <div className="w-24 h-1.5 bg-[#F5A02E] mx-auto mb-6"></div>
            <p className="font-body text-[#6B7280] max-w-2xl mx-auto text-lg leading-relaxed">
              Proven ventilation solutions across diverse industries. From heavy manufacturing to commercial spaces, we deliver optimal airflow.
            </p>
          </motion.div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${app.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A3C]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded bg-[#F5A02E] flex items-center justify-center">
                      <app.icon className="text-[#0B2A3C]" size={28} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <h3 className="font-heading text-xl font-bold text-[#0B2A3C] mb-3 group-hover:text-[#F5A02E] transition-colors">
                    {app.title}
                  </h3>
                  <p className="font-body text-[#6B7280] text-sm mb-4 leading-relaxed">
                    {app.description}
                  </p>
                  
                  {/* Related Products */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.products.map((product, pIdx) => (
                      <span key={pIdx} className="text-xs font-body font-semibold bg-[#F4F6F8] text-[#0B2A3C] px-2 py-1 rounded">
                        {product}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href="/products" 
                    className="inline-flex items-center gap-2 text-[#F5A02E] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Explore Products <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild className="bg-[#0B2A3C] hover:bg-[#2E86B8] font-heading font-bold uppercase tracking-wide px-8 h-12">
            <Link href="/industries">
              View All Industries <ChevronRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationsSection;

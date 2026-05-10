'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAllProducts } from '@/lib/productdetail';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FEATURED_PRODUCT_SLUGS = [
  'direct-drive-duct-cabinet-inline-fan',
  'kitchen-laundry-fan',
  'direct-drive-wall-mount-fan',
  'direct-drive-tube-axial-fan',
  'insulated-housing-cabinet-fan',
  'high-volume-low-speed-fan',
];

const ProductCategoriesGrid = () => {
  const allProducts = getAllProducts();

  // Pick the curated featured products if they exist, otherwise fall back to the first product from each of the first 6 categories.
  const featuredProducts = FEATURED_PRODUCT_SLUGS
    .map((slug) => allProducts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const products =
    featuredProducts.length >= 6 ? featuredProducts.slice(0, 6) : allProducts.slice(0, 6);

  return (
    <section className="py-24 bg-[#F4F6F8]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[#2E86B8] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Products
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B2A3C] mb-4">
              Featured Products
            </h2>
            <div className="w-24 h-1.5 bg-[#F5A02E] mx-auto mb-6" />
            <p className="font-body text-[#6B7280] max-w-2xl mx-auto text-lg leading-relaxed">
              A curated selection of our <strong>heavy-duty industrial fans</strong> and ventilation
              systems &mdash; engineered for reliable, high-performance airflow.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href={`/products/${product.slug}`} className="group block h-full">
                <Card className="h-full border-2 border-[#D1D5DB] bg-white shadow-sm hover:shadow-2xl hover:border-[#F5A02E] transition-all duration-300 overflow-hidden relative group-hover:-translate-y-2 rounded-2xl">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="h-72 relative overflow-hidden flex items-center justify-center bg-[#F4F6F8]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                      />

                      {product.capacity && (
                        <div className="absolute top-6 left-6 bg-[#F5A02E] text-[#0B2A3C] text-[11px] font-heading font-black uppercase tracking-widest px-4 py-1.5 z-10 shadow-lg rounded-sm">
                          {product.capacity}
                        </div>
                      )}

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[#0B2A3C]/40 backdrop-blur-[2px] z-20">
                        <Button className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-heading font-black uppercase tracking-widest px-6 py-4 rounded-xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          View Product
                        </Button>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                      <h3 className="font-heading text-2xl font-black text-[#0B2A3C] mb-2 group-hover:text-[#F5A02E] transition-colors uppercase tracking-tight line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2">
                        {product.shortDescription}
                      </p>

                      <div className="mt-auto flex items-center text-xs font-heading font-black text-[#2E86B8] group-hover:text-[#F5A02E] transition-colors uppercase tracking-[0.2em]">
                        View Details
                        <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center mt-14"
        >
          <p className="text-sm text-[#6B7280] mb-5">
            See the complete range &mdash; centrifugal, axial, HVLS, HVAC ducts, turnkey systems and PURE AIR purifiers.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#0B2A3C] hover:bg-[#2E86B8] text-white font-heading font-black uppercase tracking-[0.2em] px-10 h-14 rounded-xl shadow-lg shadow-[#0B2A3C]/20 transition-all"
          >
            <Link href="/products" className="flex items-center gap-3">
              View All Products
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategoriesGrid;

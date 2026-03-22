'use client';

import React, { useState } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/products';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.categorySlug === selectedCategory);

  return (
    <div className="bg-[#F8FAFC] pb-24">
      {/* Page Header */}
      <section className="bg-[#0A2E5C] pt-20 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="gridLarge" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#gridLarge)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Product Catalog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover our complete range of high-performance air movement solutions and HVAC engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
        <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'ghost'}
              className={cn(
                "rounded-full h-11 px-6 font-bold transition-all",
                selectedCategory === 'all' ? "bg-accent hover:bg-accent/90" : "text-[#0A2E5C] hover:bg-gray-50"
              )}
              onClick={() => setSelectedCategory('all')}
            >
              All Categories
            </Button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <Button
                key={cat.slug}
                variant={selectedCategory === cat.slug ? 'default' : 'ghost'}
                className={cn(
                  "rounded-full h-11 px-6 font-bold transition-all",
                  selectedCategory === cat.slug ? "bg-accent hover:bg-accent/90" : "text-[#0A2E5C] hover:bg-gray-50"
                )}
                onClick={() => setSelectedCategory(cat.slug)}
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-500 font-medium">No products found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductsPage;

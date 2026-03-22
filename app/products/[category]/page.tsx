import React from 'react';
import { notFound } from 'next/navigation';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/products';
import ProductCard from '@/components/products/ProductCard';
import { motion } from 'framer-motion';

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const category = PRODUCT_CATEGORIES.find(c => c.slug === params.category);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter(p => p.categorySlug === params.category);

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
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            {category.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            High-performance engineering solutions for specialized {category.name.toLowerCase()} applications.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {categoryProducts.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200 shadow-sm">
            <p className="text-gray-500 font-medium">Coming soon: New products in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;

import React from 'react';
import { PRODUCTS } from '@/lib/products';
import ProductDetail from '@/components/products/ProductDetail';
import { COMPANY_CONFIG } from '@/lib/config';
import { Metadata } from 'next';

const SLUG = 'ceiling-exhaust-cabinet-fans';
const product = PRODUCTS.find((p) => p.slug === SLUG)!;

export const metadata: Metadata = {
  title: `${product.name} | ${COMPANY_CONFIG.name}`,
  description: product.description,
  keywords: product.seoKeywords?.join(', '),
};

export default function Page() {
  return <ProductDetail product={product} />;
}

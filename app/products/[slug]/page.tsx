import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Phone,
  FileText,
  ShieldCheck,
  Wind,
  Gauge,
  Layers,
  Cog,
  Wrench,
  Building2,
  Award,
  HelpCircle,
  Hammer,
  Compass,
  Sparkles,
} from 'lucide-react';
import {
  CATALOGUE,
  getProductBySlug,
  getRelatedProducts,
} from '@/lib/productdetail';
import { COMPANY_CONFIG } from '@/lib/config';
import { Button } from '@/components/ui/button';
import ProductGallery from '@/components/products/ProductGallery';
import JsonLd from '@/components/seo/JsonLd';
import {
  productSchema,
  breadcrumbSchema,
  faqSchema,
} from '@/lib/schema';

export function generateStaticParams() {
  return CATALOGUE.flatMap((cat) =>
    cat.products.map((p) => ({ slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = getProductBySlug(slug);
  if (!found) {
    return {
      title: 'Product Not Found',
      description: 'The requested product was not found in the SUV FANS catalogue.',
      robots: { index: false, follow: false },
    };
  }
  const { product, category } = found;

  const title = `${product.name} Manufacturer in India — ${category.name}`;
  const description = `${product.shortDescription} Manufactured by ${COMPANY_CONFIG.shortName}, ISO 9001:2015 certified industrial fan manufacturer in Bhiwadi, Rajasthan. ${product.capacity ? `Capacity: ${product.capacity}.` : ''} Request a quote.`.trim();
  const canonical = `/products/${product.slug}`;
  const ogImage = product.image?.startsWith('http')
    ? product.image
    : product.image || '/home.webp';

  const keywords = [
    product.name,
    `${product.name} manufacturer`,
    `${product.name} India`,
    `${product.name} price`,
    `${product.name} supplier`,
    category.name,
    `${category.name} manufacturer India`,
    ...(product.applications || []),
    ...(product.industries || []),
    'industrial fan manufacturer Bhiwadi',
    'SUV FANS',
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = getProductBySlug(slug);
  if (!found) notFound();

  const { product, category } = found;
  const related = getRelatedProducts(slug, 3);
  const galleryImages =
    product.images && product.images.length > 0 ? product.images : [product.image];

  const schemas: object[] = [
    productSchema(product, category),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: category.name, url: `/products#cat-${category.slug}` },
      { name: product.name, url: `/products/${product.slug}` },
    ]),
  ];
  if (product.faqs && product.faqs.length > 0) {
    schemas.push(faqSchema(product.faqs));
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <JsonLd data={schemas} />
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-3">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 gap-1.5 flex-wrap"
          >
            <Link href="/" className="hover:text-[#2E86B8] transition-colors">Home</Link>
            <ChevronRight size={11} />
            <Link href="/products" className="hover:text-[#2E86B8] transition-colors">Products</Link>
            <ChevronRight size={11} />
            <span className="text-[#2E86B8]">{category.name}</span>
            <ChevronRight size={11} />
            <span className="text-[#0B2A3C] truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <ProductGallery images={galleryImages} alt={product.name} />
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#2E86B8]" />
              <Link
                href="/products"
                className="text-[10px] font-black text-[#2E86B8] uppercase tracking-[0.2em] hover:underline"
              >
                {category.name}
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl xl:text-5xl font-black font-heading text-[#0B2A3C] uppercase leading-[1.05] tracking-tighter mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {(product.capacity || product.staticPressure) && (
              <div className="grid grid-cols-2 gap-3 mb-6">
                {product.capacity && (
                  <div className="bg-white rounded-xl border border-gray-100 px-4 py-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Wind size={11} className="text-[#2E86B8]" />
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                        Capacity
                      </span>
                    </div>
                    <div className="text-sm font-black text-[#0B2A3C]">{product.capacity}</div>
                  </div>
                )}
                {product.staticPressure && (
                  <div className="bg-white rounded-xl border border-gray-100 px-4 py-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Gauge size={11} className="text-[#2E86B8]" />
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                        Static Pressure
                      </span>
                    </div>
                    <div className="text-sm font-black text-[#0B2A3C]">{product.staticPressure}</div>
                  </div>
                )}
              </div>
            )}

            {product.applications && product.applications.length > 0 && (
              <div className="mb-6">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                  Applications
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="text-[11px] font-bold bg-[#0B2A3C]/5 text-[#0B2A3C] border border-[#0B2A3C]/10 px-3 py-1 rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                asChild
                size="lg"
                className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-black h-13 px-6 uppercase tracking-wide shadow-lg shadow-[#F5A02E]/20"
              >
                <Link href="/get-quote">
                  Request a Quote <ArrowRight size={14} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#0B2A3C] text-[#0B2A3C] hover:bg-[#0B2A3C] hover:text-white font-black h-13 px-6 uppercase tracking-wide"
              >
                <Link href="/contact">
                  <Phone size={14} /> Talk to Engineer
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-gray-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-green-600" /> ISO 9001:2015
              </span>
              <span className="flex items-center gap-1.5">
                <Layers size={13} className="text-[#2E86B8]" />{' '}
                {COMPANY_CONFIG.yearsOfExperience} years experience
              </span>
              <span className="flex items-center gap-1.5">
                <FileText size={13} className="text-[#F5A02E]" /> Datasheet on request
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      {product.overview && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<FileText size={16} className="text-[#2E86B8]" />}
            eyebrow="Overview"
            title={`About the ${product.name}`}
          >
            <p className="text-gray-700 text-[15px] leading-[1.75]">{product.overview}</p>
          </SectionCard>
        </section>
      )}

      {/* WHY CHOOSE THIS */}
      {product.whyChooseThis && product.whyChooseThis.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<Sparkles size={16} className="text-[#F5A02E]" />}
            eyebrow="Why Choose This"
            title="Engineering Advantages"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.whyChooseThis.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-[#F4F6F8] rounded-xl p-4 border border-gray-100"
                >
                  <div className="shrink-0 w-7 h-7 rounded-lg bg-[#F5A02E]/15 text-[#F5A02E] flex items-center justify-center text-[11px] font-black">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>
      )}

      {/* CONFIGURATIONS / OPTIONS */}
      {product.configurations && product.configurations.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<Layers size={16} className="text-[#F5A02E]" />}
            eyebrow="Build Options"
            title="Configurations & Variants"
          >
            <p className="text-sm text-gray-500 mb-4">
              Buyer-selectable build options available at order. Specify on quote request.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.configurations.map((opt) => (
                <div
                  key={opt}
                  className="flex items-start gap-3 bg-white border border-[#F5A02E]/20 rounded-xl px-4 py-3"
                >
                  <div className="shrink-0 w-7 h-7 rounded-lg bg-[#F5A02E]/10 text-[#F5A02E] flex items-center justify-center">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm text-gray-700 leading-snug">{opt}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>
      )}

      {/* FEATURES */}
      {product.features && product.features.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<CheckCircle2 size={16} className="text-[#2E86B8]" />}
            eyebrow="Features"
            title="Key Features"
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                >
                  <CheckCircle2 size={16} className="text-[#2E86B8] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </section>
      )}

      {/* SPEC TABLE */}
      {product.specTable && product.specTable.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<Cog size={16} className="text-[#2E86B8]" />}
            eyebrow="Specifications"
            title="Technical Specifications"
          >
            <SpecTable rows={product.specTable} />
          </SectionCard>
        </section>
      )}

      {/* DUCT VARIANTS */}
      {product.ductVariants && product.ductVariants.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<Layers size={16} className="text-[#2E86B8]" />}
            eyebrow="Variants"
            title="Available Variants"
          >
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-[#F4F6F8] text-[#0B2A3C]">
                  <tr>
                    <th className="px-4 py-3 text-left font-black uppercase tracking-wider text-xs">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left font-black uppercase tracking-wider text-xs">
                      Size Range
                    </th>
                    <th className="px-4 py-3 text-left font-black uppercase tracking-wider text-xs">
                      Length
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {product.ductVariants.map((row, i) => (
                    <tr key={i} className="hover:bg-[#F4F6F8]/40">
                      <td className="px-4 py-3 font-bold text-gray-700">{row.type}</td>
                      <td className="px-4 py-3 font-bold text-gray-700">{row.sizeRange}</td>
                      <td className="px-4 py-3 font-bold text-gray-700">{row.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </section>
      )}

      {/* SPEC SHEET (key/value) */}
      {product.specSheet && product.specSheet.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<FileText size={16} className="text-[#2E86B8]" />}
            eyebrow="Specification Sheet"
            title="Full Spec Sheet"
          >
            <dl className="divide-y divide-gray-100">
              {product.specSheet.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 md:grid-cols-3 gap-2 py-3"
                >
                  <dt className="text-[10px] font-black text-[#2E86B8] uppercase tracking-widest md:col-span-1">
                    {row.label}
                  </dt>
                  <dd className="text-sm text-gray-700 md:col-span-2">{row.value}</dd>
                </div>
              ))}
            </dl>
          </SectionCard>
        </section>
      )}

      {/* CONSTRUCTION */}
      {product.constructionDetails && product.constructionDetails.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<Hammer size={16} className="text-[#2E86B8]" />}
            eyebrow="Construction"
            title="Construction & Materials"
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {product.constructionDetails.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                >
                  <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#2E86B8]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </section>
      )}

      {/* SELECTION GUIDE */}
      {product.selectionGuide && product.selectionGuide.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<Compass size={16} className="text-[#F5A02E]" />}
            eyebrow="Selection Guide"
            title="How to Choose the Right Variant"
          >
            <ol className="space-y-3">
              {product.selectionGuide.map((line, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-[#0B2A3C] text-white text-[11px] font-black flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
          </SectionCard>
        </section>
      )}

      {/* INSTALLATION */}
      {product.installationNotes && product.installationNotes.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<Wrench size={16} className="text-[#2E86B8]" />}
            eyebrow="Installation"
            title="Installation Notes"
          >
            <ul className="space-y-3">
              {product.installationNotes.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                >
                  <CheckCircle2 size={15} className="text-[#2E86B8] shrink-0 mt-1" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </section>
      )}

      {/* MAINTENANCE */}
      {product.maintenanceNotes && product.maintenanceNotes.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<Cog size={16} className="text-[#2E86B8]" />}
            eyebrow="Maintenance"
            title="Maintenance Schedule"
          >
            <ul className="space-y-3">
              {product.maintenanceNotes.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                >
                  <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#F5A02E]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </section>
      )}

      {/* INDUSTRIES */}
      {product.industries && product.industries.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<Building2 size={16} className="text-[#2E86B8]" />}
            eyebrow="Industries"
            title="Industries Served"
          >
            <div className="flex flex-wrap gap-2">
              {product.industries.map((industry) => (
                <span
                  key={industry}
                  className="text-xs font-bold bg-white border border-gray-200 text-[#0B2A3C] px-3 py-1.5 rounded-lg shadow-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </SectionCard>
        </section>
      )}

      {/* STANDARDS */}
      {product.standards && product.standards.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<Award size={16} className="text-[#F5A02E]" />}
            eyebrow="Standards"
            title="Standards & Compliance"
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {product.standards.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                >
                  <Award size={15} className="text-[#F5A02E] shrink-0 mt-0.5" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </section>
      )}

      {/* FAQ */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <SectionCard
            icon={<HelpCircle size={16} className="text-[#2E86B8]" />}
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          >
            <div className="space-y-4">
              {product.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-[#F4F6F8] rounded-xl p-5 border border-gray-100"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <HelpCircle size={16} className="text-[#2E86B8] shrink-0 mt-0.5" />
                    <h3 className="text-sm font-black text-[#0B2A3C] uppercase tracking-wide">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>
      )}

      {/* NOTES */}
      {product.notes && product.notes.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-12">
          <div className="bg-[#0B2A3C]/5 border-l-4 border-[#F5A02E] rounded-r-xl px-5 py-4">
            <div className="text-[10px] font-black text-[#F5A02E] uppercase tracking-widest mb-1">
              Note
            </div>
            <div className="text-sm text-[#0B2A3C]">{product.notes.join(' · ')}</div>
          </div>
        </section>
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-16">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-6 bg-[#2E86B8]" />
                <span className="text-[10px] font-black text-[#2E86B8] uppercase tracking-[0.2em]">
                  More from this section
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black font-heading text-[#0B2A3C] uppercase tracking-tighter">
                Related {category.name}
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0B2A3C] hover:text-[#2E86B8] transition-colors"
            >
              <ArrowLeft size={12} /> Back to all products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#2E86B8]/30 hover:shadow-[0_12px_32px_rgba(46,134,184,0.12)] transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F6F8]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[9px] font-black text-[#2E86B8] uppercase tracking-[0.2em] mb-2">
                    {p.categoryName}
                  </div>
                  <h3 className="text-base font-black font-heading text-[#0B2A3C] uppercase tracking-tighter mb-2 group-hover:text-[#2E86B8] transition-colors line-clamp-2">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {p.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <section className="bg-[#0B2A3C] text-white py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black font-heading uppercase tracking-tighter mb-4">
            Need help selecting the right fan?
          </h2>
          <p className="text-gray-400 mb-8">
            Our engineers will help you size the {product.name.toLowerCase()} to your exact application — capacity, static pressure, and installation constraints.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#F5A02E] hover:bg-[#E08F1F] text-[#0B2A3C] font-black h-14 px-8 uppercase tracking-wide rounded-xl"
            >
              <Link href="/get-quote">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:text-white font-black h-14 px-8 uppercase tracking-wide rounded-xl"
            >
              <Link href="/products">Browse Catalogue</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionCard({
  icon,
  eyebrow,
  title,
  children,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-10 shadow-[0_4px_20px_rgba(11,42,60,0.04)]">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[#F4F6F8] flex items-center justify-center">
          {icon}
        </div>
        <span className="text-[10px] font-black text-[#2E86B8] uppercase tracking-[0.2em]">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-2xl font-black font-heading text-[#0B2A3C] uppercase tracking-tighter mb-6">
        {title}
      </h2>
      {children}
    </div>
  );
}

function SpecTable({
  rows,
}: {
  rows: NonNullable<ReturnType<typeof getProductBySlug>>['product']['specTable'];
}) {
  if (!rows) return null;
  const cols = [
    { key: 'size', label: 'Size' },
    { key: 'airflow', label: 'Air Flow' },
    { key: 'voltage', label: 'Voltage' },
    { key: 'power', label: 'Power' },
    { key: 'rpm', label: 'RPM' },
    { key: 'sound', label: 'Sound' },
    { key: 'weight', label: 'Weight' },
  ] as const;

  const visibleCols = cols.filter((c) =>
    rows.some((r) => r[c.key as keyof typeof r])
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <thead className="bg-[#F4F6F8] text-[#0B2A3C]">
          <tr>
            {visibleCols.map((c) => (
              <th
                key={c.key}
                className="px-4 py-3 text-left font-black uppercase tracking-wider text-xs"
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-[#F4F6F8]/40">
              {visibleCols.map((c) => (
                <td
                  key={c.key}
                  className="px-4 py-3 font-bold text-gray-700 whitespace-nowrap"
                >
                  {row[c.key as keyof typeof row] ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

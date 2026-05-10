// lib/schema.ts
// JSON-LD Schema.org generators. Server-rendered as <script type="application/ld+json">.
import { COMPANY_CONFIG } from './config';
import type { CatalogueProduct, CatalogueCategory, CatalogueFAQ } from './productdetail';

const url = (path = '') =>
  `${COMPANY_CONFIG.siteUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;

const sameAsList = Object.values(COMPANY_CONFIG.socials).filter(Boolean);

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': url('/#organization'),
    name: COMPANY_CONFIG.name,
    legalName: COMPANY_CONFIG.legalName,
    alternateName: COMPANY_CONFIG.shortName,
    url: COMPANY_CONFIG.siteUrl,
    logo: url('/logo.png'),
    image: url('/logo.png'),
    description: COMPANY_CONFIG.description,
    foundingDate: `${COMPANY_CONFIG.foundingYear}`,
    email: COMPANY_CONFIG.email,
    telephone: COMPANY_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_CONFIG.street,
      addressLocality: COMPANY_CONFIG.city,
      addressRegion: COMPANY_CONFIG.region,
      postalCode: COMPANY_CONFIG.postalCode,
      addressCountry: COMPANY_CONFIG.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: COMPANY_CONFIG.phone,
        email: COMPANY_CONFIG.email,
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        telephone: COMPANY_CONFIG.phone,
        email: COMPANY_CONFIG.email,
        areaServed: 'IN',
        availableLanguage: ['en'],
      },
    ],
    ...(sameAsList.length > 0 && { sameAs: sameAsList }),
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Manufacturer'],
    '@id': url('/#localbusiness'),
    name: COMPANY_CONFIG.name,
    image: url('/logo.png'),
    url: COMPANY_CONFIG.siteUrl,
    telephone: COMPANY_CONFIG.phone,
    email: COMPANY_CONFIG.email,
    priceRange: '₹₹',
    description: COMPANY_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_CONFIG.street,
      addressLocality: COMPANY_CONFIG.city,
      addressRegion: COMPANY_CONFIG.region,
      postalCode: COMPANY_CONFIG.postalCode,
      addressCountry: COMPANY_CONFIG.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_CONFIG.latitude,
      longitude: COMPANY_CONFIG.longitude,
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': url('/#website'),
    url: COMPANY_CONFIG.siteUrl,
    name: COMPANY_CONFIG.name,
    description: COMPANY_CONFIG.description,
    publisher: { '@id': url('/#organization') },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${COMPANY_CONFIG.siteUrl}/products?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function productSchema(product: CatalogueProduct, category: CatalogueCategory) {
  const productUrl = url(`/products/${product.slug}`);
  const imageUrl = product.image?.startsWith('http')
    ? product.image
    : url(product.image || '/logo.png');

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${productUrl}#product`,
    name: product.name,
    description: product.overview || product.shortDescription,
    image: imageUrl,
    sku: product.id,
    mpn: product.id,
    category: category.name,
    url: productUrl,
    brand: {
      '@type': 'Brand',
      name: COMPANY_CONFIG.shortName,
    },
    manufacturer: { '@id': url('/#organization') },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
        description: 'Price on request — contact for project quotation',
      },
      seller: { '@id': url('/#organization') },
    },
    ...(product.capacity && {
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Capacity', value: product.capacity },
        ...(product.staticPressure
          ? [{ '@type': 'PropertyValue', name: 'Static Pressure', value: product.staticPressure }]
          : []),
        ...(product.standards
          ? product.standards.map((s) => ({
              '@type': 'PropertyValue',
              name: 'Standard',
              value: s,
            }))
          : []),
      ],
    }),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : url(item.url),
    })),
  };
}

export function faqSchema(faqs: CatalogueFAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

import type { MetadataRoute } from 'next';
import { CATALOGUE } from '@/lib/productdetail';
import { APPLICATIONS } from '@/lib/applications';
import { COMPANY_CONFIG } from '@/lib/config';

const base = COMPANY_CONFIG.siteUrl.replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/get-quote`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/application`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/air-purifiers`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/catalog`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const productRoutes: MetadataRoute.Sitemap = CATALOGUE.flatMap((cat) =>
    cat.products.map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  const applicationRoutes: MetadataRoute.Sitemap = APPLICATIONS.map((app) => ({
    url: `${base}/application/${app.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...applicationRoutes];
}

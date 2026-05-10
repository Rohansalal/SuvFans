import type { Metadata } from 'next';
import { APPLICATIONS } from '@/lib/applications';

export function generateStaticParams() {
  return APPLICATIONS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = APPLICATIONS.find((a) => a.slug === slug);
  if (!app) {
    return {
      title: 'Application Not Found',
      robots: { index: false, follow: false },
    };
  }

  const title = `${app.name} Ventilation Solutions — Industrial Fans & HVAC`;
  const description = `${app.description} Engineered fan and HVAC systems for ${app.name.toLowerCase()} applications by SUV FANS LLP, ISO 9001:2015 certified manufacturer in India.`;
  const canonical = `/application/${app.slug}`;

  return {
    title,
    description,
    keywords: [
      `${app.name} ventilation`,
      `${app.name} HVAC India`,
      `${app.name} fan supplier`,
      `industrial fan for ${app.name.toLowerCase()}`,
      'SUV FANS application',
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
    },
  };
}

export default function ApplicationDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

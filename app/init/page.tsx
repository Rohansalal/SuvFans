import Link from 'next/link';
import { ArrowRight, CheckCircle, Factory, Wind, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY_CONFIG } from '@/lib/config';

export default function InitPage() {
  const features = [
    {
      icon: Factory,
      title: 'Industrial Manufacturing',
      description: '19+ years of expertise in HVAC solutions',
    },
    {
      icon: Wind,
      title: 'Quality Products',
      description: 'ISO 9001:2015 Certified manufacturing',
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      description: 'Pan-India presence with expert support',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-full mb-6">
            <Wind className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            {COMPANY_CONFIG.name}
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            {COMPANY_CONFIG.tagline}
          </p>
          <p className="text-gray-500">
            {COMPANY_CONFIG.iso} | {COMPANY_CONFIG.yearsOfExperience} Years Experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg text-[#1A1A2E] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8"
          >
            <Link href="/">
              Go to Home <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-lg px-8"
          >
            <Link href="/products">
              View Products
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-gray-500">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span>Ready to serve your HVAC needs</span>
        </div>
      </div>
    </div>
  );
}

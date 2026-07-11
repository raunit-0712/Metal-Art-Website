import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SteelHero } from '@/components/sections/steel/SteelHero';
import { ServicesGrid } from '@/components/sections/steel/ServicesGrid';
import { ProjectShowcase } from '@/components/sections/steel/ProjectShowcase';
import { BeforeAfterSection } from '@/components/sections/steel/BeforeAfterSection';
import { OtherSteelWorks } from '@/components/sections/steel/OtherSteelWorks';
import { SteelVideoShowcase } from '@/components/sections/steel/SteelVideoShowcase';
import { ProcessSection } from '@/components/sections/steel/ProcessSection';
import { FAQSection } from '@/components/sections/steel/FAQSection';
import { QuoteForm } from '@/components/sections/steel/QuoteForm';
import { getSteelProjects } from '@/lib/data/steel/getProjects';
import { BreadcrumbsJsonLd, ServiceJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd';
import { faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Metal Works',
  description:
    'Premium architectural metal fabrication services. Custom staircases, railings, lift cladding, decorative panels, and bespoke metalwork for residential and commercial projects.',
  alternates: {
    canonical: '/steel-works/',
  },
};

export default function SteelWorksPage() {
  const steelProjects = getSteelProjects();
  const steelFAQs = faqs.filter((f) => f.category === 'steel' || f.category === 'general');

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', item: '/' },
          { name: 'Metal Works', item: '/steel-works/' },
        ]}
      />
      <ServiceJsonLd
        name="Architectural Metal Fabrication & Custom Metal Works"
        description="Premium architectural metal fabrication services, including custom staircases, railings, lift cladding, decorative panels, and bespoke metalwork."
        offers={{
          category: 'Metal Fabrication',
          items: [
            'Metal Staircases',
            'Railings & Balustrades',
            'Lift Cladding',
            'Decorative Panels',
            'Custom Fabrication',
            'Metal Shelves',
          ],
        }}
      />
      <FAQPageJsonLd items={steelFAQs} />
      
      <SteelHero />
      <ServicesGrid />
      <Suspense fallback={<div className="py-24 bg-brand-background text-center text-brand-text/50">Loading Showcase...</div>}>
        <ProjectShowcase initialSteelProjects={steelProjects} />
      </Suspense>
      <BeforeAfterSection />
      <OtherSteelWorks />
      <SteelVideoShowcase />
      <ProcessSection />
      <FAQSection />
      <QuoteForm />
    </>
  );
}

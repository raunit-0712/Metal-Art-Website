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

export const metadata: Metadata = {
  title: 'Steel Works',
  description:
    'Premium architectural steel fabrication services. Custom staircases, railings, lift cladding, decorative panels, and bespoke metalwork for residential and commercial projects.',
};

export default function SteelWorksPage() {
  return (
    <>
      <SteelHero />
      <ServicesGrid />
      <Suspense fallback={<div className="py-24 bg-brand-background text-center text-brand-text/50">Loading Showcase...</div>}>
        <ProjectShowcase />
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

import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { SplitScreenSection } from '@/components/sections/home/SplitScreenSection';
import { AboutPreviewSection } from '@/components/sections/home/AboutPreviewSection';
import { FeaturedSteelSection } from '@/components/sections/home/FeaturedSteelSection';
import { FeaturedArtSection } from '@/components/sections/home/FeaturedArtSection';
import { StatsSection } from '@/components/sections/home/StatsSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { CTASection } from '@/components/sections/home/CTASection';
import { getSteelProjects } from '@/lib/data/steel/getProjects';
import { WebPageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Aakriti Atelier | shaping ideas into reality',
  description:
    'Welcome to Aakriti Atelier. We specialize in custom architectural metal fabrication, steel staircases, railings, and fine art collections.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const steelProjects = getSteelProjects();

  return (
    <>
      <WebPageJsonLd
        name="Aakriti Atelier | Shaping Ideas into Reality"
        description="Premium architectural metal fabrication and fine arts studio."
        url="/"
        type="WebPage"
      />
      <HeroSection />
      <SplitScreenSection />
      <AboutPreviewSection />
      <FeaturedSteelSection initialProjects={steelProjects} />
      <FeaturedArtSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

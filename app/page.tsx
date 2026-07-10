import { HeroSection } from '@/components/sections/home/HeroSection';
import { SplitScreenSection } from '@/components/sections/home/SplitScreenSection';
import { AboutPreviewSection } from '@/components/sections/home/AboutPreviewSection';
import { FeaturedSteelSection } from '@/components/sections/home/FeaturedSteelSection';
import { FeaturedArtSection } from '@/components/sections/home/FeaturedArtSection';
import { StatsSection } from '@/components/sections/home/StatsSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { CTASection } from '@/components/sections/home/CTASection';
import { getSteelProjects } from '@/lib/data/steel/getProjects';

export default function Home() {
  const steelProjects = getSteelProjects();

  return (
    <>
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

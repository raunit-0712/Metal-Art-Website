import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { MissionVision } from '@/components/sections/about/MissionVision';
import { ValuesSection } from '@/components/sections/about/ValuesSection';
import { TimelineSection } from '@/components/sections/about/TimelineSection';
import { TeamSection } from '@/components/sections/about/TeamSection';
import { AchievementsSection } from '@/components/sections/about/AchievementsSection';
import { BreadcrumbsJsonLd, WebPageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover the story behind Aakriti Atelier, a creative studio specializing in architectural metal fabrication and fine arts.',
  alternates: {
    canonical: '/about/',
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', item: '/' },
          { name: 'About Us', item: '/about/' },
        ]}
      />
      <WebPageJsonLd
        name="About Us - Aakriti Atelier"
        description="Discover the story behind Aakriti Atelier, a creative studio specializing in architectural metal fabrication and fine arts."
        url="/about/"
        type="AboutPage"
      />
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      {/* <TimelineSection /> */}
      {/* <TeamSection /> */}
      {/* <AchievementsSection /> */}
    </>
  );
}

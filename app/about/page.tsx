import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { MissionVision } from '@/components/sections/about/MissionVision';
import { ValuesSection } from '@/components/sections/about/ValuesSection';
import { TimelineSection } from '@/components/sections/about/TimelineSection';
import { TeamSection } from '@/components/sections/about/TeamSection';
import { AchievementsSection } from '@/components/sections/about/AchievementsSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover the story behind Aakriti Atelier, a creative studio specializing in architectural steel fabrication and fine arts.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      {/* <TimelineSection /> */}
      {/* <TeamSection /> */}
      {/* <AchievementsSection /> */}
    </>
  );
}

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
    'Discover the story behind Artisan Metal & Arts. Learn about our mission, values, team, and journey in crafting architectural metal masterpieces and fine art.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <AchievementsSection />
    </>
  );
}

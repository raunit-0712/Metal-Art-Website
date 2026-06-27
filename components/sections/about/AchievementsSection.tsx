'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

const achievements = [
  {
    icon: Trophy,
    title: 'Best Architectural Metalwork',
    organization: 'International Design Awards 2023',
    description: 'Recognized for excellence in custom staircase design.',
  },
  {
    icon: Award,
    title: 'Excellence in Craftsmanship',
    organization: 'National Fabrication Guild 2022',
    description: 'Honored for outstanding quality and precision in metal fabrication.',
  },
  {
    icon: Star,
    title: 'Emerging Artist Showcase',
    organization: 'Contemporary Arts Foundation 2023',
    description: 'Featured for innovative mixed media artwork.',
  },
  {
    icon: Medal,
    title: 'Sustainable Design Award',
    organization: 'Green Building Council 2021',
    description: 'Awarded for eco-friendly fabrication practices.',
  },
];

export function AchievementsSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
              Recognition
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              Awards & Achievements
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <SectionReveal key={achievement.title} delay={0.1 * index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-6 p-8 rounded-xl bg-white/5 border border-white/10 hover:border-brand-secondary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-brand-secondary/20 flex items-center justify-center shrink-0">
                  <achievement.icon size={32} className="text-brand-secondary" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-brand-secondary text-sm mb-3">
                    {achievement.organization}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

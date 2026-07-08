'use client';

import { SectionReveal } from '@/components/shared/SectionReveal';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';

const stats = [
  {
    value: 100,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Across residential, commercial, and public spaces',
  },
  {
    value:25,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description: 'Crafting excellence since 2014',
  },
  {
    value: 5,
    suffix: '+',
    label: 'Awards Won',
    description: 'Recognition for design excellence',
  },
];

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <SectionReveal key={stat.label} delay={0.1 * index}>
              <div className="text-center">
                <div className="font-playfair text-5xl md:text-6xl lg:text-7xl text-gradient mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">
                  {stat.label}
                </h3>
                <p className="text-white/50 text-sm">{stat.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

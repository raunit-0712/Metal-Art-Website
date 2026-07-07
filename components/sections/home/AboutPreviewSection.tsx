'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Compass, Eye, Sparkles } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

const values = [
  {
    icon: Compass,
    title: 'Craftsmanship',
    description:
      'Every piece we create is a testament to meticulous attention to detail and uncompromising quality.',
  },
  {
    icon: Eye,
    title: 'Precision',
    description:
      'Engineering excellence meets artistic vision in every measurement, cut, and finish.',
  },
  {
    icon: Sparkles,
    title: 'Creativity',
    description:
      'We push boundaries, blending traditional techniques with innovative approaches to create the extraordinary.',
  },
];

export function AboutPreviewSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <SectionReveal>
              <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
                Our Story
              </p>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2 className="font-playfair text-4xl md:text-5xl text-brand-text mb-6">
                A Legacy of
                <span className="block text-brand-secondary">
                  Craft & Creativity
                </span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-brand-text/70 text-lg leading-relaxed mb-8">
                Founded on the belief that engineering and art are not opposing
                forces but complementary disciplines, Aakriti Atelier has
                spent over a decade transforming spaces and creating lasting
                impressions.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="text-brand-text/70 leading-relaxed mb-10">
                From precision-engineered architectural metalwork to evocative
                fine art pieces, our multidisciplinary approach ensures every
                project receives the dedication and expertise it deserves. We
                don&apos;t just build structures or create art - we craft
                experiences that inspire.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent transition-colors group font-medium"
              >
                <span>Discover Our Story</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </SectionReveal>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-8">
            {values.map((value, index) => (
              <SectionReveal key={value.title} delay={0.2 + index * 0.15}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-6 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center shrink-0">
                    <value.icon size={24} className="text-brand-secondary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl text-brand-text mb-2">
                      {value.title}
                    </h3>
                    <p className="text-brand-text/60 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

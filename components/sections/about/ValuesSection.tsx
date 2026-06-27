'use client';

import { motion } from 'framer-motion';
import { Shield, Heart, Lightbulb, Users, Award, Leaf } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We uphold the highest standards of honesty and transparency in every interaction, from initial consultation to final delivery.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description:
      'Every project is approached with genuine enthusiasm and dedication. We love what we do, and it shows in every detail.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously explore new techniques, materials, and technologies to deliver cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We believe the best results come from working closely with our clients, architects, and designers as true partners.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Good enough is never enough. We strive for perfection in every weld, every brushstroke, and every finish.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We are committed to environmentally responsible practices, from material sourcing to waste reduction.',
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
              What We Stand For
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              Our Core Values
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <SectionReveal key={value.title} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-brand-secondary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-brand-secondary/20 flex items-center justify-center mb-6">
                  <value.icon size={28} className="text-brand-secondary" />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Pencil, Sparkles, Image } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

const steps = [
  {
    icon: Lightbulb,
    title: 'Idea',
    description: 'Every masterpiece begins with inspiration. We explore concepts, themes, and emotions to find the perfect vision for your artwork.',
  },
  {
    icon: Pencil,
    title: 'Sketch',
    description: 'Initial sketches and studies are created to capture composition, form, and the essential character of the piece.',
  },
  {
    icon: Sparkles,
    title: 'Refinement',
    description: 'Through careful layering and detail work, the artwork evolves from rough concept to refined expression.',
  },
  {
    icon: Image,
    title: 'Final Artwork',
    description: 'The completed piece emerges — a unique creation ready to inspire and captivate for generations.',
  },
];

export function CreativeProcess() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
              Behind the Canvas
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-brand-text">
              Creative Process
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <SectionReveal key={step.title} delay={0.15 * index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative text-center p-8"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-playfair text-8xl text-brand-secondary/10 select-none">
                  {index + 1}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon size={32} className="text-brand-secondary" />
                  </div>
                  <h3 className="font-playfair text-2xl text-brand-text mb-4">
                    {step.title}
                  </h3>
                  <p className="text-brand-text/60 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 right-0 w-full h-px">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-px bg-gradient-to-r from-brand-secondary/30 to-transparent" />
                  </div>
                )}
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

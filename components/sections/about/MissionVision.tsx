'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

export function MissionVision() {
  return (
    <section className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission */}
          <SectionReveal direction="left">
            <div className="relative p-8 md:p-12 bg-white rounded-2xl shadow-lg">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center">
                <Target size={24} className="text-white" />
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl text-brand-text mt-4 mb-6">
                Our Mission
              </h2>
              <p className="text-brand-text/70 leading-relaxed mb-4">
                To transform spaces and lives through the seamless fusion of
                engineering precision and artistic expression. We believe that
                every structure should tell a story, and every artwork should
                evoke emotion.
              </p>
              <p className="text-brand-text/70 leading-relaxed">
                Our mission is to push the boundaries of what is possible in both
                metal fabrication and fine art, creating pieces that stand as
                testaments to human creativity and technical mastery.
              </p>
            </div>
          </SectionReveal>

          {/* Vision */}
          <SectionReveal direction="right">
            <div className="relative p-8 md:p-12 bg-brand-primary rounded-2xl shadow-lg">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center">
                <Eye size={24} className="text-brand-primary" />
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl text-white mt-4 mb-6">
                Our Vision
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                To be the world&apos;s premier destination where architectural
                engineering and fine art converge - a place where visionaries
                come to realize their most ambitious creative dreams.
              </p>
              <p className="text-white/70 leading-relaxed">
                We envision a future where the line between structure and
                sculpture dissolves, where every building element is a work of art,
                and every artwork pushes the boundaries of material possibility.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

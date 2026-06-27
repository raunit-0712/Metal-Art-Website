'use client';

import { motion } from 'framer-motion';
import { MessageSquare, MapPin, PenTool, Factory, Wrench, Truck } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We begin with an in-depth discussion of your vision, requirements, and project goals.',
  },
  {
    icon: MapPin,
    title: 'Site Visit',
    description: 'Our team visits your location to take precise measurements and assess the site conditions.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Detailed 3D modeling and engineering drawings are created for your approval.',
  },
  {
    icon: Factory,
    title: 'Fabrication',
    description: 'Skilled craftsmen bring the design to life using state-of-the-art equipment and techniques.',
  },
  {
    icon: Wrench,
    title: 'Installation',
    description: 'Our expert installation team ensures precise fitting and flawless finishing on-site.',
  },
  {
    icon: Truck,
    title: 'Delivery',
    description: 'Final inspection, cleanup, and handover of your completed project.',
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
              How We Work
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-brand-text">
              Our Process
            </h2>
          </div>
        </SectionReveal>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-secondary via-brand-accent to-brand-secondary transform -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <SectionReveal key={step.title} delay={0.1 * index}>
                  <div className={`relative flex items-center lg:min-h-[200px] ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8`}>
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-block p-6 rounded-xl bg-white shadow-sm"
                      >
                        <span className="text-brand-secondary font-playfair text-4xl opacity-30">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-playfair text-2xl text-brand-text mt-2 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-brand-text/60 leading-relaxed max-w-md">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center shrink-0 shadow-lg">
                      <step.icon size={28} className="text-white" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Wrench, Hammer, Check, Grid3X3, LayoutGrid, Layers, Minus, Library } from 'lucide-react';
import Image from 'next/image';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { steelServices } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  Stairs: Wrench,
  Fence: Hammer,
  Square: LayoutGrid,
  Grid3X3: Grid3X3,
  Library: Library,
  Minus: Minus,
  Hammer: Layers,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
              What We Offer
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              Our Services
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steelServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Hammer;
            return (
              <SectionReveal key={service.id} delay={0.1 * index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-brand-secondary/30 transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center mb-4">
                      <IconComponent size={24} className="text-brand-secondary" />
                    </div>
                    <h3 className="font-playfair text-xl text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-white/50 text-sm"
                        >
                          <Check size={14} className="text-brand-secondary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

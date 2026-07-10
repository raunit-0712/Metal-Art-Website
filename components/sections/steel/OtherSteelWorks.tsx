'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { otherSteelImages } from '@/lib/data/steel/other-project-images';
import { OtherSteelGallery } from './OtherSteelGallery';

export function OtherSteelWorks() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Stagger variants for the bento cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-brand-primary text-white border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Editorial Heading Section */}
        <div className="max-w-3xl mb-20 space-y-6">
          <SectionReveal>
            <p className="text-brand-secondary text-xs tracking-[0.3em] uppercase">
              Showcase Gallery
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-medium">
              Additional Custom Craftsmanship
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed font-light">
              <p>
                Our expertise extends beyond major structural installations. In our dedicated workshop, precision engineering and manual craft converge to create bespoke metal details that define luxury architectural spaces. Every custom door inlay, ceiling trim, and decorative partition is treated with an uncompromising standard of fabrication quality.
              </p>
              <p>
                By hand-selecting premium alloys, manipulating stainless steel grains, and applying durable PVD color-matching coatings, we produce structural accents that are built to endure high-volume passenger terminal traffic and commercial lobbies while preserving a refined, artistic design sensibility.
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* Symmetric responsive CSS grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
        >
          {otherSteelImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={cardVariants}
              onClick={() => setActiveImageIndex(index)}
              className="group relative overflow-hidden rounded-2xl bg-black/30 border border-white/5 cursor-pointer shadow-xl hover:border-brand-secondary/30 transition-all duration-500 aspect-[4/3] w-full"
            >
              {/* Image component with skeleton shimmer loader */}
              <div className="absolute inset-0 w-full h-full bg-white/5 animate-pulse z-0" />
              
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <OtherSteelGallery
            images={otherSteelImages}
            initialIndex={activeImageIndex}
            onClose={() => setActiveImageIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Pencil, Paintbrush, User, Monitor, Image, Frame } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

const categories = [
  {
    icon: User,
    title: 'Portraits',
    description: 'Lifelike pencil and charcoal portraits capturing the essence of the subject.',
    count: 29,
  },
  {
    icon: Monitor,
    title: 'Digital Artwork',
    description: 'Cutting-edge digital creations blending technology with artistic vision.',
    count: 7,
  },
  
  {
    icon: Pencil,
    title: 'Miscellaneous',
    description: 'Sketch drafts, still lifes, technical layouts, and custom drawings.',
    count: 20,
  },
  {
    icon: Paintbrush,
    title: 'Old Masters Copy',
    description: 'Oil paintings replicating classical landscape and figure styles.',
    count: 4,
  },
  {
    icon: Image,
    title: 'Wall Arts',
    description: 'Statement mural pieces designed to transform and elevate any interior space.',
    count: 4,
  },
  {
    icon : Image ,
    title :'Logo Design',
    description : 'Custom logo designs for businesses and organizations.',
    count :16
  }
];

export function ArtCategories() {
  return (
    <section className="py-24 md:py-32 bg-[#F0EBD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-[#748CAB] text-sm tracking-[0.3em] uppercase mb-4">
              Explore
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#0D1321]">
              Art Categories
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <SectionReveal key={category.title} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group p-8 rounded-[16px] bg-white border border-[#DAD2BC] hover:border-[#748CAB] shadow-[0_10px_30px_rgba(13,19,33,0.08)] hover:shadow-[0_15px_40px_rgba(13,19,33,0.15)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#748CAB]/10 flex items-center justify-center mb-6 group-hover:bg-[#748CAB]/20 transition-colors">
                  <category.icon size={28} className="text-[#748CAB]" />
                </div>
                <h3 className="font-playfair text-xl text-[#0D1321] mb-2">
                  {category.title}
                </h3>
                <p className="text-[#3E5C76] text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <span className="text-[#748CAB] text-sm font-medium">
                  {category.count} artworks
                </span>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

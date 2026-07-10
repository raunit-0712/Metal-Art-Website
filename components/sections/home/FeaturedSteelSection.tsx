'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { steelFeatured, SteelProject, steelProjects } from '@/lib/data';

interface FeaturedSteelSectionProps {
  initialProjects?: SteelProject[];
}

export function FeaturedSteelSection({ initialProjects }: FeaturedSteelSectionProps) {
  const activeProjects = initialProjects || steelProjects;
  const featuredProjects = activeProjects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <SectionReveal>
              <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
                Metal Works
              </p>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-playfair text-4xl md:text-5xl text-white">
                Featured Projects
              </h2>
            </SectionReveal>
          </div>
          <SectionReveal delay={0.2}>
            <Link
              href="/steel-works"
              className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent transition-colors group mt-6 md:mt-0"
            >
              <span className="text-sm tracking-wider uppercase">
                View All Projects
              </span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </SectionReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <SectionReveal key={project.id} delay={0.1 * index}>
              <Link href={`/projects?category=steel&id=${project.id}`}>
                <motion.div className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden rounded-xl mb-3 bg-brand-primary border border-white/5 shadow-sm">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt || project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-playfair text-lg text-white group-hover:text-brand-secondary transition-colors">
                    {project.title}
                  </h3>
                </motion.div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

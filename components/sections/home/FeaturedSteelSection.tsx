'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { projects } from '@/lib/data/projects';

export function FeaturedSteelSection() {
  const featuredProjects = projects
    .filter((p) => p.category === 'steel' && p.featured)
    .slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <SectionReveal>
              <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
                Steel Works
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
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-brand-secondary text-xs tracking-wider uppercase mb-2 block">
                    {project.subcategory}
                  </span>
                  <h3 className="font-playfair text-2xl text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={`/projects?category=steel&id=${project.id}`}
                    className="inline-flex items-center gap-2 text-brand-secondary text-sm group/link"
                  >
                    <span>View Project</span>
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

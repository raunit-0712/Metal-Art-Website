'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, X } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { steelProjects } from '@/lib/data';
import { SteelProjectGallery } from './SteelProjectGallery';

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const selected = steelProjects.find((p) => p.id === selectedProject);

  // Deep linking: Auto-open modal if URL contains 'id' matching a steel project
  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const found = steelProjects.find(
        (p) =>
          p.id === id ||
          p.images[0].src.includes(`/${id}/`) ||
          p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(id.toLowerCase())
      );
      if (found) {
        setSelectedProject(found.id);
      }
    }
  }, [searchParams]);

  return (
    <section className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-brand-text">
              Project Showcase
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steelProjects.map((project, index) => (
            <SectionReveal key={project.id} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Image Container with Luxury Borders and Overlays */}
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-[16/10] bg-brand-primary border border-black/5 group-hover:border-brand-secondary/30 transition-colors duration-300">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt || project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Location Overlay */}
                  <div className="absolute top-4 left-4 bg-brand-primary/75 backdrop-blur-md px-3 py-1 rounded text-[10px] tracking-wider uppercase text-white/80 font-medium z-[2]">
                    {project.location}
                  </div>

                  {/* Year Overlay */}
                  {project.year && (
                    <div className="absolute top-4 right-4 bg-brand-primary/75 backdrop-blur-md px-3 py-1 rounded text-[10px] tracking-wider text-brand-secondary font-semibold z-[2]">
                      {project.year}
                    </div>
                  )}

                  {/* Bottom Text Overlays on Hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]">
                    <span className="text-brand-secondary text-xs tracking-wider uppercase font-semibold">
                      {project.subcategory}
                    </span>
                    <div className="flex items-center gap-1.5 text-white text-xs tracking-wider uppercase">
                      <span>View Details</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Metadata details */}
                <h3 className="font-playfair text-2xl text-brand-text mb-2 group-hover:text-brand-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-brand-text/60 text-sm line-clamp-2 mb-4 font-light">
                  {project.overview}
                </p>

                {/* Short services listing */}
                {project.scopeOfWork && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.scopeOfWork.slice(0, 3).map((scope, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-wider text-brand-text/40 px-2 py-0.5 bg-brand-text/5 rounded-full">
                        {scope}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 text-white/60 hover:text-white transition-colors z-10 p-2 bg-white/5 rounded-full"
              aria-label="Close Project Modal"
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-6xl w-full bg-brand-primary rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <SteelProjectGallery project={selected} onClose={() => setSelectedProject(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

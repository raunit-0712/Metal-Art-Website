'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Calendar, MapPin, User, Layers } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { steelProjects } from '@/lib/data';

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const selected = steelProjects.find((p) => p.id === selectedProject);

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
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-brand-secondary text-sm tracking-wider uppercase">
                      {project.subcategory}
                    </span>
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl text-brand-text mb-2 group-hover:text-brand-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-brand-text/60 text-sm line-clamp-2">
                  {project.description}
                </p>
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
              className="fixed top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full bg-brand-primary rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={selected.images[0]}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <span className="text-brand-secondary text-sm tracking-wider uppercase">
                  {selected.subcategory}
                </span>
                <h3 className="font-playfair text-3xl text-white mt-2 mb-4">
                  {selected.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {selected.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {selected.materials && (
                    <div className="flex items-center gap-2">
                      <Layers size={18} className="text-brand-secondary" />
                      <span className="text-white/60 text-sm">{selected.materials}</span>
                    </div>
                  )}
                  {selected.completionDate && (
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-brand-secondary" />
                      <span className="text-white/60 text-sm">{selected.completionDate}</span>
                    </div>
                  )}
                  {selected.client && (
                    <div className="flex items-center gap-2">
                      <User size={18} className="text-brand-secondary" />
                      <span className="text-white/60 text-sm">{selected.client}</span>
                    </div>
                  )}
                  {selected.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-brand-secondary" />
                      <span className="text-white/60 text-sm">{selected.location}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-white/60 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

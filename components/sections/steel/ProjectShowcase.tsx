'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { steelProjects, SteelProject } from '@/lib/data';
import { SteelProjectGallery } from './SteelProjectGallery';

interface ProjectShowcaseProps {
  initialSteelProjects?: SteelProject[];
}

export function ProjectShowcase({ initialSteelProjects }: ProjectShowcaseProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const activeProjects = initialSteelProjects || steelProjects;
  const selected = activeProjects.find((p) => p.id === selectedProject);

  // Deep linking: Auto-open modal if URL contains 'id' matching a steel project
  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const found = activeProjects.find(
        (p) =>
          p.id === id ||
          p.images[0].src.includes(`/${id}/`) ||
          p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(id.toLowerCase())
      );
      if (found) {
        setSelectedProject(found.id);
      }
    }
  }, [searchParams, activeProjects]);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {activeProjects.map((project, index) => (
            <SectionReveal key={project.id} delay={0.1 * index}>
              <motion.div
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Image Container with Rounded Corners and Soft Shadow */}
                <div className="relative overflow-hidden rounded-xl mb-3 aspect-square bg-brand-primary border border-black/5 shadow-sm">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt || project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-playfair text-lg text-brand-text group-hover:text-brand-secondary transition-colors">
                  {project.title}
                </h3>
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

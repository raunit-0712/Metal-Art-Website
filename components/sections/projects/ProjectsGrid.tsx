'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Search, Filter, X, ArrowRight, Grid3X3, List } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { steelProjects, artProjects, artworks, artCategories, SteelProject } from '@/lib/data';
import { SteelProjectGallery } from '@/components/sections/steel/SteelProjectGallery';

const categories = ['All', 'Steel', 'Art', 'Residential', 'Commercial', 'Custom'];
const types = ['All', 'Staircases', 'Railings', 'Lift Cladding', 'Decorative Panels', 'Metal Shelves', 'Architectural Metal', ...artCategories];

interface ProjectsGridProps {
  initialSteelProjects?: SteelProject[];
}

export function ProjectsGrid({ initialSteelProjects }: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const searchParams = useSearchParams();

  const allItems = useMemo(() => {
    const activeSteel = initialSteelProjects || steelProjects;
    const steelItems = activeSteel.map((p) => ({ ...p, itemType: 'project' as const }));
    const artProjectItems = artProjects.map((p) => ({ ...p, itemType: 'project' as const }));
    const artItems = artworks.map((a) => ({
      id: a.id,
      title: a.title,
      category: 'art' as const,
      subcategory: a.category,
      description: a.description,
      images: [a.image],
      featured: a.featured,
      tags: [a.category],
      itemType: 'artwork' as const,
      medium: a.medium,
      size: a.size,
      year: String(a.year),
    }));
    return [...steelItems, ...artProjectItems, ...artItems];
  }, [initialSteelProjects]);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        (selectedCategory === 'Steel' && item.category === 'steel') ||
        (selectedCategory === 'Art' && item.category === 'art') ||
        (selectedCategory === 'Residential' && item.tags?.includes('residential')) ||
        (selectedCategory === 'Commercial' && item.tags?.includes('commercial')) ||
        (selectedCategory === 'Custom' && item.tags?.includes('custom'));

      const matchesType =
        selectedType === 'All' || item.subcategory === selectedType;

      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesType && matchesSearch;
    });
  }, [allItems, selectedCategory, selectedType, searchQuery]);

  const selected = allItems.find((i) => i.id === selectedProject);

  // Deep linking: Auto-open modal if URL contains 'id' matching a project ID or slug
  useEffect(() => {
    const id = searchParams.get('id');
    const category = searchParams.get('category');
    if (id) {
      // Find the project in all items matching the slug in path or ID
      const found = allItems.find(
        (item) =>
          item.id === id ||
          (item.images[0] && typeof item.images[0] !== 'string' && item.images[0].src.includes(`/${id}/`)) ||
          item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(id.toLowerCase())
      );
      if (found) {
        setSelectedProject(found.id);
        if (category) {
          setSelectedCategory(category === 'steel' ? 'Steel' : 'Art');
        }
      }
    }
  }, [searchParams, allItems]);

  return (
    <section className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <SectionReveal>
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <div className="relative flex-1 w-full">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/40" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-colors bg-white text-brand-text"
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-white transition-colors md:hidden text-brand-text"
                >
                  <Filter size={18} />
                  Filters
                </button>
                {selectedCategory !== 'Steel' && (
                  <div className="hidden md:flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
                    <button
                      aria-label="Grid View"
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'grid' ? 'bg-brand-secondary text-white' : 'text-brand-text/60 hover:text-brand-text'
                      }`}
                    >
                      <Grid3X3 size={18} />
                    </button>
                    <button
                      aria-label="List View"
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'list' ? 'bg-brand-secondary text-white' : 'text-brand-text/60 hover:text-brand-text'
                      }`}
                    >
                      <List size={18} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className={`space-y-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-brand-text/60 py-2">Category:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      if (category === 'Steel') {
                        setViewMode('grid');
                      }
                    }}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedCategory === category
                        ? 'bg-brand-secondary text-white'
                        : 'bg-white text-brand-text/70 hover:bg-brand-secondary/10 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-brand-text/60 py-2">Type:</span>
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedType === type
                        ? 'bg-brand-secondary text-white'
                        : 'bg-white text-brand-text/70 hover:bg-brand-secondary/10 border border-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-brand-text/60 text-sm">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        {/* Grid View */}
        {(viewMode === 'grid' || selectedCategory === 'Steel') && (
          <div className={selectedCategory === 'Steel'
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          }>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const imgObj = item.images[0];
                const src = typeof imgObj === 'string' ? imgObj : imgObj.src;
                const alt = typeof imgObj === 'string' ? item.title : imgObj.alt || item.title;

                if (item.category === 'steel') {
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedProject(item.id)}
                    >
                      {/* Project Card Image Container */}
                      <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-brand-primary border border-black/5 shadow-sm">
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>

                      <h3 className="font-sans text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.35] tracking-[-0.02em] text-[#1F1F1F] text-center mt-4 h-[2.7em] overflow-hidden text-balance group-hover:text-brand-secondary transition-colors duration-300">
                        {item.title}
                      </h3>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(item.id)}
                  >
                    {/* Project Card Image Container */}
                    <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3] bg-brand-primary border border-black/5 group-hover:border-brand-secondary/30 transition-colors duration-300">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>

                    <h3 className="font-playfair text-xl text-brand-text mb-1 group-hover:text-brand-secondary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-brand-text/60 text-sm line-clamp-2 font-light">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && selectedCategory !== 'Steel' && (
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const imgObj = item.images[0];
                const src = typeof imgObj === 'string' ? imgObj : imgObj.src;
                const alt = typeof imgObj === 'string' ? item.title : imgObj.alt || item.title;

                if (item.category === 'steel') {
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                      onClick={() => setSelectedProject(item.id)}
                    >
                      <div className="relative md:w-48 h-32 rounded-lg overflow-hidden shrink-0 aspect-[4/3] bg-brand-primary">
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          sizes="200px"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="font-sans text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.35] tracking-[-0.02em] text-[#1F1F1F] text-center mt-4 group-hover:text-brand-secondary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(item.id)}
                  >
                    <div className="relative md:w-48 h-32 rounded-lg overflow-hidden shrink-0 aspect-[4/3] bg-brand-primary">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="200px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs tracking-wider uppercase px-2 py-1 rounded bg-brand-accent/20 text-brand-accent">
                          Art Gallery
                        </span>
                        <span className="text-brand-text/40 text-xs">{item.subcategory}</span>
                      </div>
                      <h3 className="font-playfair text-xl text-brand-text mb-2 group-hover:text-brand-secondary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-brand-text/60 text-sm line-clamp-2 mb-3 font-light">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-brand-secondary text-sm">
                        <span>View Details</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-brand-text/60 text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 text-white/60 hover:text-white transition-colors z-[110] p-2 bg-white/5 hover:bg-white/10 rounded-full"
              aria-label="Close Project Modal"
            >
              <X size={32} />
            </button>

            {selected.category === 'steel' ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="max-w-6xl w-full bg-brand-primary rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <SteelProjectGallery project={selected as any} onClose={() => setSelectedProject(null)} />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative max-w-full max-h-[85vh] aspect-auto flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={typeof selected.images[0] === 'string' ? selected.images[0] : (selected.images[0] as any).src}
                  alt={selected.title}
                  className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

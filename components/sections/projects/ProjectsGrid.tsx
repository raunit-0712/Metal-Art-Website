'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, ArrowRight, Grid3X3, List } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { projects, artworks } from '@/lib/data/projects';

const categories = ['All', 'Steel', 'Art', 'Residential', 'Commercial', 'Custom'];
const types = ['All', 'Staircases', 'Railings', 'Lift Cladding', 'Decorative Panels', 'Portrait', 'Fine Art', 'Digital'];

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const allItems = useMemo(() => {
    const steelItems = projects.map((p) => ({ ...p, itemType: 'project' as const }));
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
      year: a.year,
      price: a.price,
      available: a.available,
    }));
    return [...steelItems, ...artItems];
  }, []);

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
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-colors bg-white"
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-white transition-colors md:hidden"
                >
                  <Filter size={18} />
                  Filters
                </button>
                <div className="hidden md:flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid' ? 'bg-brand-secondary text-white' : 'text-brand-text/60 hover:text-brand-text'
                    }`}
                  >
                    <Grid3X3 size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list' ? 'bg-brand-secondary text-white' : 'text-brand-text/60 hover:text-brand-text'
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className={`space-y-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-brand-text/60 py-2">Category:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
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
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
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
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className={`text-xs tracking-wider uppercase px-2 py-1 rounded ${
                        item.category === 'steel' ? 'bg-brand-secondary text-white' : 'bg-brand-accent text-brand-primary'
                      }`}>
                        {item.category === 'steel' ? 'Steel' : 'Art'}
                      </span>
                      <ArrowRight size={20} className="text-white" />
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl text-brand-text mb-1 group-hover:text-brand-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-brand-text/60 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedProject(item.id)}
                >
                  <div className="md:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs tracking-wider uppercase px-2 py-1 rounded ${
                        item.category === 'steel' ? 'bg-brand-secondary/10 text-brand-secondary' : 'bg-brand-accent/20 text-brand-accent'
                      }`}>
                        {item.category === 'steel' ? 'Steel Works' : 'Art Gallery'}
                      </span>
                      <span className="text-brand-text/40 text-xs">{item.subcategory}</span>
                    </div>
                    <h3 className="font-playfair text-xl text-brand-text mb-2 group-hover:text-brand-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-text/60 text-sm line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-brand-secondary text-sm">
                      <span>View Details</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
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
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 overflow-y-auto"
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
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs tracking-wider uppercase px-3 py-1 rounded ${
                    selected.category === 'steel' ? 'bg-brand-secondary text-white' : 'bg-brand-accent text-brand-primary'
                  }`}>
                    {selected.category === 'steel' ? 'Steel Works' : 'Art Gallery'}
                  </span>
                  <span className="text-white/40 text-sm">{selected.subcategory}</span>
                </div>
                <h3 className="font-playfair text-3xl text-white mb-4">
                  {selected.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {selected.description}
                </p>
                {'medium' in selected && selected.medium && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white/60 text-sm">
                    <div>
                      <span className="text-white/40">Medium:</span> {selected.medium}
                    </div>
                    {'size' in selected && selected.size && (
                      <div>
                        <span className="text-white/40">Size:</span> {selected.size}
                      </div>
                    )}
                    {'year' in selected && selected.year && (
                      <div>
                        <span className="text-white/40">Year:</span> {selected.year}
                      </div>
                    )}
                    {'price' in selected && selected.price && (
                      <div>
                        <span className="text-white/40">Price:</span> {selected.price}
                      </div>
                    )}
                    {'available' in selected && (
                      <div>
                        <span className="text-white/40">Status:</span>{' '}
                        <span className={selected.available ? 'text-green-400' : 'text-red-400'}>
                          {selected.available ? 'Available' : 'Sold'}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                {'materials' in selected && selected.materials && (
                  <div className="text-white/60 text-sm">
                    <span className="text-white/40">Materials:</span> {selected.materials}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

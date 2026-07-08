'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ZoomIn, Filter } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { artworks, artCategories } from '@/lib/data';

const categories = ['All', ...artCategories];

export function ArtGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredArtworks = useMemo(() => {
    return artworks.filter((artwork) => {
      const matchesCategory = selectedCategory === 'All' || artwork.category === selectedCategory;
      const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artwork.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const selected = artworks.find((a) => a.id === selectedArtwork);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
              Collection
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-brand-text">
              Gallery
            </h2>
          </div>
        </SectionReveal>

        {/* Search & Filter */}
        <SectionReveal delay={0.1}>
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <div className="relative flex-1 w-full">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/40" />
                <input
                  type="text"
                  placeholder="Search artworks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-colors bg-white"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:bg-white transition-colors md:hidden"
              >
                <Filter size={18} />
                Filters
              </button>
            </div>

            <div className={`flex flex-wrap gap-3 ${showFilters ? 'block' : 'hidden md:flex'}`}>
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
          </div>
        </SectionReveal>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedArtwork(artwork.id)}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-secondary text-xs tracking-wider uppercase">
                    {artwork.category}
                  </span>
                  <h3 className="font-playfair text-lg text-white mt-1">
                    {artwork.title}
                  </h3>
                  <p className="text-white/60 text-sm">{artwork.medium}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={18} className="text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-brand-text/60 text-lg">No artworks found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Artwork Detail Modal */}
      <AnimatePresence>
        {selectedArtwork && selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedArtwork(null)}
          >
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <span className="text-brand-secondary text-sm tracking-wider uppercase">
                  {selected.category}
                </span>
                <h3 className="font-playfair text-3xl md:text-4xl mt-2 mb-4">
                  {selected.title}
                </h3>
                <div className="space-y-3 text-white/70 mb-6">
                  <p>
                    <span className="text-white/40">Medium:</span>{' '}
                    {selected.medium}
                  </p>
                  <p>
                    <span className="text-white/40">Size:</span>{' '}
                    {selected.size}
                  </p>
                  <p>
                    <span className="text-white/40">Year:</span>{' '}
                    {selected.year}
                  </p>
                </div>
                <p className="text-white/60 leading-relaxed mb-8">
                  {selected.description}
                </p>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-brand-secondary text-white rounded hover:bg-brand-accent transition-colors"
                >
                  Inquire About This Artwork
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

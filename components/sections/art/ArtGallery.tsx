'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ZoomIn, Filter } from 'lucide-react';
import Image from 'next/image';
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
    <section id="gallery" className="py-24 md:py-32 bg-[#F0EBD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="text-[#748CAB] text-sm tracking-[0.3em] uppercase mb-4">
              Collection
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#0D1321]">
              Gallery
            </h2>
          </div>
        </SectionReveal>

        {/* Search & Filter */}
        <SectionReveal delay={0.1}>
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <div className="relative flex-1 w-full">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#748CAB]" />
                <input
                  type="text"
                  placeholder="Search artworks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#DAD2BC] focus:border-[#748CAB] focus:ring-1 focus:ring-[#748CAB] outline-none transition-colors bg-white text-[#0D1321]"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3 border border-[#DAD2BC] rounded-lg hover:bg-white transition-colors md:hidden text-[#1D2D44]"
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
                  className={`px-4 py-2 rounded-full text-sm transition-all border ${
                    selectedCategory === category
                      ? 'bg-[#1D2D44] border-[#1D2D44] text-white'
                      : 'bg-transparent border-[#748CAB] text-[#1D2D44] hover:bg-[#748CAB] hover:text-white'
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
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid overflow-hidden rounded-[16px] border border-[#DAD2BC] hover:border-[#748CAB] bg-white shadow-[0_10px_30px_rgba(13,19,33,0.08)] hover:shadow-[0_15px_40px_rgba(13,19,33,0.15)] transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedArtwork(artwork.id)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    width={600}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  {/* Branded Watermark overlay */}
                  <div className="absolute bottom-4 right-4 w-[12%] min-w-[50px] max-w-[90px] aspect-[1402/567] z-10 pointer-events-none select-none opacity-15">
                    <Image
                      src="/images/watermark.webp"
                      alt="Aakriti Atelier Watermark"
                      width={140}
                      height={57}
                      className="w-full h-full object-contain"
                    />
                  </div>
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
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedArtwork(null)}
          >
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-[110] p-2 bg-white/5 hover:bg-white/10 rounded-full"
              aria-label="Close Lightbox"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-full max-h-[85vh] aspect-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
                />
                {/* Branded Watermark overlay */}
                <div className="absolute bottom-4 right-4 w-[12%] min-w-[70px] max-w-[150px] aspect-[1402/567] z-10 pointer-events-none select-none opacity-15">
                  <Image
                    src="/images/watermark.webp"
                    alt="Aakriti Atelier Watermark"
                    width={140}
                    height={57}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

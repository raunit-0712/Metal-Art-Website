'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, X, ZoomIn } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { artworks } from '@/lib/data';

function getBalancedFeaturedArtworks(artworksList: typeof artworks): typeof artworks {
  // Only consider featured artworks
  const featured = artworksList.filter(a => a.featured);
  
  // Group by category
  const grouped = new Map<string, typeof artworks>();
  featured.forEach(a => {
    if (!grouped.has(a.category)) {
      grouped.set(a.category, []);
    }
    grouped.get(a.category)!.push(a);
  });
  
  const categoryOrder = [
    'Old Masters Copy',
    'Portraits',
    'Wall Arts',
    'Digital Artwork',
    'Logos',
    'Miscellaneous'
  ];
  
  // Preferred visual representative for each category to ensure high quality
  const preferredIds = [
    'om4', // Grand Landscape Master Copy (Old Masters Copy)
    'p23', // Portrait of Grace (Portraits)
    'w1',  // Textured Wall Mural I (Wall Arts)
    'd3',  // Divine Union (Radha Krishna) (Digital Artwork)
    'l16', // Ventus Logo Design (Logos)
    'm19'  // Radha Krishna Sketch Study (Miscellaneous)
  ];
  
  const selected: typeof artworks = [];
  
  // 1. Try to pick the preferred ones first
  preferredIds.forEach(id => {
    const found = featured.find(a => a.id === id);
    if (found && !selected.some(s => s.category === found.category)) {
      selected.push(found);
    }
  });
  
  // 2. Fill in from other categories if we don't have 6 yet
  const remainingCategories = Array.from(grouped.keys()).filter(cat => !selected.some(s => s.category === cat));
  remainingCategories.forEach(cat => {
    if (selected.length < 6) {
      const items = grouped.get(cat)!;
      selected.push(items[0]);
    }
  });
  
  // 3. If we still have fewer than 6 artworks, round-robin select from existing categories
  let index = 0;
  while (selected.length < 6 && selected.length < featured.length) {
    const cat = categoryOrder[index % categoryOrder.length];
    const items = grouped.get(cat) || [];
    const unselected = items.find(item => !selected.some(s => s.id === item.id));
    if (unselected) {
      selected.push(unselected);
    }
    index++;
  }
  
  // 4. Ensure the most visually impressive artwork 'om4' is first.
  const firstId = 'om4';
  const firstIndex = selected.findIndex(s => s.id === firstId);
  if (firstIndex > 0) {
    const [firstItem] = selected.splice(firstIndex, 1);
    selected.unshift(firstItem);
  }
  
  return selected;
}

export function FeaturedArtSection() {
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null);
  const featuredArtworks = getBalancedFeaturedArtworks(artworks);

  const selectedArt = artworks.find((a) => a.id === selectedArtwork);

  return (
    <section className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <SectionReveal>
              <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
                Art Gallery
              </p>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-playfair text-4xl md:text-5xl text-brand-text">
                Featured Artworks
              </h2>
            </SectionReveal>
          </div>
          <SectionReveal delay={0.2}>
            <Link
              href="/art-gallery"
              className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent transition-colors group mt-6 md:mt-0"
            >
              <span className="text-sm tracking-wider uppercase">
                View All Artworks
              </span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </SectionReveal>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {featuredArtworks.map((artwork, index) => (
            <SectionReveal key={artwork.id} delay={0.1 * index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedArtwork(artwork.id)}
              >
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedArtwork && selectedArt && (
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
              <img
                src={selectedArt.image}
                alt={selectedArt.title}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

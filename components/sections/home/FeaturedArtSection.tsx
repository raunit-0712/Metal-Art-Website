'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, X, ZoomIn } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { artworks } from '@/lib/data';

export function FeaturedArtSection() {
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null);
  const featuredArtworks = artworks.filter((a) => a.featured).slice(0, 6);

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
                whileHover={{ scale: 1.02 }}
                className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedArtwork(artwork.id)}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/40 transition-all duration-500 flex items-center justify-center">
                  <ZoomIn
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-brand-secondary text-xs tracking-wider uppercase">
                    {artwork.category}
                  </span>
                  <h3 className="font-playfair text-lg text-white">
                    {artwork.title}
                  </h3>
                </div>
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
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={selectedArt.image}
                  alt={selectedArt.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <span className="text-brand-secondary text-sm tracking-wider uppercase">
                  {selectedArt.category}
                </span>
                <h3 className="font-playfair text-3xl md:text-4xl mt-2 mb-4">
                  {selectedArt.title}
                </h3>
                <div className="space-y-3 text-white/70">
                  <p>
                    <span className="text-white/40">Medium:</span>{' '}
                    {selectedArt.medium}
                  </p>
                  <p>
                    <span className="text-white/40">Size:</span>{' '}
                    {selectedArt.size}
                  </p>
                  <p>
                    <span className="text-white/40">Year:</span>{' '}
                    {selectedArt.year}
                  </p>
                  {selectedArt.price && (
                    <p>
                      <span className="text-white/40">Price:</span>{' '}
                      {selectedArt.price}
                    </p>
                  )}
                </div>
                <p className="mt-6 text-white/60 leading-relaxed">
                  {selectedArt.description}
                </p>
                {selectedArt.available && (
                  <Link
                    href="/contact"
                    className="inline-block mt-8 px-6 py-3 bg-brand-secondary text-white rounded hover:bg-brand-accent transition-colors"
                  >
                    Inquire About This Piece
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

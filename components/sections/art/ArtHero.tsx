'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ChevronRight } from 'lucide-react';

export function ArtHero() {
  return (
    <section className="relative min-h-screen bg-brand-background flex items-center justify-center overflow-hidden">
      {/* Soft Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2)',
          }}
        />
        <div className="absolute inset-0 bg-brand-background/90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-secondary text-sm tracking-[0.4em] uppercase mb-6"
        >
          Fine Arts & Creative Works
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-brand-text mb-6"
        >
          Art Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-brand-text/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Timeless artistic creations that capture emotion, beauty, and the
          essence of human expression through various mediums.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#gallery"
            className="px-8 py-4 bg-brand-secondary text-white font-medium rounded-sm hover:bg-brand-accent transition-colors flex items-center gap-2"
          >
            View Gallery
            <ChevronRight size={18} />
          </Link>
          <Link
            href="#commission"
            className="px-8 py-4 border border-brand-text/20 text-brand-text font-medium rounded-sm hover:bg-brand-text/5 transition-colors"
          >
            Commission Artwork
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-brand-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

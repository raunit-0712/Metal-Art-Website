'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ChevronRight } from 'lucide-react';

export function ArtHero() {
  return (
    <section className="relative min-h-screen bg-[#F8F6F3] flex items-center justify-center overflow-hidden">
      {/* Soft Background */}
      <div className="absolute inset-0 bg-[#F8F6F3]">
        <Image
          src="/images/arts/old-master-copy/landscapes_by_mnorma_d3gpwbi.jpg"
          alt="Fine art gallery showcase background"
          fill
          priority
          sizes="100vw" 
          className="object-cover object-center opacity-[0.30]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F3] via-transparent to-[#F8F6F3]/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#B08D57] text-sm tracking-[0.4em] uppercase mb-6"
        >
          Fine Arts & Creative Works
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[#111111] mb-6"
        >
          Art Gallery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#666666] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
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
            className="px-8 py-4 bg-[#B08D57] text-[#FCFBF8] font-semibold rounded-md hover:bg-[#D4AF37] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#B08D57]/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Gallery
            <ChevronRight size={18} />
          </Link>
          <Link
            href="#courses"
            className="px-8 py-4 bg-transparent border border-[#E8E4DD] text-[#666666] font-medium rounded-md hover:bg-[#F3EEE5] hover:text-[#111111] transition-all duration-300 text-center hover:scale-[1.02] active:scale-[0.98]"
          >
            Courses & Certification
          </Link>
          <Link
            href="#commission"
            className="px-8 py-4 bg-transparent border border-[#E8E4DD] text-[#666666] font-medium rounded-md hover:bg-[#F3EEE5] hover:text-[#111111] transition-all duration-300 text-center hover:scale-[1.02] active:scale-[0.98]"
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
          <ArrowDown size={20} className="text-[#B08D57]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

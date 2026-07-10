'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ChevronRight } from 'lucide-react';

export function SteelHero() {
  return (
    <section className="relative min-h-screen bg-brand-primary flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/steel/others-project-images/lobby-portal-framing.jpg"
          alt="Architectural Metal Works showcase background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/60 via-transparent to-brand-primary" />
      </div>

      {/* Industrial Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-secondary text-sm tracking-[0.4em] uppercase mb-6"
        >
          Architectural Metal Fabrication
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white mb-6"
        >
          Metal Works
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Precision-engineered architectural metalwork that transforms spaces
          into statements of industrial elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#services"
            className="px-8 py-4 bg-brand-secondary text-white font-medium rounded-sm hover:bg-brand-accent transition-colors flex items-center gap-2"
          >
            Our Services
            <ChevronRight size={18} />
          </Link>
          <Link
            href="#quote"
            className="px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:bg-white/10 transition-colors"
          >
            Request a Quote
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

'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.8 }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-brand-primary"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/hero.avif"
          alt="Luxury steel works and fine art studio backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/70 via-brand-primary/50 to-brand-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-brand-secondary text-sm md:text-base tracking-[0.4em] uppercase mb-6"
          >
            Precision in Metal. Creativity in Art
          </motion.p>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="font-moontime text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8"
          >   
            Aakriti Atelier
            <span className="block text-gradient text-2xl sm:text-5xl md:text-4xl lg:text-6xl mt-2">Shaping Ideas Into Reality
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We craft architectural metal masterpieces and timeless artistic
            creations that transform spaces into extraordinary experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              href="/steel-works"
              className="group px-8 py-4 bg-brand-secondary text-white font-medium rounded-sm hover:bg-brand-accent transition-all duration-300 flex items-center gap-2"
            >
              Explore Steel Works
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/art-gallery"
              className="group px-8 py-4 border border-white/30 text-white font-medium rounded-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              Explore Art Gallery
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown size={20} className="text-brand-secondary" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-8 w-px h-32 bg-gradient-to-b from-transparent via-brand-secondary/50 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-brand-secondary/50 to-transparent hidden lg:block" />
    </section>
  );
}

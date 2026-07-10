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
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.8,
        }
      );
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-brand-primary"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/homeimg.jpeg"
          alt="Luxury Metal Works and Fine Art Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/70 via-brand-primary/50 to-brand-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-6 text-sm md:text-base uppercase tracking-[0.4em] text-brand-secondary"
          >
            Precision in Metal. Creativity in Art
          </motion.p>

          {/* Main Heading */}
          <h1
            ref={titleRef}
            className="text-white leading-[1.25]"
          >
            {/* Company Name */}
            <span className="block font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold">
              Aakriti Atelier
            </span>

            {/* Tagline */}
            <span
  className="
    block
    font-greatvibes
    text-gradient
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    font-normal
    tracking-wide
    leading-[1.8]
    pt-4
    pb-4
    overflow-visible
  "
>
  Shaping Ideas Into Reality
</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mx-auto mt-4 mb-12 max-w-2xl text-lg md:text-xl leading-relaxed text-white/75"
          >
            We craft architectural metal masterpieces and timeless artistic
            creations that transform spaces into extraordinary experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              href="/steel-works"
              className="group px-8 py-4 bg-brand-secondary text-white rounded-sm font-medium hover:bg-brand-accent transition-all duration-300 flex items-center gap-2"
            >
              Explore Metal Works
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/art-gallery"
              className="group px-8 py-4 border border-white/30 text-white rounded-sm font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              Explore Art Gallery
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>

          <ArrowDown
            size={20}
            className="text-brand-secondary"
          />
        </motion.div>
      </motion.div>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 right-8 hidden h-32 w-px bg-gradient-to-b from-transparent via-brand-secondary/50 to-transparent lg:block" />

      <div className="absolute bottom-1/4 left-8 hidden h-32 w-px bg-gradient-to-b from-transparent via-brand-secondary/50 to-transparent lg:block" />
    </section>
  );
}
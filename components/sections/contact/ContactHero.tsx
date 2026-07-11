'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] bg-brand-primary flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/steel/projects/bangalore-t1-airport/WhatsApp Image 2026-07-10 at 9.57.19 AM (1).jpeg"
          alt="Contact enquiry and studio location background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-primary/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-6"
        >
          Get in Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Ready to start your project? We&apos;d love to hear from you. Reach out
          and let&apos;s create something extraordinary together.
        </motion.p>
      </div>
    </section>
  );
}

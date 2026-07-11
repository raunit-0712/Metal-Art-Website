'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { MagneticButton } from '@/components/shared/MagneticButton';
import { CONTACT } from '@/lib/config/contact';

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-brand-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionReveal>
          <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-6">
            Start Your Project
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Let&apos;s Create Something
            <span className="block text-gradient">Exceptional Together</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
            Whether you envision a stunning architectural metal feature or a
            timeless piece of art, we&apos;re here to bring your vision to life
            with precision and creativity.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <MagneticButton>
              <Link
                href="/contact"
                className="px-8 py-4 bg-brand-secondary text-white font-medium rounded-sm hover:bg-brand-accent transition-colors flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </MagneticButton>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-0">
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`https://wa.me/91${CONTACT.steel.whatsapp}?text=${encodeURIComponent(CONTACT.steel.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-brand-secondary transition-colors"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm">Metal Works</span>
                </a>
                <a
                  href={`https://wa.me/91${CONTACT.art.whatsapp}?text=${encodeURIComponent(CONTACT.art.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-brand-secondary transition-colors"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm">Fine Arts</span>
                </a>
              </div>
              <a
                href="mailto:hello@aakritiatelier.in"
                className="flex items-center gap-2 text-white/60 hover:text-brand-secondary transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">
                  hello@aakritiatelier.in
                </span>
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

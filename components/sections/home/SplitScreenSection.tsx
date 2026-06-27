'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Palette } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SplitScreenSection() {
  const [activeSide, setActiveSide] = useState<'left' | 'right' | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (side: 'left' | 'right') => {
    setActiveSide(side);
    if (side === 'left' && leftRef.current && rightRef.current) {
      gsap.to(leftRef.current, { flex: 2, duration: 0.6, ease: 'power2.out' });
      gsap.to(rightRef.current, { flex: 1, duration: 0.6, ease: 'power2.out' });
    } else if (side === 'right' && leftRef.current && rightRef.current) {
      gsap.to(leftRef.current, { flex: 1, duration: 0.6, ease: 'power2.out' });
      gsap.to(rightRef.current, { flex: 2, duration: 0.6, ease: 'power2.out' });
    }
  };

  const handleMouseLeave = () => {
    setActiveSide(null);
    if (leftRef.current && rightRef.current) {
      gsap.to(leftRef.current, { flex: 1, duration: 0.6, ease: 'power2.out' });
      gsap.to(rightRef.current, { flex: 1, duration: 0.6, ease: 'power2.out' });
    }
  };

  return (
    <section ref={sectionRef} className="h-screen min-h-[600px] relative overflow-hidden">
      <div className="flex h-full">
        {/* Steel Side */}
        <div
          ref={leftRef}
          className="flex-1 relative cursor-pointer overflow-hidden"
          onMouseEnter={() => handleMouseEnter('left')}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2)',
              transform: activeSide === 'left' ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-brand-primary/70" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Wrench size={48} className="text-brand-secondary mx-auto mb-6" />
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                Steel & Metal
              </h2>
              <p className="text-white/70 text-lg max-w-md mx-auto mb-8">
                Precision-engineered architectural metalwork that defines spaces
                and stands the test of time.
              </p>
              <Link
                href="/steel-works"
                className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-accent transition-colors group"
              >
                <span className="text-sm tracking-wider uppercase">
                  Explore Steel Works
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-white/20 relative z-20" />

        {/* Art Side */}
        <div
          ref={rightRef}
          className="flex-1 relative cursor-pointer overflow-hidden"
          onMouseEnter={() => handleMouseEnter('right')}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2)',
              transform: activeSide === 'right' ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-brand-primary/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Palette size={48} className="text-brand-accent mx-auto mb-6" />
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                Fine Arts
              </h2>
              <p className="text-white/70 text-lg max-w-md mx-auto mb-8">
                Timeless artistic creations that capture emotion, beauty, and the
                essence of human expression.
              </p>
              <Link
                href="/art-gallery"
                className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-secondary transition-colors group"
              >
                <span className="text-sm tracking-wider uppercase">
                  Explore Art Gallery
                </span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

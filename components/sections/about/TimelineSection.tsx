'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timelineEvents } from '@/lib/data';

function TimelineItem({
  event,
  index,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:gap-12`}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-center md:w-auto w-full mb-6 md:mb-0`}
      >
        <span className="text-brand-secondary font-playfair text-3xl md:text-4xl">
          {event.year}
        </span>
        <h3 className="font-playfair text-xl md:text-2xl text-brand-text mt-2 mb-3">
          {event.title}
        </h3>
        <p className="text-brand-text/60 leading-relaxed">
          {event.description}
        </p>
      </motion.div>

      {/* Dot */}
      <div className="relative z-10 w-4 h-4 rounded-full bg-brand-secondary border-4 border-brand-background shrink-0 hidden md:block" />

      {/* Spacer */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export function TimelineSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
            Our Journey
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-brand-text">
            Timeline of Excellence
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-secondary via-brand-accent to-brand-secondary transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.year} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

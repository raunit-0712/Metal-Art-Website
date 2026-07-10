'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionReveal } from '@/components/shared/SectionReveal';

export function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-24 md:py-32 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
              Transformation
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              Before & After
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-xl overflow-hidden cursor-col-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          > 
            {/* After Image (Full) */}
            <Image
              src="/images/gallery/after.jpeg"
              alt="After"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
              draggable={false}
              loading="lazy"
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="absolute inset-y-0 left-0 h-full"
                style={{ width: sliderPosition > 0 ? `${(100 / sliderPosition) * 100}%` : '100%' }}
              >
                <Image
                  src="/images/gallery/before.jpeg"
                  alt="Before"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-cover"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-brand-secondary cursor-col-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center shadow-lg">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-white" />
                  <div className="w-0.5 h-4 bg-white" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-brand-primary/80 text-white text-sm rounded">
              Before
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-brand-secondary/80 text-white text-sm rounded">
              After
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

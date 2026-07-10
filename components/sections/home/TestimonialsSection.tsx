'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { testimonials } from '@/lib/data';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-[#F0EBD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-[#3E5C76] text-sm tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#0D1321]">
              What Our Clients Say
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#DAD2BC]/50">
              <Quote
                size={48}
                className="text-[#748CAB]/20 absolute top-8 left-8"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-[#748CAB] fill-[#748CAB]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#3E5C76] text-lg md:text-xl leading-relaxed mb-8 italic">
                    &ldquo;{current.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#748CAB]/10 flex items-center justify-center">
                      <span className="font-playfair text-xl text-[#3E5C76]">
                        {current.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#0D1321]">
                        {current.name}
                      </h4>
                      <p className="text-[#3E5C76]/70 text-sm">
                        {current.role}, {current.company}
                      </p>
                    </div>
                    <span
                      className={`ml-auto text-xs tracking-wider uppercase px-3 py-1 rounded-full ${
                        current.category === 'steel'
                          ? 'bg-[#1D2D44] text-white'
                          : 'bg-[#748CAB]/20 text-[#1D2D44]'
                      }`}
                    >
                      {current.category}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-100">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 bg-[#1D2D44]'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1D2D44] hover:text-white hover:border-[#1D2D44] transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1D2D44] hover:text-white hover:border-[#1D2D44] transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

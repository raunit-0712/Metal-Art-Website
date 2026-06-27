'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { faqs } from '@/lib/data/projects';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const steelFAQs = faqs.filter((f) => f.category === 'steel' || f.category === 'general');

  return (
    <section className="py-24 md:py-32 bg-brand-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
              Common Questions
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              FAQ
            </h2>
          </div>
        </SectionReveal>

        <div className="space-y-4">
          {steelFAQs.map((faq, index) => (
            <SectionReveal key={faq.id} delay={0.05 * index}>
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-brand-secondary shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-white/60 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

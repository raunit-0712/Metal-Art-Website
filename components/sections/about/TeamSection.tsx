'use client';

import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';
import { teamMembers } from '@/lib/data';

export function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
              The People Behind the Craft
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-brand-text">
              Meet Our Team
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <SectionReveal key={member.id} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.social?.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-brand-secondary transition-colors"
                      >
                        <Linkedin size={18} className="text-white" />
                      </a>
                    )}
                    {member.social?.instagram && (
                      <a
                        href={member.social.instagram}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-brand-secondary transition-colors"
                      >
                        <Instagram size={18} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-playfair text-xl text-brand-text mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-secondary text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-brand-text/60 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

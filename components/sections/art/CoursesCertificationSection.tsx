'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Award, GraduationCap, Palette, Brush, Check, Play, X } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-secondary/40 hover:shadow-[0_10px_30px_rgba(176,141,87,0.1)] transition-all duration-300 flex gap-4"
    >
      <div className="flex-shrink-0 text-brand-secondary mt-1 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-playfair text-lg text-white font-medium mb-2 group-hover:text-brand-secondary transition-colors">
          {title}
        </h4>
        <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function CoursesCertificationSection() {
  const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);

  // Close video modal on Escape key press
  useEffect(() => {
    if (!activeVideoSrc) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideoSrc(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideoSrc]);

  return (
    <section id="courses" className="py-24 md:py-32 bg-brand-primary text-white border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Responsive Grid Shell */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT SIDE: Content, Features, List & CTA (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
            
            {/* Header info */}
            <div className="space-y-4">
              <SectionReveal>
                <span className="text-brand-secondary text-xs tracking-[0.3em] uppercase font-semibold">
                  LEARN • CREATE • ACHIEVE
                </span>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <h2 className="font-playfair text-4xl md:text-5xl text-white font-medium">
                  Art Courses & Certification
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                  Develop artistic skills through structured certificate courses and professional drawing exam preparation under expert guidance.
                </p>
              </SectionReveal>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureCard
                title="Certificate Courses"
                description="Structured drawing and painting programs designed for students of all age groups."
                icon={<Award size={24} />}
              />
              <FeatureCard
                title="Elementary Drawing Exam"
                description="Professional preparation for Government-recognized Elementary Drawing examinations."
                icon={<GraduationCap size={24} />}
              />
              <FeatureCard
                title="Intermediate Drawing Exam"
                description="Advanced guidance focusing on composition, shading, color theory and technical skills."
                icon={<Palette size={24} />}
              />
              <FeatureCard
                title="Creative Skill Development"
                description="Hands-on learning with pencil sketching, watercolor, acrylic painting and mixed media."
                icon={<Brush size={24} />}
              />
            </div>

            {/* Course Information & Curriculum Grid */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-playfair text-lg text-brand-secondary font-medium mb-4 pb-2 border-b border-white/10">
                  Courses Offered
                </h4>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-white/70 text-xs md:text-sm font-light">
                  {['Drawing Fundamentals', 'Pencil Sketching', 'Watercolor', 'Acrylic Painting', 'Color Theory', 'Object Drawing', 'Perspective', 'Shading Techniques', 'Still Life', 'Creative Composition'].map((course) => (
                    <li key={course} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-playfair text-lg text-brand-secondary font-medium mb-4 pb-2 border-b border-white/10">
                  Exam Preparation
                </h4>
                <ul className="space-y-3 text-white/70 text-xs md:text-sm font-light">
                  {['Elementary Drawing', 'Intermediate Drawing'].map((exam) => (
                    <li key={exam} className="flex items-center gap-2">
                      <Check size={16} className="text-brand-secondary flex-shrink-0" />
                      <span>{exam}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why Join Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Personalized Guidance', 'Small Batch Learning', 'Practical Sessions', 'Certificate on Completion'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <Check size={14} className="text-brand-secondary flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/80 leading-tight">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA bottom block */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-brand-secondary/15 to-transparent border border-brand-secondary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h4 className="font-playfair text-xl text-white font-medium mb-1">
                  Ready to Begin Your Artistic Journey?
                </h4>
                <p className="text-white/60 text-xs md:text-sm font-light">
                  Connect with us to inquire about seat availability and batch schedules.
                </p>
              </div>
              <a
                href="#commission"
                className="px-6 py-3.5 bg-brand-secondary hover:bg-brand-accent text-white text-xs sm:text-sm font-medium rounded-lg transition-all flex-shrink-0 text-center uppercase tracking-wider font-mono shadow-lg hover:shadow-brand-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
                aria-label="Enquire about art courses"
              >
                Enquire About Courses
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: Cert Showcase Masonry Grid & Videos (5 Columns) */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Certificate & Students Bento Showcase */}
            <div className="grid grid-cols-12 gap-4">
              {/* Primary Certificate Image */}
              <div className="col-span-12 md:col-span-8 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group bg-black/40 shadow-lg">
                <Image
                  src="/images/arts/certificate/art-certificate.jpeg"
                  alt="Aakriti Atelier Art Course Certificate layout"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Smaller Student image: Receiving Certificate */}
              <div className="col-span-6 md:col-span-4 relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-white/10 group bg-black/40 shadow-lg">
                <Image
                  src="/images/arts/certificate/student-receiving-certificate.jpeg"
                  alt="Student receiving art gallery certificate"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Smaller Student image: Student with Artwork */}
              <div className="col-span-6 md:col-span-4 relative aspect-square rounded-2xl overflow-hidden border border-white/10 group bg-black/40 shadow-lg">
                <Image
                  src="/images/arts/certificate/student-with-artwork.jpeg"
                  alt="Student showing drawing sketch completed in art gallery"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Drawing Practice */}
              <div className="col-span-12 md:col-span-8 relative aspect-[2/1] rounded-2xl overflow-hidden border border-white/10 group bg-black/40 shadow-lg">
                <Image
                  src="/images/arts/certificate/student-drawing-practice.jpeg"
                  alt="Art student practicing pencil shading technique"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Student Artwork 1 — fills empty space */}
              <div className="col-span-6 relative aspect-square rounded-2xl overflow-hidden border border-white/10 group bg-black/40 shadow-lg">
                <Image
                  src="/images/arts/student-works/0011.jpg"
                  alt="Student artwork — pencil sketch drawing"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Student Artwork 2 — fills empty space */}
              <div className="col-span-6 relative aspect-square rounded-2xl overflow-hidden border border-white/10 group bg-black/40 shadow-lg">
                <Image
                  src="/images/arts/student-works/0013.jpg"
                  alt="Student artwork — color composition study"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>

            {/* Video Previews */}
            <div className="space-y-4">
              <h5 className="font-playfair text-white text-base tracking-wider uppercase font-medium">
                Syllabus & Classroom Preview
              </h5>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Video Card 1 */}
                <div
                  onClick={() => setActiveVideoSrc('/images/arts/certificate/student-drawing-class-1.mp4')}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/30 cursor-pointer shadow-md"
                >
                  {/* Subtle placeholder/shimmer until preview plays */}
                  <div className="absolute inset-0 bg-white/5 animate-pulse group-hover:bg-white/10 transition-colors duration-300" />
                  
                  {/* Mini looping video background as thumbnail */}
                  <video
                    src="/images/arts/certificate/student-drawing-class-1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-300"
                  />
                  
                  {/* Play circle overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                    <div className="p-2.5 rounded-full bg-brand-secondary/90 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={16} fill="white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-3 left-3 z-10">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-white/90">
                      Session Preview 01
                    </p>
                  </div>
                </div>

                {/* Video Card 2 */}
                <div
                  onClick={() => setActiveVideoSrc('/images/arts/certificate/student-drawing-class-2.mp4')}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/30 cursor-pointer shadow-md"
                >
                  <div className="absolute inset-0 bg-white/5 animate-pulse group-hover:bg-white/10 transition-colors duration-300" />
                  
                  <video
                    src="/images/arts/certificate/student-drawing-class-2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-300"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                    <div className="p-2.5 rounded-full bg-brand-secondary/90 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={16} fill="white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-3 left-3 z-10">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-white/90">
                      Session Preview 02
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideoSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoSrc(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 bg-brand-primary shadow-2xl flex flex-col justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoSrc(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/80 text-white transition-all"
                aria-label="Close video preview"
              >
                <X size={18} />
              </button>

              {/* Video Player */}
              <div className="w-full aspect-video relative bg-black">
                <video
                  src={activeVideoSrc}
                  autoPlay
                  controls
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                  title="Art Course Session Loop"
                  aria-label="Art Course session preview video player"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

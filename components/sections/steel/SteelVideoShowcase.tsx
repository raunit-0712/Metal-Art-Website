'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, PlayCircle } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

export function SteelVideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Autoplay and pause based on viewport presence
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isPlaying) {
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  // Autoplay prevented by browser
                });
              }
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 } // Trigger when at least 25% of the video is visible
    );

    observer.observe(video);
    return () => {
      observer.unobserve(video);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => {});
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      togglePlay();
    }
  };

  return (
    <section className="py-24 md:py-32 bg-brand-primary text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Title and Intro */}
        <div className="text-center max-w-2xl mb-16 space-y-4">
          <SectionReveal>
            <p className="text-brand-secondary text-xs tracking-[0.3em] uppercase">
              Cinematic Showcase
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-5xl text-white font-medium">
              Steel Work in Motion
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
              Experience our craftsmanship through real project execution and premium architectural finishes.
            </p>
          </SectionReveal>
        </div>

        {/* Cinematic Video Wrapper with Backlighting Glow */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="group relative w-full aspect-video rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden border border-brand-secondary/20 bg-black/60 shadow-[0_0_60px_rgba(176,141,87,0.12)] shadow-2xl focus-within:ring-2 focus-within:ring-brand-secondary focus-within:ring-offset-2 focus-within:ring-offset-brand-primary outline-none"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label="Steel Work in Motion Video Player. Press Spacebar or Enter to play/pause."
          title="Steel Work in Motion"
        >
          {/* Shimmer Skeleton Loader */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-white/5 animate-pulse flex flex-col items-center justify-center z-[2] gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-brand-secondary"></div>
              <span className="text-[10px] tracking-wider uppercase text-white/40 font-mono">Loading Footage...</span>
            </div>
          )}

          {/* Video Overlay Gradient */}
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none z-[1]" />

          {/* HTML5 Video element */}
          <motion.video
            ref={videoRef}
            src="/images/steel/video/steel-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setIsVideoLoaded(true)}
            initial={{ scale: 1.03 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
          />

          {/* Bottom Left Badge: Real Project Footage */}
          {isVideoLoaded && (
            <div className="absolute bottom-6 left-6 z-[3] flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-white/70 text-[9px] tracking-wider uppercase font-mono shadow-md select-none pointer-events-none">
              <PlayCircle size={12} className="text-brand-secondary animate-pulse" />
              <span>Real Project Footage</span>
            </div>
          )}

          {/* Floating Glassmorphic Play/Pause Button */}
          {isVideoLoaded && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="absolute bottom-6 right-6 z-[3] p-3 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:border-brand-secondary/40 hover:bg-black/75 transition-all transform hover:scale-105 active:scale-95 shadow-md focus:outline-none"
              aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-white/10" />}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}

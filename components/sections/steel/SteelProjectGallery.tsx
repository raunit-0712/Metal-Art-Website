'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Project, ProjectImage } from '@/types';

interface SteelProjectGalleryProps {
  project: Project;
  onClose: () => void;
}

export function SteelProjectGallery({ project, onClose }: SteelProjectGalleryProps) {
  const images = (project.images || []) as ProjectImage[];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [lightboxImageLoaded, setLightboxImageLoaded] = useState(false);

  const lightboxRef = useRef<HTMLDivElement>(null);
  const swipeStartRef = useRef<number | null>(null);

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Sync lightbox image loading state
  useEffect(() => {
    setLightboxImageLoaded(false);
  }, [activeImageIndex]);

  // Keyboard navigation & ESC close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) {
        if (e.key === 'Escape') {
          onClose();
        }
        return;
      }

      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, activeImageIndex, images.length, onClose, handleNext, handlePrev]);

  // Lightbox Focus Trapping & Close button focus
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && lightboxRef.current) {
        const focusableElements = lightboxRef.current.querySelectorAll(
          'button, [tabindex="0"]'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleFocusTrap);
    
    // Focus the Close button
    const closeBtn = lightboxRef.current?.querySelector(
      '[aria-label="Close Lightbox"]'
    ) as HTMLElement;
    closeBtn?.focus();

    return () => window.removeEventListener('keydown', handleFocusTrap);
  }, [isLightboxOpen]);



  // Swipe Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    swipeStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (swipeStartRef.current === null) return;
    const swipeEnd = e.changedTouches[0].clientX;
    const diff = swipeStartRef.current - swipeEnd;
    const minSwipe = 50;

    if (diff > minSwipe) {
      handleNext();
    } else if (diff < -minSwipe) {
      handlePrev();
    }
    swipeStartRef.current = null;
  };

  if (images.length === 0) return null;

  return (
    <div className="w-full max-h-[90vh] md:max-h-[85vh] overflow-y-auto bg-brand-primary text-white p-6 md:p-10 scrollbar-thin scrollbar-thumb-white/10">
      {/* Header with Close Button */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <h2 className="font-playfair text-3xl md:text-4xl text-white font-medium leading-tight">
          {project.title}
        </h2>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white transition-colors p-2.5 bg-white/5 hover:bg-white/10 rounded-full"
          aria-label="Close Gallery"
        >
          <X size={24} />
        </button>
      </div>

      {/* Premium Image Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group relative aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer bg-black/20 border border-white/5"
            onClick={() => openLightbox(idx)}
          >
            {/* Elegant Skeleton Shimmer Loader */}
            {!loadedImages[idx] && (
              <div className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center z-[2]">
                <div className="w-8 h-8 rounded-full border-t-2 border-brand-secondary animate-spin"></div>
              </div>
            )}

            <Image
              src={img.src}
              alt={img.alt || `${project.title} Image ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={`object-cover transition-all duration-500 ease-out group-hover:scale-[1.03] ${
                loadedImages[idx] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadingComplete={() => setLoadedImages((prev) => ({ ...prev, [idx]: true }))}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX MODE OVERLAY */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            ref={lightboxRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center select-none"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button
              aria-label="Close Lightbox"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 text-white/60 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-[210]"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              aria-label="Previous Image"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 border border-white/10 hover:border-brand-secondary p-3 rounded-full text-white hover:bg-black/90 transition-all z-[210]"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              aria-label="Next Image"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 border border-white/10 hover:border-brand-secondary p-3 rounded-full text-white hover:bg-black/90 transition-all z-[210]"
            >
              <ChevronRight size={24} />
            </button>

            {/* Centered Large Image */}
            <div
              className="relative w-full h-[80vh] max-w-5xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {!lightboxImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-[2]">
                  <div className="w-12 h-12 rounded-full border-t-2 border-brand-secondary animate-spin"></div>
                </div>
              )}
              <Image
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].alt || `${project.title} Full Image`}
                fill
                quality={95}
                priority
                sizes="100vw"
                className={`object-contain transition-opacity duration-300 ${
                  lightboxImageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoadingComplete={() => setLightboxImageLoaded(true)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

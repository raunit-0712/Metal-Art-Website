'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  User,
  Layers,
  Briefcase,
  Wrench,
  Maximize2,
  X,
  Plus
} from 'lucide-react';
import { Project, ProjectImage } from '@/types';

interface SteelProjectGalleryProps {
  project: Project;
  onClose: () => void;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 }
    }
  })
};

export function SteelProjectGallery({ project, onClose }: SteelProjectGalleryProps) {
  const images = (project.images || []) as ProjectImage[];
  const [[page, direction], setPage] = useState([0, 0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxScale, setLightboxScale] = useState(1);
  const [lightboxOffset, setLightboxOffset] = useState({ x: 0, y: 0 });
  const [lastTap, setLastTap] = useState(0);

  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const swipeStartRef = useRef<number | null>(null);

  // Sync active index when page state changes (for infinite carousel)
  useEffect(() => {
    if (images.length === 0) return;
    const index = ((page % images.length) + images.length) % images.length;
    setActiveImageIndex(index);
    setIsLoading(true);
  }, [page, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        if (isLightboxOpen) {
          closeLightbox();
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, onClose]);

  // Keep active thumbnail in view
  useEffect(() => {
    const container = thumbnailContainerRef.current;
    if (!container) return;
    const activeThumb = container.children[activeImageIndex] as HTMLElement;
    if (!activeThumb) return;

    const containerWidth = container.offsetWidth;
    const thumbLeft = activeThumb.offsetLeft;
    const thumbWidth = activeThumb.offsetWidth;
    const scrollLeft = container.scrollLeft;

    if (thumbLeft < scrollLeft) {
      container.scrollTo({ left: thumbLeft - 10, behavior: 'smooth' });
    } else if (thumbLeft + thumbWidth > scrollLeft + containerWidth) {
      container.scrollTo({ left: thumbLeft + thumbWidth - containerWidth + 10, behavior: 'smooth' });
    }
  }, [activeImageIndex]);

  const handleNext = () => {
    setPage([page + 1, 1]);
  };

  const handlePrev = () => {
    setPage([page - 1, -1]);
  };

  const selectImage = (index: number) => {
    const dir = index > activeImageIndex ? 1 : -1;
    setPage([index, dir]);
  };

  // Touch swipe gesture handlers
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

  // Double tap / Double click to zoom in Lightbox
  const handleDoubleTap = (e: React.MouseEvent | React.TouchEvent) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (now - lastTap < DOUBLE_PRESS_DELAY) {
      toggleLightboxZoom();
    } else {
      setLastTap(now);
    }
  };

  const toggleLightboxZoom = () => {
    if (lightboxScale === 1) {
      setLightboxScale(2.2);
    } else {
      resetLightboxZoom();
    }
  };

  const resetLightboxZoom = () => {
    setLightboxScale(1);
    setLightboxOffset({ x: 0, y: 0 });
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    resetLightboxZoom();
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    resetLightboxZoom();
  };

  if (images.length === 0) return null;

  const currentImage = images[activeImageIndex];
  const nextIdx = (activeImageIndex + 1) % images.length;
  const prevIdx = (activeImageIndex - 1 + images.length) % images.length;

  return (
    <div className="flex flex-col md:flex-row h-full max-h-[85vh] md:max-h-[80vh] bg-brand-primary text-white">
      {/* LEFT COLUMN: Image Gallery (60% width on desktop) */}
      <div className="w-full md:w-[60%] flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 bg-black relative">
        
        {/* Main Image Viewport */}
        <div 
          className="relative flex-1 min-h-[300px] md:min-h-0 w-full overflow-hidden group select-none cursor-zoom-in"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={openLightbox}
        >
          {/* Shimmer / Skeleton background */}
          {isLoading && (
            <div className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center z-[2]">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-brand-secondary"></div>
            </div>
          )}

          {/* Active Image with Slide/Fade animation */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt || project.title}
                fill
                priority={activeImageIndex === 0}
                quality={90}
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
                onLoadingComplete={() => setIsLoading(false)}
              />
            </motion.div>
          </AnimatePresence>

          {/* Foreground UI Overlays */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 z-[3] pointer-events-none">
            <p className="text-white/60 text-xs tracking-wider uppercase mb-1">
              {currentImage.caption || 'Project View'}
            </p>
            <h4 className="text-white text-sm font-playfair font-medium">
              {project.title}
            </h4>
          </div>

          {/* Image Counter Badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-mono tracking-widest text-white/90 z-[3]">
            {String(activeImageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>

          {/* Fullscreen Button */}
          <button
            aria-label="Open Fullscreen Lightbox"
            onClick={(e) => {
              e.stopPropagation();
              openLightbox();
            }}
            className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white/80 hover:text-white hover:bg-black/90 transition-all z-[3]"
          >
            <Maximize2 size={16} />
          </button>

          {/* Navigation Arrows (Hidden on touch screens, visible on hover on desktop) */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity z-[3]">
            <button
              aria-label="Previous Image"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="bg-black/55 hover:bg-black/85 border border-white/10 hover:border-brand-secondary p-2.5 rounded-full text-white transition-all transform hover:scale-105"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity z-[3]">
            <button
              aria-label="Next Image"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="bg-black/55 hover:bg-black/85 border border-white/10 hover:border-brand-secondary p-2.5 rounded-full text-white transition-all transform hover:scale-105"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dynamic Prefetching for next/prev images */}
        <div className="hidden" aria-hidden="true">
          <Image src={images[nextIdx].src} alt="prefetch-next" width={50} height={50} priority={false} />
          <Image src={images[prevIdx].src} alt="prefetch-prev" width={50} height={50} priority={false} />
        </div>

        {/* Thumbnail Row */}
        <div className="bg-brand-primary p-4 border-t border-white/10">
          <div 
            ref={thumbnailContainerRef}
            className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none pb-1"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => selectImage(idx)}
                className={`relative h-14 w-20 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                  idx === activeImageIndex 
                    ? 'border-brand-secondary opacity-100 scale-105' 
                    : 'border-transparent opacity-40 hover:opacity-80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <Image
                  src={img.src}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  loading="lazy"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Details & Narrative (40% width on desktop, scrollable) */}
      <div className="w-full md:w-[40%] flex flex-col overflow-y-auto bg-brand-primary">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 rounded bg-brand-secondary/20 text-brand-secondary font-semibold">
                {project.subcategory}
              </span>
              {project.sector && (
                <span className="text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 rounded bg-white/10 text-white/60 font-semibold">
                  {project.sector}
                </span>
              )}
            </div>
            <h3 className="font-playfair text-3xl md:text-4xl text-white font-medium leading-tight">
              {project.title}
            </h3>
            <div className="h-0.5 w-16 bg-brand-secondary mt-1"></div>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm py-4 border-y border-white/10">
            {project.client && (
              <div className="flex items-start gap-2.5">
                <User size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">Client</p>
                  <p className="text-white/80 font-medium">{project.client}</p>
                </div>
              </div>
            )}
            {project.location && (
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">Location</p>
                  <p className="text-white/80 font-medium">{project.location}</p>
                </div>
              </div>
            )}
            {project.year && (
              <div className="flex items-start gap-2.5">
                <Calendar size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">Year</p>
                  <p className="text-white/80 font-medium">{project.year}</p>
                </div>
              </div>
            )}
            {project.finishType && (
              <div className="flex items-start gap-2.5">
                <Layers size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider">Finish Type</p>
                  <p className="text-white/80 font-medium text-xs line-clamp-1" title={project.finishType}>{project.finishType}</p>
                </div>
              </div>
            )}
          </div>

          {/* Storytelling Narrative */}
          <div className="space-y-6">
            {project.overview && (
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-brand-secondary font-semibold">Overview</h4>
                <p className="text-white/70 text-sm leading-relaxed font-light">{project.overview}</p>
              </div>
            )}
            
            {project.challenge && (
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-brand-secondary font-semibold">The Challenge</h4>
                <p className="text-white/70 text-sm leading-relaxed font-light">{project.challenge}</p>
              </div>
            )}

            {project.solution && (
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-brand-secondary font-semibold">Our Solution</h4>
                <p className="text-white/70 text-sm leading-relaxed font-light">{project.solution}</p>
              </div>
            )}

            {project.result && (
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-brand-secondary font-semibold">The Result</h4>
                <p className="text-white/70 text-sm leading-relaxed font-light">{project.result}</p>
              </div>
            )}
          </div>

          {/* Scope and Services Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            {project.scopeOfWork && project.scopeOfWork.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-1.5">
                  <Briefcase size={14} className="text-brand-secondary" />
                  <h4 className="text-xs uppercase tracking-widest text-white/85 font-semibold">Scope of Work</h4>
                </div>
                <ul className="space-y-2 text-xs text-white/70 font-light">
                  {project.scopeOfWork.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-brand-secondary mt-0.5"><Plus size={10} /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.servicesPerformed && project.servicesPerformed.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-1.5">
                  <Wrench size={14} className="text-brand-secondary" />
                  <h4 className="text-xs uppercase tracking-widest text-white/85 font-semibold">Services</h4>
                </div>
                <ul className="space-y-2 text-xs text-white/70 font-light">
                  {project.servicesPerformed.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-brand-secondary mt-0.5"><Plus size={10} /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Materials Used */}
          {project.materials && (
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-xs uppercase tracking-widest text-white/85 font-semibold">Materials Used</h4>
              <p className="text-white/60 text-xs leading-relaxed font-light bg-white/5 p-3 rounded border border-white/5">
                {project.materials}
              </p>
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-white/5 border border-white/10 hover:border-brand-secondary/40 text-white/50 text-[10px] uppercase tracking-wider rounded-full transition-all"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODE OVERLAY */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black flex flex-col justify-between select-none"
            onClick={closeLightbox}
          >
            {/* Header Toolbar */}
            <div className="w-full flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent z-10">
              <span className="text-xs font-mono tracking-widest text-white/70">
                {activeImageIndex + 1} / {images.length} — {currentImage.caption || project.title}
              </span>
              <div className="flex items-center gap-3">
                <button
                  aria-label="Toggle Zoom"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLightboxZoom();
                  }}
                  className="text-white/70 hover:text-white p-2 rounded-full transition-colors"
                >
                  {lightboxScale > 1 ? 'Reset Zoom' : 'Zoom In'}
                </button>
                <button
                  aria-label="Close Lightbox"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  className="text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Main Lightbox Image Viewport */}
            <div 
              className="flex-1 flex items-center justify-center relative overflow-hidden"
              onClick={closeLightbox}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                animate={{
                  scale: lightboxScale,
                  x: lightboxOffset.x,
                  y: lightboxOffset.y
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="relative w-full h-[80vh] max-w-5xl cursor-zoom-out"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDoubleTap(e);
                }}
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  quality={95}
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>

              {/* Lightbox Prev/Next Navigation Controls */}
              {lightboxScale === 1 && (
                <>
                  <button
                    aria-label="Previous Lightbox Image"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 border border-white/10 p-3 rounded-full text-white hover:bg-black/90 hover:border-brand-secondary transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    aria-label="Next Lightbox Image"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 border border-white/10 p-3 rounded-full text-white hover:bg-black/90 hover:border-brand-secondary transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Lightbox Caption Overlay */}
            <div className="p-6 bg-gradient-to-t from-black/85 to-transparent text-center z-10">
              <p className="text-white text-sm font-light tracking-wide max-w-2xl mx-auto">
                {currentImage.alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

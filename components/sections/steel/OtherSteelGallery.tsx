'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { OtherSteelImage } from '@/lib/data/steel/other-project-images';

interface OtherSteelGalleryProps {
  images: OtherSteelImage[];
  initialIndex: number;
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
      x: { type: 'spring' as const, stiffness: 260, damping: 26 },
      opacity: { duration: 0.3 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'spring' as const, stiffness: 260, damping: 26 },
      opacity: { duration: 0.3 }
    }
  })
};

export function OtherSteelGallery({ images, initialIndex, onClose }: OtherSteelGalleryProps) {
  const [[page, direction], setPage] = useState([initialIndex, 0]);
  const [activeImageIndex, setActiveImageIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
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
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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
    resetLightboxZoom();
    setPage([page + 1, 1]);
  };

  const handlePrev = () => {
    resetLightboxZoom();
    setPage([page - 1, -1]);
  };

  const selectImage = (index: number) => {
    resetLightboxZoom();
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

  if (images.length === 0) return null;

  const currentImage = images[activeImageIndex];
  const nextIdx = (activeImageIndex + 1) % images.length;
  const prevIdx = (activeImageIndex - 1 + images.length) % images.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black flex flex-col justify-between select-none"
      onClick={onClose}
    >
      {/* Header Toolbar */}
      <div className="w-full flex items-center justify-between p-4 bg-gradient-to-b from-black/90 to-transparent z-10">
        <div className="flex flex-col text-left">
          <span className="text-xs font-mono tracking-widest text-white/50">
            {activeImageIndex + 1} / {images.length}
          </span>
          <span className="text-white text-sm font-playfair font-medium mt-0.5">
            {currentImage.title}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle Zoom"
            onClick={(e) => {
              e.stopPropagation();
              toggleLightboxZoom();
            }}
            className="text-white/70 hover:text-white p-2 rounded-full transition-colors text-xs uppercase tracking-wider font-mono hidden md:block"
          >
            {lightboxScale > 1 ? 'Reset Zoom' : 'Zoom In'}
          </button>
          <button
            aria-label="Close Lightbox"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Lightbox Image Viewport */}
      <div 
        className="flex-1 flex items-center justify-center relative overflow-hidden bg-black"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Shimmer / Skeleton background */}
        {isLoading && (
          <div className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center z-[2]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-brand-secondary"></div>
          </div>
        )}

        <motion.div
          animate={{
            scale: lightboxScale,
            x: lightboxOffset.x,
            y: lightboxOffset.y
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="relative w-full h-[70vh] max-w-5xl cursor-zoom-out"
          onClick={(e) => {
            e.stopPropagation();
            handleDoubleTap(e);
          }}
        >
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
                alt={currentImage.alt}
                fill
                quality={95}
                priority
                sizes="100vw"
                className="object-contain"
                onLoadingComplete={() => setIsLoading(false)}
              />
            </motion.div>
          </AnimatePresence>
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

      {/* Dynamic Prefetching for next/prev images */}
      <div className="hidden" aria-hidden="true">
        <Image src={images[nextIdx].src} alt="prefetch-next" width={50} height={50} priority={false} />
        <Image src={images[prevIdx].src} alt="prefetch-prev" width={50} height={50} priority={false} />
      </div>

      {/* Footer Navigation Bar */}
      <div className="w-full bg-gradient-to-t from-black/95 to-black/40 p-6 z-10 text-center">
        {/* Caption */}
        <p className="text-white/80 text-sm font-light tracking-wide max-w-2xl mx-auto mb-4">
          {currentImage.alt}
        </p>

        {/* Thumbnails rail */}
        <div 
          ref={thumbnailContainerRef}
          className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none max-w-3xl mx-auto"
          style={{ WebkitOverflowScrolling: 'touch' }}
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => selectImage(idx)}
              className={`relative h-10 w-14 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
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
                sizes="60px"
                loading="lazy"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

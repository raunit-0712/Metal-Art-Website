'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { OtherSteelImage } from '@/lib/data/steel/other-project-images';

interface OtherSteelGalleryProps {
  images: OtherSteelImage[];
  initialIndex: number;
  onClose: () => void;
}

export function OtherSteelGallery({ images, initialIndex, onClose }: OtherSteelGalleryProps) {
  if (images.length === 0 || initialIndex < 0 || initialIndex >= images.length) return null;

  const currentImage = images[initialIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        aria-label="Close Lightbox"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-[210] p-2 bg-white/5 hover:bg-white/10 rounded-full"
      >
        <X size={32} />
      </button>

      {/* Main Lightbox Image Viewport */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative max-w-full max-h-[85vh] aspect-auto flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={currentImage.src}
          alt={currentImage.alt || currentImage.title}
          className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
        />
      </motion.div>
    </motion.div>
  );
}

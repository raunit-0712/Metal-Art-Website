'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    let current = 0;

    const interval = setInterval(() => {
      current += 5;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      }

      setProgress(current);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-brand-primary flex flex-col items-center justify-center"
        >
          <h1 className="font-playfair text-5xl text-white">
            Aakriti Atelier
          </h1>

          <p className="text-brand-secondary tracking-[0.3em] uppercase mt-2">
            Shaping Ideas into Reality
          </p>

          <div className="w-52 h-1 bg-white/10 rounded-full overflow-hidden mt-10">
            <motion.div
              className="h-full bg-brand-secondary"
              animate={{
                width: `${progress}%`,
              }}
            />
          </div>

          <p className="mt-4 text-white/50">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
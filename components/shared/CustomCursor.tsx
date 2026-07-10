'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      cursor.style.display = 'none';
      dot.style.display = 'none';
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    let rafId: number | null = null;
    let idleTimer: ReturnType<typeof setTimeout> | null = null;

    const startRAF = () => {
      if (rafId !== null) return; // Already running
      const animate = () => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        dotX += (mouseX - dotX) * 0.5;
        dotY += (mouseY - dotY) * 0.5;

        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
        dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

        rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);
    };

    const stopRAF = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Start RAF on movement, reset idle timer
      startRAF();
      if (idleTimer !== null) clearTimeout(idleTimer);
      idleTimer = setTimeout(stopRAF, 150); // Pause after 150ms of no movement
    };

    // Use event delegation instead of querySelectorAll — handles dynamic elements
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor-hover]')) {
        cursor.classList.add('hover');
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [data-cursor-hover]')) {
        cursor.classList.remove('hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      stopRAF();
      if (idleTimer !== null) clearTimeout(idleTimer);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
    </>
  );
}


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from "next/image";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/steel-works', label: 'Metal Works' },
  { href: '/art-gallery', label: 'Art Gallery' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isArtGallery = pathname === '/art-gallery';

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      // Only update state when the value actually changes — avoids re-renders on every scroll pixel
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isArtGallery
            ? isScrolled
              ? 'bg-[#1D2D44]/95 backdrop-blur-md shadow-lg border-b border-[#748CAB]/15'
              : 'bg-[#1D2D44] border-b border-[#748CAB]/10'
            : isScrolled
              ? 'bg-brand-primary/95 backdrop-blur-md shadow-lg'
              : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* logo */}
            {/* <Link href="/" className="flex items-center gap-2">
              <span className="font-playfair text-2xl text-white">
                Aakriti Atelier
              </span>
              <span className="hidden sm:inline text-brand-secondary text-xs tracking-wider uppercase">
                Shaping Ideas into Reality
              </span>
            </Link> */}
            <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Aakriti Atelier"
              width={220}
              height={80}
              priority
              className={`h-14 w-auto object-contain transition-all duration-300 ${
                isArtGallery ? 'filter brightness-0 invert-[0.95] sepia-[0.1] saturate-[500%] hue-rotate-[330deg]' : ''
              }`}
            />
          </Link>



            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-colors duration-300 ${
                    pathname === link.href
                      ? isArtGallery ? 'text-[#748CAB]' : 'text-brand-secondary'
                      : isArtGallery ? 'text-[#F0EBD8]/80 hover:text-[#3E5C76]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute -bottom-1 left-0 right-0 h-[2px] ${isArtGallery ? 'bg-[#748CAB]' : 'bg-brand-secondary'}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className={`px-6 py-2.5 text-sm font-medium rounded transition-colors duration-300 ${
                  isArtGallery
                    ? 'bg-[#F0EBD8] text-[#0D1321] hover:bg-[#DAD2BC]'
                    : 'bg-brand-secondary text-white hover:bg-brand-accent'
                }`}
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isArtGallery ? 'text-[#F0EBD8]' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 pt-24 px-6 lg:hidden ${isArtGallery ? 'bg-[#1D2D44]' : 'bg-brand-primary'}`}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-playfair transition-colors duration-300 ${
                      pathname === link.href
                        ? isArtGallery ? 'text-[#748CAB]' : 'text-brand-secondary'
                        : isArtGallery ? 'text-[#F0EBD8] hover:text-[#3E5C76]' : 'text-white hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 font-medium rounded ${
                    isArtGallery
                      ? 'bg-[#F0EBD8] text-[#0D1321] hover:bg-[#DAD2BC]'
                      : 'bg-brand-secondary text-white'
                  }`}
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

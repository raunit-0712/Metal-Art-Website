'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
          <Link href="/" className="inline-block mb-6">
            <div className="relative h-28 w-64">
              <Image
                src="/images/logo.png"
                alt="Aakriti Atelier"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          <p className="text-white/60 text-sm leading-relaxed mt-4">
            Aakriti Atelier specializes in premium architectural steel
            fabrication, custom metal works, railings, staircases,
            pergolas, gates and handcrafted artistic creations.
          </p>
        </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/steel-works', label: 'Metal Works' },
                { href: '/art-gallery', label: 'Art Gallery' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Metal Staircases',
                'Railings & Balustrades',
                'Lift Cladding',
                'Decorative Panels',
                'Custom Fabrication',
                'Fine Art Commissions',
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-secondary mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  N/502, Veena Dynasty<br />
                  Evershine City, Last stop, Vasai (E)<br />
                  Maharashtra Pin- 401209
                </span>
              </li> 
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-secondary shrink-0" />
                <span className="text-white/60 text-sm">
                  Steel: <a href="tel:+918080414471" className="hover:text-brand-secondary transition-colors">+91 80804 14471</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-secondary shrink-0" />
                <span className="text-white/60 text-sm">
                  Arts: <a href="tel:+917388335687" className="hover:text-brand-secondary transition-colors">+91 73883 35687</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-secondary shrink-0" />
                <span className="text-white/60 text-sm">
                  <a href="mailto:hello@aakritiatelier.in" className="hover:text-brand-secondary transition-colors">hello@aakritiatelier.in</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-brand-secondary shrink-0" />
                <span className="text-white/60 text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Aakriti Atelier . All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: Instagram, href: '#', label: 'Instagram' },
              { icon: Facebook, href: '#', label: 'Facebook' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-secondary transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

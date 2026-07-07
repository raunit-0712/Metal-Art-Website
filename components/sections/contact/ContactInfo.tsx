'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    color: 'bg-green-500',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+1 (555) 123-4567',
    href: 'https://wa.me/15551234567',
    color: 'bg-green-600',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@Aakriti Ateliermetalarts.com',
    href: 'mailto:hello@Aakriti Ateliermetalarts.com',
    color: 'bg-brand-secondary',
  },
];

const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export function ContactInfo() {
  return (
    <section className="py-24 md:py-32 bg-brand-primary">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="mb-12">
            <h2 className="font-playfair text-3xl text-white mb-4">
              Contact Information
            </h2>
            <p className="text-white/60">
              Reach out to us through any of these channels.
            </p>
          </div>
        </SectionReveal>

        {/* Quick Contact Buttons */}
        <div className="space-y-4 mb-12">
          {contactMethods.map((method, index) => (
            <SectionReveal key={method.label} delay={0.1 * index}>
              <motion.a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-secondary/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center`}>
                  <method.icon size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white/40 text-sm">{method.label}</p>
                  <p className="text-white font-medium">{method.value}</p>
                </div>
              </motion.a>
            </SectionReveal>
          ))}
        </div>

        {/* Address */}
        <SectionReveal delay={0.4}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={20} className="text-brand-secondary" />
              <h3 className="font-playfair text-xl text-white">Visit Our Studio</h3>
            </div>
            <p className="text-white/60 leading-relaxed pl-8">
              123 Craftsmanship Lane<br />
              Design District<br />
              Los Angeles, CA 90210
            </p>
          </div>
        </SectionReveal>

        {/* Business Hours */}
        <SectionReveal delay={0.5}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={20} className="text-brand-secondary" />
              <h3 className="font-playfair text-xl text-white">Business Hours</h3>
            </div>
            <div className="space-y-2 pl-8">
              {businessHours.map((schedule) => (
                <div key={schedule.day} className="flex justify-between text-sm">
                  <span className="text-white/60">{schedule.day}</span>
                  <span className="text-white">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Map Placeholder */}
        <SectionReveal delay={0.6}>
          <div className="mb-12">
            <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715220363292!2d-118.243685!3d34.052234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDE0JzM3LjMiVw!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location"
              />
            </div>
          </div>
        </SectionReveal>

        {/* Social Links */}
        <SectionReveal delay={0.7}>
          <div>
            <h3 className="font-playfair text-xl text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-secondary hover:border-brand-secondary transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

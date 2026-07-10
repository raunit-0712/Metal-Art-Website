'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

import { CONTACT } from '@/lib/config/contact';

const contactSections = [
  {
    title: 'Metal Works Division',
    items: [
      {
        icon: MessageCircle,
        label: 'WhatsApp Metal Works',
        value: '+91 80804 14471',
        href: `https://wa.me/918080414471?text=${encodeURIComponent(CONTACT.steel.whatsappMessage)}`,
        color: 'bg-green-600',
      },
    ],
  },
  {
    title: 'Fine Arts Division',
    items: [
      {
        icon: MessageCircle,
        label: 'WhatsApp Fine Arts',
        value: '+91 73883 35687',
        href: `https://wa.me/917388335687?text=${encodeURIComponent(CONTACT.art.whatsappMessage)}`,
        color: 'bg-green-600',
      },
    ],
  },
  {
    title: 'General Inquiries',
    items: [
      {
        icon: Mail,
        label: 'Email Us',
        value: 'hello@aakritiatelier.in',
        href: 'mailto:hello@aakritiatelier.in',
        color: 'bg-brand-secondary',
      },
    ],
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

        {/* Quick Contact Buttons by Division */}
        <div className="space-y-8 mb-12">
          {contactSections.map((section, sIndex) => (
            <div key={section.title} className="space-y-3">
              <h3 className="font-playfair text-lg text-brand-secondary">{section.title}</h3>
              <div className="space-y-3">
                {section.items.map((method, index) => (
                  <SectionReveal key={method.label} delay={0.05 * (sIndex * 2 + index)}>
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
            </div>
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
              N/502, Veena Dynasty<br />
              Evershine City, Last stop, Vasai (E)<br />
              Maharashtra Pin- 401209
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0749817364945!2d72.82979067506072!3d19.40916598186519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9e11775d3d3%3A0xeb70736efcfced01!2sVeena%20Dynasty!5e0!3m2!1sen!2sus!4v1783493467950!5m2!1sen!2sus"
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

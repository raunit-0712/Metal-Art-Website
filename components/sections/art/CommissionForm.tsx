'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Upload } from 'lucide-react';
import { SectionReveal } from '@/components/shared/SectionReveal';

export function CommissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artType: '',
    size: '',
    budget: '',
    referenceImages: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="commission" className="py-24 md:py-32 bg-brand-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-brand-secondary text-sm tracking-[0.3em] uppercase mb-4">
              Custom Artwork
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-brand-text">
              Commission Inquiry
            </h2>
            <p className="text-brand-text/60 mt-4 max-w-2xl mx-auto">
              Let us create something uniquely yours. Fill out the form below and
              we&apos;ll bring your vision to life.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white rounded-2xl shadow-sm"
            >
              <CheckCircle size={64} className="text-brand-secondary mx-auto mb-6" />
              <h3 className="font-playfair text-3xl text-brand-text mb-4">
                Inquiry Received!
              </h3>
              <p className="text-brand-text/60 max-w-md mx-auto">
                Thank you for your interest in a custom commission. Our artist will
                review your request and contact you within 48 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-colors bg-brand-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-colors bg-brand-background"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-colors bg-brand-background"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">
                    Art Type *
                  </label>
                  <select
                    name="artType"
                    required
                    value={formData.artType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-colors bg-brand-background"
                  >
                    <option value="">Select type</option>
                    <option value="portrait">Portrait</option>
                    <option value="fine-art">Fine Art</option>
                    <option value="pencil">Pencil Drawing</option>
                    <option value="digital">Digital Art</option>
                    <option value="mixed-media">Mixed Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">
                    Preferred Size
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-colors bg-brand-background"
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (up to 16x20&quot;)</option>
                    <option value="medium">Medium (up to 24x36&quot;)</option>
                    <option value="large">Large (up to 36x48&quot;)</option>
                    <option value="custom">Custom Size</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-text mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-colors bg-brand-background"
                  >
                    <option value="">Select budget</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-text mb-2">
                  Vision & Description *
                </label>
                <textarea
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-colors bg-brand-background resize-none"
                  placeholder="Describe your vision, subject matter, style preferences, and any specific requirements..."
                />
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-12 py-4 bg-brand-secondary text-white font-medium rounded-lg hover:bg-brand-accent transition-colors inline-flex items-center gap-2"
                >
                  <Send size={18} />
                  Submit Inquiry
                </motion.button>
              </div>
            </form>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}

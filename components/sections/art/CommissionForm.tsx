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
    <section id="commission" className="py-24 md:py-32 bg-[#F8F6F3] border-t border-[#E8E4DD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-[#B08D57] text-sm tracking-[0.3em] uppercase mb-4">
              Custom Artwork
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#111111]">
              Commission Inquiry
            </h2>
            <p className="text-[#666666] mt-4 max-w-2xl mx-auto">
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
              className="text-center py-16 bg-[#FCFBF8] rounded-[16px] border border-[#E8E4DD] shadow-[0_10px_30px_rgba(13,19,33,0.05)]"
            >
              <CheckCircle size={64} className="text-[#B08D57] mx-auto mb-6" />
              <h3 className="font-playfair text-3xl text-[#111111] mb-4">
                Inquiry Received!
              </h3>
              <p className="text-[#666666] max-w-md mx-auto">
                Thank you for your interest in a custom commission. Our artist will
                review your request and contact you within 48 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#FCFBF8] rounded-[16px] border border-[#E8E4DD] shadow-[0_10px_30px_rgba(13,19,33,0.05)] p-8 md:p-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E4DD] focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] outline-none transition-colors bg-white text-[#111111]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E4DD] focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] outline-none transition-colors bg-white text-[#111111]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E4DD] focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] outline-none transition-colors bg-white text-[#111111]"
                    placeholder="+91 0000000000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-2">
                    Art Type *
                  </label>
                  <select
                    name="artType"
                    required
                    value={formData.artType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E4DD] focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] outline-none transition-colors bg-white text-[#111111]"
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

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#111111] mb-2">
                    Preferred Size
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E8E4DD] focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] outline-none transition-colors bg-white text-[#111111]"
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (up to 16x20&quot;)</option>
                    <option value="medium">Medium (up to 24x36&quot;)</option>
                    <option value="large">Large (up to 36x48&quot;)</option>
                    <option value="custom">Custom Size</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111111] mb-2">
                  Vision & Description *
                </label>
                <textarea
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E4DD] focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] outline-none transition-colors bg-white text-[#111111] resize-none"
                  placeholder="Describe your vision, subject matter, style preferences, and any specific requirements..."
                />
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-12 py-4 bg-[#B08D57] hover:bg-[#D4AF37] text-[#FCFBF8] font-medium rounded-lg transition-colors duration-300 inline-flex items-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98]"
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

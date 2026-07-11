import type { Metadata } from 'next';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Aakriti Atelier for architectural metal solutions, custom fabrication, fine arts, and creative projects. Request a quote, inquire about commissions, or visit our studio. We\'d love to hear from you.',
  alternates: {
    canonical: '/contact/',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}

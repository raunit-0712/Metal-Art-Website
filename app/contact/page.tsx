import type { Metadata } from 'next';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';
import { BreadcrumbsJsonLd, WebPageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Aakriti Atelier in Vasai, Mumbai for custom metal fabrication & fine art commissions. Get in touch with our experts today for a premium quote.',
  alternates: {
    canonical: '/contact/',
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', item: '/' },
          { name: 'Contact Us', item: '/contact/' },
        ]}
      />
      <WebPageJsonLd
        name="Contact Us - Aakriti Atelier"
        description="Get in touch with Aakriti Atelier for architectural metal solutions, custom fabrication, fine arts, and creative projects."
        url="/contact/"
        type="ContactPage"
      />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
}

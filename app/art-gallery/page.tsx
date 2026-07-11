import type { Metadata } from 'next';
import { ArtHero } from '@/components/sections/art/ArtHero';
import { ArtCategories } from '@/components/sections/art/ArtCategories';
import { ArtGallery } from '@/components/sections/art/ArtGallery';
import { CoursesCertificationSection } from '@/components/sections/art/CoursesCertificationSection';
import { CreativeProcess } from '@/components/sections/art/CreativeProcess';
import { CommissionForm } from '@/components/sections/art/CommissionForm';
import { BreadcrumbsJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Art Gallery',
  description:
    'Explore our fine art gallery featuring pencil sketches, portraits, fine arts, custom commissions, and digital artwork. Each piece tells a unique story.',
  alternates: {
    canonical: '/art-gallery/',
  },
};

export default function ArtGalleryPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', item: '/' },
          { name: 'Art Gallery', item: '/art-gallery/' },
        ]}
      />
      <ServiceJsonLd
        name="Fine Arts & Creative Artwork Commissions"
        description="Timeless custom art commissions, pencil drawings, portrait paintings, digital artworks, and fine art collections."
        offers={{
          category: 'Fine Arts',
          items: [
            'Portrait Paintings',
            'Wall Arts',
            'Canvas Paintings',
            'Custom Artwork',
            'Pencil Drawings',
          ],
        }}
      />
      
      <ArtHero />
      <ArtCategories />
      <ArtGallery />
      <CoursesCertificationSection />
      <CreativeProcess />
      <CommissionForm />
    </>
  );
}

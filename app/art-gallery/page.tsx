import type { Metadata } from 'next';
import { ArtHero } from '@/components/sections/art/ArtHero';
import { ArtCategories } from '@/components/sections/art/ArtCategories';
import { ArtGallery } from '@/components/sections/art/ArtGallery';
import { CoursesCertificationSection } from '@/components/sections/art/CoursesCertificationSection';
import { CreativeProcess } from '@/components/sections/art/CreativeProcess';
import { CommissionForm } from '@/components/sections/art/CommissionForm';

export const metadata: Metadata = {
  title: 'Art Gallery',
  description:
    'Explore our fine art gallery featuring pencil sketches, portraits, fine arts, custom commissions, and digital artwork. Each piece tells a unique story.',
};

export default function ArtGalleryPage() {
  return (
    <>
      <ArtHero />
      <ArtCategories />
      <ArtGallery />
      <CoursesCertificationSection />
      <CreativeProcess />
      <CommissionForm />
    </>
  );
}

import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ProjectsHero } from '@/components/sections/projects/ProjectsHero';
import { ProjectsGrid } from '@/components/sections/projects/ProjectsGrid';
import { getSteelProjects } from '@/lib/data/steel/getProjects';
import { BreadcrumbsJsonLd, WebPageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse our complete portfolio of architectural metal projects and fine art creations. Filter by category, type, and explore detailed case studies.',
  alternates: {
    canonical: '/projects/',
  },
};

export default function ProjectsPage() {
  const steelProjects = getSteelProjects();

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', item: '/' },
          { name: 'Projects', item: '/projects/' },
        ]}
      />
      <WebPageJsonLd
        name="Our Projects Portfolio - Aakriti Atelier"
        description="Browse our complete portfolio of architectural metal projects and fine art creations."
        url="/projects/"
        type="CollectionPage"
      />
      <ProjectsHero />
      <Suspense fallback={<div className="py-24 bg-brand-background text-center text-brand-text/50">Loading Projects...</div>}>
        <ProjectsGrid initialSteelProjects={steelProjects} />
      </Suspense>
    </>
  );
}

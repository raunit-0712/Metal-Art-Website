import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ProjectsHero } from '@/components/sections/projects/ProjectsHero';
import { ProjectsGrid } from '@/components/sections/projects/ProjectsGrid';
import { getSteelProjects } from '@/lib/data/steel/getProjects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse our complete portfolio of architectural steel projects and fine art creations. Filter by category, type, and explore detailed case studies.',
};

export default function ProjectsPage() {
  const steelProjects = getSteelProjects();

  return (
    <>
      <ProjectsHero />
      <Suspense fallback={<div className="py-24 bg-brand-background text-center text-brand-text/50">Loading Projects...</div>}>
        <ProjectsGrid initialSteelProjects={steelProjects} />
      </Suspense>
    </>
  );
}

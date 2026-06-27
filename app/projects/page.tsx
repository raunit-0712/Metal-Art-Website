import type { Metadata } from 'next';
import { ProjectsHero } from '@/components/sections/projects/ProjectsHero';
import { ProjectsGrid } from '@/components/sections/projects/ProjectsGrid';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse our complete portfolio of architectural steel projects and fine art creations. Filter by category, type, and explore detailed case studies.',
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
    </>
  );
}

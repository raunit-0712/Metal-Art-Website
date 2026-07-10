import fs from 'fs';
import path from 'path';
import { SteelProject, ProjectStatus } from './steel.types';
import { ProjectImage } from '@/types';

const TITLE_MAPPING: Record<string, string> = {
  'Card-lounge-080 t2 bangalore airport': 'Card Lounge T2 Bangalore Airport',
  'Cooper chimney , Navi Mumbai': 'Cooper Chimney, Navi Mumbai',
  'Metal-Decorative-Partition': 'Metal Decorative Partition',
  'bangalore-t1-airport': 'Bangalore T1 Airport',
  'bangalore-t2-airport': 'Bangalore T2 Airport',
  'card-lounge-international-airport': 'Card Lounge International Airport',
  'kempegowda-airport': 'Kempegowda Airport',
  'prestige-enterprise-center': 'Prestige Enterprise Center',
};

const SUBCATEGORY_MAPPING: Record<string, string> = {
  'bangalore-t1-airport': 'Architectural Metal',
  'bangalore-t2-airport': 'Architectural Metal',
  'Card-lounge-080 t2 bangalore airport': 'Architectural Metal',
  'card-lounge-international-airport': 'Decorative Panels',
  'Cooper chimney , Navi Mumbai': 'Architectural Metal',
  'kempegowda-airport': 'Decorative Panels',
  'Metal-Decorative-Partition': 'Decorative Panels',
  'prestige-enterprise-center': 'Lift Cladding',
};

const FEATURED_MAPPING: Record<string, boolean> = {
  'bangalore-t2-airport': true,
  'Card-lounge-080 t2 bangalore airport': true,
  'card-lounge-international-airport': false,
  'prestige-enterprise-center': false,
  'kempegowda-airport': false,
  'Metal-Decorative-Partition': true,
};

const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
const COVER_PRIORITIES = ['01_cover', 'cover', 'thumbnail', 'hero'];

function isSupportedImage(file: string): boolean {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file);

  if (
    name.startsWith('.') ||
    name.toLowerCase() === 'thumbs.db' ||
    name.toLowerCase() === 'desktop.ini' ||
    name.toLowerCase() === 'ds_store'
  ) {
    return false;
  }

  return SUPPORTED_EXTENSIONS.includes(ext);
}

function findCoverImage(files: string[]): string | undefined {
  const sortedFiles = [...files].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
  );

  for (const priority of COVER_PRIORITIES) {
    const matched = sortedFiles.find((file) => {
      const nameWithoutExt = path.parse(file).name.toLowerCase();
      return nameWithoutExt === priority;
    });
    if (matched) return matched;
  }

  return sortedFiles[0];
}

export function formatProjectTitle(folderName: string): string {
  if (TITLE_MAPPING[folderName]) {
    return TITLE_MAPPING[folderName];
  }

  return folderName
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((word) => {
      const upperWords = [
        't1',
        't2',
        't3',
        'vip',
        'hvac',
        'ss',
        'cnc',
        'mdf',
        'acp',
        'pvd',
        '304',
        '316',
      ];
      if (upperWords.includes(word.toLowerCase())) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export function getSteelProjects(): SteelProject[] {
  const projectsDir = path.join(
    process.cwd(),
    'public',
    'images',
    'steel',
    'projects'
  );

  if (!fs.existsSync(projectsDir)) {
    console.warn(`Steel projects directory not found: ${projectsDir}`);
    return [];
  }

  const folders = fs.readdirSync(projectsDir).filter((f) => {
    const fullPath = path.join(projectsDir, f);
    return fs.statSync(fullPath).isDirectory() && !f.startsWith('.');
  });

  const projects: SteelProject[] = folders
    .map((folder): SteelProject | null => {
      const folderPath = path.join(projectsDir, folder);
      const files = fs.readdirSync(folderPath).filter(isSupportedImage);

      if (files.length === 0) {
        return null;
      }

      // Determine cover image and gallery images
      const coverFile = findCoverImage(files) || files[0];
      const sortedGalleryFiles = [...files].sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
      );

      const title = formatProjectTitle(folder);

      const coverImg: ProjectImage = {
        src: `/images/steel/projects/${folder}/${coverFile}`,
        alt: `${title} Cover Image`,
        caption: '',
      };

      const galleryImages: ProjectImage[] = sortedGalleryFiles.map((file) => ({
        src: `/images/steel/projects/${folder}/${file}`,
        alt: `${title} Gallery Image`,
        caption: '',
      }));

      // Make sure the cover image is the first one in the list
      const filteredGallery = galleryImages.filter((img) => !img.src.endsWith(`/${coverFile}`));
      const finalImages = [coverImg, ...filteredGallery];

      const subcategory = SUBCATEGORY_MAPPING[folder] || 'Architectural Metal';
      const featured = FEATURED_MAPPING[folder] || false;
      const slug = folder.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();

      return {
        id: slug,
        title,
        category: 'steel' as const,
        subcategory,
        description: '',
        overview: '',
        challenge: '',
        solution: '',
        result: '',
        materials: '',
        scopeOfWork: [] as string[],
        servicesPerformed: [] as string[],
        finishType: '',
        sector: '',
        year: '',
        images: finalImages,
        featured,
        tags: ['steel'],
        status: ProjectStatus.COMPLETED,
      };
    })
    .filter((p): p is SteelProject => p !== null);

  return projects;
}

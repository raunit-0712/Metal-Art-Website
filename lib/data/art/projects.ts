import { Project } from './art.types';

export const artProjects: Project[] = [
  {
    id: '7',
    title: 'Portrait of Grace',
    category: 'art',
    subcategory: 'Portraits',
    description:
      'A delicate pencil portrait capturing the essence of human emotion through subtle shading and precise line work. Commissioned for a private collector.',
    medium: 'Graphite on Arches Paper',
    size: '18 x 24 inches',
    completionDate: '2024-02',
    images: [
      '/images/arts/portraits/dddDSCF3498.JPG',
    ],
    featured: true,
    tags: ['portrait', 'commission', 'fine-art'],
    client: 'Private Collector',
    location: 'Los Angeles, CA',
  },
  {
    id: '8',
    title: 'Urban Symphony',
    category: 'art',
    subcategory: 'Wall Arts',
    description:
      'A large-scale mixed media piece exploring the rhythm and chaos of urban life through abstract forms and metallic textures.',
    medium: 'Mixed Media on Canvas',
    size: '48 x 60 inches',
    completionDate: '2023-12',
    images: [
      '/images/arts/wall-arts/001.jpeg',
    ],
    featured: true,
    tags: ['abstract', 'large-scale', 'mixed-media'],
    client: 'Gallery Exhibition',
    location: 'New York, NY',
  },
  {
    id: '9',
    title: 'Whispers of Nature',
    category: 'art',
    subcategory: 'Miscellaneous',
    description:
      'Intricate botanical illustration showcasing the delicate beauty of wildflowers through detailed pencil work.',
    medium: 'Colored Pencil on Bristol Board',
    size: '14 x 17 inches',
    completionDate: '2023-10',
    images: [
      '/images/arts/miscellaneous/00030.jpg',
    ],
    featured: false,
    tags: ['botanical', 'illustration', 'nature'],
    client: 'Nature Magazine',
    location: 'Portland, OR',
  },
  {
    id: '10',
    title: 'Digital Horizons',
    category: 'art',
    subcategory: 'Digital Artwork',
    description:
      'A futuristic digital art piece exploring the intersection of technology and human consciousness.',
    medium: 'Digital Print on Aluminum',
    size: '30 x 40 inches',
    completionDate: '2023-08',
    images: [
      '/images/arts/digital/010.jpg',
    ],
    featured: true,
    tags: ['digital', 'futuristic', 'contemporary'],
    client: 'Tech Innovation Hub',
    location: 'Seattle, WA',
  },
];

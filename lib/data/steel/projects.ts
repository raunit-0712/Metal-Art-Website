import { Project } from './steel.types';

export const steelProjects: Project[] = [
  {
    id: '1',
    title: 'Floating Helical Staircase',
    category: 'steel',
    subcategory: 'Staircases',
    description:
      'A stunning helical staircase with floating treads and glass balustrade, creating an architectural centerpiece for a luxury residential villa. The design features precision-engineered steel stringers with powder-coated finish.',
    materials: 'Mild Steel, Tempered Glass, Stainless Steel Handrail',
    completionDate: '2024-03',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    featured: true,
    tags: ['residential', 'luxury', 'modern'],
    client: 'Private Residence',
    location: 'Beverly Hills, CA',
  },
  {
    id: '2',
    title: 'Modern Glass & Steel Railing',
    category: 'steel',
    subcategory: 'Railings',
    description:
      'Minimalist glass railing system with brushed stainless steel posts and handrails, designed for a contemporary office building overlooking the city skyline.',
    materials: 'Stainless Steel 304, Laminated Glass',
    completionDate: '2024-01',
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    featured: true,
    tags: ['commercial', 'modern', 'minimalist'],
    client: 'Tech Corp HQ',
    location: 'San Francisco, CA',
  },
  {
    id: '3',
    title: 'Luxury Lift Cladding',
    category: 'steel',
    subcategory: 'Lift Cladding',
    description:
      'Brushed brass and blackened steel elevator interior cladding for a boutique hotel, featuring geometric patterns and integrated LED lighting.',
    materials: 'Brass, Blackened Steel, LED Lighting',
    completionDate: '2023-11',
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    featured: true,
    tags: ['commercial', 'luxury', 'hotel'],
    client: 'The Grand Hotel',
    location: 'New York, NY',
  },
  {
    id: '4',
    title: 'Decorative Perforated Panels',
    category: 'steel',
    subcategory: 'Decorative Panels',
    description:
      'Custom CNC-perforated aluminum panels with artistic pattern for a cultural center facade, creating dynamic light and shadow effects throughout the day.',
    materials: 'Aluminum 5052, PVDF Coating',
    completionDate: '2023-09',
    images: [
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    featured: false,
    tags: ['commercial', 'cultural', 'facade'],
    client: 'City Cultural Center',
    location: 'Chicago, IL',
  },
  {
    id: '5',
    title: 'Industrial Metal Shelving',
    category: 'steel',
    subcategory: 'Metal Shelves',
    description:
      'Bespoke industrial-style shelving units for a high-end retail store, combining raw steel frames with reclaimed wood shelves.',
    materials: 'Raw Steel, Reclaimed Oak',
    completionDate: '2023-07',
    images: [
      'https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    featured: false,
    tags: ['retail', 'industrial', 'custom'],
    client: 'Luxe Boutique',
    location: 'Miami, FL',
  },
  {
    id: '6',
    title: 'Architectural Canopy Structure',
    category: 'steel',
    subcategory: 'Architectural Metal',
    description:
      'Large-scale architectural canopy for an outdoor amphitheater, featuring curved steel beams and tensile fabric elements.',
    materials: 'Structural Steel, Tensile Fabric',
    completionDate: '2023-05',
    images: [
      'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    featured: true,
    tags: ['public', 'large-scale', 'structural'],
    client: 'City Parks Dept',
    location: 'Austin, TX',
  },
];

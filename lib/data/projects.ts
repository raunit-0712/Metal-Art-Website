import { Project, Artwork, Testimonial, TeamMember, Service, TimelineEvent, FAQ } from '@/types';

export const projects: Project[] = [
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
  {
    id: '7',
    title: 'Portrait of Grace',
    category: 'art',
    subcategory: 'Portrait Sketches',
    description:
      'A delicate pencil portrait capturing the essence of human emotion through subtle shading and precise line work. Commissioned for a private collector.',
    medium: 'Graphite on Arches Paper',
    size: '18 x 24 inches',
    completionDate: '2024-02',
    images: [
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    subcategory: 'Fine Arts',
    description:
      'A large-scale mixed media piece exploring the rhythm and chaos of urban life through abstract forms and metallic textures.',
    medium: 'Mixed Media on Canvas',
    size: '48 x 60 inches',
    completionDate: '2023-12',
    images: [
      'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    subcategory: 'Pencil Drawings',
    description:
      'Intricate botanical illustration showcasing the delicate beauty of wildflowers through detailed pencil work.',
    medium: 'Colored Pencil on Bristol Board',
    size: '14 x 17 inches',
    completionDate: '2023-10',
    images: [
      'https://images.pexels.com/photos/1571473/pexels-photo-1571473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      'https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    featured: true,
    tags: ['digital', 'futuristic', 'contemporary'],
    client: 'Tech Innovation Hub',
    location: 'Seattle, WA',
  },
];

export const artworks: Artwork[] = [
  {
    id: 'a1',
    title: 'Eternal Gaze',
    category: 'Portrait Sketches',
    medium: 'Graphite on Arches Paper',
    size: '18 x 24 inches',
    description:
      'A hauntingly beautiful portrait capturing the depth of human emotion through masterful shading techniques.',
    image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2024,
    price: '$2,500',
    available: true,
    featured: true,
  },
  {
    id: 'a2',
    title: 'Metropolitan Dreams',
    category: 'Fine Arts',
    medium: 'Oil on Canvas',
    size: '36 x 48 inches',
    description:
      'An abstract interpretation of city life, blending warm earth tones with bold metallic accents.',
    image: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2024,
    price: '$4,800',
    available: true,
    featured: true,
  },
  {
    id: 'a3',
    title: 'Botanical Study IV',
    category: 'Pencil Drawings',
    medium: 'Colored Pencil on Bristol',
    size: '14 x 17 inches',
    description:
      'Part of an ongoing series exploring the intricate details of botanical specimens.',
    image: 'https://images.pexels.com/photos/1571473/pexels-photo-1571473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2023,
    price: '$1,200',
    available: true,
    featured: false,
  },
  {
    id: 'a4',
    title: 'Digital Consciousness',
    category: 'Digital Artwork',
    medium: 'Digital Print on Aluminum',
    size: '24 x 36 inches',
    description:
      'A thought-provoking piece that bridges the gap between traditional art and digital innovation.',
    image: 'https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2023,
    price: '$3,200',
    available: true,
    featured: true,
  },
  {
    id: 'a5',
    title: 'Serenity in Bronze',
    category: 'Fine Arts',
    medium: 'Bronze Sculpture',
    size: '12 x 8 x 6 inches',
    description:
      'A contemplative bronze sculpture exploring themes of peace and introspection.',
    image: 'https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2023,
    price: '$5,500',
    available: true,
    featured: false,
  },
  {
    id: 'a6',
    title: 'Family Portrait',
    category: 'Custom Commissions',
    medium: 'Charcoal on Paper',
    size: '22 x 30 inches',
    description:
      'A commissioned family portrait capturing the warmth and connection between generations.',
    image: 'https://images.pexels.com/photos/1571476/pexels-photo-1571476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2024,
    price: '$3,800',
    available: false,
    featured: true,
  },
  {
    id: 'a7',
    title: 'Abstract Motion',
    category: 'Wall Art',
    medium: 'Acrylic on Wood Panel',
    size: '40 x 60 inches',
    description:
      'A dynamic abstract piece that brings energy and movement to any space.',
    image: 'https://images.pexels.com/photos/1571477/pexels-photo-1571477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2024,
    price: '$6,200',
    available: true,
    featured: false,
  },
  {
    id: 'a8',
    title: 'Whispers of the Past',
    category: 'Portrait Sketches',
    medium: 'Graphite & Ink',
    size: '16 x 20 inches',
    description:
      'A nostalgic portrait series exploring memories and the passage of time.',
    image: 'https://images.pexels.com/photos/1571478/pexels-photo-1571478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    year: 2023,
    price: '$1,800',
    available: true,
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Mitchell',
    role: 'Interior Designer',
    company: 'Mitchell Design Studio',
    content:
      'Working with Aakriti Atelier was an absolute pleasure. Their attention to detail and craftsmanship transformed our client\'s vision into a stunning reality. The helical staircase they created is now the centerpiece of the entire home.',
    rating: 5,
    category: 'steel',
  },
  {
    id: 't2',
    name: 'James Rodriguez',
    role: 'Gallery Director',
    company: 'Contemporary Arts Gallery',
    content:
      'The commissioned portrait exceeded all expectations. The artist captured not just the likeness but the very essence of the subject. A true master of their craft.',
    rating: 5,
    category: 'art',
  },
  {
    id: 't3',
    name: 'Emily Chen',
    role: 'Property Developer',
    company: 'Chen Development Group',
    content:
      'We\'ve partnered with Aakriti Atelier on multiple luxury residential projects. Their metalwork consistently elevates our properties to the next level. Exceptional quality and service.',
    rating: 5,
    category: 'steel',
  },
  {
    id: 't4',
    name: 'Michael Torres',
    role: 'Art Collector',
    company: 'Private Collector',
    content:
      'I\'ve collected art for over 20 years, and the pieces from Aakriti Atelier are among the finest in my collection. Their unique blend of technical skill and artistic vision is truly rare.',
    rating: 5,
    category: 'art',
  },
  {
    id: 't5',
    name: 'David Park',
    role: 'Architect',
    company: 'Park Architecture',
    content:
      'As an architect, I demand precision and creativity. Aakriti Atelier delivers both flawlessly. Their custom fabrication work is architectural poetry in metal.',
    rating: 5,
    category: 'steel',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team1',
    name: 'Alexander Wright',
    role: 'Founder & Master Craftsman',
    bio: 'With over 20 years of experience in metal fabrication and fine arts, Alexander founded Aakriti Atelier to bridge the gap between engineering precision and artistic expression.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    social: {
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    id: 'team2',
    name: 'Isabella Martinez',
    role: 'Lead Artist',
    bio: 'Isabella brings over 15 years of fine art experience, specializing in portraiture and mixed media. Her work has been featured in galleries across Europe and North America.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    social: {
      instagram: '#',
    },
  },
  {
    id: 'team3',
    name: 'Marcus Johnson',
    role: 'Head of Fabrication',
    bio: 'Marcus leads our fabrication team with expertise in structural steel, CNC machining, and custom metalwork. His engineering background ensures precision in every project.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    social: {
      linkedin: '#',
    },
  },
  {
    id: 'team4',
    name: 'Sophie Laurent',
    role: 'Design Director',
    bio: 'Sophie combines her background in industrial design and fine arts to create innovative solutions that blend functionality with aesthetic beauty.',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    social: {
      linkedin: '#',
      instagram: '#',
    },
  },
];

export const steelServices: Service[] = [
  {
    id: 'ss1',
    title: 'Metal Staircases',
    description:
      'Custom-designed staircases ranging from floating designs to grand helical structures, engineered for both beauty and structural integrity.',
    icon: 'Stairs',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Helical & Spiral Designs',
      'Floating Tread Systems',
      'Glass & Steel Combinations',
      'Custom Railing Integration',
    ],
  },
  {
    id: 'ss2',
    title: 'Railings & Balustrades',
    description:
      'Elegant railing solutions for residential and commercial spaces, from minimalist glass systems to ornate wrought iron designs.',
    icon: 'Fence',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Glass Railing Systems',
      'Stainless Steel Railings',
      'Wrought Iron Designs',
      'Cable Railing Solutions',
    ],
  },
  {
    id: 'ss3',
    title: 'Lift Cladding',
    description:
      'Premium elevator interior cladding using brushed metals, exotic finishes, and integrated lighting for luxury environments.',
    icon: 'Square',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Brass & Bronze Finishes',
      'Blackened Steel Panels',
      'Integrated LED Lighting',
      'Custom Pattern Designs',
    ],
  },
  {
    id: 'ss4',
    title: 'Decorative Panels',
    description:
      'Architectural perforated and laser-cut panels for facades, screens, and interior feature walls with custom patterns.',
    icon: 'Grid3X3',
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'CNC Perforated Patterns',
      'Laser-Cut Designs',
      'Facade Cladding Systems',
      'Interior Feature Walls',
    ],
  },
  {
    id: 'ss5',
    title: 'Metal Shelving',
    description:
      'Bespoke shelving and storage solutions combining industrial aesthetics with practical functionality for retail and residential spaces.',
    icon: 'Library',
    image: 'https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Industrial Style Units',
      'Floating Shelf Systems',
      'Retail Display Fixtures',
      'Custom Storage Solutions',
    ],
  },
  {
    id: 'ss6',
    title: 'Metal Skirting',
    description:
      'Precision-crafted metal skirting and trim work that adds a refined finishing touch to any interior space.',
    icon: 'Minus',
    image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Stainless Steel Skirting',
      'Brass Trim Work',
      'Custom Profiles',
      'Integrated Lighting',
    ],
  },
  {
    id: 'ss7',
    title: 'Custom Fabrication',
    description:
      'Bespoke metal fabrication services for unique architectural elements, sculptures, and one-of-a-kind projects.',
    icon: 'Hammer',
    image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    features: [
      'Architectural Elements',
      'Metal Sculptures',
      'Prototype Development',
      'Restoration Work',
    ],
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2014',
    title: 'The Beginning',
    description:
      'Aakriti Atelier was founded with a vision to combine engineering excellence with artistic creativity.',
  },
  {
    year: '2016',
    title: 'First Major Project',
    description:
      'Completed our first large-scale architectural project - a custom staircase for a luxury Beverly Hills residence.',
  },
  {
    year: '2018',
    title: 'Art Division Launch',
    description:
      'Expanded into fine arts with the opening of our dedicated art studio and gallery space.',
  },
  {
    year: '2020',
    title: '50th Project Milestone',
    description:
      'Celebrated the completion of our 50th project, spanning residential, commercial, and public spaces.',
  },
  {
    year: '2022',
    title: 'International Recognition',
    description:
      'Received international design awards for our innovative approach to metal architecture and artistic expression.',
  },
  {
    year: '2024',
    title: '150 Projects & Counting',
    description:
      'Reached the milestone of 150 completed projects, continuing to push boundaries in both steel and art.',
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'What types of metal do you work with?',
    answer:
      'We work with a wide range of metals including mild steel, stainless steel (304 and 316), aluminum, brass, bronze, copper, and specialty alloys. Each material is selected based on the project requirements for durability, aesthetics, and environmental conditions.',
    category: 'steel',
  },
  {
    id: 'faq2',
    question: 'How long does a typical metal fabrication project take?',
    answer:
      'Project timelines vary based on complexity and scope. A simple railing project might take 2-3 weeks, while a custom helical staircase could take 8-12 weeks. We provide detailed timelines during the consultation phase.',
    category: 'steel',
  },
  {
    id: 'faq3',
    question: 'Do you offer installation services?',
    answer:
      'Yes, we provide full installation services for all our metalwork projects. Our experienced installation team ensures precise fitting and finishing on-site.',
    category: 'steel',
  },
  {
    id: 'faq4',
    question: 'Can you create custom art commissions?',
    answer:
      'Absolutely! We specialize in custom art commissions including portraits, abstract works, and mixed media pieces. We work closely with clients to understand their vision and create unique, personalized artwork.',
    category: 'art',
  },
  {
    id: 'faq5',
    question: 'What is your commission process?',
    answer:
      'Our commission process begins with a consultation to discuss your vision, followed by concept sketches, approval of the final design, creation of the artwork, and delivery. Typical timelines range from 2-8 weeks depending on complexity.',
    category: 'art',
  },
  {
    id: 'faq6',
    question: 'Do you ship artwork internationally?',
    answer:
      'Yes, we ship artwork worldwide using professional art shipping services with full insurance coverage. We ensure proper packaging and handling for safe delivery.',
    category: 'art',
  },
  {
    id: 'faq7',
    question: 'What is your warranty policy?',
    answer:
      'We offer a comprehensive warranty on all our work. Metal fabrication projects come with a 10-year structural warranty and 5-year finish warranty. Artwork is guaranteed against defects in materials and craftsmanship.',
    category: 'general',
  },
  {
    id: 'faq8',
    question: 'How do I get a quote?',
    answer:
      'You can request a quote through our contact form, by email, or by phone. For metalwork projects, we typically need project specifications, drawings, or photos. For art commissions, we\'ll discuss your vision during an initial consultation.',
    category: 'general',
  },
];

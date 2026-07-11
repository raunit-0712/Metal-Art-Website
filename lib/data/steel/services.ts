import { Service } from './steel.types';

export const steelServices: Service[] = [
  { 
    id: 'ss1',
    title: 'Lift Metal Jamb',
    description:
      'Custom stainless steel lift jambs and entrance framing designed to provide a clean, durable, and premium finish for residential, commercial, and hospitality projects.',
    icon: 'Square',
    image: '/images/steel/services/Lift-metal-jamb.jpeg',
    features: [
      'Custom Stainless Steel Fabrication',
      'Mirror & Hairline Finish Options',
      'Precision Installation',
      'Suitable for Residential & Commercial Lifts',
    ],
  },

  {
    id: 'ss2',
    title: 'Brass Footrail',
    description:
      'Premium brass footrails manufactured for bars, restaurants, hotels, and luxury interiors, combining durability with an elegant architectural appearance.',
    icon: 'Minus',
    image: '/images/steel/services/brass-footrail.jpeg',
    features: [
      'Solid Brass Construction',
      'Polished & Satin Finish',
      'Custom Length Manufacturing',
      'Corrosion Resistant',
    ],
  },

  {
    id: 'ss3',
    title: 'Metal Portal',
    description:
      'Architectural metal portal frames designed to enhance entrances, reception areas, and commercial interiors with a refined contemporary look.',
    icon: 'Square',
    image: '/images/steel/services/metal-portal.jpeg',
    features: [
      'Custom Metal Fabrication',
      'Decorative Entrance Frames',
      'Premium Surface Finishes',
      'Interior & Exterior Applications',
    ],
  },

  {
    id: 'ss4',
    title: 'Metal Shelves & Display Units',
    description:
      'Modern custom-built metal shelving systems and display structures for homes, offices, retail stores, and commercial interiors.',
    icon: 'Library',
    image: '/images/steel/services/metal-shelves.jpeg',
    features: [
      'Custom Dimensions',
      'Decorative Display Units',
      'Residential & Commercial Use',
      'Premium Powder Coating',
    ],
  },

  {
    id: 'ss5',
    title: 'Staircase & Railing',
    description:
      'Custom fabricated staircases and railing systems combining structural strength with contemporary architectural aesthetics for residential and commercial spaces.',
    icon: 'Stairs',
    image: '/images/steel/services/staircase.jpeg',
    features: [
      'Modern Staircase Designs',
      'Glass & Stainless Steel Railings',
      'Custom Fabrication',
      'Professional Installation',
    ],
  },

  {
    id: 'ss6',
    title: 'Metal Portal Entrance',
    description:
      'Decorative architectural portal structures manufactured using premium-grade metals, ideal for luxury residential and commercial entrance designs.',
    icon: 'Grid3X3',
    image: '/images/steel/services/metal-portal-2.jpeg',
    features: [
      'Luxury Entrance Design',
      'Custom Fabrication',
      'Weather Resistant Finish',
      'Architectural Installation',
    ],
  },
];

export interface AdditionalSteelService {
  name: string;
  subtitle: string;
}

export const additionalSteelServices: AdditionalSteelService[] = [
  { name: 'CNC Laser Cutting', subtitle: 'High-precision metal profile cutting.' },
  { name: 'Decorative Metal Screens', subtitle: 'Custom laser-cut spatial privacy partitions.' },
  { name: 'Laser Cut Wall Panels', subtitle: 'Ornamental metallic wall cladding features.' },
  { name: 'Stainless Steel Furniture', subtitle: 'Premium architectural metal seating and tables.' },
  { name: 'Glass Railing Systems', subtitle: 'Frameless glass support structures and channels.' },
  { name: 'Spiral Staircases', subtitle: 'Space-saving curved metal steps and balustrades.' },
  { name: 'Modular Metal Structures', subtitle: 'Prefabs for custom structural frameworks.' },
  { name: 'Mezzanine Floors', subtitle: 'Heavy-duty metal platform floor expansions.' },
  { name: 'Sliding Gates', subtitle: 'Automatic tracked driveway security gates.' },
  { name: 'Elevator Interiors', subtitle: 'Bespoke paneling for passenger elevator cabs.' },
  { name: 'Reception Counters', subtitle: 'Luxury metal-faced retail and office desks.' },
  { name: 'Decorative Ceiling Frames', subtitle: 'Ornamental hanging metal grids and panels.' },
  { name: 'Kitchen Equipment Fabrication', subtitle: 'Heavy-gauge stainless steel restaurant counters.' },
  { name: 'Custom Metal Furniture', subtitle: 'Bespoke tables and custom metal shelving.' },
  { name: 'Metal Art Installations', subtitle: 'Sculptural custom metal features for foyers.' },
  { name: 'Designer Wall Features', subtitle: 'Architectural metal wall art and inserts.' },
  { name: 'Pergola Metal Framing', subtitle: 'Custom outdoor metal canopy frameworks.' },
  { name: 'ACP Cladding Support Structures', subtitle: 'Heavy-duty structural backup frame assemblies.' },
  { name: 'Retail Display Systems', subtitle: 'Premium clothing racks and shelving units.' },
  { name: 'Security Window Grills', subtitle: 'Heavy-duty steel window protection frames.' }
];
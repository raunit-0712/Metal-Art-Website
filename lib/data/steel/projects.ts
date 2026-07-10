import { SteelProject, ProjectStatus } from './steel.types';
import { steelProjectImages } from './project-images';

export const steelProjects: SteelProject[] = [
  {
    id: '1',
    title: 'kempegowda International Airport (Terminal 1)',
    category: 'steel',
    subcategory: 'Decorative Panels',
    description: 'This project involved the custom engineering, fabrication, and installation of durable stainless steel wall cladding, checkout display counters, restroom wall paneling, and architectural metal features for the Terminal 1 departure concourse and passenger check-in halls.',
    overview: 'This project involved the custom engineering, fabrication, and installation of durable stainless steel wall cladding, checkout display counters, restroom wall paneling, and architectural metal features for the Terminal 1 departure concourse and passenger check-in halls.',
    challenge: 'The airport environment demanded heavy-duty materials that could withstand high-volume passenger traffic, luggage impacts, and stringent chemical sanitization routines, all while maintaining a flawless, premium aesthetic.',
    solution: 'We fabricated modular, thick-gauge 304 stainless steel panels with high-tolerance hairline finishes. Restroom cladding utilized specialized anti-fingerprint coatings, and the check-in counters integrated heavy MDF bases with welded structural steel subframes and premium ACP covers.',
    result: 'The installation delivered a seamless, modern, and highly resilient architectural finish that protects the structural surfaces and enhances the passenger flow zones with clean, reflective aesthetics.',
    materials: '304 Stainless Steel, Hairline Finish Stainless Steel, MDF Base, ACP Panels',
    scopeOfWork: [
      'Stainless Steel Wall Cladding',
      'Restroom Wall Paneling',
      'Check-in Display Counters',
      'Architectural Corner Guards'
    ],
    servicesPerformed: [
      'Engineering & Shop Drawings',
      'Precision Laser Cutting & CNC Bending',
      'TIG Welding & Seamless Polishing',
      'On-site Installation'
    ],
    finishType: 'Brushed Hairline with Protective Coating',
    sector: 'Airport Terminal',
    year: '2023',
    completionDate: '2023-04',
    images: steelProjectImages['kempegowda-airport'],
    featured: false,
    tags: ['airport', 'commercial', 'cladding', 'large-scale'],
    client: 'Bangalore International Airport Limited (BIAL)',
    location: 'Bengaluru, India',
    status: ProjectStatus.COMPLETED
  },
  {
    id: '2',
    title: 'kempegowda International Airport (Terminal 2)',
    category: 'steel',
    subcategory: 'Architectural Metal',
    description: 'This project involved the execution of complex decorative metal systems inside the award-winning Garden Terminal (T2), including gold-anodized column wrapping, suspended ceiling baffle grids, safety corridor balustrades, and structural steel planters supporting the indoor ecosystem.',
    overview: 'This project involved the execution of complex decorative metal systems inside the award-winning Garden Terminal (T2), including gold-anodized column wrapping, suspended ceiling baffle grids, safety corridor balustrades, and structural steel planters supporting the indoor ecosystem.',
    challenge: 'Integrating structural metal installations into an interior dominated by natural elements like bamboo, wood, and hanging plants required extremely precise tolerances and custom hardware systems that could mount safely to unconventional load-bearing members.',
    solution: 'We designed bespoke suspension systems for the ceiling baffles and engineered heavy-gauge circular steel planters coated in industrial-grade corrosion inhibitors. The column wraps featured hairline-jointed panels in custom PVD gold finishes that perfectly complemented the warm timber frames.',
    result: 'A stunning architectural synthesis of nature and industrial design, ensuring complete structural safety for high-volume pedestrian corridors while preserving the terminal’s biophilic design vision.',
    materials: 'Hairline Finish Stainless Steel, PVD Coating, Mild Steel, Aluminium',
    scopeOfWork: [
      'Column Wrapping & Cladding',
      'Ceiling Baffles & Grids',
      'Heavy-gauge Garden Planters',
      'Pedestrian Corridor Balustrades'
    ],
    servicesPerformed: [
      'BIM Coordination & 3D Modeling',
      'CNC Profile Cutting & Rolling',
      'High-durability PVD Coating',
      'Structural Load Calculation & Installation'
    ],
    finishType: 'PVD Champagne Gold & Antique Bronze',
    sector: 'Airport Terminal',
    year: '2024',
    completionDate: '2024-01',
    images: steelProjectImages['bangalore-t2-airport'],
    featured: false,
    tags: ['airport', 'commercial', 'large-scale', 'structural'],
    client: 'Bangalore International Airport Limited (BIAL)',
    location: 'Bengaluru, India',
    status: ProjectStatus.COMPLETED
  },
  {
    id: '3',
    title: '080 International VIP Lounge',
    category: 'steel',
    subcategory: 'Decorative Panels',
    description: 'Bespoke metalwork package and high-end hospitality metal finishes for the prestigious 080 International Lounge. Features custom reception counter cladding, geometric-patterned laser-cut divider screens, backlit mirror gold bar display shelving, and ornamental ceiling canopies.',
    overview: 'Bespoke metalwork package and high-end hospitality metal finishes for the prestigious 080 International Lounge. Features custom reception counter cladding, geometric-patterned laser-cut divider screens, backlit mirror gold bar display shelving, and ornamental ceiling canopies.',
    challenge: 'Creating a highly luxurious, intimate interior space required premium materials like brass and PVD gold coatings with zero visible weld lines, joints, or mounting fasteners.',
    solution: 'We utilized hidden mechanical fastening systems and master-crafted brass TIG welding with post-weld hand polishing to create seamless joints. Laser-cut divider screens were structuralized within slim steel borders, and the bar shelving utilized premium copper-alloy plating.',
    result: 'An exceptionally premium, hospitality-centered lounge that has become a design benchmark, welcoming international travelers with warm, reflective luxury accents.',
    materials: '304 Stainless Steel, Brass, Mirror Finish Stainless Steel, PVD Gold Coating',
    scopeOfWork: [
      'Reception Desk Metal Fascia',
      'Pillars & Column Cladding',
      'Laser-cut Divider Screens',
      'Backlit Bar Backdrops & Shelving',
      'Gold Ceiling Canopies'
    ],
    servicesPerformed: [
      'Bespoke Interior Design Coordination',
      'Custom Laser-pattern cutting',
      'Fine Brass Fabrication & Hand Polishing',
      'Integrated LED Light Metal Fitting'
    ],
    finishType: 'Mirror Finish PVD Gold & Brushed Brass',
    sector: 'Luxury Hospitality',
    year: '2023',
    completionDate: '2023-09',
    images: steelProjectImages['card-lounge-international-airport'],
    featured: true,
    tags: ['hospitality', 'lounge', 'interior', 'luxury'],
    client: 'Confidential Client',
    location: 'Bengaluru, India',
    status: ProjectStatus.COMPLETED
  },
  {
    id: '4',
    title: 'Bengaluru Airport T1 Gate Expansion',
    category: 'steel',
    subcategory: 'Architectural Metal',
    description: 'This project encompassed the structural steel fabrication and heavy cladding of passenger departure gates, retail storefront frames, and check-in counters for the Terminal 1 expansion wings.',
    overview: 'This project encompassed the structural steel fabrication and heavy cladding of passenger departure gates, retail storefront frames, and check-in counters for the Terminal 1 expansion wings.',
    challenge: 'Working within an active airport environment required overnight installations, strict security clearance schedules, and rapid assembly methods that did not disrupt flight schedules or passenger queues.',
    solution: 'We prefabricated the gate portal frames and shopfront panels off-site. The structural members were designed with bolt-together connections, minimizing on-site welding and allowing full gate blocks to be assembled within tight 4-hour maintenance windows.',
    result: 'The expansion gates were delivered ahead of schedule, providing a robust, modern portal design that seamlessly integrated with the existing Terminal 1 styling.',
    materials: '304 Stainless Steel, ACP Panels, Structural Steel',
    scopeOfWork: [
      'Departure Gate Portals',
      'Retail Facade Frames',
      'Check-in Counters',
      'Baggage Feed-line Protection Grilles'
    ],
    servicesPerformed: [
      'Off-site Prefabrication & Assembly',
      'Structural Structural Steel Welding (AWS Certified)',
      'High-traffic Metal Cladding',
      'Overnight On-site Rigging & Installation'
    ],
    finishType: 'Satin Brushed Stainless Steel',
    sector: 'Airport Terminal',
    year: '2022',
    completionDate: '2022-11',
    images: steelProjectImages['bangalore-t1-airport'],
    featured: false,
    tags: ['airport', 'commercial', 'structural', 'gates'],
    client: 'Bangalore International Airport Limited (BIAL)',
    location: 'Bengaluru, India',
    status: ProjectStatus.COMPLETED
  },
  {
    id: '5',
    title: 'Prestige Enterprise Center Lobby',
    category: 'steel',
    subcategory: 'Lift Cladding',
    description: 'Modern lobby fit-out involving dark bronze PVD entrance portals, elevator lobby cladding, and minimalist stainless steel frame glass partitions for the prestige corporate headquarters.',
    overview: 'Modern lobby fit-out involving dark bronze PVD entrance portals, elevator lobby cladding, and minimalist stainless steel frame glass partitions for the prestige corporate headquarters.',
    challenge: 'Achieving a uniform, dark bronze metallic color tone across panels of varying sizes and metal batches while maintaining flat, distortion-free sheet surfaces (no oil-canning).',
    solution: 'We utilized premium thick-gauge steel backing laminated to MDF panels, preventing any sheet warping. The PVD coating was color-matched in single batches, and dry-joint design allowed clean expansions and minimal silicone joints.',
    result: 'A corporate lobby entry that radiates solid, corporate strength with high-end dark metallic details, matching the corporate branding of the Prestige Group.',
    materials: '304 Stainless Steel, Hairline Finish Stainless Steel, Glass, MDF Base',
    scopeOfWork: [
      'Dark Bronze Entrance Portals',
      'Lift Lobby Wall Cladding',
      'Glass Office Partition Framing'
    ],
    servicesPerformed: [
      'Shop Drawings & Engineering Design',
      'Lamination & MDF Backing Panels',
      'PVD Bronze Coating',
      'Lobby Installation'
    ],
    finishType: 'Brushed Bronze PVD Coating',
    sector: 'Corporate Office',
    year: '2023',
    completionDate: '2023-06',
    images: steelProjectImages['prestige-enterprise-center'],
    featured: true,
    tags: ['corporate', 'office', 'cladding', 'interior'],
    client: 'Prestige Group',
    location: 'Mumbai, India',
    status: ProjectStatus.COMPLETED
  },
  {
    id: '6',
    title: 'Card Lounge kempegowda',
    category: 'steel',
    subcategory: 'Architectural Metal',
    description: 'A highly complex, site-wide architectural metal package for a 5-star hotel, featuring grand atrium columns, reception decorative screens, lift portals, mirror finish ceiling trim profiles, helice stair balustrades, vanity stations, spa pools, and decorative grilles.',
    overview: 'A highly complex, site-wide architectural metal package for a 5-star hotel, featuring grand atrium columns, reception decorative screens, lift portals, mirror finish ceiling trim profiles, helice stair balustrades, vanity stations, spa pools, and decorative grilles.',
    challenge: 'Working across multiple hotel wings with a variety of specialized detail designs, requiring close coordination with marble contractors, electrical contractors, and guessing details with glass structures.',
    solution: 'We deployed a dedicated site engineering team to map architectural dimensions in real-time. Metal trims were manufactured with custom returns to slide over stone edges, LED channel profiles were pre-integrated, and marine-grade 316 stainless steel was used for the spa pool environments.',
    result: 'A breathtaking hospitality environment where mirror gold and brushed brass details connect walls, floors, and ceilings in a unified, world-class luxury interior.',
    materials: 'Mirror Finish Stainless Steel, Brass, PVD Coating, Laminated Glass, Mild Steel',
    scopeOfWork: [
      'Atrium Column Cladding',
      'Reception Backdrop Screens',
      'Elevator Portals & Architraves',
      'Grand Spiral Staircase Railing',
      'Ceiling Recessed Trims & Profiles',
      'Vanity Mirror Frames',
      'Spa Pool Corrosion-resistant Trims'
    ],
    servicesPerformed: [
      'Laser Scanning & Field Dimensioning',
      'Precision Sheet Metal Fabrication',
      'Helical Tube Rolling & Welding',
      'Multi-discipline Contractor Coordination'
    ],
    finishType: 'Super Mirror PVD Gold, Brushed Gold & Brushed Brass',
    sector: 'Luxury Hospitality',
    year: '2023',
    completionDate: '2023-08',
    images: steelProjectImages['5-star-hotel'],
    featured: false,
    tags: ['hotel', 'hospitality', 'interior', 'luxury'],
    client: 'Confidential Client',
    location: 'Luxury Hospitality',
    status: ProjectStatus.COMPLETED
  }
];

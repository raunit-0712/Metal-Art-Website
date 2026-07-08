import { Project, ProjectImage } from '@/types';

export type { Service } from '@/types';

export type ProjectCategory = 'steel' | 'art';

export enum ProjectMaterial {
  SS304 = '304 Stainless Steel',
  SS_MIRROR = 'Mirror Finish Stainless Steel',
  SS_HAIRLINE = 'Hairline Finish Stainless Steel',
  BRASS = 'Brass',
  PVD = 'PVD Coating',
  GLASS = 'Glass',
  MDF = 'MDF Base',
  ACP = 'ACP Panels',
  ALUMINIUM = 'Aluminium',
  STRUCTURAL = 'Structural Steel'
}

export enum ProjectLocation {
  BENGALURU = 'Bengaluru, India',
  MUMBAI = 'Mumbai, India',
  CONFIDENTIAL_Lounge = 'Confidential Lounge',
  CONFIDENTIAL_HOTEL = 'Luxury Hospitality',
  AIRPORT = 'Airport Terminal',
  OFFICE = 'Corporate Office'
}

export enum ProjectTag {
  AIRPORT = 'airport',
  COMMERCIAL = 'commercial',
  CLADDING = 'cladding',
  LARGESCALE = 'large-scale',
  STRUCTURAL = 'structural',
  HOSPITALITY = 'hospitality',
  LOUNGE = 'lounge',
  INTERIOR = 'interior',
  LUXURY = 'luxury',
  CORPORATE = 'corporate',
  OFFICE = 'office',
  GATES = 'gates',
  HOTEL = 'hotel'
}

export enum ProjectStatus {
  COMPLETED = 'Completed',
  IN_PROGRESS = 'In Progress'
}

export interface SteelProject extends Omit<Project, 'images'> {
  category: 'steel';
  images: ProjectImage[];
  materials: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  scopeOfWork: string[];
  servicesPerformed: string[];
  finishType: string;
  sector: string;
  status: ProjectStatus;
}

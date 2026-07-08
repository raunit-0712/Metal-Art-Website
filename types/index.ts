export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'steel' | 'art';
  subcategory: string;
  description: string;
  materials?: string;
  medium?: string;
  size?: string;
  completionDate?: string;
  images: string[] | ProjectImage[];
  featured: boolean;
  tags: string[];
  client?: string;
  location?: string;
  // Enhanced storytelling & metadata
  overview?: string;
  challenge?: string;
  solution?: string;
  result?: string;
  scopeOfWork?: string[];
  servicesPerformed?: string[];
  finishType?: string;
  sector?: string;
  year?: string;
}

export interface Artwork {
  id: string;
  title: string;
  category: string;
  medium: string;
  size: string;
  description: string;
  image: string;
  year: number;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  category: 'steel' | 'art';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'steel' | 'art' | 'general';
}

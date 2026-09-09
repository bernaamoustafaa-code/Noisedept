export interface Project {
  id: string;
  title: string;
  category: 'Direction' | 'Sonic' | 'Spatial' | 'Visual';
  client: string;
  year: string;
  description: string;
  fullOverview: string;
  deliverables: string[];
  image: string;
  accolades?: string;
  tagline: string;
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  focus: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
}

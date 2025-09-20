export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
  image?: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon?: string;
}

export interface Activity {
  title: string;
  type:
    | "speaking"
    | "competition"
    | "community"
    | "certification"
    | "achievement";
  description: string;
  date?: string;
  location?: string;
  organization?: string;
  link?: string;
  image?: string;
}

export interface LayoutProps {
  title: string;
  description?: string;
  ogImage?: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
}

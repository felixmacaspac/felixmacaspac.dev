export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
  image?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  category: string;
  status: string;
  role: string;
  problem: string;
  approach: string;
  outcome: string;
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
  ogImageAlt?: string;
  canonicalPath?: string;
  pageType?: "ProfilePage" | "CollectionPage" | "WebPage";
  structuredData?: Record<string, unknown>;
}

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface WorkData {
  featured: {
    name: string;
    images: {
      link: string;
      alt: string;
    }[];
    description: string;
    features: string[];
    techUsed: string[];
    repoLink: string;
    liveLink: string;
  }[];
}

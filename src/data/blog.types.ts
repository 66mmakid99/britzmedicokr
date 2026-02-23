export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  coverImage?: string;
  faqs: { question: string; answer: string }[];
  relatedProducts: { title: string; href: string }[];
  relatedSlugs: string[];
}

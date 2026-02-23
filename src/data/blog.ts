import { supabase } from '@lib/supabase';
import {
  getAllPosts as getAllPostsStatic,
  getPostBySlug as getPostBySlugStatic,
  getRelatedPosts as getRelatedPostsStatic,
} from './blog.static';
import type { BlogPost } from './blog.types';

export type { BlogPost } from './blog.types';

function rowToPost(row: {
  slug: string;
  title: string;
  category: string;
  category_label: string;
  excerpt: string;
  content: string;
  author: string;
  published_at: string;
  cover_image: string | null;
  faqs: { question: string; answer: string }[];
  related_products: { title: string; href: string }[];
  related_slugs: string[];
}): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    categoryLabel: row.category_label,
    excerpt: row.excerpt,
    content: row.content,
    author: row.author,
    publishedAt: row.published_at.slice(0, 10),
    coverImage: row.cover_image ?? undefined,
    faqs: row.faqs ?? [],
    relatedProducts: row.related_products ?? [],
    relatedSlugs: row.related_slugs ?? [],
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!supabase) return getAllPostsStatic();

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error || !data) {
      console.warn('[blog] Supabase error, falling back to static:', error?.message);
      return getAllPostsStatic();
    }

    return data.map(rowToPost);
  } catch {
    console.warn('[blog] Supabase unreachable, falling back to static');
    return getAllPostsStatic();
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!supabase) return getPostBySlugStatic(slug);

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error || !data) {
      return getPostBySlugStatic(slug);
    }

    return rowToPost(data);
  } catch {
    return getPostBySlugStatic(slug);
  }
}

export async function getRelatedPosts(post: BlogPost): Promise<BlogPost[]> {
  if (!supabase || !post.relatedSlugs.length) return getRelatedPostsStatic(post);

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .in('slug', post.relatedSlugs)
      .eq('status', 'published');

    if (error || !data) {
      return getRelatedPostsStatic(post);
    }

    return data.map(rowToPost);
  } catch {
    return getRelatedPostsStatic(post);
  }
}

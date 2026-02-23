import { supabase } from '@lib/supabase';
import {
  getAllNews as getAllNewsStatic,
  getNewsBySlug as getNewsBySlugStatic,
} from './news.static';
import type { NewsItem } from './news.types';

export type { NewsItem } from './news.types';

function rowToNews(row: {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  published_at: string;
}): NewsItem {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    publishedAt: row.published_at.slice(0, 10),
  };
}

export async function getAllNews(): Promise<NewsItem[]> {
  if (!supabase) return getAllNewsStatic();

  try {
    const { data, error } = await supabase
      .from('news_items')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error || !data) {
      console.warn('[news] Supabase error, falling back to static:', error?.message);
      return getAllNewsStatic();
    }

    return data.map(rowToNews);
  } catch {
    console.warn('[news] Supabase unreachable, falling back to static');
    return getAllNewsStatic();
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | undefined> {
  if (!supabase) return getNewsBySlugStatic(slug);

  try {
    const { data, error } = await supabase
      .from('news_items')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error || !data) {
      return getNewsBySlugStatic(slug);
    }

    return rowToNews(data);
  } catch {
    return getNewsBySlugStatic(slug);
  }
}

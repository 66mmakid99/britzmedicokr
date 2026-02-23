import { createClient } from '@supabase/supabase-js';
import { getAllPosts } from '../src/data/blog.static';
import { getAllNews } from '../src/data/news.static';

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function seedBlog() {
  const posts = getAllPosts();
  console.log(`Seeding ${posts.length} blog posts...`);

  for (const post of posts) {
    const { error } = await supabase.from('blog_posts').upsert(
      {
        slug: post.slug,
        title: post.title,
        category: post.category,
        category_label: post.categoryLabel,
        excerpt: post.excerpt,
        content: post.content,
        author: post.author,
        cover_image: post.coverImage ?? null,
        faqs: post.faqs,
        related_products: post.relatedProducts,
        related_slugs: post.relatedSlugs,
        status: 'published' as const,
        published_at: post.publishedAt,
      },
      { onConflict: 'slug' },
    );

    if (error) {
      console.error(`  Failed: ${post.slug}`, error.message);
    } else {
      console.log(`  OK: ${post.slug}`);
    }
  }
}

async function seedNews() {
  const items = getAllNews();
  console.log(`Seeding ${items.length} news items...`);

  for (const item of items) {
    const { error } = await supabase.from('news_items').upsert(
      {
        slug: item.slug,
        title: item.title,
        excerpt: item.excerpt,
        content: item.content,
        category: item.category,
        status: 'published' as const,
        published_at: item.publishedAt,
      },
      { onConflict: 'slug' },
    );

    if (error) {
      console.error(`  Failed: ${item.slug}`, error.message);
    } else {
      console.log(`  OK: ${item.slug}`);
    }
  }
}

async function main() {
  await seedBlog();
  await seedNews();
  console.log('Done!');
}

main();

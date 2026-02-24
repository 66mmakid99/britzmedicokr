export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          category: string;
          category_label: string;
          excerpt: string;
          content: string;
          author: string;
          cover_image: string | null;
          faqs: { question: string; answer: string }[];
          related_products: { title: string; href: string }[];
          related_slugs: string[];
          status: 'draft' | 'published' | 'archived';
          published_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          category: string;
          category_label: string;
          excerpt: string;
          content: string;
          author: string;
          cover_image?: string | null;
          faqs?: { question: string; answer: string }[];
          related_products?: { title: string; href: string }[];
          related_slugs?: string[];
          status?: 'draft' | 'published' | 'archived';
          published_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['blog_posts']['Insert']>;
      };
      news_items: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          category: string;
          status: 'draft' | 'published' | 'archived';
          published_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          category: string;
          status?: 'draft' | 'published' | 'archived';
          published_at?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['news_items']['Insert']>;
      };
      contact_inquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          company: string | null;
          position: string | null;
          subject: string | null;
          message: string;
          product_interest: string | null;
          status: 'new' | 'read' | 'replied' | 'closed';
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          company?: string | null;
          position?: string | null;
          subject?: string | null;
          message: string;
          product_interest?: string | null;
          status?: 'new' | 'read' | 'replied' | 'closed';
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['contact_inquiries']['Insert']>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

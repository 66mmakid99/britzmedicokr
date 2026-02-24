import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.britzmedi.co.kr',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'ko',
        locales: { ko: 'ko-KR', en: 'en-US' }
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url.includes('/products/')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        if (item.url.includes('/blog/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        if (item.url === 'https://www.britzmedi.co.kr/') {
          item.priority = 1.0;
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: cloudflare(),
  output: 'static'
});

import type { NewsItem } from './news.types';

const newsItems: NewsItem[] = [
  // 게시 보류: 기존 뉴스 5건은 사실 확인(발생 일자·내용 검증) 후 재게시 예정
];

export function getAllNews(): NewsItem[] {
  return newsItems.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}

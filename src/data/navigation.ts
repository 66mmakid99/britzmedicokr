export const mainNav = [
  { label: '홈', href: '/' },
  {
    label: '회사소개',
    children: [
      { label: '기업소개', href: '/about' },
      { label: 'CEO 인사말', href: '/ceo' },
      { label: '브리츠 WAY', href: '/way' },
      { label: 'R&D / 기술력', href: '/rnd' },
    ],
  },
  {
    label: '제품',
    children: [
      { label: '의료기기', separator: true },
      { label: 'TORR RF', href: '/products/torr-rf' },
      { label: 'ULBLANC', href: '/products/ulblanc' },
      { label: 'LUMINO WAVE', href: '/products/lumino-wave' },
      { label: '미용기기', separator: true },
      { label: 'NEWCHAE', href: '/products/newchae' },
    ],
  },
  { label: '인증/특허', href: '/certifications' },
  { label: '블로그', href: '/blog' },
  { label: '문의', href: '/contact' },
] as const;

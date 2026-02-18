export interface PageSEO {
  title: string;
  description: string;
  ogImage?: string;
  hreflangs?: { ko: string; en: string };
}

export const pageSEO: Record<string, PageSEO> = {
  '/': {
    title: '브리츠메디 — 한국의 RF 피부 미용 의료기기 전문 제조사',
    description:
      '브리츠메디(BRITZMEDI)는 토로이달 코일 기반 Multi-wave RF 기술로 피부 미용 의료기기를 개발·제조하는 한국 기업입니다. FDA, CE, ISO 인증.',
    ogImage: '/images/og/home.jpg',
    hreflangs: { ko: '/', en: '/' },
  },
  '/about': {
    title: '브리츠메디 기업소개 — 혁신적인 RF 의료기기를 만드는 사람들',
    description:
      '브리츠메디는 2019년 설립된 한국의 의료기기 전문 기업으로, 독자적인 토로이달 코일 RF 기술을 바탕으로 피부 미용 의료기기를 개발합니다.',
    ogImage: '/images/og/about.jpg',
    hreflangs: { ko: '/about', en: '/about' },
  },
  '/ceo': {
    title: 'CEO 인사말 — 더 나은 미용 의료기기를 향한 여정 | 브리츠메디',
    description:
      '브리츠메디 CEO가 전하는 인사말. 토로이달 RF 기술 혁신을 통해 글로벌 피부 미용 의료기기 시장을 선도합니다.',
    ogImage: '/images/og/ceo.jpg',
    hreflangs: { ko: '/ceo', en: '/ceo' },
  },
  '/way': {
    title: '브리츠 WAY — 우리가 일하는 방식 | 브리츠메디',
    description:
      '브리츠메디의 핵심 가치와 기술 철학, 품질 철학을 소개합니다. 혁신과 신뢰를 바탕으로 최고의 의료기기를 만듭니다.',
    ogImage: '/images/og/way.jpg',
    hreflangs: { ko: '/way', en: '/about' },
  },
  '/rnd': {
    title: '브리츠메디 R&D — 토로이달 RF 기술의 혁신',
    description:
      '브리츠메디 R&D센터는 토로이달 코일 기반의 Multi-wave RF 기술을 연구·개발하며, 기존 모노폴라/바이폴라 방식 대비 균일한 에너지 전달을 구현합니다.',
    ogImage: '/images/og/rnd.jpg',
    hreflangs: { ko: '/rnd', en: '/technology' },
  },
  '/contact': {
    title: '연락처 / 오시는 길 | 브리츠메디',
    description:
      '브리츠메디에 문의하세요. 주소, 이메일 안내. 제품 상담 및 파트너십 문의를 환영합니다.',
    ogImage: '/images/og/contact.jpg',
    hreflangs: { ko: '/contact', en: '/contact' },
  },
  '/products': {
    title: '브리츠메디 제품 라인업 — RF 피부 미용 의료기기',
    description:
      '브리츠메디의 4가지 RF 기반 피부 미용 의료기기를 소개합니다. TORR RF, ULBLANC, NEWCHAE, LUMINO WAVE.',
    ogImage: '/images/og/products.jpg',
    hreflangs: { ko: '/products', en: '/products' },
  },
  '/products/torr-rf': {
    title: '토르 RF (TORR RF) — Multi-wave RF 피부 미용 의료기기 | 브리츠메디',
    description:
      '토르 RF는 브리츠메디가 개발한 토로이달 코일 기반 Multi-wave RF 피부 미용 의료기기로, 균일한 에너지 전달로 얼굴 리프팅과 피부 탄력 개선에 사용됩니다.',
    ogImage: '/images/og/torr-rf.jpg',
    hreflangs: { ko: '/products/torr-rf', en: '/products/torr-rf' },
  },
  '/products/ulblanc': {
    title: '울블랑 (ULBLANC) — 프리미엄 RF 스킨케어 디바이스 | 브리츠메디',
    description:
      '울블랑은 브리츠메디의 프리미엄 RF 스킨케어 디바이스로, 의원급 클리닉에 최적화된 컴팩트한 설계와 정밀한 RF 에너지 제어를 제공합니다.',
    ogImage: '/images/og/ulblanc.jpg',
    hreflangs: { ko: '/products/ulblanc', en: '/products/ulblanc' },
  },
  '/products/newchae': {
    title: '뉴채 (NEWCHAE) — 차세대 RF 피부 관리 솔루션 | 브리츠메디',
    description:
      '뉴채는 브리츠메디의 차세대 RF 피부 관리 솔루션으로, 휴대성과 성능을 모두 갖춘 컴팩트 RF 디바이스입니다.',
    ogImage: '/images/og/newchae.jpg',
    hreflangs: { ko: '/products/newchae', en: '/products/newchae' },
  },
  '/products/lumino-wave': {
    title: '루미노 웨이브 (LUMINO WAVE) — LED + RF 복합 디바이스 | 브리츠메디',
    description:
      '루미노 웨이브는 LED 광치료와 RF 에너지를 결합한 브리츠메디의 복합 피부 미용 디바이스로, 피부 재생과 탄력 개선을 동시에 구현합니다.',
    ogImage: '/images/og/lumino-wave.jpg',
    hreflangs: { ko: '/products/lumino-wave', en: '/products/lumino-wave' },
  },
  '/certifications': {
    title: '브리츠메디 인증 및 특허 — 글로벌 품질 인증 현황',
    description:
      '브리츠메디는 FDA 510(k), CE Mark, ISO 13485 등 글로벌 의료기기 인증을 획득하였으며, 다수의 RF 기술 관련 특허를 보유하고 있습니다.',
    ogImage: '/images/og/certifications.jpg',
    hreflangs: { ko: '/certifications', en: '/certifications' },
  },
};

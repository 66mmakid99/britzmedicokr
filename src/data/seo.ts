export interface PageSEO {
  title: string;
  description: string;
  ogImage?: string;
  hreflangs?: { ko: string; en: string };
}

export const pageSEO: Record<string, PageSEO> = {
  '/': {
    title: '브리츠메디 — 다중 에너지 설계 피부 미용 의료기기 전문 기업',
    description:
      '브리츠메디(BRITZMEDI)는 다중 에너지 설계(Multi-Energy Design) 기술로 피부 치료 및 미용 의료기기를 개발하는 한국 기업입니다. FDA, CE, ISO 인증.',
    ogImage: '/images/og/home.jpg',
    hreflangs: { ko: '/', en: '/' },
  },
  '/about': {
    title: '브리츠메디 기업소개 — 다중 에너지 설계 의료기기 전문 기업',
    description:
      '브리츠메디는 2019년 설립된 한국의 의료기기 전문 기업으로, 다중 에너지 설계(Multi-Energy Design) 기술로 피부 치료 및 미용 의료기기를 개발합니다.',
    ogImage: '/images/og/about.jpg',
    hreflangs: { ko: '/about', en: '/about' },
  },
  '/ceo': {
    title: 'CEO 인사말 — 더 나은 미용 의료기기를 향한 여정 | 브리츠메디',
    description:
      '브리츠메디 CEO 이신재가 전하는 인사말. 다중 에너지 설계 기술 혁신을 통해 글로벌 피부 미용 의료기기 시장을 선도합니다.',
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
    title: '브리츠메디 R&D — 다중 에너지 설계 기술의 혁신',
    description:
      '브리츠메디는 에너지를 조합하는 구조를 재설계하는 의료기기 회사입니다. 초음파·레이저·고주파 복합 다중 에너지 기술로 저출력 고효율 시술을 구현합니다.',
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
    title: '토르 RF (TORR RF) — 비침습 멀티웨이브 RF 의료기기 | 브리츠메디',
    description:
      '토르 RF는 비침습 고주파 에너지를 이용하여 스킨타이트닝과 바디컨투어링에 적용하는 브리츠메디의 대표 의료기기입니다. FDA, CE, ISO, MFDS 인증.',
    ogImage: '/images/og/torr-rf.jpg',
    hreflangs: { ko: '/products/torr-rf', en: '/products/torr-rf' },
  },
  '/products/ulblanc': {
    title: '울블랑 (ULBLANC) — 저주파·고주파·초음파 다적응증 의료기기 | 브리츠메디',
    description:
      '울블랑은 저주파, 고주파, 초음파 각각의 파장으로 다양한 적응증 시술이 가능한 브리츠메디의 다기능 의료기기입니다.',
    ogImage: '/images/og/ulblanc.jpg',
    hreflangs: { ko: '/products/ulblanc', en: '/products/ulblanc' },
  },
  '/products/newchae': {
    title: '뉴채 샷 (NEWCHAE Shot) — 고주파 타이트닝 3모드 시스템 | 브리츠메디',
    description:
      '뉴채 샷은 고주파 타이트닝, 전기 근육 자극 V라인, 전기 연동 펌프 스킨 부스트의 3가지 모드를 갖춘 고주파 타이트닝 시스템입니다.',
    ogImage: '/images/og/newchae.jpg',
    hreflangs: { ko: '/products/newchae', en: '/products/newchae' },
  },
  '/products/lumino-wave': {
    title: '루미노 웨이브 (LUMINO WAVE) — 초음파+레이저+고주파 복합 다중 에너지 디바이스 | 브리츠메디',
    description:
      '루미노 웨이브는 초음파, 레이저, 고주파를 결합한 복합 다중 에너지 의료기기로, 같은 효과를 더 낮은 출력으로 구현하여 시술 안전성과 재현성을 확보합니다.',
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

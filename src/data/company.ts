export const company = {
  name: 'BRITZMEDI',
  nameKo: '브리츠메디',
  description: '피부 치료 및 미용을 위한 다중 에너지 설계 의료기기 전문 기업',
  foundingDate: '2019',
  url: 'https://www.britzmedi.co.kr',
  urlEn: 'https://www.britzmedi.com',
  logo: '/images/logo/logo.svg',
  address: {
    locality: '성남',
    region: '경기도 성남시',
    street: '상대원동 둔촌대로388 크란츠테크노 1211호',
    country: 'KR',
  },
  contact: {
    phone: '',
    email: 'info@britzmedi.co.kr',
  },
  social: {
    global: 'https://www.britzmedi.com',
  },
  certifications: ['FDA 510(k)', 'CE Mark', 'ISO 13485'],
} as const;

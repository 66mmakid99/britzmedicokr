export interface ProductSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface ProductData {
  slug: string;
  name: string;
  nameKo: string;
  category: 'medical' | 'beauty';
  tagline: string;
  firstSentence: string;
  tldr: string;
  heroImage: string;
  gallery: string[];
  videos: string[];
  techTitle: string;
  techDescription: string[];
  specs: ProductSpec[];
  certifications: { name: string; number: string; date: string }[];
  applications: { title: string; desc: string; image?: string }[];
  faqs: { question: string; answer: string }[];
  relatedProducts: { title: string; href: string; description: string }[];
  relatedContent: { title: string; href: string; description: string }[];
}

export const products: ProductData[] = [
  {
    slug: 'torr-rf',
    name: 'TORR RF',
    nameKo: '토르 RF',
    category: 'medical',
    tagline: '깊게, 그리고 부드럽게',
    firstSentence: '토르RF는 미국 FDA 510(k) 인증을 받은 고주파 의료기기입니다.',
    tldr: 'TORR RF는 미국 FDA 510(k) 인증(K212561)과 한국 식약처(MFDS) 허가(제22-156호)를 받은 고주파 의료기기입니다. 설정된 출력 조건에 따라 체표면을 균일하게 가열하도록 설계되었으며, 전극 표면 온도를 실시간으로 감지하여 기준 온도에 도달하면 자동으로 출력이 차단됩니다. 미세형·소형·대형 핸드피스로 시술 목적에 맞게 선택하여 사용합니다.',
    heroImage: '/images/products/torr-rf/TORR RF2.webp',
    gallery: [
      '/images/products/torr-rf/TORR RF.webp',
      '/images/products/torr-rf/TORR RF2.webp',
      '/images/products/torr-rf/TORR RF HAND PIECES.webp',
      '/images/products/torr-rf/torrrf_modelcut02.webp',
    ],
    videos: [
      '/images/products/torr-rf/torr_rf_fullbody.mp4',
      '/images/products/torr-rf/torr_rf_handpiece_3d_animation.mp4',
    ],
    techTitle: 'TORR RF의 설계 철학',
    techDescription: [
      'DEPTH — 세심하게 조율되는 열전달 경험: 토르RF에서 발생한 고주파 에너지는 설정된 출력 조건에 따라 체표면을 균일하게 가열하도록 설계되었습니다. 전극 표면 온도는 실시간으로 감지되어 기준 온도에 도달하면 자동으로 출력이 차단됩니다.',
      'FIT THE MOMENT — 상황에 맞춘 섬세한 설정: 토르RF는 출력 강도(Level)와 시술 시간을 세밀하게 조절할 수 있도록 설계되어 있어 다양한 시술 환경에서 안정적인 조건을 유지하는 데 도움이 됩니다.',
      'FIT WITH TRUST — 기술이 만든 안정적인 설계: 토르RF는 표면 온도 모니터링, 출력 차단 알고리즘, 핸드피스 구조 설계를 기반으로 일정한 시술 조건을 유지하도록 제작되었습니다. 이는 시술자가 보다 균일한 조건을 확보하는 데 도움을 줍니다.',
      'FIT TO SHAPE — 토르RF가 전하는 구조의 정교함: 토르RF의 핸드피스 구조는 전극 배치와 크기 차이에 기반하여 설계되어 다양한 시술 환경에서 안정적으로 운용되도록 제작되었습니다. 시술 목적에 따라 전극 크기가 다른 핸드피스를 선택적으로 사용할 수 있습니다.',
    ],
    specs: [
      { label: '제품명', value: 'TORR RF' },
      { label: '분류', value: '의료기기' },
      { label: '핸드피스', value: '미세형, 소형, 대형' },
      { label: '인증', value: 'FDA 510(k) K212561, MFDS 제22-156호, ISO 13485' },
    ],
    certifications: [
      { name: 'MFDS (식약처)', number: '제22-156호', date: '2022년' },
      { name: 'FDA 510(k)', number: 'K212561', date: '2022년' },
      { name: 'ISO 13485:2016', number: 'MK000197', date: '2022년 11월' },
    ],
    applications: [
      { title: '미세형 핸드피스', desc: '피부결이 맞고 굴곡이 있는 부위에 안정하고 정교한 시술이 가능합니다.', image: '/images/products/torr-rf/Eye Handpiece.webp' },
      { title: '소형 핸드피스', desc: '임피던스 모드로 넓은 부위에 고르게 안정적인 설계에서 고주파 에너지를 전달합니다.', image: '/images/products/torr-rf/Face Handpiece (Deep mode).webp' },
      { title: '대형 핸드피스', desc: '피부와 지방층이 두터운 부위는 깊고 강한 고주파 에너지를 필요로 합니다. 대형 핸드피스는 진동(Vibro)과 오실레이트 기능으로 시술 시 편의를 제공합니다.', image: '/images/products/torr-rf/Face Handpiece (Super mode).webp' },
    ],
    faqs: [
      { question: '안전한가요?', answer: '토르RF에서 발생한 고주파 에너지는 설정된 출력 조건에 따라 체표면을 균일하게 가열하도록 설계되었습니다. 전극 표면 온도는 실시간으로 감지되어 기준 온도에 도달하면 자동으로 출력이 차단됩니다.' },
      { question: '아프진 않을까요?', answer: '토르RF는 실시간 온도 모니터링 기반으로 전극 표면 온도가 기준치를 초과할 경우 출력을 자동으로 차단하도록 설계되어 있습니다. 이 기능은 시술 중 온도 편차를 줄여 안정적인 시술 운영을 돕습니다.' },
      { question: '시술하는 데 얼마나 걸릴까요?', answer: '토르RF는 별도의 마취 과정이 필요하지 않아 바로 시술이 가능하며, 설정된 온도에 따라 소요 시간은 의료진 판단에 따라 달라질 수 있지만 대체로 10~15분 이내에 진행됩니다.' },
      { question: '시술 후 일상생활이 가능할까요?', answer: '토르RF는 체표면을 가열하는 방식의 고주파 의료기기로, 일반적으로 시술 후 바로 일상생활을 이어갈 수 있으나 시술 후 반응은 개인별 피부 상태에 따라 달라질 수 있으므로 의료진의 개인별 피부 상태에 맞춘 안내를 받으시기 바랍니다.' },
      { question: '어떤 핸드피스를 사용하나요?', answer: '토르RF는 미세형·소형·대형 핸드피스로 구성되어 있으며, 전극 크기와 전용 면적이 달라 의료진은 시술 목적에 맞게 적절한 핸드피스를 선택하여 사용합니다.' },
    ],
    relatedProducts: [
      { title: 'ULBLANC', href: '/products/ulblanc', description: '다적응증 의료기기' },
      { title: 'NEWCHAE Shot', href: '/products/newchae', description: '3가지 관리 모드 뷰티 디바이스 (공산품)' },
      { title: 'LUMINO WAVE', href: '/products/lumino-wave', description: '초음파+레이저+고주파 복합 디바이스' },
    ],
    relatedContent: [
      { title: 'R&D / 기술력', href: '/rnd', description: '다중 에너지 설계 기술 상세' },
      { title: '인증 및 특허', href: '/certifications', description: 'FDA·MFDS·ISO 인증 현황' },
      { title: '기업소개', href: '/about', description: '브리츠메디 회사 소개' },
    ],
  },
  {
    slug: 'ulblanc',
    name: 'ULBLANC',
    nameKo: '울블랑',
    category: 'medical',
    tagline: '저주파·고주파·초음파 다적응증 의료기기',
    firstSentence: '울블랑(ULBLANC)은 저주파, 고주파, 초음파 각각의 파장으로 다양한 적응증 시술이 가능한 브리츠메디의 다기능 의료기기입니다.',
    tldr: 'ULBLANC은 저주파, 고주파, 초음파를 활용하는 다기능 의료기기입니다. 한국인 얼굴형을 고려한 인체공학적 설계와 1/3, 3/10MHz 두 개의 모드로 피부 표피·진피를 나누어 관리하도록 설계되었습니다. 경피적 약물 전달(TDD) 운용 모드를 지원하며, 한국 식약처(MFDS) 인증(제21-4685호)과 ISO 13485 인증을 받았습니다. 시술은 허가된 사용목적 범위 내에서 의료진의 판단에 따라 이루어집니다.',
    heroImage: '/images/products/ulblanc/ulblanc-fullbody.webp',
    gallery: [
      '/images/products/ulblanc/ulblanc body and handpieces.webp',
    ],
    videos: [],
    techTitle: '핵심 기술: 다중 파장 에너지 시스템',
    techDescription: [
      '저주파, 고주파, 초음파 각각의 에너지를 하나의 플랫폼에서 운용하도록 설계된 다기능 디바이스입니다.',
      '한국인 얼굴형을 고려한 인체공학적 설계로, 1/3MHz와 3/10MHz 두 개의 모드로 피부 표피·진피 층위를 나누어 관리하도록 설계되었습니다.',
      '경피적 약물 전달(Transdermal Drug Delivery)을 보조하도록 설계된 운용 모드를 지원합니다.',
    ],
    specs: [
      { label: 'RF 방식', value: '다중 파장 에너지 (저주파·고주파·초음파)' },
      { label: '주파수', value: '1/3MHz, 3/10MHz (Dual Mode)' },
      { label: '최대 출력', value: '100', unit: 'W' },
      { label: '핸드피스', value: 'Face Tip, Eye Tip' },
      { label: '디스플레이', value: '7인치 터치스크린' },
      { label: '크기', value: '300 × 350 × 450', unit: 'mm' },
      { label: '무게', value: '약 12', unit: 'kg' },
      { label: '전원', value: 'AC 100-240V, 50/60Hz' },
      { label: '분류', value: '의료기기 (Class II)' },
    ],
    certifications: [
      { name: 'MFDS (식약처)', number: '제21-4685호', date: '2021년' },
      { name: 'ISO 13485:2016', number: 'MK000197', date: '2022년 11월' },
    ],
    applications: [
      { title: '표피·진피 이원 관리', desc: '1/3MHz·3/10MHz 듀얼 모드로 피부 층위를 나누어 관리하도록 설계되었습니다.' },
      { title: '복합 에너지 운용', desc: '저주파·고주파·초음파를 시술 목적에 따라 선택하여 운용하도록 설계되었습니다.' },
      { title: '경피적 약물 전달 보조', desc: '초음파 에너지 기반으로 유효 성분의 경피 전달을 보조하도록 설계된 모드를 지원합니다.' },
      { title: '인체공학 핸드피스', desc: '한국인 얼굴형을 고려한 핸드피스 설계로 시술 운용 편의를 높였습니다.' },
    ],
    faqs: [
      { question: 'ULBLANC은 TORR RF와 뭐가 다른가요?', answer: 'TORR RF는 고주파(RF) 단일 에너지원에 집중한 의료기기이고, ULBLANC은 저주파·고주파·초음파를 하나의 플랫폼에서 운용하도록 설계된 다기능 의료기기입니다. 시술 목적에 따라 에너지와 모드를 선택하여 사용합니다.' },
      { question: '어떤 클리닉에 적합한가요?', answer: '피부과, 성형외과, 에스테틱 클리닉 등 의원급 기관에서 운용하기 적합한 크기와 구성으로 설계되었습니다.' },
      { question: '어떤 인증을 받았나요?', answer: 'ULBLANC은 한국 식약처(MFDS) 인증(제21-4685호)과 ISO 13485 품질경영시스템 인증을 받았습니다. 시술은 허가된 사용목적 범위 내에서 의료진의 판단에 따라 이루어집니다.' },
      { question: '유지보수는 어떻게 하나요?', answer: '브리츠메디는 정기 점검, 핸드피스 교체, 소프트웨어 업데이트 등의 유지보수를 지원합니다.' },
    ],
    relatedProducts: [
      { title: 'TORR RF', href: '/products/torr-rf', description: '멀티웨이브 RF 의료기기' },
      { title: 'NEWCHAE Shot', href: '/products/newchae', description: '3가지 관리 모드 뷰티 디바이스 (공산품)' },
      { title: 'LUMINO WAVE', href: '/products/lumino-wave', description: '초음파+레이저+고주파 복합 디바이스' },
    ],
    relatedContent: [
      { title: 'R&D / 기술력', href: '/rnd', description: '다중 에너지 설계 기술 상세' },
      { title: '인증 및 특허', href: '/certifications', description: '인증 현황' },
      { title: '기업소개', href: '/about', description: '브리츠메디 회사 소개' },
    ],
  },
  {
    slug: 'newchae',
    name: 'NEWCHAE Shot',
    nameKo: '뉴채 샷',
    category: 'beauty',
    tagline: '3가지 관리 모드 뷰티 디바이스',
    firstSentence: '뉴채 샷(NEWCHAE Shot)은 고주파 관리, 미세전류 관리, 전동 펌프 스킨 부스트의 3가지 모드를 갖춘 브리츠메디의 뷰티 디바이스(공산품)입니다.',
    tldr: 'NEWCHAE Shot은 고주파 관리, 미세전류 관리, 전동 펌프 스킨 부스트의 3가지 모드를 제공하는 가정·에스테틱용 뷰티 디바이스입니다. 자동 샷 방식의 멀티채널 에너지 전달 방식과 3D 입체진동(분당 1만회 미세진동) 기능을 갖추고 있습니다. 의료기기가 아닌 공산품(미용기기)으로, 피부 미용 관리 목적으로 사용합니다.',
    heroImage: '/images/products/newchae/newchae 01 (1).webp',
    gallery: [
      '/images/products/newchae/newchae 01 (4).webp',
      '/images/products/newchae/newchae pack(1).webp',
      '/images/products/newchae/newchae pack (2).webp',
      '/images/products/newchae/newchae cream 01.webp',
    ],
    videos: [],
    techTitle: '핵심 기능: 멀티채널 & 3모드 시스템',
    techDescription: [
      '자동 샷 방식의 멀티채널 에너지 전달 구조를 적용하여, 관리 부위에 에너지를 순차적으로 전달하도록 설계되었습니다.',
      '3D 입체진동(분당 1만회 미세진동) 기능으로 피부 관리 시 사용감을 높였습니다.',
      '고주파 관리, 미세전류 관리, 전동 펌프 스킨 부스트 — 3가지 모드로 다양한 홈케어·에스테틱 관리에 활용할 수 있습니다.',
    ],
    specs: [
      { label: 'RF 방식', value: 'Compact RF' },
      { label: '주파수', value: '1MHz' },
      { label: '최대 출력', value: '50', unit: 'W' },
      { label: '핸드피스', value: 'Multi-purpose Tip' },
      { label: '디스플레이', value: '5인치 터치스크린' },
      { label: '크기', value: '250 × 280 × 350', unit: 'mm' },
      { label: '무게', value: '약 6', unit: 'kg' },
      { label: '전원', value: 'AC 100-240V, 50/60Hz' },
      { label: '분류', value: '가정용 미용기기 (공산품)' },
    ],
    certifications: [
      { name: 'KC 인증', number: '전기용품 안전인증', date: '' },
      { name: 'CE (전기·전자)', number: '공산품 기준', date: '' },
      { name: 'VCCI', number: '전자파 적합성 (일본)', date: '' },
    ],
    applications: [
      { title: '고주파 관리 모드', desc: '자동 샷 방식의 멀티채널 에너지 전달로 피부 결·탄력 관리를 돕도록 설계되었습니다.' },
      { title: '미세전류 관리 모드', desc: '미세전류를 활용한 페이스 라인 관리 모드입니다.' },
      { title: '스킨 부스트 모드', desc: '전동 펌프 연동 방식으로 화장품 유효 성분의 흡수 관리를 돕도록 설계되었습니다.' },
      { title: '3D 입체진동', desc: '분당 1만회 미세진동으로 관리 시 사용감을 높였습니다.' },
    ],
    faqs: [
      { question: 'NEWCHAE Shot은 어떤 제품인가요?', answer: 'NEWCHAE Shot은 고주파 관리, 미세전류 관리, 전동 펌프 스킨 부스트의 3가지 모드를 갖춘 뷰티 디바이스입니다. 의료기기가 아닌 공산품(가정용 미용기기)으로, 피부 미용 관리 목적으로 사용합니다.' },
      { question: '3가지 모드는 각각 무엇인가요?', answer: '고주파 관리 모드는 멀티채널 에너지 전달로 피부 결·탄력 관리를 돕고, 미세전류 관리 모드는 페이스 라인 관리에, 전동 펌프 스킨 부스트 모드는 화장품 유효 성분의 흡수 관리에 활용합니다.' },
      { question: '의료기기인가요?', answer: '아니요. NEWCHAE Shot은 의료기기가 아닌 공산품(가정용 미용기기)입니다. 질병의 진단·치료 목적이 아닌 피부 미용 관리 목적으로 사용하는 제품입니다.' },
      { question: '사용 교육은 제공되나요?', answer: '네, 브리츠메디는 제품 구매 시 사용 교육 자료를 제공합니다.' },
      { question: '인증 현황은 어떻게 되나요?', answer: 'NEWCHAE Shot은 KC(전기용품 안전인증), CE(전기·전자 공산품 기준), VCCI(일본 전자파 적합성) 인증을 받은 공산품입니다.' },
    ],
    relatedProducts: [
      { title: 'TORR RF', href: '/products/torr-rf', description: '멀티웨이브 RF 의료기기' },
      { title: 'ULBLANC', href: '/products/ulblanc', description: '다적응증 의료기기' },
      { title: 'LUMINO WAVE', href: '/products/lumino-wave', description: '초음파+레이저+고주파 복합 디바이스' },
    ],
    relatedContent: [
      { title: 'R&D / 기술력', href: '/rnd', description: '다중 에너지 설계 기술 상세' },
      { title: '인증 및 특허', href: '/certifications', description: '인증 현황' },
      { title: '문의하기', href: '/contact', description: '제품 상담 문의' },
    ],
  },
  {
    slug: 'lumino-wave',
    name: 'LUMINO WAVE',
    nameKo: '루미노 웨이브',
    category: 'medical',
    tagline: '초음파 + 레이저 + 고주파 복합 다중 에너지 플랫폼 (인허가 진행 중)',
    firstSentence: '루미노 웨이브(LUMINO WAVE)는 초음파, 레이저, 고주파를 결합하는 브리츠메디의 차세대 복합 다중 에너지 플랫폼으로, 현재 식약처(MFDS) 인허가 절차를 진행 중인 개발 단계 제품입니다.',
    tldr: 'LUMINO WAVE는 초음파 + 레이저 + 고주파를 하나의 구조 안에서 결합하는 차세대 복합 다중 에너지 플랫폼입니다. 초음파로 피부 환경을 먼저 조성한 뒤 후속 에너지를 전달하는 조합 구조를 통해, 낮은 출력으로 균일한 에너지 전달을 구현하는 것을 목표로 개발하고 있습니다. 현재 식약처(MFDS) 인허가 절차를 진행 중인 개발 단계 제품으로, 효능·효과에 관한 사항은 허가 완료 후 허가 범위 내에서 안내됩니다.',
    heroImage: '/images/products/lumino-wave/luminowave-product-01.webp',
    gallery: [],
    videos: [],
    techTitle: '핵심 기술: 복합 다중 에너지 설계',
    techDescription: [
      '초음파로 피부 환경을 먼저 조성한 뒤 레이저·고주파를 전달하는 에너지 조합 순서 제어 구조를 연구·적용하고 있습니다.',
      '낮은 출력으로 균일한 에너지 전달을 구현하고, 시술자 숙련도에 따른 편차를 줄이는 것을 개발 목표로 합니다.',
      '초음파+고주파 핸드피스와 초음파+레이저 핸드피스 — 2종 핸드피스 구성으로 설계되었습니다.',
    ],
    specs: [
      { label: '기술', value: '초음파 + 레이저 + 고주파 복합 다중 에너지' },
      { label: '에너지 소스', value: 'Ultrasound / Laser / RF' },
      { label: '핸드피스', value: '초음파+고주파 핸드피스, 초음파+레이저 핸드피스' },
      { label: '디스플레이', value: '터치스크린' },
      { label: '전원', value: 'AC 100-240V, 50/60Hz' },
      { label: '분류', value: '의료기기 (MFDS 인허가 진행 중)' },
    ],
    certifications: [
      { name: 'MFDS (식약처)', number: '인허가 절차 진행 중', date: '' },
      { name: 'ISO 13485:2016', number: 'MK000197 (품질경영시스템)', date: '2022년 11월' },
    ],
    applications: [
      { title: '에너지 조합 순서 제어', desc: '초음파로 피부 환경을 먼저 조성한 뒤 후속 에너지를 전달하는 구조를 연구·적용하고 있습니다.' },
      { title: '저출력 균일 전달 설계', desc: '낮은 출력으로 균일한 에너지 전달을 구현하는 것을 개발 목표로 합니다.' },
      { title: '2종 핸드피스 구성', desc: '초음파+고주파, 초음파+레이저 핸드피스 구성으로 설계되었습니다.' },
      { title: '재현성 중심 설계', desc: '시술자 숙련도에 따른 편차를 줄이는 것을 설계 방향으로 삼고 있습니다.' },
    ],
    faqs: [
      { question: 'LUMINO WAVE는 어떤 장비인가요?', answer: 'LUMINO WAVE는 초음파, 레이저, 고주파를 하나의 구조 안에서 결합하는 차세대 복합 다중 에너지 플랫폼입니다. 현재 식약처(MFDS) 인허가 절차를 진행 중인 개발 단계 제품입니다.' },
      { question: '기존 복합 장비와 뭐가 다른가요?', answer: '단순히 여러 에너지를 탑재하는 것이 아니라, 초음파로 피부 환경을 먼저 조성한 뒤 후속 에너지를 전달하는 조합 순서 제어 구조를 지향합니다. 시술자 숙련도에 따른 편차를 줄이는 것이 설계 방향입니다.' },
      { question: '언제 출시되나요?', answer: '현재 식약처(MFDS) 인허가 절차를 진행 중이며, 허가 완료 후 공식 채널을 통해 출시 일정을 안내드릴 예정입니다.' },
      { question: '어떤 핸드피스로 구성되나요?', answer: '초음파+고주파 핸드피스와 초음파+레이저 핸드피스의 2종 구성으로 설계되었습니다.' },
      { question: '효능·효과는 어떻게 되나요?', answer: 'LUMINO WAVE는 허가 전 의료기기이므로 효능·효과에 관한 사항은 안내드릴 수 없습니다. 허가 완료 후 허가된 사용목적 범위 내에서 안내드리겠습니다.' },
    ],
    relatedProducts: [
      { title: 'TORR RF', href: '/products/torr-rf', description: '멀티웨이브 RF 의료기기' },
      { title: 'ULBLANC', href: '/products/ulblanc', description: '다적응증 의료기기' },
      { title: 'NEWCHAE Shot', href: '/products/newchae', description: '3가지 관리 모드 뷰티 디바이스 (공산품)' },
    ],
    relatedContent: [
      { title: 'R&D / 기술력', href: '/rnd', description: '다중 에너지 설계 기술 소개' },
      { title: '인증 및 특허', href: '/certifications', description: '인증 현황' },
      { title: '문의하기', href: '/contact', description: '제품 상담 문의' },
    ],
  },
];

export function getProduct(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: 'medical' | 'beauty'): ProductData[] {
  return products.filter((p) => p.category === category);
}

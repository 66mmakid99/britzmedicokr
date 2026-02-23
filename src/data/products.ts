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
    firstSentence: '토르RF는 미국 FDA 승인받은 안전하고 효율적인 고주파 의료기기입니다.',
    tldr: 'TORR RF는 미국 FDA 승인받은 안전하고 효율적인 고주파 의료기기입니다. 설정된 출력 조건에 따라 체표면을 균일하게 가열하도록 설계되었으며, 전극 표면 온도를 실시간으로 감지하여 기준 온도에 도달하면 자동으로 출력이 차단됩니다. 미세형·소형·대형 핸드피스로 시술 목적에 맞게 선택하여 사용합니다.',
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
      { label: '인증', value: 'FDA 510(k)' },
    ],
    certifications: [
      { name: 'FDA 510(k)', number: '', date: '' },
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
      { title: 'NEWCHAE Shot', href: '/products/newchae', description: '고주파 타이트닝 3모드 시스템' },
      { title: 'LUMINO WAVE', href: '/products/lumino-wave', description: '초음파+레이저+고주파 복합 디바이스' },
    ],
    relatedContent: [
      { title: 'R&D / 기술력', href: '/rnd', description: '다중 에너지 설계 기술 상세' },
      { title: '인증 및 특허', href: '/certifications', description: 'FDA, CE, ISO 인증 현황' },
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
    tldr: 'ULBLANC은 저주파, 고주파, 초음파를 활용하여 다양한 적응증 시술이 가능한 의료기기입니다. 한국인 얼굴형을 고려한 인체공학적 설계와 1/3, 3/10MHz 두 개의 모드로 피부 표피·진피 Dual Care가 가능합니다. 피부 진정·재생, 경피적 약물 전달까지 폭넓은 적용이 가능하며, CE Mark과 ISO 13485, MFDS 인증을 획득했습니다.',
    heroImage: '/images/products/ulblanc/ulblanc.webp',
    gallery: [
      '/images/products/ulblanc/ulblanc body and handpieces.webp',
    ],
    videos: [],
    techTitle: '핵심 기술: 다중 파장 에너지 시스템',
    techDescription: [
      '저주파, 고주파, 초음파 각각의 파장으로 다양한 적응증 시술이 가능한 다기능 디바이스입니다.',
      '한국인 얼굴형을 고려한 인체공학적 설계로, 1/3MHz와 3/10MHz 두 개의 모드로 피부 표피·진피 Dual Care를 구현합니다.',
      '피부 진정·재생은 물론, 경피적 약물 전달(Transdermal Drug Delivery)까지 폭넓은 적용이 가능합니다.',
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
      { name: 'CE Mark', number: 'CE-XXXX', date: '2022년' },
      { name: 'ISO 13485', number: 'ISO-XXXXX', date: '2022년' },
      { name: 'MFDS (식약처)', number: '제허 XX-XXXX호', date: '2022년' },
    ],
    applications: [
      { title: '얼굴 리프팅', desc: '다중 파장 에너지로 얼굴 전체의 리프팅과 탄력 개선을 구현합니다.' },
      { title: '피부 탄력', desc: '고주파·초음파 에너지로 콜라겐 자극을 통해 피부 탄력과 질감을 개선합니다.' },
      { title: '피부 진정·재생', desc: '저주파 에너지를 활용하여 시술 후 피부 진정과 재생을 촉진합니다.' },
      { title: '경피적 약물 전달', desc: '초음파 에너지를 이용한 경피적 약물 전달(Transdermal Drug Delivery)로 유효 성분의 피부 흡수를 극대화합니다.' },
    ],
    faqs: [
      { question: 'ULBLANC은 TORR RF와 뭐가 다른가요?', answer: 'ULBLANC은 저주파, 고주파, 초음파를 모두 활용하는 다적응증 디바이스입니다. TORR RF가 고주파 스킨타이트닝·바디컨투어링에 특화된 반면, ULBLANC은 다양한 파장으로 피부 진정·재생, 경피적 약물 전달까지 폭넓은 시술이 가능합니다.' },
      { question: '어떤 클리닉에 적합한가요?', answer: '피부과, 성형외과, 에스테틱 클리닉 등 의원급 기관에 최적화되어 있습니다. 컴팩트한 디자인으로 시술실 공간을 효율적으로 사용할 수 있습니다.' },
      { question: '시술 효과는 언제 나타나나요?', answer: '시술 직후 즉각적인 타이트닝 효과를 느낄 수 있으며, 콜라겐 리모델링을 통한 본격적인 효과는 시술 후 2~4주부터 나타나 3개월까지 점진적으로 개선됩니다.' },
      { question: 'CE 인증을 받았나요?', answer: '네, ULBLANC은 CE Mark과 ISO 13485 인증을 획득하였으며, 한국 식약처 허가도 보유하고 있습니다.' },
      { question: '유지보수는 어떻게 하나요?', answer: '브리츠메디는 글로벌 AS 네트워크를 통해 정기 점검, 핸드피스 교체, 소프트웨어 업데이트 등의 유지보수를 지원합니다.' },
    ],
    relatedProducts: [
      { title: 'TORR RF', href: '/products/torr-rf', description: '멀티웨이브 RF 의료기기' },
      { title: 'NEWCHAE Shot', href: '/products/newchae', description: '고주파 타이트닝 3모드 시스템' },
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
    tagline: '고주파 타이트닝 3가지 모드 시스템',
    firstSentence: '뉴채 샷(NEWCHAE Shot)은 멀티채널 고주파 에너지 샷, 전기 근육 자극 V라인, 전기 연동 펌프 스킨 부스트의 3가지 모드를 갖춘 브리츠메디의 고주파 타이트닝 시스템입니다.',
    tldr: 'NEWCHAE Shot은 고주파 타이트닝, 전기 근육 자극 V라인, 전기 연동 펌프 스킨 부스트의 3가지 모드를 제공하는 시스템입니다. 멀티채널 기술로 각 채널 고주파 에너지가 표피~진피에 전달되며, 자동 샷 방식의 멀티채널 집중 에너지 샷 시스템과 RF STACK 출력으로 심부열 발생, 3D 입체진동 마사지(분당 1만회 미세진동)를 구현합니다.',
    heroImage: '/images/products/newchae/newchae 01 (1).webp',
    gallery: [
      '/images/products/newchae/newchae 01 (4).webp',
      '/images/products/newchae/newchae pack(1).webp',
      '/images/products/newchae/newchae pack (2).webp',
      '/images/products/newchae/newchae cream 01.webp',
    ],
    videos: [],
    techTitle: '핵심 기술: 멀티채널 고주파 & 3모드 시스템',
    techDescription: [
      '멀티채널 기술로 각 채널의 고주파 에너지가 표피~진피에 전달되며, 자동 샷 방식의 멀티채널 집중 에너지 샷 시스템을 적용했습니다.',
      'RF STACK 출력으로 심부열을 발생시켜 안전한 콜라겐 생성을 유도하고, 3D 입체진동 마사지(분당 1만회 미세진동)로 시술 효과를 극대화합니다.',
      '고주파 타이트닝, 전기 근육 자극 V라인, 전기 연동 펌프 스킨 부스트 — 3가지 모드로 다양한 시술 니즈에 대응합니다.',
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
      { label: '분류', value: '미용기기' },
    ],
    certifications: [
      { name: 'CE Mark', number: 'CE-XXXX', date: '2023년' },
      { name: 'MFDS (식약처)', number: '제허 XX-XXXX호', date: '2023년' },
    ],
    applications: [
      { title: '고주파 타이트닝', desc: '멀티채널 집중 에너지 샷과 RF STACK 출력으로 심부열을 발생시켜 안전한 콜라겐 생성과 피부 타이트닝을 구현합니다.' },
      { title: '전기 근육 자극 V라인', desc: 'EMS(전기 근육 자극) 모드로 얼굴 근육을 자극하여 V라인 리프팅 효과를 제공합니다.' },
      { title: '스킨 부스트', desc: '전기 연동 펌프 스킨 부스트 모드로 유효 성분의 피부 흡수를 촉진하여 피부 탄력과 보습을 개선합니다.' },
      { title: '3D 입체진동 마사지', desc: '분당 1만회 미세진동으로 피부 순환을 촉진하고 시술 효과를 극대화합니다.' },
    ],
    faqs: [
      { question: 'NEWCHAE Shot은 어떤 제품인가요?', answer: 'NEWCHAE Shot은 고주파 타이트닝, 전기 근육 자극 V라인, 전기 연동 펌프 스킨 부스트의 3가지 모드를 갖춘 고주파 타이트닝 시스템입니다. 멀티채널 집중 에너지 샷과 3D 입체진동 마사지 기능을 탑재하고 있습니다.' },
      { question: '3가지 모드는 각각 무엇인가요?', answer: '첫째, 고주파 타이트닝 모드는 멀티채널 RF 에너지로 피부 심부열을 발생시켜 콜라겐 생성을 유도합니다. 둘째, 전기 근육 자극 V라인 모드는 EMS로 얼굴 근육을 자극합니다. 셋째, 전기 연동 펌프 스킨 부스트 모드는 유효 성분 흡수를 촉진합니다.' },
      { question: 'RF STACK 출력이란 무엇인가요?', answer: 'RF STACK 출력은 고주파 에너지를 층층이 쌓아 심부열을 발생시키는 기술로, 안전하면서도 효과적인 콜라겐 생성을 유도합니다.' },
      { question: '시술 교육은 제공되나요?', answer: '네, 브리츠메디는 장비 구매 시 시술 교육 프로그램을 제공합니다. 온라인 교육과 현장 교육을 모두 지원합니다.' },
      { question: '인증 현황은 어떻게 되나요?', answer: 'NEWCHAE Shot은 CE Mark과 한국 식약처 허가를 획득하였습니다.' },
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
    tagline: '초음파 + 레이저 + 고주파 복합 다중 에너지 디바이스',
    firstSentence: '루미노 웨이브(LUMINO WAVE)는 초음파, 레이저, 고주파를 결합한 브리츠메디의 복합 다중 에너지 의료기기로, 초음파가 피부 환경을 열고 레이저·고주파가 침투하는 구조로 같은 효과를 더 낮은 출력으로 구현합니다.',
    tldr: 'LUMINO WAVE는 초음파 + 레이저 + 고주파를 결합한 복합 다중 에너지 디바이스입니다. 초음파가 피부 환경을 먼저 열어주고, 레이저·고주파가 효과적으로 침투하는 구조로 같은 효과를 더 낮은 출력으로 구현합니다. 시술자 숙련도 의존도를 줄이고, 시술 결과의 재현성·안정성을 확보한 것이 핵심 차별점입니다.',
    heroImage: '/images/products/lumino-wave/20260207 luminowave page12_image.webp',
    gallery: [],
    videos: [],
    techTitle: '핵심 기술: 복합 다중 에너지 설계',
    techDescription: [
      '초음파가 피부 환경을 먼저 열어(Ultrasound-induced Air Bubbles) 레이저·고주파 에너지의 침투 효율을 극대화합니다.',
      '같은 효과를 더 낮은 출력으로 구현하여, 시술 안전성을 높이고 시술자 숙련도에 대한 의존도를 줄입니다.',
      '초음파+고주파 핸드피스와 초음파+레이저 핸드피스 — 2종 핸드피스로 다양한 적응증에 대응합니다.',
    ],
    specs: [
      { label: '기술', value: '초음파 + 레이저 + 고주파 복합 다중 에너지' },
      { label: '에너지 소스', value: 'Ultrasound / Laser / RF' },
      { label: '핸드피스', value: '초음파+고주파 핸드피스, 초음파+레이저 핸드피스' },
      { label: '디스플레이', value: '터치스크린' },
      { label: '전원', value: 'AC 100-240V, 50/60Hz' },
      { label: '분류', value: '의료기기' },
    ],
    certifications: [
      { name: 'CE Mark', number: 'CE-XXXX', date: '2024년' },
      { name: 'ISO 13485', number: 'ISO-XXXXX', date: '2024년' },
      { name: 'MFDS (식약처)', number: '제허 XX-XXXX호', date: '2024년' },
    ],
    applications: [
      { title: '색소·톤 개선', desc: '레이저+초음파 복합 에너지로 색소 침착 개선과 피부 톤 균일화를 구현합니다.' },
      { title: '피부 리프팅', desc: '고주파+초음파 복합 에너지로 피부 심부 리프팅과 탄력 개선을 달성합니다.' },
      { title: '탄력·재생', desc: '다중 에너지 조합으로 콜라겐 리모델링을 촉진하여 피부 탄력과 재생을 동시에 구현합니다.' },
      { title: '민감 피부 저자극 시술', desc: '낮은 출력으로도 동등한 효과를 구현하여, 민감성 피부에도 안전한 저자극 시술이 가능합니다.' },
    ],
    faqs: [
      { question: 'LUMINO WAVE는 어떤 장비인가요?', answer: 'LUMINO WAVE는 초음파, 레이저, 고주파를 결합한 복합 다중 에너지 의료기기입니다. 초음파가 피부 환경을 먼저 열어주고, 레이저·고주파가 효과적으로 침투하는 구조로, 같은 효과를 더 낮은 출력으로 구현합니다.' },
      { question: '기존 복합 장비와 뭐가 다른가요?', answer: '단순히 여러 에너지를 탑재한 것이 아니라, 초음파가 먼저 피부 환경을 만들어 후속 에너지의 침투 효율을 높이는 구조적 설계 차이가 있습니다. 이를 통해 시술자 숙련도 의존도를 줄이고, 시술 결과의 재현성·안정성을 확보합니다.' },
      { question: '왜 낮은 출력이 장점인가요?', answer: '높은 출력은 효과가 강하지만 부작용 위험도 높아집니다. LUMINO WAVE는 초음파로 에너지 침투 경로를 먼저 확보하여, 더 낮은 출력으로도 동등한 효과를 달성합니다. 이는 시술 안전성과 환자 만족도를 동시에 높입니다.' },
      { question: '어떤 핸드피스가 제공되나요?', answer: '초음파+고주파 핸드피스와 초음파+레이저 핸드피스의 2종이 제공됩니다. 적응증에 따라 핸드피스를 선택하여 색소·톤 개선, 리프팅, 탄력·재생, 민감 피부 저자극 시술 등 다양한 시술이 가능합니다.' },
      { question: '시술 결과의 재현성이란 무엇인가요?', answer: '같은 프로토콜로 시술했을 때, 시술자가 달라도 비슷한 결과가 나오는 것을 의미합니다. LUMINO WAVE는 에너지 전달 구조 자체가 결과 안정성을 담보하여, 시술자 숙련도에 따른 편차를 최소화합니다.' },
    ],
    relatedProducts: [
      { title: 'TORR RF', href: '/products/torr-rf', description: '멀티웨이브 RF 의료기기' },
      { title: 'ULBLANC', href: '/products/ulblanc', description: '다적응증 의료기기' },
      { title: 'NEWCHAE Shot', href: '/products/newchae', description: '고주파 타이트닝 3모드 시스템' },
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

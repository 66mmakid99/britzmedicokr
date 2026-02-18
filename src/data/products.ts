export interface ProductSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface ProductData {
  slug: string;
  name: string;
  nameKo: string;
  tagline: string;
  firstSentence: string;
  tldr: string;
  techTitle: string;
  techDescription: string[];
  specs: ProductSpec[];
  certifications: { name: string; number: string; date: string }[];
  applications: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedProducts: { title: string; href: string; description: string }[];
  relatedContent: { title: string; href: string; description: string }[];
}

export const products: ProductData[] = [
  {
    slug: 'torr-rf',
    name: 'TORR RF',
    nameKo: '토르 RF',
    tagline: 'Multi-wave RF 피부 미용 의료기기',
    firstSentence: '토르 RF(TORR RF)는 브리츠메디가 개발한 토로이달 코일 기반 Multi-wave RF 피부 미용 의료기기로, 균일한 에너지 전달로 얼굴 리프팅과 피부 탄력 개선에 사용됩니다.',
    tldr: 'TORR RF는 브리츠메디의 대표 제품으로, 특허 받은 토로이달 코일 기술을 적용한 Multi-wave RF 의료기기입니다. 기존 모노폴라/바이폴라 방식 대비 360도 균일한 에너지 전달이 가능하며, 얼굴 리프팅, 피부 탄력 개선, 체형 관리 등 다양한 시술에 사용됩니다. FDA 510(k), CE Mark, ISO 13485 인증을 획득했습니다.',
    techTitle: '핵심 기술: 토로이달 코일 Multi-wave RF',
    techDescription: [
      '토로이달 코일 구조를 RF 의료기기에 최초로 적용하여 360도 방향으로 균일한 전자기장을 형성합니다.',
      'Multi-wave 기술로 1MHz, 2MHz, 4MHz 복합 주파수를 동시에 전달하여 표피, 진피, 피하지방 등 다양한 깊이에 작용합니다.',
      '피부 임피던스 기반 자동 출력 조절 시스템으로 환자별 최적 에너지를 전달하고, 핫스팟 없이 안전한 시술이 가능합니다.',
    ],
    specs: [
      { label: 'RF 방식', value: 'Toroidal Coil Multi-wave RF' },
      { label: '주파수', value: '1MHz / 2MHz / 4MHz' },
      { label: '최대 출력', value: '200', unit: 'W' },
      { label: '핸드피스', value: 'Face Tip, Body Tip, Eye Tip' },
      { label: '디스플레이', value: '10.1인치 터치스크린' },
      { label: '크기', value: '380 × 420 × 1050', unit: 'mm' },
      { label: '무게', value: '약 25', unit: 'kg' },
      { label: '전원', value: 'AC 100-240V, 50/60Hz' },
      { label: '분류', value: '의료기기 (Class II)' },
    ],
    certifications: [
      { name: 'FDA 510(k)', number: 'K-XXXXXX', date: '2022년' },
      { name: 'CE Mark', number: 'CE-XXXX', date: '2021년' },
      { name: 'ISO 13485', number: 'ISO-XXXXX', date: '2022년' },
      { name: 'MFDS (식약처)', number: '제허 XX-XXXX호', date: '2020년' },
    ],
    applications: [
      { title: '얼굴 리프팅', desc: '처진 피부를 끌어올려 탄력 있는 V라인을 만듭니다. 이중턱, 볼처짐, 턱선 개선에 효과적입니다.' },
      { title: '피부 탄력 개선', desc: '콜라겐 리모델링을 촉진하여 피부 탄력과 질감을 개선합니다. 주름 완화에도 도움이 됩니다.' },
      { title: '체형 관리', desc: 'Body Tip을 이용한 복부, 팔, 허벅지 등 바디 타이트닝에 활용됩니다.' },
      { title: '아이존 케어', desc: 'Eye Tip을 이용한 눈가 주름, 눈밑 처짐 등 섬세한 부위 시술이 가능합니다.' },
    ],
    faqs: [
      { question: '토르 RF란 무엇인가요?', answer: '토르 RF(TORR RF)는 브리츠메디가 개발한 토로이달 코일 기반 Multi-wave RF 피부 미용 의료기기입니다. 기존 모노폴라/바이폴라 방식과 달리 360도 균일한 에너지 전달이 가능하여 안전하고 효과적인 피부 시술이 가능합니다.' },
      { question: '토르 RF와 써마지(Thermage)의 차이점은?', answer: '써마지는 모노폴라 RF 방식으로 에너지가 한 점에 집중되어 깊은 침투는 가능하나 핫스팟(화상) 위험이 있습니다. 토르 RF는 토로이달 코일로 360도 균일한 에너지를 전달하여 핫스팟 없이 넓은 면적에 고른 효과를 냅니다.' },
      { question: '시술 시간은 얼마나 걸리나요?', answer: '시술 부위에 따라 다르지만, 얼굴 전체 시술은 약 30~45분, 바디 시술은 약 45~60분 소요됩니다.' },
      { question: '시술 후 다운타임이 있나요?', answer: '비침습 시술이므로 다운타임이 거의 없습니다. 시술 직후 약간의 홍조가 있을 수 있으나 수시간 내 자연스럽게 사라집니다.' },
      { question: 'FDA 승인을 받았나요?', answer: '네, 토르 RF는 미국 FDA 510(k) 승인을 획득하였으며, CE Mark, ISO 13485, 한국 식약처 허가까지 주요 글로벌 인증을 모두 보유하고 있습니다.' },
      { question: '어떤 부위에 시술 가능한가요?', answer: '얼굴(리프팅, 탄력), 눈가(아이존), 바디(복부, 팔, 허벅지) 등 다양한 부위에 시술 가능합니다. 3종 핸드피스(Face, Body, Eye Tip)로 부위별 최적 시술이 가능합니다.' },
    ],
    relatedProducts: [
      { title: 'ULBLANC', href: '/products/ulblanc', description: '프리미엄 RF 스킨케어 디바이스' },
      { title: 'NEWCHAE', href: '/products/newchae', description: '차세대 RF 피부 관리 솔루션' },
      { title: 'LUMINO WAVE', href: '/products/lumino-wave', description: 'LED + RF 복합 디바이스' },
    ],
    relatedContent: [
      { title: 'R&D / 기술력', href: '/rnd', description: '토로이달 RF 기술 상세 설명' },
      { title: '인증 및 특허', href: '/certifications', description: 'FDA, CE, ISO 인증 현황' },
      { title: '기업소개', href: '/about', description: '브리츠메디 회사 소개' },
    ],
  },
  {
    slug: 'ulblanc',
    name: 'ULBLANC',
    nameKo: '울블랑',
    tagline: '프리미엄 RF 스킨케어 디바이스',
    firstSentence: '울블랑(ULBLANC)은 브리츠메디의 프리미엄 RF 스킨케어 디바이스로, 의원급 클리닉에 최적화된 컴팩트한 설계와 정밀한 RF 에너지 제어를 제공합니다.',
    tldr: 'ULBLANC은 브리츠메디의 프리미엄 라인 RF 디바이스입니다. TORR RF의 토로이달 코일 기술을 계승하면서 의원급 클리닉에 최적화된 컴팩트한 설계를 갖추었습니다. 정밀한 에너지 제어로 얼굴 리프팅, 탄력 개선, 아이존 케어에 특화되어 있으며, CE Mark과 ISO 13485 인증을 획득했습니다.',
    techTitle: '핵심 기술: 정밀 RF 에너지 제어',
    techDescription: [
      'TORR RF의 토로이달 코일 기술을 소형화하여 의원급 클리닉에 최적화된 프리미엄 디바이스입니다.',
      '듀얼 주파수(1MHz/2MHz)로 표피와 진피층에 정밀하게 에너지를 전달합니다.',
      '실시간 피부 온도 모니터링 시스템으로 안전하고 일관된 시술 결과를 제공합니다.',
    ],
    specs: [
      { label: 'RF 방식', value: 'Toroidal Coil Dual-wave RF' },
      { label: '주파수', value: '1MHz / 2MHz' },
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
      { title: '얼굴 리프팅', desc: '정밀 RF로 얼굴 전체의 리프팅과 탄력 개선을 구현합니다.' },
      { title: '피부 탄력', desc: '콜라겐 자극을 통해 피부 탄력과 질감을 개선합니다.' },
      { title: '아이존 케어', desc: 'Eye Tip으로 눈가 주름과 처짐을 섬세하게 관리합니다.' },
    ],
    faqs: [
      { question: 'ULBLANC은 TORR RF와 뭐가 다른가요?', answer: 'ULBLANC은 TORR RF의 토로이달 코일 기술을 계승하면서 의원급 클리닉에 최적화된 컴팩트 디바이스입니다. 듀얼 주파수(1MHz/2MHz)에 집중하고, 크기와 무게를 줄여 공간 효율성을 높였습니다.' },
      { question: '어떤 클리닉에 적합한가요?', answer: '피부과, 성형외과, 에스테틱 클리닉 등 의원급 기관에 최적화되어 있습니다. 컴팩트한 디자인으로 시술실 공간을 효율적으로 사용할 수 있습니다.' },
      { question: '시술 효과는 언제 나타나나요?', answer: '시술 직후 즉각적인 타이트닝 효과를 느낄 수 있으며, 콜라겐 리모델링을 통한 본격적인 효과는 시술 후 2~4주부터 나타나 3개월까지 점진적으로 개선됩니다.' },
      { question: 'CE 인증을 받았나요?', answer: '네, ULBLANC은 CE Mark과 ISO 13485 인증을 획득하였으며, 한국 식약처 허가도 보유하고 있습니다.' },
      { question: '유지보수는 어떻게 하나요?', answer: '브리츠메디는 글로벌 AS 네트워크를 통해 정기 점검, 핸드피스 교체, 소프트웨어 업데이트 등의 유지보수를 지원합니다.' },
    ],
    relatedProducts: [
      { title: 'TORR RF', href: '/products/torr-rf', description: 'Multi-wave RF 의료기기' },
      { title: 'NEWCHAE', href: '/products/newchae', description: '차세대 RF 솔루션' },
      { title: 'LUMINO WAVE', href: '/products/lumino-wave', description: 'LED + RF 복합 디바이스' },
    ],
    relatedContent: [
      { title: 'R&D / 기술력', href: '/rnd', description: '토로이달 RF 기술 상세' },
      { title: '인증 및 특허', href: '/certifications', description: '인증 현황' },
      { title: '기업소개', href: '/about', description: '브리츠메디 회사 소개' },
    ],
  },
  {
    slug: 'newchae',
    name: 'NEWCHAE',
    nameKo: '뉴채',
    tagline: '차세대 RF 피부 관리 솔루션',
    firstSentence: '뉴채(NEWCHAE)는 브리츠메디의 차세대 RF 피부 관리 솔루션으로, 휴대성과 성능을 모두 갖춘 컴팩트 RF 디바이스입니다.',
    tldr: 'NEWCHAE는 브리츠메디의 포터블 RF 디바이스입니다. 기존 대형 장비의 RF 기술을 소형화하여 다양한 환경에서 활용 가능합니다. 직관적인 인터페이스와 경량 설계로 운영 편의성이 뛰어나며, CE 인증을 획득했습니다.',
    techTitle: '핵심 기술: 소형화 RF 기술',
    techDescription: [
      '브리츠메디의 RF 코어 기술을 소형화하여 휴대성과 성능을 모두 구현했습니다.',
      '1MHz 단일 주파수로 진피층에 집중적인 에너지를 전달하여 콜라겐 생성을 촉진합니다.',
      '직관적인 5인치 터치스크린과 프리셋 모드로 간편한 조작이 가능합니다.',
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
      { label: '분류', value: '의료기기' },
    ],
    certifications: [
      { name: 'CE Mark', number: 'CE-XXXX', date: '2023년' },
      { name: 'MFDS (식약처)', number: '제허 XX-XXXX호', date: '2023년' },
    ],
    applications: [
      { title: '피부 탄력 개선', desc: 'RF 에너지로 콜라겐 리모델링을 촉진하여 피부 탄력을 개선합니다.' },
      { title: '주름 완화', desc: '진피층 가열을 통해 미세 주름과 표정 주름을 완화합니다.' },
      { title: '피부결 개선', desc: '피부 표면의 질감과 톤을 고르게 개선합니다.' },
    ],
    faqs: [
      { question: 'NEWCHAE는 어떤 제품인가요?', answer: 'NEWCHAE는 브리츠메디의 컴팩트 RF 디바이스로, 대형 장비의 RF 기술을 소형화하여 다양한 클리닉 환경에서 활용할 수 있도록 설계되었습니다.' },
      { question: '대형 RF 장비와 효과 차이가 있나요?', answer: 'NEWCHAE는 피부 탄력, 주름 완화 등 기본적인 RF 시술에 최적화되어 있습니다. 심부 리프팅이 필요한 경우 TORR RF를 권장합니다.' },
      { question: '휴대가 가능한가요?', answer: '약 6kg의 경량 설계로 이동이 용이합니다. 다만 의료기기이므로 의료 환경에서 사용해야 합니다.' },
      { question: '시술 교육은 제공되나요?', answer: '네, 브리츠메디는 장비 구매 시 시술 교육 프로그램을 제공합니다. 온라인 교육과 현장 교육을 모두 지원합니다.' },
      { question: '인증 현황은 어떻게 되나요?', answer: 'NEWCHAE는 CE Mark과 한국 식약처 허가를 획득하였습니다.' },
    ],
    relatedProducts: [
      { title: 'TORR RF', href: '/products/torr-rf', description: 'Multi-wave RF 의료기기' },
      { title: 'ULBLANC', href: '/products/ulblanc', description: '프리미엄 RF 디바이스' },
      { title: 'LUMINO WAVE', href: '/products/lumino-wave', description: 'LED + RF 복합 디바이스' },
    ],
    relatedContent: [
      { title: 'R&D / 기술력', href: '/rnd', description: '토로이달 RF 기술 상세' },
      { title: '인증 및 특허', href: '/certifications', description: '인증 현황' },
      { title: '문의하기', href: '/contact', description: '제품 상담 문의' },
    ],
  },
  {
    slug: 'lumino-wave',
    name: 'LUMINO WAVE',
    nameKo: '루미노 웨이브',
    tagline: 'LED + RF 복합 디바이스',
    firstSentence: '루미노 웨이브(LUMINO WAVE)는 LED 광치료와 RF 에너지를 결합한 브리츠메디의 복합 피부 미용 디바이스로, 피부 재생과 탄력 개선을 동시에 구현합니다.',
    tldr: 'LUMINO WAVE는 LED 광치료(630nm Red, 850nm NIR)와 RF 에너지를 하나의 디바이스에 결합한 복합 장비입니다. LED로 피부 세포 재생과 혈류 순환을 촉진하고, RF로 콜라겐 리모델링을 유도하여 시너지 효과를 냅니다. CE Mark과 ISO 13485 인증을 획득했습니다.',
    techTitle: '핵심 기술: LED + RF 복합 에너지',
    techDescription: [
      '630nm 적색 LED는 세포의 미토콘드리아를 자극하여 ATP 생성을 촉진하고, 피부 재생과 상처 치유를 돕습니다.',
      '850nm 근적외선(NIR) LED는 피부 깊숙이 침투하여 혈류 순환을 개선하고 염증을 완화합니다.',
      'RF 에너지와 LED를 동시 또는 순차 조사하여 피부 재생 + 콜라겐 리모델링의 시너지 효과를 구현합니다.',
    ],
    specs: [
      { label: '기술', value: 'LED Phototherapy + RF' },
      { label: 'LED 파장', value: '630nm (Red) / 850nm (NIR)' },
      { label: 'RF 주파수', value: '1MHz' },
      { label: '최대 출력(RF)', value: '80', unit: 'W' },
      { label: 'LED 패널', value: 'Face Panel, Neck Panel' },
      { label: '디스플레이', value: '7인치 터치스크린' },
      { label: '크기', value: '350 × 400 × 500', unit: 'mm' },
      { label: '무게', value: '약 15', unit: 'kg' },
      { label: '전원', value: 'AC 100-240V, 50/60Hz' },
    ],
    certifications: [
      { name: 'CE Mark', number: 'CE-XXXX', date: '2024년' },
      { name: 'ISO 13485', number: 'ISO-XXXXX', date: '2024년' },
      { name: 'MFDS (식약처)', number: '제허 XX-XXXX호', date: '2024년' },
    ],
    applications: [
      { title: '피부 재생', desc: 'LED 광치료로 세포 재생을 촉진하여 피부 톤과 질감을 개선합니다.' },
      { title: '탄력 개선', desc: 'RF 에너지로 콜라겐 리모델링을 유도하여 피부 탄력을 높입니다.' },
      { title: '복합 안티에이징', desc: 'LED + RF 동시 적용으로 재생과 리프팅을 한 번에 구현합니다.' },
      { title: '시술 후 회복', desc: 'LED 광치료로 다른 시술 후 피부 회복을 촉진합니다.' },
    ],
    faqs: [
      { question: 'LUMINO WAVE는 어떤 장비인가요?', answer: 'LUMINO WAVE는 LED 광치료(630nm, 850nm)와 RF 에너지를 결합한 복합 피부 미용 디바이스입니다. 피부 재생과 탄력 개선을 동시에 구현하는 차세대 장비입니다.' },
      { question: 'LED와 RF를 동시에 사용하는 이유는?', answer: 'LED는 세포 재생과 혈류 순환을 촉진하고, RF는 콜라겐 리모델링을 유도합니다. 두 에너지를 결합하면 각각 단독 사용 시보다 더 높은 시너지 효과를 얻을 수 있습니다.' },
      { question: 'LED 파장별 효과가 다른가요?', answer: '630nm 적색 LED는 피부 세포 재생, 콜라겐 합성 촉진에 효과적이며, 850nm 근적외선은 깊은 피부층 혈류 순환 개선, 염증 완화에 효과적입니다.' },
      { question: '다른 시술과 병행 가능한가요?', answer: '네, LUMINO WAVE의 LED 모드는 다른 RF 시술, 레이저 시술 후 회복 촉진 목적으로 병행 사용이 가능합니다.' },
      { question: '시술 시간은 얼마나 걸리나요?', answer: 'LED 단독 모드는 약 15~20분, RF 모드는 약 20~30분, 복합 모드는 약 30~40분 소요됩니다.' },
    ],
    relatedProducts: [
      { title: 'TORR RF', href: '/products/torr-rf', description: 'Multi-wave RF 의료기기' },
      { title: 'ULBLANC', href: '/products/ulblanc', description: '프리미엄 RF 디바이스' },
      { title: 'NEWCHAE', href: '/products/newchae', description: '차세대 RF 솔루션' },
    ],
    relatedContent: [
      { title: 'R&D / 기술력', href: '/rnd', description: '브리츠메디 기술 소개' },
      { title: '인증 및 특허', href: '/certifications', description: '인증 현황' },
      { title: '문의하기', href: '/contact', description: '제품 상담 문의' },
    ],
  },
];

export function getProduct(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}

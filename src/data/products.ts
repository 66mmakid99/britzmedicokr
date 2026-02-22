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
    tagline: '비침습 멀티웨이브 RF 스킨타이트닝 & 바디컨투어링 의료기기',
    firstSentence: '토르 RF(TORR RF)는 비침습 고주파 에너지를 이용하여 스킨타이트닝과 바디컨투어링에 적용하는 브리츠메디의 대표 의료기기입니다.',
    tldr: 'TORR RF는 브리츠메디의 대표 제품으로, 특화된 멀티웨이브 고주파 기술로 적은 출력으로도 원하는 깊이에 균일하고 강력·안전한 에너지를 전달합니다. Face, Body, Eye 적용이 가능하며, FDA 510(k), CE Mark, ISO 13485, MFDS 인증을 획득했습니다.',
    techTitle: '핵심 기술: 멀티웨이브 고주파 에너지 전달',
    techDescription: [
      '특화된 멀티웨이브 고주파 기술로 적은 출력으로도 원하는 깊이에 균일하고 강력한 에너지를 전달합니다.',
      'Multi-wave 기술로 복합 주파수를 동시에 전달하여 표피, 진피, 피하지방 등 다양한 깊이에 작용합니다.',
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
    tagline: '저주파·고주파·초음파 다적응증 의료기기',
    firstSentence: '울블랑(ULBLANC)은 저주파, 고주파, 초음파 각각의 파장으로 다양한 적응증 시술이 가능한 브리츠메디의 다기능 의료기기입니다.',
    tldr: 'ULBLANC은 저주파, 고주파, 초음파를 활용하여 다양한 적응증 시술이 가능한 의료기기입니다. 한국인 얼굴형을 고려한 인체공학적 설계와 1/3, 3/10MHz 두 개의 모드로 피부 표피·진피 Dual Care가 가능합니다. 피부 진정·재생, 경피적 약물 전달까지 폭넓은 적용이 가능하며, CE Mark과 ISO 13485, MFDS 인증을 획득했습니다.',
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
    tagline: '고주파 타이트닝 3가지 모드 시스템',
    firstSentence: '뉴채 샷(NEWCHAE Shot)은 멀티채널 고주파 에너지 샷, 전기 근육 자극 V라인, 전기 연동 펌프 스킨 부스트의 3가지 모드를 갖춘 브리츠메디의 고주파 타이트닝 시스템입니다.',
    tldr: 'NEWCHAE Shot은 고주파 타이트닝, 전기 근육 자극 V라인, 전기 연동 펌프 스킨 부스트의 3가지 모드를 제공하는 시스템입니다. 멀티채널 기술로 각 채널 고주파 에너지가 표피~진피에 전달되며, 자동 샷 방식의 멀티채널 집중 에너지 샷 시스템과 RF STACK 출력으로 심부열 발생, 3D 입체진동 마사지(분당 1만회 미세진동)를 구현합니다.',
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
      { label: '분류', value: '의료기기' },
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
    tagline: '초음파 + 레이저 + 고주파 복합 다중 에너지 디바이스',
    firstSentence: '루미노 웨이브(LUMINO WAVE)는 초음파, 레이저, 고주파를 결합한 브리츠메디의 복합 다중 에너지 의료기기로, 초음파가 피부 환경을 열고 레이저·고주파가 침투하는 구조로 같은 효과를 더 낮은 출력으로 구현합니다.',
    tldr: 'LUMINO WAVE는 초음파 + 레이저 + 고주파를 결합한 복합 다중 에너지 디바이스입니다. 초음파가 피부 환경을 먼저 열어주고, 레이저·고주파가 효과적으로 침투하는 구조로 같은 효과를 더 낮은 출력으로 구현합니다. 시술자 숙련도 의존도를 줄이고, 시술 결과의 재현성·안정성을 확보한 것이 핵심 차별점입니다.',
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

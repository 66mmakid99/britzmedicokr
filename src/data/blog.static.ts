import type { BlogPost } from './blog.types';

const blogPosts: BlogPost[] = [
  {
    slug: 'rf-lifting-comparison-guide',
    title: 'RF 리프팅 장비 비교 가이드: 단일 에너지 vs 복합 다중 에너지',
    category: 'rf-guide',
    categoryLabel: 'RF 기술 가이드',
    excerpt:
      'RF 리프팅 장비의 에너지 방식을 단일 에너지와 복합 다중 에너지로 나누어 비교합니다. 각 방식의 에너지 전달 구조, 출력 수준, 안전성, 시술 효과를 종합 분석하여 최적의 장비를 선택하는 데 도움을 드립니다.',
    author: '브리츠메디 연구소',
    publishedAt: '2026-01-15',
    content: `
<h2>RF 리프팅 장비, 어떤 방식이 가장 효과적일까요?</h2>
<p>
피부 리프팅 시장에서 RF(고주파) 기술은 비침습 시술의 대표 주자로 자리잡았습니다. 그러나 모든 RF 장비가 같은 방식으로 작동하는 것은 아닙니다. 기존 장비들은 <strong>단일 에너지의 출력을 높이는 방향</strong>으로 발전해왔지만, 최근에는 <strong>여러 에너지를 구조적으로 조합하는 복합 다중 에너지 방식</strong>이 등장하면서 패러다임이 바뀌고 있습니다. 이 차이가 시술 효과, 안전성, 시술자 숙련도 의존도를 결정합니다.
</p>

<h2>단일 에너지 방식이란 무엇인가요?</h2>
<p>
기존 RF 리프팅 장비 대부분은 모노폴라 또는 바이폴라 등 <strong>단일 에너지 방식</strong>을 사용합니다. 모노폴라 RF(대표 장비: 써마지)는 깊은 침투력이 장점이나 고출력에 따른 핫스팟(화상) 위험이 있고, 바이폴라 RF는 비교적 안전하지만 효과 범위가 제한적입니다.
</p>
<p>
이들의 공통점은 <strong>더 강한 출력으로 효과를 극대화</strong>하려는 접근입니다. 출력을 높이면 효과는 좋아질 수 있으나, 부작용 위험이 비례해서 커지고 시술자 숙련도에 따른 결과 편차도 발생합니다.
</p>

<h2>복합 다중 에너지 방식은 기존 방식과 무엇이 다른가요?</h2>
<p>
브리츠메디의 <strong>다중 에너지 설계(Multi-Energy Design)</strong>는 에너지를 쓰는 방식 자체를 재설계한 접근입니다. 단순히 여러 에너지를 탑재하는 것이 아니라, 에너지 조합의 비율과 순서를 정밀하게 제어합니다.
</p>
<p>
핵심은 3가지 원천 기술입니다. 첫째, <strong>초음파 기반 피부 환경 제어</strong> — 초음파가 피부 내 미세공간을 형성하여 후속 에너지의 침투 경로를 확보합니다. 둘째, <strong>에너지 조합 비율 및 순서 제어</strong> — Multi-wave 기술로 복합 주파수를 구조적으로 전달합니다. 셋째, <strong>저출력 기반 효율 극대화</strong> — 침투 경로를 먼저 확보하기 때문에 같은 효과를 더 낮은 출력으로 구현합니다.
</p>

<h2>단일 에너지 vs 복합 다중 에너지 비교 요약</h2>
<p>
종합적으로 비교하면, 단일 에너지 방식은 고출력 경쟁에 의존하며 시술자 숙련도에 따른 결과 편차가 큽니다. 복합 다중 에너지 방식은 에너지 조합 구조를 재설계하여, 저출력으로도 동등한 효과를 달성하고, 시술 결과의 재현성과 안정성을 확보합니다.
</p>
<p>
장비 선택 시에는 에너지 전달 구조, 출력 수준 대비 효과, 시술자 숙련도 의존도, 안전성, 인증 현황(FDA, CE 등)을 종합적으로 고려해야 합니다. 브리츠메디의 TORR RF는 멀티웨이브 RF 기술을 적용한 대표 장비로, FDA 510(k), CE Mark, ISO 13485 인증을 모두 획득하였습니다.
</p>
`,
    faqs: [
      {
        question: '복합 다중 에너지 방식이 단일 에너지 방식보다 안전한가요?',
        answer:
          '네, 복합 다중 에너지 방식은 저출력으로도 동등한 효과를 구현하는 구조이므로, 고출력에 의존하는 단일 에너지 방식 대비 부작용 위험이 낮습니다. 피부 임피던스 기반 자동 출력 조절과 에너지 침투 경로 선확보 구조로 안전성을 확보합니다.',
      },
      {
        question: 'RF 리프팅 장비 선택 시 가장 중요한 기준은 무엇인가요?',
        answer:
          '에너지 전달 균일성, 침투 깊이 조절 능력, 안전 장치(자동 출력 제어, 온도 모니터링), 글로벌 인증(FDA, CE) 획득 여부를 종합적으로 고려해야 합니다. 또한 핸드피스 종류와 시술 부위 호환성도 중요한 선택 기준입니다.',
      },
      {
        question: 'Multi-wave RF 기술이란 무엇인가요?',
        answer:
          'Multi-wave RF는 여러 주파수(1MHz, 2MHz, 4MHz)를 동시에 전달하는 기술입니다. 주파수마다 피부에 작용하는 깊이가 다르므로, 복합 주파수를 사용하면 표피부터 피하지방층까지 한 번의 시술로 다층적인 효과를 얻을 수 있습니다.',
      },
    ],
    relatedProducts: [
      { title: 'TORR RF', href: '/products/torr-rf' },
      { title: 'ULBLANC', href: '/products/ulblanc' },
    ],
    relatedSlugs: ['skin-lifting-treatments-comparison', 'britzmedi-torr-rf-fda-approval'],
  },
  {
    slug: 'skin-lifting-treatments-comparison',
    title: '피부 리프팅 시술 종류 총정리: RF, HIFU, 울쎄라 비교',
    category: 'treatment',
    categoryLabel: '시술 정보',
    excerpt:
      '피부 리프팅 시술의 대표적인 세 가지 방식인 RF(고주파), HIFU(고강도 집속 초음파), 울쎄라(Ultherapy)의 원리, 효과, 다운타임을 비교 분석합니다. 본인에게 맞는 리프팅 시술을 선택하는 기준을 제시합니다.',
    author: '브리츠메디 연구소',
    publishedAt: '2026-01-28',
    content: `
<h2>피부 리프팅 시술, 어떤 종류가 있나요?</h2>
<p>
노화로 인한 피부 처짐과 탄력 저하를 개선하기 위한 비침습 리프팅 시술이 꾸준히 발전하고 있습니다. 현재 가장 널리 사용되는 비침습 리프팅 기술은 <strong>RF(Radio Frequency, 고주파)</strong>, <strong>HIFU(High-Intensity Focused Ultrasound, 고강도 집속 초음파)</strong>, 그리고 HIFU 기반의 브랜드 시술인 <strong>울쎄라(Ultherapy)</strong>가 있습니다. 각 기술은 에너지원, 작용 원리, 효과 영역이 다르므로 자신의 피부 상태와 시술 목적에 맞는 선택이 중요합니다.
</p>

<h2>RF 리프팅은 어떤 원리로 작동하나요?</h2>
<p>
RF 리프팅은 고주파 에너지를 피부에 전달하여 진피층의 온도를 상승시키고, 이를 통해 기존 콜라겐 섬유를 수축시키며 새로운 콜라겐 생성을 유도하는 방식입니다. 열에너지가 진피층 전체에 작용하므로 피부 탄력 개선, 주름 완화, 전체적인 타이트닝 효과가 나타납니다.
</p>
<p>
RF 방식의 가장 큰 장점은 <strong>다운타임이 거의 없다</strong>는 점입니다. 시술 직후 약간의 홍조가 나타날 수 있으나 수시간 내 사라지며, 일상생활 복귀가 즉시 가능합니다. 특히 브리츠메디의 TORR RF는 멀티웨이브 RF 기술로 복합 주파수를 동시에 전달하여 기존 RF 대비 향상된 효과를 제공합니다.
</p>

<h2>HIFU 리프팅은 RF와 어떻게 다른가요?</h2>
<p>
HIFU는 초음파 에너지를 피부 특정 깊이에 집속(focusing)시켜 열응고점(thermal coagulation point)을 형성하는 방식입니다. RF가 진피층 전체를 고르게 가열하는 것과 달리, HIFU는 SMAS(표재성 근건막계) 층까지 도달하는 <strong>점 단위의 깊은 열 손상</strong>을 만들어 리프팅 효과를 유도합니다.
</p>
<p>
HIFU의 장점은 수술 없이 SMAS층에 작용할 수 있다는 것이나, 점 단위 에너지 전달 특성상 시술 중 통증이 상대적으로 강하고 부종, 멍 등의 다운타임이 RF보다 길 수 있습니다. 또한 지방층이 얇은 부위에서는 신경 손상 위험이 보고되기도 합니다.
</p>

<h2>울쎄라(Ultherapy)는 HIFU와 같은 건가요?</h2>
<p>
울쎄라는 미국 Merz사의 HIFU 기반 리프팅 장비 브랜드명입니다. 기본 원리는 HIFU와 동일하지만, <strong>마이크로 포커싱 초음파</strong> 기술과 실시간 초음파 이미징 기능을 탑재하여 시술 부위를 눈으로 확인하면서 정밀하게 에너지를 전달할 수 있다는 특징이 있습니다.
</p>
<p>
울쎄라는 FDA 승인을 받은 유일한 비침습 리프팅 초음파 장비로 알려져 있으며, 비용이 다른 HIFU 장비 대비 높은 편입니다. 효과는 시술 후 2~3개월에 걸쳐 나타나며, 6개월~1년 정도 지속됩니다.
</p>

<h2>RF vs HIFU vs 울쎄라, 어떤 시술을 선택해야 하나요?</h2>
<p>
시술 선택은 피부 상태, 처짐 정도, 다운타임 허용 범위, 예산에 따라 달라집니다. <strong>경도~중등도 처짐</strong>이면서 다운타임 없는 시술을 원한다면 RF 리프팅이 적합합니다. <strong>중등도 이상의 처짐</strong>으로 SMAS층 작용이 필요하다면 HIFU나 울쎄라를 고려할 수 있습니다.
</p>
<p>
최근에는 RF와 HIFU를 병행하는 콤비네이션 시술도 인기를 얻고 있습니다. RF로 진피층 전체 탄력을 개선하고, HIFU로 깊은 층의 리프팅을 보완하는 방식입니다. 어떤 시술이든 장비의 인증 현황(FDA, CE)과 시술자의 숙련도를 반드시 확인하는 것이 중요합니다.
</p>
`,
    faqs: [
      {
        question: 'RF 리프팅과 HIFU 중 어떤 시술이 더 아프나요?',
        answer:
          '일반적으로 HIFU가 RF보다 시술 중 통증이 더 강합니다. HIFU는 집속된 초음파 에너지로 깊은 층에 열응고점을 만들기 때문에 찌릿한 통증이 동반됩니다. RF는 진피층을 고르게 가열하는 방식이라 온열감 위주로 느껴지며 통증이 적은 편입니다.',
      },
      {
        question: '리프팅 시술 효과는 얼마나 지속되나요?',
        answer:
          'RF 리프팅은 시술 직후 즉각적인 타이트닝이 느껴지며, 콜라겐 리모델링을 통해 2~4주후부터 본격적인 효과가 나타나 약 6개월~1년 지속됩니다. HIFU/울쎄라는 2~3개월에 걸쳐 효과가 나타나며 6개월~1년 지속됩니다. 유지를 위해 정기적인 반복 시술을 권장합니다.',
      },
      {
        question: '두 시술을 병행할 수 있나요?',
        answer:
          '네, RF와 HIFU를 병행하는 콤비네이션 시술이 가능합니다. RF로 진피층 전체의 탄력을 개선하고, HIFU로 SMAS층의 리프팅을 보완하여 시너지 효과를 얻을 수 있습니다. 단, 병행 시 시술 간격과 에너지 세팅은 전문의와 상담 후 결정해야 합니다.',
      },
    ],
    relatedProducts: [{ title: 'TORR RF', href: '/products/torr-rf' }],
    relatedSlugs: ['rf-lifting-comparison-guide', 'britzmedi-torr-rf-fda-approval'],
  },
  {
    slug: 'britzmedi-torr-rf-fda-approval',
    title: '브리츠메디 토르 RF, FDA 510(k) 승인 획득',
    category: 'news',
    categoryLabel: '회사 소식',
    excerpt:
      '브리츠메디의 대표 RF 리프팅 장비 TORR RF가 미국 FDA 510(k) 승인을 획득했습니다. 멀티웨이브 RF 기술의 안전성과 유효성을 국제적으로 인정받은 성과입니다.',
    author: '브리츠메디 홍보팀',
    publishedAt: '2026-02-05',
    content: `
<h2>브리츠메디, TORR RF FDA 510(k) 승인으로 글로벌 경쟁력 확보</h2>
<p>
한국 의료기기 전문기업 <strong>브리츠메디(BRITZMEDI)</strong>는 자사의 대표 RF 피부 미용 의료기기 <strong>TORR RF</strong>가 미국 식품의약국(FDA) 510(k) 승인을 획득했다고 발표했습니다. 이번 승인은 브리츠메디의 멀티웨이브 RF 기술의 안전성과 유효성이 세계 최고 수준의 규제 기관에 의해 공식 인정된 것을 의미합니다.
</p>

<h2>FDA 510(k) 승인의 의미</h2>
<p>
FDA 510(k)는 미국 시장에 의료기기를 출시하기 위해 반드시 거쳐야 하는 시판 전 인증 절차입니다. 기존에 합법적으로 시판되고 있는 장비(predicate device)와의 실질적 동등성을 입증해야 하며, 안전성과 유효성에 대한 엄격한 기술 심사를 통과해야 합니다. TORR RF의 FDA 승인은 북미 시장 진출의 핵심 관문을 통과한 것으로, 글로벌 의료기기 시장에서의 신뢰도와 경쟁력을 크게 높이는 계기가 됩니다.
</p>

<h2>TORR RF, 차별화된 기술력으로 글로벌 시장 공략</h2>
<p>
TORR RF는 브리츠메디의 <strong>멀티웨이브 RF 기술</strong>이 적용된 대표 제품입니다. 특화된 멀티웨이브 고주파 기술로 적은 출력으로도 원하는 깊이에 균일하고 강력한 에너지를 전달하며, 기존 단일 에너지 방식 대비 안전성이 크게 향상되었습니다. 1MHz, 2MHz, 4MHz 복합 주파수를 동시에 전달하는 Multi-wave 기술로 표피부터 피하지방층까지 다층적인 효과를 구현합니다.
</p>

<h2>CEO 코멘트</h2>
<p>
브리츠메디 대표이사는 "FDA 510(k) 승인은 우리 기술력에 대한 국제적 검증"이라며 "이번 승인을 발판으로 북미 시장을 비롯한 글로벌 시장 확대에 속도를 내겠다. TORR RF가 전 세계 의료진과 환자에게 더 안전하고 효과적인 RF 리프팅 경험을 제공할 수 있도록 지속적으로 기술을 발전시키겠다"고 밝혔습니다.
</p>

<h2>향후 계획</h2>
<p>
브리츠메디는 FDA 승인을 기반으로 미국 내 디스트리뷰터 파트너십 확대, 주요 피부과 학회 참가, 미국 현지 임상 데이터 확보 등을 추진할 예정입니다. 현재 TORR RF는 CE Mark, ISO 13485, 한국 식약처 허가를 포함하여 주요 글로벌 인증을 모두 갖추고 있으며, 40개국 이상의 파트너 네트워크를 통해 해외 시장에서 빠르게 성장하고 있습니다.
</p>
`,
    faqs: [
      {
        question: 'FDA 510(k) 승인이란 무엇인가요?',
        answer:
          'FDA 510(k)는 미국 식품의약국(FDA)의 의료기기 시판 전 인증 제도입니다. 새로운 의료기기가 기존에 합법적으로 시판 중인 장비와 실질적으로 동등한 안전성과 유효성을 갖추고 있음을 증명하는 절차이며, 미국 시장에 의료기기를 출시하기 위한 필수 인증입니다.',
      },
      {
        question: 'TORR RF는 어떤 인증을 보유하고 있나요?',
        answer:
          'TORR RF는 미국 FDA 510(k), 유럽 CE Mark, ISO 13485(의료기기 품질경영시스템), 한국 식약처(MFDS) 허가를 모두 획득하고 있습니다. 주요 글로벌 의료기기 인증을 모두 보유하여 국제적 신뢰성을 확보하고 있습니다.',
      },
    ],
    relatedProducts: [{ title: 'TORR RF', href: '/products/torr-rf' }],
    relatedSlugs: ['rf-lifting-comparison-guide', 'skin-lifting-treatments-comparison'],
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined);
}

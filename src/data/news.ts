export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    slug: 'asls-korea-2026',
    title: '브리츠메디, ASLS KOREA 2026 학회 참가',
    excerpt:
      '브리츠메디가 ASLS KOREA 2026 춘계 학술대회에 참가하여 다중 에너지 설계 기술과 TORR RF를 선보입니다. 라이브 시연과 기술 세미나를 통해 국내 의료진과 교류합니다.',
    publishedAt: '2026-02-10',
    category: '학회 참가',
    content: `
<h2>ASLS KOREA 2026 춘계 학술대회 참가 안내</h2>
<p>
브리츠메디(BRITZMEDI)가 <strong>ASLS KOREA 2026 춘계 학술대회</strong>에 공식 참가합니다. ASLS(Asian Society for Laser Surgery) KOREA는 아시아 최대 규모의 레이저·에너지 기반 의료기기 학술대회로, 국내외 피부과·성형외과 전문의들이 참가하여 최신 기술과 임상 경험을 공유하는 자리입니다.
</p>

<h2>전시 및 시연 내용</h2>
<p>
브리츠메디 부스에서는 대표 제품인 <strong>TORR RF</strong>의 실물 전시와 함께, 다중 에너지 설계(Multi-Energy Design) 기술의 원리를 설명하는 기술 세미나를 진행합니다. 또한 TORR RF의 라이브 시연을 통해 멀티웨이브 RF 에너지 전달과 다층 시술 효과를 직접 확인할 수 있는 기회를 제공합니다.
</p>

<h2>학회 개요</h2>
<ul>
  <li><strong>일시:</strong> 2026년 3월 15일(일) ~ 16일(월)</li>
  <li><strong>장소:</strong> 서울 코엑스(COEX) 컨벤션센터</li>
  <li><strong>브리츠메디 부스:</strong> Hall B, B-12</li>
  <li><strong>기술 세미나:</strong> 3월 15일 14:00 ~ 15:00 (세미나실 3)</li>
</ul>

<p>
브리츠메디는 이번 학회를 통해 국내 의료진들에게 다중 에너지 설계 기술의 임상적 가치를 알리고, 파트너십 확대의 기회로 삼고자 합니다. 부스 방문 및 세미나 참석을 희망하시는 분은 사전 등록 페이지를 통해 신청해 주시기 바랍니다.
</p>
`,
  },
  {
    slug: 'global-partner-40-countries',
    title: '브리츠메디 글로벌 파트너 40개국 돌파',
    excerpt:
      '브리츠메디가 글로벌 디스트리뷰터 파트너 네트워크 40개국을 돌파했습니다. 아시아, 유럽, 중동, 남미 전역으로 확장하며 K-의료기기의 글로벌 입지를 강화합니다.',
    publishedAt: '2026-01-20',
    category: '회사 소식',
    content: `
<h2>글로벌 파트너 40개국 돌파, K-의료기기의 새로운 이정표</h2>
<p>
브리츠메디(BRITZMEDI)가 해외 디스트리뷰터 파트너 네트워크 <strong>40개국 돌파</strong>를 달성했습니다. 2019년 설립 이후 불과 6년 만에 이룬 성과로, 다중 에너지 설계 기술의 글로벌 경쟁력과 K-의료기기에 대한 해외 시장의 높은 관심을 입증하는 결과입니다.
</p>

<h2>지역별 확장 현황</h2>
<p>
브리츠메디의 글로벌 네트워크는 <strong>아시아 태평양</strong>(동남아시아, 대만, 인도 등), <strong>유럽</strong>(독일, 이탈리아, 스페인 등), <strong>중동·아프리카</strong>(UAE, 사우디아라비아, 이집트 등), <strong>남미</strong>(브라질, 멕시코, 콜롬비아 등) 전역에 걸쳐 있습니다. 특히 2025년에는 남미와 중동 지역에서의 신규 파트너 계약이 크게 증가하며 성장을 견인했습니다.
</p>

<h2>성장의 원동력</h2>
<p>
이 같은 빠른 글로벌 확장의 배경에는 세 가지 핵심 요인이 있습니다. 첫째, <strong>차별화된 기술력</strong>입니다. 다중 에너지 설계(Multi-Energy Design) 기술은 기존 단일 에너지 방식과 명확히 구분되는 혁신 기술로, 해외 바이어들의 높은 관심을 받고 있습니다. 둘째, <strong>글로벌 인증 완비</strong>입니다. FDA 510(k), CE Mark, ISO 13485 등 주요 인증을 모두 갖추어 각국 수입 허가 절차가 원활합니다. 셋째, <strong>파트너 지원 체계</strong>입니다. 기술 교육, 마케팅 자료, AS 지원을 포함한 종합적인 파트너 프로그램을 운영하고 있습니다.
</p>

<h2>향후 목표</h2>
<p>
브리츠메디는 2026년 말까지 글로벌 파트너 네트워크를 50개국 이상으로 확대하는 것을 목표로 하고 있습니다. 북미 시장 본격 진출, 유럽 주요국 직영 지사 설립, 파트너 교육 아카데미 운영 확대 등을 통해 글로벌 RF 의료기기 시장에서의 입지를 더욱 공고히 할 계획입니다.
</p>
`,
  },
];

export function getAllNews(): NewsItem[] {
  return newsItems.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}

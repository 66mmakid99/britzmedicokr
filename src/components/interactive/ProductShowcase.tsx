import { useState } from 'react';

const products = [
  {
    id: 'torr-rf',
    name: 'TORR RF',
    nameKo: '토르 RF',
    category: 'FLAGSHIP RF DEVICE',
    tagline: '비침습 멀티웨이브 RF 스킨타이트닝 & 바디컨투어링',
    image: '/images/products/torr-rf/TORR RF2.webp',
    features: [
      { number: 'Low', label: '적은 출력, 균일한 에너지 전달' },
      { number: '3', label: 'Face / Body / Eye 적용' },
      { number: 'FDA', label: '510(k) 승인 획득' },
    ],
    href: '/products/torr-rf',
  },
  {
    id: 'ulblanc',
    name: 'ULBLANC',
    nameKo: '울블랑',
    category: 'PREMIUM SKINCARE',
    tagline: '저주파·고주파·초음파 다적응증 의료기기',
    image: '/images/products/ulblanc/ulblanc_fullbody.PNG',
    features: [
      { number: 'Dual', label: '1/3MHz + 3/10MHz 듀얼 모드' },
      { number: 'Multi', label: '저주파·고주파·초음파' },
      { number: 'TDD', label: '경피적 약물 전달' },
    ],
    href: '/products/ulblanc',
  },
  {
    id: 'newchae',
    name: 'NEWCHAE Shot',
    nameKo: '뉴채 샷',
    category: 'BEAUTY DEVICE',
    tagline: '고주파 타이트닝 3가지 모드 시스템',
    image: '/images/products/newchae/newchae 01 (1).webp',
    features: [
      { number: '3', label: '타이트닝 / V라인 / 스킨부스트' },
      { number: 'Shot', label: '멀티채널 집중 에너지 샷' },
      { number: '10K', label: '분당 1만회 미세진동' },
    ],
    href: '/products/newchae',
  },
  {
    id: 'lumino-wave',
    name: 'LUMINO WAVE',
    nameKo: '루미노 웨이브',
    category: 'MULTI-ENERGY DESIGN',
    tagline: '초음파 + 레이저 + 고주파 복합 다중 에너지',
    image: '/images/products/lumino-wave/20260207 luminowave page12_image.png',
    features: [
      { number: 'US', label: '초음파 피부 환경 제어' },
      { number: 'Low', label: '저출력 고효율 구조' },
      { number: '2HP', label: '2종 핸드피스 시스템' },
    ],
    href: '/products/lumino-wave',
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section className="bg-zinc-50">
      {/* 탭 바 */}
      <div className="sticky top-16 z-30 border-b border-zinc-200/60 bg-white/80 backdrop-blur-lg md:top-20">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`relative px-5 py-4 text-[13px] font-semibold tracking-wide transition-colors md:px-10 md:text-sm ${
                i === active
                  ? 'text-teal-600'
                  : 'text-zinc-400 hover:text-zinc-700'
              }`}
            >
              <span className="hidden md:inline">{p.nameKo}({p.name})</span>
              <span className="md:hidden">{p.nameKo}</span>
              {i === active && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-3/4 -translate-x-1/2 rounded-full bg-teal-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-5 md:gap-16">
          {/* 좌: 제품 이미지 — 3/5 비율 */}
          <div className="flex items-center justify-center md:col-span-3">
            <div className="relative w-full">
              {/* 부드러운 그래디언트 배경 */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-zinc-100/80 to-teal-50/40" />
              <div className="relative flex items-center justify-center px-8 py-12 md:px-12 md:py-16">
                <img
                  src={product.image}
                  alt={`${product.nameKo}(${product.name}) - ${product.tagline}`}
                  width={720}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="h-[320px] w-full object-contain drop-shadow-lg md:h-[480px]"
                />
              </div>
            </div>
          </div>

          {/* 우: 제품 정보 — 2/5 비율 */}
          <div className="flex flex-col md:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-600/80">
              {product.category}
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              {product.nameKo}
            </h3>
            <p className="mt-1 text-sm font-medium text-zinc-400">{product.name}</p>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              {product.tagline}
            </p>

            <div className="mt-8 space-y-3">
              {product.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-sm font-bold text-teal-600">
                    {f.number}
                  </span>
                  <span className="text-sm text-zinc-700">{f.label}</span>
                </div>
              ))}
            </div>

            <a
              href={product.href}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-600 hover:shadow-lg"
            >
              자세히 보기
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

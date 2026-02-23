import { useState } from 'react';

const products = [
  {
    id: 'torr-rf',
    name: 'TORR RF',
    category: 'FLAGSHIP RF DEVICE',
    tagline: '비침습 멀티웨이브 RF 스킨타이트닝 & 바디컨투어링',
    image: '/images/products/torr-rf/herosection_torrrf_modelcut01.webp',
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
    category: 'PREMIUM SKINCARE',
    tagline: '저주파·고주파·초음파 다적응증 의료기기',
    image: '/images/products/ulblanc/ulblanc.webp',
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
    category: 'MULTI-ENERGY DESIGN',
    tagline: '초음파 + 레이저 + 고주파 복합 다중 에너지',
    image: '/images/products/lumino-wave/20260207 luminowave page12_image.webp',
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
    <section className="bg-white">
      {/* 탭 바 */}
      <div className="sticky top-16 z-30 border-b border-zinc-100 bg-white/90 backdrop-blur md:top-20">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-0">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`px-6 py-4 text-sm font-semibold tracking-wider transition-colors md:px-10 ${
                i === active
                  ? 'border-b-2 border-teal-600 text-teal-600'
                  : 'text-zinc-400 hover:text-teal-600'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="grid min-h-[80vh] md:grid-cols-2">
        {/* 좌: 비주얼 */}
        <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 p-12 md:p-20">
          <img
            src={product.image}
            alt={`${product.name} - ${product.tagline}`}
            width={600}
            height={500}
            loading="lazy"
            decoding="async"
            className="max-h-[400px] w-full object-contain"
          />
          <div className="absolute bottom-8 left-8 text-xs tracking-widest text-zinc-300 md:bottom-12 md:left-12">
            {product.id.toUpperCase()}
          </div>
        </div>

        {/* 우: 정보 */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-12 lg:px-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            {product.category}
          </p>
          <h3 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            {product.name}
          </h3>
          <p className="mt-4 text-xl leading-relaxed text-zinc-600">
            {product.tagline}
          </p>

          <div className="mt-8 space-y-4">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-3xl font-bold text-teal-600">{f.number}</span>
                <span className="pt-2 text-sm text-zinc-600">{f.label}</span>
              </div>
            ))}
          </div>

          <a
            href={product.href}
            className="mt-10 inline-flex items-center text-base font-semibold text-teal-600 transition-colors hover:text-teal-500 hover:underline"
          >
            자세히 보기 →
          </a>
        </div>
      </div>
    </section>
  );
}

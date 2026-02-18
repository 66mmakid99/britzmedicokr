import { useState } from 'react';

const products = [
  {
    id: 'torr-rf',
    name: 'TORR RF',
    category: 'FLAGSHIP RF DEVICE',
    tagline: 'Multi-wave RF 피부 미용 의료기기',
    features: [
      { number: '360°', label: '균일한 에너지 전달' },
      { number: '3', label: '복합 주파수 (1/2/4MHz)' },
      { number: 'FDA', label: '510(k) 승인 획득' },
    ],
    href: '/products/torr-rf',
  },
  {
    id: 'ulblanc',
    name: 'ULBLANC',
    category: 'PREMIUM SKINCARE',
    tagline: '프리미엄 RF 스킨케어 디바이스',
    features: [
      { number: 'RF+', label: 'LED 복합 케어' },
      { number: 'Home', label: '가정용 프리미엄' },
      { number: 'Safe', label: '안전 센서 탑재' },
    ],
    href: '/products/ulblanc',
  },
  {
    id: 'newchae',
    name: 'NEWCHAE',
    category: 'NEXT-GEN SOLUTION',
    tagline: '차세대 RF 피부 관리 솔루션',
    features: [
      { number: 'New', label: '차세대 RF 기술' },
      { number: 'Multi', label: '다기능 플랫폼' },
      { number: 'Smart', label: '스마트 제어 시스템' },
    ],
    href: '/products/newchae',
  },
  {
    id: 'lumino-wave',
    name: 'LUMINO WAVE',
    category: 'LED + RF HYBRID',
    tagline: 'LED + RF 복합 디바이스',
    features: [
      { number: 'LED', label: '광 치료 기술' },
      { number: 'RF', label: '고주파 에너지' },
      { number: 'Dual', label: '듀얼 모드 시스템' },
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
      <div className="sticky top-16 z-30 border-b border-slate-100 bg-white/90 backdrop-blur md:top-20">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-0">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`px-6 py-4 text-sm font-semibold tracking-wider transition-colors md:px-10 ${
                i === active
                  ? 'border-b-2 border-blue-700 text-blue-700'
                  : 'text-slate-400 hover:text-slate-600'
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
        <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-12 md:p-20">
          <span className="select-none text-[120px] font-black leading-none text-slate-100 md:text-[180px] lg:text-[200px]">
            {product.name.charAt(0)}
          </span>
          <div className="absolute bottom-8 left-8 text-xs tracking-widest text-slate-300 md:bottom-12 md:left-12">
            {product.id.toUpperCase()}
          </div>
        </div>

        {/* 우: 정보 */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-12 lg:px-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            {product.category}
          </p>
          <h3 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {product.name}
          </h3>
          <p className="mt-4 text-xl leading-relaxed text-slate-600">
            {product.tagline}
          </p>

          <div className="mt-8 space-y-4">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-3xl font-bold text-blue-600">{f.number}</span>
                <span className="pt-2 text-sm text-slate-600">{f.label}</span>
              </div>
            ))}
          </div>

          <a
            href={product.href}
            className="mt-10 inline-flex items-center text-base font-semibold text-blue-700 transition-colors hover:text-blue-900 hover:underline"
          >
            자세히 보기 →
          </a>
        </div>
      </div>
    </section>
  );
}

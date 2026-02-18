# BRITZMEDI 한국 홈페이지 (britzmedi.co.kr) — 전체 개발 스펙

> 이 문서는 Claude Code가 읽고 바로 개발에 들어갈 수 있도록 작성된 **전체 개발 명세서**입니다.
> 기존 britzmedi.com (영문 글로벌 사이트)과 동일한 기술 스택을 사용합니다.

---

## 0. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | BRITZMEDI 한국 홈페이지 리뉴얼 |
| 도메인 | www.britzmedi.co.kr |
| 목적 | 한국 시장 B2B 마케팅 + AI 검색(AEO/GEO) 최적화 |
| 기존 사이트 | britzmedi.co.kr (대행사 제작, 리뉴얼 대상) |
| 참고 사이트 | britzmedi.com (영문, 동일 스택으로 직접 구축 완료) |
| GitHub | 66mmakid99/britzmedicokr |

### 관련 도메인 구조
- `www.britzmedi.co.kr` → 한국 메인 사이트 (이 프로젝트)
- `admin.britzmedi.co.kr` → 통합 어드민 (추후)
- `factory.britzmedi.co.kr` → Content Factory (기존)
- `demo.britzmedi.co.kr` → 데모 관리 시스템 (기존)
- `www.britzmedi.com` → 영문 글로벌 사이트 (구축 완료)

---

## 1. 기술 스택

### 1.1 Core
| 기술 | 버전 | 용도 |
|------|------|------|
| **Astro** | 5.x | SSG 프레임워크 (정적 사이트 생성) |
| **React** | 19.x | 인터랙티브 컴포넌트 (Islands) |
| **Tailwind CSS** | 4.x | 스타일링 |
| **TypeScript** | 5.x | 타입 안전성 |

### 1.2 Backend / DB
| 기술 | 용도 |
|------|------|
| **Supabase** | 인증, DB, 리드관리, 블로그 CMS |
| **Cloudflare Workers** | API 엔드포인트, 서버리스 함수 |
| **Cloudflare D1** | 경량 데이터 (세션, 캐시) |
| **Cloudflare KV** | 키-값 캐시 |

### 1.3 인프라
| 기술 | 용도 |
|------|------|
| **Cloudflare Pages** | 호스팅 + CDN + SSL |
| **Cloudflare DNS** | DNS 관리 |
| **GitHub** | 소스 관리, CI/CD (Pages 자동 배포) |

### 1.4 외부 서비스
| 서비스 | 용도 |
|--------|------|
| **Claude API** | AI 챗봇 (한국어) |
| **EmailJS** 또는 **Resend** | 리드 알림 이메일 |
| **카카오톡 채널** | 채팅 상담 연동 (pf.kakao.com/_MdCLG) |
| **Google Analytics 4** | 웹 분석 |
| **Google Search Console** | 검색 인덱싱 관리 |
| **Naver Search Advisor** | 네이버 인덱싱 관리 |

---

## 2. 폴더 구조

```
britzmedicokr/
├── public/
│   ├── favicon.svg
│   ├── robots.txt              # AI 봇 크롤링 허용 설정
│   ├── sitemap-index.xml       # Astro 자동 생성
│   ├── images/
│   │   ├── logo/               # 로고 SVG, PNG
│   │   ├── products/           # 제품 이미지
│   │   │   ├── torr-rf/
│   │   │   ├── ulblanc/
│   │   │   ├── newchae/
│   │   │   └── lumino-wave/
│   │   ├── certifications/     # 인증서 이미지
│   │   ├── company/            # 회사, CEO 사진
│   │   └── og/                 # Open Graph 이미지
│   └── fonts/                  # Pretendard 웹폰트
│
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro    # 공통 레이아웃 (헤더, 푸터, 메타)
│   │   ├── ProductLayout.astro # 제품 페이지 전용 레이아웃
│   │   └── BlogLayout.astro    # 블로그 전용 레이아웃
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.astro        # 상단 네비게이션
│   │   │   ├── Footer.astro        # 하단 (인증배지, 링크)
│   │   │   ├── MobileNav.tsx       # 모바일 메뉴 (React)
│   │   │   ├── TrustBadge.astro    # 신뢰성 배지 (FDA/CE/ISO + 특허수 + 국가수)
│   │   │   ├── UpdateDate.astro    # 최종 업데이트 날짜 표시
│   │   │   ├── Breadcrumb.astro    # 빵크럼 네비게이션
│   │   │   ├── CTASection.astro    # CTA 영역 (상담신청/카탈로그/챗봇)
│   │   │   └── RelatedContent.astro # 관련 콘텐츠 링크 (3개+)
│   │   │
│   │   ├── aeo/
│   │   │   ├── TLDRBox.astro       # TL;DR 요약 박스 (3~5줄)
│   │   │   ├── FAQSection.astro    # FAQ 아코디언 (FAQPage Schema)
│   │   │   ├── CompareTable.astro  # 비교 테이블 컴포넌트
│   │   │   ├── SpecTable.astro     # 제품 스펙 테이블
│   │   │   ├── SchemaOrg.astro     # Schema.org JSON-LD 주입
│   │   │   └── AuthorInfo.astro    # 저자 정보 (블로그용)
│   │   │
│   │   ├── product/
│   │   │   ├── ProductHero.astro   # 제품 히어로 섹션
│   │   │   ├── TechSection.astro   # 핵심 기술 설명
│   │   │   ├── CertBadges.astro    # 해당 제품 인증 배지
│   │   │   ├── ApplicationAreas.astro # 적용 분야
│   │   │   └── ProductCTA.astro    # 제품별 CTA
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.astro   # 메인 히어로
│   │   │   ├── ProductShowcase.astro # 제품 쇼케이스 (4개)
│   │   │   ├── WhyBritzMedi.astro  # 왜 브리츠메디인가
│   │   │   ├── StatsCounter.tsx    # 숫자 카운터 (React, 애니메이션)
│   │   │   └── LatestNews.astro    # 최신 뉴스/블로그
│   │   │
│   │   ├── interactive/
│   │   │   ├── ChatBot.tsx         # AI 챗봇 위젯 (React)
│   │   │   ├── ContactForm.tsx     # 상담 신청 폼 (React)
│   │   │   ├── KakaoChat.astro     # 카카오톡 채팅 버튼
│   │   │   └── CookieConsent.tsx   # 쿠키 동의 배너 (React)
│   │   │
│   │   └── blog/
│   │       ├── BlogCard.astro      # 블로그 카드
│   │       ├── BlogList.astro      # 블로그 목록
│   │       └── TOC.tsx             # 목차 (Table of Contents, React)
│   │
│   ├── pages/
│   │   ├── index.astro             # 홈페이지
│   │   ├── about.astro             # 회사소개
│   │   ├── ceo.astro               # CEO 인사말
│   │   ├── way.astro               # 브리츠 WAY (비전/미션)
│   │   ├── rnd.astro               # R&D / 기술력
│   │   ├── contact.astro           # 연락처 / 오시는 길
│   │   │
│   │   ├── products/
│   │   │   ├── index.astro         # 제품 전체 목록
│   │   │   ├── torr-rf.astro       # TORR RF 상세
│   │   │   ├── ulblanc.astro       # ULBLANC 상세
│   │   │   ├── newchae.astro       # NEWCHAE 상세
│   │   │   └── lumino-wave.astro   # LUMINO WAVE 상세
│   │   │
│   │   ├── certifications/
│   │   │   └── index.astro         # 인증/특허 페이지
│   │   │
│   │   ├── blog/
│   │   │   ├── index.astro         # 블로그 목록
│   │   │   └── [slug].astro        # 블로그 상세 (동적 라우팅)
│   │   │
│   │   ├── news/
│   │   │   ├── index.astro         # 뉴스/공지 목록
│   │   │   └── [slug].astro        # 뉴스 상세
│   │   │
│   │   ├── support/
│   │   │   ├── partnership.astro   # 파트너십 문의
│   │   │   └── inquiry.astro       # 일반 문의
│   │   │
│   │   ├── privacy.astro           # 개인정보처리방침
│   │   ├── terms.astro             # 이용약관
│   │   └── 404.astro               # 404 에러 페이지
│   │
│   ├── content/                    # Astro Content Collections (정적 콘텐츠)
│   │   ├── config.ts               # 콘텐츠 스키마 정의
│   │   ├── products/               # 제품 데이터 (YAML/MDX)
│   │   │   ├── torr-rf.yaml
│   │   │   ├── ulblanc.yaml
│   │   │   ├── newchae.yaml
│   │   │   └── lumino-wave.yaml
│   │   ├── certifications/         # 인증 데이터
│   │   │   └── certifications.yaml
│   │   └── faq/                    # FAQ 데이터
│   │       ├── general.yaml
│   │       ├── torr-rf.yaml
│   │       ├── ulblanc.yaml
│   │       ├── newchae.yaml
│   │       └── lumino-wave.yaml
│   │
│   ├── data/                       # 정적 데이터
│   │   ├── navigation.ts           # 네비게이션 메뉴 구조
│   │   ├── company.ts              # 회사 기본 정보
│   │   └── seo.ts                  # 페이지별 SEO 메타데이터
│   │
│   ├── lib/                        # 유틸리티
│   │   ├── supabase.ts             # Supabase 클라이언트
│   │   ├── schema.ts               # Schema.org 생성 함수들
│   │   ├── seo.ts                  # SEO/AEO 유틸리티
│   │   └── utils.ts                # 공통 유틸리티
│   │
│   └── styles/
│       └── global.css              # 글로벌 스타일 (Tailwind + 커스텀)
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── wrangler.toml                   # Cloudflare Workers 설정
└── .env.example                    # 환경변수 템플릿
```

---

## 3. 설정 파일

### 3.1 package.json
```json
{
  "name": "britzmedicokr",
  "type": "module",
  "version": "1.0.0",
  "description": "BRITZMEDI 한국 홈페이지 - Astro 5 + React 19 + Tailwind 4",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check",
    "deploy": "astro build && wrangler pages deploy dist"
  },
  "dependencies": {
    "@astrojs/react": "^4.2.0",
    "@astrojs/sitemap": "^3.3.0",
    "@astrojs/tailwind": "^6.0.0",
    "@supabase/supabase-js": "^2.45.0",
    "astro": "^5.4.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0",
    "wrangler": "^3.99.0"
  }
}
```

### 3.2 astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.britzmedi.co.kr',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'ko',
        locales: { ko: 'ko-KR', en: 'en-US' }
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // 제품 페이지 우선순위 높임
        if (item.url.includes('/products/')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // 블로그 페이지
        if (item.url.includes('/blog/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // 홈
        if (item.url === 'https://www.britzmedi.co.kr/') {
          item.priority = 1.0;
        }
        return item;
      }
    })
  ],
  output: 'static',
  vite: {
    ssr: { noExternal: [] }
  }
});
```

### 3.3 .env.example
```bash
# Supabase
PUBLIC_SUPABASE_URL=https://xxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Claude API (챗봇)
CLAUDE_API_KEY=sk-ant-...

# EmailJS 또는 Resend
EMAILJS_SERVICE_ID=service_xxx
EMAILJS_TEMPLATE_ID=template_xxx
EMAILJS_PUBLIC_KEY=xxx

# Google Analytics
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Cloudflare
CF_ACCOUNT_ID=xxx
CF_API_TOKEN=xxx
```

---

## 4. 페이지별 상세 스펙

### 4.0 공통 규칙 (모든 페이지에 적용)

#### HTML 구조 규칙
- H1: 페이지당 **정확히 1개** (페이지 제목)
- H2: 주요 섹션 제목
- H3: 하위 섹션
- **절대 H1→H3 건너뛰기 금지** (H1→H2→H3 순서 반드시 지킴)

#### 첫 문장 규칙
- 모든 페이지의 **첫 50자 이내**에 해당 페이지의 핵심 정의를 배치
- 예: "토르 RF는 브리츠메디가 개발한 Multi-wave RF 피부 미용 의료기기입니다."

#### 공통 컴포넌트
모든 페이지에 포함되어야 하는 것:
1. **Breadcrumb** — 경로 표시 (Schema: BreadcrumbList)
2. **TrustBadge** — 푸터 위 신뢰성 배지 (FDA/CE/ISO 인증마크, 특허 수, 파트너 국가 수)
3. **UpdateDate** — 최종 업데이트 날짜 표시 ("최종 업데이트: 2026년 X월 X일")
4. **RelatedContent** — 관련 페이지 3개 이상 내부 링크
5. **CTASection** — CTA 영역 (상담신청, 카탈로그, 챗봇 중 택)
6. **SchemaOrg** — 페이지 유형별 JSON-LD

#### 메타 태그 규칙
```html
<title>{키워드 포함 60자 이내}</title>
<meta name="description" content="{핵심 답변 포함 160자 이내}" />
<meta property="og:title" content="{제목}" />
<meta property="og:description" content="{설명}" />
<meta property="og:image" content="/images/og/{page-name}.jpg" />
<meta property="og:url" content="https://www.britzmedi.co.kr/{path}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="ko_KR" />
<link rel="canonical" href="https://www.britzmedi.co.kr/{path}" />
<link rel="alternate" hreflang="ko" href="https://www.britzmedi.co.kr/{path}" />
<link rel="alternate" hreflang="en" href="https://www.britzmedi.com/{en-path}" />
```

---

### 4.1 홈페이지 (`/`)

**H1:** "브리츠메디 — 한국의 RF 피부 미용 의료기기 전문 제조사"

**첫 문장:** "브리츠메디(BRITZMEDI)는 토로이달 코일 기반 Multi-wave RF 기술로 피부 미용 의료기기를 개발·제조하는 한국 기업입니다."

**섹션 구성:**
1. **Hero** — 핵심 메시지 + CTA (상담신청, 제품 보기)
2. **제품 쇼케이스** — 4개 제품 카드 (TORR RF, ULBLANC, NEWCHAE, LUMINO WAVE)
3. **왜 브리츠메디인가** — 3~4가지 차별점 (토로이달 기술, 인증, 글로벌 네트워크)
4. **숫자로 보는 브리츠메디** — 카운터 애니메이션 (FDA/CE/ISO 인증수, 특허수, 파트너 국가수, 시술건수)
5. **최신 뉴스** — 블로그/뉴스 최근 3개
6. **CTA** — 상담신청 폼 or 카카오톡

**Schema.org:**
```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  "name": "BRITZMEDI",
  "alternateName": "브리츠메디",
  "url": "https://www.britzmedi.co.kr",
  "logo": "https://www.britzmedi.co.kr/images/logo/logo.svg",
  "description": "토로이달 코일 기반 Multi-wave RF 피부 미용 의료기기 전문 제조사",
  "foundingDate": "2019",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "서울",
    "addressRegion": "서울특별시",
    "addressCountry": "KR"
  },
  "sameAs": [
    "https://www.britzmedi.com",
    "https://pf.kakao.com/_MdCLG"
  ],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "FDA 510(k)" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "CE Mark" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "ISO 13485" }
  ]
}
```

---

### 4.2 회사소개 (`/about`)

**H1:** "브리츠메디 — 혁신적인 RF 의료기기를 만드는 사람들"

**첫 문장:** "브리츠메디는 2019년 설립된 한국의 의료기기 전문 기업으로, 독자적인 토로이달 코일 RF 기술을 바탕으로 피부 미용 의료기기를 개발합니다."

**섹션:**
1. TL;DR 요약 박스
2. 회사 개요 (설립, 비전, 미션)
3. 연혁 타임라인
4. 주요 성과 (숫자)
5. 글로벌 네트워크 지도
6. FAQ 3~5개 ("브리츠메디는 어떤 회사인가요?", "어디에서 제품을 구매할 수 있나요?" 등)

**Schema:** Organization + PostalAddress

---

### 4.3 CEO 인사말 (`/ceo`)

**H1:** "CEO 인사말 — 더 나은 미용 의료기기를 향한 여정"

**섹션:**
1. CEO 사진 + 이름/직함
2. 인사말 본문
3. CEO 비전/철학

**Schema:** Organization (CEO as `founder`)

---

### 4.4 브리츠 WAY (`/way`)

**H1:** "브리츠 WAY — 우리가 일하는 방식"

**섹션:**
1. TL;DR
2. 핵심 가치 (3~4개)
3. 기술 철학
4. 품질 철학

---

### 4.5 R&D / 기술력 (`/rnd`)

**H1:** "브리츠메디 R&D — 토로이달 RF 기술의 혁신"

**첫 문장:** "브리츠메디 R&D센터는 토로이달 코일 기반의 Multi-wave RF 기술을 연구·개발하며, 기존 모노폴라/바이폴라 방식 대비 균일한 에너지 전달을 구현합니다."

**섹션:**
1. TL;DR
2. 핵심 기술 설명 (토로이달 코일 원리)
3. **비교 테이블** (토로이달 vs 모노폴라 vs 바이폴라) ← AEO 핵심!
4. 특허 목록
5. 임상 데이터 요약
6. FAQ 3~5개 ("토로이달 코일이란?", "기존 RF와 뭐가 다른가요?")

**Schema:** Organization + `knowsAbout`

---

### 4.6 제품 목록 (`/products`)

**H1:** "브리츠메디 제품 라인업 — RF 피부 미용 의료기기"

**섹션:**
1. TL;DR ("브리츠메디는 4가지 RF 기반 피부 미용 의료기기를 제조합니다")
2. 4개 제품 카드 (이미지, 이름, 한줄 설명, 주요 스펙, 링크)
3. 제품 비교 테이블 (4개 제품 스펙 한눈에)
4. FAQ ("어떤 제품이 얼굴 리프팅에 적합한가요?", "각 제품의 차이는?" 등)

---

### 4.7 제품 상세 — TORR RF (`/products/torr-rf`)

**H1:** "토르 RF (TORR RF) — Multi-wave RF 피부 미용 의료기기"

**첫 문장:** "토르 RF(TORR RF)는 브리츠메디가 개발한 토로이달 코일 기반 Multi-wave RF 피부 미용 의료기기로, 균일한 에너지 전달로 얼굴 리프팅과 피부 탄력 개선에 사용됩니다."

**8개 섹션 (순서 반드시 지킬 것):**

| # | 섹션 | 콘텐츠 | AEO 역할 |
|---|------|--------|----------|
| 1 | **TL;DR** | 3~5줄 요약 박스 | AI가 답변 시 첫 번째 참조 |
| 2 | **핵심 기술** | 토로이달 vs 모노폴라/바이폴라 비교 | 비교 콘텐츠 = AI 인용의 핵심 |
| 3 | **스펙 테이블** | 주파수, 출력, 크기, 무게 등 | AI가 구조화된 데이터 쉽게 추출 |
| 4 | **인증 배지** | FDA, CE, ISO + 인증번호/취득일 | 신뢰성 신호 |
| 5 | **적용 분야** | 얼굴 리프팅, 피부 탄력, 체형 관리 | 구체적 질문 대응 |
| 6 | **FAQ** | 5~8개 (FAQPage Schema) | AI가 가장 쉽게 인용하는 형식 |
| 7 | **CTA** | 상담신청 / 카탈로그 / 챗봇 | 리드 전환 |
| 8 | **관련 콘텐츠** | 관련 블로그 3개 + 다른 제품 링크 | 토픽 클러스터 |

**Schema.org:**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalDevice",
  "name": "TORR RF",
  "alternateName": "토르 RF",
  "description": "토로이달 코일 기반 Multi-wave RF 피부 미용 의료기기",
  "manufacturer": {
    "@type": "Organization",
    "name": "BRITZMEDI"
  },
  "medicalSpecialty": "Dermatology",
  "relevantSpecialty": "Aesthetic Medicine"
}
```

**+ FAQPage Schema** (별도 블록):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "토르 RF란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "토르 RF는 브리츠메디가 개발한..."
      }
    }
  ]
}
```

---

### 4.8 제품 상세 — ULBLANC (`/products/ulblanc`)
- 동일 8섹션 구조
- H1: "울블랑 (ULBLANC) — 프리미엄 RF 스킨케어 디바이스"
- MedicalDevice + FAQPage Schema

### 4.9 제품 상세 — NEWCHAE (`/products/newchae`)
- 동일 8섹션 구조
- H1: "뉴채 (NEWCHAE) — 차세대 RF 피부 관리 솔루션"
- MedicalDevice + FAQPage Schema

### 4.10 제품 상세 — LUMINO WAVE (`/products/lumino-wave`)
- 동일 8섹션 구조
- H1: "루미노 웨이브 (LUMINO WAVE) — LED + RF 복합 디바이스"
- MedicalDevice + FAQPage Schema

---

### 4.11 인증/특허 (`/certifications`)

**H1:** "브리츠메디 인증 및 특허 — 글로벌 품질 인증 현황"

**첫 문장:** "브리츠메디는 FDA 510(k), CE Mark, ISO 13485 등 글로벌 의료기기 인증을 획득하였으며, 다수의 RF 기술 관련 특허를 보유하고 있습니다."

**섹션:**
1. TL;DR
2. 인증 목록 (인증명, 인증번호, 취득일, 인증기관, 이미지)
3. 특허 목록 (특허명, 특허번호, 등록일)
4. 품질관리 시스템 설명
5. FAQ ("FDA 승인을 받았나요?", "CE 마크란?")

**Schema:** GovernmentService + Certification

---

### 4.12 블로그 (`/blog`, `/blog/[slug]`)

**목록 페이지:**
- 카드 형태로 블로그 글 목록
- 카테고리 필터 (필라별)
- 페이지네이션

**상세 페이지 HTML 구조:**
```
H1: 질문형 제목 (예: "RF 리프팅 장비, 어떤 방식이 가장 효과적일까?")
├─ TL;DR 박스 (첫 3줄에 핵심 답변)
├─ H2: 섹션 제목 (각 섹션도 질문형)
│   ├─ 본문
│   ├─ 비교 테이블 (반드시 1개 이상)
│   └─ H3: 하위 섹션
├─ 저자 정보 (브리츠메디 연구소 / 테크니컬 팀)
├─ FAQ 2~3개 (FAQPage Schema)
└─ 관련 제품 + 관련 블로그 링크 (토픽 클러스터)
```

**블로그 필라(주제군) 4개:**

| 필라 | 예시 글 제목 | AI 타겟 질문 |
|------|-------------|-------------|
| **RF 기술 가이드** | RF 리프팅 장비 비교 가이드, 토로이달 vs 모노폴라 차이점 | "RF 장비 비교해줘", "RF 리프팅 원리가 뭐야?" |
| **시술 정보** | 피부 리프팅 시술 종류 정리, RF 시술 후 관리 방법 | "피부 리프팅 방법 추천", "RF 시술 후 관리" |
| **임상 데이터** | RF 장비 임상 연구 결과, RF 시술 만족도 조사 | "RF 장비 임상 결과", "RF 시술 효과 어때?" |
| **회사 소식** | 학회 참가 보도자료, 해외 파트너십, FDA 승인 | "브리츠메디 어떤 회사?", "브리츠메디 최신 소식" |

**Schema:** Article + FAQPage (각 블로그 글마다)

---

### 4.13 뉴스/공지 (`/news`)
- 보도자료, 학회참가, 회사 소식
- 간단한 카드 목록 + 상세 페이지
- Schema: NewsArticle

### 4.14 파트너십 문의 (`/support/partnership`)
- 해외/국내 파트너십 문의 폼
- Supabase에 리드 저장

### 4.15 일반 문의 (`/support/inquiry`)
- 일반 문의 폼
- Supabase에 리드 저장

### 4.16 연락처 (`/contact`)
- 회사 주소, 전화, 이메일
- 카카오맵 또는 네이버 지도 임베드
- Schema: Organization + PostalAddress

### 4.17 개인정보처리방침 (`/privacy`)
- 한국 개인정보보호법 준수
- 필수 고지 사항 전체 포함

### 4.18 이용약관 (`/terms`)
- 서비스 이용약관

### 4.19 404 에러 (`/404`)
- 친근한 에러 메시지
- 메인 페이지, 제품 페이지 링크

---

## 5. AEO/GEO 기술 인프라

### 5.1 robots.txt
```
# 검색엔진 봇
User-agent: Googlebot
Allow: /

User-agent: Yeti
Allow: /

# AI 봇 — 반드시 허용!
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

# 기본
User-agent: *
Allow: /

Sitemap: https://www.britzmedi.co.kr/sitemap-index.xml
```

### 5.2 사이트맵
- Astro `@astrojs/sitemap` 플러그인 사용
- `<lastmod>` 자동 생성
- `<changefreq>`: 블로그 weekly, 제품 monthly
- `<priority>`: 홈(1.0) > 제품(0.9) > 블로그(0.8) > 기타(0.5)
- Google Search Console + Naver Search Advisor 동시 제출

### 5.3 hreflang 설정
```html
<!-- 모든 페이지에 포함 -->
<link rel="alternate" hreflang="ko" href="https://www.britzmedi.co.kr/{path}" />
<link rel="alternate" hreflang="en" href="https://www.britzmedi.com/{en-path}" />
<link rel="alternate" hreflang="x-default" href="https://www.britzmedi.com/{en-path}" />
```

### 5.4 Core Web Vitals 목표
| 지표 | 목표 | 달성 방법 |
|------|------|----------|
| LCP | < 2.5초 | Astro SSG + Cloudflare CDN + 이미지 최적화 (WebP/AVIF) |
| INP | < 200ms | React Islands 최소화 + 정적 우선 렌더링 |
| CLS | < 0.1 | 이미지 크기 명시 (width/height) + 폰트 프리로드 |
| Lighthouse | 4영역 90+ | Performance, Accessibility, Best Practices, SEO |

### 5.5 이미지 최적화
- Astro `<Image />` 컴포넌트 사용 (자동 WebP 변환)
- 제품 이미지: 원본 + 480w, 768w, 1200w 리사이징
- OG 이미지: 1200x630px
- `loading="lazy"` 기본 (히어로는 `loading="eager"`)
- 모든 이미지에 `width`, `height`, `alt` 필수

---

## 6. 기존 URL 리다이렉트 (301)

기존 britzmedi.co.kr 사이트의 URL을 새 URL로 301 리다이렉트합니다.
Cloudflare Pages의 `_redirects` 파일 사용:

```
# _redirects (public/ 폴더에 배치)
/company/intro    /about            301
/company/ceo      /ceo              301
/company/way      /way              301
/company/tech     /rnd              301
/company/contact  /contact          301
/medical/torr     /products/torr-rf 301
/medical/ulblanc  /products/ulblanc 301
/cosmetic/newchae /products/newchae 301
/community/news   /news             301
/cs/partnership   /support/partnership 301
/cs/inquery       /support/inquiry  301
```

---

## 7. 컴포넌트 상세 스펙

### 7.1 TLDRBox.astro
```
Props:
  - content: string (3~5줄 요약 텍스트)
  - title?: string (기본값: "한눈에 보기")

디자인:
  - 배경: 연한 파란색 (#EBF5FF)
  - 왼쪽 파란 테두리 4px
  - 아이콘: 💡 또는 커스텀 아이콘
  - 폰트: 본문보다 약간 크게 (18px)
  - 모바일: 전체 너비, 패딩 조정
```

### 7.2 FAQSection.astro
```
Props:
  - items: Array<{ question: string, answer: string }>
  - schemaEnabled: boolean (기본값: true)

기능:
  - 아코디언 (클릭으로 열기/닫기)
  - 처음 1개는 기본으로 열린 상태
  - FAQPage Schema.org JSON-LD 자동 생성
  - 순수 HTML/CSS 아코디언 (JS 최소화)
```

### 7.3 CompareTable.astro
```
Props:
  - headers: string[]
  - rows: Array<{ label: string, values: string[] }>
  - highlight?: number (강조할 컬럼 인덱스)

디자인:
  - 반응형: 모바일에서 가로 스크롤 or 카드 형태로 변환
  - 강조 컬럼: 배경색 + "추천" 배지
  - 헤더: 고정 (sticky)
```

### 7.4 SpecTable.astro
```
Props:
  - specs: Array<{ label: string, value: string, unit?: string }>

디자인:
  - 2컬럼 테이블 (항목 | 값)
  - 교대 배경색 (줄무늬)
  - 모바일 최적화
```

### 7.5 SchemaOrg.astro
```
Props:
  - type: 'Organization' | 'MedicalDevice' | 'FAQPage' | 'Article' | 'BreadcrumbList' | 'NewsArticle'
  - data: object (스키마 데이터)

기능:
  - <script type="application/ld+json"> 출력
  - 여러 스키마 중첩 가능 (제품 = MedicalDevice + FAQPage)
```

### 7.6 ChatBot.tsx (React)
```
기능:
  - 플로팅 버튼 (우하단)
  - 클릭 시 채팅창 열림
  - Claude API로 한국어 대화
  - 시스템 프롬프트: 브리츠메디 제품 정보, FAQ, 영업 안내
  - 대화 내역 로컬 저장 (세션)
  - 상담 신청 자동 연결

상태 관리: React useState/useReducer
API: /api/chat (Cloudflare Worker)
```

### 7.7 ContactForm.tsx (React)
```
필드:
  - 회사명 (text, 필수)
  - 담당자명 (text, 필수)
  - 직책 (text)
  - 이메일 (email, 필수)
  - 전화번호 (tel, 필수)
  - 관심 제품 (select: TORR RF / ULBLANC / NEWCHAE / LUMINO WAVE / 기타)
  - 문의 내용 (textarea)

기능:
  - Supabase에 리드 저장
  - 이메일 알림 발송 (영업팀)
  - 성공/실패 토스트 메시지
  - 폼 유효성 검사
```

---

## 8. 데이터 모델 (Supabase)

### 8.1 leads 테이블
```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  position TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  interested_product TEXT,
  message TEXT,
  source TEXT DEFAULT 'website',  -- website, chatbot, kakao, partnership
  status TEXT DEFAULT 'new',       -- new, contacted, qualified, closed
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 8.2 chat_logs 테이블
```sql
CREATE TABLE chat_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  role TEXT NOT NULL,        -- user, assistant
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 8.3 blog_posts 테이블
```sql
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,     -- rf-guide, treatment, clinical, news
  content TEXT NOT NULL,       -- Markdown
  excerpt TEXT,
  author TEXT DEFAULT '브리츠메디 연구소',
  cover_image TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 8.4 page_views 테이블 (AEO 모니터링용)
```sql
CREATE TABLE page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 9. 디자인 가이드

### 9.1 색상
| 용도 | 색상 | HEX |
|------|------|-----|
| Primary (메인) | 딥 네이비 | #1A1A2E |
| Secondary | 블루 | #2D4A7A |
| Accent | 골드 | #C4A265 |
| Background | 화이트 | #FFFFFF |
| Surface | 라이트 그레이 | #F8F9FA |
| Text (본문) | 다크 그레이 | #333333 |
| Text (보조) | 미디엄 그레이 | #666666 |
| Success | 그린 | #28A745 |
| Error | 레드 | #DC3545 |
| AEO TL;DR 배경 | 라이트 블루 | #EBF5FF |
| AEO TL;DR 테두리 | 블루 | #3B82F6 |

### 9.2 타이포그래피
| 용도 | 폰트 | 사이즈 | 굵기 |
|------|------|--------|------|
| H1 | Pretendard | 36px (모바일 28px) | Bold (700) |
| H2 | Pretendard | 28px (모바일 24px) | Bold (700) |
| H3 | Pretendard | 22px (모바일 20px) | SemiBold (600) |
| 본문 | Pretendard | 16px | Regular (400) |
| 작은 텍스트 | Pretendard | 14px | Regular (400) |
| 영문 보조 | Inter | 가변 | 가변 |

### 9.3 반응형 브레이크포인트
| 이름 | 너비 | 용도 |
|------|------|------|
| Mobile | ~767px | 스마트폰 |
| Tablet | 768~1023px | 태블릿 |
| Desktop | 1024~1279px | 데스크톱 |
| Wide | 1280px~ | 와이드 스크린 |

### 9.4 레이아웃
- 최대 너비: 1280px (컨텐츠 영역)
- 좌우 패딩: 16px (모바일), 32px (태블릿), 0 (데스크톱, 센터 정렬)
- 섹션 간 간격: 80px (데스크톱), 48px (모바일)

---

## 10. 개발 로드맵 (10주)

### P0: 선행작업 (개발 시작 전)
- [ ] Cloudflare 계정 세팅 + britzmedi.co.kr DNS 이전
- [ ] GitHub 레포 생성 (`britzmedicokr`)
- [ ] Supabase 프로젝트 생성
- [ ] 환경변수 세팅 (.env)
- [ ] 도메인 서브도메인 DNS 설정 (admin, factory, demo)

### P1: 기본 페이지 + AEO 뼈대 (1~2주)
- [ ] Astro 프로젝트 초기화 (astro create)
- [ ] Tailwind 4 + React 19 + TypeScript 설정
- [ ] Pretendard 폰트 설치
- [ ] BaseLayout.astro (헤더, 푸터, 메타태그)
- [ ] 공통 컴포넌트: Header, Footer, TrustBadge, UpdateDate, Breadcrumb
- [ ] AEO 컴포넌트: TLDRBox, SchemaOrg, FAQSection
- [ ] 홈페이지 (`/`)
- [ ] 회사소개 5개 페이지 (`/about`, `/ceo`, `/way`, `/rnd`, `/contact`)
- [ ] robots.txt (6개 AI 봇 Allow)
- [ ] sitemap 설정
- [ ] Organization Schema
- [ ] hreflang 설정 (ko + en)
- [ ] OG 태그 전체 페이지
- [ ] Cloudflare Pages 배포 연결

**P1 AEO 체크포인트:**
- ✓ robots.txt 6개 AI 봇 Allow
- ✓ Organization Schema 적용
- ✓ hreflang 설정 (ko + en)
- ✓ Canonical URL 전체
- ✓ OG 태그 전체
- ✓ 업데이트 날짜 표시
- ✓ Lighthouse 테스트 실행

### P2: 제품 4개 + AEO 핵심 (3~4주)
- [ ] ProductLayout.astro (제품 전용 레이아웃)
- [ ] 제품 컴포넌트: ProductHero, TechSection, CertBadges, ApplicationAreas
- [ ] AEO 컴포넌트: CompareTable, SpecTable
- [ ] 제품 목록 (`/products`)
- [ ] TORR RF 상세 (`/products/torr-rf`) — 8섹션 전체
- [ ] ULBLANC 상세 (`/products/ulblanc`)
- [ ] NEWCHAE 상세 (`/products/newchae`)
- [ ] LUMINO WAVE 상세 (`/products/lumino-wave`)
- [ ] 인증/특허 페이지 (`/certifications`)
- [ ] 제품별 FAQ 5~8개 + FAQPage Schema
- [ ] 제품별 TL;DR
- [ ] MedicalDevice Schema 4개 제품
- [ ] 비교 컴포넌트 (토로이달 vs 모노/바이)
- [ ] 개인정보처리방침, 이용약관 페이지

**P2 AEO 체크포인트:**
- ✓ MedicalDevice Schema 4개 제품
- ✓ FAQPage Schema 4개 제품
- ✓ TL;DR 모든 제품 페이지
- ✓ 스펙 테이블 구조화
- ✓ 비교 컴포넌트 1개 이상
- ✓ Certification Schema

### P3: 기능 + 인터랙티브 (5~6주)
- [ ] Supabase 연동 (인증, DB)
- [ ] ContactForm.tsx (상담 신청 폼)
- [ ] ChatBot.tsx (Claude API 챗봇)
- [ ] 카카오톡 채널 연동 (KakaoChat.astro)
- [ ] 리드 저장 API (Cloudflare Worker → Supabase)
- [ ] 챗봇 API (Cloudflare Worker → Claude API)
- [ ] 이메일 알림 연동
- [ ] 파트너십 문의 페이지
- [ ] 일반 문의 페이지
- [ ] 쿠키 동의 배너
- [ ] 404 페이지

**P3 체크포인트:**
- ✓ 리드 폼 → Supabase 저장 동작 확인
- ✓ 챗봇 한국어 대화 동작 확인
- ✓ 카카오톡 버튼 동작 확인

### P4: 콘텐츠 + 검색엔진 (7~8주)
- [ ] 블로그 시스템 구축 (목록 + 상세)
- [ ] 뉴스 시스템 구축
- [ ] BlogLayout.astro
- [ ] Content Factory에서 블로그 콘텐츠 3~5개 생성
- [ ] 필라별 토픽 클러스터 구축 (글 간 상호 링크)
- [ ] Article Schema 모든 블로그
- [ ] Google Search Console 등록 + sitemap 제출
- [ ] Naver Search Advisor 등록 + sitemap 제출
- [ ] GA4 연동
- [ ] Lighthouse 90+ 최적화
- [ ] 기존 URL 리다이렉트 (`_redirects` 파일)

**P4 AEO 체크포인트:**
- ✓ Article Schema 모든 블로그
- ✓ 필라별 3개 이상 글 (클러스터)
- ✓ 글간 상호 링크 완성
- ✓ Lighthouse 90+ 확인
- ✓ AI 봇 크롤링 확인 (로그)

### P5: QA + 런칭 (9~10주)
- [ ] 전체 페이지 크로스 브라우저 테스트
- [ ] 모바일 반응형 전체 테스트
- [ ] 전체 AEO 점수 측정 (80+ 목표)
- [ ] AI 멘션 테스트 (ChatGPT, Perplexity, Claude, Gemini)
- [ ] 성능 최적화 (이미지, 번들 크기)
- [ ] 도메인 전환 (대행사 → Cloudflare)
- [ ] 기존 URL 301 리다이렉트 확인
- [ ] 공식 런칭
- [ ] 인덱싱 모니터링

**P5 성공 지표:**
- ✓ 전체 AEO 점수 80+
- ✓ Lighthouse 4영역 90+
- ✓ Schema 적용률 100%
- ✓ AI 멘션: 4개 AI 중 1개 이상에서 '브리츠메디' 언급

---

## 11. AI 멘션 테스트 질문 (P5에서 검증)

다음 질문들을 ChatGPT, Perplexity, Claude, Gemini에 넣어서 브리츠메디가 언급되는지 확인:

1. "한국 RF 피부 미용 의료기기 제조사 추천해줘"
2. "브리츠메디 어떤 회사야? 제품 알려줘"
3. "토르RF랑 써마지 차이점이 뭐야?"
4. "얼굴 리프팅 RF 장비 비교해줘"
5. "FDA 승인받은 한국 RF 의료기기 알려줘"

---

## 12. Claude Code 사용 가이드

### 프로젝트 시작
```bash
# 1. 레포 클론
git clone https://github.com/66mmakid99/britzmedicokr.git
cd britzmedicokr

# 2. Claude Code 실행
claude

# 3. 첫 대화
너는 지금부터 BRITZMEDI 한국 홈페이지를 바이브코딩으로 개발할거야.

docs/DEV_SPEC.md 파일을 먼저 읽어줘. 이게 전체 개발 스펙이야.

이 프로젝트의 기술 스택은:
- Astro 5 + React 19 + Tailwind CSS 4 + TypeScript
- DB: Supabase
- 배포: Cloudflare Pages
- 챗봇: Claude API

개발 스펙을 다 읽으면, P1부터 시작하자.
먼저 프로젝트 초기 세팅(패키지 설치, 폴더 구조, 설정 파일)을 해줘.
```

### Phase별 요청 예시

**P1:**
```
BaseLayout.astro를 만들어줘.
- Pretendard 폰트 로드
- 공통 메타태그 (title, description, OG, canonical, hreflang)
- Header, Footer 컴포넌트 포함
- SchemaOrg 컴포넌트 슬롯

그 다음 Header.astro — 반응형 네비게이션.
메뉴: 홈, 회사소개(드롭다운: 기업소개/CEO/WAY/R&D), 제품(드롭다운: 4개 제품), 인증, 블로그, 문의
```

**P2:**
```
TORR RF 제품 상세 페이지를 만들어줘.
DEV_SPEC.md의 4.7 섹션 참고해서 8개 섹션 구조 그대로.
TL;DR → 핵심 기술 → 스펙 테이블 → 인증 배지 → 적용 분야 → FAQ → CTA → 관련 콘텐츠
Schema.org는 MedicalDevice + FAQPage 둘 다.
```

**P3:**
```
Supabase 연동하자.
1. leads 테이블 만들어줘 (DEV_SPEC.md 8.1 참고)
2. ContactForm.tsx — 리드 수집 폼 만들어줘
3. 폼 제출하면 Supabase에 저장 + 이메일 알림
```

### 주의사항
- **한번에 너무 많이 시키지 말 것** — Phase별, 기능별로 나눠서 요청
- **에러가 나면 그대로 복붙** — Claude가 수정해줌
- **중간중간 커밋** — "지금까지 작업한 거 커밋해줘"
- **빌드 테스트** — "빌드해서 에러 없는지 확인해줘"
- **Lighthouse 확인** — P1 끝나면 바로 Lighthouse 테스트

---

## 13. 참고 자료

- **기존 영문 사이트:** https://www.britzmedi.com (동일 스택)
- **GitHub (영문):** https://github.com/66mmakid99/britzmedi-homepage-only-en
- **카카오톡 채널:** https://pf.kakao.com/_MdCLG
- **v3 기획서:** BRITZMEDI_통합관리시스템_기획서_v3_AEO_GEO.docx

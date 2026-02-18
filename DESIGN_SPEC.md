지금부터 전체 사이트 디자인 업그레이드 + 남은 이슈를 한번에 처리해줘.
현재 24개 페이지의 구조는 유지하면서, 2026년 프리미엄 의료기기 B2B 사이트 수준으로 디자인을 입혀.

## 디자인 레퍼런스: https://apr-in.com/ (에이피알)
한국 뷰티테크/의료기기 상장기업 사이트. 우리도 이 수준의 비주얼 임팩트를 목표로 해.

### APR 사이트에서 가져올 핵심 디자인 요소:
1. **풀스크린 히어로** — 화면 가득 채우는 비주얼 (min-h-screen). 비디오 대신 CSS 그래디언트 + 애니메이션으로 임팩트 만들기
2. **비주얼 > 텍스트** — 텍스트는 최소화, 큰 타이포 + 여백으로 고급스러움 연출
3. **탭 전환 쇼케이스** — 제품/솔루션을 탭으로 전환하면서 큰 비주얼이 바뀌는 방식
4. **대형 숫자 강조** — 매출/인증/파트너 수를 화면 가득 큰 숫자로 (text-6xl ~ text-8xl)
5. **풀와이드 섹션** — 컨테이너 제한 없이 화면 폭 100% 사용하는 섹션들
6. **시네마틱 다크 섹션** — 다크 배경 위에 밝은 텍스트, 고급스러운 느낌
7. **뉴스룸 스타일** — 깔끔한 리스트형 뉴스 (날짜 + 카테고리 태그 + 제목)
8. **부드러운 전환** — 섹션 간 자연스러운 스크롤 애니메이션
9. **브랜드 로고 바** — 하단에 관련 브랜드/파트너 로고 나열
10. **미니멀 Footer** — 깔끔하고 정돈된 Footer

⚠️ 중요 규칙:
1. 기존 AEO 구조(H1/H2/H3, Schema.org, TLDRBox, FAQ 등)는 절대 건드리지 마
2. 작업 단위별로 npm run build 해서 에러 확인 → 에러 있으면 즉시 수정
3. 전체 완료 후 git commit + git push
4. Tailwind CSS 유틸리티 클래스로만 스타일링 (커스텀 CSS 최소화)
5. 모바일 퍼스트 반응형 — 모바일에서도 예뻐야 해
6. 이미지 없이도 고급스러워 보여야 함 — CSS 그래디언트, 도형, 블러 효과, 큰 타이포로 비주얼 임팩트 만들기
7. KakaoChat 컴포넌트 완전 제거 — KakaoChat.astro 파일 삭제, BaseLayout 등 모든 페이지에서 KakaoChat import/사용 제거. 플로팅 버튼은 ChatBot 하나만 남기기
8. [최우선] 이모지(emoji) 절대 금지 — 사이트 전체 어디에도 이모지를 쓰지 마. 기존 코드에 있는 이모지도 전부 제거해. 아이콘이 필요하면 인라인 SVG를 직접 만들어서 써 (Heroicons 스타일, stroke-width 1.5~2, 24x24, currentColor). 이모지는 아마추어 사이트 느낌을 줌

---

## STEP 1: 폰트 + 기본 리소스 세팅

### 폰트
- Pretendard 웹폰트: CDN 사용 (파일 다운로드 대신)
- BaseLayout.astro의 <head>에 추가:
```html
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
```
- 영문 보조: Inter (Google Fonts CDN)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
- font-family 설정: `'Pretendard Variable', 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif`

### Favicon
- public/favicon.svg 생성: 심플한 "B" 로고 (네이비 #1A1A2E 배경 + 화이트 텍스트)

### OG 이미지
- OG 이미지는 일단 스킵 (나중에 실제 이미지로 교체)
- 메타태그에서 OG 이미지 경로가 404 나지 않게 조건부 렌더링 처리

→ npm run build 확인

---

## STEP 2: 글로벌 디자인 시스템

### 컬러 시스템
```
Primary: #0F172A (슬레이트 900 — 메인 텍스트, 헤더 배경)
Secondary: #1E40AF (블루 800 — 액센트, 링크, 버튼)
Accent: #3B82F6 (블루 500 — 호버, 하이라이트)
Gold: #D4A853 (프리미엄 골드 — 배지, 강조 포인트)
Surface: #F8FAFC (슬레이트 50 — 섹션 배경 교대)
White: #FFFFFF
Dark Surface: #0F172A (다크 섹션 배경)
Text Primary: #0F172A
Text Secondary: #475569 (슬레이트 600)
Text Muted: #94A3B8 (슬레이트 400)
Border: #E2E8F0 (슬레이트 200)
Success: #10B981
Error: #EF4444
```

### 디자인 원칙 (2026 프리미엄 의료기기 B2B 트렌드)
1. **클린 & 미니멀** — 충분한 여백, 깔끔한 라인, 정보 밀도 낮게
2. **다크 히어로 + 라이트 바디** — 히어로/헤더는 다크, 본문은 라이트
3. **서틀 그래디언트** — 배경에 은은한 블루→네이비 그래디언트 포인트
4. **카드 기반 레이아웃** — 둥근 모서리(rounded-2xl), 서틀 그림자(shadow-sm), 호버 시 살짝 떠오름
5. **타이포 계층 확실** — H1은 크고 임팩트, 본문은 편안한 크기
6. **CTA 돋보이게** — 블루 배경 + 화이트 텍스트, 둥근 버튼, 호버 애니메이션
7. **인증 배지는 골드로** — FDA/CE/ISO 배지에 골드 색상으로 프리미엄 느낌
8. **마이크로 애니메이션** — 스크롤 시 페이드인, 호버 시 부드러운 전환 (CSS transition만, JS 없이)

### 타이포그래피
```
H1: text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight
H2: text-3xl md:text-4xl font-bold tracking-tight
H3: text-xl md:text-2xl font-semibold
본문: text-base md:text-lg leading-relaxed text-slate-600
작은텍스트: text-sm text-slate-500
```

### 공통 레이아웃
```
섹션 컨테이너: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
섹션 간격: py-16 md:py-24 (라이트), py-20 md:py-28 (다크 히어로)
섹션 배경 교대: 홀수 white, 짝수 bg-slate-50
카드: bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300
버튼 Primary: bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg
버튼 Secondary: bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300
버튼 Gold: bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300
```

→ global.css 업데이트 + npm run build 확인

---

## STEP 3: Header 리디자인 (APR 스타일 — 미니멀, 투명)

```
디자인:
- 홈페이지에서: absolute top-0 w-full z-50 bg-transparent (히어로 위에 떠있음)
  텍스트: text-white (다크 배경 위이므로)
- 스크롤 시: fixed top-0 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm
  텍스트: text-slate-900 (전환 애니메이션: transition-all duration-300)
- 서브페이지에서: bg-white border-b border-slate-100 (항상 라이트)

- 높이: h-16 md:h-20
- 로고: "BRITZMEDI" (font-bold text-lg md:text-xl tracking-[0.15em] uppercase)
  + 옆에 구분선(|) + "RF Medical Device" (text-[10px] tracking-[0.2em] text-slate-400 uppercase)
- 네비 링크: text-[13px] font-medium tracking-wide hover:text-blue-500 transition
  간격: gap-8 md:gap-10
- 드롭다운: bg-white rounded-xl shadow-2xl border border-slate-100 py-4 px-2 min-w-[200px]
  - 아이템: px-4 py-2.5 text-sm hover:bg-slate-50 rounded-lg transition
- CTA 버튼: "상담 신청" (bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-blue-700)
- 모바일: 햄버거 → 풀스크린 오버레이 (bg-white inset-0 z-50)
  - 메뉴 아이템: text-2xl font-light py-4 border-b border-slate-100
  - APR처럼 깔끔한 풀스크린 메뉴
```

→ npm run build 확인

---

## STEP 4: Footer 리디자인 (APR 스타일 — 미니멀)

```
디자인:
- 배경: bg-slate-950 text-slate-400

- 상단: py-16 md:py-20
  4컬럼 그리드 (md:grid-cols-4 gap-12):
  1열: "BRITZMEDI" 로고 (text-white font-bold text-lg tracking-[0.15em])
       + 한줄 설명 (text-xs text-slate-500 mt-3 leading-relaxed)
       + "대표번호: 02-XXXX-XXXX" (text-xs text-slate-500 mt-4)
  2열: "Products" (text-xs text-white tracking-wider uppercase font-semibold mb-4)
       링크들: text-sm text-slate-500 hover:text-white transition space-y-3
  3열: "Company" (동일 스타일)
       링크들
  4열: "Support" (동일 스타일)
       링크들

- 하단: border-t border-slate-800 py-6
  flex justify-between items-center text-xs text-slate-600
  좌: © 2026 BRITZMEDI Corp. All rights reserved.
  우: 개인정보처리방침 · 이용약관 (hover:text-white)
  중간: 인증 텍스트 "FDA 510(k) · CE · ISO 13485" (text-amber-500/60)
```

→ npm run build 확인

---

## STEP 5: 홈페이지 리디자인

### Hero 섹션 (APR 스타일 — 풀스크린, 시네마틱, 배경 동영상 지원)
```
- 풀스크린: min-h-screen flex items-center relative overflow-hidden

- 배경: 동영상 우선, 없으면 CSS 그래디언트 폴백
  구조:
  <div class="absolute inset-0 z-0">
    <!-- 동영상 배경 (파일이 있을 때만 렌더링) -->
    <video
      autoplay muted loop playsinline
      poster="/images/hero-poster.jpg"
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
    <!-- 다크 오버레이 (동영상 위에) -->
    <div class="absolute inset-0 bg-black/60"></div>
    <!-- 동영상 없을 때 CSS 폴백 배경 -->
    <div class="absolute inset-0 bg-[#0A0E1A] -z-10"></div>
  </div>

  동영상 파일 규격:
  - 경로: public/videos/hero.mp4
  - 포스터 이미지: public/images/hero-poster.jpg (동영상 로드 전 표시)
  - 권장: 1920x1080, 10~20초 루프, 5MB 이하, 자동재생+음소거+루프
  - 지금은 파일이 없으므로 CSS 그래디언트 폴백이 보임
  - 나중에 동영상 파일만 넣으면 자동으로 적용됨

  CSS 그래디언트 폴백 (동영상 없을 때 보이는 배경):
    bg-[#0A0E1A]
    + absolute 원형 블러 요소들:
      - 좌상단: w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] absolute -top-40 -left-40 animate-float
      - 우하단: w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[100px] absolute -bottom-20 -right-20 animate-float-slow
      - 중앙: w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[80px] absolute top-1/2 left-1/2

  구현 방식:
  - video 태그는 항상 렌더링하되, src 파일이 없으면 자연스럽게 폴백 배경이 보임
  - 모바일에서는 동영상 대신 poster 이미지만 표시하는 것도 고려 (md: 이상에서만 video 표시)
  - 오버레이 투명도(bg-black/60)로 텍스트 가독성 확보
```
- 콘텐츠 중앙:
  - 상단에 작은 태그: "TOROIDAL RF TECHNOLOGY" (text-xs tracking-[0.3em] text-blue-400 uppercase border border-blue-400/30 px-4 py-1.5 rounded-full)
  - 메인 헤드라인: text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight
    "토로이달 RF 기술로" (첫줄)
    "피부 미용의 새로운 기준" (둘째줄, 이 줄만 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300)
  - 서브: text-slate-400 text-lg md:text-xl mt-6 max-w-xl leading-relaxed
  - 버튼 2개 (mt-10 flex gap-4):
    "상담 신청" (bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-base hover:bg-blue-50 transition)
    "제품 알아보기" (border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition)
- 하단에 스크롤 인디케이터: absolute bottom-10 left-1/2 (작은 마우스 아이콘 + 아래 화살표, animate-bounce)
- 우측에 제품 비주얼 영역 (lg:block hidden):
  큰 원형 글래스모피즘 카드 (bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl w-[400px] h-[500px])
  안에 제품 실루엣 자리 or "TORR RF" 큰 텍스트 + 간단한 스펙
```

### 솔루션 쇼케이스 섹션 (APR 탭 전환 스타일)
```
- 풀와이드: bg-white py-0 (여백 없이 임팩트)
- 상단 탭 바: sticky top-16 z-30 bg-white/90 backdrop-blur border-b border-slate-100
  중앙 정렬 탭 4개:
  "TORR RF" | "ULBLANC" | "NEWCHAE" | "LUMINO WAVE"
  (text-sm font-semibold tracking-wider, 선택된 탭: text-blue-700 border-b-2 border-blue-700)
- 각 탭 콘텐츠:
  풀와이드 (min-h-[80vh]) 2컬럼 레이아웃
  좌측 50%: 제품 비주얼 영역 (bg-gradient-to-br from-slate-50 to-slate-100 전체 높이)
    (이미지 없으면: 제품명 초대형 텍스트 text-[200px] text-slate-100 font-black + 가운데 작은 아이콘)
  우측 50%: py-20 px-12 md:px-20
    - 카테고리: text-blue-600 text-sm font-semibold tracking-wider uppercase
    - 제품명: text-4xl md:text-5xl font-bold text-slate-900 mt-3
    - 한줄 설명: text-xl text-slate-600 mt-4 leading-relaxed
    - 핵심 특장점 3개 (mt-8 space-y-4):
      각각 flex gap-4 items-start
      (왼쪽 숫자: text-3xl font-bold text-blue-600, 오른쪽 텍스트: text-sm text-slate-600)
    - CTA: "자세히 보기 →" (mt-10, text-blue-700 font-semibold text-base hover:underline)
- 탭 전환은 React client:load로 구현 (탭 클릭 시 콘텐츠 전환, 간단한 fade 트랜지션)
```

### 왜 브리츠메디 섹션
```
- 배경: bg-slate-50 py-20 md:py-28
- 3개 카드 (md:grid-cols-3 gap-8)
- 각 카드:
  - 아이콘 (큰 원형 bg-blue-50 안에 블루 아이콘 or 이모지)
  - 제목: font-bold text-lg
  - 설명: text-slate-600 text-sm leading-relaxed
- 차별점 3가지:
  1. 독자적 토로이달 RF 기술 (아이콘: SVG 또는 Tailwind로 만든 원형 아이콘 — bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center 안에 심플한 SVG 아이콘. 이모지 절대 쓰지 마)
  2. 40개국+ 글로벌 파트너 네트워크 (동일 스타일 아이콘)
  3. FDA/CE/ISO 트리플 인증 (동일 스타일 아이콘)
```

### 숫자 섹션 (APR 스타일 — 풀와이드 대형 숫자)
```
- 풀와이드: bg-[#0A0E1A] text-white py-24 md:py-32 relative overflow-hidden
- 배경에 서틀한 빛 효과 (absolute blur 원형, blue-900/30)
- 섹션 타이틀: "Sustained Growth" (text-xs tracking-[0.3em] text-blue-400 uppercase text-center)
- 서브: "브리츠메디의 성장을 확인하세요" (text-center text-slate-400 mt-2)
- 4개 숫자 (mt-16 grid md:grid-cols-4 gap-8 text-center)
- 각 항목:
  - 숫자: text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight
    (APR처럼 이탤릭 느낌: italic 또는 font-style로)
  - 단위: text-2xl text-blue-400 ml-1 (예: "건+", "개국+", "개+")
  - 라벨: text-sm text-slate-500 mt-3 tracking-wider
  - 각 숫자 사이 구분: 세로선 (hidden md:block absolute right-0 top-1/4 h-1/2 w-px bg-slate-700)
- 항목: 40+ 파트너 국가 | 3 트리플 인증 | 15+ 특허 보유 | 50,000+ 글로벌 시술 건수
```

### CTA 섹션 (풀와이드 임팩트)
```
- 풀와이드: bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-20 md:py-28 relative overflow-hidden
- 배경 장식: absolute 원형 white/5 블러 요소
- 중앙 정렬:
  - "함께 성장할 파트너를 찾고 있습니다" (text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight)
  - "브리츠메디의 기술력을 직접 경험해보세요" (text-blue-100 text-lg mt-4 text-center)
  - 2개 버튼 (mt-10 flex justify-center gap-4):
    "무료 상담 신청" (bg-white text-blue-700 px-10 py-4 rounded-full font-semibold text-base hover:shadow-xl transition)
    "카탈로그 요청" (border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition)
```

### 최신 소식 섹션 (APR 뉴스룸 스타일)
```
- bg-white py-20 md:py-28
- 상단: flex justify-between items-end
  좌: "News Room" (text-3xl md:text-4xl font-bold) + 서브 (text-slate-500)
  우: "더보기 →" 링크 (text-sm font-semibold text-slate-900 hover:text-blue-700)
- 뉴스 리스트 (mt-12, divide-y divide-slate-200):
  각 아이템: py-6 flex justify-between items-center group cursor-pointer hover:bg-slate-50 -mx-6 px-6 rounded-xl transition
  좌: flex gap-4 items-center
    - 카테고리 태그 (text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full)
    - 제목 (text-base md:text-lg font-medium text-slate-900 group-hover:text-blue-700 transition)
  우: 날짜 (text-sm text-slate-400)
- APR처럼 리스트형이 카드형보다 세련됨
```

### 인증/파트너 로고 바 (APR 브랜드 바 스타일)
```
- bg-slate-50 py-12 border-t border-slate-100
- 중앙 라벨: "Trusted by" 또는 "인증 현황" (text-xs tracking-wider text-slate-400 uppercase text-center mb-8)
- 로고들: flex items-center justify-center gap-12 md:gap-16
  FDA · CE · ISO 13485 · KFDA (각각 text-slate-300 hover:text-slate-600 transition)
  (로고 이미지 없으면 텍스트로: text-xl font-bold tracking-wider)
- 아래에 "40개국+ 글로벌 파트너 네트워크" (text-sm text-slate-400 text-center mt-6)
```

→ npm run build 확인

---

## STEP 6: 회사소개 페이지들 디자인 (/about, /ceo, /way, /rnd, /contact)

### 공통 (APR 스타일 서브페이지)
```
- 모든 서브페이지 상단: 풀와이드 미니 히어로
  bg-[#0A0E1A] py-20 md:py-28 relative overflow-hidden
  배경 장식: 서틀한 블루 글로우 (absolute blur)
  중앙에:
    - Breadcrumb (text-slate-500 text-xs tracking-wider)
    - H1 (text-white text-3xl md:text-4xl lg:text-5xl font-bold mt-4 tracking-tight)
    - 한줄 서브텍스트 (text-slate-400 text-base mt-3)
- 본문 영역: bg-white py-16 md:py-20
  (콘텐츠 폭: max-w-4xl mx-auto for 읽기 페이지, max-w-6xl for 카드 레이아웃)
```

### TLDRBox 리디자인
```
- bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6
- "핵심 요약" 라벨 (text-blue-700 text-xs font-bold uppercase tracking-wider) — 이모지 쓰지 말고 텍스트 라벨만
- 본문: text-slate-700 text-base leading-relaxed
```

### FAQSection 리디자인
```
- 각 FAQ 아이템: border-b border-slate-200
- 질문: py-5 flex justify-between items-center cursor-pointer
  text-left font-semibold text-slate-900 hover:text-blue-700
  오른쪽에 + / - 아이콘 (transition-transform)
- 답변: pb-5 text-slate-600 leading-relaxed
```

### CompareTable 리디자인
```
- overflow-x-auto rounded-2xl border border-slate-200
- 헤더: bg-slate-900 text-white text-sm font-semibold
- 강조 컬럼: bg-blue-50 border-t-4 border-blue-500 (브리츠메디 제품)
- 셀: py-4 px-6 text-sm border-b border-slate-100
- 교대 행: even:bg-slate-50
```

### SpecTable 리디자인
```
- rounded-2xl overflow-hidden border border-slate-200
- 2컬럼: 라벨(bg-slate-50 font-medium text-sm) | 값(text-sm)
- 교대 행 배경
```

### TrustBadge 리디자인
```
- bg-slate-50 py-8 border-t border-slate-200
- 가로 나열: flex items-center justify-center gap-8 md:gap-12
- 각 배지: text-center
  - 아이콘/심볼 (text-amber-500 text-2xl)
  - 라벨 (text-xs text-slate-500 uppercase tracking-wider)
  - 값 (text-sm font-bold text-slate-900)
```

### /rnd 특별 처리
- 비교 테이블 (토로이달 vs 모노폴라 vs 바이폴라) 있으니 CompareTable 잘 적용

### /contact
- 왼쪽: 연락처 정보 카드 (아이콘 + 텍스트)
- 오른쪽: 간단한 문의 폼 or 지도 플레이스홀더 (bg-slate-100 rounded-2xl h-80 with "지도 준비 중" 텍스트)
- 하단에 "상담 신청" CTA 버튼

→ npm run build 확인

---

## STEP 7: 제품 페이지들 디자인 (/products, /products/*)

### 제품 목록 (/products)
```
- 미니 히어로 + H1
- 4개 제품 카드 (큰 버전, md:grid-cols-2 gap-8)
- 각 카드: 좌우 레이아웃 (이미지 | 텍스트)
  - 이미지: bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 (플레이스홀더)
  - 텍스트: 제품명, 한줄 설명, 주요 스펙 3개 (체크마크 리스트), CTA 버튼
- 하단에 4개 제품 비교 테이블
```

### 제품 상세 (/products/torr-rf 등) — APR 스타일 시네마틱
```
- 제품 히어로 (풀스크린):
  min-h-[80vh] bg-[#0A0E1A] relative overflow-hidden flex items-center
  배경: 블루 글로우 효과 (absolute blur 원형들)
  좌측: 
    카테고리 태그 (text-xs tracking-[0.3em] text-blue-400 uppercase)
    제품명 (text-5xl md:text-6xl font-bold text-white tracking-tight)
    한줄 설명 (text-xl text-slate-400 mt-4)
    핵심 스펙 3개 (mt-8, 가로 나열: 숫자+단위+라벨)
    버튼: "상담 신청" + "카탈로그" (rounded-full 스타일)
  우측: 제품 비주얼 (bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-12)

- 8섹션 순서대로 (풀와이드, 섹션 배경 교대):
  1. TLDRBox (위에서 디자인한 대로, bg-white 섹션)
  2. 핵심 기술 — 풀와이드 bg-slate-50, CompareTable 포함
  3. 스펙 테이블 — bg-white, SpecTable 디자인
  4. 인증 배지 — bg-[#0A0E1A] 다크 섹션, 골드 테마 (text-amber-400)
  5. 적용 분야 — bg-white, 아이콘 + 카드 그리드
  6. FAQ — bg-slate-50, FAQSection 디자인
  7. CTA — 풀와이드 블루 그래디언트 (위의 CTA 섹션과 동일)
  8. 관련 콘텐츠 — bg-white, 카드 3개
```

→ npm run build 확인

---

## STEP 8: 인증/특허 페이지 디자인

```
- 미니 히어로
- 인증 카드들: 골드 테마
  bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-2xl p-8
  상단에 심플한 SVG 아이콘 (이모지 절대 쓰지 마), 인증명, 인증번호, 취득일
- 특허 리스트: 깔끔한 테이블 or 카드
```

→ npm run build 확인

---

## STEP 9: 블로그/뉴스 디자인

### 블로그 목록
```
- 미니 히어로
- 카테고리 필터 탭 (있으면): inline-flex gap-2 rounded-full 버튼들
- 카드 그리드 (md:grid-cols-3 gap-8)
- 각 카드:
  - 상단: 카테고리 태그(bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full)
  - 이미지 영역: bg-slate-100 h-48 rounded-t-2xl
  - 제목: font-bold text-lg hover:text-blue-700
  - 발행일 + 저자: text-sm text-slate-500
  - 짧은 발췌: text-slate-600 text-sm line-clamp-3
```

### 블로그 상세
```
- 상단: 카테고리 태그 + H1(text-3xl md:text-4xl font-bold) + 저자/날짜
- 본문: prose prose-lg max-w-3xl mx-auto (Tailwind Typography)
  - TLDRBox
  - 비교테이블
  - FAQ
  - 관련 콘텐츠 카드
```

### 뉴스
- 블로그와 유사하지만 더 심플하게

→ npm run build 확인

---

## STEP 10: 인터랙티브 컴포넌트 디자인

### ChatBot.tsx
```
- 플로팅 버튼: 우하단 fixed bottom-6 right-6 z-50
  bg-blue-700 hover:bg-blue-800 text-white w-14 h-14 rounded-full shadow-xl
  hover:shadow-2xl transition-all duration-300 hover:scale-105
  안에 채팅 아이콘 (SVG)
- 채팅창: fixed bottom-24 right-6 w-[380px] max-h-[600px]
  bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden
  - 헤더: bg-slate-900 text-white py-4 px-5 flex justify-between
    "BRITZMEDI AI 상담" + 닫기 버튼
  - 메시지 영역: flex-1 overflow-y-auto p-4 space-y-3
    - 봇 메시지: bg-slate-100 rounded-2xl rounded-bl-md px-4 py-3 text-sm max-w-[80%]
    - 유저 메시지: bg-blue-700 text-white rounded-2xl rounded-br-md px-4 py-3 text-sm max-w-[80%] ml-auto
  - 입력: border-t px-4 py-3 flex gap-2
    input(border rounded-xl px-4 py-2.5 text-sm flex-1) + 전송 버튼
```

### ChatBot 위치
```
- 플로팅 버튼: fixed bottom-6 right-6 (카카오톡 없이 챗봇만 단독 배치)
```

### CookieConsent
```
- fixed bottom-0 left-0 right-0 z-40
  bg-slate-900 text-white px-6 py-4
  flex items-center justify-between max-w-7xl mx-auto
  - 텍스트: text-sm text-slate-300
  - 버튼: "동의" (bg-white text-slate-900 px-6 py-2 rounded-lg text-sm font-semibold)
```

### ContactForm
```
- 깔끔한 폼 디자인:
  label: text-sm font-medium text-slate-700 mb-1
  input: w-full border border-slate-200 rounded-xl px-4 py-3 text-sm
    focus:ring-2 focus:ring-blue-500 focus:border-transparent transition
  select: 동일 스타일
  textarea: 동일 + min-h-[120px]
  submit: bg-blue-700 hover:bg-blue-800 text-white w-full py-4 rounded-xl font-semibold text-base
```

→ npm run build 확인

---

## STEP 11: 기타 페이지 디자인

### /privacy, /terms
- 미니 히어로 + prose 본문 (max-w-3xl)

### /support/partnership, /support/inquiry
- 미니 히어로
- 좌: 설명 텍스트 + 연락처
- 우: ContactForm

### /404
```
- 전체 중앙 정렬 min-h-[60vh] flex items-center justify-center
- 큰 "404" (text-8xl font-bold text-slate-200)
- "페이지를 찾을 수 없습니다" (text-xl font-semibold text-slate-900)
- "홈으로 돌아가기" 버튼
```

→ npm run build 확인

---

## STEP 12: 마이크로 애니메이션 (APR 스타일 — 부드럽고 고급스러운 전환)

### global.css에 추가
```css
/* 페이드인 업 */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 페이드인 (방향 없이) */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 스케일 인 */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* 스크롤 reveal 기본 상태 */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 순차적 딜레이 (자식 요소들이 순서대로 나타남) */
.reveal-stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-stagger.visible > *:nth-child(1) { transition-delay: 0.1s; opacity: 1; transform: translateY(0); }
.reveal-stagger.visible > *:nth-child(2) { transition-delay: 0.2s; opacity: 1; transform: translateY(0); }
.reveal-stagger.visible > *:nth-child(3) { transition-delay: 0.3s; opacity: 1; transform: translateY(0); }
.reveal-stagger.visible > *:nth-child(4) { transition-delay: 0.4s; opacity: 1; transform: translateY(0); }

/* 히어로 배경 글로우 애니메이션 (서서히 움직이는 느낌) */
@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float 12s ease-in-out infinite;
}

/* 부드러운 스크롤 */
html {
  scroll-behavior: smooth;
}
```

### IntersectionObserver (BaseLayout에 인라인 스크립트)
```html
<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));
</script>
```

### 적용 위치
- 홈페이지: 모든 섹션에 class="reveal", 카드 그리드에 class="reveal-stagger"
- 히어로 배경 글로우 요소에: class="animate-float" / "animate-float-slow"
- 제품 페이지: 각 섹션에 reveal
- 숫자 섹션: reveal-stagger로 숫자가 순차적으로 나타나게
- 과하게 쓰지 말 것 — 홈페이지 + 제품 상세 위주로만

→ npm run build 확인

---

## STEP 13: 최종 QA + 커밋

1. npm run build — 에러 0개 확인
2. dist/ 폴더에서 페이지 수 확인 (24개)
3. 모든 컴포넌트의 Tailwind 클래스가 정상 적용되는지 빌드 로그 체크
4. Schema.org JSON-LD 깨지지 않았는지 확인
5. robots.txt, sitemap, _redirects 정상인지 확인
6. 문제 있으면 수정

git add .
git commit -m "[Design] 전체 사이트 디자인 업그레이드 — 프리미엄 의료기기 B2B 스타일"
git push

최종 보고:
```
=== 디자인 업그레이드 최종 보고 ===
✅ 폰트: Pretendard + Inter CDN 적용
✅ 컬러 시스템: 적용 여부
✅ Header: 리디자인 완료 여부
✅ Footer: 리디자인 완료 여부
✅ 홈페이지: 히어로 + 5개 섹션 디자인
✅ 제품 페이지: 히어로 + 8섹션 디자인
✅ 회사소개 5페이지: 디자인 적용
✅ 블로그/뉴스: 디자인 적용
✅ 인터랙티브 컴포넌트: ChatBot, ContactForm, CookieConsent
✅ 마이크로 애니메이션: 적용 여부
✅ AEO 구조: 유지 확인 (Schema.org, FAQ, TLDRBox 등)
✅ 빌드: 성공/실패
✅ 배포 URL: https://britzmedicokr.pages.dev
⚠️ 남은 이슈: (있으면)
```

시작해줘!

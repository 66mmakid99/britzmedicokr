지금부터 전체 사이트 디자인 업그레이드 + 남은 이슈를 한번에 처리해줘.
현재 24개 페이지의 구조는 유지하면서, 2026년 프리미엄 의료기기 B2B 사이트 수준으로 디자인을 입혀.

⚠️ 중요 규칙:
1. 기존 AEO 구조(H1/H2/H3, Schema.org, TLDRBox, FAQ 등)는 절대 건드리지 마
2. 작업 단위별로 npm run build 해서 에러 확인 → 에러 있으면 즉시 수정
3. 전체 완료 후 git commit + git push
4. Tailwind CSS 유틸리티 클래스로만 스타일링 (커스텀 CSS 최소화)
5. 모바일 퍼스트 반응형 — 모바일에서도 예뻐야 해

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

## STEP 3: Header 리디자인

```
디자인:
- 배경: bg-white/80 backdrop-blur-lg border-b border-slate-100 (스크롤 시)
- 최상단에서는 bg-transparent (히어로 위에 떠있는 느낌)
- 로고: "BRITZMEDI" 텍스트 (font-bold text-xl tracking-widest text-slate-900)
- 로고 옆에 작은 구분선 + "RF Medical Device" 텍스트 (text-xs text-slate-400 tracking-wider uppercase)
- 네비 링크: text-sm font-medium text-slate-600 hover:text-blue-700 transition
- 드롭다운: bg-white rounded-xl shadow-xl border border-slate-100 py-3
- CTA 버튼: "상담 신청" (bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold)
- 모바일: 햄버거 메뉴 → 풀스크린 오버레이 (bg-white) 또는 슬라이드
- sticky top-0 z-50
```

→ npm run build 확인

---

## STEP 4: Footer 리디자인

```
디자인:
- 배경: bg-slate-900 text-white
- 4컬럼 그리드 (md:grid-cols-4):
  1열: BRITZMEDI 로고 + 한줄 설명 + SNS 아이콘(없으면 생략)
  2열: 제품 링크 (TORR RF, ULBLANC, NEWCHAE, LUMINO WAVE)
  3열: 회사 링크 (회사소개, CEO, R&D, 인증/특허)
  4열: 고객지원 (상담신청, 파트너십, 블로그, 연락처)
- 하단: border-t border-slate-700 py-6
  - 왼쪽: © 2026 BRITZMEDI. All rights reserved.
  - 오른쪽: 개인정보처리방침 | 이용약관
  - 중간: 인증 배지 작게 (FDA · CE · ISO 13485) — text-amber-400
```

→ npm run build 확인

---

## STEP 5: 홈페이지 리디자인

### Hero 섹션
```
- 풀와이드 다크 배경: bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900
- 왼쪽에 미묘한 빛 효과: 블루 radial gradient 원형 (CSS로 absolute positioned div)
- 큰 헤드라인: text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
  "토로이달 RF 기술로\n피부 미용의 새로운 기준을\n만듭니다"
- 서브: text-slate-300 text-lg md:text-xl max-w-2xl
- 버튼 2개: "상담 신청" (블루), "제품 알아보기" (화이트 아웃라인)
- 우측에 제품 이미지 자리 (플레이스홀더: 블루 그라데이션 박스 with 기기 실루엣 또는 아이콘)
- 하단에 신뢰 배지 바: "FDA 510(k) · CE Mark · ISO 13485 · XX개국 파트너"
  (bg-white/5 backdrop-blur px-6 py-4 rounded-2xl 안에)
- 높이: min-h-[85vh] md:min-h-[90vh]
```

### 제품 쇼케이스 섹션
```
- 배경: bg-white py-20 md:py-28
- 섹션 제목: "제품 라인업" 중앙 정렬 + 밑에 "세계가 인정한 RF 기술" 서브텍스트
- 4개 카드 그리드 (md:grid-cols-2 lg:grid-cols-4 gap-6)
- 각 카드:
  - bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300
  - 상단: 제품 이미지 영역 (bg-slate-50 rounded-xl h-48 flex items-center justify-center)
    (실제 이미지 없으면 제품명 이니셜 큰 글자로 표시)
  - 제품명: text-lg font-bold mt-4
  - 한줄 설명: text-sm text-slate-500
  - 하단: "자세히 보기 →" 링크 (text-blue-700 text-sm font-semibold)
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
  1. 🔬 독자적 토로이달 RF 기술
  2. 🌍 40개국+ 글로벌 파트너 네트워크
  3. ✅ FDA/CE/ISO 트리플 인증
```

### 숫자 섹션
```
- 배경: bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16
- 4개 숫자 (md:grid-cols-4 gap-8 text-center)
- 각 항목:
  - 숫자: text-4xl md:text-5xl font-bold text-white (카운터 애니메이션은 선택)
  - 라벨: text-slate-300 text-sm mt-2
  - 구분: 골드 색상으로 작은 포인트 (border-b-2 border-amber-400 w-12 mx-auto)
- 항목: FDA/CE/ISO 인증 | 특허 보유 | 파트너 국가 | 글로벌 시술 건수
```

### CTA 섹션
```
- bg-blue-700 py-16 text-center text-white
- 큰 제목 + 서브텍스트
- 2개 버튼: "무료 상담 신청" (white bg), "카탈로그 다운로드" (white 아웃라인)
```

### 최신 소식 섹션
```
- bg-white py-20
- 블로그/뉴스 최신 3개 카드 (md:grid-cols-3 gap-6)
- 각 카드: 이미지 영역(bg-slate-100 h-48 rounded-t-2xl) + 카테고리 태그 + 제목 + 날짜
```

→ npm run build 확인

---

## STEP 6: 회사소개 페이지들 디자인 (/about, /ceo, /way, /rnd, /contact)

### 공통
```
- 모든 서브페이지 상단: 미니 히어로 배너
  bg-gradient-to-r from-slate-900 to-slate-800 py-16 md:py-20
  중앙에 Breadcrumb(text-slate-400) + H1(text-white text-3xl md:text-4xl font-bold)
- 본문 영역: bg-white py-16 max-w-4xl mx-auto (읽기 편한 폭)
```

### TLDRBox 리디자인
```
- bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6
- 왼쪽에 💡 아이콘 or "핵심 요약" 라벨 (text-blue-700 text-xs font-bold uppercase tracking-wider)
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
- 카카오톡 버튼 강조

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

### 제품 상세 (/products/torr-rf 등)
```
- 제품 히어로:
  bg-gradient-to-br from-slate-900 to-blue-900 py-16 md:py-24
  좌: 제품명(큰), 한줄 설명, "상담 신청" + "카탈로그" 버튼
  우: 제품 이미지 영역 (bg-white/10 rounded-3xl p-8)

- 8섹션 순서대로:
  1. TLDRBox (위에서 디자인한 대로)
  2. 핵심 기술 — CompareTable 포함
  3. 스펙 테이블 — SpecTable 디자인
  4. 인증 배지 — 골드 테마 카드 (bg-amber-50 border border-amber-200)
  5. 적용 분야 — 아이콘 + 카드 그리드
  6. FAQ — FAQSection 디자인
  7. CTA — bg-blue-700 풀와이드
  8. 관련 콘텐츠 — 카드 3개
```

→ npm run build 확인

---

## STEP 8: 인증/특허 페이지 디자인

```
- 미니 히어로
- 인증 카드들: 골드 테마
  bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-2xl p-8
  상단에 인증 아이콘(🏆 or ✅), 인증명, 인증번호, 취득일
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

### KakaoChat
```
- 카카오 노란색 버튼: fixed bottom-6 right-24 (챗봇 왼쪽)
  bg-[#FEE500] text-[#3C1E1E] w-14 h-14 rounded-full shadow-lg
  카카오톡 아이콘 (SVG) 또는 "K" 텍스트
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

## STEP 12: 마이크로 애니메이션 (CSS only)

### global.css에 추가
```css
/* 페이드인 애니메이션 */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* 스크롤 시 나타나기 위한 기본 상태 */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 간단한 IntersectionObserver (BaseLayout에 인라인 스크립트)
```html
<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>
```

### 적용 위치
- 홈페이지 각 섹션에 class="reveal"
- 제품 카드에 reveal
- 숫자 카운터 섹션
- 무리하게 모든 곳에 넣지 말고, 홈페이지 위주로

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
✅ 인터랙티브 컴포넌트: ChatBot, KakaoChat, ContactForm, CookieConsent
✅ 마이크로 애니메이션: 적용 여부
✅ AEO 구조: 유지 확인 (Schema.org, FAQ, TLDRBox 등)
✅ 빌드: 성공/실패
✅ 배포 URL: https://britzmedicokr.pages.dev
⚠️ 남은 이슈: (있으면)
```

시작해줘!

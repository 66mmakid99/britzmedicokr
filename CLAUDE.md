# CLAUDE.md — BRITZMEDI 한국 홈페이지 프로젝트 가이드

> Claude Code가 이 프로젝트에서 작업할 때 자동으로 참조하는 파일입니다.

## 프로젝트 개요
- **프로젝트:** BRITZMEDI 한국 홈페이지 리뉴얼 (britzmedi.co.kr)
- **목적:** 한국 B2B 마케팅 + AEO/GEO(AI 검색 최적화)
- **배포:** Cloudflare Pages (britzmedicokr.pages.dev)
- **도메인:** britzmedi.co.kr (연결 예정), 현재 britzmedicokr.pages.dev
- **전체 개발 스펙:** `docs/DEV_SPEC.md` ← 반드시 먼저 읽을 것!

## 기술 스택
- **Astro 5** (hybrid: static + SSR API Routes) + **React 19** + **Tailwind CSS 4** + **TypeScript**
- **Supabase** (DB: 블로그/뉴스/문의, 인증: Content Ops)
- **Cloudflare Pages** (호스팅, CDN, SSL) + **@astrojs/cloudflare** adapter
- **Anthropic Claude API** (AI 챗봇 — Haiku 4.5, 시스템 프롬프트 기반 제품 상담)

## 핵심 규칙

### 코딩 규칙
- Astro 컴포넌트 우선, React는 인터랙티브 필요시만 (Islands Architecture)
- TypeScript strict mode
- 컴포넌트 파일명: PascalCase (예: TLDRBox.astro, ChatBot.tsx)
- 페이지 파일명: kebab-case (예: torr-rf.astro, lumino-wave.astro)
- Tailwind 유틸리티 클래스 사용, 커스텀 CSS 최소화
- 폰트: Pretendard (한글), Inter (영문 보조)

### AEO/GEO 규칙 (절대 어기지 말 것!)
- 모든 페이지 H1 정확히 1개
- H1 → H2 → H3 순서 (건너뛰기 금지)
- 모든 페이지 첫 50자에 핵심 정의 배치
- 제품 페이지: 반드시 8섹션 구조 (TL;DR → 핵심기술 → 스펙 → 인증 → 적용분야 → FAQ → CTA → 관련콘텐츠)
- Schema.org JSON-LD: 모든 페이지에 적용
- robots.txt: AI 봇 6개 Allow (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Googlebot, Yeti)

### 디자인
- Base: zinc 모노크롬 시스템 (zinc-50 ~ zinc-950)
- Accent: teal 포인트 컬러 (teal-400 ~ teal-700)
- 제품 히어로: 라이트 그래디언트 배경 + drop-shadow 제품 이미지
- TL;DR 박스: 배경 #EBF5FF, 왼쪽 테두리 #3B82F6
- 최대 너비: 1280px
- 모바일 퍼스트 반응형

### 커밋 규칙
- 한국어 커밋 메시지
- 형식: `[Category] 작업 내용` (예: `[Content] IR 기반 회사 정보 업데이트`)

## 참고 사이트
- 영문 사이트 (동일 스택): https://www.britzmedi.com
- 영문 GitHub: https://github.com/66mmakid99/britzmedi-homepage-only-en
- 카카오톡: https://pf.kakao.com/_MdCLG

## 페이지 구성 (24페이지)
- 홈, 회사소개, CEO, R&D, 인증/특허, 오시는 길
- 제품: TORR RF, ULBLANC, NEWCHAE Shot, LUMINO WAVE, 제품 목록
- 블로그(동적), 뉴스(동적), Contact
- 고객지원: 문의, 파트너십
- 개인정보처리방침, 이용약관, 404

## SSR API Routes
- `/api/chat` — AI 챗봇 (Anthropic Claude Haiku)
- `/api/contact` — 문의 폼 Supabase INSERT

## 환경변수 (Cloudflare Pages)
- `PUBLIC_SUPABASE_URL` / `PUBLIC_SUPABASE_ANON_KEY` — Supabase
- `SUPABASE_SERVICE_ROLE_KEY` — Contact 폼 서버사이드
- `ANTHROPIC_API_KEY` — 챗봇
- `PUBLIC_GA_MEASUREMENT_ID` — Google Analytics (미설정)

## 완료된 작업
- [x] 24페이지 프론트엔드 구축
- [x] IR 기반 회사/제품 콘텐츠 전면 업데이트
- [x] 제품 이미지/영상 반영 + WebP 최적화 (205MB 절감)
- [x] 제품 페이지 히어로 디자인 리뉴얼 (라이트 그래디언트)
- [x] 홈 쇼케이스 한글(영문) 병기 + 이미지 확대
- [x] Supabase 연동 (블로그/뉴스 빌드 시 fetch + 폴백)
- [x] AI 챗봇 전면 리디자인 (Claude Haiku + 제품 지식 주입 + 퀵액션 + 모바일 최적화)
- [x] Contact 폼 Supabase 연동 (/api/contact SSR Route)
- [x] 푸터 사업자 정보 (사업자등록증 기반)
- [x] AEO/SEO 구조 (Schema.org, FAQ 스키마, 메타태그)

## 완료된 추가 작업
- [x] Supabase contact_inquiries 테이블 생성 완료
- [x] Google Maps 임베드 (Contact 페이지)
- [x] Google Analytics 조건부 연동 (PUBLIC_GA_MEASUREMENT_ID 환경변수)
- [x] Resend 이메일 알림 연동 (RESEND_API_KEY 환경변수)

## 남은 작업
- [ ] britzmedi.co.kr 도메인 연결
- [ ] LUMINO WAVE 갤러리/영상 추가 (소스 이미지 부재)
- [ ] 블로그/뉴스 실제 콘텐츠 발행 (Content Factory)
- [ ] 카카오톡 채널 연동

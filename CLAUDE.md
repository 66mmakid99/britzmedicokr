# CLAUDE.md — BRITZMEDI 한국 홈페이지 프로젝트 가이드

> Claude Code가 이 프로젝트에서 작업할 때 자동으로 참조하는 파일입니다.

## 프로젝트 개요
- **프로젝트:** BRITZMEDI 한국 홈페이지 리뉴얼 (britzmedi.co.kr)
- **목적:** 한국 B2B 마케팅 + AEO/GEO(AI 검색 최적화)
- **전체 개발 스펙:** `docs/DEV_SPEC.md` ← 반드시 먼저 읽을 것!

## 기술 스택
- **Astro 5** + **React 19** + **Tailwind CSS 4** + **TypeScript**
- **Supabase** (인증, DB, 리드관리)
- **Cloudflare Pages** (호스팅, CDN, SSL)
- **Cloudflare Workers** (API)
- **Claude API** (한국어 챗봇)

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
- Primary: #1A1A2E (딥 네이비)
- Secondary: #2D4A7A (블루)
- Accent: #C4A265 (골드)
- TL;DR 박스: 배경 #EBF5FF, 왼쪽 테두리 #3B82F6
- 최대 너비: 1280px
- 모바일 퍼스트 반응형

### 커밋 규칙
- 한국어 커밋 메시지
- 형식: `[Phase] 작업 내용` (예: `[P1] 홈페이지 히어로 섹션 구현`)

## 참고 사이트
- 영문 사이트 (동일 스택): https://www.britzmedi.com
- 영문 GitHub: https://github.com/66mmakid99/britzmedi-homepage-only-en
- 카카오톡: https://pf.kakao.com/_MdCLG

## 현재 진행 상황
- Phase: P0 (초기 세팅)
- 다음 할 일: P1 시작 — Astro 프로젝트 초기화 + 기본 레이아웃 + 홈페이지 + 회사소개 5페이지

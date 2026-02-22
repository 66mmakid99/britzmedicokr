# britzmedi.co.kr 잔존 콘텐츠 정리 작업

아래 작업을 순서대로 전부 실행해. 중간에 멈추지 마.

---

## Step 0: 현재 변경분 커밋

```bash
git add -A
git commit -m "[Content] IR 기반 회사/제품 정보 전면 업데이트 (14개 파일)"
git push origin main
```

---

## Step 1: 용어 교체 원칙

IR 자료 반영 후 "토로이달 코일 RF"라는 표현은 더 이상 쓰지 않아. 아래 원칙대로 교체해:

| 기존 표현 | 교체 표현 |
|---|---|
| 토로이달 코일 RF 기술 | 다중 에너지 설계 기술 / 멀티 에너지 조합 기술 |
| 토로이달 코일 | (맥락에 따라) 독자적 RF 에너지 전달 구조 |
| 토로이달 RF | TORR RF / 멀티웨이브 RF |
| 토로이달 vs 모노폴라 vs 바이폴라 비교 | 단일 주파수 vs 다중 주파수 비교 (이미 rnd.astro에 있는 비교테이블 참고) |

**핵심**: 이미 업데이트된 rnd.astro, products.ts, index.astro의 톤과 용어를 기준으로 맞춰. 새로운 용어를 만들지 말고 기존 업데이트된 파일에서 쓴 표현을 그대로 가져와.

---

## Step 2: 우선순위 높음 — 방문자 직접 보는 페이지 (8건)

### 2-1. src/pages/certifications/index.astro (5건)
- "토로이달 코일" 포함된 특허 목록 → rnd.astro의 실제 특허 목록과 동일하게 맞춰
- TLDRBox 내용도 IR 기반으로 업데이트
- 인증 현황은 products.ts의 각 제품별 인증 정보와 일치시켜

### 2-2. src/pages/products/torr-rf.astro (3건)
- "토로이달 vs 모노폴라 vs 바이폴라" 비교표 → rnd.astro에 있는 "단일 에너지 vs 복합 에너지" 비교표 형식으로 교체
- 나머지 토로이달 관련 표현 → products.ts의 TORR RF 설명과 일치시켜

### 2-3. src/data/products.ts FAQ (2건)
- TORR RF FAQ에 남은 "토로이달" → "멀티웨이브 RF" 또는 "다중 에너지 설계"로 교체

---

## Step 3: 우선순위 중간 — 블로그/뉴스 콘텐츠 (19건)

### 3-1. src/data/blog.ts (13건)
- 블로그 글 3개 전체 리라이팅
- "토로이달 코일 RF"를 전부 IR 기반 용어로 교체
- 기술 설명 부분은 rnd.astro의 원천기술 3가지 (멀티웨이브 RF, 듀얼 주파수 초음파, 초음파 미세공간) 기준으로 맞춰
- 블로그 글의 전체적인 톤과 흐름은 유지하되, 팩트만 업데이트

### 3-2. src/data/news.ts (5건)
- 뉴스 글 2개 리라이팅
- 동일 원칙 적용
- 날짜와 뉴스 구조는 유지

### 3-3. src/pages/blog/index.astro (1건)
- 블로그 인덱스 소개문 업데이트

---

## Step 4: 우선순위 낮음 — 기타 (3건)

### 4-1. src/pages/blog/[slug].astro (1건)
- RF 비교표 헤더 교체

### 4-2. src/pages/index.astro (1건)
- HTML 주석 `<!-- 독자적 토로이달 RF 기술 -->` 삭제 또는 교체

### 4-3. src/pages/about.astro (1건)
- 2019년 연혁 "토로이달 코일 RF 기술 개발 착수" → "독자적 RF 에너지 전달 기술 개발 착수"

---

## Step 5: CLAUDE.md 업데이트

CLAUDE.md의 Phase 정보와 디자인 컬러를 현재 상태로 업데이트해:

- Phase: "IR 기반 콘텐츠 보강 완료, 잔존 용어 정리 완료" 상태로
- 디자인 컬러: teal 포인트 컬러 기반
- 완료된 페이지: 24페이지 프론트엔드 + IR 기반 업데이트 반영
- 다음 작업: admin (Content Factory) 구축 예정

---

## Step 6: 최종 검증 + 커밋

```bash
npm run build
```

빌드 에러 없으면:

```bash
git add -A
git commit -m "[Content] 잔존 토로이달 용어 32건 정리 + CLAUDE.md 업데이트"
git push origin main
```

빌드 에러 있으면 에러 내용 보여주고 수정한 뒤 다시 빌드해.

---

## 주의사항

- 새로운 용어를 창작하지 마. 이미 업데이트된 파일(rnd.astro, products.ts, index.astro)에서 쓴 표현만 가져와.
- 블로그/뉴스 리라이팅할 때 글의 구조와 분량은 유지하고 팩트만 바꿔.
- 매출, 파트너사명, 팀원 정보, 재무 데이터 등 비공개 정보 절대 넣지 마.
- 빌드 반드시 확인하고 커밋해.

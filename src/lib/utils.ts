/** 날짜를 한국어 형식으로 포맷 (예: 2026년 2월 18일) */
export function formatDateKo(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

/** 현재 연도 반환 */
export function currentYear(): number {
  return new Date().getFullYear();
}

import { useState, useEffect } from "react";

const STORAGE_KEY = "britzmedi-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white px-4 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[#333]">
          이 웹사이트는 더 나은 서비스를 위해 쿠키를 사용합니다.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="/privacy"
            className="text-sm text-[#2D4A7A] underline underline-offset-2 hover:text-[#1A1A2E]"
          >
            자세히 보기
          </a>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-[#1A1A2E] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2D4A7A]"
          >
            동의합니다
          </button>
        </div>
      </div>
    </div>
  );
}

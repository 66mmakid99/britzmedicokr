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
    <div className="fixed right-0 bottom-0 left-0 z-50 border-t border-slate-800 bg-slate-900 px-4 py-4 shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-300">
          이 웹사이트는 더 나은 서비스를 위해 쿠키를 사용합니다.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="/privacy"
            className="text-sm text-blue-400 underline underline-offset-2 hover:text-blue-300"
          >
            자세히 보기
          </a>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            동의합니다
          </button>
        </div>
      </div>
    </div>
  );
}

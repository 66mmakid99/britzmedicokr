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
    <div className="fixed right-0 bottom-0 left-0 z-40 bg-zinc-900 px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <p className="text-sm text-zinc-300">
          이 웹사이트는 더 나은 서비스를 위해 쿠키를 사용합니다.{" "}
          <a
            href="/privacy"
            className="text-zinc-300 underline underline-offset-2 hover:text-zinc-100"
          >
            자세히 보기
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 rounded-lg bg-white px-6 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          동의합니다
        </button>
      </div>
    </div>
  );
}

import { useState, useRef, useEffect, type FormEvent } from "react";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

const GREETING =
  "안녕하세요! 브리츠메디 AI 상담입니다. 제품, 기술, 파트너십 등에 대해 물어보세요.";

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes("토르") || lower.includes("torr")) {
    return "TORR RF는 브리츠메디의 대표 제품으로, 토로이달 코일 기반 Multi-wave RF 기술을 적용한 피부 미용 의료기기입니다. FDA 510(k), CE Mark 인증을 획득했으며, 균일한 에너지 전달과 깊은 침투 깊이가 특징입니다. 자세한 내용은 /products/torr-rf 페이지를 참고해 주세요.";
  }

  if (lower.includes("제품")) {
    return "브리츠메디의 제품 라인업은 TORR RF(Multi-wave RF 피부 미용 의료기기), ULBLANC(프리미엄 RF 스킨케어 디바이스), NEWCHAE(차세대 RF 피부 관리 솔루션), LUMINO WAVE(LED + RF 복합 디바이스)로 구성되어 있습니다. 각 제품 상세 페이지에서 더 자세한 정보를 확인하실 수 있습니다.";
  }

  if (lower.includes("인증") || lower.includes("fda") || lower.includes("ce")) {
    return "브리츠메디는 FDA 510(k) Clearance, CE Mark, ISO 13485 인증을 보유하고 있습니다. 이를 통해 글로벌 시장에서의 품질과 안전성을 보증하고 있으며, 40개국 이상에 제품을 수출하고 있습니다.";
  }

  if (lower.includes("파트너") || lower.includes("협력") || lower.includes("대리점")) {
    return "브리츠메디는 글로벌 디스트리뷰터, 클리닉 파트너, 기술 협력 등 다양한 파트너십을 운영하고 있습니다. 파트너십에 관심이 있으시다면 /support/partnership 페이지에서 문의해 주세요.";
  }

  return "더 자세한 상담은 카카오톡 채널 또는 상담 신청 폼을 이용해 주세요.";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "bot", text: GREETING },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  let nextId = useRef(2);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  function handleSend(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: nextId.current++,
      role: "user",
      text: trimmed,
    };

    const botMsg: Message = {
      id: nextId.current++,
      role: "bot",
      text: getBotResponse(trimmed),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-xl transition-transform hover:scale-105 hover:bg-blue-800 hover:shadow-2xl"
          aria-label="AI 상담 열기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed right-5 bottom-5 z-50 flex h-[520px] w-[380px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-slate-900 px-5 py-4">
            <h3 className="text-sm font-bold text-white">
              브리츠메디 AI 상담
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="상담 닫기"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-br-md bg-blue-700 text-white"
                      : "rounded-bl-md bg-slate-100 text-slate-900"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-slate-200 px-4 py-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="메시지를 입력하세요..."
              className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            <button
              type="submit"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-white transition-colors hover:bg-blue-800"
              aria-label="전송"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

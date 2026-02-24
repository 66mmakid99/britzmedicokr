import { useState, useRef, useEffect, type FormEvent } from 'react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

const GREETING = '안녕하세요! 브리츠메디 AI 상담입니다. 제품, 기술, 도입 관련 궁금한 점을 자유롭게 물어보세요.';

const quickActions = [
  { label: 'TORR RF 소개', message: 'TORR RF가 뭔가요?' },
  { label: '경쟁 장비 비교', message: '써마지, 인모드랑 뭐가 다른가요?' },
  { label: '도입 상담', message: '장비 도입 상담 받고 싶습니다' },
  { label: '데모 신청', message: '데모 시연 가능한가요?' },
];

function renderContent(content: string) {
  const linkRegex = /(\/[a-z0-9\-\/]+)/g;
  const parts = content.split(linkRegex);
  return parts.map((part, i) => {
    if (part.match(/^\/[a-z0-9\-\/]+$/)) {
      return (
        <a key={i} href={part} className="text-teal-600 underline hover:text-teal-500">
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'assistant', content: GREETING },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(2);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = window.innerWidth < 768 ? 'hidden' : '';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { id: nextId.current++, role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const historyForApi = messages
        .filter((m) => m.id !== 1)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history: historyForApi }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, role: 'assistant', content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: nextId.current++,
          role: 'assistant',
          content: '죄송합니다, 일시적 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  const showQuickActions = messages.length <= 1;

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-white shadow-xl transition-transform hover:scale-105 hover:bg-teal-500 hover:shadow-2xl"
          aria-label="AI 상담 열기"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed z-50 flex flex-col overflow-hidden bg-white shadow-2xl
          bottom-0 left-0 right-0 h-[80vh] rounded-t-2xl
          md:bottom-24 md:right-6 md:left-auto md:h-auto md:max-h-[600px] md:w-[400px] md:rounded-2xl">

          {/* Header */}
          <div className="flex items-center justify-between bg-teal-600 px-5 py-4">
            <h3 className="text-sm font-bold text-white">브리츠메디 AI 상담</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="상담 닫기"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'rounded-br-md bg-teal-600 text-white'
                    : 'rounded-bl-md bg-zinc-100 text-zinc-900'
                }`}>
                  {renderContent(msg.content)}
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            {showQuickActions && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickActions.map((qa) => (
                  <button
                    key={qa.label}
                    onClick={() => sendMessage(qa.message)}
                    className="rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 text-xs font-medium text-teal-700 transition-colors hover:bg-teal-100"
                  >
                    {qa.label}
                  </button>
                ))}
              </div>
            )}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-md bg-zinc-100 px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" style={{ animationDelay: '0ms' }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" style={{ animationDelay: '150ms' }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-zinc-200 px-4 py-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="메시지를 입력하세요..."
              className="flex-1 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white transition-colors hover:bg-teal-500 disabled:opacity-50"
              aria-label="전송"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

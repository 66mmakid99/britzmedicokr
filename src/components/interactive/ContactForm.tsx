import { useState, type FormEvent, type ChangeEvent } from 'react';

interface FormData {
  company: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

interface Toast {
  type: 'success' | 'error';
  message: string;
}

const initialFormData: FormData = {
  company: '',
  name: '',
  position: '',
  email: '',
  phone: '',
  product: '',
  message: '',
};

const productOptions = [
  { value: '', label: '관심 제품 선택' },
  { value: 'TORR RF', label: 'TORR RF' },
  { value: 'ULBLANC', label: 'ULBLANC' },
  { value: 'NEWCHAE Shot', label: 'NEWCHAE Shot' },
  { value: 'LUMINO WAVE', label: 'LUMINO WAVE' },
  { value: '기타', label: '기타' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [toast, setToast] = useState<Toast | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function showToast(type: Toast['type'], message: string) {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  }

  function validate(): string | null {
    if (!formData.name.trim()) return '이름을 입력해 주세요.';
    if (!formData.email.trim()) return '이메일을 입력해 주세요.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return '올바른 이메일 형식을 입력해 주세요.';
    if (!formData.phone.trim()) return '연락처를 입력해 주세요.';
    if (!formData.message.trim()) return '문의 내용을 입력해 주세요.';
    return null;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const error = validate();
    if (error) {
      showToast('error', error);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.error) {
        showToast('error', data.error);
      } else {
        setIsSubmitted(true);
        setFormData(initialFormData);
      }
    } catch {
      showToast('error', '전송에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    'w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20';
  const labelClass = 'mb-1.5 block text-sm font-medium text-zinc-700';

  if (isSubmitted) {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
          <svg className="h-8 w-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-zinc-900">문의가 접수되었습니다</h3>
        <p className="text-zinc-600">담당자가 확인 후 빠르게 연락드리겠습니다.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 rounded-xl border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
        >
          추가 문의하기
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      {toast && (
        <div
          className={`fixed right-6 top-6 z-50 flex items-center gap-3 rounded-lg px-5 py-3 text-sm font-medium text-white shadow-lg ${
            toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
          }`}
        >
          <span>{toast.type === 'success' ? '\u2713' : '\u2717'}</span>
          <span>{toast.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className={labelClass}>회사명</label>
            <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} placeholder="회사/병원명" className={inputClass} />
          </div>
          <div>
            <label htmlFor="name" className={labelClass}>담당자명 <span className="text-red-500">*</span></label>
            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="이름 입력" className={inputClass} required />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelClass}>이메일 <span className="text-red-500">*</span></label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" className={inputClass} required />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>연락처 <span className="text-red-500">*</span></label>
            <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="010-0000-0000" className={inputClass} required />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="position" className={labelClass}>직책</label>
            <input id="position" name="position" type="text" value={formData.position} onChange={handleChange} placeholder="직책 (선택)" className={inputClass} />
          </div>
          <div>
            <label htmlFor="product" className={labelClass}>관심 제품</label>
            <select id="product" name="product" value={formData.product} onChange={handleChange} className={inputClass}>
              {productOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>문의 내용 <span className="text-red-500">*</span></label>
          <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="문의하실 내용을 자유롭게 작성해 주세요." className={`${inputClass} resize-y`} required />
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-teal-600 py-4 font-semibold text-white transition-colors hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-50">
          {isSubmitting ? '전송 중...' : '문의하기'}
        </button>

        <p className="text-center text-xs text-zinc-500">
          제출 시 <a href="/privacy" className="underline hover:text-teal-600">개인정보처리방침</a>에 동의합니다.
        </p>
      </form>
    </div>
  );
}

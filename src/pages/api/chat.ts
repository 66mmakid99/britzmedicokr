export const prerender = false;

import type { APIRoute } from 'astro';
import { CHATBOT_SYSTEM_PROMPT } from '@data/chatbot-knowledge';

export const POST: APIRoute = async ({ request }) => {
  const { message, history } = await request.json();

  if (!message || typeof message !== 'string') {
    return new Response(JSON.stringify({ reply: '메시지를 입력해 주세요.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const googleKey = (import.meta as any).env?.GOOGLE_AI_API_KEY
    || (typeof process !== 'undefined' ? process.env.GOOGLE_AI_API_KEY : '');
  const anthropicKey = (import.meta as any).env?.ANTHROPIC_API_KEY
    || (typeof process !== 'undefined' ? process.env.ANTHROPIC_API_KEY : '');

  if (!googleKey && !anthropicKey) {
    return new Response(
      JSON.stringify({
        reply: '현재 AI 상담 기능을 준비 중입니다. 상담 신청 페이지(/contact)를 이용해 주세요.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  }

  try {
    if (googleKey) {
      return await callGemini(message, history, googleKey);
    }
    return await callClaude(message, history, anthropicKey);
  } catch {
    return new Response(
      JSON.stringify({ reply: '죄송합니다, 일시적 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  }
};

async function callGemini(message: string, history: any[], apiKey: string) {
  const contents: any[] = [];

  const recentHistory = (history || []).slice(-10);
  for (const msg of recentHistory) {
    contents.push({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    });
  }
  contents.push({ role: 'user', parts: [{ text: message }] });

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: CHATBOT_SYSTEM_PROMPT }] },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
          topP: 0.9,
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
        ],
      }),
    },
  );

  const data = await response.json();
  const reply =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    '죄송합니다, 잠시 후 다시 시도해 주세요.';

  return new Response(JSON.stringify({ reply }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function callClaude(message: string, history: any[], apiKey: string) {
  const messages: any[] = [];

  const recentHistory = (history || []).slice(-10);
  for (const msg of recentHistory) {
    messages.push({ role: msg.role, content: msg.content });
  }
  messages.push({ role: 'user', content: message });

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 500,
      system: CHATBOT_SYSTEM_PROMPT,
      messages,
    }),
  });

  const data = await response.json();
  const reply =
    data?.content?.[0]?.text ||
    '죄송합니다, 잠시 후 다시 시도해 주세요.';

  return new Response(JSON.stringify({ reply }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

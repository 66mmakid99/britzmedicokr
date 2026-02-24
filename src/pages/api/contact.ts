export const prerender = false;

import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@lib/database.types';

export const POST: APIRoute = async ({ request, locals }) => {
  const body = await request.json();
  const { name, email, phone, company, position, message, product } = body;

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return new Response(
      JSON.stringify({ error: '이름, 이메일, 문의 내용은 필수입니다.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({ error: '올바른 이메일 형식을 입력해 주세요.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // Supabase client
  const runtimeEnv = (locals as any)?.runtime?.env || {};
  const supabaseUrl = runtimeEnv.PUBLIC_SUPABASE_URL
    || import.meta.env.PUBLIC_SUPABASE_URL
    || '';
  const supabaseKey = runtimeEnv.SUPABASE_SERVICE_ROLE_KEY
    || import.meta.env.SUPABASE_SERVICE_ROLE_KEY
    || runtimeEnv.PUBLIC_SUPABASE_ANON_KEY
    || import.meta.env.PUBLIC_SUPABASE_ANON_KEY
    || '';

  if (!supabaseUrl || !supabaseKey) {
    return new Response(
      JSON.stringify({ error: '서버 설정 오류입니다. 이메일(info@britzmedi.co.kr)로 문의해 주세요.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  try {
    const { error } = await supabase.from('contact_inquiries').insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      company: company?.trim() || null,
      position: position?.trim() || null,
      message: message.trim(),
      product_interest: product?.trim() || null,
    });

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    console.error('Contact form insert error:', err);
    return new Response(
      JSON.stringify({ error: '전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  }
};

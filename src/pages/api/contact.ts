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

    // 이메일 알림 발송 (Resend)
    const resendKey = runtimeEnv.RESEND_API_KEY
      || import.meta.env.RESEND_API_KEY
      || '';
    if (resendKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: 'BRITZMEDI <noreply@britzmedi.com>',
            to: ['sh.lee@britzmedi.co.kr'],
            subject: `[britzmedi.co.kr] 새 문의 — ${name.trim()} (${company?.trim() || '개인'})`,
            html: `
              <h2>새 문의가 접수되었습니다</h2>
              <table style="border-collapse:collapse;width:100%;max-width:500px;">
                <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">이름</td><td style="padding:8px;border-bottom:1px solid #eee;">${name.trim()}</td></tr>
                <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">이메일</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
                ${phone?.trim() ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">전화</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone.trim()}</td></tr>` : ''}
                ${company?.trim() ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">회사/병원</td><td style="padding:8px;border-bottom:1px solid #eee;">${company.trim()}</td></tr>` : ''}
                ${product?.trim() ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666;">관심 제품</td><td style="padding:8px;border-bottom:1px solid #eee;">${product.trim()}</td></tr>` : ''}
                <tr><td style="padding:8px;color:#666;" valign="top">문의 내용</td><td style="padding:8px;">${message.trim().replace(/\n/g, '<br>')}</td></tr>
              </table>
              <p style="margin-top:16px;color:#999;font-size:12px;">britzmedi.co.kr Contact Form</p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('Email notification failed:', emailErr);
      }
    }

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

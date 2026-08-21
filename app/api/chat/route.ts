// @ts-nocheck
import { siteConfig } from '@/siteConfig';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = (process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY || '').trim();

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Key missing" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 锁定为 gemini-1.5-flash，解决 404 问题
    const modelId = 'gemini-1.5-pro';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }],
        systemInstruction: {
          parts: [{ text: siteConfig?.geminiConfig?.systemPrompt || "你是一只可爱的猫咪。" }]
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({
        error: `Gemini API 错误: ${response.status}`,
        details: data.error?.message || "未知错误"
      }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "本喵现在不想理你喵...";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ status: "Ready" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
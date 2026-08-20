// app/api/chat/route.ts
import { siteConfig } from '@/siteConfig';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = (process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY || '').trim();

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Key missing" }), { status: 500 });
    }

    const modelId = siteConfig.geminiConfig.modelId || 'gemini-1.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // 修正为标准的驼峰格式 systemInstruction
        systemInstruction: {
          parts: [{ text: siteConfig.geminiConfig.systemPrompt }]
        },
        contents: [{
          parts: [{ text: message }]
        }],
        generationConfig: {
          maxOutputTokens: siteConfig.geminiConfig.maxOutputTokens,
          temperature: siteConfig.geminiConfig.temperature,
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({
        error: `Gemini API 错误: ${response.status}`,
        details: data.error?.message || "未知错误"
      }), { status: response.status });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "本喵现在不想理你喵...";

    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ status: "Ready", model: "Gemini API Route" }), { status: 200 });
}
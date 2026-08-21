// @ts-nocheck
export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // 1. 硬编码 Key
    const apiKey = process.env.GEMINI_API_KEY || '';

    // 2. 使用标准的 v1beta gemini-1.5-flash endpoint
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: message || "你好" }]
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      // 打印完整错误到控制台
      console.error("【Gemini API 完整报错】:", JSON.stringify(data));
      
      // 直接把 Google 返回的具体错误文字吐给前端，方便直观查看
      const errMsg = data.error?.message || "请求 Gemini 失败";
      return new Response(JSON.stringify({ reply: `API报错: ${errMsg}` }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    return new Response(JSON.stringify({ reply: replyText || "喵~" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error("【服务器运行异常】:", err);
    return new Response(JSON.stringify({ reply: `程序异常: ${err.message}` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
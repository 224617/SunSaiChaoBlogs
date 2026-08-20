"use client";

import React, { useState } from 'react';

export default function CyberCat() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setReply('思考中喵...');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setReply(data.reply || data.error || '出错了喵');
    } catch (err) {
      setReply('网络请求失败喵');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg max-w-sm bg-white/80 dark:bg-zinc-800/80 backdrop-blur">
      <div className="mb-2 text-sm font-bold">🐱 桌宠喵</div>
      <div className="min-h-[60px] p-2 bg-zinc-100 dark:bg-zinc-700 rounded text-sm mb-3">
        {reply || '你好呀！想跟我聊什么喵？'}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="给猫咪发消息..."
          className="flex-1 px-2 py-1 border rounded text-sm dark:bg-zinc-900"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50"
        >
          发送
        </button>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { X, Send, Sparkles, MessageCircle, Lightbulb, HelpCircle } from 'lucide-react';
import { Question } from '../types';

interface MascotMikoModalProps {
  question: Question;
  isOpen: boolean;
  onClose: () => void;
}

export const MascotMikoModal: React.FC<MascotMikoModalProps> = ({
  question,
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'miko'; text: string }>>([
    {
      sender: 'miko',
      text: `Meow! Halo Sobat Juara! 🐱 Aku Miko si Kucing Juara! Mau tanya apa tentang soal "${question.title}"? Jangan malu-malu ya, Miko siap jelaskan sampai kamu paham 100%! 🐾✨`,
    },
  ]);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    '🍰 Jelaskan pakai analogi kue/makanan!',
    '❌ Kenapa opsi jawaban lain salah?',
    '⚡ Ada trik cepat mengingat rumusnya?',
    '🕵️ Di mana letak jebakan soal ini?',
  ];

  const handleSend = async (userText: string) => {
    if (!userText.trim() || loading) return;

    const newMessages = [...messages, { sender: 'user' as const, text: userText }];
    setMessages(newMessages);
    setQuery('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/ask-mascot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionTitle: question.title,
          questionContent: question.question,
          explanation: question.explanation.summary + ' ' + question.explanation.steps.join(' '),
          studentQuery: userText,
          subject: question.subject,
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          sender: 'miko',
          text: data.reply || 'Meow! Kuncinya adalah baca pelan-pelan dan teliti ya Sobat Juara! Kamu pasti bisa!',
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'miko',
          text: 'Meow! 🐱 Sinyal Miko sempat tergelincir, tapi intinya: perhatikan kata kunci di soal ya, Sobat Juara! Semangat terus!',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-4 border-amber-300 flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 p-4 flex items-center justify-between text-white shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white text-2xl flex items-center justify-center shadow-md border-2 border-amber-200">
              🐱
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-black text-lg font-fun leading-tight">Miko si Kucing Juara</h3>
                <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  AI Tutor SD
                </span>
              </div>
              <p className="text-xs text-amber-100 font-medium">Sahabat Belajar TKA yang Asik & Ramah</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/15 hover:bg-black/25 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/70">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              {msg.sender === 'miko' && (
                <div className="w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center text-sm font-bold shadow-xs shrink-0 mt-1">
                  🐱
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white font-medium rounded-tr-xs'
                    : 'bg-white border border-amber-200 text-slate-800 rounded-tl-xs'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold p-2">
              <span className="animate-spin text-amber-500 text-base">🐾</span>
              <span>Miko sedang mengetik rahasia jurus cepat...</span>
            </div>
          )}
        </div>

        {/* Quick prompt suggestions */}
        <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto text-xs pb-2 scrollbar-none">
          {quickPrompts.map((p, i) => (
            <button
              key={i}
              type="button"
              disabled={loading}
              onClick={() => handleSend(p)}
              className="shrink-0 px-2.5 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors font-medium text-[11px]"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input box */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(query)}
            placeholder="Ketik pertanyaanmu untuk Miko di sini..."
            disabled={loading}
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
          />
          <button
            type="button"
            disabled={loading || !query.trim()}
            onClick={() => handleSend(query)}
            className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white transition-transform active:scale-95 shadow-md flex items-center justify-center cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

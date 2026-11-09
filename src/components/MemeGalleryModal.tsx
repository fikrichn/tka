import React, { useState } from 'react';
import { X, Lock, CheckCircle, Award, Sparkles } from 'lucide-react';
import { CORRECT_MEMES, WRONG_MEMES, CELEBRATE_MEMES } from '../data/memes';
import { MemeItem } from '../types';
import { MemeCard } from './MemeCard';

interface MemeGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedMemeIds: Set<string>;
}

export const MemeGalleryModal: React.FC<MemeGalleryModalProps> = ({
  isOpen,
  onClose,
  unlockedMemeIds,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'correct' | 'wrong'>('all');
  const [selectedMeme, setSelectedMeme] = useState<MemeItem | null>(null);

  if (!isOpen) return null;

  const allMemes = [...CORRECT_MEMES, ...WRONG_MEMES, ...CELEBRATE_MEMES];
  const filteredMemes = allMemes.filter((m) => {
    if (activeTab === 'correct') return m.type === 'correct' || m.type === 'celebrate';
    if (activeTab === 'wrong') return m.type === 'wrong';
    return true;
  });

  const unlockedCount = allMemes.filter((m) => unlockedMemeIds.has(m.id)).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border-4 border-amber-300 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 p-4 md:p-5 flex items-center justify-between text-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-md border-2 border-amber-200">
              🖼️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-xl font-fun">Album Meme Juara TKA</h3>
                <span className="bg-amber-800 text-amber-100 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {unlockedCount} / {allMemes.length} Terkumpul
                </span>
              </div>
              <p className="text-xs text-amber-900 font-medium">
                Koleksi stiker & meme motivasi lucu yang bikin belajar makin asik!
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors text-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter tabs */}
        <div className="p-3 bg-amber-50/70 border-b border-amber-200 flex items-center justify-between gap-2">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-amber-100'
              }`}
            >
              Semua Meme ({allMemes.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('correct')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'correct'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-emerald-50'
              }`}
            >
              Meme Menang 🎉
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('wrong')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'wrong'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-rose-50'
              }`}
            >
              Meme Penyemangat ☕
            </button>
          </div>

          <span className="text-[11px] font-semibold text-amber-800 hidden sm:inline">
            💡 Kerjakan terus soal untuk membuka stiker langka!
          </span>
        </div>

        {/* Meme Grid */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 bg-slate-50">
          {filteredMemes.map((m) => {
            const isUnlocked = unlockedMemeIds.has(m.id);

            return (
              <div
                key={m.id}
                onClick={() => isUnlocked && setSelectedMeme(m)}
                className={`relative rounded-2xl p-4 border-2 transition-all flex flex-col items-center justify-center text-center ${
                  isUnlocked
                    ? 'bg-white border-amber-300 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer'
                    : 'bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed'
                }`}
              >
                {/* Rarity Tag */}
                <div className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  {m.rarity}
                </div>

                {/* Status Indicator */}
                <div className="absolute top-2.5 right-2.5">
                  {isUnlocked ? (
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Lock className="w-4 h-4 text-slate-400" />
                  )}
                </div>

                <div className="text-4xl my-3">{isUnlocked ? m.emoji : '🔒'}</div>

                <h4 className="font-black text-xs md:text-sm text-slate-900 font-fun line-clamp-1">
                  {isUnlocked ? m.title : 'Stiker Terkunci'}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                  {isUnlocked ? m.character : 'Jawab soal untuk membuka'}
                </p>
              </div>
            );
          })}
        </div>

        {/* Modal preview when clicking an unlocked meme */}
        {selectedMeme && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
            <div className="relative w-full max-w-sm">
              <button
                type="button"
                onClick={() => setSelectedMeme(null)}
                className="absolute -top-3 -right-3 z-30 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
              <MemeCard
                meme={selectedMeme}
                onContinue={() => setSelectedMeme(null)}
                continueText="Tutup Pratinjau Stiker ✨"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { MemeItem } from '../types';
import { MemeCard } from './MemeCard';
import { X } from 'lucide-react';

interface MemePopupModalProps {
  meme: MemeItem | null;
  isOpen: boolean;
  onClose: () => void;
  onViewExplanation?: () => void;
  onNextQuestion?: () => void;
  hasNextQuestion?: boolean;
}

export const MemePopupModal: React.FC<MemePopupModalProps> = ({
  meme,
  isOpen,
  onClose,
  onViewExplanation,
  onNextQuestion,
  hasNextQuestion = true,
}) => {
  if (!isOpen || !meme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md animate-pop-in">
        {/* Close icon button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full bg-white shadow-lg border-2 border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <MemeCard
          meme={meme}
          onContinue={() => {
            onClose();
            if (onNextQuestion && hasNextQuestion) {
              onNextQuestion();
            } else if (onViewExplanation) {
              onViewExplanation();
            }
          }}
          continueText={
            hasNextQuestion ? 'Lanjut ke Soal Berikutnya 🚀' : 'Lihat Hasil Akhir & Pembahasan 🏆'
          }
        />

        {onViewExplanation && (
          <div className="mt-2 text-center">
            <button
              type="button"
              onClick={() => {
                onClose();
                onViewExplanation();
              }}
              className="text-xs font-bold text-white/90 hover:text-white underline underline-offset-4 py-1 cursor-pointer"
            >
              📖 Tetap di sini & pelajari pembahasan soal ini
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

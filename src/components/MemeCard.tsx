import React from 'react';
import { MemeItem } from '../types';
import { Sparkles, Award } from 'lucide-react';

interface MemeCardProps {
  meme: MemeItem;
  size?: 'normal' | 'large';
  onContinue?: () => void;
  continueText?: string;
}

export const MemeCard: React.FC<MemeCardProps> = ({
  meme,
  size = 'normal',
  onContinue,
  continueText = 'Lanjut ke Soal Berikutnya 🚀',
}) => {
  // Render specific cute SVG character illustration based on theme
  const renderIllustration = (theme: string) => {
    switch (theme) {
      case 'cat_shades':
        return (
          <svg viewBox="0 0 160 160" className="w-32 h-32 md:w-40 md:h-40 drop-shadow-md">
            {/* Cute cat ears */}
            <polygon points="35,65 50,20 75,55" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
            <polygon points="45,55 52,30 68,52" fill="#fbcfe8" />
            <polygon points="125,65 110,20 85,55" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
            <polygon points="115,55 108,30 92,52" fill="#fbcfe8" />
            {/* Cat head */}
            <circle cx="80" cy="85" r="50" fill="#fb923c" stroke="#c2410c" strokeWidth="3" />
            {/* Cool Sunglasses */}
            <rect x="42" y="70" width="34" height="24" rx="6" fill="#0f172a" />
            <rect x="84" y="70" width="34" height="24" rx="6" fill="#0f172a" />
            <rect x="74" y="76" width="12" height="4" fill="#0f172a" />
            {/* Sunglass glare shine */}
            <polygon points="48,74 58,74 44,90 44,80" fill="#38bdf8" />
            <polygon points="90,74 100,74 86,90 86,80" fill="#38bdf8" />
            {/* Cat nose & mouth */}
            <polygon points="80,102 75,97 85,97" fill="#f43f5e" />
            <path d="M 75 104 Q 80 110 85 104" stroke="#7c2d12" strokeWidth="2.5" fill="none" />
            {/* Cute whiskers */}
            <line x1="30" y1="95" x2="10" y2="90" stroke="#7c2d12" strokeWidth="2.5" />
            <line x1="30" y1="105" x2="10" y2="105" stroke="#7c2d12" strokeWidth="2.5" />
            <line x1="130" y1="95" x2="150" y2="90" stroke="#7c2d12" strokeWidth="2.5" />
            <line x1="130" y1="105" x2="150" y2="105" stroke="#7c2d12" strokeWidth="2.5" />
            {/* Golden bling chain */}
            <path d="M 50 130 Q 80 155 110 130" stroke="#eab308" strokeWidth="6" fill="none" strokeDasharray="6,2" />
            <circle cx="80" cy="146" r="8" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
            <text x="80" y="150" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350f">100</text>
          </svg>
        );

      case 'capybara':
        return (
          <svg viewBox="0 0 160 160" className="w-32 h-32 md:w-40 md:h-40 drop-shadow-md">
            {/* Bath water ripple */}
            <ellipse cx="80" cy="130" rx="60" ry="20" fill="#38bdf8" />
            <ellipse cx="80" cy="125" rx="50" ry="12" fill="#7dd3fc" />
            {/* Capybara body & head */}
            <rect x="45" y="60" width="70" height="65" rx="25" fill="#a16207" stroke="#713f12" strokeWidth="3" />
            {/* Orange on head */}
            <circle cx="80" cy="48" r="14" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
            <ellipse cx="82" cy="36" rx="4" ry="2" fill="#22c55e" />
            {/* Peaceful closed eyes */}
            <path d="M 56 82 Q 65 78 74 82" stroke="#451a03" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 86 82 Q 95 78 104 82" stroke="#451a03" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Muzzle */}
            <rect x="62" y="94" width="36" height="24" rx="8" fill="#78350f" />
            <circle cx="72" cy="104" r="2.5" fill="#451a03" />
            <circle cx="88" cy="104" r="2.5" fill="#451a03" />
            {/* Cute pink cheek */}
            <circle cx="52" cy="95" r="6" fill="#f43f5e" opacity="0.4" />
            <circle cx="108" cy="95" r="6" fill="#f43f5e" opacity="0.4" />
          </svg>
        );

      case 'cat_detective':
        return (
          <svg viewBox="0 0 160 160" className="w-32 h-32 md:w-40 md:h-40 drop-shadow-md">
            {/* Detective Hat */}
            <ellipse cx="80" cy="45" rx="48" ry="14" fill="#78350f" stroke="#451a03" strokeWidth="2" />
            <path d="M 45 45 C 50 15 110 15 115 45 Z" fill="#92400e" stroke="#451a03" strokeWidth="2" />
            {/* Head */}
            <circle cx="80" cy="85" r="44" fill="#fed7aa" stroke="#c2410c" strokeWidth="3" />
            {/* Big Curious Eyes */}
            <circle cx="65" cy="80" r="10" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
            <circle cx="67" cy="80" r="6" fill="#0284c7" />
            <circle cx="69" cy="78" r="2" fill="#ffffff" />
            {/* Magnifying Glass */}
            <circle cx="95" cy="82" r="18" fill="#e0f2fe" stroke="#0284c7" strokeWidth="4" />
            <circle cx="95" cy="82" r="10" fill="#0284c7" />
            <circle cx="98" cy="79" r="3" fill="#ffffff" />
            <line x1="108" y1="95" x2="135" y2="125" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
            {/* Nose & Mouth */}
            <polygon points="76,96 72,92 80,92" fill="#f43f5e" />
            <path d="M 72 99 Q 76 104 80 99" stroke="#7c2d12" strokeWidth="2" fill="none" />
          </svg>
        );

      case 'cat_stare':
      case 'cat_shock':
        return (
          <svg viewBox="0 0 160 160" className="w-32 h-32 md:w-40 md:h-40 drop-shadow-md">
            {/* Cat ears */}
            <polygon points="35,65 45,25 70,55" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
            <polygon points="125,65 115,25 90,55" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
            {/* Head */}
            <circle cx="80" cy="85" r="48" fill="#fdba74" stroke="#c2410c" strokeWidth="3" />
            {/* Wide shock eyes */}
            <circle cx="60" cy="75" r="14" fill="#ffffff" stroke="#431407" strokeWidth="3" />
            <circle cx="60" cy="75" r="5" fill="#431407" />
            <circle cx="100" cy="75" r="14" fill="#ffffff" stroke="#431407" strokeWidth="3" />
            <circle cx="100" cy="75" r="5" fill="#431407" />
            {/* Big O open mouth */}
            <ellipse cx="80" cy="105" rx="12" ry="16" fill="#881337" stroke="#431407" strokeWidth="3" />
            <ellipse cx="80" cy="112" rx="8" ry="7" fill="#f43f5e" />
            {/* Whiskers */}
            <line x1="30" y1="88" x2="10" y2="85" stroke="#7c2d12" strokeWidth="2.5" />
            <line x1="30" y1="98" x2="10" y2="100" stroke="#7c2d12" strokeWidth="2.5" />
            <line x1="130" y1="88" x2="150" y2="85" stroke="#7c2d12" strokeWidth="2.5" />
            <line x1="130" y1="98" x2="150" y2="100" stroke="#7c2d12" strokeWidth="2.5" />
          </svg>
        );

      case 'cat_crown':
      case 'cat_happy':
      default:
        return (
          <svg viewBox="0 0 160 160" className="w-32 h-32 md:w-40 md:h-40 drop-shadow-md">
            {/* Golden Crown */}
            <polygon points="50,42 62,20 80,35 98,20 110,42" fill="#facc15" stroke="#ca8a04" strokeWidth="3" />
            <circle cx="62" cy="18" r="4" fill="#ef4444" />
            <circle cx="80" cy="32" r="4" fill="#3b82f6" />
            <circle cx="98" cy="18" r="4" fill="#10b981" />
            {/* Cat ears */}
            <polygon points="35,70 45,35 70,60" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
            <polygon points="125,70 115,35 90,60" fill="#f97316" stroke="#c2410c" strokeWidth="3" />
            {/* Head */}
            <circle cx="80" cy="90" r="46" fill="#fb923c" stroke="#c2410c" strokeWidth="3" />
            {/* Starry eyes */}
            <path d="M 60 76 Q 64 84 68 76 Q 64 68 60 76" fill="#451a03" />
            <circle cx="62" cy="80" r="8" fill="#0284c7" />
            <circle cx="65" cy="78" r="3" fill="#ffffff" />
            <circle cx="98" cy="80" r="8" fill="#0284c7" />
            <circle cx="101" cy="78" r="3" fill="#ffffff" />
            {/* Happy smiling mouth with tongue */}
            <path d="M 70 102 Q 80 118 90 102 Z" fill="#f43f5e" stroke="#451a03" strokeWidth="2.5" />
            {/* Pink cheeks */}
            <circle cx="48" cy="94" r="6" fill="#f43f5e" opacity="0.5" />
            <circle cx="112" cy="94" r="6" fill="#f43f5e" opacity="0.5" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border-4 ${
        meme.type === 'correct'
          ? 'border-emerald-400 bg-gradient-to-b from-emerald-50 via-teal-50 to-white'
          : 'border-amber-400 bg-gradient-to-b from-amber-50 via-orange-50 to-white'
      } p-6 shadow-xl text-center animate-pop-in`}
    >
      {/* Decorative top pill badge */}
      <div className="flex items-center justify-between mb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase shadow-xs ${
            meme.type === 'correct' ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'
          }`}
        >
          {meme.type === 'correct' ? <Sparkles className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5" />}
          {meme.type === 'correct' ? 'JAWABAN BENAR!' : 'YUK BANGKIT LAGI!'}
        </span>

        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
          Meme: {meme.rarity}
        </span>
      </div>

      {/* Main Illustration */}
      <div className="flex justify-center items-center py-2 animate-bounce-gentle">
        {renderIllustration(meme.theme)}
      </div>

      {/* Meme Title / Punchline */}
      <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight font-fun mt-1 mb-1">
        {meme.title}
      </h3>

      <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
        {meme.tagline}
      </p>

      {/* Speech bubble / Quote */}
      <div
        className={`relative mx-auto max-w-md p-4 rounded-2xl border-2 text-sm md:text-base font-extrabold shadow-sm ${
          meme.type === 'correct'
            ? 'bg-emerald-100/80 border-emerald-300 text-emerald-950'
            : 'bg-amber-100/80 border-amber-300 text-amber-950'
        }`}
      >
        <span className="text-2xl mr-1.5">{meme.emoji}</span>
        {meme.caption}
      </div>

      {/* Continue Action Button */}
      {onContinue && (
        <div className="mt-5 pt-2">
          <button
            type="button"
            onClick={onContinue}
            className={`w-full py-3.5 px-6 rounded-2xl font-black text-base md:text-lg text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95 cursor-pointer ${
              meme.type === 'correct'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-500/25'
                : 'bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/25'
            }`}
          >
            {continueText}
          </button>
        </div>
      )}
    </div>
  );
};

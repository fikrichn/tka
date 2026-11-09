import React, { useState } from 'react';
import { BookOpen, Highlighter, Type, Info } from 'lucide-react';
import { TextGenre } from '../types';

interface ReadingPassageCardProps {
  title?: string;
  passage: string;
  genre?: TextGenre;
}

export const ReadingPassageCard: React.FC<ReadingPassageCardProps> = ({
  title,
  passage,
  genre,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [isHighlightMode, setIsHighlightMode] = useState(false);

  const getGenreColor = (g?: TextGenre) => {
    switch (g) {
      case 'Narasi':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Deskripsi':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Eksposisi':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Persuasi':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Prosedur':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getGenreDescription = (g?: TextGenre) => {
    switch (g) {
      case 'Narasi':
        return 'Teks cerita rekaan atau kisah bertahap dengan tokoh dan alur peristiwa.';
      case 'Deskripsi':
        return 'Menggambarkan objek atau tempat secara rinci melibatkan panca indra.';
      case 'Eksposisi':
        return 'Menyajikan informasi faktual berbasis ilmu pengetahuan dan data nyata.';
      case 'Persuasi':
        return 'Berisi ajakan atau bujukan agar pembaca tergerak melakukan sesuatu.';
      case 'Prosedur':
        return 'Petunjuk langkah-langkah terstruktur untuk membuat atau melakukan sesuatu.';
      default:
        return 'Teks literasi bacaan Asesmen TKA SD.';
    }
  };

  return (
    <div className="mb-6 rounded-2xl bg-amber-50/50 border-2 border-amber-200/80 p-4 md:p-5 shadow-xs relative">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-amber-200/60">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-xs">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-sm md:text-base leading-tight">
              {title || 'Teks Literasi Membaca'}
            </h4>
            {genre && (
              <span
                className={`inline-block text-[11px] font-bold px-2 py-0.5 mt-0.5 rounded-full border ${getGenreColor(
                  genre
                )}`}
              >
                Teks {genre}
              </span>
            )}
          </div>
        </div>

        {/* Reading tools: font size & highlighter */}
        <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-xl border border-amber-200/80 shadow-xs">
          <button
            type="button"
            onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            title="Ubah Ukuran Teks"
          >
            <Type className="w-3.5 h-3.5" />
            <span>{fontSize === 'normal' ? 'A+' : 'A-'}</span>
          </button>

          <div className="w-px h-4 bg-slate-200" />

          <button
            type="button"
            onClick={() => setIsHighlightMode(!isHighlightMode)}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-colors ${
              isHighlightMode
                ? 'bg-yellow-300 text-yellow-950 font-bold shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
            title="Mode Stabilo Kuning"
          >
            <Highlighter className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Stabilo</span>
          </button>
        </div>
      </div>

      {/* Genre mini info badge */}
      {genre && (
        <div className="mb-3 px-3 py-1.5 rounded-xl bg-white/80 border border-amber-100 flex items-center gap-2 text-xs text-slate-600">
          <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>{getGenreDescription(genre)}</span>
        </div>
      )}

      {/* Reading passage content */}
      <div
        className={`bg-white/90 rounded-xl p-4 border border-amber-100/80 text-slate-800 leading-relaxed transition-all ${
          fontSize === 'large' ? 'text-base md:text-lg' : 'text-sm md:text-base'
        } ${isHighlightMode ? 'selection:bg-yellow-300 selection:text-slate-950' : ''}`}
      >
        {passage.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-2.5 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>

      {isHighlightMode && (
        <p className="mt-2 text-[11px] text-amber-700 font-medium italic">
          💡 Tips: Blok kata atau kalimat penting dengan mouse/jari untuk menandai jawaban!
        </p>
      )}
    </div>
  );
};

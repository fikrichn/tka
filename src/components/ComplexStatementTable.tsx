import React from 'react';
import { ComplexStatement } from '../types';
import { CheckCircle2, XCircle } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ComplexStatementTableProps {
  statements: ComplexStatement[];
  userAnswers: Record<string, boolean>; // id -> true (Benar) / false (Salah)
  onChange: (id: string, value: boolean) => void;
  isSubmitted: boolean;
  disabled?: boolean;
}

export const ComplexStatementTable: React.FC<ComplexStatementTableProps> = ({
  statements,
  userAnswers,
  onChange,
  isSubmitted,
  disabled = false,
}) => {
  const handleSelect = (id: string, value: boolean) => {
    if (disabled || isSubmitted) return;
    soundManager.playPop();
    onChange(id, value);
  };

  return (
    <div className="my-4 overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-xs">
      <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex justify-between items-center">
        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          Pernyataan Soal
        </span>
        <div className="flex items-center gap-6 pr-2">
          <span className="text-xs font-extrabold text-emerald-700">BENAR</span>
          <span className="text-xs font-extrabold text-rose-700">SALAH</span>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {statements.map((stmt, index) => {
          const selected = userAnswers[stmt.id];
          const hasAnswered = selected !== undefined;
          const isRowCorrect = isSubmitted ? selected === stmt.isCorrect : null;

          return (
            <div
              key={stmt.id}
              className={`p-3.5 transition-colors ${
                isSubmitted
                  ? isRowCorrect
                    ? 'bg-emerald-50/40'
                    : 'bg-rose-50/40'
                  : 'hover:bg-slate-50/60'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block text-xs font-bold text-slate-400 mr-1.5">
                    {index + 1}.
                  </span>
                  <span className="text-sm md:text-base font-medium text-slate-800 leading-snug">
                    {stmt.text}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0 pt-0.5">
                  {/* Option BENAR */}
                  <button
                    type="button"
                    disabled={disabled || isSubmitted}
                    onClick={() => handleSelect(stmt.id, true)}
                    className={`w-14 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer border ${
                      selected === true
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs scale-105'
                        : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 border-slate-200'
                    } ${disabled || isSubmitted ? 'cursor-default' : ''}`}
                  >
                    Benar
                  </button>

                  {/* Option SALAH */}
                  <button
                    type="button"
                    disabled={disabled || isSubmitted}
                    onClick={() => handleSelect(stmt.id, false)}
                    className={`w-14 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer border ${
                      selected === false
                        ? 'bg-rose-600 text-white border-rose-600 shadow-xs scale-105'
                        : 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-700 border-slate-200'
                    } ${disabled || isSubmitted ? 'cursor-default' : ''}`}
                  >
                    Salah
                  </button>
                </div>
              </div>

              {/* Submitted status row explanation */}
              {isSubmitted && (
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-start gap-2 text-xs">
                  {isRowCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="text-slate-600">
                    <span className="font-bold text-slate-900">
                      Kunci: {stmt.isCorrect ? 'BENAR' : 'SALAH'}.
                    </span>{' '}
                    {stmt.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

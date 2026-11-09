import React from 'react';

interface FractionBar {
  label: string;
  value: number; // 0 to 1
  color: string;
  text: string;
}

interface FractionVisualizerProps {
  data: {
    title?: string;
    bars: FractionBar[];
  };
}

export const FractionVisualizer: React.FC<FractionVisualizerProps> = ({ data }) => {
  return (
    <div className="my-4 p-4 bg-amber-50/70 border-2 border-amber-200/70 rounded-2xl">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">🍰</span>
        <h4 className="font-bold text-amber-950 text-sm md:text-base">
          {data.title || 'Visualisasi Balok Pecahan & Nilai Desimal'}
        </h4>
      </div>

      <div className="space-y-3">
        {data.bars.map((bar, idx) => (
          <div key={idx} className="bg-white p-2.5 rounded-xl border border-amber-100 shadow-xs">
            <div className="flex justify-between items-center text-xs md:text-sm font-semibold mb-1.5">
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 font-mono">
                {bar.label}
              </span>
              <span className="text-slate-600 font-medium">
                Nilai: <strong className="text-slate-900">{bar.text}</strong>
              </span>
            </div>

            {/* Visual Bar representation */}
            <div className="w-full h-6 bg-slate-100 rounded-lg overflow-hidden relative border border-slate-200">
              {/* Tick marks at 25%, 50%, 75% */}
              <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                <div className="w-px h-full bg-slate-800" />
                <div className="w-px h-full bg-slate-800" />
                <div className="w-px h-full bg-slate-800" />
                <div className="w-px h-full bg-slate-800" />
              </div>
              <div
                className="h-full rounded-md transition-all duration-700 flex items-center justify-end pr-2 text-[10px] font-bold text-white shadow-xs"
                style={{
                  width: `${Math.round(bar.value * 100)}%`,
                  backgroundColor: bar.color,
                }}
              >
                {Math.round(bar.value * 100)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-amber-800/80 px-1">
        <span>0 (Kosong)</span>
        <span>0.5 (Setengah / 50%)</span>
        <span>1.0 (Penuh / 100%)</span>
      </div>
    </div>
  );
};

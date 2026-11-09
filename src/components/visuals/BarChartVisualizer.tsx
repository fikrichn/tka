import React from 'react';

interface BarItem {
  day: string;
  count: number;
  color?: string;
}

interface BarChartVisualizerProps {
  data: {
    title: string;
    yAxisLabel?: string;
    bars: BarItem[];
  };
}

export const BarChartVisualizer: React.FC<BarChartVisualizerProps> = ({ data }) => {
  const maxCount = Math.max(...data.bars.map((b) => b.count), 70);

  return (
    <div className="my-4 p-4 bg-blue-50/70 border-2 border-blue-200/70 rounded-2xl">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">📊</span>
          <h4 className="font-bold text-blue-950 text-sm md:text-base">{data.title}</h4>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full">
          Diagram Batang Resmi
        </span>
      </div>

      <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-xs">
        <div className="relative h-48 flex items-end justify-between gap-2 pt-6 pb-4 border-b border-l border-slate-300 px-2">
          {/* Background grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-15 pl-6">
            <div className="border-b border-dashed border-slate-600 w-full" />
            <div className="border-b border-dashed border-slate-600 w-full" />
            <div className="border-b border-dashed border-slate-600 w-full" />
            <div className="border-b border-dashed border-slate-600 w-full" />
          </div>

          {data.bars.map((bar, idx) => {
            const heightPercent = (bar.count / maxCount) * 100;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group z-10">
                {/* Tooltip / value */}
                <span className="text-xs font-extrabold text-slate-700 mb-1 group-hover:scale-110 transition-transform">
                  {bar.count}
                </span>

                {/* The Bar */}
                <div
                  className="w-full max-w-[48px] rounded-t-lg transition-all duration-700 hover:brightness-110 shadow-sm relative"
                  style={{
                    height: `${heightPercent}%`,
                    backgroundColor: bar.color || '#3b82f6',
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* X-axis Label */}
                <span className="text-[11px] md:text-xs font-bold text-slate-600 mt-2 truncate w-full text-center">
                  {bar.day}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center text-[11px] text-slate-500 mt-2 pt-1">
          <span>Sumbu Y: {data.yAxisLabel || 'Frekuensi (Jumlah)'}</span>
          <span>Sumbu X: Kategori Hari</span>
        </div>
      </div>
    </div>
  );
};

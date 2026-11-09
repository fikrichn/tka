import React from 'react';

interface GeometryVisualizerProps {
  data: {
    shape?: string;
    type?: string;
    base?: number;
    height?: number;
    hypotenuse?: number;
    length?: number;
    width?: number;
    flowerBedBase?: number;
    flowerBedHeight?: number;
  };
}

export const GeometryVisualizer: React.FC<GeometryVisualizerProps> = ({ data }) => {
  if (data.type === 'garden_fence') {
    return (
      <div className="my-4 p-4 bg-emerald-50/70 border-2 border-emerald-200/70 rounded-2xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🏡</span>
          <h4 className="font-bold text-emerald-950 text-sm md:text-base">
            Ilustrasi Pekarangan dan Kolam Segitiga Siku-siku
          </h4>
        </div>

        <div className="bg-white p-3 rounded-xl border border-emerald-100 flex flex-col items-center">
          <svg viewBox="0 0 320 200" className="w-full max-w-sm h-48 drop-shadow-xs">
            {/* Main rectangle yard */}
            <rect
              x="20"
              y="20"
              width="260"
              height="150"
              fill="#dcfce7"
              stroke="#15803d"
              strokeWidth="2.5"
              rx="4"
            />
            {/* Corner pond (triangle) */}
            <polygon
              points="20,20 120,20 20,110"
              fill="#93c5fd"
              stroke="#1d4ed8"
              strokeWidth="2.5"
            />
            {/* Labels */}
            <text x="135" y="15" textAnchor="middle" className="text-[12px] font-bold fill-slate-700">
              Panjang = 24 meter
            </text>
            <text x="290" y="100" textAnchor="middle" className="text-[12px] font-bold fill-slate-700" transform="rotate(90, 290, 100)">
              Lebar = 15 meter
            </text>
            <text x="65" y="55" textAnchor="middle" className="text-[11px] font-extrabold fill-blue-900">
              Kolam Ikan
            </text>
            <text x="65" y="70" textAnchor="middle" className="text-[10px] font-medium fill-blue-800">
              (8m × 6m)
            </text>
            <text x="175" y="105" textAnchor="middle" className="text-[13px] font-extrabold fill-emerald-800">
              Rumput Hias Jepang
            </text>
          </svg>
          <p className="text-xs text-slate-500 mt-1">
            Area hijau = Luas Lahan Rumput (Luas Pekarangan dikurangi Luas Kolam)
          </p>
        </div>
      </div>
    );
  }

  // Default triangle visualizer
  return (
    <div className="my-4 p-4 bg-purple-50/70 border-2 border-purple-200/70 rounded-2xl">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">📐</span>
        <h4 className="font-bold text-purple-950 text-sm md:text-base">
          Analisis Sudut dan Sisi Segitiga Siku-Siku
        </h4>
      </div>

      <div className="bg-white p-3 rounded-xl border border-purple-100 flex flex-col items-center">
        <svg viewBox="0 0 280 200" className="w-full max-w-xs h-44">
          {/* Right triangle */}
          <polygon
            points="40,160 220,160 40,30"
            fill="#f3e8ff"
            stroke="#7e22ce"
            strokeWidth="2.5"
          />
          {/* Right angle symbol */}
          <polyline
            points="40,142 58,142 58,160"
            fill="none"
            stroke="#7e22ce"
            strokeWidth="2"
          />
          {/* Dot in right angle */}
          <circle cx="49" cy="151" r="2" fill="#7e22ce" />

          {/* Labels */}
          <text x="130" y="180" textAnchor="middle" className="text-[12px] font-bold fill-slate-700">
            Alas (sisi siku-siku 1)
          </text>
          <text x="25" y="95" textAnchor="middle" className="text-[12px] font-bold fill-slate-700" transform="rotate(-90, 25, 95)">
            Tinggi (sisi 2)
          </text>
          <text x="150" y="85" textAnchor="middle" className="text-[12px] font-bold fill-purple-900" transform="rotate(35, 150, 85)">
            Sisi Miring (Hipotenusa)
          </text>
          <text x="65" y="148" className="text-[10px] font-bold fill-purple-700">
            90°
          </text>
        </svg>
        <span className="text-xs text-purple-800 font-medium mt-1">
          Sudut siku-siku selalu tepat 90°, sisi miring selalu sisi terpanjang!
        </span>
      </div>
    </div>
  );
};

"use client";

import React from "react";

interface LocationSectionProps {
  address: string;
  locPoints: [string, string, string];
}

export default function LocationSection({
  address,
  locPoints,
}: LocationSectionProps) {
  return (
    <div
      id="lokasi"
      className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12"
    >
      <div className="p-6 sm:p-8 md:col-span-5 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600">
            Lokasi Strategis
          </span>
          <h3 className="text-xl font-extrabold text-stone-900 mt-1">
            Alamat & Petunjuk Jalan
          </h3>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            {address}
          </p>

          <div className="mt-5 space-y-2.5 text-xs sm:text-sm text-stone-700">
            <div className="flex items-center gap-2.5">
              <i className="fa-solid fa-location-dot text-terracotta-500 w-4 text-center"></i>
              <span>{locPoints[0]}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <i className="fa-solid fa-train text-terracotta-500 w-4 text-center"></i>
              <span>{locPoints[1]}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <i className="fa-solid fa-utensils text-terracotta-500 w-4 text-center"></i>
              <span>{locPoints[2]}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-stone-100">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition"
          >
            <i className="fa-solid fa-map-location-dot text-amber-400"></i>
            <span>Buka Petunjuk Arah di Google Maps</span>
          </a>
        </div>
      </div>

      {/* Visual Simulasi Embed Peta Google Maps */}
      <div className="md:col-span-7 bg-stone-200 min-h-65 relative flex items-center justify-center overflow-hidden">
        <iframe
          title="Peta Lokasi Omah Senja"
          src="https://www.openstreetmap.org/export/embed.html?bbox=110.3600%2C-7.8250%2C110.3800%2C-7.8100&amp;layer=mapnik"
          className="w-full h-full min-h-70 border-0 filter contrast-95"
        ></iframe>
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow text-xs font-semibold text-stone-700 pointer-events-none">
          📍 Area Parkir Luas (Akses Mobil Mudah)
        </div>
      </div>
    </div>
  );
}


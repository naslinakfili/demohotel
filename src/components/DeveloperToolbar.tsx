"use client";

import React from "react";
import { ModeType } from "../types/homestay";

interface DeveloperToolbarProps {
  currentMode: ModeType;
  onSwitchMode: (mode: ModeType) => void;
}

export default function DeveloperToolbar({
  currentMode,
  onSwitchMode,
}: DeveloperToolbarProps) {
  return (
    <div className="bg-stone-900 text-stone-100 px-4 py-2.5 text-xs sm:text-sm border-b border-stone-700 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="bg-amber-500 text-stone-950 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
            Mode Demo Developer
          </span>
          <span className="text-stone-300 hidden md:inline">
            Pilih jenis klien UMKM untuk melihat perbedaan isi halaman:
          </span>
        </div>
        <div className="flex items-center bg-stone-800 p-1 rounded-xl border border-stone-700 w-full sm:w-auto justify-center">
          <button
            type="button"
            onClick={() => onSwitchMode("homestay")}
            className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg font-semibold transition-all text-xs cursor-pointer ${
              currentMode === "homestay"
                ? "bg-amber-500 text-stone-950 shadow"
                : "text-stone-300 hover:text-white"
            }`}
          >
            <i className="fa-solid fa-bed mr-1"></i> 1. Homestay (Per Kamar)
          </button>
          <button
            type="button"
            onClick={() => onSwitchMode("villa")}
            className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg font-semibold transition-all text-xs cursor-pointer ${
              currentMode === "villa"
                ? "bg-amber-500 text-stone-950 shadow"
                : "text-stone-300 hover:text-white"
            }`}
          >
            <i className="fa-solid fa-house-chimney-window mr-1"></i> 2. Sewa 1 Villa Utuh
          </button>
        </div>
      </div>
    </div>
  );
}


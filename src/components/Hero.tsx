"use client";

import React from "react";
import { ModeConfig } from "../types/homestay";

interface HeroProps {
  config: ModeConfig;
}

export default function Hero({ config }: HeroProps) {
  return (
    <section className="relative bg-stone-900 text-white overflow-hidden">
      {/* Background Image dengan Overlay Gelap agar teks terbaca jelas */}
      <div className="absolute inset-0">
        <img
          src={config.heroImage}
          alt="Suasana Penginapan"
          className="w-full h-full object-cover opacity-45 transition-all duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/1400x700/292524/ffffff?text=Foto+Penginapan+Utama";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28 flex flex-col items-start justify-center">
        {/* Badge Keunggulan Utama UMKM */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm">
          <i className="fa-solid fa-circle-check text-amber-400"></i>
          <span>{config.heroBadge}</span>
        </div>

        {/* Judul Utama */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-2xl mb-4">
          {config.heroTitle}
        </h1>

        {/* Sub-judul */}
        <p className="text-stone-200 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
          {config.heroDesc}
        </p>

        {/* Tombol Aksi Utama */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <a
            href="#simulasi-booking"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2.5 text-base transition"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
            <span>{config.heroCtaPrimary}</span>
          </a>
          <a
            href="#katalog-utama"
            className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 text-base transition"
          >
            <span>{config.heroCtaSecondary}</span>
            <i className="fa-solid fa-arrow-down text-sm"></i>
          </a>
        </div>

        {/* Info Singkat Bawah Hero */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-star text-amber-400"></i>
            <span>
              <strong>4.9/5</strong> (180+ Ulasan Google Maps)
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-clock text-stone-400"></i>
            <span>Check-in 14.00 WIB • Check-out 12.00 WIB</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

interface NavbarProps {
  brandSubtitle: string;
  navKatalog: string;
  onOpenDirectWA: () => void;
}

export default function Navbar({
  brandSubtitle,
  navKatalog,
  onOpenDirectWA,
}: NavbarProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-20.5 sm:top-12.25 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Nama Penginapan */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-terracotta-500 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-terracotta-600 transition">
            <i className="fa-solid fa-sun"></i>
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-stone-900 block leading-none">
              Omah Senja
            </span>
            <span className="text-[11px] text-stone-500 font-medium">
              {brandSubtitle}
            </span>
          </div>
        </a>

        {/* Navigasi Cepat (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-stone-600">
          <a href="#keunggulan" className="hover:text-terracotta-500 transition">
            Keunggulan
          </a>
          <a href="#katalog-utama" className="hover:text-terracotta-500 transition">
            {navKatalog}
          </a>
          <a href="#simulasi-booking" className="hover:text-terracotta-500 transition">
            Cek Harga & Booking
          </a>
          <a href="#ulasan" className="hover:text-terracotta-500 transition">
            Ulasan Tamu
          </a>
          <a href="#lokasi" className="hover:text-terracotta-500 transition">
            Lokasi Maps
          </a>
        </nav>

        {/* Tombol Chat WA Langsung */}
        <button
          type="button"
          onClick={onOpenDirectWA}
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-3.5 py-2.5 rounded-xl flex items-center gap-2 shadow-sm transition active:scale-95 cursor-pointer"
        >
          <i className="fa-brands fa-whatsapp text-base"></i>
          <span>Tanya Admin</span>
        </button>
      </div>
    </header>
  );
}


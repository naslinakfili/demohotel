"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-10 border-t border-stone-800 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-white text-base">Omah Senja Homestay & Villa</p>
          <p className="mt-0.5">Contoh Demo Website UMKM Perhotelan • Tanpa Komisi Aplikasi</p>
        </div>
        <div className="text-center sm:text-right">
          <p>
            WhatsApp Reservasi:{" "}
            <strong className="text-emerald-400">0812-3456-7890</strong>
          </p>
          <p className="text-stone-500 mt-0.5">
            © 2026 Omah Senja. Dibuat untuk referensi portofolio Frontend.
          </p>
        </div>
      </div>
    </footer>
  );
}


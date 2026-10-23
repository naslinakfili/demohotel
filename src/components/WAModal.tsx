"use client";

import React from "react";
import { ADMIN_WA_NUMBER } from "../data/homestayData";

interface WAModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export default function WAModal({ isOpen, message, onClose }: WAModalProps) {
  if (!isOpen) return null;

  const waLink = `https://wa.me/${ADMIN_WA_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed inset-0 bg-stone-950/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200">
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mb-4">
          <i className="fa-brands fa-whatsapp"></i>
        </div>
        <h3 className="text-lg font-extrabold text-stone-900">
          Simulasi Mengarahkan ke WhatsApp
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Pada website klien asli, tombol tadi langsung membuka aplikasi WhatsApp dengan format pesan berikut:
        </p>

        <div className="mt-4 bg-stone-100 p-3.5 rounded-xl text-xs text-stone-800 whitespace-pre-line font-mono border border-stone-200 max-h-48 overflow-y-auto">
          {message}
        </div>

        <div className="mt-5 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-stone-600 hover:bg-stone-100 cursor-pointer"
          >
            Tutup Simulasi
          </button>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition"
          >
            <i className="fa-brands fa-whatsapp"></i> Buka WhatsApp Asli
          </a>
        </div>
      </div>
    </div>
  );
}


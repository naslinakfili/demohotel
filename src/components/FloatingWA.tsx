"use client";

import React from "react";

interface FloatingWAProps {
  onOpenDirectWA: () => void;
}

export default function FloatingWA({ onOpenDirectWA }: FloatingWAProps) {
  return (
    <button
      type="button"
      onClick={onOpenDirectWA}
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl flex items-center gap-2.5 transition transform hover:scale-105 cursor-pointer"
    >
      <i className="fa-brands fa-whatsapp text-2xl"></i>
      <span className="hidden sm:inline font-bold text-sm">Chat Admin Sekarang</span>
    </button>
  );
}


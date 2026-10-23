"use client";

import React from "react";
import { testimonials } from "../data/homestayData";

export default function Reviews() {
  return (
    <div className="mb-14">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
          Bukti Kepercayaan Tamu
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
          Apa Kata Tamu di Google Maps?
        </h2>
      </div>

      {/* 3 Kartu Testimoni Sederhana */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((testi, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm"
          >
            <div className="flex items-center gap-1 text-amber-400 text-xs mb-2">
              {[...Array(testi.rating)].map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>
            <p className="text-stone-600 text-sm leading-relaxed">
              &quot;{testi.comment}&quot;
            </p>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="font-bold text-stone-900">{testi.name}</span>
              <span className="text-stone-400">
                <i className="fa-brands fa-google mr-1"></i>
                {testi.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


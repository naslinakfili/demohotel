"use client";

import React from "react";
import { HighlightItem } from "../types/homestay";

interface HighlightsProps {
  items: HighlightItem[];
}

export default function Highlights({ items }: HighlightsProps) {
  return (
    <section id="keunggulan" className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-3.5"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-terracotta-600 flex items-center justify-center shrink-0 text-lg">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-xs sm:text-sm">{item.title}</h3>
              <p className="text-stone-500 text-[11px] sm:text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


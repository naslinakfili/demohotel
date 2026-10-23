"use client";

import React from "react";
import { villaGalleries, villaPackages, formatRupiah } from "../data/homestayData";

interface VillaSectionProps {
  onSelectPackage: (name: string, price: number) => void;
}

export default function VillaSection({ onSelectPackage }: VillaSectionProps) {
  return (
    <div className="fade-transition">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
          Sewa 1 Rumah Penuh (Private)
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
          Fasilitas Lengkap & Galeri Villa
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2">
          Tidak digabung dengan tamu lain. Seluruh area kolam renang, ruang keluarga, dan dapur bebas Anda gunakan bersama rombongan.
        </p>
      </div>

      {/* Galeri Foto 4 Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {villaGalleries.map((item, idx) => (
          <div
            key={idx}
            className="relative h-44 sm:h-56 rounded-2xl overflow-hidden group bg-stone-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/600x400/292524/ffffff?text=${encodeURIComponent(
                  item.title
                )}`;
              }}
            />
            <span className="absolute bottom-2.5 left-2.5 bg-stone-900/75 text-white text-xs px-2.5 py-1 rounded-lg">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Tabel Harga Simpel: Weekday vs Weekend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {villaPackages.map((pkg) => {
          const isWeekend = pkg.isPopular;
          return (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl p-6 flex flex-col justify-between ${
                isWeekend
                  ? "border-2 border-amber-500 shadow-md relative"
                  : "border border-stone-200 shadow-sm"
              }`}
            >
              <div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    isWeekend
                      ? "bg-amber-100 text-amber-900"
                      : "bg-stone-100 text-stone-700"
                  }`}
                >
                  {pkg.type}
                </span>
                <h3 className="text-xl font-extrabold text-stone-900 mt-3">
                  {pkg.title}
                </h3>
                <p className="text-3xl font-extrabold text-terracotta-600 mt-2">
                  {formatRupiah(pkg.price)}{" "}
                  <span className="text-sm font-normal text-stone-500">
                    / malam (1 Rumah)
                  </span>
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-stone-600">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-600"></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => onSelectPackage(pkg.calcRoomName, pkg.price)}
                className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Booking {pkg.id === "weekday" ? "Weekday" : "Weekend"} via WA</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}


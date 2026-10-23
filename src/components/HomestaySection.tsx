"use client";

import React from "react";
import { RoomItem } from "../types/homestay";
import { formatRupiah } from "../data/homestayData";

interface HomestaySectionProps {
  rooms: RoomItem[];
  onSelectRoom: (name: string, price: number) => void;
}

export default function HomestaySection({
  rooms,
  onSelectRoom,
}: HomestaySectionProps) {
  return (
    <div className="fade-transition">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-terracotta-600 font-bold text-xs uppercase tracking-wider bg-terracotta-100 px-3 py-1 rounded-full">
          Pilihan Kamar Harian
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
          Pilih Kamar Sesuai Kebutuhan Anda
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2">
          Harga nett per malam tanpa biaya tambahan tersembunyi. Semua kamar dilengkapi kamar mandi dalam.
        </p>
      </div>

      {/* Grid 3 Kartu Kamar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room) => {
          const isDeluxe = room.isPopular;
          return (
            <div
              key={room.id}
              className={`bg-white rounded-2xl overflow-hidden flex flex-col ${
                isDeluxe
                  ? "border-2 border-amber-500 shadow-md relative"
                  : "border border-stone-200 shadow-sm hover:shadow-md transition"
              }`}
            >
              <div className="relative h-52 bg-stone-200">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/600x400/e7e5e4/44403c?text=${encodeURIComponent(
                      room.name
                    )}`;
                  }}
                />
                <span
                  className={`absolute top-3 left-3 text-xs rounded-lg ${
                    isDeluxe
                      ? "bg-amber-500 text-stone-950 font-extrabold px-2.5 py-1 shadow"
                      : "bg-stone-900/80 backdrop-blur-sm text-white font-semibold px-2.5 py-1"
                  }`}
                >
                  {room.badge}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-extrabold text-stone-900">
                      {room.name}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">{room.capacity}</p>

                  {/* Fasilitas Kamar */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {room.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="bg-stone-100 text-stone-700 text-xs px-2.5 py-1 rounded-md font-medium"
                      >
                        <i className={`fa-solid ${feat.icon} ${feat.color} mr-1`}></i>
                        {feat.text}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">
                      Harga per malam
                    </span>
                    <span className="text-xl font-extrabold text-terracotta-600">
                      {formatRupiah(room.price)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectRoom(room.calcRoomName, room.price)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp"></i> Pesan
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


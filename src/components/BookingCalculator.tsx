"use client";

import React from "react";
import { BookingOption } from "../types/homestay";
import { formatRupiah } from "../data/homestayData";

interface BookingCalculatorProps {
  options: BookingOption[];
  guestName: string;
  setGuestName: (val: string) => void;
  selectedOptionIndex: number;
  setSelectedOptionIndex: (idx: number) => void;
  checkInDate: string;
  setCheckInDate: (date: string) => void;
  nights: number;
  setNights: (nights: number) => void;
  totalPrice: number;
  previewMessage: string;
  onSendWhatsApp: () => void;
}

export default function BookingCalculator({
  options,
  guestName,
  setGuestName,
  selectedOptionIndex,
  setSelectedOptionIndex,
  checkInDate,
  setCheckInDate,
  nights,
  setNights,
  totalPrice,
  previewMessage,
  onSendWhatsApp,
}: BookingCalculatorProps) {
  return (
    <section id="simulasi-booking" className="bg-stone-900 text-white py-14 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Kolom Kiri: Form Pilihan Tamu */}
          <div className="lg:col-span-7 bg-stone-800/90 border border-stone-700 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <i className="fa-solid fa-bolt"></i> Fitur Cepat Tanpa Ribet
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Cek Estimasi Biaya & Kirim ke WhatsApp
            </h2>
            <p className="text-stone-300 text-sm mt-1 mb-6">
              Isi tanggal rencana menginap di bawah ini. Pesan pemesanan akan otomatis tertulis rapi untuk dikirim ke WhatsApp Admin.
            </p>

            <div className="space-y-4">
              {/* Nama Pemesan */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase mb-1.5">
                  Nama Anda
                </label>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Pilihan Kamar / Paket */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 uppercase mb-1.5">
                  Pilih Kamar / Paket
                </label>
                <select
                  value={selectedOptionIndex}
                  onChange={(e) => setSelectedOptionIndex(Number(e.target.value))}
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  {options.map((opt, idx) => (
                    <option key={idx} value={idx}>
                      {opt.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tanggal Check-In & Durasi Malam */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase mb-1.5">
                    Tanggal Check-In
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-300 uppercase mb-1.5">
                    Durasi Menginap
                  </label>
                  <select
                    value={nights}
                    onChange={(e) => setNights(Number(e.target.value))}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value={1}>1 Malam</option>
                    <option value={2}>2 Malam</option>
                    <option value={3}>3 Malam</option>
                    <option value={4}>4 Malam</option>
                    <option value={5}>5 Malam</option>
                  </select>
                </div>
              </div>

              {/* Ringkasan Total */}
              <div className="bg-stone-950/80 border border-stone-700/80 rounded-xl p-4 flex items-center justify-between mt-2">
                <div>
                  <span className="text-xs text-stone-400 block">
                    Estimasi Total Biaya:
                  </span>
                  <span className="text-2xl font-extrabold text-amber-400">
                    {formatRupiah(totalPrice)}
                  </span>
                </div>
                <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-700/50 px-2.5 py-1 rounded-lg font-medium">
                  Bayar saat Check-in / DP
                </span>
              </div>

              {/* Tombol Kirim ke WA */}
              <button
                type="button"
                onClick={onSendWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2.5 text-base transition active:scale-98 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>Tanyakan Ketersediaan ke WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Kolom Kanan: Live Preview Chat WhatsApp */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b141a] border border-stone-700 rounded-2xl overflow-hidden shadow-xl">
              {/* Header ala WhatsApp */}
              <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">
                    Admin Omah Senja
                  </p>
                  <p className="text-[11px] text-emerald-400">
                    Online • Simulasi Pesan Otomatis
                  </p>
                </div>
              </div>

              {/* Body Chat */}
              <div className="p-4 bg-[#0b141a] space-y-3">
                <p className="text-[11px] text-center text-stone-400 bg-[#182229] py-1 px-3 rounded-lg mx-auto w-fit">
                  👇 Teks ini otomatis masuk ke HP Pemilik Homestay:
                </p>
                <div className="bg-[#005c4b] text-white p-3.5 rounded-2xl rounded-tr-none text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal shadow">
                  {previewMessage}
                </div>
              </div>
            </div>
            <p className="text-xs text-stone-400 mt-3 text-center">
              💡 <strong>Catatan untuk Developer:</strong> Pemilik homestay sangat menyukai fitur ini karena mereka tidak perlu menanyakan ulang tanggal & tipe kamar ke calon tamu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import React, { useState, useEffect } from "react";
import { ModeType } from "../types/homestay";
import {
  modeData,
  homestayRooms,
  formatRupiah,
} from "../data/homestayData";
import DeveloperToolbar from "../components/DeveloperToolbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import HomestaySection from "../components/HomestaySection";
import VillaSection from "../components/VillaSection";
import BookingCalculator from "../components/BookingCalculator";
import Reviews from "../components/Reviews";
import LocationSection from "../components/LocationSection";
import Footer from "../components/Footer";
import FloatingWA from "../components/FloatingWA";
import WAModal from "../components/WAModal";

export default function Home() {
  const [mode, setMode] = useState<ModeType>("homestay");
  const [guestName, setGuestName] = useState<string>("Budi Santoso");
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(1);
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [nights, setNights] = useState<number>(2);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  // Initialize tomorrow's date safely on client mount
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setCheckInDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const currentConfig = modeData[mode];

  // Handle mode switch
  const handleSwitchMode = (newMode: ModeType) => {
    setMode(newMode);
    // Set default selected room for the new mode (index 1 for homestay deluxe, index 0 for villa weekday)
    setSelectedOptionIndex(newMode === "homestay" ? 1 : 0);
  };

  // Select room from card click and scroll to calculator
  const handleSelectRoom = (roomName: string, price: number) => {
    const optionIdx = currentConfig.options.findIndex(
      (opt) => opt.price === price
    );
    if (optionIdx !== -1) {
      setSelectedOptionIndex(optionIdx);
    }
    const calcSection = document.getElementById("simulasi-booking");
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Safe selected option
  const validOptionIndex =
    selectedOptionIndex >= 0 && selectedOptionIndex < currentConfig.options.length
      ? selectedOptionIndex
      : 0;
  const currentOption = currentConfig.options[validOptionIndex] || {
    name: "Pilihan Kamar",
    price: 0,
  };

  const totalPrice = currentOption.price * nights;

  // Formatted booking WhatsApp message
  const previewMessage = `Halo Admin *Omah Senja*, saya ingin cek ketersediaan untuk menginap:

👤 *Nama:* ${guestName.trim() || "Calon Tamu"}
🏡 *Pilihan:* ${currentOption.name}
📅 *Rencana Check-In:* ${checkInDate}
🌙 *Durasi:* ${nights} Malam
💰 *Estimasi Biaya:* ${formatRupiah(totalPrice)}

Apakah masih tersedia untuk tanggal tersebut? Terima kasih.`;

  // Trigger booking WhatsApp modal
  const handleTriggerWhatsAppBooking = () => {
    setModalMessage(previewMessage);
    setIsModalOpen(true);
  };

  // Trigger general direct WhatsApp modal
  const handleOpenDirectWA = () => {
    const generalMessage = `Halo Admin Omah Senja, saya melihat info penginapan dari Website dan ingin bertanya ketersediaan kamar/villa.`;
    setModalMessage(generalMessage);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800">
      {/* 0. Developer Preview Toolbar */}
      <DeveloperToolbar
        currentMode={mode}
        onSwitchMode={handleSwitchMode}
      />

      {/* 1. Sticky Navbar */}
      <Navbar
        brandSubtitle={currentConfig.brandSubtitle}
        navKatalog={currentConfig.navKatalog}
        onOpenDirectWA={handleOpenDirectWA}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero config={currentConfig} />

        {/* 3. Keunggulan Highlights */}
        <Highlights items={currentConfig.highlights} />

        {/* 4. Katalog Kamar / Villa */}
        <section id="katalog-utama" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          {mode === "homestay" ? (
            <HomestaySection
              rooms={homestayRooms}
              onSelectRoom={handleSelectRoom}
            />
          ) : (
            <VillaSection onSelectPackage={handleSelectRoom} />
          )}
        </section>

        {/* 5. Kalkulator Booking WA */}
        <BookingCalculator
          options={currentConfig.options}
          guestName={guestName}
          setGuestName={setGuestName}
          selectedOptionIndex={validOptionIndex}
          setSelectedOptionIndex={setSelectedOptionIndex}
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          nights={nights}
          setNights={setNights}
          totalPrice={totalPrice}
          previewMessage={previewMessage}
          onSendWhatsApp={handleTriggerWhatsAppBooking}
        />

        {/* 6. Ulasan Google Maps & Lokasi Strategis */}
        <section id="ulasan" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <Reviews />
          <LocationSection
            address={currentConfig.address}
            locPoints={currentConfig.locPoints}
          />
        </section>
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWA onOpenDirectWA={handleOpenDirectWA} />

      {/* WhatsApp Simulation Modal */}
      <WAModal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

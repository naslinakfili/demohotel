import { ModeConfig, ModeType, RoomItem, VillaPackage, TestimonialItem } from '../types/homestay';

export const ADMIN_WA_NUMBER = "6281234567890";

export const modeData: Record<ModeType, ModeConfig> = {
  homestay: {
    brandSubtitle: "Homestay Yogyakarta",
    navKatalog: "Pilihan Kamar",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    heroBadge: "Booking Langsung Pemilik • Harga Lebih Hemat dari Aplikasi",
    heroTitle: "Penginapan Nyaman & Tenang, 10 Menit dari Malioboro",
    heroDesc: "Cocok untuk keluarga, pasangan, maupun perjalanan dinas. Lingkungan asri, parkiran mobil luas di dalam pagar, dan kamar selalu bersih wangi.",
    heroCtaPrimary: "Cek Kamar Kosong via WA",
    heroCtaSecondary: "Lihat 3 Tipe Kamar",
    address: "Jl. Prawirotaman II No. 45, Brontokusuman, Kec. Mergangsan, Kota Yogyakarta, DIY 55153",
    locPoints: [
      "10 Menit ke Jalan Malioboro & Titik Nol",
      "12 Menit dari Stasiun Tugu / Lempuyangan",
      "2 Menit jalan kaki ke Minimarket & Kuliner"
    ],
    highlights: [
      { icon: "fa-car", title: "Parkir Luas & Aman", desc: "Muat 5 mobil di dalam pagar" },
      { icon: "fa-location-dot", title: "10 Menit Malioboro", desc: "Dekat pusat wisata & kuliner" },
      { icon: "fa-wifi", title: "Free Wi-Fi Cepat", desc: "Stabil di semua kamar" },
      { icon: "fa-shield-heart", title: "Ramah Keluarga", desc: "Lingkungan aman & tenang" }
    ],
    options: [
      { name: "Kamar Standar Queen (Rp 200.000/malam)", price: 200000 },
      { name: "Kamar Deluxe Teras Taman (Rp 300.000/malam)", price: 300000 },
      { name: "Kamar Family Double Bed (Rp 450.000/malam)", price: 450000 }
    ]
  },
  villa: {
    brandSubtitle: "Private Villa Lembang / Batu",
    navKatalog: "Fasilitas & Harga Villa",
    heroImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=80",
    heroBadge: "Sewa 1 Rumah Utuh • Private Pool • Tanpa Digabung Tamu Lain",
    heroTitle: "Villa Keluarga Asri dengan Kolam Renang Pribadi",
    heroDesc: "Kapasitas hingga 20 orang dengan 4 Kamar Tidur, peralatan BBQ lengkap, karaoke keluarga, dan pemandangan pegunungan yang sejuk.",
    heroCtaPrimary: "Cek Tanggal Kosong via WA",
    heroCtaSecondary: "Lihat Harga Weekday & Weekend",
    address: "Jl. Raya Maribaya No. 88, Lembang, Kab. Bandung Barat, Jawa Barat 40391",
    locPoints: [
      "5 Menit ke Wisata Lembang Park & Zoo / Floating Market",
      "Akses jalan lebar (Bisa masuk Hiace / Bus Kecil)",
      "Udara dingin sejuk & halaman rumput luas"
    ],
    highlights: [
      { icon: "fa-people-roof", title: "Kapasitas 20 Orang", desc: "4 Kamar Tidur + Extra Bed" },
      { icon: "fa-person-swimming", title: "Private Pool", desc: "Kolam renang khusus rombongan Anda" },
      { icon: "fa-fire-burner", title: "Alat BBQ & Dapur", desc: "Siap pakai untuk bakar-bakar malam" },
      { icon: "fa-microphone-lines", title: "Karaoke & Smart TV", desc: "Ruang kumpul keluarga luas" }
    ],
    options: [
      { name: "Sewa 1 Villa Utuh - Weekday Senin-Kamis (Rp 1.250.000/malam)", price: 1250000 },
      { name: "Sewa 1 Villa Utuh - Weekend Jumat-Minggu (Rp 1.750.000/malam)", price: 1750000 }
    ]
  }
};

export const homestayRooms: RoomItem[] = [
  {
    id: "standar",
    name: "Kamar Standar Queen",
    badge: "Hemat & Nyaman",
    isPopular: false,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=80",
    capacity: "Kapasitas 2 Dewasa • Luas 16 m²",
    features: [
      { icon: "fa-snowflake", text: "AC Dingin", color: "text-sky-600" },
      { icon: "fa-wifi", text: "Free Wi-Fi", color: "text-emerald-600" },
      { icon: "fa-tv", text: "Smart TV", color: "text-stone-600" },
      { icon: "fa-shower", text: "KM Dalam", color: "text-amber-600" }
    ],
    price: 200000,
    calcRoomName: "Kamar Standar Queen"
  },
  {
    id: "deluxe",
    name: "Kamar Deluxe Teras Taman",
    badge: "⭐ Paling Laris",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=700&q=80",
    capacity: "Kapasitas 2 Dewasa + 1 Anak • Luas 22 m²",
    features: [
      { icon: "fa-snowflake", text: "AC Dingin", color: "text-sky-600" },
      { icon: "fa-hot-tub-person", text: "Water Heater", color: "text-rose-500" },
      { icon: "fa-mug-hot", text: "Kopi & Teh", color: "text-amber-700" },
      { icon: "fa-tv", text: "Netflix TV", color: "text-stone-600" }
    ],
    price: 300000,
    calcRoomName: "Kamar Deluxe Teras Taman"
  },
  {
    id: "family",
    name: "Kamar Family Double Bed",
    badge: "Cocok Keluarga",
    isPopular: false,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=700&q=80",
    capacity: "Kapasitas 4 Orang (2 Kasur Besar) • Luas 30 m²",
    features: [
      { icon: "fa-bed", text: "2 Queen Bed", color: "text-indigo-600" },
      { icon: "fa-hot-tub-person", text: "Water Heater", color: "text-rose-500" },
      { icon: "fa-utensils", text: "Kulkas Mini", color: "text-emerald-600" },
      { icon: "fa-wifi", text: "Free Wi-Fi", color: "text-emerald-600" }
    ],
    price: 450000,
    calcRoomName: "Kamar Family Double Bed"
  }
];

export const villaGalleries = [
  {
    title: "Private Pool",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Ruang Kumpul & Karaoke",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "4 Kamar Tidur Nyaman",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Dapur Lengkap + BBQ",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80"
  }
];

export const villaPackages: VillaPackage[] = [
  {
    id: "weekday",
    type: "Senin – Kamis (Weekday)",
    title: "Paket Menginap Hari Biasa",
    price: 1250000,
    isPopular: false,
    features: [
      "Kapasitas s/d 15–20 Orang",
      "Bebas Akses Private Pool & Karaoke",
      "Gratis Air Galon, Gas Elpiji & Alat Masak"
    ],
    calcRoomName: "Sewa 1 Villa Utuh (Weekday Senin-Kamis)"
  },
  {
    id: "weekend",
    type: "Jumat – Minggu & Libur Nasional",
    title: "Paket Akhir Pekan (Weekend)",
    price: 1750000,
    isPopular: true,
    features: [
      "Kapasitas s/d 15–20 Orang",
      "Gratis Alat Panggangan BBQ + Arang",
      "Tambahan 2 Extra Bed Gratis"
    ],
    calcRoomName: "Sewa 1 Villa Utuh (Weekend Jumat-Minggu)"
  }
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Rina Wulandari",
    role: "Local Guide",
    comment: "Kamarnya bersih banget dan wangi. Parkiran mobilnya luas di dalam pagar jadi tenang. Booking langsung lewat WA adminnya ramah dan cepet.",
    rating: 5
  },
  {
    name: "Dimas Prasetyo",
    role: "Ulasan Google",
    comment: "Harga 200 ribuan tapi fasilitas rasa hotel bintang 3. Air hangat lancar, Wi-Fi ngebut buat kerja, lokasi deket kemana-mana.",
    rating: 5
  },
  {
    name: "Keluarga Pak Hendra",
    role: "Ulasan Google",
    comment: "Nginep bareng keluarga besar nyaman banget. Lingkungannya tenang gak berisik kendaraan, tapi mau cari makan malam tinggal jalan kaki.",
    rating: 5
  }
];

export function formatRupiah(num: number): string {
  return "Rp " + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


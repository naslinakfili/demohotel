import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Omah Senja - Contoh Web UMKM Penginapan & Villa",
  description: "Penginapan Nyaman & Tenang, Cocok untuk keluarga, pasangan, maupun perjalanan dinas / rombongan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        {/* Font Awesome Icons CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-stone-50 text-stone-800 font-sans antialiased selection:bg-amber-200 selection:text-stone-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: "0 dan dasturgacha — Ta’lim kelishuvi | Samar Baxtiyarov",
  description:
    "«0 dan dasturgacha» dasturlash va IT kursi uchun o‘quvchi, ota-ona va o‘qituvchi o‘rtasidagi rasmiy ta’lim olish va ichki tartib kelishuvi.",
  keywords: [
    "0 dan dasturgacha",
    "Ta’lim kelishuvi",
    "Samar Baxtiyarov",
    "Dasturlash kursi",
    "IT ta’lim shartnomasi",
  ],
  authors: [{ name: "Samar Baxtiyarov" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}

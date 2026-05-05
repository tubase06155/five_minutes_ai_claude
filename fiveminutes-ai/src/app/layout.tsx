import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiveminutes AI — Trí tuệ nhân tạo tiên phong cho Việt Nam",
  description:
    "Fiveminutes AI (by Bùi Tú) cung cấp giải pháp AI sản xuất thực tế — AI Agent, tích hợp hệ thống, Doc Copilot — triển khai nhanh cho doanh nghiệp Việt Nam.",
  keywords: ["AI", "AI Agent", "Việt Nam", "Bùi Tú", "Doc Copilot", "tự động hóa"],
  openGraph: {
    title: "Fiveminutes AI — Trí tuệ nhân tạo tiên phong cho Việt Nam",
    description: "Giải pháp AI sản xuất thực tế cho doanh nghiệp Việt Nam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#a1a1aa] antialiased">
        {children}
      </body>
    </html>
  );
}

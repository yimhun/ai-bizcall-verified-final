import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "[AI비즈콜] 휴대폰과 사무실 전화의 스마트 연결 | LG U+",
  description: "LG유플러스 AI비즈콜은 사무실 전화와 휴대폰을 연동해 직원 휴대폰에서 사무실 전화번호로 통화가 가능하고, 통화 녹음, 통화 내용 텍스트화, 음성 메모, 통화 요약 기능으로 업무 기록을 효율적으로 관리합니다. 개인 번호 노출 방지와 통신 보안까지 강화한 스마트 기업 전화 솔루션을 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

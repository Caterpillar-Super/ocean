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
  title: "巴菲特投资智慧 | Buffett Insights",
  description:
    "汇集巴菲特经典演讲、股东大会视频、投资理念与价值投资哲学。学习股神巴菲特的投资智慧。",
  keywords:
    "巴菲特, Warren Buffett, 价值投资, 投资理念, 股东大会, 伯克希尔, Berkshire Hathaway",
  openGraph: {
    title: "巴菲特投资智慧 | Buffett Insights",
    description: "汇集巴菲特经典演讲、股东大会视频与投资理念。",
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
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-amber-50">{children}</body>
    </html>
  );
}

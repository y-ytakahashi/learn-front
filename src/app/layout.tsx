import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfifg } from "../../config/site";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  // title: { template: "Shadcn - %s", default: siteConfifg.name },
  description: "ブログ投稿ができるwebアプリケーションです",
  keywords: ["post", "writer", "blog", "shadcn"],
  authors: [{ name: "y-y", url: siteConfifg.url }],
  metadataBase: new URL(siteConfifg.url),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfifg.url,
    siteName: siteConfifg.name,
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

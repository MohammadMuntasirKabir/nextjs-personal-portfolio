import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mohammad Muntasir Kabir | Software Engineer",
  description:
    "Personal portfolio of Mohammad Muntasir Kabir — Software Engineer, AI Automation Specialist, and builder of digital products.",
  openGraph: {
    title: "Mohammad Muntasir Kabir | Software Engineer",
    description:
      "Software Engineer specializing in full-stack web development and AI-powered automation. React, Next.js, Laravel, Odoo ERP.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Muntasir Kabir | Software Engineer",
    description:
      "Software Engineer specializing in full-stack web development and AI-powered automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

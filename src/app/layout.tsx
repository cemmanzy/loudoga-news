import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import "./globals.css";

import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Loudoga News",
    template: "%s | Loudoga News",
  },

  description:
    "Latest news, interviews, spotlight stories and opinions.",

  keywords: [
    "News",
    "Nigeria News",
    "Breaking News",
    "Interviews",
    "Spotlight",
    "Opinions",
    "Loudoga News",
  ],

  authors: [
    {
      name: "Loudoga News",
    },
  ],

  creator: "Loudoga News",

  openGraph: {
    title: "Loudoga News",
    description:
      "Latest news, interviews, spotlight stories and opinions.",
    siteName: "Loudoga News",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Loudoga News",
    description:
      "Latest news, interviews, spotlight stories and opinions.",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <GoogleAnalytics />

        
        <TopBar />
        <Header />
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Umair Asrar — Laravel & Full-Stack Developer",
  description:
    "Portfolio of Umair Asrar, an experienced PHP Laravel & Full-Stack developer specializing in high-concurrency database systems, clean REST APIs, and modern React interfaces.",
  keywords: [
    "Umair Asrar",
    "Laravel Developer",
    "PHP Developer",
    "Full-Stack Developer",
    "React.js Developer",
    "MySQL",
    "Docker",
    "REST APIs",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Umair Asrar" }],
  creator: "Umair Asrar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umairasrar.dev",
    title: "Umair Asrar — Laravel & Full-Stack Developer",
    description:
      "Scalable Laravel backends, high-concurrency database systems, and sleek React interfaces.",
    siteName: "Umair Asrar Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} min-h-screen bg-[#080a0f] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
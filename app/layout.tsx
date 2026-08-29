import type { Metadata } from "next";
import localFont from "next/font/local";
import { Rubik, Outfit, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cubano = localFont({
  src: "../public/fonts/cubano-webfont/cubano-regular-webfont.woff",
  variable: "--font-cubano",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apogee 2027 | Sri Lanka's 1st 24-Hour Space Hackathon",
  description: "24 hours in Colombo. Real space-tech challenges. Real mentors. Rs. 500,000+ in prizes. Built by students, for students across Sri Lanka.",
  keywords: ["space hackathon", "Sri Lanka hackathon", "Apogee", "Colombo space tech", "CubeSat", "space biology", "mission software"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${cubano.variable} ${outfit.variable} ${jetbrainsMono.variable} ${pressStart2P.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-[#FF6B35] selection:text-white">
        {children}
      </body>
    </html>
  );
}

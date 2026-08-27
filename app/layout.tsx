import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter, Press_Start_2P, Silkscreen } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-press-start",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  variable: "--font-silkscreen",
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable} ${pressStart2P.variable} ${silkscreen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-[#FF5500] selection:text-black">
        {children}
      </body>
    </html>
  );
}

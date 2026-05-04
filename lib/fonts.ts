import {
  Geist,
  IBM_Plex_Mono,
  Inter,
  Manrope,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--geist",
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--manrope",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--plus-jakarta-sans",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--space-grotesk",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--ibm-plex-mono",
});

export const allowedFonts = [
  "inter",
  "geist",
  "manrope",
  "plus-jakarta-sans",
  "space-grotesk",
];

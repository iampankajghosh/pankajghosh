import {
  Geist,
  IBM_Plex_Mono,
  Inter,
  Manrope,
  Open_Sans,
  Roboto,
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

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--open-sans",
});

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto",
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
  "open-sans",
  "roboto",
];

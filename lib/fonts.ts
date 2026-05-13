import {
  Geist,
  IBM_Plex_Mono,
  Inter,
  Manrope,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--inter" });
export const geist = Geist({ subsets: ["latin"], variable: "--geist" });
export const manrope = Manrope({ subsets: ["latin"], variable: "--manrope" });
export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--plus-jakarta-sans",
});
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
});
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--ibm-plex-mono",
});

export const FONT_CONFIG = {
  inter: {
    label: "Inter",
    variable: inter.variable,
    twClass: "font-inter",
  },
  geist: {
    label: "Geist",
    variable: geist.variable,
    twClass: "font-geist",
  },
  manrope: {
    label: "Manrope",
    variable: manrope.variable,
    twClass: "font-manrope",
  },
  "plus-jakarta-sans": {
    label: "Plus Jakarta Sans",
    variable: plusJakartaSans.variable,
    twClass: "font-plus-jakarta-sans",
  },
  "space-grotesk": {
    label: "Space Grotesk",
    variable: spaceGrotesk.variable,
    twClass: "font-space-grotesk",
  },
} as const;

export type FontKey = keyof typeof FONT_CONFIG;
export const allowedFonts = Object.keys(FONT_CONFIG) as FontKey[];

export const allFontVariables = [
  inter.variable,
  geist.variable,
  manrope.variable,
  plusJakartaSans.variable,
  spaceGrotesk.variable,
  ibmPlexMono.variable,
].join(" ");

import { Pattern } from "@/components/pattern";
import {
  geist,
  ibmPlexMono,
  inter,
  manrope,
  plusJakartaSans,
  spaceGrotesk,
} from "@/lib/fonts";
import { FontProvider } from "@/providers/font-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pankaj Ghosh",
  description: "Frontend Engineer. Builds things people actually enjoy using.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${manrope.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased [--pattern-fg:var(--color-black)]/5 dark:[--pattern-fg:var(--color-white)]/10`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground selection:text-foreground flex min-h-full min-w-[320px] flex-col selection:bg-neutral-500/20">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <FontProvider>{children}</FontProvider>
        </ThemeProvider>

        <Pattern className="-left-8 sm:left-1/2 sm:-translate-x-94" />
        <Pattern className="-right-8 sm:right-1/2 sm:translate-x-94" />
      </body>
    </html>
  );
}

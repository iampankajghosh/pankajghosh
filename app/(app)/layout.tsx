import {
  geist,
  ibmPlexMono,
  inter,
  manrope,
  openSans,
  roboto,
} from "@/lib/fonts";
import { FontProvider } from "@/providers/font-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { Pattern } from "@/components/pattern";

export const metadata: Metadata = {
  title: "Pankaj Ghosh",
  description: "Frontend Engineer. Crafting intuitive digital web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${manrope.variable} ${openSans.variable} ${roboto.variable} ${ibmPlexMono.variable} h-full [--pattern-fg:var(--color-black)]/5 dark:[--pattern-fg:var(--color-white)]/10 antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground flex min-h-full flex-col selection:bg-neutral-500/20 selection:text-foreground min-w-[320px]">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <FontProvider>{children}</FontProvider>
        </ThemeProvider>

        <Pattern className="-left-8 sm:left-1/2 sm:-translate-x-94" />
        <Pattern className="-right-8 sm:right-1/2 sm:translate-x-94" />
      </body>
    </html>
  );
}

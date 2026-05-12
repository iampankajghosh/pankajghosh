import { allFontVariables } from "@/lib/fonts";
import { FontProvider } from "@/providers/font-provider";
import ThemeProvider from "@/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";
import { seoMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = seoMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        allFontVariables,
        "h-full antialiased [--pattern-fg:var(--color-black)]/5 dark:[--pattern-fg:var(--color-white)]/10",
      )}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground selection:text-foreground flex min-h-full min-w-[320px] flex-col selection:bg-neutral-500/20">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <FontProvider>{children}</FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

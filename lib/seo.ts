import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteConfig = {
  name: "Pankaj Ghosh",
  description: "Frontend Engineer. Builds things people actually enjoy using.",
  url: siteUrl,
  twitter: "@im_pankajghosh",
};

const isProduction =
  process.env.NODE_ENV === "production" &&
  process.env.VERCEL_ENV === "production";

export const seoMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "Pankaj Ghosh",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],

  authors: [{ name: siteConfig.name }],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  robots: isProduction
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
      },

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",

    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.twitter,
    images: [`${siteConfig.url}/twitter-image.png`],
  },
};

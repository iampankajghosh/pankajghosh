type Certificate = {
  id: string;
  name: string;
  description: string;
  bannerUrl: string;
  previewUrl: string;
  link: string;
  organization: {
    logo: {
      default: string;
      light: string;
    };
    title: string;
  };
  date: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    id: "nextjs-app-router-fundamentals",
    name: "Next.js App Router Fundamentals",
    description:
      "Explored the App Router, server components, and data fetching patterns in a real Next.js project.",
    bannerUrl:
      "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/banners/card-banner-4-IuBYd4SLmTSHPdORCsJFxleFVw10vG.jpeg",
    previewUrl:
      "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/certificates/nextjs-app-router-fundamentals-gLmQSYWSQJl1RrKa876o4V29yFtuGS.png",
    link: "https://nextjs.org/learn/certificate?course=dashboard-app&user=152007&certId=dashboard-app-152007-1773775319865",
    organization: {
      logo: {
        default:
          "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/logos/tech/vercel-32px-iK9WzWJprIClmSU8Bvv35XMLY5zaKE.png",
        light:
          "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/logos/tech/vercel-light-32px-hI7nczT6X5jIvwplEJP38Vbr5YSna1.png",
      },
      title: "Vercel",
    },
    date: "17.03.2026",
  },
  {
    id: "react-foundations-for-nextjs",
    name: "React Foundations for Next.js",
    description:
      "Solidified my understanding of React fundamentals and how they map into the Next.js mental model.",
    bannerUrl:
      "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/banners/card-banner-4-IuBYd4SLmTSHPdORCsJFxleFVw10vG.jpeg",
    previewUrl:
      "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/certificates/react-foundations-for-nextjs-SMKIIcIEbr5ypotxLpS59gW6Hm0oPX.png",
    link: "https://nextjs.org/learn/certificate?course=react-foundations&user=152007&certId=react-foundations-152007-1773159050117",
    organization: {
      logo: {
        default:
          "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/logos/tech/vercel-32px-iK9WzWJprIClmSU8Bvv35XMLY5zaKE.png",
        light:
          "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/logos/tech/vercel-light-32px-hI7nczT6X5jIvwplEJP38Vbr5YSna1.png",
      },
      title: "Vercel",
    },
    date: "10.03.2026",
  },
];

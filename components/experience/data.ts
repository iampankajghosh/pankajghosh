type Experience = {
  id: string;
  logo: string;
  company: string;
  designation: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
  tech: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: "frontend-design-engineer",
    logo: "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/logos/InfinityBit_Logo-slBBB6XDMsNH2pPszBIIeyypVWNJAT.png",
    company: "InfinityBit Pvt. Ltd.",
    designation: "Frontend Design Engineer",
    duration: "06.2026 - Present",
    location: "Kolkata, India",
    type: "Full-Time",
    description: [
      "Stepped into InfinityBit to bridge the gap between design and engineering, turning complex product wireframes into fluid, interactive user experiences.",
      "Currently focusing on building out core user interfaces from the ground up, ensuring pixel-perfect layouts and smooth, accessible user flows.",
    ],
    tech: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Motion",
      "Tanstack",
      "Zustand",
    ],
  },

  {
    id: "freelance-frontend-developer",
    logo: "",
    company: "Freelance",
    designation: "Frontend Developer",
    duration: "02.2026 - 05.2026",
    location: "Kolkata, India",
    type: "Full-Time",
    description: [
      "Between gigs, I kept building. Nexus Dark started as a VS Code theme I made for myself and it now has 2.4k+ downloads on Open VSX, which still feels surreal.",
      "Sonner Patterns came out of frustration with copy-pasting toast logic across projects, so I turned it into an open source collection of production-ready patterns built on Sonner.",
      "I also built and published cursor-pet, an npm package that brings interactive virtual companions straight to your screen.",
      "Right now I'm deep in Sparkflo, a node-based canvas for building AI workflows with a focus on developer experience and visual clarity.",
    ],
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Motion", "Vercel"],
  },

  {
    id: "klizo-solutions-frontend-developer",
    logo: "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/logos/klizos-kbFDjzHPg1NyOTFVxrDXbUHPLJFQZj.jpeg",
    company: "Klizo Solutions Pvt Ltd",
    designation: "Frontend Developer",
    duration: "09.2024 - 01.2026",
    location: "Kolkata, India",
    type: "Full-Time",
    description: [
      "Klizo was where I learned what shipping under real pressure actually feels like. Multiple client products, simultaneous deadlines, different design systems every time.",
      "Delivered 80% of an AI SaaS product's user-facing frontend with API integrations in under 24 hours, cutting delivery time by 40%.",
      "Built a admin panel for a SaaS product from scratch, covering auth, dashboards, and resume parsing. Handled 70% of the frontend myself and user engagement went up 35% after launch.",
      "Refactored an investor-facing SaaS into a modular React-Bootstrap architecture, improving load speed and UX flow by 30%.",
      "Built a marketing site from zero in vanilla JS and Tailwind, no framework overhead, shipped 40% faster than estimated.",
    ],
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js"],
  },

  {
    id: "sikharthy-infotech-software-engineer",
    logo: "https://52zfksbd04lay7w1.public.blob.vercel-storage.com/logos/sikharthy-il01nPOMyvggHh9Y5NZsMHtjXwGYyQ.jpeg",
    company: "Sikharthy Infotech Pvt. Ltd.",
    designation: "Software Engineer",
    duration: "06.2023 - 09.2024",
    location: "Kolkata, India",
    type: "Full-Time",
    description: [
      "This one was two jobs in one, building client-facing apps during the day and teaching the next wave of developers in structured sessions.",
      "Contributed to frontend builds across multiple client projects. Satisfaction ratings climbed 40% because the interfaces finally felt right to use.",
      "Taught 500+ students HTML, CSS, JavaScript, and React through project-based training, cutting their average learning curve by 30%.",
      "Designed curriculum from scratch for multiple cohorts, built to stick and not just to cover material. Engagement stayed high because the work felt real.",
    ],
    tech: ["React", "Node.js", "Express.js", "JavaScript", "HTML", "CSS"],
  },
];

import type { Project } from "@/types/index";

export const projects: Project[] = [
  {
    title: "Bentodoro",
    description:
      "Bento-style Pomodoro timer with reverse feature for productivity. Minimalist design with customizable study/break intervals. As of this writing, it has over 200+ MAU.",
    link: "https://www.bentodoro.com/",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "Supabase", "Vercel", "PWA"],
  },
  {
    title: "Agency Website (Demo)",
    description:
      "Modern agency website built with HubSpot CMS, featuring custom themes, templates, and blog posts/listings functionality.",
    link: "https://22288485.hs-sites.com/",
    tags: ["HubSpot", "HubL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "PredictQuake",
    description:
      "Web-based earthquake classification system using Random Forest machine learning model to classify earthquakes based on Richter Magnitude Scale. Won the best research award in a university competition. (2024)",
    link: "https://github.com/felixmacaspac/predictquake",
    tags: ["Python", "Scikit-learn", "Pandas", "Flask"],
  },
  {
    title: "Talasan",
    description:
      "Talasan is a collaborative learning platform where students can create, share, and discover study materials. It features AI-powered personalization, content analysis, and interactive study tools to help students become more productive and organized in their studies. This project is presented for ISEAC Hackathon 2024, won 3rd place.",
    link: "https://talasan.vercel.app/",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
  },
  {
    title: "GWA Calculator",
    description:
      "Simple web application for NU students to calculate their General Weighted Average (GWA). Around 12,000+ visitors every midterm and finals season.",
    link: "https://gwa-calculator-fm.vercel.app/",
    tags: ["JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Language Sloth",
    description:
      "Created for discord community, Language Sloth is a web application that helps users find classes and events to practice and learn new languages. It features a user-friendly interface, search functionality, and event listings.",
    link: "https://languagesloth.com/",
    tags: ["JavaScript", "HTML", "Tailwind", "Django", "Discord oAuth"],
  },
];

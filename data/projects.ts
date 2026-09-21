import type { Project } from "@/types/index";

export const projects: Project[] = [
  {
    slug: "meridian-cole",
    title: "Meridian & Cole",
    category: "HubSpot CMS theme",
    status: "Published HubSpot CMS demo",
    role: "Theme architecture, HubL templates, modules, and editor fields",
    description:
      "A fictional law firm website built as a multi-page HubSpot CMS demo, with reusable sections for expertise, industries, people, and selected matters.",
    problem:
      "The editorial law firm concept needed a CMS structure that could support distinct practice, people, and firm pages beyond the homepage.",
    approach:
      "Built 20 custom modules, reusable page sections, shared navigation, and templates for practice areas, people, insights, contact, and other page types. Content and appearance controls are organized for HubSpot editors.",
    outcome:
      "The demo is published on my HubSpot portal with a working homepage and supporting pages for expertise, industries, people, offices, and selected matters.",
    link: "https://22288485.hs-sites-na2.com/demos/law-firm",
    linkLabel: "View HubSpot demo",
    image: "/projects/meridian-cole.jpg",
    imageAlt: "Meridian & Cole homepage with oversized black editorial headline on a white background",
    imageWidth: 1176,
    imageHeight: 796,
    tags: ["HubSpot CMS", "HubL", "Custom modules", "Theme development"],
  },
  {
    slug: "meridian-real-estate",
    title: "Meridian Real Estate",
    category: "HubSpot CMS theme",
    status: "Published HubSpot CMS demo",
    role: "Theme architecture, HubL templates, modules, and responsive styling",
    description:
      "A multi-page real estate demo built on HubSpot CMS, with property, development, location, service, and editorial content.",
    problem:
      "A visual property showcase needed reusable layouts for listings, developments, editorial content, and supporting pages.",
    approach:
      "Created 16 custom modules, nine reusable homepage sections, 11 website page templates, native Journal templates, and editable global header and footer content.",
    outcome:
      "The demo is published on my HubSpot portal with a working homepage and supporting pages for properties, developments, locations, services, and contact.",
    link: "https://22288485.hs-sites-na2.com/demos/real-estate",
    linkLabel: "View HubSpot demo",
    image: "/projects/meridian-real-estate.jpg",
    imageAlt: "Meridian Real Estate homepage showing a modern residence at dusk behind an editorial headline",
    imageWidth: 1176,
    imageHeight: 851,
    tags: ["HubSpot CMS", "HubL", "Custom modules", "Theme development"],
  },
  {
    slug: "worththecals",
    title: "worththecals",
    category: "Independent web app",
    status: "Live product",
    role: "Product design, frontend development, and data workflow",
    description:
      "A Philippine restaurant calorie directory with source-linked menu records, food comparisons, a meal builder, and calculators.",
    problem:
      "Calories for familiar Philippine restaurant orders are scattered across menus, PDFs, and community posts, making comparisons difficult.",
    approach:
      "Built a searchable directory that keeps serving details and source links beside each item. Added comparison and meal-building tools, with a review workflow for imported menu data.",
    outcome:
      "The public site lets visitors browse restaurant items and inspect their sources. Data coverage is still expanding, and community records are labeled separately from brand-published data.",
    link: "https://worththecals.com/",
    linkLabel: "Visit website",
    image: "/projects/worththecals.jpg",
    imageAlt: "worththecals homepage with a menu search and source-linked calorie index for Philippine restaurants",
    imageWidth: 1065,
    imageHeight: 791,
    tags: ["React", "TypeScript", "Cloudflare"],
  },
  {
    slug: "bentodoro",
    title: "Bentodoro",
    category: "Independent web app",
    status: "Live product",
    role: "Product design and full-stack development",
    description:
      "A study timer with Classic and Reverse Pomodoro modes, plus saved study history, tasks, and a review calendar.",
    problem:
      "Students need a timer that works immediately and a way to keep their study sessions, subjects, and review plans together.",
    approach:
      "Built a guest-friendly timer with configurable work and break settings. Accounts add study history, streaks, a task calendar, and a small picture-in-picture timer on supported browsers.",
    outcome:
      "Bentodoro is live and free to use. Its public usage report, dated September 5, 2026, lists more than 48,000 completed study sessions and 39,000 recorded study hours.",
    link: "https://www.bentodoro.com/",
    linkLabel: "Visit website",
    image: "/projects/bentodoro.jpg",
    imageAlt: "Bentodoro homepage with a large Pomodoro timer for studying headline and orange start button",
    imageWidth: 1065,
    imageHeight: 791,
    tags: ["Next.js", "TypeScript", "Supabase", "PWA"],
  },
  {
    slug: "gwa-calculator",
    title: "NU GWA Calculator",
    category: "Student utility",
    status: "Live product",
    role: "Design and frontend development",
    description:
      "A free, independent calculator that helps National University Philippines students estimate a weighted grade average from course grades and units.",
    problem:
      "Manually weighting course grades by unit load makes it easy to miscalculate a semester average.",
    approach:
      "Built an editable course table and instant weighted-average calculation, then added a plain-language guide, formula example, and grading references.",
    outcome:
      "The calculator is live at its own domain. Results are estimates; the university remains the authority on official grades and honors eligibility.",
    link: "https://www.nugwacalculator.com/",
    linkLabel: "Use calculator",
    image: "/projects/gwa-calculator.jpg",
    imageAlt: "NU GWA Calculator interface with editable course, grade, and unit fields",
    imageWidth: 1065,
    imageHeight: 791,
    tags: ["JavaScript", "HTML", "CSS"],
  },
];

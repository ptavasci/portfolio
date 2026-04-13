import { Code, Server, Shield, Users, Car, Wine, Crown } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "./components/icons/SocialIcons";
import { type ProjectMeta } from "./types";

/* ─── Skill definitions ───────────────────────────────────────────────── */

export const skillKeys = [
  "architecture",
  "infra",
  "security",
  "leadership",
] as const;
export const skillIcons = {
  architecture: Code,
  infra: Server,
  security: Shield,
  leadership: Users,
};

/* ─── Projects ────────────────────────────────────────────────────────── */

export const projectsMeta: ProjectMeta[] = [
  {
    key: "autodata",
    name: "Autodata",
    icon: Car,
    tags: ["Filantropía", "Open Data", "Democratización", "PWA"],
    url: "https://autodata.ptavasci.net.ar",
    screenshots: [
      "/screenshots/autodata-catalog.png",
      "/screenshots/autodata-compare.png",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Vite",
      "Bun",
      "Express",
      "Playwright",
      "Supabase",
      "PostgreSQL",
      "Sentry",
      "Web Scraping",
    ],
  },
  {
    key: "vinoteca",
    name: "Vinoteca",
    icon: Wine,
    tags: ["PWA", "Full-stack", "Mobile-first"],
    url: "https://vinoteca.ptavasci.net.ar",
    screenshots: [
      "/screenshots/vinoteca-catalog.png",
      "/screenshots/vinoteca-admin.png",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Vite",
      "Supabase",
      "Zustand",
      "TanStack Query",
      "Capacitor",
      "MercadoPago",
      "AI Social Media Manager",
    ],
  },
  {
    key: "ajedrez",
    name: "Ajedrez IA",
    icon: Crown,
    tags: ["AI", "Android TV", "Capacitor"],
    url: "https://ajedrez.ptavasci.net.ar",
    screenshots: [
      "/screenshots/ajedrez-gameplay.png",
      "/screenshots/ajedrez-ai.png",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Gemini AI",
      "chess.js",
      "Capacitor",
      "Android TV",
      "AI Agents (Dev)",
    ],
  },
];

/* ─── Social links ────────────────────────────────────────────────────── */

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ptavasci/",
    icon: GitHubIcon,
    accentColor: "#24292f",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ptavasci",
    icon: LinkedInIcon,
    accentColor: "#0A66C2",
  },
  {
    name: "X",
    url: "https://x.com/ptavasci",
    icon: XIcon,
    accentColor: "#0ea5e9", // A vibrant light blue match for X/Sky
  },
];

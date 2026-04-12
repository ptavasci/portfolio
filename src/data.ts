import { Code, Server, Shield, Users, Car, Wine, Crown } from "lucide-react";
import {
  GitHubIcon,
  InstagramIcon,
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
    tags: ["Open Source", "Open Data", "Reference"],
    url: "https://autodata.ptavasci.net.ar",
    screenshots: [
      "/screenshots/autodata-catalog.png",
      "/screenshots/autodata-compare.png",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Bun",
      "Express",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    key: "vineteca",
    name: "Vineteca",
    icon: Wine,
    tags: ["PWA", "Full-stack", "Mobile-first"],
    url: "https://vinoteca.ptavasci.net.ar",
    screenshots: [
      "/screenshots/vineteca-catalog.png",
      "/screenshots/vineteca-admin.png",
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
      "LLM",
      "chess.js",
      "Capacitor",
      "Android TV",
    ],
  },
];

/* ─── Social links ────────────────────────────────────────────────────── */

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/ptavasci/", icon: GitHubIcon },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ptavasci",
    icon: InstagramIcon,
  },
  { name: "X", url: "https://x.com/ptavasci", icon: XIcon },
];

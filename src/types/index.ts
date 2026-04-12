import { type LucideIcon } from "lucide-react";

/* ─── Shared Logic Types ─────────────────────────────────────────────── */

export type Lang = "es" | "en";
export type Theme = "light" | "dark" | "system";

/* ─── Context Types ─────────────────────────────────────────────────── */

export interface AppContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
}

/* ─── Localization Types ────────────────────────────────────────────── */

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectTranslation {
  description: string;
}

export interface ProjectPageTranslation {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface LegalSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface Translations {
  badge: string;
  heroLine1: string;
  heroHighlight: string;
  heroLine2: string;
  heroDescription: string;
  tagArch: string;
  tagDevOps: string;
  tagSecurity: string;
  tagLead: string;
  tagLocation: string;
  sectionSkills: string;
  sectionProjects: string;
  sectionConnect: string;
  themeLight: string;
  themeDark: string;
  themeSystem: string;
  contactMe: string;
  footerBio: string;
  footerJoke: string;
  projectStack: string;
  projectProblem: string;
  projectContext: string;
  projectFeatures: string;
  projectVisit: string;
  backToHome: string;
  privacyTitle: string;
  privacyLastUpdated: string;
  privacySections: LegalSection[];
  termsTitle: string;
  termsLastUpdated: string;
  termsSections: LegalSection[];
  skills: Record<string, SkillGroup>;
  projects: Record<string, ProjectTranslation>;
  projectPages: Record<string, ProjectPageTranslation>;
  legalTeasersPool: {
    privacy: string[];
    terms: string[];
  };
}

/* ─── Data Types ────────────────────────────────────────────────────── */

export interface ProjectMeta {
  key: string;
  name: string;
  icon: LucideIcon;
  tags: string[];
  url: string;
  screenshots: string[];
  stack: string[];
}

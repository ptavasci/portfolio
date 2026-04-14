import { type LucideIcon } from "lucide-react";

/* ─── Shared Logic Types ─────────────────────────────────────────────── */

export type Lang = "es" | "en";
export type Theme = "light" | "dark" | "system";

export type SkillKey = "architecture" | "infra" | "security" | "leadership";
export type ProjectKey = "autodata" | "vinoteca" | "ajedrez";

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

export interface DeepDiveSection {
  id: string;
  label: string;
  title: string;
  content: string[];
  image: string;
}

export interface ProjectPageTranslation {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  deepDive?: DeepDiveSection[];
}

export interface LegalSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface SpecialtySolution {
  enterprise: string;
  openSource: string;
}

export interface SpecialtyDetail {
  title: string;
  description: string;
  solutions?: SpecialtySolution;
}

export interface SpecialtyPageTranslation {
  title: string;
  subtitle: string;
  description: string;
  accentColor: string; // Tailwind color class or hex
  details: SpecialtyDetail[];
}

export interface Translations {
  badge: string;
  headerRole: string;
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
  copyEmail: string;
  emailCopied: string;
  sendEmail: string;
  footerBio: string;
  footerJoke: string;
  projectStack: string;
  projectProblem: string;
  projectContext: string;
  projectFeatures: string;
  projectVisit: string;
  backToHome: string;
  projectDeepDive: string;
  privacyTitle: string;
  privacyLastUpdated: string;
  privacySections: LegalSection[];
  termsTitle: string;
  termsLastUpdated: string;
  termsSections: LegalSection[];
  skills: Record<SkillKey, SkillGroup>;
  projects: Record<ProjectKey, ProjectTranslation>;
  projectPages: Record<ProjectKey, ProjectPageTranslation>;
  specialtyPages: Record<SkillKey, SpecialtyPageTranslation>;
  legalTeasersPool: {
    privacy: string[];
    terms: string[];
  };
  heroScroll: string;
  connectHeadline: string;
  connectSubline: string;
}

/* ─── Data Types ────────────────────────────────────────────────────── */

export interface ProjectMeta {
  key: ProjectKey;
  name: string;
  icon: LucideIcon;
  tags: string[];
  url: string;
  screenshots: string[];
  stack: string[];
}

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { detectLanguage, translations } from "./i18n";
import { type Lang } from "./types";

describe("i18n", () => {
  describe("detectLanguage", () => {
    beforeEach(() => {
      localStorage.clear();
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("returns saved language from localStorage", () => {
      localStorage.setItem("lang", "en");
      expect(detectLanguage()).toBe("en");
    });

    it("falls back to browser language (Spanish)", () => {
      localStorage.clear();
      vi.stubGlobal("navigator", { language: "es-AR" });
      expect(detectLanguage()).toBe("es");
    });

    it("falls back to browser language (English)", () => {
      localStorage.clear();
      vi.stubGlobal("navigator", { language: "en-US" });
      expect(detectLanguage()).toBe("en");
    });

    it("defaults to English for non-Spanish languages", () => {
      localStorage.clear();
      vi.stubGlobal("navigator", { language: "fr-FR" });
      expect(detectLanguage()).toBe("en");
    });

    it("defaults to English when navigator is unavailable", () => {
      localStorage.clear();
      const navSpy = vi
        .spyOn(window.navigator, "language", "get")
        .mockReturnValue(undefined as unknown as string);
      expect(detectLanguage()).toBe("en");
      navSpy.mockRestore();
    });
  });

  describe("translations structure", () => {
    it("has both es and en translations", () => {
      expect(translations).toHaveProperty("es");
      expect(translations).toHaveProperty("en");
    });

    it("has all required top-level keys for each language", () => {
      const requiredKeys: (keyof typeof translations.es)[] = [
        "badge",
        "heroLine1",
        "heroHighlight",
        "heroLine2",
        "heroDescription",
        "sectionSkills",
        "sectionProjects",
        "sectionConnect",
        "contactMe",
        "skills",
        "projects",
        "projectPages",
        "privacyTitle",
        "termsTitle",
        "legalTeasersPool",
      ];

      (["es", "en"] as Lang[]).forEach((lang) => {
        requiredKeys.forEach((key) => {
          expect(translations[lang]).toHaveProperty(key);
        });
      });
    });

    it("has skill translations for all categories", () => {
      const skillCategories = [
        "architecture",
        "infra",
        "security",
        "leadership",
      ] as const;
      (["es", "en"] as Lang[]).forEach((lang) => {
        skillCategories.forEach((cat) => {
          expect(translations[lang].skills[cat]).toBeDefined();
          expect(translations[lang].skills[cat].title).toBeTruthy();
          expect(translations[lang].skills[cat].items.length).toBeGreaterThan(
            0,
          );
        });
      });
    });

    it("has project pages for all projects", () => {
      const projectKeys = ["autodata", "vineteca", "ajedrez"] as const;
      (["es", "en"] as Lang[]).forEach((lang) => {
        projectKeys.forEach((key) => {
          expect(translations[lang].projectPages[key]).toBeDefined();
          expect(translations[lang].projectPages[key].title).toBeTruthy();
          expect(
            translations[lang].projectPages[key].features.length,
          ).toBeGreaterThan(0);
        });
      });
    });
  });
});

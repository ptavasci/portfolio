import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { detectLanguage } from "../i18n";
import { type Theme, type Lang, type AppContextValue } from "../types";

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as Theme;
      if (saved === "light" || saved === "dark" || saved === "system")
        return saved;
    }
    return "system";
  });

  const [lang, setLangState] = useState<Lang>(() => detectLanguage());

  /* ── Theme effect ─────────────────────────────────────────────────── */
  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      let isDark = false;
      if (theme === "dark") isDark = true;
      else if (theme === "light") isDark = false;
      else isDark = mediaQuery.matches;

      if (isDark) root.classList.add("dark");
      else root.classList.remove("dark");
    };

    applyTheme();
    localStorage.setItem("theme", theme);

    const listener = () => {
      if (theme === "system") applyTheme();
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [theme]);

  /* ── Language effect ──────────────────────────────────────────────── */
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setTheme = (t: Theme) => setThemeState(t);
  const setLang = (l: Lang) => setLangState(l);

  return (
    <AppContext.Provider value={{ theme, setTheme, lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
}

/**
 * Hook to access global application settings (theme & language).
 */
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within an AppProvider");
  return ctx;
}

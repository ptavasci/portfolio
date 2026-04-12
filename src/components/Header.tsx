import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  Monitor,
  ChevronDown,
  Check,
  Languages,
} from "lucide-react";
import { useApp } from "../contexts/AppContext";
import { translations } from "../i18n";
import { type Theme, type Translations } from "../types";
import Logo from "./Logo.tsx";

export default function Header() {
  const { theme, setTheme, lang, setLang } = useApp();
  const t: Translations = translations[lang];

  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const themeRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (themeRef.current && !themeRef.current.contains(event.target as Node))
        setIsThemeOpen(false);
      if (langRef.current && !langRef.current.contains(event.target as Node))
        setIsLangOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const themeLabelMap = {
    light: t.themeLight,
    dark: t.themeDark,
    system: t.themeSystem,
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-bg-dark/80 backdrop-blur-xl border-b border-zinc-200 dark:border-border-dark">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo
            size={40}
            className="shadow-lg shadow-brand-primary/20 group-hover:shadow-brand-primary/40 transition-shadow rounded-[9px]"
          />
          <div>
            <span className="font-semibold font-display text-zinc-900 dark:text-white">
              Pablo Tavasci Dozo
            </span>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Software Engineer
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => {
                setIsLangOpen(!isLangOpen);
                setIsThemeOpen(false);
              }}
              className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-100 dark:bg-surface-dark text-zinc-600 dark:text-zinc-300 transition-all hover:bg-zinc-200 dark:hover:bg-surface-dark-hover border border-transparent dark:border-border-dark active:scale-95"
              aria-label="Select language"
            >
              <Languages className="w-4 h-4 transition-transform group-hover:-rotate-12" />
              <span className="text-sm font-medium hidden sm:inline-block">
                {lang === "es" ? "ES" : "EN"}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-surface-dark border border-zinc-200 dark:border-border-dark shadow-xl py-1 z-50 overflow-hidden">
                {(
                  [
                    ["es", "Español"],
                    ["en", "English"],
                  ] as const
                ).map(([code, label]) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                      ${
                        lang === code
                          ? "bg-orange-50 dark:bg-brand-primary/10 text-brand-primary font-medium"
                          : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-surface-dark-hover"
                      }`}
                  >
                    <span>{label}</span>
                    {lang === code && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Selector */}
          <div ref={themeRef} className="relative">
            <button
              onClick={() => {
                setIsThemeOpen(!isThemeOpen);
                setIsLangOpen(false);
              }}
              className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-100 dark:bg-surface-dark text-zinc-600 dark:text-zinc-300 transition-all hover:bg-zinc-200 dark:hover:bg-surface-dark-hover border border-transparent dark:border-border-dark active:scale-95"
              aria-label="Select theme"
            >
              {theme === "light" && (
                <Sun className="w-4 h-4 transition-transform group-hover:rotate-45" />
              )}
              {theme === "dark" && (
                <Moon className="w-4 h-4 transition-transform group-hover:-rotate-12" />
              )}
              {theme === "system" && (
                <Monitor className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              )}
              <span className="text-sm font-medium hidden sm:inline-block w-14 text-left">
                {themeLabelMap[theme as Theme]}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${isThemeOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isThemeOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white dark:bg-surface-dark border border-zinc-200 dark:border-border-dark shadow-xl py-1 z-50 overflow-hidden">
                {(["light", "dark", "system"] as Theme[]).map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setTheme(opt);
                      setIsThemeOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                      ${
                        theme === opt
                          ? "bg-orange-50 dark:bg-brand-primary/10 text-brand-primary font-medium"
                          : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-surface-dark-hover"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {opt === "light" && <Sun className="w-4 h-4" />}
                      {opt === "dark" && <Moon className="w-4 h-4" />}
                      {opt === "system" && <Monitor className="w-4 h-4" />}
                      <span>{themeLabelMap[opt]}</span>
                    </div>
                    {theme === opt && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

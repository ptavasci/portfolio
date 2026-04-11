import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { detectLanguage, type Lang } from './i18n'

/* ─── Types ───────────────────────────────────────────────────────────── */

export type Theme = 'light' | 'dark' | 'system'

interface ThemeContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
  lang: Lang
  setLang: (l: Lang) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

/* ─── Provider ────────────────────────────────────────────────────────── */

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme
      if (saved === 'light' || saved === 'dark' || saved === 'system') return saved
    }
    return 'system'
  })

  const [lang, setLangState] = useState<Lang>(() => detectLanguage())

  /* ── Theme effect ─────────────────────────────────────────────────── */
  useEffect(() => {
    const root = window.document.documentElement
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = () => {
      let isDark = false
      if (theme === 'dark') isDark = true
      else if (theme === 'light') isDark = false
      else isDark = mediaQuery.matches

      if (isDark) root.classList.add('dark')
      else root.classList.remove('dark')
    }

    applyTheme()
    localStorage.setItem('theme', theme)

    const listener = () => { if (theme === 'system') applyTheme() }
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [theme])

  /* ── Language effect ──────────────────────────────────────────────── */
  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const setTheme = (t: Theme) => setThemeState(t)
  const setLang = (l: Lang) => setLangState(l)

  return (
    <ThemeContext.Provider value={{ theme, setTheme, lang, setLang }}>
      {children}
    </ThemeContext.Provider>
  )
}

/* ─── Hook ────────────────────────────────────────────────────────────── */

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}

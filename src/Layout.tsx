import { useRef, useState, useEffect, type ReactNode } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  Sun, Moon, Monitor, ChevronDown, Check, Languages, Mail
} from 'lucide-react'
import { useTheme, type Theme } from './ThemeContext'
import { translations, type Translations } from './i18n'
import { socialLinks, openContact } from './data'
import Logo from './Logo'
import LegalLink from './LegalLink'

/* ─── Layout ──────────────────────────────────────────────────────────── */

export default function Layout({ children }: { children?: ReactNode }) {
  const { theme, setTheme, lang, setLang } = useTheme()
  const t: Translations = translations[lang]

  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  
  // Coordinated Typewriter State
  const [activeLink, setActiveLink] = useState<'privacy' | 'terms' | null>(null)
  const [displayText, setDisplayText] = useState({ privacy: '', terms: '' })
  const privacyBase = lang === 'es' ? 'Privacidad' : 'Privacy'
  const termsBase = lang === 'es' ? 'Términos' : 'Terms'

  const themeRef = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLParagraphElement>(null)
  const location = useLocation()

  /* Scroll to top on route change */
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  /* Close dropdowns on click outside */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) setIsThemeOpen(false)
      if (langRef.current && !langRef.current.contains(event.target as Node)) setIsLangOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  /* Centralized Typewriter Logic */
  useEffect(() => {
    // Reset display texts when language changes
    setDisplayText({ privacy: privacyBase, terms: termsBase });
    
    let timeoutId: ReturnType<typeof setTimeout>;
    let isMounted = true;

    const runSequence = async () => {
      // 1. Initial Pause
      await new Promise(r => timeoutId = setTimeout(r, 5000));
      if (!isMounted) return;

      const keys = ['privacy', 'terms'] as const;
      let currentIndex = 0;

      while (isMounted) {
        const key = keys[currentIndex];
        const base = key === 'privacy' ? privacyBase : termsBase;
        const pool = t.legalTeasersPool[key];
        const fullPhrase = base + pool[Math.floor(Math.random() * pool.length)];

        // Phase 1: Typing
        setActiveLink(key);
        for (let i = base.length; i <= fullPhrase.length; i++) {
          if (!isMounted) return;
          setDisplayText(prev => ({ ...prev, [key]: fullPhrase.substring(0, i) }));
          await new Promise(r => timeoutId = setTimeout(r, 50));
        }

        // Phase 2: Waiting
        await new Promise(r => timeoutId = setTimeout(r, 3500));
        if (!isMounted) return;

        // Phase 3: Erasing
        for (let i = fullPhrase.length; i >= base.length; i--) {
          if (!isMounted) return;
          setDisplayText(prev => ({ ...prev, [key]: fullPhrase.substring(0, i) }));
          await new Promise(r => timeoutId = setTimeout(r, 20));
        }

        setActiveLink(null);
        currentIndex = (currentIndex + 1) % keys.length;

        // Long pause between privacy and terms
        await new Promise(r => timeoutId = setTimeout(r, 10000));
      }
    };

    runSequence();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [lang, privacyBase, termsBase]); // Re-run if base texts change (language)

  const themeLabelMap = { light: t.themeLight, dark: t.themeDark, system: t.themeSystem }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-bg-dark transition-colors duration-200">
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-bg-dark/80 backdrop-blur-xl border-b border-zinc-200 dark:border-border-dark">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo size={40} className="shadow-lg shadow-brand-primary/20 group-hover:shadow-brand-primary/40 transition-shadow rounded-[9px]" />
            <div>
              <span className="font-semibold text-zinc-900 dark:text-white">Pablo Tavasci Dozo</span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Software Engineer</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => { setIsLangOpen(!isLangOpen); setIsThemeOpen(false) }}
                className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-100 dark:bg-surface-dark text-zinc-600 dark:text-zinc-300 transition-all hover:bg-zinc-200 dark:hover:bg-surface-dark-hover border border-transparent dark:border-border-dark"
                aria-label="Select language"
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline-block">{lang === 'es' ? 'ES' : 'EN'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-surface-dark border border-zinc-200 dark:border-border-dark shadow-xl py-1 z-50 overflow-hidden">
                  {([['es', 'Español'], ['en', 'English']] as const).map(([code, label]) => (
                    <button
                      key={code}
                      onClick={() => { setLang(code); setIsLangOpen(false) }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                        ${lang === code
                          ? 'bg-orange-50 dark:bg-brand-primary/10 text-brand-primary font-medium'
                          : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-surface-dark-hover'
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
                onClick={() => { setIsThemeOpen(!isThemeOpen); setIsLangOpen(false) }}
                className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-100 dark:bg-surface-dark text-zinc-600 dark:text-zinc-300 transition-all hover:bg-zinc-200 dark:hover:bg-surface-dark-hover border border-transparent dark:border-border-dark"
                aria-label="Select theme"
              >
                {theme === 'light' && <Sun className="w-4 h-4" />}
                {theme === 'dark' && <Moon className="w-4 h-4" />}
                {theme === 'system' && <Monitor className="w-4 h-4" />}
                <span className="text-sm font-medium hidden sm:inline-block w-14 text-left">
                  {themeLabelMap[theme]}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isThemeOpen ? 'rotate-180' : ''}`} />
              </button>

              {isThemeOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white dark:bg-surface-dark border border-zinc-200 dark:border-border-dark shadow-xl py-1 z-50 overflow-hidden">
                  {(['light', 'dark', 'system'] as Theme[]).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setTheme(opt); setIsThemeOpen(false) }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                        ${theme === opt
                          ? 'bg-orange-50 dark:bg-brand-primary/10 text-brand-primary font-medium'
                          : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-surface-dark-hover'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        {opt === 'light' && <Sun className="w-4 h-4" />}
                        {opt === 'dark' && <Moon className="w-4 h-4" />}
                        {opt === 'system' && <Monitor className="w-4 h-4" />}
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

      {/* ── Main Content ───────────────────────────────────── */}
      <main className="flex-1">
        {children || <Outlet />}
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-zinc-200 dark:border-border-dark mt-8 bg-zinc-50/50 dark:bg-surface-dark/30">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <Logo size={36} className="shadow-md shadow-brand-primary/20 rounded-[8px]" />
                <span className="font-semibold text-zinc-900 dark:text-white">Pablo Tavasci</span>
              </Link>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {lang === 'es'
                  ? 'Ingeniero de software, padre, apasionado de los autos y la domótica.'
                  : 'Software engineer, father, car enthusiast, and home automation nerd.'}
              </p>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                {t.sectionProjects}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/project/autodata" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-primary transition-colors">
                    Autodata
                  </Link>
                </li>
                <li>
                  <Link to="/project/vineteca" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-primary transition-colors">
                    Vineteca
                  </Link>
                </li>
                <li>
                  <Link to="/project/ajedrez" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-primary transition-colors">
                    Ajedrez IA
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                {t.sectionConnect}
              </h4>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                    >
                      <link.icon className="w-3.5 h-3.5" />
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={openContact}
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-primary transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {t.contactMe}
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <LegalLink 
                    to="/privacy"
                    displayText={displayText.privacy}
                    active={activeLink === 'privacy'}
                  />
                </li>
                <li>
                  <LegalLink 
                    to="/terms"
                    displayText={displayText.terms}
                    active={activeLink === 'terms'}
                  />
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-zinc-200 dark:border-border-dark flex flex-col sm:flex-row justify-between items-center gap-4">
            <p ref={footerRef} className="text-xs text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Pablo Tavasci Dozo
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 italic">
              {lang === 'es'
                ? 'Capaz de decirle a tu cafetera que le diga a la licuadora que encienda al lavarropas cuando termine de llover en Kamchatka.'
                : 'Able to tell your coffee maker to tell the blender to turn on the washing machine when it stops raining in Kamchatka.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { useState, useRef, useEffect } from "react";
import { useLegalTypewriter } from "@/hooks/useLegalTypewriter";
import { useApp } from "../contexts/AppContext";
import { translations } from "../i18n";
import { socialLinks } from "../data";
import { openContact } from "../utils/contact";
import Logo from "./Logo.tsx";
import LegalLink from "./LegalLink.tsx";

import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

interface FooterProps {
  // Props removed in favor of internal logic isolation
}

/**
 * Modernized Footer with stable layout geometry.
 * Anchored Legal column width prevents jitter during typewriter animations.
 */
export default function Footer({}: FooterProps) {
  const { lang } = useApp();
  const t = translations[lang];

  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const typewriter = useLegalTypewriter(lang, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: document.getElementById("scroll-container"),
        threshold: 0,
      },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="border-t border-zinc-200 dark:border-border-dark mt-8 bg-zinc-50/50 dark:bg-surface-dark/30 snap-section"
      style={{ overflowAnchor: "none" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-x-12 gap-y-10 mb-10 items-start">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Logo
                size={36}
                className="shadow-md shadow-brand-primary/20 rounded-[8px]"
              />
              <span className="font-semibold text-zinc-900 dark:text-white">
                Pablo Tavasci Dozo
              </span>
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {t.footerBio}
            </p>
          </div>

          {/* Projects Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
              {t.sectionProjects}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/project/autodata"
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-primary transition-colors"
                >
                  Autodata
                </Link>
              </li>
              <li>
                <Link
                  to="/project/vineteca"
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-primary transition-colors"
                >
                  Vineteca
                </Link>
              </li>
              <li>
                <Link
                  to="/project/ajedrez"
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-primary transition-colors"
                >
                  Ajedrez IA
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
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
                    aria-label={`Visitar mi perfil en ${link.name}`}
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

          {/* Legal Column - Anchored with min-width to prevent shifting */}
          <div className="min-w-[190px]">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <LegalLink
                  to="/privacy"
                  active={typewriter.activeLink === "privacy"}
                  displayText={
                    typewriter.activeLink === "privacy"
                      ? typewriter.displayText
                      : t.privacyTitle
                  }
                />
              </li>
              <li>
                <LegalLink
                  to="/terms"
                  active={typewriter.activeLink === "terms"}
                  displayText={
                    typewriter.activeLink === "terms"
                      ? typewriter.displayText
                      : t.termsTitle
                  }
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-border-dark flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Pablo Tavasci Dozo
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 italic text-center sm:text-right">
            {t.footerJoke}
          </p>
        </div>
      </div>
    </footer>
  );
}

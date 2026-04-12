import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { translations } from "@/i18n";
import { type Lang } from "@/types";

/**
 * Custom hook to dynamically update document <title> and metadata based on route and language.
 */
export function useSeo(lang: Lang) {
  const location = useLocation();
  const t = translations[lang];

  useEffect(() => {
    let title = "Pablo Tavasci Dozo | Software Engineer";

    // Base translate for home or not
    if (lang === "es") {
      title = "Pablo Tavasci Dozo | Ingeniero de Software";
    }

    const path = location.pathname;

    if (path.startsWith("/project/autodata")) {
      title = `${t.projectPages.autodata.title} | Pablo Tavasci Dozo`;
    } else if (path.startsWith("/project/vineteca")) {
      title = `${t.projectPages.vineteca.title} | Pablo Tavasci Dozo`;
    } else if (path.startsWith("/project/ajedrez")) {
      title = `${t.projectPages.ajedrez.title} | Pablo Tavasci Dozo`;
    } else if (path === "/privacy") {
      title = `${t.privacyTitle} | Pablo Tavasci Dozo`;
    } else if (path === "/terms") {
      title = `${t.termsTitle} | Pablo Tavasci Dozo`;
    }

    document.title = title;

    // Optional: Could update meta description here as well
  }, [location.pathname, lang, t]);
}

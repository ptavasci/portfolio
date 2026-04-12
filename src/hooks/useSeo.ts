import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { translations } from "@/i18n";
import { type Lang } from "@/types";

function updateMetaTag(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Custom hook to dynamically update document <title> and metadata based on route and language.
 */
export function useSeo(lang: Lang) {
  const location = useLocation();
  const t = translations[lang];

  useEffect(() => {
    let title = "Pablo Tavasci Dozo | Software Engineer";
    let desc =
      "Pablo Tavasci Dozo - Software Architect & Technical Lead with 25+ years of experience.";

    // Base translate for home or not
    if (lang === "es") {
      title = "Pablo Tavasci Dozo | Ingeniero de Software";
      desc =
        "Pablo Tavasci Dozo - Arquitecto de Software & Líder Técnico con +25 años de experiencia.";
    }

    const path = location.pathname;

    if (path.startsWith("/project/autodata")) {
      title = `${t.projectPages.autodata.title} | Pablo Tavasci Dozo`;
      desc = t.projectPages.autodata.subtitle;
    } else if (path.startsWith("/project/vineteca")) {
      title = `${t.projectPages.vineteca.title} | Pablo Tavasci Dozo`;
      desc = t.projectPages.vineteca.subtitle;
    } else if (path.startsWith("/project/ajedrez")) {
      title = `${t.projectPages.ajedrez.title} | Pablo Tavasci Dozo`;
      desc = t.projectPages.ajedrez.subtitle;
    } else if (path === "/privacy") {
      title = `${t.privacyTitle} | Pablo Tavasci Dozo`;
    } else if (path === "/terms") {
      title = `${t.termsTitle} | Pablo Tavasci Dozo`;
    }

    document.title = title;

    // Inject Meta Tags for SEO and Social Sharing (Open Graph)
    updateMetaTag("description", desc);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", desc, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", window.location.href, true);
    updateMetaTag("og:image", `${window.location.origin}/og-image.png`, true);
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", desc);
    updateMetaTag("twitter:image", `${window.location.origin}/og-image.png`);
  }, [location.pathname, lang, t]);
}

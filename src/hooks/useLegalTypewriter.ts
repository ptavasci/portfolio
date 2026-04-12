import { useState, useEffect } from "react";
import { translations } from "../i18n";
import { type Lang } from "../types";

/**
 * Custom hook to manage the "easter egg" typewriter animation in the footer.
 * Cycles through humorous teasers for Privacy and Terms pages.
 */
export function useLegalTypewriter(lang: Lang) {
  const [activeLink, setActiveLink] = useState<"privacy" | "terms" | null>(
    null,
  );
  const [displayText, setDisplayText] = useState("");
  const t = translations[lang];

  useEffect(() => {
    let isMounted = true;
    let timeoutId: number;
    let currentIndex = 0;

    const delay = (ms: number) =>
      new Promise((res) => {
        timeoutId = window.setTimeout(res, ms);
      });

    const runSequence = async () => {
      // Initial delay before starting the easter egg
      await delay(3000);

      while (isMounted) {
        const links = ["privacy", "terms"] as const;
        // Pick one randomly or simply toggle? The user original was an array or random?
        // Let's toggle between them evenly by using currentIndex.
        const key = links[currentIndex % links.length];

        const base = key === "privacy" ? t.privacyTitle : t.termsTitle;
        const pool = t.legalTeasersPool[key];
        const teaser = pool[currentIndex % pool.length];
        const fullPhrase = base + teaser;

        setActiveLink(key);
        setDisplayText(base);

        // Phase 1: Typing
        for (let i = base.length; i <= fullPhrase.length; i++) {
          if (!isMounted) break;
          setDisplayText(fullPhrase.substring(0, i));
          await delay(50); // Premium readable speed
        }

        // Phase 2: Waiting to read
        if (isMounted) await delay(4000);

        // Phase 3: Erasing smoothly
        for (let i = fullPhrase.length; i >= base.length; i--) {
          if (!isMounted) break;
          setDisplayText(fullPhrase.substring(0, i));
          await delay(20); // Fast erase
        }

        if (!isMounted) break;

        setActiveLink(null);
        setDisplayText("");
        currentIndex++;

        // Long pause before the next sequence
        await delay(10000);
      }
    };

    runSequence();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [lang, t.legalTeasersPool]);

  return { activeLink, displayText };
}

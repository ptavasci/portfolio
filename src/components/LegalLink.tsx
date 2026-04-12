import { useState } from "react";
import { Link } from "react-router-dom";

interface LegalLinkProps {
  to: string;
  active: boolean;
  displayText: string;
}

/**
 * High-fidelity restoration of the original LegalLink component.
 * Implements the "Censor & Glitch" easter egg logic with real-time blur
 * removal on hover and a high-glow animated caret.
 */
export default function LegalLink({ to, active, displayText }: LegalLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Function to parse the [[bracketed]] text for the glitch/censor effect
  // This version applies the original orange + mono styling to censored segments.
  const parseText = (text: string) => {
    return text.split(/(\[\[.*?\]\])/).map((segment, i) => {
      if (segment.startsWith("[[") && segment.endsWith("]]")) {
        const word = segment.slice(2, -2);
        return (
          <span
            key={i}
            className="relative inline-block group/censor overflow-hidden align-bottom"
          >
            <span
              className={`transition-all duration-300 ${
                isHovered
                  ? "blur-0 opacity-100 text-brand-primary"
                  : "blur-[6.5px] opacity-60 text-brand-primary"
              } font-mono font-bold`}
            >
              {word}
            </span>
            <span
              className={`absolute inset-0 censor-grid opacity-20 transition-opacity duration-300 pointer-events-none ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            />
          </span>
        );
      }
      return (
        <span key={i} className="leading-relaxed">
          {segment}
        </span>
      );
    });
  };

  return (
    <Link
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-sm transition-all duration-300 relative inline-block py-0.5
        ${
          isHovered
            ? "text-brand-primary font-medium"
            : active
              ? "text-zinc-800 dark:text-zinc-200"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
        }
      `}
    >
      <span className="inline-block">
        {parseText(displayText)}
        {active && (
          <span className="inline-block w-[3px] h-[1.1em] ml-1 bg-brand-primary shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-[pulse_0.8s_infinite] align-middle" />
        )}
      </span>
    </Link>
  );
}

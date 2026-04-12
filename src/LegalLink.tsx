import { useState } from 'react'
import { Link } from 'react-router-dom'

interface LegalLinkProps {
  to: string;
  displayText: string;
  active?: boolean;
}

/**
 * LegalLink - Presentational component for legal links with selective blur and terminal-style caret.
 * Removed underlines per user preference, focusing on the orange blinking cursor.
 */
export default function LegalLink({ to, displayText, active = false }: LegalLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Parse text to identify blurred sections marked with [[...]]
  const parseText = (text: string) => {
    const segments = text.split(/(\[\[.*?\]\])/g);
    
    return segments.map((segment, i) => {
      if (segment.startsWith('[[') && segment.endsWith(']]')) {
        const word = segment.slice(2, -2);
        return (
          <span 
            key={i} 
            className={`transition-all duration-700 rounded-sm relative inline-flex items-center justify-center px-1.5 mx-0.5 whitespace-nowrap
              ${isHovered 
                ? 'blur-0 bg-transparent text-brand-primary' 
                : 'bg-zinc-800/40 dark:bg-zinc-200/5 backdrop-blur-md animate-glitch-pulse'
              }
            `}
          >
            {!isHovered && (
              <span className="absolute inset-0 censor-grid opacity-30 pointer-events-none" />
            )}
            <span className={isHovered ? '' : 'opacity-0'}>
              {word}
            </span>
            {!isHovered && (
              <span className="absolute inset-0 flex items-center justify-center text-[0px] select-none">
                {word}
              </span>
            )}
          </span>
        );
      }
      return <span key={i} className="leading-relaxed">{segment}</span>;
    });
  };

  return (
    <Link
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-sm text-zinc-500 dark:text-zinc-400 transition-all duration-300 relative inline-block py-0.5
        ${isHovered ? 'text-brand-primary' : (active ? 'text-zinc-400 dark:text-zinc-500' : '')}
      `}
    >
      <span className="inline">
        {parseText(displayText)}
        {active && (
          <span className="inline-block w-[3px] h-[1.1em] ml-1 bg-brand-primary shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-[pulse_0.8s_infinite] align-middle" />
        )}
      </span>
    </Link>
  )
}

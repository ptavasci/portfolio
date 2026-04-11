import { useState } from 'react'
import { Link } from 'react-router-dom'

interface LegalLinkProps {
  to: string;
  displayText: string;
  active?: boolean;
  lang: 'es' | 'en';
}

/**
 * LegalLink - Presentational component for legal links with selective blur.
 * Centralized state in Layout.tsx manages the typewriter progress.
 */
export default function LegalLink({ to, displayText, active = false, lang }: LegalLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Parse text to identify blurred sections marked with [[...]]
  const parseText = (text: string) => {
    // Split by [[...]] but keep the delimiters to identify blurred parts
    const segments = text.split(/(\[\[.*?\]\])/g);
    
    return segments.map((segment, i) => {
      if (segment.startsWith('[[') && segment.endsWith(']]')) {
        const word = segment.slice(2, -2);
        return (
          <span 
            key={i} 
            className={`transition-all duration-500 rounded px-0.5 select-none
              ${isHovered ? 'blur-0 bg-transparent' : 'blur-[3.5px] bg-zinc-400/20 dark:bg-zinc-100/10'}
            `}
          >
            {word}
          </span>
        );
      }
      return <span key={i}>{segment}</span>;
    });
  };

  return (
    <Link
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-sm text-zinc-500 dark:text-zinc-400 transition-all duration-300 relative group flex items-center min-h-[1.5rem]
        ${isHovered ? 'text-brand-primary scale-[1.02]' : (active ? 'text-zinc-400 dark:text-zinc-500' : '')}
      `}
    >
      <span className="flex items-center whitespace-pre-wrap">
        {parseText(displayText)}
        {active && (
          <span className="w-1 h-3 ml-0.5 bg-brand-primary animate-pulse flex-shrink-0" />
        )}
      </span>
      
      {/* Subtle underline indicator for "glitch" activity */}
      <span className={`absolute -bottom-0.5 left-0 w-full h-[1px] transition-all duration-500
        ${active ? 'bg-brand-primary/40 opacity-100' : 'bg-transparent opacity-0'}
      `} />
      
      <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-brand-primary/10 group-hover:bg-brand-primary transition-all duration-300 overflow-hidden">
        <span className="absolute inset-0 bg-brand-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
      </span>
    </Link>
  )
}

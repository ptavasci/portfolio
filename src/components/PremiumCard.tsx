import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

interface PremiumCardProps {
  icon: LucideIcon;
  title: string;
  to: string;
  accentColor?: string;
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}

export default function PremiumCard({
  icon: Icon,
  title,
  to,
  accentColor = "#ff5c00", // Default to brand orange
  children,
  delay = 0,
  duration = 800,
  distance = 32,
}: PremiumCardProps) {
  // Extract hex to use in opacity-based backgrounds if needed,
  // but Tailwind supports arbitrary values: bg-[color]/opacity

  return (
    <ScrollReveal delay={delay} duration={duration} distance={distance}>
      <TiltCard className="h-full">
        <Link
          to={to}
          viewTransition
          className="group block h-full p-6 rounded-2xl bg-white/60 dark:bg-surface-dark/50 backdrop-blur-xl border border-zinc-200 dark:border-border-dark transition-all duration-300 hover:bg-white/80 dark:hover:bg-surface-dark-hover/80 hover:shadow-2xl relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          style={
            {
              "--hover-border": `${accentColor}40`,
              "--hover-shadow": `${accentColor}10`,
            } as React.CSSProperties
          }
        >
          {/* Aura Corner Glow Effect */}
          <div
            className="absolute -top-10 -right-10 w-32 h-32 opacity-10 blur-3xl transition-opacity group-hover:opacity-20 pointer-events-none"
            style={{ backgroundColor: accentColor }}
          ></div>

          <div className="relative">
            {/* Header Row */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: `${accentColor}15`, // Light themed background
                    color: accentColor,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3
                  className="text-2xl font-bold font-display transition-colors duration-300"
                  style={{
                    // Subtle themed gradient for title
                    backgroundImage: `linear-gradient(to right, ${accentColor}, ${accentColor}cc)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {title}
                </h3>
              </div>
              <div className="text-zinc-400 group-hover:animate-bounce-x transition-colors">
                <ArrowRight
                  className="w-5 h-5"
                  style={{ color: accentColor }}
                />
              </div>
            </div>

            {/* Content Area */}
            <div className="relative z-10">{children}</div>
          </div>
        </Link>
      </TiltCard>
    </ScrollReveal>
  );
}

import { useState } from "react";
import {
  Wine,
  Layout,
  Database,
  Compass,
  Zap,
  Layers,
  Sparkles,
} from "lucide-react";
import { type DeepDiveSection } from "../types";

interface ProjectDeepDiveProps {
  sections: DeepDiveSection[];
  title: string;
}

const ICONS: Record<string, any> = {
  product: Wine,
  experience: Layout,
  engineering: Database,
  future: Compass,
};

const COLORS: Record<string, string> = {
  product: "text-brand-primary bg-orange-50 dark:bg-brand-primary/10",
  experience: "text-blue-600 bg-blue-50 dark:bg-blue-500/10",
  engineering: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10",
  future: "text-purple-600 bg-purple-50 dark:bg-purple-500/10",
};

/**
 * Reusable Section Content Component
 */
function SectionContent({
  section,
  isMobile = false,
  isLast = false,
}: {
  section: DeepDiveSection;
  isMobile?: boolean;
  isLast?: boolean;
}) {
  const Icon = ICONS[section.id] || Zap;
  const colorClasses = COLORS[section.id] || "bg-zinc-100";

  return (
    <div className="relative group">
      {/* Timeline line - Mobile only */}
      {isMobile && (
        <div
          className={`absolute left-6 top-[56px] ${isLast ? "h-12" : "bottom-[-48px]"} w-px bg-gradient-to-b from-brand-primary/30 to-transparent z-0`}
        ></div>
      )}

      <div className="flex items-center gap-4 lg:gap-6 relative z-10 mb-6 lg:mb-8">
        <div
          className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-black/5 ${colorClasses} group-hover:scale-110 transition-transform duration-500`}
        >
          <Icon className="w-6 h-6 lg:w-8 h-8" />
        </div>
        <h3 className="text-2xl lg:text-4xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight">
          {section.title}
        </h3>
      </div>

      {/* Mobile Image */}
      {isMobile && section.image && (
        <div className="ml-10 mb-6 rounded-xl overflow-hidden border border-zinc-200 dark:border-border-dark shadow-lg">
          <img
            src={section.image}
            alt={section.title}
            className="w-full aspect-video object-cover"
          />
        </div>
      )}

      <div
        className={`space-y-4 ${isMobile ? "pl-10 lg:pl-0" : ""} relative z-10`}
      >
        {section.content.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50/50 dark:bg-surface-dark/30 border border-zinc-100 dark:border-border-dark/50 hover:bg-white dark:hover:bg-zinc-800/50 transition-all duration-300 group/item hover:shadow-lg hover:shadow-brand-primary/5"
          >
            <div className="mt-0.5 text-brand-primary opacity-40 group-hover/item:opacity-100 transition-opacity shrink-0">
              <Sparkles className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base lg:text-lg">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDeepDive({
  sections,
  title,
}: ProjectDeepDiveProps) {
  const [activeTab, setActiveTab] = useState(sections[0].id);

  const activeSection = sections.find((s) => s.id === activeTab) || sections[0];

  return (
    <section className="mt-10 pt-10 lg:mt-16 lg:pt-16 pb-16 lg:pb-24 border-t border-zinc-200 dark:border-border-dark animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-8 lg:gap-12">
        <div className="flex items-center gap-3 px-2 lg:px-0">
          <div className="w-8 h-1 rounded-full bg-brand-primary"></div>
          <h2 className="text-xl lg:text-2xl font-bold text-zinc-900 dark:text-white uppercase tracking-tight">
            {title}
          </h2>
        </div>

        {/* Desktop Navigation (Tabs) - Hidden on Mobile */}
        <div className="hidden lg:flex overflow-x-auto pb-4 no-scrollbar touch-pan-x snap-x">
          <div className="flex gap-2 p-1.5 bg-zinc-100/80 dark:bg-surface-dark-hover/50 rounded-2xl backdrop-blur-sm border border-zinc-200/50 dark:border-border-dark/50">
            {sections.map((section) => {
              const SectionIcon = ICONS[section.id] || Layers;
              const isActive = activeTab === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap snap-center shadow-sm ${
                    isActive
                      ? "bg-white dark:bg-zinc-800 text-brand-primary scale-[1.02] shadow-brand-primary/5 border border-zinc-200 dark:border-zinc-700"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-white/50 dark:hover:bg-zinc-800/30"
                  }`}
                >
                  <SectionIcon
                    className={`w-4 h-4 transition-transform duration-300 ${isActive ? "scale-110 rotate-3" : ""}`}
                  />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Content Area */}
        <div className="hidden lg:block relative min-h-[400px]">
          <div
            key={activeSection.id}
            className="grid lg:grid-cols-2 gap-12 items-start animate-in fade-in slide-in-from-left-4 duration-500"
          >
            <SectionContent section={activeSection} />

            <div className="relative group/img h-full">
              <div className="absolute -inset-4 bg-brand-primary/5 rounded-[32px] blur-2xl group-hover/img:bg-brand-primary/10 transition-colors duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-border-dark shadow-2xl bg-zinc-100 dark:bg-surface-dark transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={activeSection.image}
                  alt={activeSection.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stack */}
        <div className="lg:hidden space-y-16 pb-8">
          {sections.map((section, idx) => (
            <SectionContent
              key={section.id}
              section={section}
              isMobile={true}
              isLast={idx === sections.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

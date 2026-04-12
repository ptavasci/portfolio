import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Sparkles, Building2, Globe } from "lucide-react";
import { useApp } from "../contexts/AppContext";
import { translations } from "../i18n";
import { skillIcons } from "../data";
import { openContact } from "../utils/contact";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export default function SpecialtyPage() {
  const { id } = useParams<{ id: string }>();
  const { lang } = useApp();
  const t = translations[lang];

  const specialty = id ? (t.specialtyPages as any)[id] : null;

  if (!specialty) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-zinc-500 dark:text-zinc-400 mb-4">
          {lang === "es" ? "Especialidad no encontrada" : "Specialty not found"}
        </p>
        <Link to="/" className="text-brand-primary hover:underline">
          &larr; {t.backToHome}
        </Link>
      </div>
    );
  }

  const Icon = (skillIcons as any)[id || ""];
  const accentColor = specialty.accentColor || "#ff5c00";

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 relative font-sans">
      {/* Background Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 dark:opacity-20 pointer-events-none rounded-full blur-[120px]"
        style={{ backgroundColor: accentColor }}
      ></div>

      <div className="flex items-center justify-between mb-10 relative">
        <Link
          to="/"
          viewTransition
          className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-brand-primary transition-colors text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          {t.sectionSkills}
        </Link>
      </div>

      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16 relative">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg"
            style={{ backgroundColor: accentColor }}
          >
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                {specialty.subtitle}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white font-display">
              {specialty.title}
            </h1>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-4xl mb-16 leading-relaxed">
          {specialty.description}
        </p>
      </ScrollReveal>

      <div className="grid gap-8">
        {(specialty.details || []).map((detail: any, index: number) => (
          <ScrollReveal key={detail.title} delay={index * 100}>
            <TiltCard>
              <div className="group p-8 rounded-3xl bg-white/60 dark:bg-surface-dark/50 backdrop-blur-xl border border-zinc-200 dark:border-border-dark hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 relative overflow-hidden">
                {/* Decorative Accent Line */}
                <div
                  className="absolute top-0 left-0 w-1 h-full opacity-50"
                  style={{ backgroundColor: accentColor }}
                ></div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 font-display">
                      {detail.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                      {detail.description}
                    </p>
                  </div>

                  {detail.solutions && (
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/50">
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="w-4 h-4 text-brand-primary" />
                          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            {lang === "es"
                              ? "Soluciones Enterprise / Corporativas"
                              : "Enterprise / Corporate Solutions"}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          {detail.solutions.enterprise}
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/50">
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="w-4 h-4 text-brand-primary" />
                          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            {lang === "es"
                              ? "Alternativas Open Source / Costo-Eficientes"
                              : "Open Source / Cost-Efficient Alternatives"}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          {detail.solutions.openSource}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={500}>
        <div className="mt-20 pt-10 border-t border-zinc-200 dark:border-border-dark flex flex-col items-center gap-6">
          <p className="text-zinc-500 dark:text-zinc-400 text-center max-w-md">
            {lang === "es"
              ? "¿Buscas asesoramiento técnico experto para este área?"
              : "Looking for expert technical advice on this area?"}
          </p>
          <button
            onClick={openContact}
            className="group flex items-center gap-3 px-10 py-5 rounded-2xl bg-brand-primary text-white font-bold text-lg hover:scale-105 transition-all active:scale-95 shadow-xl shadow-brand-primary/25 cursor-pointer"
          >
            {t.contactMe}
          </button>
        </div>
      </ScrollReveal>
    </div>
  );
}

import { useState, useLayoutEffect } from "react";
import { MapPin, Mail, Check, Shield } from "lucide-react";
import { useApp } from "../contexts/AppContext";
import { translations } from "../i18n";
import { skillKeys, skillIcons, projectsMeta, socialLinks } from "../data";
import { openContact } from "../utils/contact";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumCard from "@/components/PremiumCard";

export default function HomePage() {
  const { lang } = useApp();
  const t = translations[lang];

  // Force scroll to top on mount to ensure the first snap (Hero) is correctly aligned.
  // This works in tandem with the global 'manual' scrollRestoration in main.tsx.
  useLayoutEffect(() => {
    const scrollContainer = document.querySelector(".snap-y-mandatory");
    if (!scrollContainer) return;

    // Immediate reset
    scrollContainer.scrollTop = 0;

    // Fallback for when the browser is extra aggressive with initial paints
    const handle = requestAnimationFrame(() => {
      scrollContainer.scrollTop = 0;
    });

    return () => cancelAnimationFrame(handle);
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="min-h-[80vh] lg:min-h-screen flex flex-col justify-center items-center text-center relative group snap-section overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic Spotlight Hover Effect */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 92, 0, 0.07), transparent 40%)`,
          }}
        />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-brand-primary/10 text-brand-primary text-sm font-medium mt-4 sm:mt-0 mb-8 border border-orange-100 dark:border-brand-primary/20 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
          </span>
          {t.badge}
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 tracking-tight animate-fade-in-up opacity-0"
          style={{ animationDelay: "100ms" }}
        >
          <span className="text-zinc-900 dark:text-white">{t.heroLine1}</span>
          <span className="bg-gradient-to-r from-brand-primary to-orange-400 bg-clip-text text-transparent">
            {t.heroHighlight}
          </span>
          <br />
          <span className="text-zinc-900 dark:text-white">{t.heroLine2}</span>
        </h1>

        <p
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          {t.heroDescription}
        </p>

        <div
          className="flex flex-wrap justify-center gap-3 animate-fade-in-up opacity-0 mb-12"
          style={{ animationDelay: "300ms" }}
        >
          <span className="px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm dark:bg-surface-dark/50 text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-border-dark">
            {t.tagArch}
          </span>
          <span className="px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm dark:bg-surface-dark/50 text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-border-dark">
            {t.tagDevOps}
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm dark:bg-surface-dark/50 text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-border-dark">
            <Shield className="w-3.5 h-3.5 text-zinc-400" />
            {t.tagSecurity}
          </span>
          <span className="px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm dark:bg-surface-dark/50 text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-border-dark">
            {t.tagLead}
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm dark:bg-surface-dark/50 text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-border-dark">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            {t.tagLocation}
          </span>
        </div>

        {/* Premium Mouse Pill Indicator */}
        <button
          onClick={() =>
            document
              .getElementById("skills-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 transition-opacity duration-300 hover:opacity-100 opacity-60 group/mouse"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 group-hover/mouse:text-brand-primary transition-colors">
            {t.heroScroll || "Explore"}
          </span>
          <div className="w-[26px] h-[42px] rounded-full border-2 border-zinc-400/30 group-hover/mouse:border-brand-primary/50 transition-colors flex justify-center p-1.5 relative bg-white/5 dark:bg-transparent backdrop-blur-sm">
            <div className="w-1 h-3 rounded-full bg-brand-primary absolute left-1/2 top-2 animate-mouse-scroll" />
          </div>
        </button>
      </section>

      {/* ── Skills ────────────────────────────────────────────────────── */}
      <section
        id="skills-section"
        className="py-12 lg:py-24 snap-section lg:min-h-screen flex flex-col justify-center"
      >
        <ScrollReveal duration={1000} distance={50}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-zinc-900 dark:text-white">
              {t.sectionSkills}
            </h2>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-border-dark"></div>
          </div>

          <ul role="list" className="grid md:grid-cols-2 gap-8">
            {skillKeys.map((key, index) => {
              const Icon = (skillIcons as any)[key];
              const skill = t.skills[key];
              const specialty = (t.specialtyPages as any)[key];
              const accentColor = specialty?.accentColor;

              return (
                <PremiumCard
                  key={key}
                  icon={Icon}
                  title={skill.title}
                  to={`/specialty/${key}`}
                  accentColor={accentColor}
                  delay={index * 150}
                >
                  <ul className="space-y-3 mb-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-base text-zinc-600 dark:text-zinc-400 flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-zinc-100 dark:bg-zinc-800">
                          <Check className="w-3.5 h-3.5 text-brand-primary" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </PremiumCard>
              );
            })}
          </ul>
        </ScrollReveal>
      </section>

      {/* ── Projects ──────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-24 snap-section lg:min-h-screen flex flex-col justify-center">
        <ScrollReveal duration={1000} distance={50}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-zinc-900 dark:text-white">
              {t.sectionProjects}
            </h2>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-border-dark"></div>
          </div>

          <ul role="list" className="grid md:grid-cols-2 gap-8">
            {projectsMeta.map((project, index) => (
              <PremiumCard
                key={project.name}
                icon={project.icon}
                title={project.name}
                to={`/project/${project.key}`}
                delay={index * 150}
              >
                <div>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                    {t.projects[project.key].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/80 dark:bg-surface-dark-hover/80 backdrop-blur-sm text-zinc-600 dark:text-zinc-300 text-xs font-medium border border-zinc-200 dark:border-border-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </PremiumCard>
            ))}
          </ul>
        </ScrollReveal>
      </section>

      {/* ── Connect ───────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-24 snap-section lg:min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Section-Specific Connect Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-primary/5 blur-[120px] rounded-full -z-10 animate-pulse opacity-50"></div>

        <ScrollReveal duration={1000} distance={50}>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-zinc-900 dark:text-white">
              {t.sectionConnect}
            </h2>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-border-dark"></div>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Left Column: The Big CTA */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl lg:text-6xl font-bold font-display text-zinc-900 dark:text-white tracking-tight leading-[1.1]">
                  {t.connectHeadline}
                </h3>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                  {t.connectSubline}
                </p>
              </div>

              <button
                onClick={openContact}
                className="group relative flex items-center justify-center gap-4 px-10 py-6 rounded-2xl bg-brand-primary text-white text-xl font-bold font-display shadow-2xl shadow-brand-primary/40 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-brand-primary/60 cursor-pointer active:scale-95 w-full lg:w-max"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Mail className="w-6 h-6 transition-transform duration-300 group-hover:-rotate-12" />
                <span>{t.contactMe}</span>
              </button>
            </div>

            {/* Right Column: Social Grid */}
            <div className="grid grid-cols-3 gap-2 lg:gap-4">
              {socialLinks.map((link, index) => (
                <ScrollReveal
                  key={link.name}
                  delay={index * 100}
                  duration={800}
                  distance={30}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-2 lg:gap-4 p-3 lg:p-8 rounded-2xl bg-white/40 dark:bg-surface-dark/40 backdrop-blur-md border border-zinc-200 dark:border-border-dark text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:shadow-xl active:scale-95"
                    style={
                      {
                        "--link-accent": link.accentColor,
                      } as React.CSSProperties
                    }
                  >
                    <div className="w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                      <link.icon className="w-full h-full text-zinc-400 group-hover:text-[color:var(--link-accent)] transition-colors duration-300" />
                    </div>
                    <div className="text-center">
                      <span className="block font-bold font-display text-xs sm:text-base lg:text-lg group-hover:text-[color:var(--link-accent)] transition-colors">
                        {link.name}
                      </span>
                      <span className="hidden lg:block text-[10px] text-zinc-500 font-medium tracking-wider uppercase mt-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-nowrap">
                        @ptavasci
                      </span>
                    </div>

                    {/* Aura Glow Effect */}
                    <style>{`
                        .group:hover {
                          border-color: var(--link-accent);
                          background-color: color-mix(in srgb, var(--link-accent) 8%, transparent);
                          box-shadow: 0 20px 25px -5px color-mix(in srgb, var(--link-accent) 15%, transparent);
                        }
                      `}</style>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

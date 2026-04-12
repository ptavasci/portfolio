import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowRight,
} from "lucide-react";
import { useApp } from "../contexts/AppContext";
import { translations } from "../i18n";
import { projectsMeta } from "../data";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useApp();
  const t = translations[lang];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const project = projectsMeta.find((p) => p.key === slug);
  const projectTranslation = slug ? (t.projectPages as any)[slug] : null;
  const otherProjects = projectsMeta.filter((p) => p.key !== slug);

  const screenshots = project?.screenshots ?? [];

  useEffect(() => {
    setCurrentSlide(0);
  }, [slug]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  }, [screenshots.length]);

  useEffect(() => {
    if (isPaused || screenshots.length <= 1) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, screenshots.length]);

  if (!project || !projectTranslation) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-zinc-500 dark:text-zinc-400 mb-4">
          {lang === "es" ? "Proyecto no encontrado" : "Project not found"}
        </p>
        <Link to="/" className="text-brand-primary hover:underline">
          &larr; {t.backToHome}
        </Link>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-10">
        <Link
          to="/"
          className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-brand-primary transition-colors text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          {t.sectionProjects}
        </Link>
        {project.url !== "#" && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-primary text-white text-sm font-medium hover:bg-brand-hover transition-colors active:scale-95"
          >
            {t.projectVisit}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-brand-primary/10 flex items-center justify-center text-brand-primary">
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
            {projectTranslation.title}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
            {projectTranslation.subtitle}
          </p>
        </div>
      </div>

      {screenshots.length > 0 && (
        <div
          className="relative mb-12 rounded-2xl overflow-hidden border border-zinc-200 dark:border-border-dark shadow-xl group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative aspect-video bg-zinc-100 dark:bg-surface-dark overflow-hidden">
            {screenshots.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`${projectTranslation.title} screenshot ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  idx === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
          {screenshots.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-6 bg-brand-primary" : "bg-white/50 hover:bg-white/80"}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
            {projectTranslation.title} / {t.projectContext}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            {projectTranslation.description}
          </p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
            {t.projectFeatures}
          </h2>
          <ul className="space-y-2">
            {projectTranslation.features.map((feature: string) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400"
              >
                <Check className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-surface-dark border border-zinc-200 dark:border-border-dark">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wider">
              {t.projectStack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-surface-dark-hover text-zinc-600 dark:text-zinc-300 text-xs font-medium border border-zinc-200 dark:border-border-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.url !== "#" && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-brand-primary text-white font-medium hover:bg-brand-hover transition-colors active:scale-95"
            >
              {t.projectVisit}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {otherProjects.length > 0 && (
        <section className="py-12 border-t border-zinc-200 dark:border-border-dark">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
            {lang === "es" ? "Otros proyectos" : "Other Projects"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((other) => (
              <Link
                key={other.key}
                to={`/project/${other.key}`}
                className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-surface-dark border border-zinc-200 dark:border-border-dark p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10 dark:hover:shadow-black/50 hover:-translate-y-1.5 active:scale-[0.98]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                      <other.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-brand-primary to-orange-400 bg-clip-text text-transparent">
                        {other.name}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        {t.projects[other.key].description}
                      </p>
                    </div>
                  </div>
                  <div className="text-zinc-400 group-hover:text-brand-primary group-hover:animate-bounce-x transition-colors ml-4 shrink-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

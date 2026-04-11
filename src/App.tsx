import { Link } from 'react-router-dom'
import {
  MapPin, Mail, Check, Shield, ArrowRight,
} from 'lucide-react'
import { useTheme } from './ThemeContext'
import { translations } from './i18n'
import { skillKeys, skillIcons, projectsMeta, socialLinks, openContact } from './data'

/* ─── Home Page ───────────────────────────────────────────────────────── */

export default function HomePage() {
  const { lang } = useTheme()
  const t = translations[lang]

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8 border border-orange-100 dark:border-brand-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
          </span>
          {t.badge}
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-zinc-900 dark:text-white">{t.heroLine1}</span>
          <span className="bg-gradient-to-r from-brand-primary to-orange-400 bg-clip-text text-transparent">
            {t.heroHighlight}
          </span>
          <br />
          <span className="text-zinc-900 dark:text-white">{t.heroLine2}</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.heroDescription}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-surface-dark text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-border-dark">{t.tagArch}</span>
          <span className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-surface-dark text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-border-dark">{t.tagDevOps}</span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-surface-dark text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-border-dark">
            <Shield className="w-3.5 h-3.5 text-zinc-400" />
            {t.tagSecurity}
          </span>
          <span className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-surface-dark text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-border-dark">{t.tagLead}</span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-surface-dark text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-border-dark">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            {t.tagLocation}
          </span>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
            {t.sectionSkills}
          </h2>
          <div className="flex-1 h-px bg-zinc-200 dark:bg-border-dark"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillKeys.map((key) => {
            const Icon = skillIcons[key]
            const skill = t.skills[key]
            return (
              <div
                key={key}
                className="group p-5 rounded-2xl bg-zinc-50 dark:bg-surface-dark/50 border border-zinc-200 dark:border-border-dark hover:border-brand-primary/50 dark:hover:border-brand-primary/50 transition-all duration-300 hover:bg-white dark:hover:bg-surface-dark-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-brand-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <ul className="space-y-1.5">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
            {t.sectionProjects}
          </h2>
          <div className="flex-1 h-px bg-zinc-200 dark:bg-border-dark"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsMeta.map((project) => (
            <Link
              key={project.name}
              to={`/project/${project.key}`}
              className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-surface-dark border border-zinc-200 dark:border-border-dark p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10 dark:hover:shadow-black/50 hover:-translate-y-1.5"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-orange-400 bg-clip-text text-transparent">
                      {project.name}
                    </h3>
                  </div>
                  <div className="text-zinc-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                  {t.projects[project.key].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-surface-dark-hover text-zinc-600 dark:text-zinc-300 text-xs font-medium border border-zinc-200 dark:border-border-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Connect ───────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
            {t.sectionConnect}
          </h2>
          <div className="flex-1 h-px bg-zinc-200 dark:bg-border-dark"></div>
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-zinc-50 dark:bg-surface-dark border border-zinc-200 dark:border-border-dark text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:bg-orange-50 dark:hover:bg-brand-primary/10 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 hover:text-brand-primary hover:shadow-lg hover:shadow-brand-primary/5"
            >
              <link.icon />
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
          <button
            onClick={openContact}
            className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-zinc-50 dark:bg-surface-dark border border-zinc-200 dark:border-border-dark text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:bg-orange-50 dark:hover:bg-brand-primary/10 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 hover:text-brand-primary hover:shadow-lg hover:shadow-brand-primary/5 cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">{t.contactMe}</span>
          </button>
        </div>
      </section>
    </div>
  )
}

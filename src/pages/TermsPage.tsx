import { useApp } from "../contexts/AppContext";
import { translations } from "../i18n";

export default function TermsPage() {
  const { lang } = useApp();
  const t = translations[lang];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
        {t.termsTitle}
      </h1>
      <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-10">
        {t.termsLastUpdated}:{" "}
        {new Date().toLocaleDateString(lang === "es" ? "es-AR" : "en-US")}
      </p>

      <div className="space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {t.termsSections.map((section: any) => (
          <section key={section.title}>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
              {section.title}
            </h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

import { useApp } from "../contexts/AppContext";
import { translations } from "../i18n";

export default function PrivacyPage() {
  const { lang } = useApp();
  const t = translations[lang];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2">
        {t.privacyTitle}
      </h1>
      <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-10">
        {t.privacyLastUpdated}:{" "}
        {new Date().toLocaleDateString(lang === "es" ? "es-AR" : "en-US")}
      </p>

      <div className="space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {t.privacySections.map((section: any) => (
          <section key={section.title}>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
              {section.title}
            </h2>
            <p>{section.content}</p>
            {section.bullets && (
              <ul className="mt-3 space-y-2 ml-4">
                {section.bullets.map((bullet: any, bidx: number) => (
                  <li key={bidx} className="flex items-start gap-2">
                    <span className="text-brand-primary font-bold mt-0.5">
                      •
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

import { useApp } from "@/contexts/AppContext";

/**
 * Skip navigation link — jumps to main content
 * for keyboard/screen reader users.
 */
export default function SkipNav() {
  const { lang } = useApp();
  const label =
    lang === "es" ? "Saltar al contenido principal" : "Skip to main content";

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-primary focus:text-white focus:text-sm focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary focus:ring-offset-white dark:focus:ring-offset-zinc-900"
    >
      {label}
    </a>
  );
}

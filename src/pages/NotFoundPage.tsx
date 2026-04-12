import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import TiltCard from "@/components/TiltCard";

export default function NotFoundPage() {
  const { lang } = useApp();
  const isEs = lang === "es";

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center animate-fade-in-up">
      <TiltCard maxTilt={15} scale={1.05}>
        <div className="w-40 h-40 mx-auto rounded-3xl bg-white/60 dark:bg-surface-dark/50 backdrop-blur-xl border border-zinc-200 dark:border-border-dark flex items-center justify-center shadow-2xl shadow-brand-primary/20 mb-8 relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/10 group-hover:to-transparent transition-colors duration-500 rounded-3xl pointer-events-none"></div>
          <span className="text-6xl font-bold font-display bg-gradient-to-r from-brand-primary to-orange-400 bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300">
            404
          </span>
        </div>
      </TiltCard>

      <h1 className="text-3xl md:text-5xl font-bold font-display text-zinc-900 dark:text-white mb-4">
        {isEs ? "Página no encontrada" : "Page not found"}
      </h1>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed">
        {isEs
          ? "Lo sentimos, el enlace que seguiste parece estar roto, o la página ha sido removida."
          : "Sorry, the link you followed seems to be broken, or the page has been removed."}
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-hover text-white font-medium transition-colors cursor-pointer active:scale-95 shadow-lg shadow-brand-primary/20"
      >
        <ArrowLeft className="w-4 h-4" />
        {isEs ? "Volver al inicio" : "Return to home"}
      </Link>
    </div>
  );
}

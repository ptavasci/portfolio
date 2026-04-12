import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { useLegalTypewriter } from "@/hooks/useLegalTypewriter";
import { useSeo } from "@/hooks/useSeo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import PageSkeleton from "@/components/PageSkeleton";

/**
 * Root Layout wrapper for the entire application.
 * Manages the coordinated typewriter state for the footer legal links.
 */
export default function RootLayout() {
  const { lang } = useApp();
  const typewriter = useLegalTypewriter(lang);

  // Activate Dynamic SEO Titles
  useSeo(lang);

  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark transition-colors duration-300 flex flex-col font-sans selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* ── Background Grid ─────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-[20%] right-0 h-[600px] bg-brand-primary/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      </div>

      <Header />

      <main className="flex-1 w-full pt-12">
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer
        activeLink={typewriter.activeLink}
        displayText={typewriter.displayText}
      />

      <ContactModal />
      <ScrollRestoration />
    </div>
  );
}

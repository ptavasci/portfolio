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
      {/* ── Ambient Background ─────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        {/* Floating Blobs (Aesthetic Depth) */}
        <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-brand-primary/10 rounded-full mix-blend-multiply dark:mix-blend-color-dodge filter blur-[100px] opacity-70 animate-blob"></div>
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-orange-400/10 rounded-full mix-blend-multiply dark:mix-blend-color-dodge filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-[30%] w-80 h-80 bg-brand-primary/10 rounded-full mix-blend-multiply dark:mix-blend-color-dodge filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
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

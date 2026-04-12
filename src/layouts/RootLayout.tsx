import { Suspense } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { useLegalTypewriter } from "@/hooks/useLegalTypewriter";
import { useSeo } from "@/hooks/useSeo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import PageSkeleton from "@/components/PageSkeleton";
import SkipNav from "@/components/SkipNav";
import CinematicLoader from "@/components/CinematicLoader";
import { useState } from "react";

export default function RootLayout() {
  const { lang } = useApp();
  const location = useLocation();
  const typewriter = useLegalTypewriter(lang);
  const [showLoader, setShowLoader] = useState(true);

  const isHomePage = location.pathname === "/";

  // Activate Dynamic SEO Titles
  useSeo(lang);

  return (
    <>
      <CinematicLoader onFinish={() => setShowLoader(false)} />
      <div
        className={`min-h-screen bg-white dark:bg-bg-dark flex flex-col font-sans transition-opacity duration-1000 selection:bg-brand-primary/20 selection:text-brand-primary ${
          showLoader ? "opacity-0 overflow-hidden" : "opacity-100"
        } ${
          isHomePage
            ? "lg:h-screen lg:overflow-y-auto snap-y-mandatory scroll-smooth"
            : ""
        }`}
      >
        {/* ── Ambient Background ─────────────────────────────────── */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          {/* Floating Blobs (Aesthetic Depth) */}
          <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-brand-primary/10 rounded-full mix-blend-multiply dark:mix-blend-color-dodge filter blur-[100px] opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-orange-400/10 rounded-full mix-blend-multiply dark:mix-blend-color-dodge filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-[30%] w-80 h-80 bg-brand-primary/10 rounded-full mix-blend-multiply dark:mix-blend-color-dodge filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <SkipNav />
        <Header />

        <main
          id="main-content"
          className={`flex-1 w-full ${isHomePage ? "" : "pt-6"}`}
        >
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </main>

        <div className={isHomePage ? "snap-section" : ""}>
          <Footer
            activeLink={typewriter.activeLink}
            displayText={typewriter.displayText}
          />
        </div>

        <ContactModal />
        <ScrollRestoration />
      </div>
    </>
  );
}

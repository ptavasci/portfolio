import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { AppProvider } from "@/contexts/AppContext";
import "@/index.css";
import RootLayout from "@/layouts/RootLayout";

// Lazy loaded pages for Code Splitting
const HomePage = lazy(() => import("@/pages/HomePage"));
const ProjectPage = lazy(() => import("@/pages/ProjectPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const SpecialtyPage = lazy(() => import("@/pages/SpecialtyPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

if (import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}

/* ─── Routes ─────────────────────────────────────────────────────────── */

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "project/:slug", element: <ProjectPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "specialty/:id", element: <SpecialtyPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

const ErrorFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-white dark:bg-bg-dark font-sans">
    <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    </div>
    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">
      Algo salió mal
    </h1>
    <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
      Lo sentimos, ha ocurrido un error inesperado. Hemos registrado el problema
      automáticamente y lo revisaremos pronto.
    </p>
    <button
      onClick={() => window.location.reload()}
      className="px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-hover text-white font-medium transition-colors active:scale-95"
    >
      Recargar la aplicación
    </button>
  </div>
);

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <AppProvider>
      <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
        <RouterProvider router={router} />
      </Sentry.ErrorBoundary>
    </AppProvider>
  </StrictMode>,
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import clarity from '@microsoft/clarity'

import { ThemeProvider } from './ThemeContext'
import './index.css'
import Layout from './Layout'
import HomePage from './App'
import ProjectPage from './ProjectPage'
import PrivacyPage from './PrivacyPage'
import TermsPage from './TermsPage'

/* ─── Sentry ──────────────────────────────────────────────────────────── */

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
  })
}

/* ─── Microsoft Clarity ───────────────────────────────────────────────── */

if (import.meta.env.VITE_CLARITY_ID) {
  clarity.init(import.meta.env.VITE_CLARITY_ID)
}

/* ─── App ─────────────────────────────────────────────────────────────── */

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes)

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <SentryRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </SentryRoutes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

# Pablo Tavasci Dozo | Professional Portfolio

An end-to-end engineering showcase of software architecture, infrastructure, and high-performance development. Built with a focus on premium aesthetics, technical precision, and a unique interactive "Engineering Humor" layer.

## 🚀 Technology Stack

- **Core**: React 19 + TypeScript
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4.2 (Modern CSS-first approach)
- **Build Tool**: Vite 8 + bun (for maximum build performance)
- **Icons**: Lucide React
- **PWA**: vite-plugin-pwa (Progressive Web App with offline support)
- **Observability**: Sentry (Error tracking) + Microsoft Clarity (UX analysis)
- **Packaging**: Capacitor (for Native Android/TV deployment of projects)
- **Code Quality**: Husky + lint-staged + Prettier

## 🏗️ Architecture & Clean Code

This project adheres to professional software engineering standards:

- **Modular Component Design**: Split into reusable, specialized components (`Header`, `Footer`, `Logo`, `LegalLink`, `TiltCard`, `ScrollReveal`, `ContactModal`, `PageSkeleton`).
- **Layout Pattern**: A dedicated `RootLayout` wraps page content with consistent structure.
- **Context-Based State Management**: Global theme and language state managed via `AppContext` with custom `useApp()` hook — no external state library needed.
- **Full TypeScript**: Strict typing across the entire codebase with shared type definitions in `src/types/`.
- **Global Design System**: A unified palette using `Zinc` as a base with `Brand Orange` as the primary accent, featuring custom high-performance animations.
- **Full Internationalization (i18n)**: A custom system in `src/i18n.ts` that manages 100% of the application's strings (English/Spanish), including deep legal content and project descriptions.
- **Theme Coordination**: Real-time Light/Dark/System switching with immediate color-token updates and `prefers-color-scheme` fallback.
- **Path Aliases**: `@/` alias configured for clean absolute imports (e.g., `@/components/Header`).

## ✨ Highlighted Features

### 💻 Coordinated "Legal Glitch" Easter Egg

The footer features a synchronized typewriter effect on the Privacy and Terms links. It cycles through engineering-themed humorous phrases (e.g., `sudo rm -rf /`, `garbage collectors`, `linters`) with:

- **Premium Censorship Aesthetic**: Selective blurring of words with dynamic pulse animations and a custom "redacted" texture overlay.
- **Terminal High-Fidelity**: A custom 3px blinking orange caret that simulates a real console cursor.

### ♟️ Ajedrez IA (AI Chess Engine)

A full-featured chess project designed for big screens (Android TV):

- **LLM Integration**: Game difficulty is scaled by swapping between different LLM models.
- **Personality Driven**: The AI doesn't just play optimally; it adjusts its "character" and move quality based on the selected level.
- **Remote-First UX**: Fully navigable with a standard TV remote D-Pad.

### 📱 Progressive Web App (PWA)

- **Auto-updating service worker** via `vite-plugin-pwa`.
- **Offline-ready** with a custom web manifest.
- **Installable** on any device with a "Add to Home Screen" prompt.

### 🎨 UI Polish

- **Scroll Reveal Animations**: Components animate into view as the user scrolls.
- **3D Tilt Cards**: Interactive perspective effect on hover for project cards.
- **Contact Modal**: Email obfuscation + clipboard copy for spam protection.

## 📁 Source Structure

```text
src/
├── assets/         # Static assets (SVGs, images)
├── components/     # Reusable UI fragments
│   ├── icons/      # Custom SVG icon components
│   ├── ContactModal.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LegalLink.tsx
│   ├── Logo.tsx
│   ├── PageSkeleton.tsx
│   ├── ScrollReveal.tsx
│   └── TiltCard.tsx
├── contexts/       # Global state (AppContext: theme + language)
├── hooks/          # Custom hooks (exported from contexts/components)
├── layouts/        # Page layout wrappers (RootLayout)
├── pages/          # Route-level components
│   ├── HomePage.tsx
│   ├── ProjectPage.tsx
│   ├── PrivacyPage.tsx
│   ├── TermsPage.tsx
│   └── NotFoundPage.tsx
├── types/          # Shared TypeScript type definitions
├── utils/          # Pure utility functions (contact.ts)
├── data.ts         # Project metadata, social links, and skill registry
├── i18n.ts         # Centralized translation dictionary (ES/EN)
├── index.css       # Global styles + Tailwind imports
└── main.tsx        # Application entry point
```

## 🛠️ Development

### Prerequisites

- [bun](https://bun.sh/) (recommended) or npm/yarn

### Install dependencies

```bash
bun install
```

### Run development server

```bash
bun run dev
```

### Build for production

```bash
bun run build
```

### Preview production build

```bash
bun run preview
```

## 📦 Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `bun run dev`     | Start Vite development server    |
| `bun run build`   | Type-check + production build    |
| `bun run preview` | Preview production build locally |
| `bun run prepare` | Install Husky git hooks (auto)   |

## 🔒 Code Quality

- **Husky** pre-commit hook runs **lint-staged** on every commit.
- **Prettier** auto-formats all `.ts`, `.tsx`, `.js`, `.jsx` files on commit.

---

_Pablo Tavasci Dozo — Software Engineer & Architect_

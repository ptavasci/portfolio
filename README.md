# Pablo Tavasci Dozo | Professional Portfolio

![PTD Logo](src/components/Logo.tsx) <!-- Visual representation note: Logo is SVG-based -->

An end-to-end engineering showcase of software architecture, infrastructure, and high-performance development. Built with a focus on premium aesthetics, technical precision, and a unique interactive "Engineering Humour" layer.

## 🚀 Technology Stack

- **Core**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (Modern CSS-first approach)
- **Infrastructure**: Vite + bun (for maximum build performance)
- **Observability**: Sentry (Error tracking) + Microsoft Clarity (UX analysis)
- **Packaging**: Capacitor (for Native Android/TV deployment of projects)

## 🏗️ Architecture & Clean Code

This project adheres to professional software engineering standards:

- **Modular Component Design**: Split into reusable, specialized components (Header, Footer, Logo, Section Containers).
- **Custom Hooks Architecture**: Complex UI logic, such as the coordinated typewriter legal links, is encapsulated in custom hooks like `useLegalTypewriter`.
- **Global Design System**: A unified palette using `Zinc` as a base with `Brand Orange` as the primary accent, featuring custom high-performance animations.
- **Full Internationalization (i18n)**: A custom system in `src/i18n.ts` that manages 100% of the application's strings (English/Spanish), including deep legal content.
- **Theme Coordination**: Real-time Theme/Light/System switching with immediate color-token updates.

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

## 📁 Source Structure

```text
src/
├── components/     # Reusable UI fragments (Logo, LegalLink, Header, Footer)
├── hooks/          # Custom business/UI logic (useLegalTypewriter)
├── pages/          # Full page components (HomePage, ProjectPage, etc.)
├── ThemeContext/   # Theme and Language global state management
├── data.tsx        # Project metadata, social links, and skills registry
└── i18n.ts         # Centralized translation dictionary (ES/EN)
```

## 🛠️ Development

Install dependencies:
```bash
bun install
```

Run development server:
```bash
bun run dev
```

Build for production:
```bash
bun run build
```

---
*Pablo Tavasci Dozo - Software Engineer & Architect*

export type Lang = 'es' | 'en';

export function detectLanguage(): Lang {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('lang') as Lang;
  if (saved === 'es' || saved === 'en') return saved;
  const browserLang = navigator.language || (navigator as any).userLanguage || '';
  return browserLang.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectTranslation {
  description: string;
}

export interface ProjectPageTranslation {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface Translations {
  badge: string;
  heroLine1: string;
  heroHighlight: string;
  heroLine2: string;
  heroDescription: string;
  tagArch: string;
  tagDevOps: string;
  tagSecurity: string;
  tagLead: string;
  tagLocation: string;
  sectionSkills: string;
  sectionProjects: string;
  sectionConnect: string;
  themeLight: string;
  themeDark: string;
  themeSystem: string;
  contactMe: string;
  skills: Record<string, SkillGroup>;
  projects: Record<string, ProjectTranslation>;
  projectPages: Record<string, ProjectPageTranslation>;
  legalTeasersPool: {
    privacy: string[];
    terms: string[];
  };
}

export const translations: Record<Lang, Translations> = {
  es: {
    badge: '+25 años en la industria',
    heroLine1: 'Ingeniería de ',
    heroHighlight: 'software',
    heroLine2: 'de punta a punta',
    heroDescription: 'Ingeniero de software con más de 25 años liderando desarrollo, infraestructura, DevOps y ciberseguridad. Construyo, opero y protejo sistemas de misión crítica.',
    tagArch: 'Arquitectura',
    tagDevOps: 'DevOps',
    tagSecurity: 'Ciberseguridad',
    tagLead: 'Liderazgo técnico',
    tagLocation: 'Argentina',
    sectionSkills: 'Especialidades',
    sectionProjects: 'Proyectos',
    sectionConnect: 'Conectar',
    themeLight: 'Claro',
    themeDark: 'Oscuro',
    themeSystem: 'Sistema',
    contactMe: 'Contacto',
    skills: {
      architecture: {
        title: 'Arquitectura & Desarrollo',
        items: ['Diseño de sistemas distribuidos', 'Microservicios & APIs REST/GraphQL', 'TypeScript / React / Node.js', 'PostgreSQL / MongoDB / Redis', 'Event Sourcing & CQRS']
      },
      infra: {
        title: 'Infraestructura',
        items: ['Docker & Kubernetes', 'Virtualización & Networking', 'Kong API Gateway', 'Linux / Appliances', 'Alta disponibilidad & DR']
      },
      security: {
        title: 'Ciberseguridad',
        items: ['Análisis de CVEs & Hardening', 'Wazuh SIEM (self-hosted)', 'SonarQube & análisis estático', 'Sentry & observabilidad', 'Seguridad en CI/CD']
      },
      leadership: {
        title: 'Liderazgo',
        items: ['10+ años liderando equipos', 'Arquitectura organizacional', 'Coaching técnico & mentoring', 'Gestión de incidentes críticos', 'Toma de decisiones estratégicas']
      }
    },
    projects: {
      autodata: {
        description: 'Base de datos abierta de vehículos argentinos con asesor inteligente para la compra.'
      },
      vineteca: {
        description: 'Sistema completo de gestión y venta online para vinoteca con soporte offline.'
      },
      ajedrez: {
        description: 'Ajedrez con IA Gemini para Android TV, hecho para jugar con el control remoto.'
      }
    },
    projectPages: {
      autodata: {
        title: 'Autodata',
        subtitle: 'Base de datos de vehículos argentinos',
        description: 'Autodata es una plataforma que transforma la experiencia de compra de vehículos en Argentina. Más que un catálogo, funciona como un asesor personal que utiliza datos exhaustivos y algoritmos inteligentes para ofrecer recomendaciones personalizadas, comparativas detalladas e información transparente sobre precios, fichas técnicas y segmentos del mercado automotor local.',
        features: [
          'Recomendaciones personalizadas según preferencias y presupuesto',
          'Comparativas detalladas lado a lado de diferentes modelos',
          'Fichas técnicas completas con especificaciones de motor, consumo y dimensiones',
          'Datos de precios actualizados para vehículos nuevos y usados',
          'Búsqueda avanzada por segmento, marca y rango de precio',
          'Backend con Bun + Express para máximo rendimiento',
          'Tests automatizados con Vitest y Husky pre-commit hooks',
        ]
      },
      vineteca: {
        title: 'Vineteca',
        subtitle: 'E-commerce & gestión para vinoteca',
        description: 'Sistema completo de gestión y venta online para vinoteca, construido con arquitectura moderna. Incluye catálogo con filtros avanzados, carrito de compras, checkout en 3 pasos, panel de administración completo, control de stock multi-depósito, gift cards, blog con editor visual, dashboard con métricas en tiempo real y soporte offline como PWA.',
        features: [
          'Catálogo con filtros avanzados por cepa, bodega y región',
          'Búsqueda por código de barras',
          'Checkout completo en 3 pasos con descuentos dinámicos',
          'Panel de administración 100% responsive',
          'Control de stock automático por múltiples depósitos',
          'Gift Cards: compra, canjeo y gestión',
          'Blog con editor visual/markdown y sistema de eventos',
          'Dashboard con métricas en tiempo real y gráficos',
          'PWA con actualización automática y soporte offline',
          'Preparado para app móvil nativa con Capacitor',
        ]
      },
      ajedrez: {
        title: 'Ajedrez IA',
        subtitle: 'Ajedrez con inteligencia artificial para Android TV',
        description: 'Un proyecto que nació de la necesidad real de un padre ingeniero: no había ninguna app de ajedrez decente en el store de Android TV — todas tenían publicidad invasiva y se veían horribles. Así que construí una desde cero con mi hija de 10 años, aprovechando para enseñarle conceptos de inteligencia artificial mientras jugábamos. Diseñada para controlarse con el D-pad del control remoto, pero también funciona como web responsive en cualquier dispositivo.',
        features: [
          'Modo 1 vs 1 local para jugar con alguien en la misma pantalla',
          'Modo vs IA con niveles de dificultad progresivos',
          'La IA usa distintos modelos LLM según la dificultad elegida',
          'Sistema de personalidad: la IA ajusta la calidad de sus movimientos por nivel',
          'Pensado para que una niña de 10 años aprenda y mejore progresivamente',
          'Navegación completa con D-pad para control remoto de Android TV',
          'Interfaz limpia sin publicidad, pensada para pantallas grandes',
          'Motor de ajedrez con chess.js para validación de reglas',
          'Web responsive que funciona en cualquier dispositivo',
          'Empaquetada como app nativa Android con Capacitor',
        ]
      }
    },
    legalTeasersPool: {
      privacy: [
        " (tus datos están tan seguros como un [[sudo rm -rf /]])",
        " (recolectamos menos que un [[garbage collector]] con memory leak)",
        " (tu IP es lo único que nos importa... bromeaba, es tu [[alma]])"
      ],
      terms: [
        " (si leiste esto, aceptaste que tu [[primer hijo]] sea un linter)",
        " (basado en la ley de [[ni Dios sabe por qué funciona]] v1.0)",
        " (en caso de error, el desarrollador se vuelve [[null]] y huye)"
      ]
    }
  },
  en: {
    badge: '+25 years in the industry',
    heroLine1: 'End-to-end ',
    heroHighlight: 'software',
    heroLine2: 'engineering',
    heroDescription: 'Software engineer with 25+ years leading development, infrastructure, DevOps, and cybersecurity. I build, operate, and secure mission-critical systems.',
    tagArch: 'Architecture',
    tagDevOps: 'DevOps',
    tagSecurity: 'Cybersecurity',
    tagLead: 'Tech Leadership',
    tagLocation: 'Argentina',
    sectionSkills: 'Expertise',
    sectionProjects: 'Projects',
    sectionConnect: 'Connect',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeSystem: 'System',
    contactMe: 'Contact',
    skills: {
      architecture: {
        title: 'Architecture & Development',
        items: ['Distributed System Design', 'Microservices & REST/GraphQL APIs', 'TypeScript / React / Node.js', 'PostgreSQL / MongoDB / Redis', 'Event Sourcing & CQRS']
      },
      infra: {
        title: 'Infrastructure',
        items: ['Docker & Kubernetes', 'Virtualization & Networking', 'Kong API Gateway', 'Linux / Appliances', 'High Availability & DR']
      },
      security: {
        title: 'Cybersecurity',
        items: ['CVE Analysis & Hardening', 'Wazuh SIEM (self-hosted)', 'SonarQube & Static Analysis', 'Sentry & Observability', 'CI/CD Security']
      },
      leadership: {
        title: 'Leadership',
        items: ['10+ years leading teams', 'Organizational architecture', 'Technical coaching & mentoring', 'Critical incident management', 'Strategic decision making']
      }
    },
    projects: {
      autodata: {
        description: 'Open vehicle database for the Argentine market with an intelligent purchase advisor.'
      },
      vineteca: {
        description: 'Complete e-commerce and management system for a wine shop with offline support.'
      },
      ajedrez: {
        description: 'Chess with Gemini AI for Android TV, built to play with the remote control.'
      }
    },
    projectPages: {
      autodata: {
        title: 'Autodata',
        subtitle: 'Argentine vehicle database',
        description: 'Autodata is a platform that transforms the vehicle buying experience in Argentina. More than a catalog, it works as a personal advisor that uses comprehensive data and intelligent algorithms to offer personalized recommendations, detailed comparisons, and transparent information about pricing, specs, and segments of the local automotive market.',
        features: [
          'Personalized recommendations based on preferences and budget',
          'Detailed side-by-side model comparisons',
          'Complete spec sheets with engine, consumption, and dimension data',
          'Up-to-date pricing data for new and used vehicles',
          'Advanced search by segment, brand, and price range',
          'Backend built with Bun + Express for maximum performance',
          'Automated tests with Vitest and Husky pre-commit hooks',
        ]
      },
      vineteca: {
        title: 'Vineteca',
        subtitle: 'E-commerce & wine shop management',
        description: 'Complete e-commerce and management system for a wine shop, built with modern architecture. Includes a catalog with advanced filters, shopping cart, 3-step checkout, full admin panel, multi-warehouse stock control, gift cards, blog with visual editor, real-time metrics dashboard, and offline support as a PWA.',
        features: [
          'Catalog with advanced filters by grape, winery, and region',
          'Barcode search',
          'Complete 3-step checkout with dynamic discounts',
          'Fully responsive admin panel',
          'Automatic multi-warehouse stock control',
          'Gift cards: purchase, redeem, and management',
          'Blog with visual/markdown editor and events system',
          'Real-time metrics dashboard with charts',
          'PWA with automatic updates and offline support',
          'Native mobile app ready with Capacitor',
        ]
      },
      ajedrez: {
        title: 'Ajedrez IA',
        subtitle: 'Chess with AI for Android TV',
        description: 'A project born from a real need: there wasn\'t a single decent chess app on the Android TV store — all of them had invasive ads and looked terrible. So I built one from scratch with my 10-year-old daughter, using it as an opportunity to teach her AI concepts while we played. Designed to be fully navigable with the TV remote D-pad, but it also works as a responsive web app on any device.',
        features: [
          'Local 1 vs 1 mode to play with someone on the same screen',
          'Play vs AI with progressive difficulty levels',
          'AI uses different LLM models depending on the chosen difficulty',
          'Personality system: AI adjusts move quality based on level',
          'Designed for a 10-year-old to learn and improve progressively',
          'Full D-pad navigation for Android TV remote control',
          'Clean ad-free interface designed for big screens',
          'Chess engine with chess.js for rule validation',
          'Responsive web that works on any device',
          'Packaged as native Android app with Capacitor',
        ]
      }
    },
    legalTeasersPool: {
      privacy: [
        " (your data is as safe as a [[sudo rm -rf /]] without prompt)",
        " (we collect less than a [[garbage collector]] in a leak)",
        " (your IP is all we care about... joking, it's your [[soul]])"
      ],
      terms: [
        " (by reading this, you agreed to name your [[firstborn]] Linter)",
        " (based on the [[you don't want to know]] law v1.0)",
        " (in case of error, the dev returns [[null]] and vanishes)"
      ]
    }
  }
};

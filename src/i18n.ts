import { type Lang, type Translations } from "./types";

export function detectLanguage(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("lang") as Lang;
  if (saved === "es" || saved === "en") return saved;
  const browserLang =
    navigator.language || (navigator as any).userLanguage || "";
  return browserLang.toLowerCase().startsWith("es") ? "es" : "en";
}

export const translations: Record<Lang, Translations> = {
  es: {
    badge: "+25 años en la industria",
    heroLine1: "Ingeniería de ",
    heroHighlight: "software",
    heroLine2: "de punta a punta",
    heroDescription:
      "Ingeniero de software con más de 25 años liderando desarrollo, infraestructura, DevOps y ciberseguridad. Construyo, opero y protejo sistemas de misión crítica.",
    tagArch: "Arquitectura",
    tagDevOps: "DevOps",
    tagSecurity: "Ciberseguridad",
    tagLead: "Liderazgo técnico",
    tagLocation: "Argentina",
    sectionSkills: "Experiencia",
    sectionProjects: "Proyectos",
    sectionConnect: "Conectar",
    heroScroll: "Explorar Experiencia",
    connectHeadline: "Hablemos de ingeniería.",
    connectSubline:
      "¿Tienes un proyecto en mente o buscas consultoría técnica? Estoy disponible para discutir nuevas oportunidades.",
    themeLight: "Claro",
    themeDark: "Oscuro",
    themeSystem: "Sistema",
    contactMe: "Contacto",
    copyEmail: "Copiar Email",
    emailCopied: "¡Copiado!",
    sendEmail: "Enviar Correo",
    footerBio:
      "Ingeniero de software, padre, apasionado de los autos y la domótica.",
    footerJoke:
      "Capaz de decirle a tu cafetera que le diga a la licuadora que encienda al lavarropas cuando termine de llover en Kamchatka.",
    projectStack: "Tecnologías utilizadas",
    projectProblem: "El Problema",
    projectContext: "Contexto del Proyecto",
    projectFeatures: "Características Principales",
    projectVisit: "Visitar Proyecto",
    backToHome: "Volver al Inicio",
    privacyTitle: "Política de Privacidad",
    privacyLastUpdated: "Última actualización",
    privacySections: [
      {
        title: "1. ¿Quién soy?",
        content:
          "Soy Pablo Tavasci Dozo. Ingeniero de software, padre de la princesa más encantadora del reino, entusiasta de la domótica y ocasionalmente capaz de automatizar cosas que nadie pidió que se automaticen. Esta web es mi carta de presentación al mundo. No vendo nada, no tengo newsletter, y definitivamente no te voy a mandar spam a las 3 de la mañana.",
      },
      {
        title: "2. ¿Qué datos recopilo?",
        content:
          "Casi nada. Esta web es estática, no tiene login, no tiene formularios, no tiene base de datos. Es como un folleto digital que resulta que tiene modo oscuro. Sin embargo, utilizo dos herramientas de terceros:",
        bullets: [
          "Microsoft Clarity: Registra cómo los usuarios interactúan con el sitio (clics, scrolls, mapas de calor). No recopila datos personales.",
          "Sentry: Monitoreo de errores. Si algo se rompe, quiero saberlo antes que vos. Es una cuestión de orgullo profesional.",
        ],
      },
      {
        title: "3. Cookies",
        content:
          "Las herramientas mencionadas pueden usar cookies. No son de las ricas. Son cookies técnicas que ayudan a que el sitio funcione correctamente y que yo pueda llorar con datos cuando algo falla. No hay cookies de marketing porque, insisto, no vendo nada.",
      },
      {
        title: "4. Tus derechos",
        content:
          "Tenés todo el derecho de irte de esta web y nunca volver. Lo entendería, pero dolería un poco. Si tenés alguna duda sobre tus datos, podés contactarme. Prometo responder más rápido que un deployment fallido.",
      },
    ],
    termsTitle: "Términos de Servicio",
    termsLastUpdated: "Última actualización",
    termsSections: [
      {
        title: "1. Aceptación de los Términos",
        content:
          "Al acceder a este sitio, aceptas estos términos. O no lo hagas, soy un desarrollador, no un abogado. Mi habilidad para escribir términos legales es tan estable como una versión beta de un framework de JavaScript.",
      },
      {
        title: "2. Uso Legal",
        content:
          'Al usar este sitio, aceptas que el código es poesía, los errores son "features" no documentadas, y que el autor no se hace responsable si tu linter se vuelve agresivo después de ver estos proyectos.',
      },
      {
        title: "3. Propiedad Intelectual",
        content:
          "Puedes mirar, pero no rompas nada. Si encuentras un bug, es un regalo coleccionable. Todo el contenido es propiedad de Pablo Tavasci Dozo, a menos que se indique lo contrario.",
      },
      {
        title: "4. Responsabilidad",
        content:
          "No soy responsable si, tras leer mi perfil, sientes el impulso irefrenable de automatizar tu casa, aprender TypeScript, o dejar tu trabajo para poner una vinoteca online. Esas decisiones son tuyas, y probablemente sean buenas.",
      },
      {
        title: "5. Garantía",
        content:
          'Este sitio se proporciona "tal cual", sin garantías de ningún tipo, excepto la garantía de que fue hecho con mucho café y dedicación.',
      },
      {
        title: "6. Contacto",
        content:
          "Si tienes dudas, sugerencias, o simplemente quieres decirme que lo de Kamchatka es brillante (que lo es), puedes encontrarme en las redes sociales listadas en el sitio. Respondo a todo, excepto mensajes que empiecen con 'Estimado Sr'.",
      },
    ],
    skills: {
      architecture: {
        title: "Arquitectura & Desarrollo",
        items: [
          "Diseño de sistemas distribuidos",
          "Microservicios & Ecosistemas de APIs",
          "Arquitecturas Reactivas & Full-stack",
          "Estrategias de Persistencia & Modelado",
          "Event Sourcing & CQRS",
        ],
      },
      infra: {
        title: "Infraestructura",
        items: [
          "Orquestación & Ecosistemas Cloud Native",
          "Virtualización & Networking",
          "Gestión de Tráfico & Gateways",
          "Hardening & Optimización de Sistemas",
          "Alta disponibilidad & DR",
        ],
      },
      security: {
        title: "Ciberseguridad",
        items: [
          "Análisis de CVEs & Hardening",
          "Inteligencia de Amenazas & SIEM",
          "Garantía de Calidad & Seguridad de Código",
          "Observabilidad Proactiva & Diagnóstico",
          "Seguridad en CI/CD",
        ],
      },
      leadership: {
        title: "Liderazgo",
        items: [
          "10+ años liderando equipos",
          "Arquitectura organizacional",
          "Coaching técnico & mentoring",
          "Gestión de incidentes críticos",
          "Toma de decisiones estratégicas",
        ],
      },
    },
    projects: {
      autodata: {
        description:
          "Base de datos abierta de vehículos argentinos con asesor inteligente para la compra.",
      },
      vineteca: {
        description:
          "Sistema completo de gestión y venta online para vinoteca con soporte offline.",
      },
      ajedrez: {
        description:
          "Ajedrez con IA Gemini para Android TV, hecho para jugar con el control remoto.",
      },
    },
    projectPages: {
      autodata: {
        title: "Autodata",
        subtitle: "Base de datos de vehículos argentinos",
        description:
          "Autodata es una plataforma que transforma la experiencia de compra de vehículos en Argentina. Más que un catálogo, funciona como un asesor personal que utiliza datos exhaustivos y algoritmos inteligentes para ofrecer recomendaciones personalizadas, comparativas detalladas e información transparente sobre precios, fichas técnicas y segmentos del mercado automotor local.",
        features: [
          "Recomendaciones personalizadas según preferencias y presupuesto",
          "Comparativas detalladas lado a lado de diferentes modelos",
          "Fichas técnicas completas con especificaciones de motor, consumo y dimensiones",
          "Datos de precios actualizados para vehículos nuevos y usados",
          "Búsqueda avanzada por segmento, marca y rango de precio",
          "Backend con Bun + Express para máximo rendimiento",
          "Tests automatizados con Vitest y Husky pre-commit hooks",
        ],
      },
      vineteca: {
        title: "Vineteca",
        subtitle: "E-commerce & gestión para vinoteca",
        description:
          "Sistema completo de gestión y venta online para vinoteca, construido con arquitectura moderna. Incluye catálogo con filtros avanzados, carrito de compras, checkout en 3 pasos, panel de administración completo, control de stock multi-depósito, gift cards, blog con editor visual, dashboard con métricas en tiempo real y soporte offline como PWA.",
        features: [
          "Catálogo con filtros avanzados por cepa, bodega y región",
          "Búsqueda por código de barras",
          "Checkout completo en 3 pasos con descuentos dinámicos",
          "Panel de administración 100% responsive",
          "Control de stock automático por múltiples depósitos",
          "Gift Cards: compra, canjeo y gestión",
          "Blog con editor visual/markdown y sistema de eventos",
          "Dashboard con métricas en tiempo real y gráficos",
          "PWA con actualización automática y soporte offline",
          "Preparado para app móvil nativa con Capacitor",
        ],
      },
      ajedrez: {
        title: "Ajedrez IA",
        subtitle: "Ajedrez con inteligencia artificial para Android TV",
        description:
          "Un proyecto que nació de la necesidad real de un padre ingeniero: no había ninguna app de ajedrez decente en el store de Android TV — todas tenían publicidad invasiva y se veían horribles. Así que construí una desde cero con mi hija de 10 años, aprovechando para enseñarle conceptos de inteligencia artificial mientras jugábamos. Diseñada para controlarse con el D-pad del control remoto, pero también funciona como web responsive en cualquier dispositivo.",
        features: [
          "Modo 1 vs 1 local para jugar con alguien en la misma pantalla",
          "Modo vs IA con niveles de dificultad progresivos",
          "La IA usa distintos modelos LLM según la dificultad elegida",
          "Sistema de personalidad: la IA ajusta la calidad de sus movimientos por nivel",
          "Pensado para que una niña de 10 años aprenda y mejore progresivamente",
          "Navegación completa con D-pad para control remoto de Android TV",
          "Interfaz limpia sin publicidad, pensada para pantallas grandes",
          "Motor de ajedrez con chess.js para validación de reglas",
          "Web responsive que funciona en cualquier dispositivo",
          "Empaquetada como app nativa Android con Capacitor",
        ],
      },
    },
    specialtyPages: {
      architecture: {
        title: "Arquitectura & Desarrollo",
        subtitle: "Sistemas robustos y escalables",
        description:
          "Diseño e implementación de soluciones digitales de punta a punta, priorizando la mantenibilidad, escalabilidad y el rendimiento óptimo.",
        accentColor: "#3b82f6",
        details: [
          {
            title: "Diseño de Sistemas Distribuidos",
            description:
              "Arquitectura de sistemas donde los componentes colaboran a través de la red de forma transparente, garantizando tolerancia a fallos y alta disponibilidad mediante el desacoplamiento efectivo.",
            solutions: {
              enterprise: "AWS Managed Services, Google Cloud Pub/Sub",
              openSource: "RabbitMQ, Redis, Nginx Load Balancing",
            },
          },
          {
            title: "Microservicios & Ecosistemas de APIs",
            description:
              "Descomposición de aplicaciones complejas en servicios autónomos que se comunican mediante contratos claros. Implementación de API Gateways y mallas de servicios.",
            solutions: {
              enterprise: "MuleSoft, Apigee, AWS App Mesh",
              openSource: "Kong Gateway, Apache APISIX, gRPC",
            },
          },
          {
            title: "Arquitecturas Reactivas & Full-stack",
            description:
              "Desarrollo orientado a eventos y sistemas no bloqueantes. Foco en la experiencia de usuario y la eficiencia en el flujo de datos desde el backend hasta la UI.",
            solutions: {
              enterprise: "Vercel Enterprise, Firebase managed stacks",
              openSource: "Vite, Bun, Node.js (Fastify), Rust (Axum)",
            },
          },
          {
            title: "Estrategias de Persistencia & Modelado",
            description:
              "Selección y modelado del motor de datos adecuado (SQL, NoSQL, Cache) según el caso de uso, garantizando integridad y velocidad de acceso.",
            solutions: {
              enterprise: "Snowflake, Amazon Aurora, MongoDB Atlas",
              openSource: "PostgreSQL, Supabase, ClickHouse",
            },
          },
          {
            title: "Event Sourcing & CQRS",
            description:
              "Patrones avanzados para sistemas con lógica de negocio compleja, separando las operaciones de lectura y escritura para optimizar el rendimiento y la trazabilidad.",
            solutions: {
              enterprise: "AWS EventBridge, Azure Event Hubs",
              openSource: "Apache Kafka, EventStoreDB",
            },
          },
        ],
      },
      infra: {
        title: "Infraestructura",
        subtitle: "Escalabilidad & Resiliencia",
        description:
          "Diseño de infraestructuras híbridas y cloud-native preparadas para el crecimiento escalar, garantizando la continuidad del negocio y la eficiencia operativa.",
        accentColor: "#10b981",
        details: [
          {
            title: "Orquestación & Ecosistemas Cloud Native",
            description:
              "Implementación y gestión de clústeres de contenedores para cargas de trabajo críticas, optimizando el uso de recursos y la velocidad de despliegue.",
            solutions: {
              enterprise: "AWS (EKS), Azure (AKS), GCP (GKE), OCI, OpenShift",
              openSource: "Rancher RKE2, Docker Swarm",
            },
          },
          {
            title: "Virtualización & Networking",
            description:
              "Segregación lógica y física de recursos. Diseño de redes seguras y topologías de alta performance para centros de datos modernos.",
            solutions: {
              enterprise: "Microsoft Hyper-V, Fortinet, MikroTik",
              openSource: "Proxmox, pfSense",
            },
          },
          {
            title: "Gestión de Tráfico & Gateways",
            description:
              "Control centralizado de puntos de entrada, balanceo de carga de capa 4/7 y gestión del ciclo de vida de APIs en entornos distribuidos.",
            solutions: {
              enterprise: "Apigee, F5 BIG-IP, Kong Enterprise",
              openSource: "Nginx, Traefik, HAProxy, Kong OSS",
            },
          },
          {
            title: "Hardening & Optimización de Sistemas",
            description:
              "Protección del sistema operativo mediante la reducción de superficie de ataque y el ajuste fino de parámetros para máximo rendimiento.",
            solutions: {
              enterprise: "RHEL (Red Hat Enterprise Linux)",
              openSource: "Debian, Ubuntu Server, Lynis Audit",
            },
          },
          {
            title: "Alta Disponibilidad & Disaster Recovery",
            description:
              "Estrategias integrales para garantizar que los servicios sigan operativos ante fallos catastróficos, con mínimos tiempos de recuperación.",
            solutions: {
              enterprise: "Cloud Storage Replication, Veeam (conocimiento)",
              openSource: "Proxmox Backup Server, Replicación RKE2",
            },
          },
        ],
      },
      security: {
        title: "Ciberseguridad",
        subtitle: "Vigilancia & Protección Profunda",
        description:
          "Seguridad integrada en el ADN del sistema, desde el análisis de vulnerabilidades en desarrollo hasta la detección de amenazas en producción.",
        accentColor: "#f43f5e",
        details: [
          {
            title: "Análisis de CVEs & Hardening",
            description:
              "Escaneo proactivo de vulnerabilidades y aplicación de parches de seguridad. Blindaje de contenedores y sistemas operativos.",
            solutions: {
              enterprise: "Qualys, Tenable (conocimiento)",
              openSource: "Trivy, Snyk, Nmap",
            },
          },
          {
            title: "Inteligencia de Amenazas & SIEM",
            description:
              "Centralización y análisis de logs para identificar comportamientos anómalos y responder ante incidentes de seguridad en tiempo real.",
            solutions: {
              enterprise: "Splunk Enterprise",
              openSource: "Wazuh, ELK Stack (Security)",
            },
          },
          {
            title: "Garantía de Calidad & Seguridad de Código",
            description:
              "Análisis estático y dinámico de código para detectar fallas lógicas y debilidades de seguridad antes de que lleguen a producción (DevSecOps).",
            solutions: {
              enterprise: "Checkmarx (conocimiento)",
              openSource: "SonarQube, Snyk, npm audit, OWASP Dependency-Check",
            },
          },
          {
            title: "Observabilidad Proactiva & Diagnóstico",
            description:
              "Monitoreo de métricas y trazas para identificar el origen raíz de los problemas, garantizando la salud del ecosistema digital.",
            solutions: {
              enterprise: "Datadog, New Relic, Dynatrace (conocimiento)",
              openSource: "Sentry, Prometheus, Grafana, Zabbix",
            },
          },
          {
            title: "Seguridad en CI/CD",
            description:
              "Automatización de controles de seguridad dentro de las tuberías de despliegue, evitando la fuga de secretos y garantizando la integridad del código.",
            solutions: {
              enterprise: "Azure DevOps, GitHub Enterprise Security",
              openSource: "Jenkins, GitHub Actions, GitLab CI, Gitleaks",
            },
          },
        ],
      },
      leadership: {
        title: "Liderazgo",
        subtitle: "Tech Lead & Estrategia",
        description:
          "Liderazgo técnico centrado en ser un multiplicador de fuerzas, escalando el talento del equipo y alineando la tecnología con los objetivos del negocio.",
        accentColor: "#f59e0b",
        details: [
          {
            title: "Liderazgo Técnico (Force Multiplier)",
            description:
              "Más de 10 años guiando equipos de ingeniería, traduciendo requisitos complejos en arquitecturas ejecutables y elevando el estándar técnico.",
            solutions: {
              enterprise: "Gestión por Objetivos (OKR), KPIs de Ingeniería",
              openSource: "Scrum, Kanban, Agile Mindset",
            },
          },
          {
            title: "Arquitectura Organizacional",
            description:
              "Diseño de flujos de trabajo eficientes y estructuras de equipo escalables. Integración fluida entre las áreas de Negocio y Tecnología.",
            solutions: {
              enterprise: "Gobierno de TI, Roles & Responsabilidades",
              openSource: "Estandarización de Procesos, SDLC Moderno",
            },
          },
          {
            title: "Coaching Técnico & Mentoring",
            description:
              "Desarrollo del talento interno, capacitando perfiles en nuevas tecnologías y fomentando una cultura de excelencia y código limpio.",
            solutions: {
              enterprise: "Planes de Carrera, Skill Matrix",
              openSource: "Peer Reviews, Tech Talks, Mentoring 1-a-1",
            },
          },
          {
            title: "Gestión de Incidentes Críticos",
            description:
              "Liderazgo y comando durante crisis técnicas, manteniendo la calma y ejecutando decisiones estructuradas para restaurar el servicio.",
            solutions: {
              enterprise: "Incident Command System (ICS), Post-mortems",
              openSource: "Cultura Blame-free, Mejora Continua",
            },
          },
          {
            title: "Toma de Decisiones Estratégicas",
            description:
              "Balanceo consciente entre la deuda técnica y la velocidad de salida al mercado (Time-to-Market), maximizando el ROI tecnológico.",
            solutions: {
              enterprise: "Análisis de Costos Cloud, Evaluación de Vendor",
              openSource: "Optimización de Recursos OSS, Buy vs Build",
            },
          },
        ],
      },
    },
    legalTeasersPool: {
      privacy: [
        " (tus datos están tan seguros como un [[sudo rm -rf /]])",
        " (recolectamos menos que un [[garbage collector]] con memory leak)",
        " (tu IP es lo único que nos importa... bromeaba, es tu [[alma]])",
      ],
      terms: [
        " (si leiste esto, aceptaste que tu [[primer hijo]] sea un linter)",
        " (basado en la ley de [[ni Dios sabe por qué funciona]] v1.0)",
        " (en caso de error, el desarrollador se vuelve [[null]] y huye)",
      ],
    },
  },
  en: {
    badge: "+25 years in the industry",
    heroLine1: "End-to-end ",
    heroHighlight: "software",
    heroLine2: "engineering",
    heroDescription:
      "Software engineer with 25+ years leading development, infrastructure, DevOps, and cybersecurity. I build, operate, and secure mission-critical systems.",
    tagArch: "Architecture",
    tagDevOps: "DevOps",
    tagSecurity: "Cybersecurity",
    tagLead: "Tech Leadership",
    tagLocation: "Argentina",
    sectionSkills: "Expertise",
    sectionProjects: "Projects",
    sectionConnect: "Connect",
    heroScroll: "Explore Expertise",
    connectHeadline: "Let's build together.",
    connectSubline:
      "Have a project in mind or looking for technical consulting? I'm available to discuss new opportunities.",
    themeLight: "Light",
    themeDark: "Dark",
    themeSystem: "System",
    contactMe: "Contact",
    copyEmail: "Copy Email",
    emailCopied: "Copied!",
    sendEmail: "Send Email",
    footerBio:
      "Software engineer, father, car enthusiast, and home automation nerd.",
    footerJoke:
      "Able to tell your coffee maker to tell the blender to turn on the washing machine when it stops raining in Kamchatka.",
    projectStack: "Tech Stack",
    projectProblem: "The Problem",
    projectContext: "Project Context",
    projectFeatures: "Key Features",
    projectVisit: "Visit Project",
    backToHome: "Back to Home",
    privacyTitle: "Privacy Policy",
    privacyLastUpdated: "Last updated",
    privacySections: [
      {
        title: "1. Who am I?",
        content:
          "I'm Pablo Tavasci Dozo. Software engineer, father of the most charming princess in the kingdom, home automation enthusiast, and occasionally capable of automating things nobody asked to be automated. This website is my digital business card. I don't sell anything, I don't have a newsletter, and I will definitely not spam you at 3 AM.",
      },
      {
        title: "2. What data do I collect?",
        content:
          "Almost nothing. This site is static — no login, no forms, no database. It's basically a brochure that happens to have a dark mode. However, I use two third-party tools:",
        bullets: [
          "Microsoft Clarity: Records how users interact with the site (clicks, scrolls, heatmaps). No personal data collected.",
          "Sentry: Error monitoring. If something breaks, I want to know before you do. It's a matter of professional pride.",
        ],
      },
      {
        title: "3. Cookies",
        content:
          "The aforementioned tools may use cookies. Not the delicious kind. They're technical cookies that help the site work correctly and let me cry with data when something fails. There are no marketing cookies because, again, I'm not selling anything.",
      },
      {
        title: "4. Your rights",
        content:
          "You have every right to leave this website and never come back. I'd understand, but it would sting a little. If you have questions about your data, feel free to contact me. I promise to respond faster than a failed deployment.",
      },
    ],
    termsTitle: "Terms of Service",
    termsLastUpdated: "Last updated",
    termsSections: [
      {
        title: "1. Acceptance of Terms",
        content:
          "By accessing this site, you accept these terms. Or don't, I'm a developer, not a lawyer. My ability to write legal terms is as stable as a beta version of a JavaScript framework.",
      },
      {
        title: "2. Legal Use",
        content:
          'By using this site, you agree that code is poetry, bugs are undocumented "features," and the author is not responsible if your linter turns aggressive after seeing these projects.',
      },
      {
        title: "3. Intellectual Property",
        content:
          "You can look, but don't break anything. If you find a bug, it's a collectible gift. All content is owned by Pablo Tavasci Dozo unless otherwise stated.",
      },
      {
        title: "4. Liability",
        content:
          "I am not responsible if, after reading my profile, you feel the urge to automate your home, learn TypeScript, or quit your job to start an online wine shop. Those decisions are yours, and probably good ones.",
      },
      {
        title: "5. Warranty",
        content:
          'This site is provided "as is" without warranty of any kind, except the warranty that it was made with lots of coffee and dedication.',
      },
      {
        title: "6. Contact",
        content:
          "If you have questions, suggestions, or simply want to tell me that the Kamchatka line is brilliant (it is), you can find me on the social networks listed on the site. I reply to everything, except messages that start with 'Dear Sir'.",
      },
    ],
    skills: {
      architecture: {
        title: "Architecture & Development",
        items: [
          "Distributed System Design",
          "Microservices & API Ecosystems",
          "Reactive & Full-stack Architectures",
          "Data Strategy & Persistence Modeling",
          "Event Sourcing & CQRS",
        ],
      },
      infra: {
        title: "Infrastructure",
        items: [
          "Orchestration & Cloud Native Ecosystems",
          "Virtualization & Networking",
          "Traffic Management & API Gateways",
          "System Hardening & Performance Tuning",
          "High Availability & DR",
        ],
      },
      security: {
        title: "Cybersecurity",
        items: [
          "CVE Analysis & Hardening",
          "Threat Intelligence & SIEM Management",
          "Quality Assurance & Code Security",
          "Proactive Observability & Incident Detection",
          "CI/CD Security",
        ],
      },
      leadership: {
        title: "Leadership",
        items: [
          "10+ years leading teams",
          "Organizational architecture",
          "Technical coaching & mentoring",
          "Critical incident management",
          "Strategic decision making",
        ],
      },
    },
    projects: {
      autodata: {
        description:
          "Open vehicle database for the Argentine market with an intelligent purchase advisor.",
      },
      vineteca: {
        description:
          "Complete e-commerce and management system for a wine shop with offline support.",
      },
      ajedrez: {
        description:
          "Chess with Gemini AI for Android TV, built to play with the remote control.",
      },
    },
    projectPages: {
      autodata: {
        title: "Autodata",
        subtitle: "Argentine vehicle database",
        description:
          "Autodata is a platform that transforms the vehicle buying experience in Argentina. More than a catalog, it works as a personal advisor that uses comprehensive data and intelligent algorithms to offer personalized recommendations, detailed comparisons, and transparent information about pricing, specs, and segments of the local automotive market.",
        features: [
          "Personalized recommendations based on preferences and budget",
          "Detailed side-by-side model comparisons",
          "Complete spec sheets with engine, consumption, and dimension data",
          "Up-to-date pricing data for new and used vehicles",
          "Advanced search by segment, brand, and price range",
          "Backend built with Bun + Express for maximum performance",
          "Automated tests with Vitest and Husky pre-commit hooks",
        ],
      },
      vineteca: {
        title: "Vineteca",
        subtitle: "E-commerce & wine shop management",
        description:
          "Complete e-commerce and management system for a wine shop, built with modern architecture. Includes a catalog with advanced filters, shopping cart, 3-step checkout, full admin panel, multi-warehouse stock control, gift cards, blog with visual editor, real-time metrics dashboard, and offline support as a PWA.",
        features: [
          "Catalog with advanced filters by grape, winery, and region",
          "Barcode search",
          "Complete 3-step checkout with dynamic discounts",
          "Fully responsive admin panel",
          "Automatic multi-warehouse stock control",
          "Gift cards: purchase, redeem, and management",
          "Blog with visual/markdown editor and events system",
          "Real-time metrics dashboard with charts",
          "PWA with automatic updates and offline support",
          "Native mobile app ready with Capacitor",
        ],
      },
      ajedrez: {
        title: "Ajedrez IA",
        subtitle: "Chess with AI for Android TV",
        description:
          "A project born from a real need: there wasn't a single decent chess app on the Android TV store — all of them had invasive ads and looked terrible. So I built one from scratch with my 10-year-old daughter, using it as an opportunity to teach her AI concepts while we played. Designed to be fully navigable with the TV remote D-pad, but it also works as a responsive web app on any device.",
        features: [
          "Local 1 vs 1 mode to play with someone on the same screen",
          "Play vs AI with progressive difficulty levels",
          "AI uses different LLM models depending on the chosen difficulty",
          "Personality system: AI adjusts move quality based on level",
          "Designed for a 10-year-old to learn and improve progressively",
          "Full D-pad navigation for Android TV remote control",
          "Clean ad-free interface designed for big screens",
          "Chess engine with chess.js for rule validation",
          "Responsive web that works on any device",
          "Packaged as native Android app with Capacitor",
        ],
      },
    },
    specialtyPages: {
      architecture: {
        title: "Architecture & Development",
        subtitle: "Robust and scalable systems",
        description:
          "End-to-end design and implementation of digital solutions, prioritizing maintainability, scalability, and optimal performance.",
        accentColor: "#3b82f6",
        details: [
          {
            title: "Distributed System Design",
            description:
              "Architecture of systems where components collaborate across the network transparently, ensuring fault tolerance and high availability through effective decoupling.",
            solutions: {
              enterprise: "AWS Managed Services, Google Cloud Pub/Sub",
              openSource: "RabbitMQ, Redis, Nginx Load Balancing",
            },
          },
          {
            title: "Microservices & API Ecosystems",
            description:
              "Decomposing complex applications into autonomous services that communicate via clear contracts. Implementation of API Gateways and service meshes.",
            solutions: {
              enterprise: "MuleSoft, Apigee, AWS App Mesh",
              openSource: "Kong Gateway, Apache APISIX, gRPC",
            },
          },
          {
            title: "Reactive & Full-stack Architectures",
            description:
              "Event-driven development and non-blocking systems. Focus on user experience and data flow efficiency from backend to UI.",
            solutions: {
              enterprise: "Vercel Enterprise, Firebase managed stacks",
              openSource: "Vite, Bun, Node.js (Fastify), Rust (Axum)",
            },
          },
          {
            title: "Data Strategy & Persistence Modeling",
            description:
              "Selection and modeling of the right data engine (SQL, NoSQL, Cache) based on use case, ensuring integrity and access speed.",
            solutions: {
              enterprise: "Snowflake, Amazon Aurora, MongoDB Atlas",
              openSource: "PostgreSQL, Supabase, ClickHouse",
            },
          },
          {
            title: "Event Sourcing & CQRS",
            description:
              "Advanced patterns for systems with complex business logic, separating read and write operations to optimize performance and traceability.",
            solutions: {
              enterprise: "AWS EventBridge, Azure Event Hubs",
              openSource: "Apache Kafka, EventStoreDB",
            },
          },
        ],
      },
      infra: {
        title: "Infrastructure",
        subtitle: "Scalability & Resilience",
        description:
          "Design of hybrid and cloud-native infrastructures prepared for scalar growth, ensuring business continuity and operational efficiency.",
        accentColor: "#10b981",
        details: [
          {
            title: "Cloud Native Orchestration",
            description:
              "Implementation and management of container clusters for critical workloads, optimizing resource usage and deployment speed.",
            solutions: {
              enterprise: "AWS (EKS), Azure (AKS), GCP (GKE), OCI, OpenShift",
              openSource: "Rancher RKE2, Docker Swarm",
            },
          },
          {
            title: "Virtualization & Networking",
            description:
              "Logical and physical resource segregation. Design of secure networks and high-performance topologies for modern data centers.",
            solutions: {
              enterprise: "Microsoft Hyper-V, Fortinet, MikroTik",
              openSource: "Proxmox, pfSense",
            },
          },
          {
            title: "Traffic Management & Gateways",
            description:
              "Centralized control of entry points, layer 4/7 load balancing, and API lifecycle management in distributed environments.",
            solutions: {
              enterprise: "Apigee, F5 BIG-IP, Kong Enterprise (knowledge)",
              openSource: "Nginx, Traefik, HAProxy, Kong OSS",
            },
          },
          {
            title: "Hardening & System Tuning",
            description:
              "Operating system protection through attack surface reduction and fine-tuning parameters for maximum performance.",
            solutions: {
              enterprise: "RHEL (Red Hat Enterprise Linux)",
              openSource: "Debian, Ubuntu Server, Lynis Audit",
            },
          },
          {
            title: "High Availability & Disaster Recovery",
            description:
              "Comprehensive strategies to ensure services remain operational in the face of catastrophic failures, with minimal recovery times.",
            solutions: {
              enterprise: "Cloud Storage Replication, Veeam (knowledge)",
              openSource: "Proxmox Backup Server, RKE2 Replication",
            },
          },
        ],
      },
      security: {
        title: "Cybersecurity",
        subtitle: "Deep Vigilance & Protection",
        description:
          "Security integrated into the system's DNA, from development vulnerability analysis to production threat detection.",
        accentColor: "#f43f5e",
        details: [
          {
            title: "CVE Analysis & Hardening",
            description:
              "Proactive vulnerability scanning and security patch application. Hardening of containers and operating systems.",
            solutions: {
              enterprise: "Qualys, Tenable (knowledge)",
              openSource: "Trivy, Snyk, Nmap",
            },
          },
          {
            title: "Threat Intelligence & SIEM",
            description:
              "Centralized log analysis to identify anomalous behavior and respond to security incidents in real-time.",
            solutions: {
              enterprise: "Splunk Enterprise",
              openSource: "Wazuh, ELK Stack (Security)",
            },
          },
          {
            title: "QA & Code Security",
            description:
              "Static and dynamic code analysis to detect logical flaws and security weaknesses before they reach production (DevSecOps).",
            solutions: {
              enterprise: "Checkmarx (knowledge)",
              openSource: "SonarQube, Snyk, npm audit, OWASP Dependency-Check",
            },
          },
          {
            title: "Proactive Observability & Diagnosis",
            description:
              "Monitoring metrics and traces to identify root causes of issues, ensuring digital ecosystem health.",
            solutions: {
              enterprise: "Datadog, New Relic, Dynatrace (knowledge)",
              openSource: "Sentry, Prometheus, Grafana, Zabbix",
            },
          },
          {
            title: "CI/CD Security",
            description:
              "Automating security controls within deployment pipelines, preventing secret leaks and ensuring code integrity.",
            solutions: {
              enterprise: "Azure DevOps, GitHub Enterprise Security",
              openSource: "Jenkins, GitHub Actions, GitLab CI, Gitleaks",
            },
          },
        ],
      },
      leadership: {
        title: "Leadership",
        subtitle: "Tech Lead & Strategy",
        description:
          "Technical leadership focused on being a force multiplier, scaling team talent and aligning technology with business objectives.",
        accentColor: "#f59e0b",
        details: [
          {
            title: "Technical Leadership (Force Multiplier)",
            description:
              "10+ years guiding engineering teams, translating complex requirements into executable architectures and raising technical standards.",
            solutions: {
              enterprise: "Management by Objectives (OKRs), Engineering KPIs",
              openSource: "Scrum, Kanban, Agile Mindset",
            },
          },
          {
            title: "Organizational Architecture",
            description:
              "Designing efficient workflows and scalable team structures. Fluid integration between Business and Technology areas.",
            solutions: {
              enterprise: "IT Governance, Roles & Responsibilities",
              openSource: "Process Standardization, Modern SDLC",
            },
          },
          {
            title: "Technical Coaching & Mentoring",
            description:
              "Developing internal talent, training profiles in new technologies and fostering a culture of excellence and clean code.",
            solutions: {
              enterprise: "Career Paths, Skill Matrix",
              openSource: "Peer Reviews, Tech Talks, 1-on-1 Mentoring",
            },
          },
          {
            title: "Critical Incident Management",
            description:
              "Leadership and command during technical crises, maintaining calm and executing structured decisions to restore service.",
            solutions: {
              enterprise: "Incident Command System (ICS), Post-mortems",
              openSource: "Blame-free Culture, Continuous Improvement",
            },
          },
          {
            title: "Strategic Decision Making",
            description:
              "Conscious balancing between technical debt and speed to market, maximizing technological ROI.",
            solutions: {
              enterprise: "Cloud Cost Analysis, Vendor Evaluation",
              openSource: "OSS Resource Optimization, Buy vs Build",
            },
          },
        ],
      },
    },
    legalTeasersPool: {
      privacy: [
        " (your data is as safe as a [[sudo rm -rf /]] without prompt)",
        " (we collect less than a [[garbage collector]] in a leak)",
        " (your IP is all we care about... joking, it's your [[soul]])",
      ],
      terms: [
        " (by reading this, you agreed to name your [[firstborn]] Linter)",
        " (based on the [[you don't want to know]] law v1.0)",
        " (in case of error, the dev returns [[null]] and vanishes)",
      ],
    },
  },
};

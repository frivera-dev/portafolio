export const personal = {
  name: "Fabián Rivera",
  lastName: "Gonzalez",
  title: "Store Manager & eCommerce Specialist",
  tagline: "Donde la estrategia digital se encuentra con la implementación técnica.",
  email: "rivera.fabian.g@gmail.com",
  phone: "+56 9 3359 2980",
  about:
    "Profesional con formación en comunicación audiovisual y sólida trayectoria en eCommerce. Especialista en VTEX y Magento, con estudios en Desarrollo Full Stack JavaScript. Desde hace ~3 años combino gestión de tiendas con desarrollo web — código, integraciones y optimización técnica. Abordo proyectos con perspectiva integral, desde la estrategia digital hasta la implementación.",
};

export const experience = [
  {
    role: "Store Manager & Desarrollador Web",
    company: "Adwise",
    period: "Febrero 2021 — Actualidad",
    current: true,
    description: [
      "Gestión diaria de tiendas online en Shopify, VTEX y Magento.",
      "Administración de portafolio de marcas de alto volumen a nivel regional.",
      "Tras consolidarme como Store Manager, hace 3 años me convertí en desarrollador web en Adwise. Mis tareas actuales incluyen:",
      "Revisión y corrección de funcionalidad.",
      "Migraciones de plataformas.",
      "Optimización en experiencia de usuario en términos de UI y UX.",
      "Mejora y actualización de diseño.",
      "Soporte.",
    ],
  },
  {
    role: "Verificación de Publicidad TV/Cable",
    company: "Megatime",
    period: "2020 — 2021",
    current: false,
    description: [
      "Verificación de calidad de publicidad en plataformas de televisión y cable.",
    ],
  },
  {
    role: "Realización de Catálogo",
    company: "Zolkan – Colgram",
    period: "2019 — 2020",
    current: false,
    description: [
      "Adaptación de descripciones y fotografía para diferentes marcas.",
    ],
  },
  {
    role: "Asistente de Dirección",
    company: "TVN",
    period: "2018 — 2019",
    current: false,
    description: [
      "Edición de video con Avid Media Composer, Adobe Premiere y Final Cut Pro.",
      "Asistencia en producción audiovisual.",
    ],
  },
];

export const education = [
  {
    institution: "Desafío Latam",
    degree: "Desarrollo Full Stack JavaScript",
    year: "2022 — 2023",
  },
  {
    institution: "Universidad de las Américas",
    degree: "Comunicador Audiovisual Multimedia",
    year: "2015",
  },
  {
    institution: "UTEM",
    degree: "Ingeniería Civil en Computación e Informática",
    year: "Inconclusa",
  },
];

export const platforms = [
  { name: "VTEX", years: "6 años" },
  { name: "Magento", years: "6 años" },
  { name: "Shopify", years: "6 años" },
  { name: "WordPress", years: "6 años" },
];

export const stack = [
  { name: "VTEX", category: "eCommerce", level: 95 },
  { name: "Magento", category: "eCommerce", level: 85 },
  { name: "Shopify", category: "eCommerce", level: 85 },
  { name: "WordPress", category: "eCommerce", level: 80 },
  { name: "HTML", category: "Frontend", level: 85 },
  { name: "CSS", category: "Frontend", level: 85 },
  { name: "JavaScript", category: "Frontend", level: 80 },
  { name: "Node.js", category: "Backend", level: 70 },
  { name: "React", category: "Frontend", level: 75 },
  { name: "Next.js", category: "Frontend", level: 70 },
  { name: "Adobe Premiere", category: "Multimedia", level: 90 },
  { name: "Final Cut Pro", category: "Multimedia", level: 85 },
  { name: "Avid Media Composer", category: "Multimedia", level: 80 },
  { name: "Email Marketing", category: "Marketing", level: 88 },
];

export const brands = [
  "Tienda Flores",
  "Atika",
  "GMO LATAM",
  "Helly Hansen",
  "HEAD Chile",
  "Calvin Klein",
  "Tommy Hilfiger",
  "Tübinger",
  "Calubags",
  "Volcán",
  "Tienda Volcán",
  "Blushbar",
  "GMO CL",
  "GMO CO",
  "GMO EC",
  "GMO PE",
  "Econópticas CL",
  "Econópticas PE",
  "Catálogo Flores",
  "ILKO & Virutex CL",
  "ILKO & Virutex CO",
  "ILKO & Virutex MX",
  "ILKO & Virutex ARG",
  "ILKO & Virutex PE",
  "Llantas del Pacífico",
  "Mucho Neumático",
  "Zig Zag",
  "OPV",
  "y muchas más...",
];

export type FeaturedBrand = {
  name: string;
  platform: string;
  region: string;
  color: string;
  accent: string;
};

export const featuredBrands: FeaturedBrand[] = [
  { name: "Helly Hansen", platform: "VTEX", region: "Chile", color: "#E31E24", accent: "#FF4444" },
  { name: "HEAD Chile", platform: "VTEX", region: "Chile", color: "#1A1A1A", accent: "#E63946" },
  { name: "Calvin Klein", platform: "VTEX", region: "Chile", color: "#000000", accent: "#FFFFFF" },
  { name: "Tommy Hilfiger", platform: "VTEX", region: "Chile", color: "#001F3F", accent: "#CC0000" },
  { name: "Blushbar", platform: "Shopify", region: "LATAM", color: "#E91E8C", accent: "#FF6BB5" },
  { name: "Volcán", platform: "VTEX", region: "Chile", color: "#2D5016", accent: "#6B8E23" },
  { name: "Econópticas", platform: "VTEX", region: "CL · PE", color: "#0066B3", accent: "#3399FF" },
  { name: "GMO LATAM", platform: "Magento", region: "Regional", color: "#FF6B00", accent: "#FF9500" },
  { name: "ILKO & Virutex", platform: "VTEX", region: "5 países", color: "#003DA5", accent: "#4A90D9" },
  { name: "Zig Zag", platform: "VTEX", region: "Chile", color: "#C41E3A", accent: "#FF4D6D" },
  { name: "Atika", platform: "Shopify", region: "Chile", color: "#8B4513", accent: "#D4A574" },
  { name: "Calubags", platform: "WordPress", region: "Chile", color: "#1B3A4B", accent: "#4ECDC4" },
  { name: "Tienda Flores", platform: "VTEX", region: "Chile", color: "#E84393", accent: "#FD79A8" },
  { name: "Llantas del Pacífico", platform: "Magento", region: "Chile", color: "#003366", accent: "#0099CC" },
  { name: "Mucho Neumático", platform: "Magento", region: "Chile", color: "#2C3E50", accent: "#F39C12" },
  { name: "Tübinger", platform: "Shopify", region: "Chile", color: "#8B6914", accent: "#D4A574" },
];

export const presentationStats = [
  { value: "5+", label: "Años en eCommerce", detail: "Gestión integral de tiendas" },
  { value: "3+", label: "Años como desarrollador web", detail: "Código, integraciones y optimización" },
  { value: "60+", label: "Marcas gestionadas", detail: "Retail, moda, deporte y más" },
];

export const platformExperienceStats = [
  { name: "VTEX", value: "6", detail: "6 años" },
  { name: "Magento", value: "6", detail: "6 años" },
  { name: "Shopify", value: "6", detail: "6 años" },
  { name: "WordPress", value: "6", detail: "6 años" },
];

export const valuePropositions = [
  {
    title: "Visión 360°",
    description:
      "No solo opero la tienda: entiendo el negocio, el catálogo, el marketing y el código que lo sostiene.",
    icon: "◈",
  },
  {
    title: "Multi-plataforma",
    description:
      "VTEX, Magento, Shopify y WordPress — experiencia real en producción con marcas de alto volumen regional.",
    icon: "⬡",
  },
  {
    title: "De la estrategia al deploy",
    description:
      "Campañas de mailing, personalización de tema, integraciones API y mejoras de performance sin depender de terceros.",
    icon: "◎",
  },
];

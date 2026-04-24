// ============================================================
// SITE CONFIGURATION
// Edit this file to customize your gym website.
// All hardcoded data lives here so the template is reusable.
// ============================================================

export const site = {
  name: "Your Gym Name",
  tagline: "Extreme Fitness",
  description:
    "Your Gym Name - The best gym in your city. Weight training, MMA, Boxing, Jiu Jitsu, Functional, Dance Fitness and more.",
  url: "https://yourgym.com",
  locale: "es_EC",
  lang: "es",
  phone: "+593990000000",
  phoneFormatted: "099 000 0000",
  whatsapp: "593990000000",
  email: "info@yourgym.com",
  address: {
    street: "123 Main Street",
    city: "Your City",
    region: "Your Region",
    country: "Ecuador",
    countryCode: "EC",
    short: "123 Main Street, Your City",
  },
  geo: {
    latitude: -4.0027815,
    longitude: -79.2017066,
    region: "EC-L",
  },
  hours: {
    weekdays: "05:00 - 22:30",
    saturday: "08:00 - 12:00 / 15:00 - 18:00",
    sunday: "Cerrado",
  },
  social: {
    instagram: "https://www.instagram.com/yourgym/",
    instagramHandle: "@yourgym",
    facebook: "https://www.facebook.com/yourgym/",
    tiktok: "https://www.tiktok.com/@yourgym",
    threads: "https://www.threads.com/@yourgym",
  },
  mapsUrl: "https://maps.app.goo.gl/yourlink",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1103!2d-79.2017066!3d-4.0027815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYour+Gym!5e0!3m2!1ses!2sec",
  analytics: {
    googleId: "G-XXXXXXXXXX",
    vercelAnalytics: true,
  },
};

export const seo = {
  title: `${site.name}\u00AE | Gimnasio en ${site.address.city}, ${site.address.country} - ${site.tagline}`,
  description: site.description,
  keywords:
    "gimnasio, gym, musculación, MMA, boxeo, jiu jitsu, funcional, bailoterapia, artes marciales, entrenamiento personal, culturismo, clases grupales, defensa personal",
  ogImage: "images/banner.png",
  author: `${site.name}\u00AE`,
};

export const images = {
  logo: "/images/icon.jpg",
  logoText: "/images/logo-text.jpg",
  banner: "/images/banner.png",
  favicon: "/favicon.png",
  faviconIco: "/favicon.ico",
};

// ============================================================
// NAVIGATION
// ============================================================

export const navLinks = [
  { label: "Entrenamiento", href: "#entrenamiento" },
  { label: "Clases", href: "#clases" },
  { label: "Membresías", href: "#membresias" },
  { label: "Nuevos", href: "#nuevos" },
  { label: "Nosotros", href: "#nosotros" },
];

// ============================================================
// HERO SECTION
// ============================================================

export const hero = {
  location: `${site.address.city}, ${site.address.country}`,
  titleLine1: "MÁS QUE",
  typewriterText: "EJERCICIO",
  subtitle: "Es tu casa. Es tu proceso. Es tu transformación.",
  services: "Gym \u2022 Clases Grupales \u2022 MMA \u2022 Culturismo",
  ctaPrimary: "Comenzar Ahora",
  ctaSecondary: "Conoce Más",
  ctaPrimaryHref: `https://wa.me/${site.whatsapp}?text=Hola!%20Quiero%20info%20sobre%20${encodeURIComponent(site.name)}`,
  ctaSecondaryHref: "#entrenamiento",
  bannerImage: images.banner,
  bannerAlt: site.name,
};

// ============================================================
// HEADER
// ============================================================

export const header = {
  ctaText: "Reservar Ahora",
  ctaHref: `https://wa.me/${site.whatsapp}?text=Hola!%20Quiero%20reservar%20una%20clase`,
  mobileCta: "Reservar Ahora",
  mobileCataHref: `https://wa.me/${site.whatsapp}`,
};

// ============================================================
// PROGRAMS / PROMOS
// ============================================================

export const promos = {
  sectionTag: "Nuestros programas",
  sectionTitle: "Lo Que Ofrecemos",
  items: [
    {
      tag: "Gym",
      title: "MUSCULACIÓN",
      description:
        "Equipamiento de última generación. Abrimos desde las 05:00. No cerramos al medio día.",
      cta: "Más Info",
      image: "/images/gym2.jpg",
      hours: "L-V 05:00-22:30 · Sáb 08:00-18:00",
    },
    {
      tag: "MMA",
      title: "ARTES DE COMBATE",
      description:
        "MMA, Boxeo, Jiu Jitsu y Defensa Personal. Programa para niños desde 5 años y adultos.",
      cta: "Más Info",
      image: "/images/gym4.jpg",
      hours: "Niños 15:00-18:00 · Adultos 15:00-22:00",
    },
    {
      tag: "Baile",
      title: "BAILOTERAPIA",
      description:
        "Entrena bailando con la mejor energía. Quema calorías mientras te diviertes.",
      cta: "Inscribirse",
      image: "/images/gym3.jpg",
      hours: "L-V 07:00-08:00 · 19:00-20:00",
    },
    {
      tag: "Funcional",
      title: "ENTRENAMIENTO FUNCIONAL",
      description:
        "Mejora tu fuerza, resistencia y movilidad con ejercicios funcionales para todos los niveles.",
      cta: "Más Info",
      image: "/images/gym5.jpg",
      hours: "L-V 06:00-09:00 · 18:00-19:00",
    },
    {
      tag: "Culturismo",
      title: "COMPETICIÓN & PREP",
      description:
        "Preparación profesional para competencias de culturismo y fitness. Entrenadores especializados.",
      cta: "Inscribirse",
      image: "/images/premios.jpg",
      hours: "Horarios personalizados",
    },
    {
      tag: "Nuevo",
      title: "EMPIEZA HOY",
      description: `Ven a conocer nuestras nuevas instalaciones en ${site.address.short}.`,
      cta: "Reservar",
      image: "/images/gym1.jpg",
      hours: "Escríbenos por WhatsApp",
    },
  ],
};

// ============================================================
// SCHEDULE
// ============================================================

export const schedule = {
  sectionTag: "Planifica tu semana",
  sectionTitle: "Horario de Clases",
  days: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
  disclaimer: "Horarios sujetos a cambios. Consulta disponibilidad.",
  addressNote: `${site.address.street}, ${site.address.city}`,
  classes: [
    { time: "05:00", name: "Musculación", days: [1, 1, 1, 1, 1, 0], color: "bg-white/10" },
    { time: "06:00", name: "Funcional", days: [1, 1, 1, 1, 1, 0], color: "bg-primary/20" },
    { time: "07:00", name: "Bailoterapia", days: [1, 1, 1, 1, 1, 0], color: "bg-[#e040fb]/20" },
    { time: "08:00", name: "Musculación", days: [1, 1, 1, 1, 1, 1], color: "bg-white/10" },
    { time: "09:00", name: "Funcional", days: [1, 1, 1, 1, 1, 0], color: "bg-primary/20" },
    { time: "15:00", name: "MMA Niños", days: [1, 1, 1, 1, 1, 0], color: "bg-[#e30613]/20" },
    { time: "15:00", name: "MMA Adultos", days: [1, 1, 1, 1, 1, 0], color: "bg-[#e30613]/20" },
    { time: "18:00", name: "Funcional", days: [1, 1, 1, 1, 1, 1], color: "bg-primary/20" },
    { time: "19:00", name: "Bailoterapia", days: [1, 1, 1, 1, 1, 0], color: "bg-[#e040fb]/20" },
    { time: "19:00", name: "MMA Adultos", days: [1, 1, 1, 1, 1, 0], color: "bg-[#e30613]/20" },
    { time: "20:00", name: "Musculación", days: [1, 1, 1, 1, 1, 0], color: "bg-white/10" },
  ],
};

// ============================================================
// TRAINERS
// ============================================================

export const trainers = {
  sectionTag: "Nuestro equipo",
  sectionTitle: "Entrenadores",
  sectionSubtitle:
    "Cada Coach, una especialidad. Un solo objetivo: llevarte a tu mejor versión.",
  coaches: [
    {
      name: "Coach Name 1",
      role: "Head Coach / Musculación",
      bio: "Entrenador principal. Especialista en musculación, fuerza y preparación física de alto rendimiento.",
      image: "/images/coach-hombre.jpg",
      specialties: ["Fuerza", "Musculación"],
    },
    {
      name: "Coach Name 2",
      role: "Competidora & Coach",
      bio: "Competidora de culturismo y fitness. Preparación profesional para competencias y transformación corporal.",
      image: "/images/coach-mujer.jpg",
      specialties: ["Culturismo", "Prep"],
    },
  ],
  videosTag: "Videos del equipo",
  videos: [
    {
      src: "/images/team-video.mp4",
      poster: "/images/poster-team.jpg",
      label: "Equipo",
      title: "Nuestro Equipo",
      desc: "Cada Coach, una especialidad. Un solo objetivo: llevarte a tu mejor versión.",
      hasAudio: true,
    },
    {
      src: "/images/coach-video.mp4",
      poster: "/images/poster-coach.jpg",
      label: "Viral",
      title: "El Coach en Acción",
      desc: "El coach pareciera que no entrenara... hasta que lo ves en acción.",
      hasAudio: false,
    },
    {
      src: "/images/meme-video.mp4",
      poster: "/images/poster-meme.jpg",
      label: "Humor",
      title: "Gym Humor",
      desc: "Etiqueta a ese coach que en diciembre ya no sabe qué hacer.",
      hasAudio: true,
    },
  ],
};

// ============================================================
// MEMBERSHIP PLANS
// ============================================================

export const membership = {
  sectionTag: "Elige tu plan",
  sectionTitle: "Membresías",
  sectionSubtitle: "Sin contratos largos. Sin cuotas ocultas. Cancela cuando quieras.",
  backgroundText: "MEMBRESÍAS",
  compareTitle: "Compara los Planes",
  plans: [
    {
      name: "Básico",
      price: "$25",
      period: "/mes",
      features: ["Acceso al gym", "Horario completo", "Vestidores", "WiFi"],
      extras: { grupales: false, mma: false, pt: false, nutricion: false, vip: false },
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$40",
      period: "/mes",
      features: [
        "Todo lo Básico",
        "Clases grupales ilimitadas",
        "MMA incluido",
        "1 sesión PT/mes",
        "Invitado 1x/mes",
      ],
      extras: { grupales: true, mma: true, pt: "1x/mes", nutricion: false, vip: false },
      highlighted: true,
    },
    {
      name: "Elite",
      price: "$65",
      period: "/mes",
      features: [
        "Todo lo Pro",
        "Personal Trainer 4x/mes",
        "Nutrición personalizada",
        "Prep competencias",
        "Toallas y amenities",
      ],
      extras: { grupales: true, mma: true, pt: "4x/mes", nutricion: true, vip: true },
      highlighted: false,
    },
  ],
  comparison: [
    { feature: "Acceso al gym", basic: true, pro: true, elite: true },
    { feature: "Horario completo", basic: true, pro: true, elite: true },
    { feature: "Clases grupales", basic: false, pro: true, elite: true },
    { feature: "MMA", basic: false, pro: true, elite: true },
    { feature: "Personal Trainer", basic: false, pro: "1x/mes", elite: "4x/mes" },
    { feature: "Nutrición", basic: false, pro: false, elite: true },
    { feature: "Invitado", basic: false, pro: "1x/mes", elite: "2x/mes" },
    { feature: "Prep competencias", basic: false, pro: false, elite: true },
    { feature: "Toallas & amenities", basic: false, pro: false, elite: true },
  ],
};

// ============================================================
// COUNTDOWN / PROMO BANNER
// ============================================================

export const countdown = {
  tag: "Oferta de lanzamiento",
  title: "Membresía con 30% de Descuento",
  labels: ["Días", "Horas", "Min", "Seg"],
  units: ["days", "hours", "minutes", "seconds"] as const,
  ctaText: "Oferta de Lanzamiento",
  daysFromNow: 15,
  backgroundImage: "/images/meme.jpg",
};

// ============================================================
// BEGINNERS SECTION
// ============================================================

export const beginners = {
  sectionTag: "Primera vez aquí?",
  sectionTitle: "Tu Nueva\nCasa Te\nEspera",
  sectionDescription: `No importa tu nivel de experiencia. ${site.name}\u00AE es para todos. Nuestro equipo se encarga de que te sientas como en casa desde el primer momento.`,
  ctaText: "Ver Membresías",
  ctaHref: "#membresias",
  image: "/images/gym1.jpg",
  imageAlt: `Entrenador ayudando a nuevo miembro en ${site.name}`,
  statNumber: "+1000",
  statLabel: "Seguidores confían en nosotros",
  steps: [
    {
      number: "01",
      title: "Escríbenos por WhatsApp",
      description: `Contáctanos al ${site.phoneFormatted} o haz clic en el botón para más información.`,
    },
    {
      number: "02",
      title: "Ven a Conocernos",
      description: `Visita nuestras nuevas instalaciones en ${site.address.short}. Te mostramos todo el espacio.`,
    },
    {
      number: "03",
      title: "Comienza Tu Transformación",
      description:
        "Entrena con nosotros desde el primer día con guía profesional. Esto es más que ejercicio, es identidad.",
    },
  ],
};

// ============================================================
// TRANSFORMATIONS / ACHIEVEMENTS
// ============================================================

export const transformations = {
  sectionTag: "Resultados reales",
  sectionTitle: "Nuestros Logros",
  sectionSubtitle: "La disciplina y el esfuerzo de nuestra comunidad hablan por sí mismos.",
  achievements: [
    {
      title: "Competencias & Trofeos",
      description:
        "Nuestros atletas representan al gym en competencias de culturismo y fitness a nivel nacional.",
      image: "/images/premios.jpg",
      badge: "Campeones",
    },
    {
      title: "Medalla de Oro",
      description:
        "Disciplina, esfuerzo y dedicación dan resultados en el podio.",
      image: "/images/premios2.jpg",
      badge: "Podio",
    },
    {
      title: "Equipo Ganador",
      description:
        "Nuestros competidores con sus trofeos y medallas. El equipo arrasa en cada competencia.",
      image: "/images/premios3.jpg",
      badge: "Trofeos",
    },
  ],
};

// ============================================================
// TESTIMONIALS
// ============================================================

export const testimonials = {
  sectionTag: "Testimonios",
  sectionTitle: "Lo Que Dicen\nNuestros Miembros",
  googleRating: "5.0",
  googleReviews: "6 opiniones",
  items: [
    {
      name: "Carlos M.",
      role: "Miembro desde 2025",
      text: "Desde que empecé mi vida cambió completamente. Los entrenadores te motivan de verdad y las instalaciones son de otro nivel.",
      stars: 5,
    },
    {
      name: "María P.",
      role: "Clases grupales",
      text: "Las clases grupales son increíbles, el ambiente te empuja a dar más. Me encanta la energía que se siente apenas entras. 100% recomendado.",
      stars: 5,
    },
    {
      name: "Andrés R.",
      role: "MMA & Culturismo",
      text: "El programa de MMA es muy completo y profesional. Además la preparación para competencias de culturismo es seria. Aquí se entrena de verdad.",
      stars: 5,
    },
    {
      name: "Valentina S.",
      role: "3 meses entrenando",
      text: "Nunca me había sentido tan cómoda en un gym. El equipo te hace sentir parte de la familia desde el primer día.",
      stars: 5,
    },
  ],
};

// ============================================================
// LIFESTYLE / ABOUT
// ============================================================

export const lifestyle = {
  sectionTag: "Más que un gym",
  sectionTitle: "Es Identidad",
  sectionDescription: `${site.name}\u00AE nació en ${site.address.city} con un sueño: crear un espacio donde cada persona pueda alcanzar su <strong class="text-primary">${site.tagline}</strong>. Somos comunidad, disciplina y pasión.`,
  marqueeText: `FUERZA \u2022 DISCIPLINA \u2022 COMUNIDAD \u2022 TRANSFORMACIÓN \u2022 IDENTIDAD \u2022 ${site.name.toUpperCase()} \u2022`,
  gallery: [
    { src: "/images/gym5.jpg", alt: "Funcional" },
    { src: "/images/premios.jpg", alt: "Premios y competencias" },
    { src: "/images/meme.jpg", alt: "Interior del gym" },
    { src: "/images/gym4.jpg", alt: "Artes de Combate" },
  ],
  stats: [
    { value: 1000, suffix: "+", label: "Seguidores", isCounter: true },
    { value: 5.0, suffix: "", label: "Rating Google", isCounter: false, display: "5.0" },
    { value: 50, suffix: "+", label: "Clases semanales", isCounter: true },
    { value: 2025, suffix: "", label: "Inauguración", isCounter: true },
  ],
};

// ============================================================
// FAQ
// ============================================================

export const faq = {
  sectionTag: "Resolvemos tus dudas",
  sectionTitle: "Preguntas Frecuentes",
  items: [
    {
      q: "¿Necesito experiencia previa para entrenar?",
      a: "No, para nada. Recibimos personas de todos los niveles. Nuestros entrenadores te guían desde el primer día con un plan personalizado para ti.",
    },
    {
      q: "¿Qué debo llevar a mi primera clase?",
      a: "Solo necesitas ropa deportiva cómoda, zapatillas de entrenamiento, una toalla y tu botella de agua. Nosotros nos encargamos del resto.",
    },
    {
      q: "¿A qué edad pueden ingresar los niños al programa de MMA?",
      a: "Nuestro programa de Artes Marciales Mixtas acepta niños desde los 5 años. Las clases están diseñadas por edades para garantizar seguridad y aprendizaje.",
    },
    {
      q: "¿Hay estacionamiento disponible?",
      a: `Sí, contamos con estacionamiento cercano. Estamos ubicados en ${site.address.short}, una zona céntrica de fácil acceso.`,
    },
    {
      q: "¿Puedo congelar mi membresía?",
      a: "Sí, puedes congelar tu membresía por motivos de viaje o salud. Contacta a nuestro equipo por WhatsApp para gestionarlo.",
    },
    {
      q: "¿Ofrecen planes de nutrición?",
      a: "Sí, nuestro plan Elite incluye nutrición personalizada. También puedes contratar el servicio por separado con nuestra nutricionista deportiva.",
    },
    {
      q: "¿Cuáles son los horarios de atención?",
      a: `Lunes a Viernes de ${site.hours.weekdays.split(" - ")[0]} a ${site.hours.weekdays.split(" - ")[1]} y Sábados de ${site.hours.saturday}. Domingos cerrado.`,
    },
    {
      q: "¿Cómo puedo inscribirme?",
      a: `Escríbenos directamente por WhatsApp al ${site.phoneFormatted} o ven a visitarnos en ${site.address.short}. ¡Te esperamos!`,
    },
  ],
};

// ============================================================
// INSTAGRAM FEED
// ============================================================

export const instagramFeed = {
  sectionTag: "Síguenos",
  handle: site.social.instagramHandle,
  url: site.social.instagram,
  ctaText: "Seguir en Instagram",
  posts: [
    { image: "/images/gym1.jpg", alt: "Empieza Hoy" },
    { image: "/images/gym2.jpg", alt: "Musculación" },
    { image: "/images/gym3.jpg", alt: "Bailoterapia" },
    { image: "/images/gym4.jpg", alt: "Artes de Combate" },
    { image: "/images/gym5.jpg", alt: "Funcional" },
    { image: "/images/premios.jpg", alt: "Premios y trofeos" },
  ],
};

// ============================================================
// LOCATION
// ============================================================

export const location = {
  sectionTag: "Visítanos",
  sectionTitle: `Encuéntranos\nen ${site.address.city}`,
  mapTitle: `Ubicación de ${site.name} en ${site.address.city}`,
  ctaPrimary: "Escríbenos por WhatsApp",
  ctaPrimaryHref: `https://wa.me/${site.whatsapp}?text=Hola!%20Quiero%20visitarlos`,
  ctaSecondary: "Cómo Llegar",
  ctaSecondaryHref: site.mapsUrl,
};

// ============================================================
// FOOTER
// ============================================================

export const footer = {
  tagline: "Más que ejercicio, es identidad.",
  copyright: `\u00A9 ${new Date().getFullYear()} ${site.name}\u00AE. Todos los derechos reservados.`,
  bottomRight: site.tagline,
  links: {
    info: [
      { label: "Horarios", href: "#" },
      { label: "Clases", href: "#clases" },
      { label: "Entrenadores", href: "#entrenamiento" },
      { label: "Ubicación", href: site.mapsUrl },
    ],
    empresa: [
      { label: "Sobre Nosotros", href: "#nosotros" },
      { label: "Membresías", href: "#membresias" },
      { label: "Contacto", href: `https://wa.me/${site.whatsapp}` },
      { label: "FAQ", href: "#" },
    ],
  },
  socials: [
    { label: "Instagram", icon: "IG", href: site.social.instagram },
    { label: "Facebook", icon: "FB", href: site.social.facebook },
    { label: "TikTok", icon: "TK", href: site.social.tiktok },
    { label: "Threads", icon: "TH", href: site.social.threads },
  ],
};

// ============================================================
// LOADER
// ============================================================

export const loader = {
  text: site.name,
  logo: images.logo,
};

// ============================================================
// STRUCTURED DATA (JSON-LD)
// ============================================================

export function buildStructuredData(siteUrl: string, ogImageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "GymOrFitnessCenter",
    name: site.name,
    alternateName: `${site.name}\u00AE - ${site.tagline}`,
    description: site.description,
    url: siteUrl,
    logo: `${siteUrl}${images.logo.replace(/^\//, "")}`,
    image: ogImageUrl,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: site.hours.weekdays.split(" - ")[0],
        closes: site.hours.weekdays.split(" - ")[1],
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: testimonials.googleRating,
      reviewCount: testimonials.googleReviews.split(" ")[0],
      bestRating: "5",
    },
    sameAs: [
      site.social.instagram,
      site.social.facebook,
      site.social.tiktok,
      site.social.threads,
    ],
    priceRange: `${membership.plans[0].price} - ${membership.plans[membership.plans.length - 1].price} USD`,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Membresías",
      itemListElement: membership.plans.map((plan) => ({
        "@type": "Offer",
        name: `Plan ${plan.name}`,
        price: plan.price.replace("$", ""),
        priceCurrency: "USD",
      })),
    },
  };
}

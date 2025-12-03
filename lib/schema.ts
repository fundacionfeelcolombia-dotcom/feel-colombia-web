export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Fundación Feel Colombia",
  alternateName: "Feel Colombia",
  url: "https://www.fundacionfeelcolombia.org",
  logo: "https://www.fundacionfeelcolombia.org/logo.png",
  description:
    "Fundación que promueve el bienestar emocional y la prevención en salud mental a través de programas educativos, corporativos e innovación en Colombia.",
  foundingDate: "2020",
  sameAs: [
    "https://www.facebook.com/feelcolombia",
    "https://www.instagram.com/feelcolombia",
    "https://www.linkedin.com/company/feelcolombia",
    "https://twitter.com/feelcolombia",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57-321-545-9582",
    contactType: "customer service",
    email: "proyectos@fundacionfeelcolombia.org",
    areaServed: "CO",
    availableLanguage: "Spanish",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  nonprofitStatus: "Nonprofit501c3",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Feel Colombia",
  url: "https://www.fundacionfeelcolombia.org",
  description: "Fundación de bienestar emocional y salud mental en Colombia",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.fundacionfeelcolombia.org/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const programsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aula Viva",
    description:
      "Experiencia educativa y artística para sentir, conectar y sanar. Transformamos el aula en un espacio vivo donde las emociones se convierten en aprendizaje.",
    provider: {
      "@type": "NGO",
      name: "Fundación Feel Colombia",
    },
    areaServed: "CO",
    serviceType: "Educación emocional",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pulso Corporativo",
    description:
      "Bienestar emocional con tecnología humana. Acompañamos a los equipos de trabajo hacia una cultura de bienestar sostenible.",
    provider: {
      "@type": "NGO",
      name: "Fundación Feel Colombia",
    },
    areaServed: "CO",
    serviceType: "Bienestar laboral",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Synha Lab",
    description:
      "Laboratorio de innovación en salud mental donde la ciencia, la tecnología y la empatía se encuentran para co-crear soluciones transformadoras.",
    provider: {
      "@type": "NGO",
      name: "Fundación Feel Colombia",
    },
    areaServed: "CO",
    serviceType: "Innovación en salud mental",
  },
];

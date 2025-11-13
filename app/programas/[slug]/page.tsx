import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  BarChart3,
  Beaker,
  Building2,
  Cpu,
  Globe,
  Heart,
  Lightbulb,
  Mail,
  MessageCircle,
  QrCode,
  Users,
} from "lucide-react";
import Link from "next/link";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

const steps = [
  {
    icon: QrCode,
    title: "Encuesta emocional anónima (QR semanal)",
    description:
      "Medición semanal del estado emocional del equipo a través de un QR rápido y anónimo. Sin aplicaciones, sin fricción.",
  },
  {
    icon: MessageCircle,
    title: "Círculos emocionales y cápsulas digitales",
    description:
      "Espacios de conversación facilitados por psicólogos y contenidos digitales de bienestar emocional personalizados.",
  },
  {
    icon: BarChart3,
    title: "Tableros visuales (Feel Dashboard)",
    description:
      "Panel de visualización del clima emocional organizacional con datos en tiempo real y tendencias.",
  },
  {
    icon: Heart,
    title: "Acompañamiento continuo",
    description:
      "Seguimiento constante por parte de nuestro equipo interdisciplinario con ajustes según las necesidades del equipo.",
  },
];

const allPrograms = [
  {
    title: "Synha Lab",
    slug: "synha-lab",
    titleCover: "Laboratorio de Innovación en Salud Mental",
    phraseCover: "Donde la ciencia, la tecnología y la empatía se encuentran.",
    buttonText: "Colabora con nosotros",
    description:
      "Synha Lab es el laboratorio de innovación de la Fundación Feel Colombia, un espacio donde investigadores, profesionales y jóvenes con experiencias vividas co-crean soluciones híbridas —digitales y presenciales— para fortalecer la salud mental individual y colectiva. Desde Synha Lab exploramos nuevas formas de entender, medir y promover el bienestar emocional, combinando evidencia científica, diseño tecnológico y participación comunitaria. Nuestro propósito es transformar los modelos tradicionales de atención en salud mental, haciéndolos más accesibles, humanos y sostenibles.",
    phraseDesc:
      "La innovación en salud mental no ocurre en laboratorios aislados, sino en la intersección entre la ciencia, la tecnología y las voces de quienes viven las experiencias.",
    linesOfAction: [
      {
        title: "Investigación aplicada",
        description:
          "Desarrollamos estudios y proyectos que permiten identificar y analizar índices de riesgo depresivo, ansioso y de psicosis temprana en jóvenes y adultos. A partir de estos hallazgos, diseñamos estrategias preventivas y de acompañamiento que fortalecen la detección oportuna y la resiliencia emocional.",
      },
      {
        title: "Diseño y tecnología",
        description:
          "Creamos plataformas, prototipos y herramientas digitales que amplifican el acceso a recursos de bienestar emocional, mejoran la alfabetización en salud mental y facilitan la conexión entre comunidades y servicios de apoyo.",
      },
      {
        title: "Participación juvenil",
        description:
          "Integramos a jóvenes con experiencias vividas en todas las etapas del proceso desde la ideación hasta la validación, reconociendo su voz como fuente esencial de conocimiento para construir soluciones que realmente respondan a las necesidades del territorio.",
      },
      {
        title: "Colaboración institucional y comunitaria",
        description:
          "Trabajamos junto a alcaldías locales, ediles, instituciones educativas distritales, clubes deportivos y redes comunitarias, fortaleciendo una red intersectorial de cuidado que lleva la innovación emocional a los entornos donde más se necesita.",
      },
      {
        title: "Colaboración internacional",
        description:
          "Conectamos actores académicos, sociales y tecnológicos de diferentes países para compartir aprendizajes, validar modelos y escalar soluciones sostenibles que integren ciencia y empatía.",
      },
    ],
    howItWorks: [
      {
        title: "Encuesta emocional anónima (QR semanal)",
        description:
          "Medición semanal del estado emocional del equipo a través de un QR rápido y anónimo. Sin aplicaciones, sin fricción.",
      },
      {
        title: "Círculos emocionales y cápsulas digitales",
        description:
          "Espacios de conversación facilitados por psicólogos y contenidos digitales de bienestar emocional personalizados.",
      },
      {
        title: "Tableros visuales (Feel Dashboard)",
        description:
          "Panel de visualización del clima emocional organizacional con datos en tiempo real y tendencias.",
      },
      {
        title: "Acompañamiento continuo",
        description:
          "Seguimiento constante por parte de nuestro equipo interdisciplinario con ajustes según las necesidades del equipo.",
      },
    ],
    ourImpact: {
      desc: "Synha Lab impulsa entornos más sanos, colaborativos y emocionalmente equilibrados, donde las personas pueden desarrollar todo su potencial humano y social. Creemos que una sociedad emocionalmente estable no solo reduce problemáticas derivadas del malestar —como la desmotivación, el aislamiento o la frustración colectiva—, sino que favorece el florecimiento de comunidades más creativas, productivas y cohesionadas. Nuestro trabajo busca generar un equilibrio entre bienestar emocional, innovación social y desarrollo sostenible, entendiendo que cuidar la mente es también cuidar la vitalidad de los sistemas humanos que sostienen a la sociedad.",
      phrase: "Cuidar la mente es cuidar el futuro de la sociedad.",
    },
    testimonials: [
      {
        desc: "Pulso corporativo nos permitió escuchar lo que nunca se decía en las reuniones. Ahora nuestro equipo tiene espacios seguros para expresar y transformar su día a día.",
        nameTestiomanial: "Gerente de Talento Humano, Empresa Tech",
      },
    ],
    infoContact: {
      title: "Únete a Synha Lab",
      desc: "Si eres investigador, profesional, estudiante o simplemente alguien apasionado por la innovación en salud mental, queremos conocerte. Construyamos juntos el futuro del bienestar emocional.",
      buttonText: "Quiero colaborar con Synha Lab",
    },
  },
];

const actionLines = [
  {
    icon: Beaker,
    title: "Investigación aplicada",
    description:
      "Desarrollamos estudios y proyectos que permiten identificar y analizar índices de riesgo depresivo, ansioso y de psicosis temprana en jóvenes y adultos. A partir de estos hallazgos, diseñamos estrategias preventivas y de acompañamiento que fortalecen la detección oportuna y la resiliencia emocional.",
  },
  {
    icon: Cpu,
    title: "Diseño y tecnología",
    description:
      "Creamos plataformas, prototipos y herramientas digitales que amplifican el acceso a recursos de bienestar emocional, mejoran la alfabetización en salud mental y facilitan la conexión entre comunidades y servicios de apoyo.",
  },
  {
    icon: Users,
    title: "Participación juvenil",
    description:
      "Integramos a jóvenes con experiencias vividas en todas las etapas del proceso —desde la ideación hasta la validación—, reconociendo su voz como fuente esencial de conocimiento para construir soluciones que realmente respondan a las necesidades del territorio.",
  },
  {
    icon: Building2,
    title: "Colaboración institucional y comunitaria",
    description:
      "Trabajamos junto a alcaldías locales, ediles, instituciones educativas distritales, clubes deportivos y redes comunitarias, fortaleciendo una red intersectorial de cuidado que lleva la innovación emocional a los entornos donde más se necesita.",
  },
  {
    icon: Globe,
    title: "Colaboración internacional",
    description:
      "Conectamos actores académicos, sociales y tecnológicos de diferentes países para compartir aprendizajes, validar modelos y escalar soluciones sostenibles que integren ciencia y empatía.",
  },
];

export async function generateStaticParams() {
  const findProgrma = allPrograms.map((program) => ({ slug: program.slug }));
  return findProgrma;
}

const PageDetailProgram = async ({ params }: ProgramPageProps) => {
  const { slug } = await params;

  const findProgram = allPrograms.find((program) => program.slug === slug);

  console.log("findProgram", findProgram);
  if (!findProgram) {
    return <div>Program not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-background overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(197 72% 60% / 0.1), hsl(45 98% 59% / 0.1))",
        }}
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Button
            variant="ghost"
            asChild
            className="mb-6 group group-hover:text-white"
          >
            <Link
              href="/programas"
              className="text-secondary-blue group-hover:text-white hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 group-hover:text-white" />
              Volver a programas
            </Link>
          </Button>

          <div className="animate-fade-in text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-blue mb-6">
              Synha Lab
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Laboratorio de Innovación en Salud Mental
            </p>
            <p className="text-lg md:text-xl text-primary font-semibold mb-8">
              Donde la ciencia, la tecnología y la empatía se encuentran.
            </p>
            <Button size="lg" asChild className="text-white">
              <a href="mailto:proyectos@fundacionfeelcolombia.org">
                Colabora con Synha Lab
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ¿Qué es Synha Lab? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-card animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Synha Lab es el laboratorio de innovación de la Fundación Feel
                Colombia, un espacio donde investigadores, profesionales y
                jóvenes con experiencias vividas co-crean soluciones híbridas
                —digitales y presenciales— para fortalecer la salud mental
                individual y colectiva.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Desde Synha Lab exploramos nuevas formas de entender, medir y
                promover el bienestar emocional, combinando evidencia
                científica, diseño tecnológico y participación comunitaria.
                Nuestro propósito es transformar los modelos tradicionales de
                atención en salud mental, haciéndolos más accesibles, humanos y
                sostenibles.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-xl italic text-secondary-blue font-medium">
                  "La innovación en salud mental no ocurre en laboratorios
                  aislados, sino en la intersección entre la ciencia, la
                  tecnología y las voces de quienes viven las experiencias."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Líneas de acción */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-blue mb-12">
            Líneas de acción
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actionLines.map((line, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <line.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-secondary-blue">
                    {line.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {line.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-blue mb-12">
            Cómo funciona Pulso Corporativo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl leading-tight text-secondary-blue">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline visual opcional */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2"></div>
              <div className="relative flex justify-between items-center gap-8 md:gap-16">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-soft animate-scale-in"
                    style={{ animationDelay: `${(num - 1) * 0.15}s` }}
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro impacto */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-blue mb-12">
            Nuestro impacto
          </h2>
          <Card className="shadow-card animate-scale-in bg-gradient-to-br from-primary/5 to-secondary/10">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Synha Lab impulsa entornos más sanos, colaborativos y
                  emocionalmente equilibrados, donde las personas pueden
                  desarrollar todo su potencial humano y social. Creemos que una
                  sociedad emocionalmente estable no solo reduce problemáticas
                  derivadas del malestar —como la desmotivación, el aislamiento
                  o la frustración colectiva—, sino que favorece el
                  florecimiento de comunidades más creativas, productivas y
                  cohesionadas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nuestro trabajo busca generar un equilibrio entre bienestar
                  emocional, innovación social y desarrollo sostenible,
                  entendiendo que cuidar la mente es también cuidar la vitalidad
                  de los sistemas humanos que sostienen a la sociedad.
                </p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-xl italic text-secondary-blue font-medium">
                  "Cuidar la mente es cuidar el futuro de la sociedad."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonio */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card animate-fade-in bg-gradient-to-br from-secondary/10 to-primary/5">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <p className="text-xl md:text-2xl italic text-secondary-blue mb-6 leading-relaxed">
                  "Pulso corporativo nos permitió escuchar lo que nunca se decía
                  en las reuniones. Ahora nuestro equipo tiene espacios seguros
                  para expresar y transformar su día a día."
                </p>
                <p className="text-muted-foreground font-medium">
                  — Gerente de Talento Humano, Empresa Tech
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-blue mb-6">
            Únete a Synha Lab
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Si eres investigador, profesional, estudiante o simplemente alguien
            apasionado por la innovación en salud mental, queremos conocerte.
            Construyamos juntos el futuro del bienestar emocional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Mail className="w-6 h-6 text-primary" />
            <a
              href="mailto:proyectos@fundacionfeelcolombia.org"
              className="text-lg text-primary hover:underline font-medium"
            >
              proyectos@fundacionfeelcolombia.org
            </a>
          </div>
          <Button size="lg" asChild>
            <a
              href="mailto:proyectos@fundacionfeelcolombia.org"
              className="text-white"
            >
              Quiero colaborar con Synha Lab
            </a>
          </Button>

          <p className="text-xl md:text-2xl font-semibold text-primary italic mt-12">
            "Creando espacios donde la ciencia, el arte y el corazón se
            encuentran."
          </p>
        </div>
      </section>
    </div>
  );
};

export default PageDetailProgram;

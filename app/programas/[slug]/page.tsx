/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import imgKids from "@/public/images/children-enjoying.jpg";
import communityParticipation from "@/public/images/community-participation.jpg";
import {
  ArrowLeft,
  BarChart3,
  Beaker,
  FileText,
  Heart,
  Lightbulb,
  Mail,
  MessageCircle,
  Palette,
  QrCode,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import experienceEducativeImage from "@/public/images/experience-educative.jpg";
import emotionalImage from "@/public/images/emotional-well-being.jpg";

import program1 from "@/public/images/collage-program-1.jpg";
import program2 from "@/public/images/collage-program-2.jpg";
import program3 from "@/public/images/collage-program-3.jpg";
import program4 from "@/public/images/collage-program-4.jpg";
import program5 from "@/public/images/collage-program-5.jpg";

import pulso1Image from "@/public/programs/pulso/pulso-1.jpg";
import pulso1Image2 from "@/public/programs/pulso/pulso-2.jpg";
import pulso1Image3 from "@/public/programs/pulso/pulso-3.jpg";
import pulso1Image4 from "@/public/programs/pulso/pulso-4.jpg";
import pulso1Image5 from "@/public/programs/pulso/pulso-5.jpg";
import pulso1Image6 from "@/public/programs/pulso/pulso-6.jpg";

import syna2 from "@/public/images/health-innovation-lab.jpg";
import synaCover from "@/public/programs/syna/syna2.jpg";
import syna1 from "@/public/programs/syna/syna1.jpg";
import syna3 from "@/public/programs/syna/syna3.jpg";
import syna4 from "@/public/programs/syna/syna4.jpg";
import syna5 from "@/public/programs/syna/syna5.jpg";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

const allPrograms = [
  {
    title: "Synha Lab",
    slug: "synha-lab",
    titleCover: "Laboratorio de Innovación en Salud Mental",
    phraseCover: "Donde la ciencia, la tecnología y la empatía se encuentran.",
    buttonText: "Colabora con Synha Lab",
    description:
      "Synha Lab es el laboratorio de innovación de la Fundación Feel Colombia, un espacio donde investigadores, profesionales y jóvenes con experiencias vividas co-crean soluciones híbridas digitales y presenciales para fortalecer la salud mental individual y colectiva. Desde Synha Lab exploramos nuevas formas de entender, medir y promover el bienestar emocional, combinando evidencia científica, diseño tecnológico y participación comunitaria. Nuestro propósito es transformar los modelos tradicionales de atención en salud mental, haciéndolos más accesibles, humanos y sostenibles.",
    phraseDesc:
      "La innovación en salud mental no ocurre en laboratorios aislados, sino en la intersección entre la ciencia, la tecnología y las voces de quienes viven las experiencias.",
    linesOfAction: [
      {
        title: "Investigación aplicada",
        icon: Beaker,
        description:
          "Desarrollamos estudios y proyectos que permiten identificar y analizar índices de riesgo depresivo, ansioso y de psicosis temprana en jóvenes y adultos. A partir de estos hallazgos, diseñamos estrategias preventivas y de acompañamiento que fortalecen la detección oportuna y la resiliencia emocional.",
      },
      {
        title: "Diseño y tecnología",
        icon: Beaker,
        description:
          "Creamos plataformas, prototipos y herramientas digitales que amplifican el acceso a recursos de bienestar emocional, mejoran la alfabetización en salud mental y facilitan la conexión entre comunidades y servicios de apoyo.",
      },
      {
        title: "Participación juvenil",
        icon: Beaker,
        description:
          "Integramos a jóvenes con experiencias vividas en todas las etapas del proceso desde la ideación hasta la validación, reconociendo su voz como fuente esencial de conocimiento para construir soluciones que realmente respondan a las necesidades del territorio.",
      },
      {
        title: "Colaboración institucional y comunitaria",
        icon: Beaker,
        description:
          "Trabajamos junto a alcaldías locales, ediles, instituciones educativas distritales, clubes deportivos y redes comunitarias, fortaleciendo una red intersectorial de cuidado que lleva la innovación emocional a los entornos donde más se necesita.",
      },
      {
        title: "Colaboración internacional",
        icon: Beaker,
        description:
          "Conectamos actores académicos, sociales y tecnológicos de diferentes países para compartir aprendizajes, validar modelos y escalar soluciones sostenibles que integren ciencia y empatía.",
      },
    ],
    howItWorks: [],
    ourImpact: {
      desc: "Synha Lab impulsa entornos más sanos, colaborativos y emocionalmente equilibrados, donde las personas pueden desarrollar todo su potencial humano y social. Creemos que una sociedad emocionalmente estable no solo reduce problemáticas derivadas del malestar como la desmotivación, el aislamiento o la frustración colectiva, sino que favorece el florecimiento de comunidades más creativas, productivas y cohesionadas. Nuestro trabajo busca generar un equilibrio entre bienestar emocional, innovación social y desarrollo sostenible, entendiendo que cuidar la mente es también cuidar la vitalidad de los sistemas humanos que sostienen a la sociedad.",
      phrase: "Cuidar la mente es cuidar el futuro de la sociedad.",
    },
    testimonials: [],
    infoContact: {
      title: "Únete a Synha Lab",
      desc: "Si eres investigador, profesional, estudiante o simplemente alguien apasionado por la innovación en salud mental, queremos conocerte. Construyamos juntos el futuro del bienestar emocional.",
      buttonText: "Quiero colaborar con Synha Lab",
    },
    imgCover: synaCover,
    imageLeft: [syna2, syna3],
    imageCenter: [syna5],
    imageRight: [syna4, syna1],
  },
  {
    title: "Aula Viva",
    slug: "aula-viva",
    titleCover:
      "Una experiencia educativa y artística para sentir, conectar y sanar.",
    phraseCover: "Donde la ciencia, la tecnología y la empatía se encuentran.",
    buttonText: "Quiero llevar Aula Viva a mi colegio",
    description:
      "Aula Viva es un programa interdisciplinario que combina psicología, arte y educación para transformar el aula en un espacio de bienestar emocional. A través de talleres vivenciales, acompañamos a estudiantes, docentes y familias en procesos de autoconocimiento, expresión emocional y construcción de comunidad.",
    phraseDesc:
      "Cuando el aula se convierte en un espacio vivo, las emociones se transforman en aprendizaje.",
    linesOfAction: [],
    howItWorks: [],
    ourImpact: null,
    testimonials: [],
    infoContact: {
      title: "Inversión y contacto",
      desc: "Cotiza Aula Viva para tu institución educativa y transforma el bienestar emocional de tu comunidad escolar.",
      buttonText: "Cotizar programa",
    },
    team: [
      "Psicólogos clínicos",
      "Artistas y pedagogos",
      "Investigadores sociales",
    ],
    include: [
      {
        title: "Taller psicoeducativo",
        desc: "Sesiones guiadas por psicólogos para explorar emociones, autoconocimiento y herramientas de regulación emocional.",
        icon: Heart,
      },
      {
        title: "Taller artístico",
        desc: "Expresión creativa a través de pintura, música, escritura y otras disciplinas como canal de sanación emocional.",
        icon: Palette,
      },
      {
        title: "Taller para padres",
        desc: "Espacios de formación y acompañamiento para familias, reforzando el bienestar emocional desde casa.",
        icon: Users,
      },
      {
        title: "Informe institucional",
        desc: "Entrega de resultados, análisis emocional del grupo y recomendaciones para el seguimiento escolar.",
        icon: FileText,
      },
    ],
    imgCover: experienceEducativeImage,
    imageLeft: [program1, program2],
    imageCenter: [program5],
    imageRight: [program4, program3],
  },
  {
    title: "Pulso Corporativo",
    slug: "pulso-corporativo",
    titleCover:
      "Bienestar emocional con tecnología humana (sin apps, sin fricción).",
    phraseCover: "Donde la ciencia, la tecnología y la empatía se encuentran.",
    buttonText: "Solicitar diagnóstico gratuito",
    description:
      "Pulso Corporativo es un programa de bienestar emocional diseñado para transformar el clima organizacional desde la escucha activa y el acompañamiento continuo. Sin aplicaciones complejas, sin interferir con la operación diaria. Solo tecnología humana que funciona.",
    phraseDesc: "Cuando las emociones fluyen, los equipos prosperan.",
    linesOfAction: [],
    howItWorks: [
      {
        title: "Encuesta emocional anónima (QR semanal)",
        description:
          "Medición semanal del estado emocional del equipo a través de un QR rápido y anónimo. Sin aplicaciones, sin fricción.",
        icon: QrCode,
      },
      {
        title: "Círculos emocionales y cápsulas digitales",
        description:
          "Espacios de conversación facilitados por psicólogos y contenidos digitales de bienestar emocional personalizados.",
        icon: MessageCircle,
      },
      {
        title: "Tableros visuales (Feel Dashboard)",
        description:
          "Panel de visualización del clima emocional organizacional con datos en tiempo real y tendencias.",
        icon: BarChart3,
      },
      {
        title: "Acompañamiento continuo",
        description:
          "Seguimiento constante por parte de nuestro equipo interdisciplinario con ajustes según las necesidades del equipo.",
        icon: Heart,
      },
    ],
    ourImpact: null,
    testimonials: [
      {
        desc: "Pulso corporativo nos permitió escuchar lo que nunca se decía en las reuniones. Ahora nuestro equipo tiene espacios seguros para expresar y transformar su día a día.",
        nameTestiomanial: "Gerente de Talento Humano, Empresa Tech",
        id: 1,
      },
    ],
    infoContact: {
      title: "Solicita un diagnóstico gratuito",
      desc: "Solicita un diagnóstico gratuito de tu clima emocional y recibe un ejemplo del Feel Dashboard personalizado para tu organización.",
      buttonText: "Solicitar diagnóstico gratuito",
    },
    imgCover: pulso1Image,
    imageLeft: [pulso1Image2, pulso1Image3],
    imageCenter: [pulso1Image5],
    imageRight: [pulso1Image4, pulso1Image6],
  },
];

export async function generateStaticParams() {
  const findProgrma = allPrograms.map((program) => ({ slug: program.slug }));
  return findProgrma;
}

const PageDetailProgram = async ({ params }: ProgramPageProps) => {
  const { slug } = await params;

  const findProgram = allPrograms.find((program) => program.slug === slug);

  if (!findProgram) {
    return <div>Program not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="diagonal-stripes"></div>

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
              {findProgram.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {findProgram.titleCover}
            </p>
            <p className="text-lg md:text-xl text-primary font-semibold mb-8">
              {findProgram.phraseCover}
            </p>
            <Button size="lg" className="text-white">
              <a
                href="https://mail.google.com/mail/?view=cm&to=proyectos@fundacionfeelcolombia.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                {findProgram.buttonText}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ¿Qué es? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-card animate-scale-in ">
            <CardContent className="p-8 md:px-12 md:py-4 flex flex-col">
              <div className=" bg-muted rounded-lg overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300">
                <Image
                  src={findProgram.imgCover}
                  alt="Ilustración de bienestar emocional"
                  className="w-full object-cover h-[400px]"
                />
              </div>
              <div className="mt-6">
                <p className=" text-muted-foreground leading-relaxed mb-6 prose prose-lg prose-slate max-w-none">
                  {findProgram.description}
                </p>

                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-xl italic text-secondary-blue font-medium">
                    "{findProgram.phraseDesc}"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Equipo interdisciplinario */}
      {findProgram.team && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-blue mb-12">
              Equipo interdisciplinario
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {findProgram.team.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Avatar className="w-24 h-24 md:w-32 md:h-32 mb-4 border-4 border-primary/20">
                    <AvatarImage src="/placeholder.svg" alt={member} />
                    <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                      {member.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-lg font-semibold text-secondary-blue">
                    {member}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Collage Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center max-w-6xl mx-auto">
          {/* Left Column - Two Images Stacked */}
          <div className="flex flex-col gap-4 md:gap-6 ">
            {findProgram.imageLeft.map((img, index) => (
              <div
                className="h-64 md:h-56 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                key={index}
              >
                <Image
                  src={img}
                  alt="Ilustración de bienestar emocional"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Center - Main Large Image */}
          <div className="md:col-span-1 order-first md:order-none">
            <div className="h-full rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={findProgram.imageCenter[0]}
                alt="Ilustración de bienestar emocional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Two Images Stacked */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Top Right Image */}
            <div className="h-64 md:h-56 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={findProgram.imageRight[0]}
                alt="Ilustración de bienestar emocional"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="h-64 md:h-56 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={findProgram.imageRight[1]}
                alt="Ilustración de bienestar emocional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué incluye Aula Viva? */}
      {findProgram.include && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-blue mb-12">
              ¿Qué incluye Aula Viva?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {findProgram.include.map((component, index) => (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <component.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-secondary-blue">
                      {component.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {component.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Líneas de acción */}
      {findProgram.linesOfAction.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-blue mb-12">
              Líneas de acción
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {findProgram.linesOfAction.map((line, index) => (
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
      )}

      {findProgram.howItWorks.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-blue mb-12">
              Cómo funciona Pulso Corporativo
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {findProgram.howItWorks.map((step, index) => (
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
                  {findProgram.howItWorks.map((step, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-soft animate-scale-in"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Nuestro impacto */}
      {findProgram.ourImpact && (
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

                  <p className="prose prose-lg prose-slate max-w-none text-muted-foreground">
                    {findProgram.ourImpact.desc}
                  </p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-xl italic text-secondary-blue font-medium">
                    "{findProgram.ourImpact.phrase}"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Testimonio */}
      {findProgram.testimonials.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          {findProgram.testimonials.map((prom) => (
            <div className="max-w-4xl mx-auto" key={prom.id}>
              <Card className="shadow-card animate-fade-in bg-gradient-to-br from-secondary/10 to-primary/5">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <Heart className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-xl md:text-2xl italic text-secondary-blue mb-6 leading-relaxed">
                      "{prom.desc}"
                    </p>
                    <p className="text-muted-foreground font-medium">
                      — {prom.nameTestiomanial}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </section>
      )}

      {/* CTA final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-blue mb-6">
            {findProgram.infoContact.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {findProgram.infoContact.desc}
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
          <Button size="lg">
            <a
              href="https://mail.google.com/mail/?view=cm&to=proyectos@fundacionfeelcolombia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              {findProgram.infoContact.buttonText}
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

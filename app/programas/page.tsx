/* eslint-disable react/no-unescaped-entities */
import { ItemProgram } from "./components/ItemProgram";
import experienceEducativeImage from "@/public/images/experience-educative.jpg";
import pulso1Image from "@/public/programs/pulso/pulso-1.jpg";
import synaConver from "@/public/programs/syna/syna2.jpg";
import healthInnovationLab from "@/public/images/health-innovation-lab.jpg";

const jsonPrograms = [
  {
    title: "Aula Viva",
    description:
      "Una experiencia educativa y artística para sentir, conectar y sanar. Transformamos el aula en un espacio vivo donde las emociones se convierten en aprendizaje.",
    image: experienceEducativeImage,
    alt: "Aula Viva - Bienestar emocional escolar",
    link: "/programas/aula-viva",
    id: 1,
  },
  {
    title: "Pulso Corporativo",
    description:
      "Bienestar emocional con tecnología humana (sin apps, sin fricción). Acompañamos a los equipos de trabajo hacia una cultura de bienestar sostenible.",
    image: pulso1Image,
    alt: "Pulso Corporativo - Bienestar laboral",
    link: "/programas/pulso-corporativo",
    id: 2,
  },
  {
    title: "Synha Lab",
    description:
      "Laboratorio de innovación en salud mental donde la ciencia, la tecnología y la empatía se encuentran para co-crear soluciones transformadoras.",
    image: synaConver,
    alt: "Synha Lab - Innovación en salud mental",
    link: "/programas/synha-lab",
    id: 3,
  },
];

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="diagonal-stripes"></div>
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section
          className="py-16 sm:py-24 px-4 bg-gradient-hero"
          style={{
            background:
              "linear-gradient(135deg, hsl(197 72% 60% / 0.1), hsl(45 98% 59% / 0.1))",
          }}
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-blue mb-6 animate-fade-in">
              Nuestros Programas
            </h1>
            <p className="text-lg sm:text-xl text-secondary-blue/80 mb-8 animate-fade-in">
              Descubre nuestras experiencias educativas y corporativas para el
              bienestar emocional.
            </p>
          </div>
        </section>

        {/* Programas Cards Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jsonPrograms.map((program) => (
                <ItemProgram key={program.id} program={program} />
              ))}
            </div>

            {/* Quote Section */}
            <div className="mt-20 text-center animate-fade-in">
              <p className="text-2xl md:text-3xl font-semibold text-primary italic max-w-4xl mx-auto">
                "Creando espacios donde la ciencia, el arte y el corazón se
                encuentran."
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProgramsPage;

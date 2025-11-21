import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import andresImage from "@/public/team-images/andres-image.jpeg";
import anyesonImage from "@/public/team-images/anyeson.jpeg";
import camilaImage from "@/public/team-images/camila.jpeg";
import eduadoImage from "@/public/team-images/eduardo.jpg";
import Image from "next/image";

const teamMembers = [
  {
    name: "Camila de la Hoz",
    role: "Cofundadora de Feel Colombia, convirtió su experiencia con la ansiedad en una misión: promover el bienestar emocional a través de proyectos que unen ciencia, tecnología y empatía.",
    initials: "CH",
    avatar: camilaImage,
  },
  {
    name: "Andrés Sanabria",
    role: "Cofundador de Feel Colombia y referente en nuestras acciones sociales. Su experiencia acompañando personas en crisis emocionales motivó la creación de espacios seguros para quienes enfrentan ansiedad o rupturas afectivas. Desde su formación en administración pública aporta una visión humana que impulsa iniciativas como Synha Lab y los programas presenciales.",
    initials: "AS",
    avatar: andresImage,
  },
  {
    name: "Anyerson Pacheco",
    role: "Psicólogo e investigador en intervención psicosocial y contextos vulnerables. Director de proyectos de transformación y reconocido como Joven Investigador por MinCiencias.",
    initials: "AP",
    avatar: anyesonImage,
  },

  {
    name: "Andrés Eduardo Zarabanda Ducuara",
    role: "Psicólogo, magíster en Psicología Clínica e Intervención en Crisis.",
    initials: "CM",
    avatar: eduadoImage,
  },
];

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section
          className="py-16 sm:py-24 px-4 bg-gradient-hero overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(197 72% 60% / 0.1), hsl(45 98% 59% / 0.1))",
          }}
        >
          <div className="diagonal-stripes"></div>

          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-blue mb-6 animate-fade-in">
              Nuestro equipo
            </h1>
            <p className="text-lg sm:text-xl text-secondary-blue/80 mb-8 animate-fade-in">
              Personas que transforman desde la experiencia y la empatía.
            </p>
          </div>
        </section>

        {/* Team Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="shadow-card animate-scale-in">
              <CardContent className="p-8 sm:p-12">
                <p className="text-base sm:text-lg text-secondary-blue/90 leading-relaxed mb-6">
                  Feel Colombia nació del encuentro entre dos visiones
                  complementarias: la emocional y la científica. Nuestros
                  fundadores,{" "}
                  <span className="font-semibold text-primary">
                    Yeison Andrés Sanabria Garavito
                  </span>{" "}
                  y{" "}
                  <span className="font-semibold text-primary">
                    Camila de la Hoz
                  </span>
                  , crearon esta fundación con la convicción de que la salud
                  mental debe vivirse con propósito, innovación y cercanía.
                  Juntos lideran un equipo interdisciplinario que une
                  psicología, tecnología, arte y educación para diseñar
                  soluciones reales para el bienestar emocional.
                </p>
                <p className="text-lg sm:text-xl font-semibold text-primary italic text-center mt-8">
                  "Creemos en el poder de las personas para sanar, crear y
                  transformar su historia."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary-blue mb-12">
              Conoce a nuestro equipo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-soft transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Avatar className="w-32 h-32 mb-4">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </Avatar>
                    <h3 className="text-lg font-semibold text-secondary-blue mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborations Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-blue mb-4">
                Aliados y colaboraciones
              </h2>
              <p className="text-lg text-secondary-blue/80">
                Crecemos junto a quienes creen en la transformación humana.
              </p>
            </div>

            <Card className="shadow-card animate-scale-in">
              <CardContent className="p-8 sm:p-12">
                <p className="text-base sm:text-lg text-secondary-blue/90 leading-relaxed mb-6">
                  En Feel Colombia entendemos que el cambio real sucede cuando
                  las ideas se unen. Por eso colaboramos con instituciones,
                  investigadores, artistas y organizaciones que comparten
                  nuestra visión de un bienestar emocional más humano, accesible
                  y conectado con la tecnología. Cada alianza es una oportunidad
                  para crear conocimiento, abrir espacios de experimentación y
                  construir proyectos que impacten vidas.
                </p>
                <p className="text-lg sm:text-xl font-semibold text-primary italic text-center mt-8">
                  "Juntos diseñamos el futuro de la salud mental."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurTeam;

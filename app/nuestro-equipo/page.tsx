import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Yeison Andrés Sanabria Garavito",
    role: "Co-fundador",
    initials: "YS",
    avatar: "/placeholder.svg",
  },
  {
    name: "Camila de la Hoz",
    role: "Co-fundadora",
    initials: "CH",
    avatar: "/placeholder.svg",
  },
  {
    name: "Dr. Carlos Mendoza",
    role: "Director de Psicología",
    initials: "CM",
    avatar: "/placeholder.svg",
  },
  {
    name: "Ana María Torres",
    role: "Líder de Innovación",
    initials: "AT",
    avatar: "/placeholder.svg",
  },
  {
    name: "Santiago Ruiz",
    role: "Director de Tecnología",
    initials: "SR",
    avatar: "/placeholder.svg",
  },
  {
    name: "Laura Gómez",
    role: "Coordinadora de Comunidad",
    initials: "LG",
    avatar: "/placeholder.svg",
  },
];

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
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
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-gray-100 text-secondary-blue text-xl">
                        {member.initials}
                      </AvatarFallback>
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

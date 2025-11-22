/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { getTeam } from "@/lib/strapi";

export async function generateMetadata() {
  const strapiData = await getTeam(); // 1.
  return strapiData;
}

const OurTeam = async () => {
  const strapiData = await getTeam(); // 2.

  const { team, history, phrase } = strapiData || {};

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
                  {history}
                </p>
                <p className="text-lg sm:text-xl font-semibold text-primary italic text-center mt-8">
                  "{phrase}"
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
            {team && team?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member: any, index: number) => {
                  return (
                    <Card
                      key={member.id}
                      className="shadow-card hover:shadow-soft transition-shadow duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Avatar className="w-32 h-32 mb-4">
                          <img
                            src={member.img.url}
                            alt="Evento Feel Colombia"
                            width={500} // Dimensiones Fijas
                            height={300} // Dimensiones Fijas
                            className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
                          />
                        </Avatar>
                        <h3 className="text-lg font-semibold text-secondary-blue mb-2">
                          {member.fullName}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {member.career}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-secondary-blue">
                No hay miembros del equipo disponibles en este momento.
              </p>
            )}
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

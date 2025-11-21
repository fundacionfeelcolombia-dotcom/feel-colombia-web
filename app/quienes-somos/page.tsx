import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import imgKids from "@/public/images/children-enjoying.jpg";
import collage1Image from "@/public/images/collage-1.jpg";
import collage2Image from "@/public/images/collage-2.jpg";
import collage3Image from "@/public/images/collage-3.jpg";
import collage4Image from "@/public/images/collage-4.jpg";
import communityIntervention from "@/public/images/community-intervention.jpg";
import peopleExperience from "@/public/images/people-experience.jpg";
import { Heart, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WhoWeArePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="diagonal-stripes"></div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-blue mb-6">
                Transformamos la salud mental en una experiencia viva.
              </h1>
              <p className="text-lg text-secondary-blue-foreground mb-8 leading-relaxed">
                En Feel Colombia creemos que el bienestar emocional no se
                enseña, se vive. Somos una fundación que combina ciencia, arte y
                tecnología para crear nuevas formas de sanar, conectar y crecer.
                Desde el laboratorio de innovación Synha Lab, impulsamos
                proyectos que desafían los modelos tradicionales de salud
                mental, poniendo al ser humano y su historia en el centro de
                todo.
              </p>
            </div>

            <div className="animate-scale-in">
              <figure className="relative aspect-square rounded-2xl shadow-card overflow-hidden">
                <Image
                  src={imgKids}
                  alt="Ilustración de bienestar emocional"
                  className="relative z-10 w-full h-auto rounded-2xl object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-blue mb-12">
            Aprende más sobre nosotros
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="animate-fade-in hover:shadow-card transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-deep-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-deep-blue" />
                </div>
                <CardTitle className="text-2xl text-secondary-blue">
                  Nuestra misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-blue-foreground leading-relaxed">
                  Reimaginar la salud mental desde la conexión humana y la
                  innovación. En Feel Colombia acompañamos procesos que integran
                  ciencia, tecnología y sensibilidad social para crear espacios
                  donde las personas puedan comprenderse, reconstruirse y
                  transformar su entorno emocional.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover:shadow-card transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-warm-yellow/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-warm-yellow" />
                </div>
                <CardTitle className="text-2xl text-secondary-blue">
                  Nuestra visión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary-blue-foreground leading-relaxed">
                  Ser un movimiento que redefine cómo el mundo entiende y vive
                  la salud mental. Inspirar una nueva cultura de bienestar,
                  donde cada experiencia humana o digital despierte conciencia,
                  empatía y evolución colectiva.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Grid de 4 imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in mb-16">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300">
              <Image
                src={collage2Image}
                alt="Ilustración de bienestar emocional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300">
              <Image
                src={collage3Image}
                alt="Ilustración de bienestar emocional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300">
              <Image
                src={collage4Image}
                alt="Ilustración de bienestar emocional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300">
              <Image
                src={collage1Image}
                alt="Ilustración de bienestar emocional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-blue mb-6">
            Impacto
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-8">
            Lo que hacemos deja huella.
          </p>

          <Card className="shadow-card animate-scale-in ">
            <CardContent
              className="p-8 md:p-12 grid gap-8 flex flex-col md:grid"
              style={{
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <div className=" bg-muted rounded-lg overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300">
                <Image
                  src={communityIntervention}
                  alt="Ilustración de bienestar emocional"
                  className="w-full object-cover"
                />
              </div>

              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Nuestro trabajo combina investigación, intervención
                  comunitaria y desarrollo tecnológico para transformar la forma
                  en que las personas se relacionan con su salud emocional. A
                  través de programas, experiencias digitales y proyectos
                  colaborativos, acompañamos procesos de cambio que promueven
                  empatía, autoconocimiento y resiliencia.
                </p>
                <p className="text-xl font-semibold text-primary italic text-start">
                  Cada historia transformada es una prueba de que el bienestar
                  emocional puede ser una realidad colectiva.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Historias que inspiran Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-blue mb-6">
            Historias que inspiran
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            La transformación se siente.
          </p>

          <div className="mb-12">
            <Card className="shadow-card animate-fade-in">
              <CardContent
                className="p-8 md:p-12 flex flex-col md:grid gap-8"
                style={{
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Cada proceso, cada encuentro y cada experiencia dentro de
                    Feel Colombia deja una marca real. Son historias de personas
                    que decidieron mirar hacia adentro, reconectarse y
                    redescubrir su fuerza emocional. Aquí compartimos algunas de
                    esas voces que nos recuerdan por qué hacemos lo que hacemos.
                  </p>

                  <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary mb-8">
                    <p className="text-lg italic text-secondary-blue/90 mb-2">
                      "Llegué buscando respuestas y encontré una nueva forma de
                      entenderme."
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — Participante del programa Synha Lab
                    </p>
                  </div>

                  <p className="text-xl font-semibold text-primary italic text-start">
                    El bienestar emocional no se enseña, se contagia.
                  </p>
                </div>

                <div className=" bg-muted rounded-lg overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300">
                  <Image
                    src={peopleExperience}
                    alt="Ilustración de bienestar emocional"
                    className="w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Want to Know More Section */}
          <div
            className="text-center bg-gradient-primary rounded-2xl p-12 shadow-card animate-scale-in"
            style={{
              background:
                "linear-gradient(135deg, hsl(197 100% 44%), hsl(197 72% 60%))",
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Quieres saber más?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos y descubre cómo puedes ser parte de esta
              transformación.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-deep-blue hover:bg-white/90 cursor-pointer"
            >
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeArePage;

import { Button } from "@/components/ui/button";
import experienceEducativeImage from "@/public/images/experience-educative.jpg";
import imgLanding from "@/public/images/img-landing.jpg";
import { Calendar, Clock, Users } from "lucide-react";
import Image from "next/image";

export const EventsHomePage = () => {
  return (
    <>
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative group   flex-col gap-y-6 hidden lg:flex">
              <div className="absolute -inset-1 text-secondary-blue rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <Image
                src={imgLanding}
                alt="Evento Elegancia 2025"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
              <Image
                src={imgLanding}
                alt="Evento Elegancia 2025"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-4 text-secondary-blue ">
                  Campañas relámpago
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(197 100% 44%), hsl(197 72% 60%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                    }}
                  >
                    {" "}
                    por una causa 2025
                  </span>
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Una experiencia única para celebrar nuestro impacto
                  comunitario
                </p>
              </div>

              {/* Event Details */}
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Calendar className="w-6 h-6 text-secondary-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-secondary-blue">
                      Viernes, 5 de Diciembre de 2025
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Ubicación por anunciar
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-secondary-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-secondary-blue">
                      6:00 PM - 10:00 PM
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Una velada de celebración y conexión
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Users className="w-6 h-6 text-secondary-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-secondary-blue">
                      Experiencia Exclusiva
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Evento privado con vista a la ciudad
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 pt-4 border-t border-border">
                <p className="text-secondary-blue-foreground leading-relaxed">
                  La{" "}
                  <span className="font-semibold">
                    Tercera Edición de Noche de Gala
                  </span>{" "}
                  es un evento único de recaudación de fondos organizado por
                  nuestros patrocinadores principales.
                </p>

                <p className="text-secondary-blue-foreground leading-relaxed">
                  Este año recaudamos fondos para apoyar a familias jóvenes y
                  proveedores de cuidado infantil en toda nuestra comunidad.
                </p>

                <p className="text-secondary-blue-foreground leading-relaxed">
                  En verdadero espíritu de misterio, la ubicación es secreto
                  (¡por ahora!), pero la única forma de descubrirla es{" "}
                  <span className="font-semibold">
                    comprando tus entradas hoy
                  </span>
                  .
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-secondary-blue cursor-pointer text-white font-semibold px-8 py-6 rounded-lg shadow-lg"
                >
                  Obtener Entradas
                </Button>
              </div>
            </div>

            <div className="relative group   flex-col gap-y-6 flex lg:hidden">
              <div className="absolute -inset-1 text-secondary-blue rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <Image
                src={imgLanding}
                alt="Evento Elegancia 2025"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
              <Image
                src={imgLanding}
                alt="Evento Elegancia 2025"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4  bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-4 text-secondary-blue ">
                  Fiestas en{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(197 100% 44%), hsl(197 72% 60%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                    }}
                  >
                    {" "}
                    Feel Colombia
                  </span>
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Una experiencia única para celebrar nuestro impacto
                  comunitario
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4 pt-4 border-t border-border">
                <p className="text-secondary-blue-foreground leading-relaxed">
                  Las fiestas son una época especial del año en The Children’s
                  Cabinet. Si deseas ayudar a que esta temporada sea más alegre
                  para las familias de nuestra comunidad, haz clic en el botón
                  Adoptar una Familia a continuación.
                </p>
                <p className="text-secondary-blue-foreground leading-relaxed">
                  Nuestro registro para la Mesa de Juguetes está actualmente
                  completo. Por favor, vuelve a revisar el 24 de noviembre de
                  2025 para saber si el registro volverá a abrir durante esta
                  temporada navideña.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative group flex flex-col gap-y-6 h-full">
              <div className="absolute -inset-1 text-secondary-blue rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <Image
                src={experienceEducativeImage}
                alt="Evento Elegancia 2025"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

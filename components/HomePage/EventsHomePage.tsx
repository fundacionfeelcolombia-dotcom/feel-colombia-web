import donation from "@/public/images/donation.jpg";
import donationCyclie from "@/public/images/donation-cycle.jpg";
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
                src={donation}
                alt="Evento Elegancia 2025"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
              <Image
                src={donationCyclie}
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
                  Impulsa una Sonrisa: Jornada de Donación y Bienestar
                  Comunitario
                </p>
              </div>

              {/* Event Details */}
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Calendar className="w-6 h-6 text-secondary-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-secondary-blue">
                      Domingo, 7 de Diciembre de 2025
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
                      10:00 AM
                    </p>
                    <p className="text-muted-foreground text-sm">Evento</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 pt-4 border-t border-border">
                <p className="text-secondary-blue-foreground leading-relaxed">
                  <span className="font-semibold">Impulsa una Sonrisa</span>{" "}
                </p>

                <p className="text-secondary-blue-foreground leading-relaxed">
                  Te invitamos a participar en nuestro evento de donación
                  organizado por Feel Colombia. Será una jornada dedicada a
                  fortalecer el bienestar de padres y jóvenes a través de un
                  taller psicoemocional, acompañado de rifas de mercado y otras
                  actividades pensadas para la comunidad. Tu participación
                  ayudará a seguir construyendo espacios seguros y de apoyo para
                  quienes más lo necesitan.
                </p>
              </div>
            </div>

            <div className="relative group   flex-col gap-y-6 flex lg:hidden">
              <div className="absolute -inset-1 text-secondary-blue rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <Image
                src={donation}
                alt="Evento Elegancia 2025"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
              <Image
                src={donationCyclie}
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

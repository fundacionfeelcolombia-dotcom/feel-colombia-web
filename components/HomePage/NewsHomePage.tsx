import { ArrowRight } from "lucide-react";
import experienceEducativeImage from "@/public/images/experience-educative.jpg";
import Image from "next/image";

const events = [
  {
    id: 1,
    date: "17",
    month: "NOV",
    title: "Promoviendo Alfabetización Emocional",
    description:
      "Clases interactivas diseñadas para desarrollar habilidades emocionales en niños y familias.",
    bannerColor: "bg-pink-600",
    bannerTitle: "Clases para Padres",
    image: "/padres-e-hijos-jugando-actividades-educativas-emoc.jpg",
  },
  {
    id: 2,
    date: "18",
    month: "NOV",
    title: "Preparando el Escenario para la Inclusión",
    description:
      "Formación especializada para educadores sobre inclusión y diversidad en espacios educativos.",
    bannerColor: "bg-blue-600",
    bannerTitle: "Capacitación",
    image: "/ni-os-felices-en-la-escuela-entrada-del-colegio.jpg",
  },
  {
    id: 3,
    date: "18",
    month: "NOV",
    title: "Enseñando Habilidades Sociales y Emocionales",
    description:
      "Talleres prácticos para fortalecer la inteligencia emocional y conexiones interpersonales.",
    bannerColor: "bg-cyan-500",
    bannerTitle: "Capacitación",
    image: "/ni-os-peque-os-sonriendo-cuidado-infantil-desarrol.jpg",
  },
];

export const NewsHomePage = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-secondary-blue mb-4">
          Eventos y Clases
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
      </div>

      {/* Decorative colored bar at top */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col group">
              {/* Card Container */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100 h-64">
                  <Image
                    src={experienceEducativeImage}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-3 left-3 bg-white bg-opacity-95 rounded p-2 text-center min-w-12">
                    <div className="text-xs font-bold text-secondary-blue uppercase tracking-wider">
                      {event.month}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {event.date}
                    </div>
                  </div>

                  {/* Banner */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 ${event.bannerColor} text-white px-4 py-3`}
                  >
                    <h3 className="font-bold text-lg">{event.bannerTitle}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-secondary-blue mb-3 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {event.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center text-secondary-blue font-semibold uppercase text-sm tracking-wide hover:text-secondary-blue/70 transition-colors"
                  >
                    Más Información
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

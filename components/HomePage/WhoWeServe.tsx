import Image from "next/image";
import experienceEducativeImage from "@/public/images/experience-educative.jpg";
import empresasImage from "@/public/images/empresas.jpg";
import familyImage from "@/public/images/familia.jpg";
import youngsImages from "@/public/images/jovenes.jpg";
import kidsImage from "@/public/images/kids-playing.jpg";

const categories = [
  {
    id: "parents",
    title: "Padres",
    description:
      "Acceso a recursos gratuitos, clases de paternidad, asistencia psicosocial y mucho más para acompañar y fortalecer a tu familia.",
    image: familyImage,
    overlay: "from-rose-600/80 to-pink-600/60",
  },
  {
    id: "youth",
    title: "Jóvenes",
    description:
      "Desde desarrollo laboral hasta Calle Segura y alcance comunitario, estamos aquí para ti en cada paso.",
    image: youngsImages,
    overlay: "from-purple-600/80 to-indigo-600/60",
  },
  {
    id: "providers",
    title: "Colegios",
    description:
      "Apoyando a educadores y cuidadores con desarrollo profesional.",
    image: kidsImage,
    overlay: "from-blue-600/80 to-cyan-600/60",
  },
  {
    id: "businesses",
    title: "Empresas",
    description:
      "Nos enorgullece servir a esta comunidad y sus empresas que apoyan a las familias.",
    image: empresasImage,
    overlay: "from-teal-600/80 to-emerald-600/60",
  },
];

export const WhoWeServe = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary-blue mb-4">
            A Quién Servimos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-[500px]"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-100 transition-transform duration-300"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-b ${category.overlay} transition-opacity duration-300 group-hover:opacity-70`}
              />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-end">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-white/95 leading-relaxed text-sm">
                  {category.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

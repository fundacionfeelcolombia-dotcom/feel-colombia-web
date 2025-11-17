import { Heart, Users, TrendingUp, Gift } from "lucide-react";

const stats = [
  {
    icon: Heart,
    value: "$24,775,551",
    label: "Apoyo de Subsidios Otorgado",
    description:
      "Para ayudar a familias a acceder a cuidado infantil de calidad",
  },
  {
    icon: Users,
    value: "22,632",
    label: "Servicios y Referrales",
    description: "Proporcionados a nuestros clientes",
  },
  {
    icon: TrendingUp,
    value: "280",
    label: "Familias Asistidas",
    description: "En sesiones de consejería familiar gratuita",
  },
  {
    icon: Gift,
    value: "3,631",
    label: "Proveedores Capacitados",
    description: "Para mejorar la calidad del cuidado infantil",
  },
];

export const StatsHomePage = () => {
  return (
    <section className="bg-secondary-blue py-16 px-4 sm:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-3xl sm:text-4xl font-bold mb-16 text-balance">
          Nuestro Impacto
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center text-white flex flex-col items-center"
              >
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-6 hover:bg-white/30 transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-3 text-white">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold mb-2 leading-snug">
                  {stat.label}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-white/80 text-sm mt-12">
          *Del 1 de julio, 2023 - 30 de junio, 2024
        </p>
      </div>
    </section>
  );
};

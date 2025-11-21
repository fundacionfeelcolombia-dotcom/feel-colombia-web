import { HeartPlus, Speech } from "lucide-react";

const features = [
  {
    icon: HeartPlus,
    title: "Apoyo Emocional",
    description:
      "Recursos especializados y herramientas diseñadas para fortalecer la salud mental de niños y jóvenes en su día a día.",
  },
  {
    icon: Speech,
    title: "Comunidad Conectada",
    description:
      "Espacios seguros donde jóvenes pueden compartir experiencias, encontrar apoyo y construir conexiones significativas.",
  },
  {
    icon: HeartPlus,
    title: "Innovación Social",
    description:
      "Tecnología al servicio del bienestar, combinando educación digital con estrategias de innovación social efectivas.",
  },
];

export const Features = () => {
  return (
    <section id="recursos" className="pt-16 sm:pt-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-secondary-blue">
            Construyendo{" "}
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
              bienestar juntos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestra plataforma integra apoyo emocional, comunidad y tecnología
            para crear un ecosistema de bienestar integral.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-card hover-lift border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mb-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {
                  <feature.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors" />
                }
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-secondary-blue">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

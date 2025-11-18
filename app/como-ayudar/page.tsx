import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Heart, Users } from "lucide-react";

const HowCanHelp = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="diagonal-stripes"></div>
      <main className="pt-16 md:pt-20">
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
              ¿Cómo puedes ayudar?
            </h1>
            <p className="text-lg sm:text-xl text-secondary-blue/80 mb-8 animate-fade-in">
              Sección destinada a explicar las formas en que el usuario puede
              contribuir, colaborar o participar, detallando el tipo de apoyo
              esperado y el valor que aporta.
            </p>
          </div>
        </section>

        {/* Cards Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Bicicleta de Impulso */}
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300" />

                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6 inline-flex rounded-full bg-primary/20 p-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>

                  {/* Number */}
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-primary">
                      01
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-secondary-blue">
                    Dona una bicicleta de impulso
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Impulsa una sonrisa en niños y niñas entre 2 y 5 años en
                    situación vulnerable.
                  </p>

                  {/* Benefits */}
                  <div className="mb-6 space-y-3">
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 rounded-full bg-primary/20 p-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-secondary-blue">
                        Fortalece equilibrio y confianza
                      </span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 rounded-full bg-primary/20 p-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-secondary-blue">
                        Fomenta actividad física saludable
                      </span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 rounded-full bg-primary/20 p-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-secondary-blue">
                        Fortalece autoestima y bienestar
                      </span>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="mb-8 rounded-lg bg-primary/10 p-4">
                    <p className="text-sm text-muted-foreground">
                      Tu donación:
                    </p>
                    <p className="text-lg font-bold text-primary">
                      $100.000 COP (≈ USD 26.80)
                    </p>
                  </div>

                  {/* Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold group/btn cursor-pointer">
                    Quiero donar
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Card 2: Adopta Hogar o Colegio */}
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 md:mt-8">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/5 group-hover:from-green-500/20 group-hover:to-green-500/10 transition-all duration-300" />

                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6 inline-flex rounded-full bg-green-500/20 p-4">
                    <Users className="w-8 h-8 text-green-500" />
                  </div>

                  {/* Number */}
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-green-500">
                      02
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-secondary-blue">
                    Adopta un hogar o colegio
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Transforma comunidades educativas vulnerables implementando
                    programas de prevención y educación emocional.
                  </p>

                  {/* Benefits */}
                  <div className="mb-6 space-y-3">
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 rounded-full bg-green-500/20 p-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <span className="text-sm text-secondary-blue">
                        Prevención de suicidio juvenil
                      </span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 rounded-full bg-green-500/20 p-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <span className="text-sm text-secondary-blue">
                        Educación emocional integral
                      </span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 rounded-full bg-green-500/20 p-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <span className="text-sm text-secondary-blue">
                        Convivencia escolar saludable
                      </span>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="mb-8 rounded-lg bg-green-500/10 p-4">
                    <p className="text-sm text-muted-foreground">
                      Aporte sugerido:
                    </p>
                    <p className="text-lg font-bold text-green-500">
                      Desde $200.000 COP (≈ USD 53.59)
                    </p>
                  </div>

                  {/* Button */}
                  <Button className="w-full bg-green-500 hover:bg-green-500/90 text-white font-semibold group/btn cursor-pointer">
                    Quiero aportar
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Card 3: Donación en Especie */}
              <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300" />

                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6 inline-flex rounded-full bg-accent/20 p-4">
                    <Gift className="w-8 h-8 text-accent" />
                  </div>

                  {/* Number */}
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-accent">
                      03
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold text-secondary-blue">
                    Donación en especie o voluntariado
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Aporta materiales educativos, juguetes, recursos digitales o
                    tu tiempo profesional.
                  </p>

                  {/* Benefits */}
                  <div className="mb-6 space-y-3">
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 rounded-full bg-accent/20 p-1">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-secondary-blue">
                        Materiales educativos
                      </span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 rounded-full bg-accent/20 p-1">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-secondary-blue">
                        Recursos digitales
                      </span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 rounded-full bg-accent/20 p-1">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-secondary-blue">
                        Tu tiempo y experiencia
                      </span>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="mb-8 rounded-lg bg-accent/10 p-4">
                    <p className="text-sm text-muted-foreground">
                      Sin límite mínimo
                    </p>
                    <p className="text-lg font-bold text-accent">
                      Contribuye lo que puedas
                    </p>
                  </div>

                  {/* Button */}
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white cursor-pointer font-semibold group/btn">
                    Quiero ayudar
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-secondary-blue">
              Cada bicicleta despierta el movimiento, la alegría y los sueños
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Tu aporte hoy es semilla de transformación para el mañana. Juntos
              construimos comunidades más fuertes y compasivas.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white cursor-pointer font-semibold"
            >
              Comienza tu aporte hoy
            </Button>
          </div>
        </section>

        {/* Closing Messages Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/5">
          <div className="mx-auto max-w-4xl space-y-12">
            {/* First closing message */}
            <div className="rounded-2xl bg-card border border-border p-8 sm:p-12 shadow-md">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <span className="text-sm font-semibold text-primary">
                  Mensaje de Feel Colombia
                </span>
              </div>
              <p className="text-balance text-2xl sm:text-3xl font-bold text-secondary-blue leading-snug">
                "Prevenir la ansiedad, la depresión y el suicidio no es un acto
                médico, es un acto humano."
              </p>
              <p className="mt-4 text-balance text-xl sm:text-2xl font-semibold text-primary">
                Tu donación salva sonrisas antes de que se apaguen.
              </p>
            </div>

            {/* Second closing message */}
            <div className="rounded-2xl bg-card border border-border p-8 sm:p-12 shadow-md">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1 w-12 bg-accent rounded-full" />
                <span className="text-sm font-semibold text-accent">
                  Transparencia y Impacto
                </span>
              </div>
              <p className="text-balance text-2xl sm:text-3xl font-bold text-secondary-blue leading-snug">
                "Cada donación deja huella."
              </p>
              <p className="mt-4 text-balance text-xl sm:text-2xl font-semibold text-accent">
                En Feel Colombia te contamos, de forma personalizada y
                transparente, cómo tu ayuda se transforma en bienestar emocional
                para niños y jóvenes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowCanHelp;

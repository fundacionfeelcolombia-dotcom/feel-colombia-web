import imgLanding from "@/public/images/img-landing.jpg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface HeroProps {
  cover: string;
  textCover: string;
}

export const Hero: React.FC<HeroProps> = ({ cover, textCover }) => {
  const splitIndex = Math.floor(cover.length / 2);
  const firstHalf = cover.slice(0, splitIndex);
  const secondHalf = cover.slice(splitIndex);

  return (
    <section
      id="inicio"
      className="relative pt-32 sm:pt-32 pb-16 sm:pb-24 bg-gradient-hero overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(197 72% 60% / 0.1), hsl(45 98% 59% / 0.1))",
      }}
    >
      <div className="diagonal-stripes"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-secondary-blue">
              {firstHalf}
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
                {secondHalf}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary-blue-foreground leading-relaxed">
              {textCover}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/programas"
                className="flex items-center bg-primary px-6 py-3 rounded-md text-white h-10"
              >
                Explora nuestros programas
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">+5.000</div>
                <div className="text-sm text-muted-foreground text-secondary-blue-foreground">
                  Jóvenes conectados
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">+200</div>
                <div className="text-sm text-muted-foreground text-secondary-blue-foreground">
                  Recursos disponibles
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <Image
              src={imgLanding}
              alt="Ilustración de bienestar emocional"
              className="relative z-10 w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

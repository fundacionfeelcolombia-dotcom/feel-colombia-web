import { Facebook, Heart, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      id="contacto"
      className="bg-muted/30 border-t border-border py-12 sm:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-semibold text-foreground">
                feel
              </span>
              <Heart className="w-6 h-6 fill-accent text-accent" />
              <span className="text-2xl font-bold text-primary">COLOMBIA</span>
            </div>
            <p className="text-secondary-blue-foreground mb-6 max-w-md">
              Organización sin ánimo de lucro comprometida con transformar la
              salud emocional en Colombia, reduciendo la ansiedad y la depresión
              a través de iniciativas de innovación social con impacto real.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-blue mb-4">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-secondary-blue-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/quienes-somos"
                  className="text-secondary-blue-foreground hover:text-primary transition-colors"
                >
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link
                  href="/nuestro-equipo"
                  className="text-secondary-blue-foreground hover:text-primary transition-colors"
                >
                  Nuestro equipo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-blue mb-4">Contacto</h3>
            <ul className="space-y-3 text-secondary-blue-foreground">
              <li>Proyectos@fundacionfeelcolombia.org</li>
              <li>+57 321 5459582</li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-secondary-blue-foreground text-sm">
          <p>© 2025 Feel Colombia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-semibold text-foreground">
              feel
            </span>
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent transition-transform group-hover:scale-110" />
            <span className="text-xl sm:text-2xl font-bold text-primary">
              COLOMBIA
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-secondary-blue-foreground hover:text-primary transition-colors"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="text-secondary-blue-foreground hover:text-primary transition-colors"
            >
              Sobre nosotros
            </a>
            <a
              href="#recursos"
              className="text-secondary-blue-foreground hover:text-primary transition-colors"
            >
              Recursos
            </a>
            <a
              href="#comunidad"
              className="text-secondary-blue-foreground hover:text-primary transition-colors"
            >
              Comunidad
            </a>
            <Button
              variant="default"
              size="sm"
              className="text-white cursor-pointer"
            >
              Contacto
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

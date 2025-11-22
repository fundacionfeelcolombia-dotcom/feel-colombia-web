import { getContact } from "@/lib/strapi";
import iconLogo from "@/public/images/icon-feel.png";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Nuestro equipo", href: "/nuestro-equipo" },
  { label: "Programas", href: "/programas" },
  { label: "Cómo ayudar", href: "/como-ayudar" },
  { label: "Contacto", href: "/contacto" },
];

export async function generateMetadata() {
  const strapiData = await getContact(); // 1.
  return strapiData;
}

export const Footer = async () => {
  const strapiData = await getContact(); // 2.
  const { email, phone, location } = strapiData || {};

  return (
    <footer
      id="contacto"
      className="bg-muted/30 border-t border-border py-12 sm:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <Link
                href="/"
                className="flex items-center gap-2 group h-[100px]"
              >
                <Image
                  src={iconLogo}
                  alt="Feel Colombia Logo"
                  className="w-[250px] object-contain"
                />
              </Link>
            </div>
            <p className="text-secondary-blue-foreground mb-6 max-w-md">
              Organización sin ánimo de lucro comprometida con transformar la
              salud emocional en Colombia, reduciendo la ansiedad y la depresión
              a través de iniciativas de innovación social con impacto real.
            </p>
            {/* <div className="flex gap-4">
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
            </div> */}
          </div>

          <div>
            <h3 className="font-semibold text-secondary-blue mb-4">Enlaces</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-blue-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-blue mb-4">Contacto</h3>
            <ul className="space-y-3 text-secondary-blue-foreground">
              <li>{email}</li>
              <li>{phone}</li>
              <li>{location}</li>
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

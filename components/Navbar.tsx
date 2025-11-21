"use client";

import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Quiénes somos", href: "/quienes-somos" },
    { label: "Nuestro equipo", href: "/nuestro-equipo" },
    { label: "Programas", href: "/programas" },
    { label: "Cómo ayudar", href: "/como-ayudar" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-semibold text-foreground">
              feel
            </span>
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent transition-transform group-hover:scale-110" />
            <span className="text-xl sm:text-2xl font-bold text-primary">
              COLOMBIA
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-secondary-blue-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Link href="/contacto">
              <Button
                variant="default"
                size="sm"
                className="text-white cursor-pointer"
              >
                Contacto
              </Button>
            </Link>
          </div>

          {/* Mobile button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border space-y-2 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 rounded-md text-secondary-blue-foreground hover:bg-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="px-4 pt-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                Contacto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

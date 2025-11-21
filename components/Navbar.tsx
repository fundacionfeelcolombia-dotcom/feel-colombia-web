"use client";

import { Button } from "@/components/ui/button";
import iconLogo from "@/public/images/icon-feel.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-[100px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-background/95">
        <div className="flex items-center justify-between h-[100px] ">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group h-[100px]">
            <Image
              src={iconLogo}
              alt="Feel Colombia Logo"
              className="w-[170px] object-contain"
            />
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
              <Link href="/contacto">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

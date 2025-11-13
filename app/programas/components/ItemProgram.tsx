/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Program {
  image: any;
  alt?: string;
  title: string;
  description?: string;
  link: string;
}

export const ItemProgram = ({ program }: { program: Program }) => {
  return (
    <Card className="group overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 animate-scale-in border-2 hover:border-primary/30 p-0">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={program.image}
          alt={program.alt || program.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 from-background/90 via-background/40 to-transparent"
          style={{
            background:
              "linear-gradient(135deg, hsl(197 72% 60% / 0.1), hsl(45 98% 59% / 0.1))",
          }}
        ></div>
      </div>
      <CardContent className="p-8 relative">
        <h2 className="text-3xl font-bold text-secondary-blue mb-4">
          {program.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {program.description}
        </p>
        <Button asChild className="group/btn w-full md:w-auto text-white">
          <Link href={program.link}>
            Ver programa
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog } from "@radix-ui/react-dialog";
import { Download, CheckCircle } from "lucide-react";
import { useState } from "react";
import ModalDownload from "./modals/ModalDownload";

export const EbookSection = () => {
  const [modal, setModal] = useState(false);

  const benefits = [
    "Contenido actualizado y verificado",
    "Acceso inmediato después del registro",
    "Formato PDF optimizado para lectura",
    "Sin costos ocultos ni suscripciones",
  ];

  const onDownloadClick = async () => {};

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary-blue mb-4">
            Descarga Tu Ebook Ahora
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario y recibe acceso instantáneo a contenido de
            valor
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden border-2 hover:shadow-elegant transition-all duration-300 p-0">
            <CardContent className="p-0">
              <div className=" bg-gradient-to-br from-primary/20 via-primary-glow/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <button
                    type="button"
                    className="w-32 h-32 mx-auto bg-background rounded-2xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setModal(true)}
                  >
                    <Download className="w-16 h-16 text-primary" />
                  </button>
                  <h3 className="text-2xl font-bold text-secondary-blue">
                    Ebook: Libérate del estrés y la ansiedad
                  </h3>
                  <p className="text-muted-foreground">Formato Digital PDF</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-secondary-blue">
                ¿Qué obtendrás?
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-blue">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={() => setModal(true)}
              size="lg"
              className="w-full bg-primary text-white hover:shadow-glow transition-all duration-300 text-lg py-6 rounded-xl cursor-pointer"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar Ebook
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={modal} onOpenChange={() => {}}>
        <ModalDownload onClose={() => setModal(false)} />
      </Dialog>
    </section>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import counselingImage from "@/public/images/services/counseling.jpg";
import familyImage from "@/public/images/services/family-enjoying.jpg";
import safePlaceImageImage from "@/public/images/services/safe-place.jpg";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import ModalCounseling from "./modals/ModalCounseling";
import ModalCouple from "./modals/ModalCouple";

const TYPES = {
  COUNSELING: "COUNSELING",
  COUPLE: "COUPLE",
};

const services = [
  {
    id: 3,
    title: "Asesoría psicológica virtual — $14 USD",
    description:
      "Si estás viviendo una situación particular, o haces parte de una población vulnerable o migrante, tu asesoría será completamente gratuita.",
    cta: "Conoce más",
    bgColor: "bg-[#0066CC]",
    image: counselingImage,
    imagePosition: "left",
    type: TYPES.COUNSELING,
  },
  {
    id: 2,
    title: "Consejeria de parejas",
    description:
      "La terapia familiar es un recurso fundamental para acompañar a familias que atraviesan miedos, tensiones o preocupaciones. Nuestro equipo está disponible para brindarte apoyo sin ningún costo.",
    cta: "Más información",
    bgColor: "bg-[#24C4A8]",
    image: familyImage,
    imagePosition: "right",
    type: TYPES.COUPLE,
  },

  {
    id: 1,
    title: "Lugar Seguro “Safe place”",
    description:
      "Donde podrás conversar de manera anónima sobre tu bienestar emocional. Escríbenos al correo fundacionfeelcolombia@gmail.com con la palabra SAFE en el asunto. Recibirás una respuesta con pasos prácticos y orientación clave para ayudarte a afrontar la situación que estás viviendo.",
    bgColor: "bg-[#E91E8C]",
    image: safePlaceImageImage,
    imagePosition: "left",
  },
];

export const ServicesHomePage = () => {
  const [modal, setModal] = useState({
    status: false,
    type: "",
  });

  const onClose = () => {
    setModal({ status: false, type: "" });
  };

  return (
    <>
      <section className=" bg-background">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary-blue mb-4">
              Algunos servicios que ofrecemos
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]"
              >
                <div
                  className={`relative overflow-hidden ${
                    service.imagePosition === "right" ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300" />
                </div>

                {/* Contenido */}
                <div
                  className={`${
                    service.bgColor
                  } flex flex-col justify-center px-8 md:px-12 py-12 text-white ${
                    service.imagePosition === "right" ? "md:order-1" : ""
                  }`}
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg mb-8 leading-relaxed opacity-95">
                    {service.description}
                  </p>
                  {service?.cta && (
                    <div className="pt-4">
                      <Button
                        onClick={() =>
                          setModal({ status: true, type: service.type })
                        }
                        className="bg-white text-foreground cursor-pointer hover:bg-gray-100 font-semibold px-6 py-3 rounded transition-all duration-200 text-sm md:text-base"
                      >
                        {service.cta}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={modal.status} onOpenChange={() => {}}>
        {modal.type === TYPES.COUNSELING && (
          <ModalCounseling onClose={onClose} />
        )}
        {modal.type === TYPES.COUPLE && <ModalCouple onClose={onClose} />}
      </Dialog>
    </>
  );
};

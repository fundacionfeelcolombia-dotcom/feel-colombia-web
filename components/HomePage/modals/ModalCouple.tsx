"use client";

import type React from "react";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";

interface CoupleFormModalProps {
  onClose: () => void;
}

export default function ModalCouple({ onClose }: CoupleFormModalProps) {
  const [formData, setFormData] = useState({
    nombre1: "",
    nombre2: "",
    tiempoRelacion: "",
    motivos: [] as string[],
    acuerdo: "",
    modalidad: "",
    disponibilidad: [] as string[],
    whatsapp: "",
  });

  const motivosOptions = [
    "Problemas de comunicación",
    "Celos, desconfianza o inseguridades",
    "Distanciamiento emocional",
    "Infidelidad / ruptura reciente",
    "Discusiones constantes",
    "Dificultad para llegar a acuerdos",
    "Situaciones de familia/hijos",
    "Reconciliación y reconstrucción",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (
    field: "motivos" | "disponibilidad",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Formulario Consulta de Pareja*
Integrante 1: ${formData.nombre1}
Integrante 2: ${formData.nombre2}
Tiempo de relación: ${formData.tiempoRelacion}
Motivos: ${formData.motivos.join(", ")}
Acuerdo: ${formData.acuerdo}
Modalidad: ${formData.modalidad}
Disponibilidad: ${formData.disponibilidad.join(", ")}
WhatsApp: ${formData.whatsapp}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+573215459582?text=${encodedMessage}`, "_blank");
  };

  return (
    <DialogContent className="md:w-auto w-[95%] max-w-none max-h-none [&>button]:hidden p-0">
      <div className="flex flex-col overflow-y-auto  h-[80vh] rounded-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-background">
          <div>
            <DialogTitle className="text-2xl font-bold text-foreground">
              Consulta de Pareja
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Completen este formulario para conocer su situación
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 ">
          {/* Nombres */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Nombre del 1er integrante{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nombre1"
                value={formData.nombre1}
                onChange={handleInputChange}
                placeholder="Nombre"
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Nombre del 2do integrante{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nombre2"
                value={formData.nombre2}
                onChange={handleInputChange}
                placeholder="Nombre"
                required
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Tiempo de Relación */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Tiempo de relación <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.tiempoRelacion}
              onChange={(e) =>
                handleRadioChange("tiempoRelacion", e.target.value)
              }
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Selecciona una opción</option>
              <option value="Menos de 1 año">Menos de 1 año</option>
              <option value="1–3 años">1–3 años</option>
              <option value="3–7 años">3–7 años</option>
              <option value="Más de 7 años">Más de 7 años</option>
            </select>
          </div>

          {/* Motivos */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Motivo principal de la consulta{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {motivosOptions.map((motivo) => (
                <label
                  key={motivo}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.motivos.includes(motivo)}
                    onChange={() => handleCheckboxChange("motivos", motivo)}
                    className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
                  />
                  <span className="text-foreground">{motivo}</span>
                </label>
              ))}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.motivos.includes("Otro")}
                    onChange={() => handleCheckboxChange("motivos", "Otro")}
                    className="w-4 h-4 rounded border-border accent-primary mt-1 cursor-pointer"
                  />
                  <textarea
                    placeholder="Otro (describan brevemente)"
                    className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    rows={2}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Acuerdo */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              ¿Ambos están de acuerdo en recibir consejería?{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {[
                "Sí, ambos",
                "Sí, pero uno tiene dudas",
                "No estoy seguro/a (quiero orientación)",
              ].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="acuerdo"
                    value={option}
                    checked={formData.acuerdo === option}
                    onChange={(e) =>
                      handleRadioChange("acuerdo", e.target.value)
                    }
                    className="w-4 h-4 accent-primary cursor-pointer"
                  />
                  <span className="text-foreground">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Modalidad */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Modalidad preferida <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {["Videollamada", "Llamada", "WhatsApp guiado"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="modalidad"
                    value={option}
                    checked={formData.modalidad === option}
                    onChange={(e) =>
                      handleRadioChange("modalidad", e.target.value)
                    }
                    className="w-4 h-4 accent-primary cursor-pointer"
                  />
                  <span className="text-foreground">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Disponibilidad */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Disponibilidad de horarios <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {["Mañanas", "Tardes", "Noches"].map((hora) => (
                <label
                  key={hora}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.disponibilidad.includes(hora)}
                    onChange={() =>
                      handleCheckboxChange("disponibilidad", hora)
                    }
                    className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
                  />
                  <span className="text-foreground">{hora}</span>
                </label>
              ))}
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Número de WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="+57 321 5459582"
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent cursor-pointer hover:bg-muted"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary text-white cursor-pointer hover:bg-primary/90"
            >
              Confirmar por WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </DialogContent>
  );
}

"use client";

import { useState } from "react";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { downloadPDF, sendDataUser } from "@/lib/utils";

interface SimpleFormModalProps {
  onClose: () => void;
}

export default function ModalDownload({ onClose }: SimpleFormModalProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    edad: "",
    telefono: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    await sendDataUser(formData);
    await downloadPDF();
    setLoading(false);
  };

  return (
    <DialogContent className="w-[95%] md:w-[800px] max-w-none max-h-none [&>button]:hidden p-0">
      <div className="flex flex-col overflow-y-auto h-auto rounded-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-background">
          <div>
            <DialogTitle className="text-2xl font-bold text-foreground">
              Obtener Ebook
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Ingresa tus datos para enviártelo
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Tu nombre"
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Edad */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Edad <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleInputChange}
              placeholder="Tu edad"
              required
              min={1}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              placeholder="+57 321 0000000"
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Correo */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              placeholder="email@ejemplo.com"
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
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : null}
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </form>
      </div>
    </DialogContent>
  );
}

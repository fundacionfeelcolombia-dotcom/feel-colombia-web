import { getContact } from "@/lib/strapi";
import { MapPin, Mail, Phone } from "lucide-react";

export async function generateMetadata() {
  const strapiData = await getContact(); // 1.
  return strapiData;
}

const Contactpage = async () => {
  const strapiData = await getContact(); // 2.
  const { email, phone, location } = strapiData || {};

  return (
    <div
      className="min-h-screen "
      style={{
        background:
          "linear-gradient(135deg, hsl(197 72% 60% / 0.1), hsl(45 98% 59% / 0.1))",
      }}
    >
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 px-4 bg-gradient-hero overflow-hidden">
          <div className="diagonal-stripes"></div>

          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-blue mb-6 animate-fade-in">
              Contacto
            </h1>
            <p className="text-lg sm:text-xl text-secondary-blue/80 mb-8 animate-fade-in">
              Estamos aquí para ayudarte. Comunícate con nosotros a través de
              cualquiera de nuestros canales.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Email Card */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Correo
                    </h3>
                    <a
                      href={`mailto:${email}`}
                      className="text-primary hover:underline break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Teléfono
                    </h3>
                    <a
                      href={`tel:${
                        phone ? phone.replace(/\+|\s/g, "") : "573215459582"
                      }`}
                      className="text-primary hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Ubicación
                    </h3>
                    <p className="text-muted-foreground">{location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <p className="text-secondary-blue mb-2">
                ¿Tienes alguna pregunta o proyecto en mente?
              </p>
              <p className="text-lg font-semibold text-primary">
                ¡Nos encantaría escucharte!
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contactpage;

import donation from "@/public/images/donation.jpg";
import donationCyclie from "@/public/images/donation-cycle.jpg";
import { Calendar, Clock, Users } from "lucide-react";
import Image from "next/image";

export interface ImageFile {
  id: number;
  url: string;
  name: string;
}

export interface EventImage {
  id: number;
  img: ImageFile;
}

// Define la estructura de un solo objeto Evento
export interface EventItem {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  location: string;
  hour: string;
  description: string;
  active: boolean;
  images: EventImage[];
}

interface EventsProps {
  events: EventItem[]; // events es un arreglo de objetos EventItem
}

export const EventsHomePage: React.FC<EventsProps> = ({ events }) => {
  return (
    <>
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 gap-4 space-y-12">
          {events.map((event) => (
            <div
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              key={event.id}
            >
              <div className="relative group   flex-col gap-y-6 hidden lg:flex">
                <div className="absolute -inset-1 text-secondary-blue rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                {event.images.map((img) => {
                  return (
                    <img
                      key={img.id}
                      src={img.img.url}
                      alt="Evento Feel Colombia"
                      width={500} // Dimensiones Fijas
                      height={300} // Dimensiones Fijas
                      className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
                    />
                  );
                })}
              </div>

              {/* Right side - Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-4 text-secondary-blue ">
                    <span
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(197 100% 44%), hsl(197 72% 60%))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                      }}
                    >
                      {event.title}
                    </span>
                  </h2>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {event.subTitle}
                  </p>
                </div>

                {/* Event Details */}
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <Calendar className="w-6 h-6 text-secondary-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-secondary-blue">
                        {event.date}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {event.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Clock className="w-6 h-6 text-secondary-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-secondary-blue">
                        {event.hour}
                      </p>
                      <p className="text-muted-foreground text-sm">Evento</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <p className="text-secondary-blue-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="relative group   flex-col gap-y-6 flex lg:hidden">
                <div className="absolute -inset-1 text-secondary-blue rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                {event.images.map((img) => {
                  return (
                    <img
                      key={img.id}
                      src={img.img.url}
                      alt="Evento Feel Colombia"
                      width={500} // Dimensiones Fijas
                      height={300} // Dimensiones Fijas
                      className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

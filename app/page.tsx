import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { EventsHomePage } from "@/components/HomePage/EventsHomePage";
import { NewsHomePage } from "@/components/HomePage/NewsHomePage";
import { ServicesHomePage } from "@/components/HomePage/ServicesHomePage";
import { StatsHomePage } from "@/components/HomePage/StatsHomePage";
import { WhoWeServe } from "@/components/HomePage/WhoWeServe";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <StatsHomePage />
        <EventsHomePage />
        <WhoWeServe />
        <ServicesHomePage />
        <NewsHomePage />
      </main>
    </div>
  );
}

import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { EbookSection } from "@/components/HomePage/Ebook";
import { EventsHomePage } from "@/components/HomePage/EventsHomePage";
import { NewsHomePage } from "@/components/HomePage/NewsHomePage";
import { ServicesHomePage } from "@/components/HomePage/ServicesHomePage";
import { WhoWeServe } from "@/components/HomePage/WhoWeServe";
import { Testimonials } from "@/components/Testimonials";
import { getHomePage } from "@/lib/strapi";

export async function generateMetadata() {
  const strapiData = await getHomePage(); // 1.
  return strapiData;
}

export default async function Home() {
  const strapiData = await getHomePage(); // 2.

  const { cover, textCover, events, stories } = strapiData || {};

  return (
    <div className="min-h-screen ">
      <main>
        <Hero cover={cover} textCover={textCover} />
        <Features />
        <Testimonials stories={stories} />
        {/* <StatsHomePage /> */}
        <EventsHomePage events={events} />
        <EbookSection />
        <WhoWeServe />
        <ServicesHomePage />
        {/* <NewsHomePage /> */}
      </main>
    </div>
  );
}

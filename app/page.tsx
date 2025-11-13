import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
    </div>
  );
}

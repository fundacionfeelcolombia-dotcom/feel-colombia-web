import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export interface StoryItem {
  id: number;
  story: string;
  fullName: string;
  city: string;
  age: number;
}

export interface TestimonialsProps {
  stories: StoryItem[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ stories }) => {
  return (
    <section id="comunidad" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-secondary-blue">
            Historias que
            <span
              style={{
                background:
                  "linear-gradient(135deg, hsl(197 100% 44%), hsl(197 72% 60%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              {" "}
              inspiran esperanza
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada experiencia cuenta. Conoce cómo Feel Colombia ha impactado la
            vida de jóvenes en toda Colombia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="hover-lift border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-accent mb-6" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{story.story}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-secondary-blue">
                    {story.fullName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {story.age} años • {story.city}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full bg-secondary-blue h-[10px] mt-[80px]"></div>
      <div className="w-full bg-primary h-[10px] "></div>
      <div className="w-full bg-accent h-[10px]"></div>
    </section>
  );
};

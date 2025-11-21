import { VelocityScroll } from "./ui/velocity-scroll";
import { ParallaxComponent } from "./ui/parallax-scrolling";

const Hero = () => {
  const techWords = [
    "AUTOMAÇÕES",
    "N8N",
    "INTEGRAÇÕES",
    "SUPABASE",
    "APIS",
    "POSTGRES",
    "AGENTES DE IA",
    "SQL",
    "WORKFLOWS INTELIGENTES",
    "OPENAI",
    "DISPAROS AUTOMÁTICOS",
    "VIBE CODING",
    "CHATBOTS",
    "LOVABLE",
    "ASSISTENTES VIRTUAIS",
    "MAKE",
    "APLICATIVOS NO-CODE",
    "GPT AGENTS",
    "DASHBOARDS",
    "WHATSAPP API",
    "SISTEMAS PERSONALIZADOS",
    "WEBHOOKS",
    "APLICAÇÕES WEB",
    "HTTP REQUEST",
    "APLICAÇÕES MOBILE",
    "API REST",
    "SITES INTELIGENTES",
    "SOLUÇÕES CORPORATIVAS"
  ].join(" • ") + " • ";

  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] flex flex-col items-center justify-center overflow-hidden pt-14 sm:pt-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-transparent" />

      {/* Parallax Component */}
      <div className="relative w-full flex-1 flex items-center justify-center px-4 sm:px-0">
        <ParallaxComponent />
      </div>

      {/* Infinite Scroll Text with Framer Motion - Bottom */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 left-0 right-0 z-30 w-full overflow-hidden pointer-events-none">
        <VelocityScroll
          text={techWords}
          default_velocity={1}
          className="text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl font-thin tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase text-white/90"
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-48 lg:h-64 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;

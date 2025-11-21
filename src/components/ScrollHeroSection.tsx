import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { WordHeroPage } from "@/components/ui/scroll-hero-section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollHeroSection = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });

  const testimonials = [
    {
      quote: "Eu automatizo seu WhatsApp, e-mails e suporte para responder 24/7 sem esforço.",
      name: "Atendimento travado e lento?",
      designation: "",
      src: "/icon-1.jpg",
    },
    {
      quote: "Crio automações que executam processos sozinhos, todos os dias, no piloto automático.",
      name: "Perde tempo com tarefas repetitivas?",
      designation: "",
      src: "/icon-2.jpg",
    },
    {
      quote: "Organizo tudo em dashboards claros e inteligentes que mostram o que realmente importa.",
      name: "Seus dados estão espalhados e você não sabe o que acompanhar?",
      designation: "",
      src: "/icon-3.png",
    },
    {
      quote: "Desenvolvo sites modernos, rápidos e focados em conversão.",
      name: "Seu site atual não gera clientes nem confiança?",
      designation: "",
      src: "/icon-4.jpg",
    },
  ];

  return (
    <div className="relative">
      <style>{`
        :root {
          --accent: hsl(18, 99%, 51%) !important;
        }
      `}</style>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isTitleInView ? 1 : 0,
          y: isTitleInView ? 0 : 20
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="text-center pt-8 pb-4 mt-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase" style={{ color: '#FE6807' }}>
          Passos para Automatizar
          <br />
          Sua Empresa ou Negócio
        </h2>
      </motion.div>
      <div className="-mt-[450px]">
        <WordHeroPage
          items={[
            'entender.',
            'planejar.',
            'integrar.',
            'automatizar.',
            'melhorar.',
            'crescer.',
            'lucrar.'
          ]}
          theme="dark"
          animate={true}
          hue={18}
          startVh={65}
          spaceVh={50}
          debug={false}
          showFooter={false}
          taglineHTML="Está pronto para aumentar o lucro de sua empresa com nossos serviços?"
        />
      </div>
    </div>
  );
};

export default ScrollHeroSection;

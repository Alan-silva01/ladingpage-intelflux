import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { WordHeroPage } from "@/components/ui/scroll-hero-section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollHeroSection = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  // Testimonials atualizados
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
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{
          opacity: isTitleInView ? 1 : 0,
          y: isTitleInView ? 0 : 80,
          scale: isTitleInView ? 1 : 0.9
        }}
        transition={{
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2
        }}
        className="text-center pt-8 pb-4 mt-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase" style={{ color: '#FE6807' }}>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: isTitleInView ? 1 : 0,
              x: isTitleInView ? 0 : -50
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut"
            }}
            className="inline-block"
          >
            Passos para Automatizar
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: isTitleInView ? 1 : 0,
              x: isTitleInView ? 0 : 50
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut"
            }}
            className="inline-block"
          >
            Sua Empresa ou Negócio
          </motion.span>
        </h2>
      </motion.div>
      <div className="-mt-32">
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
          taglineHTML="desenvolvo soluções inteligentes que <br />simplificam processos e <span style='color: #FE6807'>otimizam rotinas</span>."
        />
      </div>
    </div>
  );
};

export default ScrollHeroSection;

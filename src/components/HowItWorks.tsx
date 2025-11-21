import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Cpu, Rocket } from "lucide-react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Conversamos sobre seu Negócio",
      description: "Entendo suas dores e identifico onde a automação pode gerar mais impacto"
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Planejamos a Solução Ideal",
      description: "Crio um plano personalizado com as melhores ferramentas para seu caso"
    },
    {
      number: "03",
      icon: Cpu,
      title: "Desenvolvo e Integro Tudo",
      description: "Construo as automações e integrações funcionando de forma sincronizada"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Lançamos e Otimizamos",
      description: "Coloco no ar, treino sua equipe e monitoro resultados continuamente"
    }
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Como Funciona o <span style={{ color: '#FE6807' }}>Processo</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Do primeiro contato até resultados reais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/[0.02] border border-white/10">
                <step.icon className="w-7 h-7 text-[#FE6807]" />
              </div>
              <div className="text-5xl font-bold text-white/5 mb-2">{step.number}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

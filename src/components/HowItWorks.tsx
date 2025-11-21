import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Cpu, Rocket, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Conversamos sobre seu Negócio",
      description: "Entendo suas dores, processos manuais e objetivos. Identifico onde a automação pode gerar mais impacto.",
      details: ["Análise do fluxo atual", "Mapeamento de gargalos", "Definição de KPIs"]
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Planejamos a Solução Ideal",
      description: "Crio um plano personalizado com as melhores ferramentas e estratégias para seu caso específico.",
      details: ["Escolha de ferramentas", "Arquitetura da solução", "Cronograma de entrega"]
    },
    {
      number: "03",
      icon: Cpu,
      title: "Desenvolvo e Integro Tudo",
      description: "Construo as automações, integrações e sistemas. Tudo funciona de forma sincronizada e eficiente.",
      details: ["Desenvolvimento", "Testes rigorosos", "Integrações API"]
    },
    {
      number: "04",
      icon: Rocket,
      title: "Lançamos e Otimizamos",
      description: "Coloco tudo no ar, treino sua equipe e monitoro resultados. Ajusto continuamente para máxima performance.",
      details: ["Deploy em produção", "Treinamento da equipe", "Monitoramento ativo"]
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#0A0A0A] to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FE6807]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FE6807]/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Como Funciona o
            </span>
            <br />
            <span style={{ color: '#FE6807' }}>Processo de Automação</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Do primeiro contato até resultados reais, um processo simples e transparente
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FE6807]/0 via-[#FE6807]/50 to-[#FE6807]/0 transform -translate-x-1/2" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : index % 2 === 0 ? -100 : 100
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#FE6807]/50 transition-all duration-500 hover:shadow-lg hover:shadow-[#FE6807]/20 group">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FE6807]/20 to-[#FE6807]/5 flex items-center justify-center group-hover:from-[#FE6807]/30 group-hover:to-[#FE6807]/10 transition-all duration-500">
                          <step.icon className="w-8 h-8" style={{ color: '#FE6807' }} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="text-6xl font-bold text-white/5 mb-2">
                          {step.number}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#FE6807] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        <ul className="space-y-3">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                              <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#FE6807' }} />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Number circle for desktop */}
                <div className="hidden lg:flex flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#FE6807] to-[#FF8C42] items-center justify-center shadow-lg shadow-[#FE6807]/50 relative z-10">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                  <div className="absolute inset-0 rounded-full bg-[#FE6807] animate-ping opacity-20" />
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA at the end */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50,
            scale: isInView ? 1 : 0.9
          }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-[#FE6807]/10 to-transparent border border-[#FE6807]/30">
            <p className="text-xl md:text-2xl text-white font-semibold">
              Pronto para começar sua transformação digital?
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#FE6807] to-[#FF8C42] rounded-xl text-white font-bold text-lg hover:shadow-lg hover:shadow-[#FE6807]/50 transition-all duration-300 hover:scale-105">
              Agendar Conversa Gratuita
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

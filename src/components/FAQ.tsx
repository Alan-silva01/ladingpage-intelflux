import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo leva para implementar uma automação?",
      answer: "Depende da complexidade. Automações simples podem estar prontas em 1-2 semanas. Projetos mais complexos com múltiplas integrações levam de 4 a 8 semanas. Sempre fazemos um cronograma detalhado na fase de planejamento."
    },
    {
      question: "Preciso ter conhecimento técnico para usar as automações?",
      answer: "Não! Desenvolvo tudo pensando em facilidade de uso. Você recebe treinamento completo e documentação clara. As automações rodam sozinhas, você só precisa monitorar os resultados nos dashboards que eu crio."
    },
    {
      question: "As automações funcionam com as ferramentas que eu já uso?",
      answer: "Na maioria dos casos, sim! Trabalho com integração de centenas de ferramentas: Google Workspace, WhatsApp, CRMs, e-commerce, ERPs, planilhas, emails e muito mais. Se a ferramenta tem API ou webhook, consigo integrar."
    },
    {
      question: "E se eu precisar de ajustes depois da entrega?",
      answer: "Todos os projetos incluem período de suporte pós-entrega (1 a 3 meses dependendo do plano). Ajustes e otimizações fazem parte do processo. Depois disso, você pode contratar pacotes de manutenção mensal."
    },
    {
      question: "Qual a diferença entre automação e IA?",
      answer: "Automação executa tarefas repetitivas seguindo regras fixas (ex: enviar email quando alguém preenche formulário). IA toma decisões inteligentes e aprende (ex: chatbot que entende perguntas variadas). Muitos projetos combinam ambos para máxima eficiência."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Geralmente dividimos em etapas: 30% no início (planejamento e design), 40% na metade (desenvolvimento) e 30% na entrega final. Aceito PIX, transferência e cartão. Para projetos grandes, podemos negociar condições especiais."
    },
    {
      question: "Vocês fazem manutenção contínua?",
      answer: "Sim! Ofereço planos mensais de manutenção que incluem: monitoramento 24/7, ajustes e melhorias, suporte prioritário, relatórios mensais e novas automações conforme necessário. Ideal para quem quer evolução constante."
    },
    {
      question: "Consigo cancelar ou pausar o projeto?",
      answer: "Você pode pausar ou cancelar, mas o pagamento das etapas já concluídas é devido. Sempre recomendo uma conversa antes de tomar essa decisão - muitas vezes conseguimos ajustar o escopo para atender melhor suas necessidades."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FE6807]/5 to-transparent" />

      <div className="container mx-auto relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <HelpCircle className="w-12 h-12" style={{ color: '#FE6807' }} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Perguntas
            </span>
            <br />
            <span style={{ color: '#FE6807' }}>Frequentes</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Respostas para as dúvidas mais comuns sobre automação
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 50
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className={`rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'border-[#FE6807]/50 shadow-lg shadow-[#FE6807]/10' : 'border-white/10'
              }`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-start justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors duration-200 group"
                >
                  <div className="flex-1">
                    <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      openIndex === index ? 'text-[#FE6807]' : 'text-white group-hover:text-[#FE6807]'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-6 h-6 transition-colors duration-300 ${
                      openIndex === index ? 'text-[#FE6807]' : 'text-gray-400 group-hover:text-[#FE6807]'
                    }`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-white/10">
                          <p className="text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50
          }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-br from-[#FE6807]/10 to-transparent border border-[#FE6807]/30">
            <p className="text-xl text-white font-semibold">
              Ainda tem dúvidas?
            </p>
            <p className="text-gray-400">
              Vamos conversar! Estou aqui para ajudar você a encontrar a melhor solução
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#FE6807] to-[#FF8C42] rounded-xl text-white font-bold hover:shadow-lg hover:shadow-[#FE6807]/50 transition-all duration-300 hover:scale-105">
              Falar com Especialista
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
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
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Perguntas <span style={{ color: '#FE6807' }}>Frequentes</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Respostas para as dúvidas mais comuns sobre automação
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.05
              }}
            >
              <div className={`rounded-lg bg-white/[0.02] border transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'border-white/10' : 'border-white/5'
              }`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-5 flex items-start justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white flex-1">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors duration-200 ${
                      openIndex === index ? 'text-[#FE6807]' : 'text-gray-500'
                    }`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="pt-3 border-t border-white/5">
                          <p className="text-gray-500 text-sm leading-relaxed">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col gap-3 p-6 rounded-lg bg-white/[0.02] border border-white/5">
            <p className="text-lg text-white font-semibold">
              Ainda tem dúvidas?
            </p>
            <p className="text-gray-500 text-sm">
              Vamos conversar! Estou aqui para ajudar você a encontrar a melhor solução
            </p>
            <button className="px-6 py-3 bg-[#FE6807] rounded-lg text-white font-semibold hover:bg-[#FF8C42] transition-all duration-300">
              Falar com Especialista
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

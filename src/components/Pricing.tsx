import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, Rocket, Crown } from "lucide-react";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const plans = [
    {
      name: "Starter",
      icon: Sparkles,
      description: "Ideal para começar a automatizar",
      price: "A partir de R$ 1.500",
      period: "projeto único",
      features: [
        "1 automação básica",
        "Integração com 2 ferramentas",
        "Dashboard simples",
        "1 mês de suporte",
        "Documentação completa",
        "Treinamento da equipe"
      ],
      popular: false
    },
    {
      name: "Professional",
      icon: Rocket,
      description: "Para negócios que querem escalar",
      price: "A partir de R$ 4.500",
      period: "projeto completo",
      features: [
        "Até 5 automações complexas",
        "Integrações ilimitadas",
        "Dashboard personalizado",
        "3 meses de suporte",
        "API customizadas",
        "Relatórios automáticos",
        "Otimização contínua",
        "Prioridade no atendimento"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "Soluções sob medida para grandes operações",
      price: "Personalizado",
      period: "consultoria completa",
      features: [
        "Automações ilimitadas",
        "Arquitetura personalizada",
        "Múltiplos dashboards",
        "Suporte 24/7 prioritário",
        "Inteligência Artificial",
        "Consultoria estratégica",
        "SLA garantido",
        "Equipe dedicada",
        "Escalabilidade enterprise"
      ],
      popular: false
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto">
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
            Invista em <span style={{ color: '#FE6807' }}>Automação Inteligente</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Planos flexíveis que se adaptam ao tamanho e necessidade do seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-3 py-1 rounded-full bg-[#FE6807] text-white text-xs font-bold">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div className={`p-8 rounded-lg bg-white/[0.02] border ${plan.popular ? 'border-[#FE6807]/30' : 'border-white/5'} hover:border-white/10 transition-all duration-300 h-full`}>
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-lg bg-white/[0.02] border border-white/10">
                    <plan.icon className="w-6 h-6 text-[#FE6807]" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <div className="text-3xl font-bold text-white mb-1">
                    {plan.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    {plan.period}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#FE6807]" />
                      <span className="text-gray-500 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#FE6807] text-white hover:bg-[#FF8C42]'
                    : 'bg-white/[0.02] border border-white/10 text-white hover:border-white/20'
                }`}>
                  {plan.name === "Enterprise" ? "Falar com Especialista" : "Começar Agora"}
                </button>
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
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col gap-3 p-6 rounded-lg bg-white/[0.02] border border-white/5">
            <p className="text-gray-500">
              🎯 Todos os planos incluem: Garantia de 30 dias | Pagamento facilitado | Sem taxas ocultas
            </p>
            <p className="text-sm text-gray-500">
              Precisa de algo diferente? Entre em contato para um plano personalizado
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

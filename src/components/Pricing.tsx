import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, Rocket, Crown } from "lucide-react";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

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
      popular: false,
      gradient: "from-white/5 to-white/[0.02]",
      buttonStyle: "bg-white/10 hover:bg-white/20 text-white"
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
      popular: true,
      gradient: "from-[#FE6807]/20 to-[#FE6807]/5",
      buttonStyle: "bg-gradient-to-r from-[#FE6807] to-[#FF8C42] hover:shadow-lg hover:shadow-[#FE6807]/50 text-white"
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
      popular: false,
      gradient: "from-purple-500/20 to-purple-500/5",
      buttonStyle: "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 text-white"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#0A0A0A] to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#FE6807]/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Invista em
            </span>
            <br />
            <span style={{ color: '#FE6807' }}>Automação Inteligente</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Planos flexíveis que se adaptam ao tamanho e necessidade do seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 100,
                scale: isInView ? 1 : 0.9
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#FE6807] to-[#FF8C42] text-white text-sm font-bold shadow-lg shadow-[#FE6807]/50">
                    MAIS POPULAR
                  </div>
                </div>
              )}

              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${plan.gradient} border ${plan.popular ? 'border-[#FE6807]/50' : 'border-white/10'} hover:border-[#FE6807]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FE6807]/20 backdrop-blur-sm h-full group`}>
                {/* Animated glow for popular */}
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FE6807]/20 to-transparent"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-xl ${plan.popular ? 'bg-gradient-to-br from-[#FE6807]/30 to-[#FE6807]/10' : 'bg-white/5'} group-hover:scale-110 transition-transform duration-500`}>
                      <plan.icon className="w-8 h-8" style={{ color: plan.popular ? '#FE6807' : '#FFF' }} />
                    </div>
                  </div>

                  {/* Plan name */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: plan.popular ? '#FE6807' : '#FFF' }}>
                      {plan.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {plan.period}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#FE6807' }} />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 ${plan.buttonStyle}`}>
                    {plan.name === "Enterprise" ? "Falar com Especialista" : "Começar Agora"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col gap-4 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
            <p className="text-gray-400 text-lg">
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

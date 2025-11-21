import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingUp, Clock, Shield } from "lucide-react";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      icon: Clock,
      title: "Economize 80% do Tempo",
      description: "Automatize tarefas repetitivas e foque no que realmente importa"
    },
    {
      icon: TrendingUp,
      title: "Aumente Conversões em 3x",
      description: "Atendimento 24/7 que nunca perde uma oportunidade"
    },
    {
      icon: Zap,
      title: "Resposta Instantânea",
      description: "Clientes atendidos em segundos, não em horas"
    },
    {
      icon: Shield,
      title: "Dados Organizados",
      description: "Dashboards claros que mostram métricas acionáveis"
    }
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black z-10">
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
            Resultados que <span style={{ color: '#FE6807' }}>Transformam</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Empresas que automatizam crescem mais rápido e economizam tempo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
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
              className="p-6 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300"
            >
              <benefit.icon className="w-8 h-8 mb-4 text-[#FE6807]" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

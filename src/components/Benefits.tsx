import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingUp, Clock, Shield } from "lucide-react";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const benefits = [
    {
      icon: Clock,
      title: "Economize 80% do Tempo",
      description: "Automatize tarefas repetitivas e foque no que realmente importa: crescer seu negócio",
      color: "#FE6807",
      delay: 0.1
    },
    {
      icon: TrendingUp,
      title: "Aumente Conversões em 3x",
      description: "Atendimento 24/7 que nunca perde uma oportunidade de venda",
      color: "#FF8C42",
      delay: 0.2
    },
    {
      icon: Zap,
      title: "Resposta Instantânea",
      description: "Clientes atendidos em segundos, não em horas ou dias",
      color: "#FFA066",
      delay: 0.3
    },
    {
      icon: Shield,
      title: "Dados Organizados",
      description: "Dashboards inteligentes que mostram métricas reais e acionáveis",
      color: "#FFB485",
      delay: 0.4
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FE6807]/5 to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTQsIDEwNCwgNywgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Resultados que
            </span>
            <br />
            <span style={{ color: '#FE6807' }}>Transformam Negócios</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6">
            Empresas que automatizam crescem mais rápido, vendem mais e economizam tempo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 100,
                scale: isInView ? 1 : 0.8
              }}
              transition={{
                duration: 0.6,
                delay: benefit.delay,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#FE6807]/50 transition-all duration-500 hover:shadow-lg hover:shadow-[#FE6807]/20 backdrop-blur-sm h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FE6807]/0 to-[#FE6807]/0 group-hover:from-[#FE6807]/10 group-hover:to-transparent transition-all duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-[#FE6807]/20 to-[#FE6807]/5 group-hover:from-[#FE6807]/30 group-hover:to-[#FE6807]/10 transition-all duration-500">
                    <benefit.icon
                      className="w-8 h-8 transition-all duration-500 group-hover:scale-110"
                      style={{ color: benefit.color }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FE6807] transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-full"
                  style={{
                    background: `radial-gradient(circle at top right, ${benefit.color}20, transparent)`
                  }}
                  animate={{
                    opacity: isInView ? [0, 0.5, 0] : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: benefit.delay
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Automações Criadas" },
            { value: "98%", label: "Satisfação" },
            { value: "24/7", label: "Suporte Ativo" },
            { value: "10x", label: "ROI Médio" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#FE6807' }}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;

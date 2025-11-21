import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FE6807]/20 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.9,
            y: isInView ? 0 : 50
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FE6807]/20 via-[#FE6807]/10 to-transparent border border-[#FE6807]/30 backdrop-blur-sm"
        >
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTQsIDEwNCwgNywgMC4xNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

          {/* Floating icons */}
          <motion.div
            className="absolute top-10 left-10 opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-12 h-12 text-[#FE6807]" />
          </motion.div>
          <motion.div
            className="absolute top-20 right-20 opacity-20"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Zap className="w-16 h-16 text-[#FE6807]" />
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/4 opacity-20"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <TrendingUp className="w-14 h-14 text-[#FE6807]" />
          </motion.div>

          <div className="relative px-6 sm:px-8 py-16 sm:py-20 lg:py-28 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 30
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Transforme seu Negócio com
                </span>
                <br />
                <span style={{ color: '#FE6807' }}>Automação Inteligente</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 30
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Pare de perder tempo com tarefas manuais. Agende uma conversa gratuita e descubra como automatizar pode multiplicar seus resultados.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 30
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 md:gap-12 py-8"
            >
              <div className="text-center">
                <div className="text-4xl font-bold mb-1" style={{ color: '#FE6807' }}>80%</div>
                <div className="text-sm text-gray-400">Menos Tempo Gasto</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1" style={{ color: '#FE6807' }}>3x</div>
                <div className="text-sm text-gray-400">Mais Conversões</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1" style={{ color: '#FE6807' }}>24/7</div>
                <div className="text-sm text-gray-400">Atendimento Ativo</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 30,
                scale: isInView ? 1 : 0.9
              }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <button className="group px-8 py-5 bg-gradient-to-r from-[#FE6807] to-[#FF8C42] rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#FE6807]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Agendar Conversa Gratuita
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-5 bg-white/10 backdrop-blur-sm rounded-xl text-white font-bold text-lg border border-white/20 hover:bg-white/20 hover:border-[#FE6807]/50 transition-all duration-300 hover:scale-105">
                Ver Casos de Sucesso
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: isInView ? 1 : 0
              }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-gray-500 pt-4"
            >
              ✓ Sem compromisso • ✓ Diagnóstico gratuito • ✓ Resposta em 24h
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

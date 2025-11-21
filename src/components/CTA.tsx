import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
          className="rounded-lg bg-white/[0.02] border border-white/5 backdrop-blur-sm p-8 sm:p-12 lg:p-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl mx-auto mb-6 text-white">
              Transforme seu Negócio com <span style={{ color: '#FE6807' }}>Automação Inteligente</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-8"
          >
            Pare de perder tempo com tarefas manuais. Agende uma conversa gratuita e descubra como automatizar pode multiplicar seus resultados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-1 text-[#FE6807]">80%</div>
              <div className="text-sm text-gray-500">Menos Tempo Gasto</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1 text-[#FE6807]">3x</div>
              <div className="text-sm text-gray-500">Mais Conversões</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1 text-[#FE6807]">24/7</div>
              <div className="text-sm text-gray-500">Atendimento Ativo</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <button className="group px-8 py-4 bg-[#FE6807] rounded-lg text-white font-semibold hover:bg-[#FF8C42] transition-all duration-300 flex items-center justify-center gap-2">
              Agendar Conversa Gratuita
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 bg-white/[0.02] rounded-lg text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-300">
              Ver Casos de Sucesso
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: isInView ? 1 : 0
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-gray-500"
          >
            ✓ Sem compromisso • ✓ Diagnóstico gratuito • ✓ Resposta em 24h
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

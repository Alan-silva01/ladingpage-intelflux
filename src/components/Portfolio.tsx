import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, ShoppingCart, BarChart3, Globe } from "lucide-react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      icon: Bot,
      title: "Chatbot WhatsApp Multi-Atendimento",
      description: "Sistema completo de chatbot que atende 200+ clientes simultâneos com IA",
      tags: ["WhatsApp API", "N8N", "OpenAI"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce com Automação Total",
      description: "Loja online com automações de estoque, pedidos e recuperação de carrinho",
      tags: ["Shopify", "Zapier", "Analytics"]
    },
    {
      icon: BarChart3,
      title: "Dashboard de BI Inteligente",
      description: "Painel unificado integrando dados de vendas, marketing e operações",
      tags: ["Power BI", "API", "SQL"]
    },
    {
      icon: Globe,
      title: "Site Institucional de Alta Conversão",
      description: "Website moderno, rápido e otimizado para SEO com tracking avançado",
      tags: ["React", "TypeScript", "Vercel"]
    }
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black z-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Projetos que Geraram <span style={{ color: '#FE6807' }}>Resultados</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Cases de sucesso em automação e desenvolvimento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center flex-shrink-0">
                  <project.icon className="w-6 h-6 text-[#FE6807]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded text-xs bg-white/[0.02] border border-white/5 text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

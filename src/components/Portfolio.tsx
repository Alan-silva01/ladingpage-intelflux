import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Bot, ShoppingCart, BarChart3, Globe, ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      icon: Bot,
      title: "Chatbot WhatsApp Multi-Atendimento",
      category: "Automação de Atendimento",
      description: "Sistema completo de chatbot que atende 200+ clientes simultâneos com IA, integrado a CRM e dashboard de métricas em tempo real.",
      results: ["95% de satisfação", "70% redução de custos", "24/7 disponível"],
      tags: ["WhatsApp API", "N8N", "OpenAI", "Supabase"],
      gradient: "from-green-500/20 to-emerald-500/5"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce com Automação Total",
      category: "Vendas & Automação",
      description: "Loja online com automações de estoque, envio de pedidos, follow-up de clientes e recuperação de carrinho abandonado.",
      results: ["3x em vendas", "100% pedidos automatizados", "85% taxa de recuperação"],
      tags: ["Shopify", "Zapier", "Email Marketing", "Analytics"],
      gradient: "from-blue-500/20 to-cyan-500/5"
    },
    {
      icon: BarChart3,
      title: "Dashboard de BI Inteligente",
      category: "Business Intelligence",
      description: "Painel unificado que integra dados de vendas, marketing e operações. Relatórios automáticos e insights acionáveis.",
      results: ["5 sistemas integrados", "Dados em tempo real", "80% tempo economizado"],
      tags: ["Power BI", "API Integration", "Python", "SQL"],
      gradient: "from-purple-500/20 to-pink-500/5"
    },
    {
      icon: Globe,
      title: "Site Institucional de Alta Conversão",
      category: "Web Development",
      description: "Website moderno, rápido e otimizado para SEO. Integrado com formulários inteligentes e tracking avançado de conversões.",
      results: ["Page Speed 98", "5x mais leads", "50% mais tráfego"],
      tags: ["React", "TypeScript", "Tailwind", "Vercel"],
      gradient: "from-orange-500/20 to-red-500/5"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU0LCAxMDQsIDcsIDAuMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

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
              Projetos que
            </span>
            <br />
            <span style={{ color: '#FE6807' }}>Geraram Resultados Reais</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Cases de sucesso em automação, IA e desenvolvimento web
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 100,
                rotateX: isInView ? 0 : -15
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
              style={{ perspective: 1000 }}
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10 hover:border-[#FE6807]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FE6807]/20 backdrop-blur-sm overflow-hidden h-full`}>
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FE6807]/0 via-[#FE6807]/0 to-[#FE6807]/0"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    background: hoveredIndex === index
                      ? "linear-gradient(to bottom right, rgba(254, 104, 7, 0.1), transparent)"
                      : "linear-gradient(to bottom right, transparent, transparent)"
                  }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FE6807]/30 to-[#FE6807]/10 flex items-center justify-center group-hover:from-[#FE6807]/50 group-hover:to-[#FE6807]/20 transition-all duration-500">
                        <project.icon className="w-7 h-7 text-[#FE6807] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <div className="text-sm text-[#FE6807] font-semibold mb-1">
                          {project.category}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FE6807] transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-[#FE6807] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="mb-6 space-y-2">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FE6807]" />
                        <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/10 group-hover:border-[#FE6807]/30 group-hover:text-white transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(45deg, transparent 30%, rgba(254, 104, 7, 0.1) 50%, transparent 70%)",
                    backgroundSize: "200% 200%"
                  }}
                  animate={{
                    backgroundPosition: hoveredIndex === index ? ["0% 0%", "100% 100%"] : "0% 0%"
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: hoveredIndex === index ? Infinity : 0
                  }}
                />
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Quer ver seu projeto aqui também?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#FE6807] to-[#FF8C42] rounded-xl text-white font-bold hover:shadow-lg hover:shadow-[#FE6807]/50 transition-all duration-300 hover:scale-105">
            Solicitar Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

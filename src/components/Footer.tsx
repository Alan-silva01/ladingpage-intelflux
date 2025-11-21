import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicos: [
      { name: "Automação WhatsApp", href: "#" },
      { name: "Chatbots com IA", href: "#" },
      { name: "Integrações API", href: "#" },
      { name: "Dashboards BI", href: "#" },
      { name: "Desenvolvimento Web", href: "#" }
    ],
    recursos: [
      { name: "Portfolio", href: "#" },
      { name: "Cases de Sucesso", href: "#" },
      { name: "Blog", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    empresa: [
      { name: "Sobre", href: "#" },
      { name: "Processo", href: "#" },
      { name: "Preços", href: "#" },
      { name: "Contato", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:contato@intelflux.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Github, href: "https://github.com", label: "GitHub" }
  ];

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden z-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FE6807]/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">
                    <span style={{ color: '#FE6807' }}>INTELFLUX</span>
                  </h3>
                  <p className="text-gray-400 text-sm">
                    AI Solutions Agency
                  </p>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                  Transformando negócios através de automação inteligente, IA e desenvolvimento web. Soluções que economizam tempo e multiplicam resultados.
                </p>

                {/* Social links */}
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-[#FE6807]/50 flex items-center justify-center text-gray-400 hover:text-[#FE6807] transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4 text-lg">Serviços</h4>
              <ul className="space-y-3">
                {footerLinks.servicos.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#FE6807] transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4 text-lg">Recursos</h4>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#FE6807] transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4 text-lg">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#FE6807] transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm text-center md:text-left"
            >
              © {currentYear} INTELFLUX. Todos os direitos reservados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6 text-sm"
            >
              <a href="#" className="text-gray-500 hover:text-[#FE6807] transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-[#FE6807] transition-colors duration-300">
                Termos de Uso
              </a>
            </motion.div>
          </div>
        </div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center pb-6"
        >
          <p className="text-gray-600 text-xs">
            Feito com <span className="text-[#FE6807]">♥</span> por INTELFLUX
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

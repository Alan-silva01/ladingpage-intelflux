import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-3 sm:px-6">
        <ul className="flex items-center justify-between max-w-3xl mx-auto h-14 sm:h-12 gap-2 sm:gap-4">
          <li className="flex-1 sm:flex-none">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-white hover:text-[#FE6807] transition-colors uppercase cursor-pointer block text-center"
            >
              Home
            </a>
          </li>
          <li className="flex-1 sm:flex-none">
            <a
              href="#portfolio"
              className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-white hover:text-[#FE6807] transition-colors uppercase cursor-pointer block text-center"
            >
              Projetos
            </a>
          </li>
          <li className="flex-1 sm:flex-none">
            <a
              href="#servicos"
              className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-white hover:text-[#FE6807] transition-colors uppercase cursor-pointer block text-center"
            >
              Serviços
            </a>
          </li>
          <li className="flex-1 sm:flex-none">
            <a
              href="#contato"
              className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-white hover:text-[#FE6807] transition-colors uppercase cursor-pointer block text-center"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

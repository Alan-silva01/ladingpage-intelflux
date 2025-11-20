import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <nav className="container mx-auto px-4 sm:px-6">
        <ul className="flex items-center justify-between max-w-3xl mx-auto h-12">
          <li>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xs sm:text-sm font-bold tracking-wider text-white hover:text-[#FE6807] transition-colors uppercase cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-xs sm:text-sm font-bold tracking-wider text-white hover:text-[#FE6807] transition-colors uppercase cursor-pointer"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#servicos"
              className="text-xs sm:text-sm font-bold tracking-wider text-white hover:text-[#FE6807] transition-colors uppercase cursor-pointer"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="text-xs sm:text-sm font-bold tracking-wider text-white hover:text-[#FE6807] transition-colors uppercase cursor-pointer"
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

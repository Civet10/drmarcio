import { Instagram, Phone } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  activeSection: string;
}

function Header({ activeSection }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'locais', label: 'Locais de Atendimento' },
    { id: 'casos', label: 'Casos Clínicos' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <Logo />
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-700 ${
                  activeSection === item.id ? 'text-emerald-700' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/marciompmiranda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-emerald-700 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="tel:+5516981027060"
              className="text-gray-700 hover:text-emerald-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

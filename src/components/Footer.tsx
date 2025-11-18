import { Heart } from 'lucide-react';
import Logo from './Logo';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="bg-white p-2 rounded-lg inline-block">
                <Logo />
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Cirurgião veterinário especialista em ortopedia e procedimentos especializados
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Especialidades</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Cirurgias Ortopédicas</li>
              <li>Cirurgias Neuroespinhais</li>
              <li>Cirurgias Abdominais</li>
              <li>Cirurgias Pélvicas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="tel:+5516981027060" className="hover:text-white transition-colors">
                  (16) 98102-7060
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/marciompmiranda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @marciompmiranda
                </a>
              </li>
              <li>Professor CETAC</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center">
            <span>© {currentYear} Dr. Márcio Miranda - Todos os direitos reservados</span>
            <Heart className="w-4 h-4 mx-2 text-emerald-700" />
            <span>Cuidando com excelência</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

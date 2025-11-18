import { Phone, Instagram, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato para agendar uma consulta ou esclarecer dúvidas sobre
            procedimentos cirúrgicos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-700 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Telefone</h3>
                  <a href="tel:+5516981027060" className="text-gray-600 hover:text-emerald-700 transition-colors">
                    (16) 98102-7060
                  </a>
                  <p className="text-sm text-gray-500 mt-1">WhatsApp disponível</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-700 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com/marciompmiranda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-700 transition-colors"
                  >
                    @marciompmiranda
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Acompanhe meu trabalho</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-700 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Cirurgião Volante</h3>
                  <p className="text-gray-600">Atendimento em diversas regiões de SP</p>
                  <p className="text-sm text-gray-500 mt-1">Consulte disponibilidade</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dr. Márcio Miranda</h3>
              <div className="space-y-3 text-gray-700">
                <p className="font-semibold">M.V Cirurgião Volante</p>
                <p>Especialista em Cirurgias Abdominais e Pélvicas</p>
                <p>Especialista em Cirurgias Ortopédicas e Neuroespinhais</p>
                <p>Professor de Ortopedia - CETAC</p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600 mb-4">
                  Agendamento de cirurgias e consultas especializadas
                </p>
                <a
                  href="https://wa.me/5516981027060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors w-full text-center"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

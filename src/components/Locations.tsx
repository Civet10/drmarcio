import { MapPin } from 'lucide-react';

function Locations() {
  const locations = [
    {
      city: 'Ribeirão Preto',
      region: 'Região Metropolitana',
      description: 'Atendimento regular na região de Ribeirão Preto e cidades próximas'
    },
    {
      city: 'Barretos',
      region: 'Norte de São Paulo',
      description: 'Cobertura da região de Barretos e municípios adjacentes'
    },
    {
      city: 'São José do Rio Preto',
      region: 'Noroeste Paulista',
      description: 'Atendimento especializado em São José do Rio Preto e região'
    },
    {
      city: 'São Paulo',
      region: 'Capital e Grande SP',
      description: 'Disponibilidade para atendimentos na capital e região metropolitana'
    },
    {
      city: 'Guarulhos',
      region: 'Região Metropolitana de SP',
      description: 'Atendimento em Guarulhos e cidades da zona leste'
    }
  ];

  return (
    <section id="locais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Locais de Atendimento</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Como cirurgião volante, atendo diversas regiões do estado de São Paulo,
            levando expertise em cirurgias ortopédicas e especializadas até você
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-emerald-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-3">
                <MapPin className="w-6 h-6 text-emerald-700 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{location.city}</h3>
                  <p className="text-sm font-medium text-emerald-700 mb-2">{location.region}</p>
                </div>
              </div>
              <p className="text-gray-600">{location.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Para outras regiões, consulte disponibilidade pelo WhatsApp
          </p>
          <a
            href="tel:+5516981027060"
            className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
          >
            (16) 98102-7060
          </a>
        </div>
      </div>
    </section>
  );
}

export default Locations;

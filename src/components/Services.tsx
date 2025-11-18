import { Activity, Bone, Brain, Heart } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Bone className="w-12 h-12" />,
      title: 'Cirurgias Ortopédicas',
      procedures: [
        'Correção de fraturas',
        'Displasia coxofemoral',
        'Ruptura de ligamento cruzado',
        'Luxação patelar',
        'Osteotomias corretivas',
        'Artrodese'
      ]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'Cirurgias Neuroespinhais',
      procedures: [
        'Hérnia de disco',
        'Descompressão medular',
        'Fraturas vertebrais',
        'Estenose lombossacral',
        'Instabilidade atlanto-axial',
        'Mielopatia degenerativa'
      ]
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Cirurgias Abdominais',
      procedures: [
        'Laparotomias exploratórias',
        'Cistotomia',
        'Nefrectomia',
        'Esplenectomia',
        'Enterectomia',
        'Gastropexia'
      ]
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'Cirurgias Pélvicas',
      procedures: [
        'Correção de fraturas pélvicas',
        'Sinfisiodese púbica',
        'Uretrostomia',
        'Colopexia',
        'Ressecção de cabeça femoral',
        'Reconstrução pélvica'
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Serviços Cirúrgicos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de procedimentos cirúrgicos especializados
            com técnicas modernas e equipamentos de última geração
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald-700 text-white rounded-lg flex items-center justify-center mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <ul className="space-y-3">
                {service.procedures.map((procedure, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{procedure}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

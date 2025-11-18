import { useState } from 'react';
import { X } from 'lucide-react';

const cases = [
  {
    image: 'joelho2.jpeg',
    title: 'Cirurgia de Joelho - Ruptura de LCC',
    description: 'Correção cirúrgica de ligamento cruzado cranial com técnica TPLO'
  },
  {
    image: 'joelho4.jpeg',
    title: 'Fratura de Fêmur',
    description: 'Osteossíntese com placa bloqueada em fêmur distal'
  },
  {
    image: 'coluna1.jpeg',
    title: 'Hérnia de Disco Toracolombar',
    description: 'Hemilaminectomia para descompressão medular'
  },
  {
    image: 'ciru1.jpeg',
    title: 'Displasia Coxofemoral',
    description: 'Prótese total de quadril em cão adulto'
  },
  {
    image: 'patelar.jpeg',
    title: 'Luxação Patelar',
    description: 'Correção de luxação patelar medial grau III'
  },
  {
    image: 'radio.jpeg',
    title: 'Fratura de Rádio e Ulna',
    description: 'Fixação interna com placas e parafusos'
  },
  {
    image: 'ciru1.jpeg',
    title: 'Osteotomia Corretiva',
    description: 'Correção angular de deformidade em tíbia'
  },
  {
    image: 'asa.jpeg',
    title: 'Fratura Pélvica',
    description: 'Reconstrução pélvica com múltiplos implantes'
  },
  {
    image: 'ilio.jpeg',
    title: 'Disjunção sacroilíaca',
    description: 'Procedimento cirúrgico de redução e estabilização da disjunção sacroilíaca, mediante realinhamento da articulação e fixação óssea para restauração da continuidade pélvica'
  },
  {
    image: 'artrodese.jpeg',
    title: 'Artrodese',
    description: 'Procedimento indicado para casos de dor crônica, luxações e artropatias severas, oferecendo recuperação estrutural e melhora significativa na locomoção'
  },
  {
    image: 'tomo1.jpeg',
    title: 'Artrodese Vertebral',
    description: 'Estabilização cervical por instabilidade C1-C2'
  },
  {
    image: 'coxal.jpeg',
    title: 'Ressecção de Cabeça Femoral',
    description: 'Técnica de excisão artroplastia para dor coxofemoral'
  },
  {
    image: 'umero.jpeg',
    title: 'Fratura de Úmero',
    description: 'Fixação com haste intramedular bloqueada'
  },
  {
  image: 'logan.jpeg',
  title: 'Fratura em Metatarsos',
  description: 'Correção cirúrgica com estabilização óssea e síntese interna'
  },

  {
    image: 'perfil2.jpeg',
    title: 'Gastropexia Preventiva',
    description: 'Fixação gástrica profilática em raça de grande porte'
  },
  {
    image: 'coluna.jpeg',
    title: 'Estenose Lombossacral',
    description: 'Descompressão cirúrgica de cauda equina'
  },
  {
    image: 'https://images.pexels.com/photos/6235248/pexels-photo-6235248.jpeg',
    title: 'Cistotomia',
    description: 'Remoção de cálculo vesical por cistotomia'
  },
  {
    image: 'cranio.jpeg',
    title: 'Fratura de Mandíbula',
    description: 'Fixação mandibular com cerclagem e placa'
  }
];

function Gallery() {
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);

  return (
    <section id="casos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Casos Cirúrgicos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos procedimentos realizados com sucesso.
            Cada caso é tratado com dedicação e técnicas avançadas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedCase(caseItem)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{caseItem.title}</h3>
                <p className="text-gray-600 text-sm">{caseItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCase && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{selectedCase.title}</h3>
              <p className="text-gray-600 text-lg">{selectedCase.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;

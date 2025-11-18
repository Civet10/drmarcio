import { Award, GraduationCap, Stethoscope, Users } from 'lucide-react';

function About() {
  const credentials = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Cirurgião Volante',
      description: 'Atendimento especializado em diversas regiões'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Especialista em Ortopedia',
      description: 'Cirurgias ortopédicas e neuroespinhais'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Professor de Ortopedia',
      description: 'CETAC - Centro de Ensino e Treinamento'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Cirurgias Abdominais',
      description: 'Especialização em procedimentos pélvicos'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Dr. Márcio Miranda</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Médico Veterinário especialista em cirurgias ortopédicas e neuroespinhais,
            com vasta experiência em procedimentos abdominais e pélvicos.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Como cirurgião volante, atendo diversas regiões do estado de São Paulo,
            levando expertise e cuidado especializado para animais que necessitam de
            intervenções cirúrgicas complexas. Além da prática clínica, atuo como
            professor de Ortopedia no CETAC, contribuindo para a formação de novos profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-700 text-white rounded-full mb-4">
                {credential.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{credential.title}</h3>
              <p className="text-gray-600">{credential.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

import React from 'react';
import { Braces, Code2, Smartphone, Lightbulb } from 'lucide-react';
import Button from '../ui/Button';

const Mentorship: React.FC = () => {
  const tracks = [
    { icon: <Braces size={20} />, title: "Back-end Development" },
    { icon: <Code2 size={20} />, title: "Front-end Development" },
    { icon: <Smartphone size={20} />, title: "Mobile Development" },
    { icon: <Lightbulb size={20} />, title: "Product & Design" },
  ];

  return (
    <section id="mentorship" className="py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Content cabecalho */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-left">Programa de mentoria</h2>
          
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 text-left">
            Através das mentorias da nossa comunidade, você participa de encontros individuais focados em seu crescimento, 
            guiados por profissionais experientes das principais empresas de tecnologia. Esse acompanhamento personalizado 
            é fundamental para acelerar seu desenvolvimento e garantir que você aproveite ao máximo tudo o que aprendeu.
          </p>

          <ul className="space-y-3 text-zinc-400 text-left">
            <li className="flex items-baseline gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></span>
              <span>Mentorias individuais: Encontro com mentores;</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></span>
              <span>Flexibilidade de horários: Horários que se encaixam à sua rotina;</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0"></span>
              <span>Escolha sua pauta de acordo com os seus objetivos.</span>
            </li>
          </ul>
        </div>

        {/* Grade de trilhas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {tracks.map((track, idx) => (
            <div 
              key={idx} 
              className="bg-[#111] border border-zinc-800 p-6 rounded-xl h-44 flex flex-col justify-between group hover:border-zinc-600 transition-colors"
            >
              <div className="w-10 h-10 bg-zinc-800/50 border border-zinc-700/50 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                {track.icon}
              </div>
              <h3 className="font-semibold text-white">{track.title}</h3>
            </div>
          ))}
        </div>

        {/* Botoes de acao */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button className="w-full sm:w-auto min-w-[200px]">
            Quero ser mentorado
          </Button>
          <Button variant="outline-blue" className="w-full sm:w-auto min-w-[200px]">
            Quero ser mentor
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Mentorship;
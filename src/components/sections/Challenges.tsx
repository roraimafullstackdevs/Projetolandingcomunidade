import React from 'react';
import { ArrowRight, Monitor, Layers, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';
import { CHALLENGES_DATA } from '../../data';

const ChallengeCard: React.FC<{
  number: string;
  title: string;
  description: string;
  tags: { icon: React.ReactNode; label: string }[];
  imageIndex: number;
}> = ({ number, title, description, tags, imageIndex }) => (
  <div className="bg-[#111] border border-zinc-800 rounded-xl overflow-hidden flex flex-col h-full hover:border-zinc-600 transition-all duration-300 group">
    {/* Imagem cabecalho */}
    <div className="h-40 relative bg-zinc-800">
       <div className="absolute inset-0 bg-black/60 z-10"></div>
       <img 
        src={`https://picsum.photos/seed/${imageIndex + 90}/600/400`} 
        alt={title}
        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center gap-4">
        <img src="/logo.svg" alt="Logo" className="w-12 h-12 drop-shadow-lg" />
        <div className="flex flex-col text-white drop-shadow-lg">
            <span className="font-bold text-xl leading-none">Desafio</span>
            <span className="font-bold text-lg opacity-80">{number}</span>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-white mb-4 line-clamp-1">{title}</h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1A1A1A] border border-zinc-800 text-[10px] uppercase tracking-wider font-semibold text-zinc-400">
             {tag.icon}
             {tag.label}
          </div>
        ))}
      </div>

      <p className="text-zinc-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">{description}</p>

      <button className="mt-auto w-full bg-[#151f32] hover:bg-[#1e2e4a] text-blue-500 font-medium py-2.5 rounded-lg flex items-center justify-center text-sm transition-colors group/btn">
        Ver desafio <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
      </button>
    </div>
  </div>
);

const Challenges: React.FC = () => {
  // Injetando icones nos dados
  const challenges = CHALLENGES_DATA.map(challenge => ({
    ...challenge,
    tags: challenge.tags.map(tag => ({
      icon: tag.iconName === 'Monitor' ? <Monitor size={12}/> : <Layers size={12}/>,
      label: tag.label
    }))
  }));

  return (
    <section id="challenges" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Desafios</h2>
          <p className="text-lg text-zinc-400 max-w-5xl leading-relaxed">
            Roraima Fullstack Developers é um lugar para desenvolvedores aprenderem, compartilharem e crescerem. Nossa comunidade é construída por desenvolvedores, para desenvolvedores.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {challenges.map((challenge, idx) => (
            <ChallengeCard key={idx} {...challenge} />
          ))}
        </div>
        
        <div className="flex justify-center w-full">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12">
                Ver todos os desafios <ExternalLink size={16} className="ml-2"/>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
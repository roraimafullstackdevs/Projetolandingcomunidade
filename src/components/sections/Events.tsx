import React from 'react';
import { Calendar, Monitor, Users, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { EVENTS, type Event } from '../../data';

const EventCard: React.FC<Event> = ({ number, title, description, dateFull, dateShort, type, imageIndex }) => (
  <div className="bg-[#111] border border-zinc-800 rounded-xl overflow-hidden flex flex-col md:flex-row hover:border-zinc-600 transition-all duration-300 group h-full">
    {/* imagem esquerda */}
    <div className="w-full md:w-[180px] h-48 md:h-auto relative shrink-0 bg-zinc-800">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <img 
        src={`https://picsum.photos/seed/${imageIndex}/400/400`} 
        alt={title}
        className="w-full h-full object-cover opacity-50 mix-blend-overlay"
      />
      
      {/* Content sobreposto */}
      <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between">
        <div>
          <h4 className="text-white font-bold text-lg leading-tight">Evento</h4>
          <span className="text-zinc-400 text-sm font-bold">{number}</span>
          <p className="text-[10px] text-zinc-300 mt-2 font-medium">{dateFull}</p>
        </div>
        
        <div className="flex justify-center md:justify-start">
            <img src="/logo.svg" alt="Logo" className="w-10 h-10 opacity-80" />
        </div>
      </div>
    </div>

    {/* Secao Content direita */}
    <div className="p-5 flex flex-col justify-between flex-grow">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-3 md:line-clamp-2">
          {description}
        </p>
        
        {/* Tags metadados */}
        <div className="flex flex-wrap gap-2 mb-5">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs text-zinc-300">
            <Calendar size={12} />
            <span>{dateShort}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs text-zinc-300">
            {type === 'Remoto' ? <Monitor size={12} /> : <Users size={12} />}
            <span>{type}</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-[#182845] hover:bg-blue-600 text-blue-500 hover:text-white border border-blue-900/30 hover:border-transparent py-2.5 rounded-lg text-sm font-medium transition-all duration-300">
        Inscreva-se agora
      </button>
    </div>
  </div>
);

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Eventos</h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-5xl leading-relaxed">
            Roraima Fullstack Developers é um lugar para desenvolvedores aprenderem, compartilharem e crescerem. Nossa comunidade é construída por desenvolvedores, para desenvolvedores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {EVENTS.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>

        <div className="flex justify-center w-full">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 w-full sm:w-auto">
             Ver todos os eventos <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
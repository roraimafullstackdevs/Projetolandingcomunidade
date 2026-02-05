import React, { useState } from 'react';
import { Github, Globe, Search, Plus, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from '../../data';

const Showcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="showcase" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Secao cabecalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mural da Comunidade</h2>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
              Explore projetos incríveis desenvolvidos pelos membros da nossa comunidade. 
              Inspire-se, contribua e divulgue seu trabalho para o mundo.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
             <Button className="w-full md:w-auto shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-shadow duration-300">
                <Plus size={18} className="mr-2" />
                Divulgar projeto
             </Button>
          </div>
        </div>

        {/* Filtros - com scroll no mobile */}
        <div className="mb-10 border-b border-zinc-800 pb-4 overflow-x-auto hide-scrollbar">
          <div className="flex flex-nowrap md:flex-wrap gap-2 min-w-max md:min-w-0 pb-2 md:pb-0">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-blue-600/10 text-blue-500 border border-blue-600/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grade de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#111] border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 flex flex-col h-full"
            >
              {/* Imagem de capa */}
              <div className="relative h-48 overflow-hidden bg-zinc-800">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase rounded border border-white/10 tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Conteudo */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Autor */}
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={project.authorAvatar} 
                    alt={project.author} 
                    className="w-8 h-8 rounded-full border border-zinc-700"
                  />
                  <span className="text-xs text-zinc-400 font-medium">por <span className="text-zinc-200">{project.author}</span></span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded bg-zinc-800/50 text-zinc-400 border border-zinc-700/50">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Acoes */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-zinc-800/50">
                  <a href={project.demoUrl} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600/10 text-blue-500 text-xs font-medium hover:bg-blue-600 hover:text-white transition-all">
                    <Globe size={14} /> Live Demo
                  </a>
                  <a href={project.repoUrl} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-xs font-medium hover:bg-zinc-700 hover:text-white transition-all">
                    <Github size={14} /> Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Estado vazio */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#111] rounded-xl border border-zinc-800 border-dashed">
            <Search className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}

        <div className="mt-12 text-center">
            <Button variant="outline-blue" className="px-8 w-full sm:w-auto" onClick={() => {}}>
                Ver todos os projetos <ExternalLink size={16} className="ml-2" />
            </Button>
        </div>

      </div>
    </section>
  );
};

export default Showcase;
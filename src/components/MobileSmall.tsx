import { Menu, X, Calendar, Users, Trophy, GraduationCap, Github, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function MobileSmall() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* Background Gradient Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006FEE] opacity-20 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-600 opacity-10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#006FEE] opacity-15 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header - Sticky */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0A0F]/80 border-b border-white/5">
          <div className="px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-[#006FEE] to-purple-600 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg shadow-[#006FEE]/30">
                RR
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm">RR Fullstack</span>
                <span className="text-[10px] text-gray-400">Developers</span>
              </div>
            </div>
            
            {/* Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 hover:bg-white/10 rounded-lg transition-all duration-200 active:scale-95"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Slide-in */}
        <div className={`fixed top-[57px] right-0 bottom-0 w-[280px] bg-[#0A0A0F] border-l border-white/10 z-50 transform transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="px-6 py-8 space-y-2">
            <a 
              href="#sobre" 
              className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Sobre a comunidade
            </a>
            <a 
              href="#eventos" 
              className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Eventos
            </a>
            <a 
              href="#desafios" 
              className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Desafios
            </a>
            <a 
              href="#mentoria" 
              className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Mentoria
            </a>
            
            {/* Divider */}
            <div className="h-px bg-white/10 my-4" />
            
            {/* CTA Button in Menu */}
            <button className="w-full bg-[#006FEE] hover:bg-[#0062D9] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#006FEE]/30">
              Fazer cadastro
            </button>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="px-4 py-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#006FEE] to-purple-600 rounded-2xl flex items-center justify-center">
              <div className="text-2xl font-bold">RR</div>
            </div>
            <h1 className="text-3xl font-bold mb-4 leading-tight">
              Faça parte da comunidade<br />
              <span className="text-[#006FEE]">RR Fullstack Devs</span>
            </h1>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              A primeira comunidade de desenvolvedores fullstack de Roraima. Junte-se a nós para aprender, 
              compartilhar conhecimento e crescer profissionalmente.
            </p>
            <button className="w-full bg-[#006FEE] hover:bg-[#0062D9] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-[#006FEE]/30">
              Faça seu cadastro
            </button>
          </div>
        </section>

        {/* Sobre a Comunidade */}
        <section id="sobre" className="px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Sobre a comunidade</h2>
          <div className="space-y-4 max-w-md mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 bg-[#006FEE]/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-[#006FEE]" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Networking</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Conecte-se com outros desenvolvedores, compartilhe experiências e construa uma rede profissional sólida.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 bg-[#006FEE]/20 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="text-[#006FEE]" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Eventos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Participe de meetups, workshops e palestras com profissionais experientes da área de tecnologia.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 bg-[#006FEE]/20 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="text-[#006FEE]" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Desafios</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desenvolva suas habilidades através de desafios práticos e projetos colaborativos.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 bg-[#006FEE]/20 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="text-[#006FEE]" size={24} />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Mentoria</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Receba orientação de desenvolvedores experientes e acelere seu crescimento profissional.
              </p>
            </div>
          </div>
        </section>

        {/* Próximos Eventos */}
        <section className="px-4 py-12 bg-white/5">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center">Próximos eventos</h2>
            <p className="text-gray-400 text-center mb-8 text-sm">
              Fique por dentro dos próximos eventos da comunidade
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#006FEE]/20 rounded-xl px-3 py-2 text-center min-w-[60px]">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-xs text-gray-400">FEV</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Workshop: React Avançado</h3>
                  <p className="text-gray-400 text-sm mb-2">Aprenda técnicas avançadas de React com hooks personalizados e otimização de performance.</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>📍 Online</span>
                    <span>🕒 19:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#006FEE]/20 rounded-xl px-3 py-2 text-center min-w-[60px]">
                  <div className="text-2xl font-bold">22</div>
                  <div className="text-xs text-gray-400">FEV</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Meetup: Carreiras em Tech</h3>
                  <p className="text-gray-400 text-sm mb-2">Discussão sobre trajetórias profissionais e oportunidades no mercado de tecnologia.</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>📍 Presencial</span>
                    <span>🕒 18:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eventos */}
        <section id="eventos" className="px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Eventos</h2>
          <div className="space-y-4 max-w-md mx-auto">
            {[
              {
                title: "Evento 1",
                subtitle: "Workshop de desenvolvimento web",
                date: "Janeiro 2026",
                image: "https://images.unsplash.com/photo-1587691592099-24045742c181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc2hvcCUyMHRlY2glMjBldmVudHxlbnwxfHx8fDE3Njg1NzUwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                title: "Evento 2",
                subtitle: "Meetup de desenvolvedores",
                date: "Dezembro 2025",
                image: "https://images.unsplash.com/photo-1763568258752-fe55f4ab7267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBtZWV0dXAlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3Njg1NzUwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                title: "Evento 3",
                subtitle: "Tech conference apresentação",
                date: "Novembro 2025",
                image: "https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3Njg0ODgzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                title: "Evento 4",
                subtitle: "Hackathon da comunidade",
                date: "Outubro 2025",
                image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3Njg1NzE1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="text-xs text-[#006FEE] mb-2">{event.date}</div>
                  <h3 className="font-semibold mb-1 text-lg">{event.title}</h3>
                  <p className="text-gray-400 text-sm">{event.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200">
              Ver todos os eventos
            </button>
          </div>
        </section>

        {/* Desafios */}
        <section id="desafios" className="px-4 py-12 bg-white/5">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center">Desafios</h2>
            <p className="text-gray-400 text-center mb-8 text-sm">
              Participe dos desafios e teste suas habilidades
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Desafio 1",
                  description: "Construa um dashboard responsivo com React e TypeScript",
                  difficulty: "Intermediário",
                  participants: "24 participantes"
                },
                {
                  title: "Desafio 2",
                  description: "Crie uma API REST completa com Node.js e PostgreSQL",
                  difficulty: "Avançado",
                  participants: "18 participantes"
                },
                {
                  title: "Desafio 3",
                  description: "Desenvolva um clone do Instagram com Next.js",
                  difficulty: "Avançado",
                  participants: "32 participantes"
                }
              ].map((challenge, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#006FEE] to-purple-600 rounded-xl flex items-center justify-center">
                      <Trophy size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1 text-lg">{challenge.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{challenge.description}</p>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="bg-[#006FEE]/20 text-[#006FEE] px-3 py-1 rounded-full">
                          {challenge.difficulty}
                        </span>
                        <span className="text-gray-500">{challenge.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="w-full bg-[#006FEE] hover:bg-[#0062D9] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-[#006FEE]/30">
                Ver todos os desafios
              </button>
            </div>
          </div>
        </section>

        {/* Programa de Mentoria */}
        <section id="mentoria" className="px-4 py-12">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center">Programa de mentoria</h2>
            <p className="text-gray-400 text-center mb-8 text-sm">
              Conecte-se com mentores experientes da comunidade
            </p>

            <div className="bg-gradient-to-br from-[#006FEE]/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
              <h3 className="font-semibold mb-3 text-lg">Seja um mentorado</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Receba orientação personalizada de desenvolvedores experientes. Acelere seu aprendizado 
                e desenvolva habilidades essenciais para o mercado de trabalho.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-[#006FEE] mt-0.5">✓</span>
                  <span className="text-gray-300">Sessões 1-on-1 semanais</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-[#006FEE] mt-0.5">✓</span>
                  <span className="text-gray-300">Plano de carreira personalizado</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-[#006FEE] mt-0.5">✓</span>
                  <span className="text-gray-300">Code review e feedback contínuo</span>
                </li>
              </ul>
              <button className="w-full bg-[#006FEE] hover:bg-[#0062D9] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200">
                Quero ser mentorado
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-3 text-lg">Seja um mentor</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Compartilhe sua experiência e ajude outros desenvolvedores a crescerem. 
                Fortaleça a comunidade e desenvolva suas habilidades de liderança.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-[#006FEE] mt-0.5">✓</span>
                  <span className="text-gray-300">Flexibilidade de horários</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-[#006FEE] mt-0.5">✓</span>
                  <span className="text-gray-300">Reconhecimento na comunidade</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-[#006FEE] mt-0.5">✓</span>
                  <span className="text-gray-300">Certificado de mentor</span>
                </li>
              </ul>
              <button className="w-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200">
                Quero ser mentor
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-12 border-t border-white/10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-[#006FEE] to-purple-600 rounded-lg flex items-center justify-center font-bold text-sm">
                RR
              </div>
              <span className="font-bold">RR Fullstack Devs</span>
            </div>
            
            <p className="text-gray-400 text-center text-sm mb-8">
              A primeira comunidade de desenvolvedores fullstack de Roraima
            </p>

            <div className="flex justify-center gap-4 mb-8">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Youtube size={20} />
              </a>
            </div>

            <div className="text-center text-gray-500 text-xs">
              © 2026 RR Fullstack Devs. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
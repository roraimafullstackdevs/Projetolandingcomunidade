import { Menu, X, Calendar, Users, Trophy, GraduationCap, Github, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function MobileLarge() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* Background Gradient Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#006FEE] opacity-20 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600 opacity-10 blur-[110px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#006FEE] opacity-15 blur-[130px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header - Sticky */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0A0F]/80 border-b border-white/5">
          <div className="px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-gradient-to-br from-[#006FEE] to-purple-600 rounded-lg flex items-center justify-center font-bold shadow-lg shadow-[#006FEE]/30">
                RR
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold">RR Fullstack</span>
                <span className="text-xs text-gray-400">Developers</span>
              </div>
            </div>
            
            {/* Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 hover:bg-white/10 rounded-lg transition-all duration-200 active:scale-95"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
        <div className={`fixed top-[65px] right-0 bottom-0 w-[320px] bg-[#0A0A0F] border-l border-white/10 z-50 transform transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="px-6 py-8 space-y-2">
            <a 
              href="#sobre" 
              className="block py-3.5 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Sobre a comunidade
            </a>
            <a 
              href="#eventos" 
              className="block py-3.5 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Eventos
            </a>
            <a 
              href="#desafios" 
              className="block py-3.5 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Desafios
            </a>
            <a 
              href="#mentoria" 
              className="block py-3.5 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Mentoria
            </a>
            
            {/* Divider */}
            <div className="h-px bg-white/10 my-4" />
            
            {/* CTA Button in Menu */}
            <button className="w-full bg-[#006FEE] hover:bg-[#0062D9] text-white font-semibold py-3.5 px-4 rounded-lg transition-all duration-200 shadow-lg shadow-[#006FEE]/30">
              Fazer cadastro
            </button>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="px-6 py-16 text-center">
          <div className="max-w-lg mx-auto">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-[#006FEE] to-purple-600 rounded-2xl flex items-center justify-center">
              <div className="text-3xl font-bold">RR</div>
            </div>
            <h1 className="text-4xl font-bold mb-5 leading-tight">
              Faça parte da comunidade<br />
              <span className="text-[#006FEE]">RR Fullstack Devs</span>
            </h1>
            <p className="text-gray-400 mb-10 text-base leading-relaxed">
              A primeira comunidade de desenvolvedores fullstack de Roraima. Junte-se a nós para aprender, 
              compartilhar conhecimento e crescer profissionalmente junto com outros desenvolvedores da região.
            </p>
            <button className="w-full bg-[#006FEE] hover:bg-[#0062D9] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-[#006FEE]/30">
              Faça seu cadastro
            </button>
          </div>
        </section>

        {/* Sobre a Comunidade */}
        <section id="sobre" className="px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre a comunidade</h2>
          <div className="space-y-5 max-w-lg mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="w-14 h-14 bg-[#006FEE]/20 rounded-xl flex items-center justify-center mb-5">
                <Users className="text-[#006FEE]" size={28} />
              </div>
              <h3 className="font-semibold mb-3 text-xl">Networking</h3>
              <p className="text-gray-400 leading-relaxed">
                Conecte-se com outros desenvolvedores, compartilhe experiências e construa uma rede profissional sólida. 
                Participe de discussões e aprenda com a comunidade.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="w-14 h-14 bg-[#006FEE]/20 rounded-xl flex items-center justify-center mb-5">
                <Calendar className="text-[#006FEE]" size={28} />
              </div>
              <h3 className="font-semibold mb-3 text-xl">Eventos</h3>
              <p className="text-gray-400 leading-relaxed">
                Participe de meetups, workshops e palestras com profissionais experientes da área de tecnologia. 
                Eventos presenciais e online regularmente.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="w-14 h-14 bg-[#006FEE]/20 rounded-xl flex items-center justify-center mb-5">
                <Trophy className="text-[#006FEE]" size={28} />
              </div>
              <h3 className="font-semibold mb-3 text-xl">Desafios</h3>
              <p className="text-gray-400 leading-relaxed">
                Desenvolva suas habilidades através de desafios práticos e projetos colaborativos. 
                Teste seus conhecimentos e aprenda novas tecnologias.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="w-14 h-14 bg-[#006FEE]/20 rounded-xl flex items-center justify-center mb-5">
                <GraduationCap className="text-[#006FEE]" size={28} />
              </div>
              <h3 className="font-semibold mb-3 text-xl">Mentoria</h3>
              <p className="text-gray-400 leading-relaxed">
                Receba orientação de desenvolvedores experientes e acelere seu crescimento profissional. 
                Aprenda com quem já trilhou o caminho que você quer seguir.
              </p>
            </div>
          </div>
        </section>

        {/* Próximos Eventos */}
        <section className="px-6 py-16 bg-white/5">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center">Próximos eventos</h2>
            <p className="text-gray-400 text-center mb-10">
              Fique por dentro dos próximos eventos da comunidade
            </p>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-5">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 bg-[#006FEE]/20 rounded-xl px-4 py-3 text-center min-w-[70px]">
                  <div className="text-3xl font-bold">15</div>
                  <div className="text-sm text-gray-400 mt-1">FEV</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2 text-xl">Workshop: React Avançado</h3>
                  <p className="text-gray-400 mb-3 leading-relaxed">
                    Aprenda técnicas avançadas de React com hooks personalizados e otimização de performance. 
                    Sessão hands-on com exemplos práticos.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>📍 Online</span>
                    <span>🕒 19:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 bg-[#006FEE]/20 rounded-xl px-4 py-3 text-center min-w-[70px]">
                  <div className="text-3xl font-bold">22</div>
                  <div className="text-sm text-gray-400 mt-1">FEV</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2 text-xl">Meetup: Carreiras em Tech</h3>
                  <p className="text-gray-400 mb-3 leading-relaxed">
                    Discussão sobre trajetórias profissionais e oportunidades no mercado de tecnologia. 
                    Networking com profissionais da área.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>📍 Presencial</span>
                    <span>🕒 18:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eventos */}
        <section id="eventos" className="px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Eventos</h2>
          <div className="space-y-5 max-w-lg mx-auto">
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
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-[#006FEE] mb-2">{event.date}</div>
                  <h3 className="font-semibold mb-2 text-xl">{event.title}</h3>
                  <p className="text-gray-400">{event.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-200">
              Ver todos os eventos
            </button>
          </div>
        </section>

        {/* Desafios */}
        <section id="desafios" className="px-6 py-16 bg-white/5">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center">Desafios</h2>
            <p className="text-gray-400 text-center mb-10">
              Participe dos desafios e teste suas habilidades
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "Desafio 1",
                  description: "Construa um dashboard responsivo com React e TypeScript utilizando as melhores práticas",
                  difficulty: "Intermediário",
                  participants: "24 participantes"
                },
                {
                  title: "Desafio 2",
                  description: "Crie uma API REST completa com Node.js e PostgreSQL implementando autenticação",
                  difficulty: "Avançado",
                  participants: "18 participantes"
                },
                {
                  title: "Desafio 3",
                  description: "Desenvolva um clone do Instagram com Next.js incluindo feed e sistema de likes",
                  difficulty: "Avançado",
                  participants: "32 participantes"
                }
              ].map((challenge, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#006FEE] to-purple-600 rounded-xl flex items-center justify-center">
                      <Trophy size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 text-xl">{challenge.title}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">{challenge.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-[#006FEE]/20 text-[#006FEE] px-4 py-1.5 rounded-full font-medium">
                          {challenge.difficulty}
                        </span>
                        <span className="text-gray-500">{challenge.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="w-full bg-[#006FEE] hover:bg-[#0062D9] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-[#006FEE]/30">
                Ver todos os desafios
              </button>
            </div>
          </div>
        </section>

        {/* Programa de Mentoria */}
        <section id="mentoria" className="px-6 py-16">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-3 text-center">Programa de mentoria</h2>
            <p className="text-gray-400 text-center mb-10">
              Conecte-se com mentores experientes da comunidade
            </p>

            <div className="bg-gradient-to-br from-[#006FEE]/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-7 mb-6">
              <h3 className="font-semibold mb-4 text-2xl">Seja um mentorado</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Receba orientação personalizada de desenvolvedores experientes. Acelere seu aprendizado 
                e desenvolva habilidades essenciais para o mercado de trabalho através de sessões individuais.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#006FEE] mt-1 text-lg">✓</span>
                  <span className="text-gray-300">Sessões 1-on-1 semanais personalizadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#006FEE] mt-1 text-lg">✓</span>
                  <span className="text-gray-300">Plano de carreira personalizado e acompanhamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#006FEE] mt-1 text-lg">✓</span>
                  <span className="text-gray-300">Code review e feedback contínuo em seus projetos</span>
                </li>
              </ul>
              <button className="w-full bg-[#006FEE] hover:bg-[#0062D9] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200">
                Quero ser mentorado
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7">
              <h3 className="font-semibold mb-4 text-2xl">Seja um mentor</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Compartilhe sua experiência e ajude outros desenvolvedores a crescerem na carreira. 
                Fortaleça a comunidade e desenvolva suas habilidades de liderança e comunicação.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#006FEE] mt-1 text-lg">✓</span>
                  <span className="text-gray-300">Flexibilidade de horários para mentorias</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#006FEE] mt-1 text-lg">✓</span>
                  <span className="text-gray-300">Reconhecimento e destaque na comunidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#006FEE] mt-1 text-lg">✓</span>
                  <span className="text-gray-300">Certificado de mentor verificado</span>
                </li>
              </ul>
              <button className="w-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200">
                Quero ser mentor
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-16 border-t border-white/10">
          <div className="max-w-lg mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#006FEE] to-purple-600 rounded-lg flex items-center justify-center font-bold">
                RR
              </div>
              <span className="font-bold text-lg">RR Fullstack Devs</span>
            </div>
            
            <p className="text-gray-400 text-center mb-10 leading-relaxed">
              A primeira comunidade de desenvolvedores fullstack de Roraima
            </p>

            <div className="flex justify-center gap-4 mb-10">
              <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Github size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors">
                <Youtube size={22} />
              </a>
            </div>

            <div className="text-center text-gray-500 text-sm">
              © 2026 RR Fullstack Devs. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
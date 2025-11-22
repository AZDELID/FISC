import { ArrowDown, Compass, Map, BookOpen, Sparkles } from 'lucide-react';

type Page = 'home' | 'roadmap' | 'tracks' | 'quiz' | 'result' | 'resources';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A6DFF]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7A5BFF]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#56F0C3]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Sparkles className="text-[#56F0C3]" size={16} />
            <span className="text-white/80 text-sm">Plataforma Interactiva de Orientación Académica</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            Explora tu Viaje en{' '}
            <span className="bg-gradient-to-r from-[#4A6DFF] via-[#7A5BFF] to-[#56F0C3] bg-clip-text text-transparent">
              Ingeniería de Sistemas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto">
            Rutas académicas, cursos, áreas de especialización y tu futuro profesional en un solo lugar
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => onNavigate('roadmap')}
              className="group px-8 py-4 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#4A6DFF]/50 transition-all hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Map size={20} />
              Ver Ruta de Cursos
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button
              onClick={() => onNavigate('quiz')}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl hover:bg-white/20 transition-all hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Compass size={20} />
              Encuentra tu Área Ideal
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="text-white/40 mx-auto" size={32} />
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white mb-4">Comienza a Construir tu Futuro Hoy</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Descubre las herramientas y recursos que te ayudarán a tomar decisiones informadas sobre tu carrera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#4A6DFF]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A6DFF] to-[#7A5BFF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Map className="text-white" size={32} />
              </div>
              <h3 className="text-2xl text-white mb-4">Roadmap Completo</h3>
              <p className="text-white/70 mb-6">
                Visualiza todos los cursos organizados por semestre y descubre cómo se conectan entre sí
              </p>
              <button
                onClick={() => onNavigate('roadmap')}
                className="text-[#56F0C3] hover:text-[#56F0C3]/80 transition-colors flex items-center gap-2"
              >
                Explorar →
              </button>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#7A5BFF]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7A5BFF] to-[#56F0C3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-2xl text-white mb-4">Áreas de Especialización</h3>
              <p className="text-white/70 mb-6">
                Conoce las tres áreas electivas del 7mo semestre: Bases de Datos, Aplicaciones y Desarrollo Web
              </p>
              <button
                onClick={() => onNavigate('tracks')}
                className="text-[#56F0C3] hover:text-[#56F0C3]/80 transition-colors flex items-center gap-2"
              >
                Comparar →
              </button>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#56F0C3]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#56F0C3] to-[#4A6DFF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass className="text-white" size={32} />
              </div>
              <h3 className="text-2xl text-white mb-4">Quiz Interactivo</h3>
              <p className="text-white/70 mb-6">
                Responde 10 preguntas y descubre qué área de especialización se ajusta mejor a tu perfil
              </p>
              <button
                onClick={() => onNavigate('quiz')}
                className="text-[#56F0C3] hover:text-[#56F0C3]/80 transition-colors flex items-center gap-2"
              >
                Comenzar →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] bg-clip-text text-transparent">10</div>
              <div className="text-white/70">Semestres</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#7A5BFF] to-[#56F0C3] bg-clip-text text-transparent">46</div>
              <div className="text-white/70">Cursos Totales</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#56F0C3] to-[#4A6DFF] bg-clip-text text-transparent">3</div>
              <div className="text-white/70">Áreas Electivas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 bg-gradient-to-r from-[#4A6DFF] to-[#56F0C3] bg-clip-text text-transparent">∞</div>
              <div className="text-white/70">Posibilidades</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
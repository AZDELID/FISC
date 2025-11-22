import { Brain, Cloud, Shield, Lightbulb, Github, Youtube, Award, Users } from 'lucide-react';

const additionalPaths = [
  {
    id: 'ai',
    name: 'Inteligencia Artificial',
    icon: Brain,
    color: '#FF6B9D',
    description: 'Machine Learning, Deep Learning, y aplicaciones de IA',
    resources: ['TensorFlow', 'PyTorch', 'Scikit-learn']
  },
  {
    id: 'cloud',
    name: 'Cloud Computing',
    icon: Cloud,
    color: '#4ECDC4',
    description: 'AWS, Azure, y arquitecturas cloud nativas',
    resources: ['AWS', 'Azure', 'Google Cloud']
  },
  {
    id: 'security',
    name: 'Ciberseguridad',
    icon: Shield,
    color: '#FFD93D',
    description: 'Seguridad de aplicaciones y protección de datos',
    resources: ['Kali Linux', 'Metasploit', 'OWASP']
  }
];

const semesterTips = [
  {
    semester: '1-2',
    title: 'Primeros Semestres',
    tips: [
      'Enfócate en construir bases sólidas de matemáticas y programación',
      'Practica algoritmos regularmente en plataformas como HackerRank',
      'Únete a comunidades estudiantiles de tecnología'
    ]
  },
  {
    semester: '3-4',
    title: 'Semestres Intermedios',
    tips: [
      'Comienza a trabajar en proyectos personales',
      'Aprende a usar Git y GitHub',
      'Participa en hackathons locales'
    ]
  },
  {
    semester: '5-6',
    title: 'Semestres Avanzados',
    tips: [
      'Busca prácticas profesionales o internships',
      'Contribuye a proyectos open source',
      'Define tu área de especialización'
    ]
  },
  {
    semester: '7-8',
    title: 'Pre-graduación',
    tips: [
      'Construye un portafolio profesional',
      'Networking en eventos de tecnología',
      'Prepárate para entrevistas técnicas'
    ]
  }
];

const studentStories = [
  {
    name: 'Ana García',
    track: 'Desarrollo Web',
    photo: '👩‍💻',
    quote: 'El quiz me ayudó a descubrir mi pasión por el frontend. Ahora trabajo como UI Developer en una startup.',
    role: 'Frontend Developer'
  },
  {
    name: 'Carlos Mendoza',
    track: 'Bases de Datos',
    photo: '👨‍💼',
    quote: 'Siempre me gustaron los datos. Elegir esta área fue la mejor decisión de mi carrera.',
    role: 'Data Engineer'
  },
  {
    name: 'María Rodríguez',
    track: 'Aplicaciones',
    photo: '👩‍🔬',
    quote: 'Me encanta resolver problemas complejos. El área de aplicaciones me dio todas las herramientas que necesitaba.',
    role: 'Backend Engineer'
  }
];

export function Resources() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-white mb-4">Recursos Adicionales</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explora más áreas, consejos por semestre, y recursos para potenciar tu aprendizaje
          </p>
        </div>

        {/* Additional Career Paths */}
        <section className="mb-16">
          <h2 className="text-3xl text-white mb-8 flex items-center gap-3">
            <Lightbulb size={32} className="text-[#56F0C3]" />
            Otras Áreas de Interés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalPaths.map((path) => {
              const Icon = path.icon;
              return (
                <div
                  key={path.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${path.color}20`, border: `2px solid ${path.color}40` }}
                  >
                    <Icon size={32} style={{ color: path.color }} />
                  </div>
                  <h3 className="text-2xl text-white mb-2">{path.name}</h3>
                  <p className="text-white/70 mb-4">{path.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {path.resources.map((resource) => (
                      <span
                        key={resource}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-white/70 text-sm"
                      >
                        {resource}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Semester Tips */}
        <section className="mb-16">
          <h2 className="text-3xl text-white mb-8 flex items-center gap-3">
            <Award size={32} className="text-[#4A6DFF]" />
            Consejos por Semestre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {semesterTips.map((tip) => (
              <div
                key={tip.semester}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-4 py-2 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] rounded-xl text-white">
                    {tip.semester}
                  </div>
                  <h3 className="text-xl text-white">{tip.title}</h3>
                </div>
                <ul className="space-y-2">
                  {tip.tips.map((t, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/70">
                      <span className="text-[#56F0C3] mt-1">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Repos */}
        <section className="mb-16">
          <h2 className="text-3xl text-white mb-8 flex items-center gap-3">
            <Github size={32} className="text-[#7A5BFF]" />
            Repositorios Recomendados
          </h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-white/70 mb-4">
              [Sección para agregar enlaces a repositorios de GitHub recomendados]
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="text-white mb-2">📦 Awesome Systems Engineering</h4>
                <p className="text-white/60 text-sm">Colección de recursos para estudiantes</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h4 className="text-white mb-2">🎓 CS Learning Path</h4>
                <p className="text-white/60 text-sm">Ruta de aprendizaje completa</p>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Channels */}
        <section className="mb-16">
          <h2 className="text-3xl text-white mb-8 flex items-center gap-3">
            <Youtube size={32} className="text-[#FF6B6B]" />
            Canales de YouTube Recomendados
          </h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-white/70 mb-4">
              [Sección para agregar canales de YouTube educativos]
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Programación', 'Bases de Datos', 'Desarrollo Web'].map((topic) => (
                <div key={topic} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <Youtube className="mx-auto mb-2 text-[#FF6B6B]" size={32} />
                  <h4 className="text-white">{topic}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Stories */}
        <section className="mb-16">
          <h2 className="text-3xl text-white mb-8 flex items-center gap-3">
            <Users size={32} className="text-[#56F0C3]" />
            Historias de Estudiantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentStories.map((story) => (
              <div
                key={story.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105"
              >
                <div className="text-6xl mb-4 text-center">{story.photo}</div>
                <h3 className="text-xl text-white mb-1">{story.name}</h3>
                <p className="text-[#56F0C3] text-sm mb-3">{story.role}</p>
                <p className="text-white/70 italic mb-3">"{story.quote}"</p>
                <div className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs inline-block">
                  {story.track}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Simulator Placeholder */}
        <section>
          <div className="bg-gradient-to-r from-[#4A6DFF]/20 via-[#7A5BFF]/20 to-[#56F0C3]/20 border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl text-white mb-4">🎮 Simulador de Carrera</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              [Función futura: Simulador interactivo para explorar diferentes trayectorias profesionales]
            </p>
            <button className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all cursor-not-allowed opacity-50">
              Próximamente
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

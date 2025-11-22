import { useState } from 'react';
import { Server, Code, Globe, ArrowRight, CheckCircle, X } from 'lucide-react';
import { TrackDetail } from './TrackDetail';

type Page = 'home' | 'roadmap' | 'tracks' | 'quiz' | 'result' | 'resources';

interface TracksComparisonProps {
  onNavigate: (page: Page) => void;
}

const tracks = [
  {
    id: 'redes',
    name: 'Redes, Servidores y Cloud Computing',
    shortName: 'Redes & Cloud',
    icon: Server,
    color: '#4A6DFF',
    gradient: 'from-[#4A6DFF] to-[#6B8FFF]',
    emoji: '🌐',
    tagline: 'Para quienes quieren dominar la parte "oculta" de Internet',
    description: 'Conviértete en la persona capaz de construir, mantener y escalar la infraestructura tecnológica que mantiene en pie a Google, Netflix, TikTok, bancos, universidades y apps que usas todos los días.',
    questions: [
      '¿Cómo viajan los datos por Internet?',
      '¿Cómo haces que miles de usuarios puedan acceder a una app sin que explote?',
      '¿Cómo se administra un servidor real en producción?',
      '¿Cómo funciona la nube (AWS, Azure, Google Cloud)?'
    ],
    learnings: [
      'Crear redes reales con routers, switches y VLANs',
      'Administrar servidores Linux y Windows como un profesional',
      'Virtualizar máquinas (como lo hacen las empresas)',
      'Subir servicios a la nube (AWS, Azure, GCP)',
      'Configurar topologías completas usando herramientas modernas',
      'Seguridad en redes (firewalls, protocolos, hacking ético básico)',
      'Automatizar tareas con scripts'
    ],
    attractions: [
      'Puedes simular ataques y defensas en laboratorios virtuales',
      'Tocarás hardware de verdad (routers, switches, racks)',
      'Aprenderás tecnologías que usan empresas "top"',
      'Es la base para trabajos remotos bien pagados',
      'Es una rama con MUY poca competencia, por eso paga bien',
      'Permite certificaciones que te diferencian del resto'
    ],
    careers: [
      'Administrador de Redes (Network Admin)',
      'Ingeniero Cloud (muy buscado)',
      'DevOps / SRE (sueldos altos)',
      'Soporte Especializado Nivel 3',
      'Especialista en Seguridad de Redes'
    ],
    pros: [
      'Muy bien remunerada globalmente',
      'Baja competencia: pocos estudiantes eligen esta rama',
      'Fundamental en empresas grandes: siempre hay trabajo',
      'Conocimiento técnico sólido que te vuelve indispensable'
    ],
    cons: [
      'Requiere paciencia y práctica constante',
      'Mucha configuración técnica (comandos, protocolos)',
      'Al inicio puede parecer más "rudo" que programar web'
    ],
    skills: [
      'Pensamiento lógico',
      'Ganas de entender "cómo funciona todo por dentro"',
      'Familiaridad con Linux y conceptos básicos de redes',
      'Capacidad de resolver problemas bajo presión'
    ],
    profile: 'Si te gusta "arreglar cosas", cacharrear, entender cables, servidores, infraestructura y cómo Internet realmente opera… esta es tu ruta.',
    tools: ['Linux', 'Cisco', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Ansible', 'Terraform'],
    languages: ['Bash', 'Python', 'PowerShell'],
    certifications: ['CCNA', 'AWS Solutions Architect', 'Azure Administrator', 'CompTIA Network+']
  },
  {
    id: 'software',
    name: 'RAMA 2: Desarrollo de Software',
    shortName: 'Software & Backend',
    icon: Code,
    color: '#FF6B6B',
    gradient: 'from-[#FF6B6B] to-[#FF8E8E]',
    emoji: '💻',
    tagline: 'Para quienes aman programar y construir sistemas complejos',
    description: 'Esta ruta te lleva al corazón del desarrollo profesional: diseñar, construir, probar y desplegar software real, no solo tareas de clase. Aprenderás cómo se programan apps grandes como Facebook, bancos o apps de delivery.',
    questions: [
      '¿Cómo se diseña software escalable?',
      '¿Cómo trabajan los equipos en empresas tech reales?',
      '¿Qué es arquitectura de microservicios?',
      '¿Cómo se prueba código de calidad profesional?'
    ],
    learnings: [
      'Trabajar en equipo con metodología Scrum',
      'Diseñar y construir APIs reales',
      'Programar sistemas escalables y mantenibles',
      'Crear soluciones empresariales de principio a fin',
      'Patrones de diseño usados en la industria (MVC, SOLID, DTO, etc.)',
      'Arquitectura de microservicios (conceptual)',
      'Pruebas unitarias y calidad de software'
    ],
    attractions: [
      'Harás proyectos "grandes", como apps completas',
      'Aprenderás a trabajar como en una startup real',
      'Puedes crear tu propio software o emprendimiento',
      'Dominarás habilidades muy pedidas en empresas "top"',
      'Ideal si quieres un trabajo remoto nacional o internacional'
    ],
    careers: [
      'Desarrollador Backend',
      'Analista de Software',
      'Arquitecto de Soluciones Junior',
      'Líder Técnico (a futuro)',
      'Programador en empresas fintech, e-commerce, startups'
    ],
    pros: [
      'Amplia salida laboral: todas las empresas necesitan programadores',
      'Puedes crear tus propias apps o lanzar tu startup',
      'Muy versátil: sirve en backend, arquitectura, data, etc.',
      'Es la base para trabajo remoto internacional'
    ],
    cons: [
      'Mucha competencia porque muchos eligen esta rama',
      'Requiere mucha práctica y disciplina diaria',
      'Proyectos grandes → más responsabilidades'
    ],
    skills: [
      'Lógica de programación sólida',
      'Manejar al menos un lenguaje backend (Java, Python, Node, C#)',
      'Capacidad de diseñar soluciones',
      'Trabajo en equipo y comunicación'
    ],
    profile: 'Estudiantes que disfrutan programar, resolver problemas, participar en proyectos grandes y quieren trabajar en tecnología pura.',
    tools: ['Git', 'Docker', 'Jenkins', 'Postman', 'JUnit', 'Spring Boot', 'Node.js', 'Django'],
    languages: ['Java', 'Python', 'JavaScript/TypeScript', 'C#', 'Go'],
    certifications: ['Oracle Certified Java', 'AWS Developer', 'Scrum Master']
  },
  {
    id: 'web',
    name: 'RAMA 3: Desarrollo Web Full Stack',
    shortName: 'Web Full Stack',
    icon: Globe,
    color: '#56F0C3',
    gradient: 'from-[#56F0C3] to-[#7FF5D4]',
    emoji: '🌐💙',
    tagline: 'Para quienes quieren crear aplicaciones modernas y visuales que la gente use',
    description: 'Esta ruta es la más creativa y tangible: aprenderás a crear páginas web, aplicaciones visuales, sistemas con frontend moderno, backend web y despliegue en la nube. Si lo tuyo es ver algo bonito, funcional y moderno… esta es tu ruta.',
    questions: [
      '¿Cómo se crean interfaces modernas como las de Instagram o Spotify?',
      '¿Cómo conectar un frontend con un backend?',
      '¿Cómo desplegar una app web en Internet?',
      '¿Qué hace que una web sea responsive?'
    ],
    learnings: [
      'Programar interfaces profesionales con HTML, CSS y JS',
      'Usar frameworks modernos (React, Vue, Angular)',
      'Crear APIs y conectarlas al frontend',
      'Autenticación, sesiones, seguridad web',
      'Conectar bases de datos a tu aplicación web',
      'Desplegar tu sitio en la nube (Netlify, Render, Vercel, etc.)'
    ],
    attractions: [
      'Ver resultados rápidos y visuales te motiva',
      'Puedes hacer portafolios o proyectos para clientes reales',
      'Habilidad ideal para freelance (ganar dinero mientras estudias)',
      'Puedes crear tu propia web, blog, e-commerce, etc.',
      'La web siempre está evolucionando → es emocionante'
    ],
    careers: [
      'Frontend Developer',
      'Full-Stack Developer',
      'Diseñador Web Técnico',
      'Programador Freelance',
      'Especialista en Deploy Web'
    ],
    pros: [
      'Es la ruta más creativa y visual',
      'Proyectos muy llamativos para portafolio',
      'Perfecta para trabajar de manera independiente',
      'Rápido crecimiento profesional'
    ],
    cons: [
      'Mucho por aprender (frameworks, librerías, preprocesadores…)',
      'Muy cambiante (la web evoluciona cada año)',
      'Requiere tanto lógica como diseño básico'
    ],
    skills: [
      'Manejo de HTML, CSS, JavaScript',
      'Creatividad y pensamiento visual',
      'Capacidad de aprender tecnologías nuevas constantemente'
    ],
    profile: 'Personas creativas, visuales, que disfrutan ver sus proyectos funcionar y quieren crear aplicaciones web modernas que luzcan profesionales.',
    tools: ['VS Code', 'Figma', 'Git', 'Chrome DevTools', 'Postman', 'Webpack', 'Vite'],
    languages: ['HTML/CSS', 'JavaScript', 'TypeScript', 'SQL'],
    certifications: ['Meta Frontend Developer', 'AWS Cloud Practitioner', 'Google UX Design']
  }
];

export function TracksComparison({ onNavigate }: TracksComparisonProps) {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  if (selectedTrack) {
    const track = tracks.find(t => t.id === selectedTrack);
    if (track) {
      return <TrackDetail track={track} onBack={() => setSelectedTrack(null)} onNavigate={onNavigate} />;
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-white mb-4">Áreas de Especialización</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            En el 7mo semestre elegirás una de estas tres ramas. Cada una abre puertas a diferentes oportunidades profesionales y estilos de trabajo.
          </p>
          <button
            onClick={() => onNavigate('quiz')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#4A6DFF]/50 transition-all hover:scale-105"
          >
            ¿No estás seguro? Haz el Quiz
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Track Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl"
                style={{ boxShadow: `0 20px 60px ${track.color}20` }}
              >
                {/* Icon & Emoji */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${track.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="text-white" size={40} />
                  </div>
                  <span className="text-5xl">{track.emoji}</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl text-white mb-2">{track.shortName}</h2>
                <p className="text-white/60 text-sm mb-6 italic">"{track.tagline}"</p>

                {/* Description */}
                <p className="text-white/80 mb-6 line-clamp-4">{track.description}</p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {track.id === 'redes' && (
                    <>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-2xl mb-1" style={{ color: track.color }}>🔒</div>
                        <div className="text-white/60 text-xs">Baja Competencia</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-2xl mb-1" style={{ color: track.color }}>⚡</div>
                        <div className="text-white/60 text-xs">Alta Estabilidad</div>
                      </div>
                    </>
                  )}
                  {track.id === 'software' && (
                    <>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-2xl mb-1" style={{ color: track.color }}>🚀</div>
                        <div className="text-white/60 text-xs">Muy Versátil</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-2xl mb-1" style={{ color: track.color }}>💼</div>
                        <div className="text-white/60 text-xs">Alta Demanda</div>
                      </div>
                    </>
                  )}
                  {track.id === 'web' && (
                    <>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-2xl mb-1" style={{ color: track.color }}>🎨</div>
                        <div className="text-white/60 text-xs">Muy Creativo</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <div className="text-2xl mb-1" style={{ color: track.color }}>💰</div>
                        <div className="text-white/60 text-xs">Ideal Freelance</div>
                      </div>
                    </>
                  )}
                </div>

                {/* Top Careers Preview */}
                <div className="mb-6">
                  <h4 className="text-white text-sm mb-2">💼 Salidas Profesionales</h4>
                  <ul className="space-y-1">
                    {track.careers.slice(0, 3).map((career, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                        <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: track.color }} />
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setSelectedTrack(track.id)}
                  className={`w-full py-3 bg-gradient-to-r ${track.gradient} text-white rounded-xl hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2`}
                >
                  Explorar Área
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-16">
          <h2 className="text-3xl text-white mb-8 text-center">Comparación Rápida</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white/80"></th>
                  {tracks.map((track) => {
                    const Icon = track.icon;
                    return (
                      <th key={track.id} className="text-center py-4 px-4">
                        <div className="flex flex-col items-center gap-2">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${track.gradient} rounded-xl flex items-center justify-center`}
                          >
                            <Icon className="text-white" size={24} />
                          </div>
                          <span className="text-white text-sm">{track.shortName}</span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Enfoque Principal</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Infraestructura & Redes</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Lógica & Arquitectura</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Interfaces & UX</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Creatividad</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐⭐</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Nivel Técnico</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Muy Alto</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Alto</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Medio-Alto</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Competencia</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Baja</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Alta</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Media-Alta</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Trabajo Remoto</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐⭐⭐</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐⭐⭐⭐</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Freelance</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐⭐⭐</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Hardware vs Software</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">70% Hardware</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">100% Software</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">90% Software</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Certificaciones Importantes</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Muy Importantes</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Importantes</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Opcionales</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Curva de Aprendizaje</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Empinada</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Moderada</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Gradual</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Resultados Visibles</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">A largo plazo</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Medio plazo</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Inmediatos</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white">Uso de Matemáticas</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐⭐</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐⭐⭐</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">⭐⭐</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white">Actualización de Tecnologías</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Lenta</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Moderada</td>
                  <td className="py-4 px-4 text-white/70 text-center text-sm">Muy Rápida</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#4A6DFF]/10 via-[#7A5BFF]/10 to-[#56F0C3]/10 border border-white/10 rounded-3xl p-12">
          <h2 className="text-3xl text-white mb-4">¿Aún tienes dudas?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Nuestro quiz interactivo analiza tus preferencias y habilidades para recomendarte el área más adecuada para ti
          </p>
          <button
            onClick={() => onNavigate('quiz')}
            className="px-8 py-4 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#4A6DFF]/50 transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Comenzar Quiz Ahora
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import roadmapImage from 'figma:asset/ae13688e1029165e92e1fac834064826d015a458.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Course {
  code: string;
  name: string;
  credits: number;
  type: string;
  prerequisite: string;
  description?: string;
}

interface Semester {
  number: number;
  name: string;
  year: number;
  color: string;
  courses: Course[];
}

const semestersData: Semester[] = [
  {
    number: 1,
    name: 'I Semestre',
    year: 1,
    color: '#FFB84D',
    courses: [
      { code: '17101', name: 'Matemática Básica', credits: 4, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17102', name: 'Comunicación Oral y Escrita', credits: 2, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17103', name: 'Matemática Superior', credits: 4, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17104', name: 'Física General', credits: 4, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17201', name: 'Cálculo Diferencial', credits: 4, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17301', name: 'Algoritmos', credits: 4, type: 'Obligatorio', prerequisite: 'Ninguno' }
    ]
  },
  {
    number: 2,
    name: 'II Semestre',
    year: 1,
    color: '#A8E855',
    courses: [
      { code: '17105', name: 'Química General', credits: 4, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17106', name: 'Realidad Nacional', credits: 1, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17107', name: 'Estadística General', credits: 4, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17108', name: 'Métodos de Estudio del Trabajo Universitario', credits: 2, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17109', name: 'Taller de Arte Música y Canto', credits: 1, type: 'Electivo', prerequisite: 'Ninguno' },
      { code: '17110', name: 'Taller de Arte Danza', credits: 1, type: 'Electivo', prerequisite: 'Ninguno' },
      { code: '17111', name: 'Taller de Arte Teatro', credits: 1, type: 'Electivo', prerequisite: 'Ninguno' },
      { code: '17202', name: 'Cálculo Integral', credits: 4, type: 'Obligatorio', prerequisite: '17201' },
      { code: '17302', name: 'Lenguaje de Programación I', credits: 4, type: 'Obligatorio', prerequisite: '17301' }
    ]
  },
  {
    number: 3,
    name: 'III Semestre',
    year: 2,
    color: '#56E0E0',
    courses: [
      { code: '17112', name: 'Ecología', credits: 3, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17113', name: 'Inglés Básico', credits: 2, type: 'Electivo', prerequisite: 'Ninguno' },
      { code: '17114', name: 'Quechua', credits: 2, type: 'Electivo', prerequisite: 'Ninguno' },
      { code: '17115', name: 'Educación Física', credits: 1, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17203', name: 'Matemática Básica II', credits: 4, type: 'Obligatorio', prerequisite: '17101' },
      { code: '17204', name: 'Cálculo Multivariable', credits: 4, type: 'Obligatorio', prerequisite: '17202' },
      { code: '17205', name: 'Física I', credits: 4, type: 'Obligatorio', prerequisite: '17104' },
      { code: '17303', name: 'Lenguaje de Programación II', credits: 4, type: 'Obligatorio', prerequisite: '17302' }
    ]
  },
  {
    number: 4,
    name: 'IV Semestre',
    year: 2,
    color: '#D4A5F4',
    courses: [
      { code: '17116', name: 'Metodología de la Investigación Científica', credits: 3, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17206', name: 'Matemática Discreta', credits: 3, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17207', name: 'Inferencia Estadística', credits: 3, type: 'Obligatorio', prerequisite: '17107' },
      { code: '17208', name: 'Electrónica I', credits: 3, type: 'Obligatorio', prerequisite: '17205' },
      { code: '17209', name: 'Investigación de Operaciones I', credits: 3, type: 'Obligatorio', prerequisite: '17204' },
      { code: '17210', name: 'Economía', credits: 3, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17304', name: 'Teoría de la Computación', credits: 3, type: 'Obligatorio', prerequisite: 'Ninguno' }
    ]
  },
  {
    number: 5,
    name: 'V Semestre',
    year: 3,
    color: '#8B7FFF',
    courses: [
      { code: '17211', name: 'Teoría de Sistemas', credits: 4, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17212', name: 'Investigación de Operaciones II', credits: 3, type: 'Obligatorio', prerequisite: '17209' },
      { code: '17213', name: 'Electrónica II', credits: 3, type: 'Obligatorio', prerequisite: '17208' },
      { code: '17214', name: 'Contabilidad y Costos', credits: 3, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17215', name: 'Administración y Calidad Total', credits: 3, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17305', name: 'Arquitectura del Computador', credits: 4, type: 'Obligatorio', prerequisite: '17304' },
      { code: '17306', name: 'Sistemas de Bases I', credits: 4, type: 'Obligatorio', prerequisite: '17301' }
    ]
  },
  {
    number: 6,
    name: 'VI Semestre',
    year: 3,
    color: '#FF6B6B',
    courses: [
      { code: '17216', name: 'Gestión de la Cadena de Suministro', credits: 3, type: 'Obligatorio', prerequisite: '17214' },
      { code: '17217', name: 'Comportamiento y Desarrollo Organizacional', credits: 3, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17307', name: 'Sistemas Operativos', credits: 4, type: 'Obligatorio', prerequisite: '17305' },
      { code: '17308', name: 'Ingeniería de Software I', credits: 4, type: 'Obligatorio', prerequisite: '17301' },
      { code: '17309', name: 'Sistemas de Bases II', credits: 4, type: 'Obligatorio', prerequisite: '17306' },
      { code: '17310', name: 'Simulación', credits: 3, type: 'Obligatorio', prerequisite: '17212' },
      { code: '17311', name: 'Herramientas Tecnológicas para la Minería', credits: 3, type: 'Obligatorio', prerequisite: 'Ninguno' }
    ]
  },
  {
    number: 7,
    name: 'VII Semestre',
    year: 4,
    color: '#C77FFF',
    courses: [
      { code: '17218', name: 'Planeamiento y Dirección Estratégica', credits: 3, type: 'Obligatorio', prerequisite: '17215' },
      { code: '17219', name: 'Administración Financiera', credits: 3, type: 'Obligatorio', prerequisite: '17216' },
      { code: '17312', name: 'Redes de Computadoras I', credits: 4, type: 'Obligatorio', prerequisite: '17307' },
      { code: '17313', name: 'Inteligencia de Negocios', credits: 3, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17314', name: 'Ingeniería de Software II', credits: 4, type: 'Obligatorio', prerequisite: '17308' },
      { code: '17315', name: 'Diseño de Lenguaje de Programación', credits: 3, type: 'Obligatorio', prerequisite: '17301' },
      { code: '17316', name: 'Comunicaciones y Enrutamiento de Redes', credits: 3, type: 'Electivo', prerequisite: '17312', track: 'redes' },
      { code: '17317', name: 'Metodologías Ágiles de Desarrollo de Software', credits: 3, type: 'Electivo', prerequisite: 'Ninguno', track: 'software' },
      { code: '17318', name: 'Desarrollo Web en Entorno Cliente', credits: 3, type: 'Electivo', prerequisite: 'Ninguno', track: 'web' }
    ]
  },
  {
    number: 8,
    name: 'VIII Semestre',
    year: 4,
    color: '#4D6FFF',
    courses: [
      { code: '17220', name: 'Gestión de Proyectos', credits: 3, type: 'Obligatorio', prerequisite: '17218' },
      { code: '17221', name: 'Mercadotecnia', credits: 3, type: 'Obligatorio', prerequisite: '17219' },
      { code: '17222', name: 'Seminario de Tesis I', credits: 3, type: 'Obligatorio', prerequisite: '17116' },
      { code: '17319', name: 'Redes de Computadoras II', credits: 4, type: 'Obligatorio', prerequisite: '17312' },
      { code: '17320', name: 'Sistemas de Informaci��n Gerencial', credits: 4, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17321', name: 'Tópicos de Ingeniería de Sistemas I', credits: 3, type: 'Electivo', prerequisite: '17314' },
      { code: '17322', name: 'Administración de Servidores', credits: 3, type: 'Electivo', prerequisite: '17319', track: 'redes' },
      { code: '17323', name: 'Desarrollo de Soluciones I', credits: 3, type: 'Electivo', prerequisite: '17317', track: 'software' },
      { code: '17324', name: 'Desarrollo Web en Entorno Servidor', credits: 3, type: 'Electivo', prerequisite: '17318', track: 'web' }
    ]
  },
  {
    number: 9,
    name: 'IX Semestre',
    year: 5,
    color: '#FF8C42',
    courses: [
      { code: '17223', name: 'Seminario de Tesis II', credits: 3, type: 'Obligatorio', prerequisite: '17222' },
      { code: '17224', name: 'Rediseño de Procesos', credits: 3, type: 'Obligatorio', prerequisite: '17221' },
      { code: '17225', name: 'Sistemas Expertos', credits: 4, type: 'Obligatorio', prerequisite: '17320' },
      { code: '17326', name: 'Administración de Tecnologías de la Información', credits: 3, type: 'Obligatorio', prerequisite: '17319' },
      { code: '17327', name: 'Tópicos de Ingeniería de Sistemas II', credits: 3, type: 'Obligatorio', prerequisite: '17321' },
      { code: '17328', name: 'Prácticas Preprofesionales I', credits: 2, type: 'Obligatorio', prerequisite: '17322' },
      { code: '17329', name: 'Virtualización y Servicios en Cloud', credits: 3, type: 'Electivo', prerequisite: '17322', track: 'redes' },
      { code: '17330', name: 'Desarrollo de Soluciones II', credits: 3, type: 'Electivo', prerequisite: '17323', track: 'software' },
      { code: '17331', name: 'Despliegue de Aplicaciones Web', credits: 3, type: 'Electivo', prerequisite: '17324', track: 'web' }
    ]
  },
  {
    number: 10,
    name: 'X Semestre',
    year: 5,
    color: '#FFD700',
    courses: [
      { code: '17225', name: 'Trabajo de Investigación', credits: 3, type: 'Obligatorio', prerequisite: '17223' },
      { code: '17226', name: 'Emprendimiento', credits: 3, type: 'Obligatorio', prerequisite: '17224' },
      { code: '17332', name: 'Automatización de Procesos', credits: 4, type: 'Obligatorio', prerequisite: '17213' },
      { code: '17333', name: 'Minería de Datos', credits: 3, type: 'Obligatorio', prerequisite: '17313' },
      { code: '17334', name: 'Auditoría de Tecnologías de la Información', credits: 3, type: 'Obligatorio', prerequisite: '17326' },
      { code: '17335', name: 'Derecho Informático', credits: 3, type: 'Obligatorio', prerequisite: 'Ninguno' },
      { code: '17336', name: 'Prácticas Preprofesionales II', credits: 2, type: 'Obligatorio', prerequisite: '17328' }
    ]
  }
];

export function Roadmap() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'visual' | 'list'>('visual');
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourseDetails = (code: string) => {
    setExpandedCourse(expandedCourse === code ? null : code);
  };

  // Function to normalize text for search (remove accents and convert to lowercase)
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Remove accents
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl text-white mb-4">Malla Curricular Completa</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explora todos los cursos de Ingeniería de Sistemas organizados por semestre
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                placeholder="Buscar curso por nombre o código..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#4A6DFF]"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 pointer-events-none" size={20} />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="pl-12 pr-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#4A6DFF] appearance-none cursor-pointer"
              >
                <option value="all" className="bg-[#1B1E28] text-white">Todos los Cursos</option>
                <option value="Obligatorio" className="bg-[#1B1E28] text-white">Obligatorios</option>
                <option value="Electivo" className="bg-[#1B1E28] text-white">Electivos</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
              <button
                onClick={() => setViewMode('visual')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'visual' ? 'bg-[#4A6DFF] text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                Mapa Visual
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  viewMode === 'list' ? 'bg-[#4A6DFF] text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                Lista Detallada
              </button>
            </div>
          </div>
        </div>

        {/* Visual Mode - Flow Diagram */}
        {viewMode === 'visual' && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl text-white mb-6 text-center">Diagrama de Flujo Curricular</h2>
            
            {/* Display the roadmap image */}
            <div className="bg-white rounded-2xl p-4 overflow-auto">
              <ImageWithFallback 
                src={roadmapImage} 
                alt="Malla Curricular de Ingeniería de Sistemas - Diagrama completo con todas las relaciones entre cursos"
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-white/60 text-sm text-center mt-6">
              Diagrama completo mostrando las relaciones y requisitos entre todos los cursos • Haz clic derecho y "Abrir imagen en nueva pestaña" para ver en detalle
            </p>
          </div>
        )}

        {/* List Mode - Detailed Tables */}
        {viewMode === 'list' && (
          <div className="space-y-8">
            {semestersData.map((semester) => {
              const filteredCourses = semester.courses.filter((course) => {
                const matchesSearch = 
                  normalizeText(course.name).includes(normalizeText(searchTerm)) ||
                  course.code.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesFilter = filterType === 'all' || course.type === filterType;
                return matchesSearch && matchesFilter;
              });

              if (filteredCourses.length === 0) return null;

              const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

              return (
                <div
                  key={semester.number}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
                >
                  {/* Semester Header */}
                  <div
                    className="px-6 py-4 flex items-center justify-between"
                    style={{ backgroundColor: `${semester.color}40`, borderBottom: `2px solid ${semester.color}` }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl shadow-lg"
                        style={{ backgroundColor: semester.color }}
                      >
                        {semester.number}
                      </div>
                      <div>
                        <h3 className="text-2xl text-white">{semester.name}</h3>
                        <p className="text-white/70">Año {semester.year} • {totalCredits} créditos totales</p>
                      </div>
                    </div>
                    <div className="text-white/60 text-sm">
                      {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''}
                    </div>
                  </div>

                  {/* Courses Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-4 px-6 text-white/80 text-sm">Código</th>
                          <th className="text-left py-4 px-6 text-white/80 text-sm">Curso</th>
                          <th className="text-center py-4 px-6 text-white/80 text-sm">Créditos</th>
                          <th className="text-center py-4 px-6 text-white/80 text-sm">Tipo</th>
                          <th className="text-left py-4 px-6 text-white/80 text-sm">Requisito</th>
                          <th className="text-center py-4 px-6 text-white/80 text-sm"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCourses.map((course) => (
                          <>
                            <tr
                              key={course.code}
                              className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                              onClick={() => toggleCourseDetails(course.code)}
                            >
                              <td className="py-4 px-6">
                                <span className="text-white font-mono">{course.code}</span>
                              </td>
                              <td className="py-4 px-6">
                                <div className="flex items-center gap-2">
                                  <span className="text-white">{course.name}</span>
                                  {course.track && (
                                    <span
                                      className="px-2 py-1 rounded text-xs"
                                      style={{
                                        backgroundColor: course.track === 'redes' ? '#4A6DFF20' :
                                                        course.track === 'software' ? '#FF6B6B20' :
                                                        '#56F0C320',
                                        color: course.track === 'redes' ? '#4A6DFF' :
                                              course.track === 'software' ? '#FF6B6B' :
                                              '#56F0C3'
                                      }}
                                    >
                                      {course.track === 'redes' ? 'Redes' :
                                       course.track === 'software' ? 'Software' :
                                       'Web'}
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="py-4 px-6 text-center">
                                <span className="text-white/80">{course.credits}</span>
                              </td>
                              <td className="py-4 px-6 text-center">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs ${
                                    course.type === 'Obligatorio'
                                      ? 'bg-blue-500/20 text-blue-300'
                                      : 'bg-purple-500/20 text-purple-300'
                                  }`}
                                >
                                  {course.type}
                                </span>
                              </td>
                              <td className="py-4 px-6">
                                <span className="text-white/70 font-mono text-sm">
                                  {course.prerequisite}
                                </span>
                              </td>
                              <td className="py-4 px-6 text-center">
                                {expandedCourse === course.code ? (
                                  <ChevronUp className="text-white/60" size={20} />
                                ) : (
                                  <ChevronDown className="text-white/60" size={20} />
                                )}
                              </td>
                            </tr>
                            
                            {/* Expanded Details */}
                            {expandedCourse === course.code && (
                              <tr className="border-b border-white/5">
                                <td colSpan={6} className="py-4 px-6 bg-white/5">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="text-white mb-2 flex items-center gap-2">
                                        <span>📚</span> Descripción del Curso
                                      </h4>
                                      <p className="text-white/70 text-sm">
                                        [Descripción detallada del curso {course.name} - Por agregar]
                                      </p>
                                    </div>
                                    <div>
                                      <h4 className="text-white mb-2 flex items-center gap-2">
                                        <span>🎯</span> Competencias a Desarrollar
                                      </h4>
                                      <ul className="text-white/70 text-sm space-y-1">
                                        <li>• [Competencia 1 - Por agregar]</li>
                                        <li>• [Competencia 2 - Por agregar]</li>
                                        <li>• [Competencia 3 - Por agregar]</li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Legend for Elective Tracks */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl text-white mb-4">Leyenda de Áreas Electivas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-[#c1ff72]"></div>
              <span className="text-white/80">RAMA 1: Redes, Servidores y Cloud Computing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-[#e2a9f1]"></div>
              <span className="text-white/80">RAMA 2: Desarrollo de Software</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded bg-[#5ce1e6]"></div>
              <span className="text-white/80">RAMA 3: Desarrollo Web Full Stack</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
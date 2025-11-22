import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

interface QuizProps {
  onComplete: (result: { track: string; scores: { redes: number; software: number; web: number } }) => void;
}

interface Answer {
  text: string;
  track?: string;
  points?: number;
  scale?: {
    redes?: number;
    software?: number;
    web?: number;
  };
}

interface Question {
  id: number;
  block: string;
  question: string;
  isScale?: boolean;
  scaleType?: 'config' | 'abstract' | 'aesthetic' | 'console' | 'visual' | 'discipline';
  answers: Answer[];
}

// Quiz questions data with 20 questions in 4 blocks
const questions: Question[] = [
  // BLOQUE 1: TU INSTINTO TÉCNICO
  {
    id: 1,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: 'Se cae el internet en tu casa y nadie puede navegar. Tu reacción inmediata es:',
    answers: [
      { text: 'Revisar router, Wi-Fi, cables y configuración del proveedor', track: 'redes', points: 1 },
      { text: 'Pensar si hay un error del sistema, del software o de la base de datos', track: 'software', points: 1 },
      { text: 'Revisar si la página carga mal, si el diseño responde o si solo falla el navegador', track: 'web', points: 1 }
    ]
  },
  {
    id: 2,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: '¿Qué tanto disfrutas instalar o configurar tecnología, aunque no sea fácil?',
    isScale: true,
    scaleType: 'config',
    answers: [
      { text: '1 - Nada', scale: { web: 0.5 } },
      { text: '2', scale: { web: 0.3 } },
      { text: '3', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4', scale: { redes: 0.5, software: 0.5 } },
      { text: '5 - Mucho', scale: { redes: 1, software: 0.8 } }
    ]
  },
  {
    id: 3,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: 'Un amigo te pide ayuda para su negocio. Tú instintivamente ofreces:',
    answers: [
      { text: 'Configurar su nube, hosting o servidores para que nunca se caigan', track: 'redes', points: 1 },
      { text: 'Programar su sistema con ventas, inventarios y lógica del negocio', track: 'software', points: 1 },
      { text: 'Diseñar su página web moderna y fácil de usar', track: 'web', points: 1 }
    ]
  },
  {
    id: 4,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: 'Si ganaras un curso certificado gratuito, ¿cuál elegirías?',
    answers: [
      { text: 'Ciberseguridad, AWS, Cisco u otros de infraestructura', track: 'redes', points: 1 },
      { text: 'Arquitectura de software, patrones de diseño o Scrum', track: 'software', points: 1 },
      { text: 'UX/UI, React, Angular o diseño web avanzado', track: 'web', points: 1 }
    ]
  },
  {
    id: 5,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: '¿Qué tanto te atraen los problemas puramente lógicos sin gráficos?',
    isScale: true,
    scaleType: 'abstract',
    answers: [
      { text: '1 - Prefiero ver resultados visuales', scale: { web: 1 } },
      { text: '2', scale: { web: 0.5 } },
      { text: '3', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4', scale: { software: 0.7 } },
      { text: '5 - Amo lo abstracto', scale: { software: 1 } }
    ]
  },

  // BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS
  {
    id: 6,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: 'En una app aparece un error. Tu primer pensamiento es:',
    answers: [
      { text: 'Fallo del servidor, DNS o conexión', track: 'redes', points: 1 },
      { text: 'Error de lógica o base de datos', track: 'software', points: 1 },
      { text: 'Mala interfaz, mal flujo o mala usabilidad', track: 'web', points: 1 }
    ]
  },
  {
    id: 7,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: '¿Qué frase representa mejor tu forma de trabajar?',
    answers: [
      { text: '"La estabilidad es lo primero. Nada debe caerse."', track: 'redes', points: 1 },
      { text: '"La lógica debe ser clara. Todo debe estar ordenado."', track: 'software', points: 1 },
      { text: '"La experiencia del usuario importa más que todo."', track: 'web', points: 1 }
    ]
  },
  {
    id: 8,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: '¿Qué tanto te importa la estética visual al trabajar?',
    isScale: true,
    scaleType: 'aesthetic',
    answers: [
      { text: '1 - Nada', scale: { redes: 0.3 } },
      { text: '2', scale: { software: 0.2 } },
      { text: '3', scale: { redes: 0.2, software: 0.3, web: 0.3 } },
      { text: '4', scale: { web: 0.7 } },
      { text: '5 - Mucho', scale: { web: 1 } }
    ]
  },
  {
    id: 9,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: 'En un Hackathon urgente, tú dices primero:',
    answers: [
      { text: '"Yo monto el servidor y el despliegue."', track: 'redes', points: 1 },
      { text: '"Yo hago la API y la base de datos."', track: 'software', points: 1 },
      { text: '"Yo hago el frontend y las pantallas."', track: 'web', points: 1 }
    ]
  },
  {
    id: 10,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: 'Al usar TikTok o Instagram, ¿qué te genera más curiosidad técnica?',
    answers: [
      { text: 'Cómo escalan video a millones de usuarios', track: 'redes', points: 1 },
      { text: 'Cómo funciona su algoritmo de recomendación', track: 'software', points: 1 },
      { text: 'Cómo se crean sus animaciones y efectos visuales', track: 'web', points: 1 }
    ]
  },

  // BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL
  {
    id: 11,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Qué tan cómodo estás con una consola negra sin mouse?',
    isScale: true,
    scaleType: 'console',
    answers: [
      { text: '1 - Incómodo', scale: { web: 0.3 } },
      { text: '2', scale: { web: 0.2 } },
      { text: '3', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4', scale: { redes: 0.7, software: 0.7 } },
      { text: '5 - Muy cómodo', scale: { redes: 1, software: 1 } }
    ]
  },
  {
    id: 12,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: 'Debes mejorar el sistema de matrícula. Tu prioridad es:',
    answers: [
      { text: 'Que soporte miles de usuarios sin caerse', track: 'redes', points: 1 },
      { text: 'Que no cometa errores en horarios y validaciones', track: 'software', points: 1 },
      { text: 'Que sea moderno y fácil de usar en celular', track: 'web', points: 1 }
    ]
  },
  {
    id: 13,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Qué tema estudiarías un viernes por la noche sin dormirte?',
    answers: [
      { text: 'Subredes, IP, virtualización', track: 'redes', points: 1 },
      { text: 'Estructuras de datos, patrones de diseño', track: 'software', points: 1 },
      { text: 'HTML5, CSS Grid, animaciones', track: 'web', points: 1 }
    ]
  },
  {
    id: 14,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Cuánto necesitas ver resultados visuales inmediatos al programar?',
    isScale: true,
    scaleType: 'visual',
    answers: [
      { text: '1 - Nada', scale: { redes: 0.5, software: 0.3 } },
      { text: '2', scale: { software: 0.4 } },
      { text: '3', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4', scale: { web: 0.7 } },
      { text: '5 - Mucho', scale: { web: 1 } }
    ]
  },
  {
    id: 15,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Cómo te imaginas tu primer cargo en LinkedIn?',
    answers: [
      { text: 'Ingeniero Cloud / Infraestructura', track: 'redes', points: 1 },
      { text: 'Arquitecto de Software / Backend Lead', track: 'software', points: 1 },
      { text: 'Frontend Developer / UX Engineer', track: 'web', points: 1 }
    ]
  },

  // BLOQUE 4: TU PERSONALIDAD DE TRABAJO
  {
    id: 16,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: 'Tienes una laptop vieja. ¿Qué proyecto te emociona más?',
    answers: [
      { text: 'Convertirla en un servidor casero con Linux', track: 'redes', points: 1 },
      { text: 'Automatizar tareas con Python', track: 'software', points: 1 },
      { text: 'Diseñar un portafolio web en ella', track: 'web', points: 1 }
    ]
  },
  {
    id: 17,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: '¿Qué tan disciplinado eres siguiendo normas y estándares?',
    isScale: true,
    scaleType: 'discipline',
    answers: [
      { text: '1 - Poco disciplinado', scale: { web: 0.2 } },
      { text: '2', scale: { software: 0.2 } },
      { text: '3', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4', scale: { redes: 0.7, software: 0.5 } },
      { text: '5 - Muy disciplinado', scale: { redes: 1, software: 0.7 } }
    ]
  },
  {
    id: 18,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: 'Debes modernizar una app antigua. Empiezas por:',
    answers: [
      { text: 'Migrarla a la nube', track: 'redes', points: 1 },
      { text: 'Reescribir el código para hacerlo limpio', track: 'software', points: 1 },
      { text: 'Rediseñar la interfaz completa', track: 'web', points: 1 }
    ]
  },
  {
    id: 19,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: '¿Qué tipo de video técnico verías completo?',
    answers: [
      { text: 'Montando un Data Center en casa', track: 'redes', points: 1 },
      { text: 'Resolviendo retos de programación', track: 'software', points: 1 },
      { text: 'Clonando la interfaz de Netflix', track: 'web', points: 1 }
    ]
  },
  {
    id: 20,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: '¿Cómo te gusta trabajar en equipo?',
    answers: [
      { text: 'Estructurado, asegurando la infraestructura', track: 'redes', points: 1 },
      { text: 'Con sprints, roles y organización clara', track: 'software', points: 1 },
      { text: 'Revisando prototipos y diseños', track: 'web', points: 1 }
    ]
  }
];

export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ redes: 0, software: 0, web: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<Answer[]>([]);
  const [answerMapping, setAnswerMapping] = useState<number[]>([]);

  // Shuffle answers when question changes
  const shuffleAnswers = (answers: Answer[], questionIndex: number) => {
    // Don't shuffle if it's a scale question
    if (questions[questionIndex]?.isScale) {
      setAnswerMapping(answers.map((_, idx) => idx));
      setShuffledAnswers(answers);
      return;
    }
    
    const indices = answers.map((_, idx) => idx);
    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setAnswerMapping(indices);
    setShuffledAnswers(indices.map(idx => answers[idx]));
  };

  // Initialize shuffled answers for first question
  useState(() => {
    if (questions.length > 0) {
      shuffleAnswers(questions[0].answers, 0);
    }
  });

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    // Get the original answer index from the shuffled position
    const originalIndex = answerMapping[selectedAnswer];
    const answer = questions[currentQuestion].answers[originalIndex];
    const newScores = { ...scores };
    
    // Handle different answer types
    if (answer.track && answer.points) {
      // Simple track-based answer
      if (answer.track === 'redes') newScores.redes += answer.points;
      else if (answer.track === 'software') newScores.software += answer.points;
      else if (answer.track === 'web') newScores.web += answer.points;
    } else if (answer.scale) {
      // Scale-based answer
      if (answer.scale.redes) newScores.redes += answer.scale.redes;
      if (answer.scale.software) newScores.software += answer.scale.software;
      if (answer.scale.web) newScores.web += answer.scale.web;
    }

    setScores(newScores);

    // Check if quiz is complete
    if (currentQuestion === questions.length - 1) {
      // Calculate winner
      const maxScore = Math.max(newScores.redes, newScores.software, newScores.web);
      let track = 'redes';
      if (newScores.software === maxScore) track = 'software';
      else if (newScores.web === maxScore) track = 'web';
      
      onComplete({ track, scores: newScores });
    } else {
      // Animate to next question
      setIsAnimating(true);
      setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        shuffleAnswers(questions[nextQuestion].answers, nextQuestion);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setSelectedAnswer(null);
        shuffleAnswers(questions[currentQuestion - 1].answers, currentQuestion - 1);
      }, 300);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  // Show block header if it's the first question of a new block
  const showBlockHeader = currentQuestion === 0 || 
    questions[currentQuestion].block !== questions[currentQuestion - 1]?.block;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl text-white mb-4">Descubre tu Área Ideal</h1>
          <p className="text-white/70 text-lg">
            20 preguntas organizadas en 4 bloques para encontrar tu especialización perfecta
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/60 text-sm">Pregunta {currentQuestion + 1} de {questions.length}</span>
            <span className="text-white/60 text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4A6DFF] via-[#7A5BFF] to-[#56F0C3] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Block Header */}
        {showBlockHeader && (
          <div className="mb-6 text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#4A6DFF]/20 to-[#7A5BFF]/20 border border-[#4A6DFF]/30 rounded-2xl">
              <span className="text-white text-lg">{question.block}</span>
            </div>
          </div>
        )}

        {/* Question Card */}
        <div
          className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-300 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {/* Question Number Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4A6DFF] to-[#7A5BFF] rounded-xl flex items-center justify-center text-white text-xl">
              {currentQuestion + 1}
            </div>
            {question.isScale && (
              <span className="px-3 py-1 bg-[#7A5BFF]/20 border border-[#7A5BFF]/30 text-[#7A5BFF] rounded-full text-sm">
                📊 Escala 1-5
              </span>
            )}
          </div>

          {/* Question Text */}
          <h2 className="text-2xl md:text-3xl text-white mb-8">{question.question}</h2>

          {/* Answers */}
          <div className="space-y-4 mb-8">
            {shuffledAnswers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all hover:scale-[1.02] ${
                  selectedAnswer === index
                    ? 'bg-gradient-to-r from-[#4A6DFF]/20 to-[#7A5BFF]/20 border-[#4A6DFF] shadow-lg shadow-[#4A6DFF]/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all ${
                      selectedAnswer === index
                        ? 'bg-[#4A6DFF] border-[#4A6DFF]'
                        : 'border-white/30'
                    }`}
                  >
                    {selectedAnswer === index && (
                      <CheckCircle className="text-white" size={20} />
                    )}
                  </div>
                  <span className="text-white text-lg flex-1">{answer.text}</span>
                  {question.isScale && (
                    <span className="text-white/40">
                      {'⭐'.repeat(index + 1)}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Anterior
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="px-6 py-3 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-xl hover:shadow-lg hover:shadow-[#4A6DFF]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {currentQuestion === questions.length - 1 ? 'Ver Resultados' : 'Siguiente'}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Quiz Info */}
        <div className="mt-8 text-center">
          <p className="text-white/50 text-sm">
            Tus respuestas nos ayudarán a recomendarte el área más adecuada para tu perfil profesional
          </p>
        </div>
      </div>
    </div>
  );
}
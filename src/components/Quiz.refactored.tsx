/**
 * Componente: Quiz (REFACTORIZADO)
 * Quiz interactivo de 20 preguntas para descubrir área ideal
 * 
 * Mejoras implementadas:
 * - Separación de lógica en custom hook (useQuizLogic)
 * - Componentes modulares reutilizables
 * - Mejor accesibilidad (ARIA labels, roles)
 * - Código más limpio y mantenible
 * - Documentación completa
 */

import { useQuizLogic } from '../hooks/useQuizLogic';
import { QuizProgress } from './quiz/QuizProgress';
import { QuizQuestion } from './quiz/QuizQuestion';
import { QuizAnswers } from './quiz/QuizAnswers';
import { QuizNavigation } from './quiz/QuizNavigation';
import { QUIZ_QUESTIONS } from '../data/quiz-questions';
import type { QuizResult } from '../types/quiz.types';

interface QuizProps {
  onComplete: (result: QuizResult) => void;
}

export function Quiz({ onComplete }: QuizProps) {
  // Hook personalizado con toda la lógica del quiz
  const {
    currentQuestion,
    selectedAnswer,
    isAnimating,
    shuffledAnswers,
    progress,
    question,
    showBlockHeader,
    handleAnswerSelect,
    handleNext,
    handleBack,
  } = useQuizLogic(onComplete);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Encabezado */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl text-white mb-4">
            Descubre tu Área Ideal
          </h1>
          <p className="text-white/70 text-lg">
            20 preguntas organizadas en 4 bloques para encontrar tu especialización perfecta
          </p>
        </header>

        {/* Barra de progreso */}
        <QuizProgress
          currentQuestion={currentQuestion}
          totalQuestions={QUIZ_QUESTIONS.length}
          progress={progress}
        />

        {/* Encabezado de bloque (se muestra al inicio de cada bloque) */}
        {showBlockHeader && (
          <div className="mb-6 text-center" role="banner">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#4A6DFF]/20 to-[#7A5BFF]/20 border border-[#4A6DFF]/30 rounded-2xl">
              <span className="text-white text-lg">{question.block}</span>
            </div>
          </div>
        )}

        {/* Tarjeta de pregunta */}
        <article
          className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-300 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {/* Pregunta */}
          <QuizQuestion
            question={question}
            currentQuestionNumber={currentQuestion + 1}
          />

          {/* Respuestas */}
          <QuizAnswers
            answers={shuffledAnswers}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={handleAnswerSelect}
            isScale={question.isScale || false}
          />

          {/* Navegación */}
          <QuizNavigation
            currentQuestion={currentQuestion}
            totalQuestions={QUIZ_QUESTIONS.length}
            selectedAnswer={selectedAnswer}
            onBack={handleBack}
            onNext={handleNext}
          />
        </article>

        {/* Información adicional */}
        <footer className="mt-8 text-center">
          <p className="text-white/50 text-sm">
            Tus respuestas nos ayudarán a recomendarte el área más adecuada para tu perfil profesional
          </p>
        </footer>
      </div>
    </div>
  );
}

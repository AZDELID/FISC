/**
 * Componente: QuizNavigation
 * Botones de navegación del quiz (Anterior/Siguiente)
 */

import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onBack: () => void;
  onNext: () => void;
}

export function QuizNavigation({
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onBack,
  onNext,
}: QuizNavigationProps) {
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const canProceed = selectedAnswer !== null;

  return (
    <div className="flex items-center justify-between">
      {/* Botón Anterior */}
      <button
        onClick={onBack}
        disabled={isFirstQuestion}
        className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        aria-label="Ir a la pregunta anterior"
      >
        <ArrowLeft size={20} />
        Anterior
      </button>

      {/* Botón Siguiente/Ver Resultados */}
      <button
        onClick={onNext}
        disabled={!canProceed}
        className="px-6 py-3 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-xl hover:shadow-lg hover:shadow-[#4A6DFF]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        aria-label={isLastQuestion ? 'Ver resultados del quiz' : 'Ir a la siguiente pregunta'}
      >
        {isLastQuestion ? 'Ver Resultados' : 'Siguiente'}
        <ArrowRight size={20} />
      </button>
    </div>
  );
}

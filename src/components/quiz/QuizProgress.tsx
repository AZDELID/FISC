/**
 * Componente: QuizProgress
 * Barra de progreso del quiz con información de la pregunta actual
 */

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
}

export function QuizProgress({ currentQuestion, totalQuestions, progress }: QuizProgressProps) {
  return (
    <div className="mb-8" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-white/60 text-sm">
          Pregunta {currentQuestion + 1} de {totalQuestions}
        </span>
        <span className="text-white/60 text-sm">{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#4A6DFF] via-[#7A5BFF] to-[#56F0C3] transition-all duration-500"
          style={{ width: `${progress}%` }}
          aria-label={`${Math.round(progress)}% completado`}
        />
      </div>
    </div>
  );
}

/**
 * Componente: QuizQuestion
 * Muestra la pregunta actual con su número y tipo
 */

import type { Question } from '../../types/quiz.types';

interface QuizQuestionProps {
  question: Question;
  currentQuestionNumber: number;
}

export function QuizQuestion({ question, currentQuestionNumber }: QuizQuestionProps) {
  return (
    <>
      {/* Badge de número y tipo */}
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="w-12 h-12 bg-gradient-to-br from-[#4A6DFF] to-[#7A5BFF] rounded-xl flex items-center justify-center text-white text-xl"
          aria-label={`Pregunta número ${currentQuestionNumber}`}
        >
          {currentQuestionNumber}
        </div>
        {question.isScale && (
          <span 
            className="px-3 py-1 bg-[#7A5BFF]/20 border border-[#7A5BFF]/30 text-[#7A5BFF] rounded-full text-sm"
            aria-label="Pregunta de escala 1 a 5"
          >
            📊 Escala 1-5
          </span>
        )}
      </div>

      {/* Texto de la pregunta */}
      <h2 className="text-2xl md:text-3xl text-white mb-8">
        {question.question}
      </h2>
    </>
  );
}

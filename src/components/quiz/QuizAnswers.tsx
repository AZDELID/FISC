/**
 * Componente: QuizAnswers
 * Lista de respuestas interactivas del quiz
 */

import { CheckCircle } from 'lucide-react';
import type { Answer, Question } from '../../types/quiz.types';

interface QuizAnswersProps {
  answers: Answer[];
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  isScale: boolean;
}

export function QuizAnswers({ answers, selectedAnswer, onSelectAnswer, isScale }: QuizAnswersProps) {
  return (
    <div className="space-y-4 mb-8" role="radiogroup" aria-label="Opciones de respuesta">
      {answers.map((answer, index) => {
        const isSelected = selectedAnswer === index;
        const starsCount = index + 1; // Estrellas basadas en posición (1 a 5)

        return (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`w-full text-left p-6 rounded-2xl border-2 transition-all hover:scale-[1.02] ${
              isSelected
                ? 'bg-gradient-to-r from-[#4A6DFF]/20 to-[#7A5BFF]/20 border-[#4A6DFF] shadow-lg shadow-[#4A6DFF]/30'
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
            }`}
            role="radio"
            aria-checked={isSelected}
            aria-label={`${answer.text}${isScale ? `, ${starsCount} estrellas` : ''}`}
          >
            <div className="flex items-center gap-4">
              {/* Indicador de selección */}
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all ${
                  isSelected
                    ? 'bg-[#4A6DFF] border-[#4A6DFF]'
                    : 'border-white/30'
                }`}
                aria-hidden="true"
              >
                {isSelected && (
                  <CheckCircle className="text-white" size={20} />
                )}
              </div>

              {/* Texto de la respuesta */}
              <span className="text-white text-lg flex-1">{answer.text}</span>

              {/* Estrellas para preguntas de escala */}
              {isScale && (
                <span 
                  className="text-white/40"
                  aria-label={`${starsCount} de 5 estrellas`}
                >
                  {'⭐'.repeat(starsCount)}
                </span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

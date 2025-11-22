/**
 * Custom Hook: useQuizLogic
 * Maneja toda la lógica del quiz (navegación, puntuación, estado)
 * Separación de lógica y presentación
 */

import { useState, useCallback, useEffect } from 'react';
import type { Question, Answer, QuizResult, TrackScores } from '../types/quiz.types';
import { QUIZ_QUESTIONS } from '../data/quiz-questions';

interface UseQuizLogicReturn {
  currentQuestion: number;
  scores: TrackScores;
  selectedAnswer: number | null;
  isAnimating: boolean;
  shuffledAnswers: Answer[];
  answerMapping: number[];
  progress: number;
  question: Question;
  showBlockHeader: boolean;
  handleAnswerSelect: (index: number) => void;
  handleNext: () => void;
  handleBack: () => void;
}

export function useQuizLogic(onComplete: (result: QuizResult) => void): UseQuizLogicReturn {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<TrackScores>({ redes: 0, software: 0, web: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<Answer[]>([]);
  const [answerMapping, setAnswerMapping] = useState<number[]>([]);

  /**
   * Mezcla las respuestas usando Fisher-Yates shuffle
   * Las preguntas de escala NO se mezclan (mantienen orden 1, 2, 3, 4, 5)
   */
  const shuffleAnswers = useCallback((answers: Answer[], questionIndex: number) => {
    // No mezclar si es pregunta de escala
    if (QUIZ_QUESTIONS[questionIndex]?.isScale) {
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
  }, []);

  /**
   * Inicializar respuestas mezcladas para la primera pregunta
   */
  useEffect(() => {
    if (QUIZ_QUESTIONS.length > 0) {
      shuffleAnswers(QUIZ_QUESTIONS[0].answers, 0);
    }
  }, [shuffleAnswers]);

  /**
   * Maneja la selección de una respuesta
   */
  const handleAnswerSelect = useCallback((index: number) => {
    setSelectedAnswer(index);
  }, []);

  /**
   * Calcula y actualiza los puntajes basado en la respuesta seleccionada
   */
  const updateScores = useCallback((answer: Answer) => {
    setScores(prevScores => {
      const newScores = { ...prevScores };
      
      // Respuestas simples con track y puntos
      if (answer.track && answer.points) {
        newScores[answer.track] += answer.points;
      }
      
      // Respuestas de escala con distribución de puntos
      if (answer.scale) {
        if (answer.scale.redes) newScores.redes += answer.scale.redes;
        if (answer.scale.software) newScores.software += answer.scale.software;
        if (answer.scale.web) newScores.web += answer.scale.web;
      }
      
      return newScores;
    });
  }, []);

  /**
   * Determina el track ganador basado en los puntajes
   */
  const calculateWinner = useCallback((finalScores: TrackScores): string => {
    const maxScore = Math.max(finalScores.redes, finalScores.software, finalScores.web);
    
    if (finalScores.software === maxScore) return 'software';
    if (finalScores.web === maxScore) return 'web';
    return 'redes';
  }, []);

  /**
   * Avanza a la siguiente pregunta o completa el quiz
   */
  const handleNext = useCallback(() => {
    if (selectedAnswer === null) return;

    // Obtener respuesta original del índice mezclado
    const originalIndex = answerMapping[selectedAnswer];
    const answer = QUIZ_QUESTIONS[currentQuestion].answers[originalIndex];
    
    // Actualizar puntajes
    updateScores(answer);

    // Verificar si es la última pregunta
    if (currentQuestion === QUIZ_QUESTIONS.length - 1) {
      // Calcular puntajes finales
      const finalScores = { ...scores };
      
      // Aplicar puntaje de última respuesta
      if (answer.track && answer.points) {
        finalScores[answer.track] += answer.points;
      }
      if (answer.scale) {
        if (answer.scale.redes) finalScores.redes += answer.scale.redes;
        if (answer.scale.software) finalScores.software += answer.scale.software;
        if (answer.scale.web) finalScores.web += answer.scale.web;
      }
      
      const track = calculateWinner(finalScores);
      onComplete({ track: track as any, scores: finalScores });
      return;
    }

    // Animar transición a siguiente pregunta
    setIsAnimating(true);
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      shuffleAnswers(QUIZ_QUESTIONS[nextQuestion].answers, nextQuestion);
      setIsAnimating(false);
    }, 300);
  }, [selectedAnswer, answerMapping, currentQuestion, scores, shuffleAnswers, updateScores, calculateWinner, onComplete]);

  /**
   * Retrocede a la pregunta anterior
   */
  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        const prevQuestion = currentQuestion - 1;
        setCurrentQuestion(prevQuestion);
        setSelectedAnswer(null);
        shuffleAnswers(QUIZ_QUESTIONS[prevQuestion].answers, prevQuestion);
        setIsAnimating(false);
      }, 300);
    }
  }, [currentQuestion, shuffleAnswers]);

  // Cálculos derivados
  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;
  const question = QUIZ_QUESTIONS[currentQuestion];
  const showBlockHeader = currentQuestion === 0 || 
    QUIZ_QUESTIONS[currentQuestion].block !== QUIZ_QUESTIONS[currentQuestion - 1]?.block;

  return {
    currentQuestion,
    scores,
    selectedAnswer,
    isAnimating,
    shuffledAnswers,
    answerMapping,
    progress,
    question,
    showBlockHeader,
    handleAnswerSelect,
    handleNext,
    handleBack,
  };
}

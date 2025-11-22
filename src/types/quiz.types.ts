/**
 * Tipos y Interfaces del Sistema de Quiz
 * Define la estructura de datos para el cuestionario vocacional
 */

export type TrackType = 'redes' | 'software' | 'web';

export interface TrackScores {
  redes: number;
  software: number;
  web: number;
}

export interface ScaleAnswer {
  redes?: number;
  software?: number;
  web?: number;
}

export interface Answer {
  text: string;
  track?: TrackType;
  points?: number;
  scale?: ScaleAnswer;
}

export type ScaleType = 'config' | 'abstract' | 'aesthetic' | 'console' | 'visual' | 'discipline';

export interface Question {
  id: number;
  block: string;
  question: string;
  isScale?: boolean;
  scaleType?: ScaleType;
  answers: Answer[];
}

export interface QuizResult {
  track: TrackType;
  scores: TrackScores;
}

export interface QuizState {
  currentQuestion: number;
  scores: TrackScores;
  selectedAnswer: number | null;
  isAnimating: boolean;
}

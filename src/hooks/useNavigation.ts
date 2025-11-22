/**
 * Custom Hook: useNavigation
 * Maneja la navegación entre páginas y el estado de la aplicación
 */

import { useState, useCallback } from 'react';
import type { PageType } from '../constants/navigation';
import type { QuizResult } from '../types/quiz.types';

interface UseNavigationReturn {
  currentPage: PageType;
  quizResult: QuizResult | null;
  mobileMenuOpen: boolean;
  navigateTo: (page: PageType) => void;
  handleQuizComplete: (result: QuizResult) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export function useNavigation(): UseNavigationReturn {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * Navega a una página específica
   * Cierra el menú móvil y hace scroll al inicio
   */
  const navigateTo = useCallback((page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /**
   * Maneja la finalización del quiz
   * Guarda el resultado y navega a la página de resultados
   */
  const handleQuizComplete = useCallback((result: QuizResult) => {
    setQuizResult(result);
    setCurrentPage('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /**
   * Alterna el estado del menú móvil
   */
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  /**
   * Cierra el menú móvil
   */
  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return {
    currentPage,
    quizResult,
    mobileMenuOpen,
    navigateTo,
    handleQuizComplete,
    toggleMobileMenu,
    closeMobileMenu,
  };
}

/**
 * Componente Principal: App (REFACTORIZADO)
 * Plataforma web para estudiantes de Ingeniería de Sistemas
 * 
 * Mejoras implementadas:
 * - Navegación con custom hook (useNavigation)
 * - Componentes de layout modulares (Navigation, Footer)
 * - Mejor organización y separación de responsabilidades
 * - Código más limpio y mantenible
 * - Mejor accesibilidad semántica
 */

import { Home } from './components/Home';
import { Roadmap } from './components/Roadmap';
import { TracksComparison } from './components/TracksComparison';
import { Quiz } from './components/Quiz.refactored';
import { TrackResult } from './components/TrackResult';
import { Resources } from './components/Resources';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { useNavigation } from './hooks/useNavigation';

export default function App() {
  const {
    currentPage,
    quizResult,
    mobileMenuOpen,
    navigateTo,
    handleQuizComplete,
    toggleMobileMenu,
  } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B1E28] via-[#252935] to-[#1B1E28]">
      {/* Navegación principal */}
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
        onNavigate={navigateTo}
      />

      {/* Contenido principal */}
      <main className="pt-16" role="main">
        {currentPage === 'home' && <Home onNavigate={navigateTo} />}
        {currentPage === 'roadmap' && <Roadmap />}
        {currentPage === 'tracks' && <TracksComparison onNavigate={navigateTo} />}
        {currentPage === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
        {currentPage === 'result' && quizResult && (
          <TrackResult result={quizResult} onNavigate={navigateTo} />
        )}
        {currentPage === 'resources' && <Resources />}
      </main>

      {/* Pie de página */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

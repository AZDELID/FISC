import { useState } from "react";
import { Home } from "./components/Home";
import { Roadmap } from "./components/Roadmap";
import { TracksComparison } from "./components/TracksComparison";
import { Quiz } from "./components/Quiz";
import { TrackResult } from "./components/TrackResult";
import { Resources } from "./components/Resources";
import { Menu, X } from "lucide-react";
import sistemasLogo from "figma:asset/32bb1d1a320e6006b4dc077789a136a1fa29f1f3.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

type Page =
  | "home"
  | "roadmap"
  | "tracks"
  | "quiz"
  | "result"
  | "resources";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [quizResult, setQuizResult] = useState<{
    track: string;
    scores: { redes: number; software: number; web: number };
  } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleQuizComplete = (result: {
    track: string;
    scores: { redes: number; software: number; web: number };
  }) => {
    setQuizResult(result);
    setCurrentPage("result");
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B1E28] via-[#252935] to-[#1B1E28]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1B1E28]/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigateTo("home")}
            >
              <ImageWithFallback
                src={sistemasLogo}
                alt="Logo Ingeniería de Sistemas"
                className="w-10 h-10 rounded-xl object-contain"
              />
              <span className="text-white text-lg">
                Ingeniería de Sistemas y Computación
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => navigateTo("home")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => navigateTo("roadmap")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Ruta de Cursos
              </button>
              <button
                onClick={() => navigateTo("tracks")}
                className="text-white/80 hover:text-white transition-colors"
              >
                Áreas Electivas
              </button>
              <button
                onClick={() => navigateTo("quiz")}
                className="px-4 py-2 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-xl hover:shadow-lg hover:shadow-[#4A6DFF]/50 transition-all"
              >
                Hacer Quiz
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <button
                onClick={() => navigateTo("home")}
                className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => navigateTo("roadmap")}
                className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Ruta de Cursos
              </button>
              <button
                onClick={() => navigateTo("tracks")}
                className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Áreas Electivas
              </button>
              <button
                onClick={() => navigateTo("quiz")}
                className="block w-full text-left px-4 py-2 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-lg"
              >
                Hacer Quiz
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {currentPage === "home" && (
          <Home onNavigate={navigateTo} />
        )}
        {currentPage === "roadmap" && <Roadmap />}
        {currentPage === "tracks" && (
          <TracksComparison onNavigate={navigateTo} />
        )}
        {currentPage === "quiz" && (
          <Quiz onComplete={handleQuizComplete} />
        )}
        {currentPage === "result" && quizResult && (
          <TrackResult
            result={quizResult}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === "resources" && <Resources />}
      </main>

      {/* Footer */}
      <footer className="bg-[#1B1E28] border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ImageWithFallback
                  src={sistemasLogo}
                  alt="Logo Ingeniería de Sistemas"
                  className="w-10 h-10 rounded-xl object-contain bg-white/10 p-1"
                />
                <span className="text-white text-lg">
                  Ingeniería de Sistemas y Computación
                </span>
              </div>
              <p className="text-white/60 text-sm">
                Tu guía interactiva para navegar la carrera de
                Ingeniería de Sistemas
              </p>
            </div>
            <div>
              <h3 className="text-white mb-4">
                Enlaces Rápidos
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => navigateTo("roadmap")}
                  className="block text-white/60 hover:text-white text-sm transition-colors"
                >
                  Ruta de Cursos
                </button>
                <button
                  onClick={() => navigateTo("tracks")}
                  className="block text-white/60 hover:text-white text-sm transition-colors"
                >
                  Áreas Electivas
                </button>
                <button
                  onClick={() => navigateTo("quiz")}
                  className="block text-white/60 hover:text-white text-sm transition-colors"
                >
                  Quiz Vocacional
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-white mb-4">Contacto</h3>
              <p className="text-white/60 text-sm">
                [Información de contacto por agregar]
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            © 2025 PJ - Todos los derechos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}
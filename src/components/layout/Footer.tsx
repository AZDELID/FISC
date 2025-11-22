/**
 * Componente: Footer
 * Pie de página con información y enlaces
 */

import { ImageWithFallback } from '../figma/ImageWithFallback';
import sistemasLogo from 'figma:asset/32bb1d1a320e6006b4dc077789a136a1fa29f1f3.png';
import type { PageType } from '../../constants/navigation';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1E28] border-t border-white/10 mt-20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección Logo e Información */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ImageWithFallback 
                src={sistemasLogo} 
                alt="Logo Ingeniería de Sistemas"
                className="w-10 h-10 rounded-xl object-contain bg-white/10 p-1"
              />
              <span className="text-white text-lg">Ingeniería de Sistemas y Computación</span>
            </div>
            <p className="text-white/60 text-sm">
              Tu guía interactiva para navegar la carrera de Ingeniería de Sistemas
            </p>
          </div>

          {/* Sección Enlaces Rápidos */}
          <div>
            <h3 className="text-white mb-4">Enlaces Rápidos</h3>
            <nav className="space-y-2" aria-label="Enlaces del footer">
              <button 
                onClick={() => onNavigate('roadmap')}
                className="block text-white/60 hover:text-white text-sm transition-colors"
              >
                Ruta de Cursos
              </button>
              <button 
                onClick={() => onNavigate('tracks')}
                className="block text-white/60 hover:text-white text-sm transition-colors"
              >
                Áreas Electivas
              </button>
              <button 
                onClick={() => onNavigate('quiz')}
                className="block text-white/60 hover:text-white text-sm transition-colors"
              >
                Quiz Vocacional
              </button>
            </nav>
          </div>

          {/* Sección Contacto */}
          <div>
            <h3 className="text-white mb-4">Contacto</h3>
            <p className="text-white/60 text-sm">
              [Información de contacto por agregar]
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © {currentYear} PJ - Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}

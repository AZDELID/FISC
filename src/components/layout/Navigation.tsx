/**
 * Componente: Navigation
 * Barra de navegación principal con logo y menú
 * Responsive con menú móvil
 */

import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import sistemasLogo from 'figma:asset/32bb1d1a320e6006b4dc077789a136a1fa29f1f3.png';
import { getVisibleNavItems } from '../../constants/navigation';
import type { PageType } from '../../constants/navigation';

interface NavigationProps {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onNavigate: (page: PageType) => void;
}

export function Navigation({ mobileMenuOpen, onToggleMobileMenu, onNavigate }: NavigationProps) {
  const navItems = getVisibleNavItems();

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-[#1B1E28]/90 backdrop-blur-lg border-b border-white/10"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Ir a la página de inicio"
          >
            <ImageWithFallback 
              src={sistemasLogo} 
              alt="Logo Ingeniería de Sistemas"
              className="w-10 h-10 rounded-xl object-contain"
            />
            <span className="text-white text-lg">Ingeniería de Sistemas y Computación</span>
          </button>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.isPrimary ? (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="px-4 py-2 bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white rounded-xl hover:shadow-lg hover:shadow-[#4A6DFF]/50 transition-all"
                  aria-label={item.description}
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label={item.description}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Botón menú móvil */}
          <button 
            onClick={onToggleMobileMenu}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú Móvil */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 space-y-2"
            role="menu"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  item.isPrimary
                    ? 'bg-gradient-to-r from-[#4A6DFF] to-[#7A5BFF] text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
                role="menuitem"
                aria-label={item.description}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

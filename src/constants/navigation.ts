/**
 * Configuración de Navegación
 * Define todas las páginas y rutas de la aplicación
 */

export type PageType = 'home' | 'roadmap' | 'tracks' | 'quiz' | 'result' | 'resources';

export interface NavigationItem {
  id: PageType;
  label: string;
  description?: string;
  showInNav: boolean;
  isPrimary?: boolean;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'home',
    label: 'Inicio',
    description: 'Página principal',
    showInNav: true,
  },
  {
    id: 'roadmap',
    label: 'Ruta de Cursos',
    description: 'Todos los cursos organizados por semestre',
    showInNav: true,
  },
  {
    id: 'tracks',
    label: 'Áreas Electivas',
    description: 'Comparación de las 3 áreas de especialización',
    showInNav: true,
  },
  {
    id: 'quiz',
    label: 'Hacer Quiz',
    description: 'Descubre tu área ideal',
    showInNav: true,
    isPrimary: true,
  },
  {
    id: 'result',
    label: 'Resultados',
    showInNav: false,
  },
  {
    id: 'resources',
    label: 'Recursos',
    showInNav: false,
  },
];

export const getNavigationItem = (id: PageType): NavigationItem | undefined => {
  return NAVIGATION_ITEMS.find(item => item.id === id);
};

export const getVisibleNavItems = (): NavigationItem[] => {
  return NAVIGATION_ITEMS.filter(item => item.showInNav);
};

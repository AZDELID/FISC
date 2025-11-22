/**
 * Sistema de Colores - Design Tokens
 * Colores centralizados para toda la aplicación
 */

export const COLORS = {
  // Colores principales del tema
  primary: {
    blue: '#4A6DFF',
    purple: '#7A5BFF',
    mint: '#56F0C3',
  },

  // Colores de las ramas/tracks
  tracks: {
    redes: '#c1ff72',      // Verde lima para Redes/Servidores/Cloud
    software: '#e2a9f1',   // Rosa/Púrpura para Desarrollo de Software
    web: '#5ce1e6',        // Cian para Desarrollo Web
  },

  // Backgrounds
  background: {
    primary: '#1B1E28',
    secondary: '#252935',
    tertiary: '#2D3142',
  },

  // Estados y utilidades
  border: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.2)',
    strong: 'rgba(255, 255, 255, 0.3)',
  },

  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.8)',
    tertiary: 'rgba(255, 255, 255, 0.6)',
    muted: 'rgba(255, 255, 255, 0.4)',
  },
} as const;

export type TrackColor = keyof typeof COLORS.tracks;

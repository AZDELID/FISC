/**
 * Datos del Quiz Vocacional
 * 20 preguntas organizadas en 4 bloques temáticos
 * Las preguntas de escala (2, 5, 8, 11, 14, 17) mantienen orden fijo
 */

import type { Question } from '../types/quiz.types';

export const QUIZ_QUESTIONS: Question[] = [
  // ========================================
  // BLOQUE 1: TU INSTINTO TÉCNICO (5 preguntas)
  // ========================================
  {
    id: 1,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: 'Se cae el internet en tu casa y nadie puede navegar. Tu reacción inmediata es:',
    answers: [
      { text: 'Revisar router, Wi-Fi, cables y configuración del proveedor', track: 'redes', points: 1 },
      { text: 'Pensar si hay un error del sistema, del software o de la base de datos', track: 'software', points: 1 },
      { text: 'Revisar si la página carga mal, si el diseño responde o si solo falla el navegador', track: 'web', points: 1 }
    ]
  },
  {
    id: 2,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: '¿Qué tanto disfrutas instalar o configurar tecnología, aunque no sea fácil?',
    isScale: true,
    scaleType: 'config',
    answers: [
      { text: '1 - Nada', scale: { web: 0.5 } },
      { text: '2', scale: { web: 0.3 } },
      { text: '3', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4', scale: { redes: 0.5, software: 0.5 } },
      { text: '5 - Mucho', scale: { redes: 1, software: 0.8 } }
    ]
  },
  {
    id: 3,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: 'Un amigo te pide ayuda para su negocio. Tú instintivamente ofreces:',
    answers: [
      { text: 'Configurar su nube, hosting o servidores para que nunca se caigan', track: 'redes', points: 1 },
      { text: 'Programar su sistema con ventas, inventarios y lógica del negocio', track: 'software', points: 1 },
      { text: 'Diseñar su página web moderna y fácil de usar', track: 'web', points: 1 }
    ]
  },
  {
    id: 4,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: 'Si ganaras un curso certificado gratuito, ¿cuál elegirías?',
    answers: [
      { text: 'Ciberseguridad, AWS, Cisco u otros de infraestructura', track: 'redes', points: 1 },
      { text: 'Arquitectura de software, patrones de diseño o Scrum', track: 'software', points: 1 },
      { text: 'UX/UI, React, Angular o diseño web avanzado', track: 'web', points: 1 }
    ]
  },
  {
    id: 5,
    block: '🎯 BLOQUE 1: TU INSTINTO TÉCNICO',
    question: '¿Qué tanto te atraen los problemas puramente lógicos sin gráficos?',
    isScale: true,
    scaleType: 'abstract',
    answers: [
      { text: '1 - Prefiero ver resultados visuales', scale: { web: 1 } },
      { text: '2', scale: { web: 0.5 } },
      { text: '3', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4', scale: { software: 0.7 } },
      { text: '5 - Amo lo abstracto', scale: { software: 1 } }
    ]
  },

  // ========================================
  // BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS (5 preguntas)
  // ========================================
  {
    id: 6,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: 'En una app aparece un error. Tu primer pensamiento es:',
    answers: [
      { text: 'Fallo del servidor, DNS o conexión', track: 'redes', points: 1 },
      { text: 'Error de lógica o base de datos', track: 'software', points: 1 },
      { text: 'Mala interfaz, mal flujo o mala usabilidad', track: 'web', points: 1 }
    ]
  },
  {
    id: 7,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: '¿Qué frase representa mejor tu forma de trabajar?',
    answers: [
      { text: '"La estabilidad es lo primero. Nada debe caerse."', track: 'redes', points: 1 },
      { text: '"La lógica debe ser clara. Todo debe estar ordenado."', track: 'software', points: 1 },
      { text: '"La experiencia del usuario importa más que todo."', track: 'web', points: 1 }
    ]
  },
  {
    id: 8,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: '¿Qué tanto te importa la estética visual al trabajar?',
    isScale: true,
    scaleType: 'aesthetic',
    answers: [
      { text: '1 - Nada', scale: { redes: 0.3 } },
      { text: '2', scale: { software: 0.2 } },
      { text: '3', scale: { redes: 0.2, software: 0.3, web: 0.3 } },
      { text: '4', scale: { web: 0.7 } },
      { text: '5 - Mucho', scale: { web: 1 } }
    ]
  },
  {
    id: 9,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: 'En un Hackathon urgente, tú dices primero:',
    answers: [
      { text: '"Yo monto el servidor y el despliegue."', track: 'redes', points: 1 },
      { text: '"Yo hago la API y la base de datos."', track: 'software', points: 1 },
      { text: '"Yo hago el frontend y las pantallas."', track: 'web', points: 1 }
    ]
  },
  {
    id: 10,
    block: '🧠 BLOQUE 2: MENTALIDAD Y RESOLUCIÓN DE PROBLEMAS',
    question: 'Al usar TikTok o Instagram, ¿qué te genera más curiosidad técnica?',
    answers: [
      { text: 'Cómo escalan video a millones de usuarios', track: 'redes', points: 1 },
      { text: 'Cómo funciona su algoritmo de recomendación', track: 'software', points: 1 },
      { text: 'Cómo se crean sus animaciones y efectos visuales', track: 'web', points: 1 }
    ]
  },

  // ========================================
  // BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL (5 preguntas)
  // ========================================
  {
    id: 11,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Qué tan cómodo estás con una consola negra sin mouse?',
    isScale: true,
    scaleType: 'console',
    answers: [
      { text: '1 - Incómodo', scale: { web: 0.3 } },
      { text: '2', scale: { web: 0.2 } },
      { text: '3', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4', scale: { redes: 0.7, software: 0.7 } },
      { text: '5 - Muy cómodo', scale: { redes: 1, software: 1 } }
    ]
  },
  {
    id: 12,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: 'Debes mejorar el sistema de matrícula. Tu prioridad es:',
    answers: [
      { text: 'Que soporte miles de usuarios sin caerse', track: 'redes', points: 1 },
      { text: 'Que no cometa errores en horarios y validaciones', track: 'software', points: 1 },
      { text: 'Que sea moderno y fácil de usar en celular', track: 'web', points: 1 }
    ]
  },
  {
    id: 13,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Qué tema estudiarías un viernes por la noche sin dormirte?',
    answers: [
      { text: 'Subredes, IP, virtualización', track: 'redes', points: 1 },
      { text: 'Estructuras de datos, patrones de diseño', track: 'software', points: 1 },
      { text: 'HTML5, CSS Grid, animaciones', track: 'web', points: 1 }
    ]
  },
  {
    id: 14,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Cuánto necesitas ver resultados visuales inmediatos al programar?',
    isScale: true,
    scaleType: 'visual',
    answers: [
      { text: '1 - Nada', scale: { redes: 0.5, software: 0.3 } },
      { text: '2', scale: { software: 0.4 } },
      { text: '3', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4', scale: { web: 0.7 } },
      { text: '5 - Mucho', scale: { web: 1 } }
    ]
  },
  {
    id: 15,
    block: '💻 BLOQUE 3: PREFERENCIAS Y FUTURO PROFESIONAL',
    question: '¿Cómo te imaginas tu primer cargo en LinkedIn?',
    answers: [
      { text: 'Ingeniero Cloud / Infraestructura', track: 'redes', points: 1 },
      { text: 'Arquitecto de Software / Backend Lead', track: 'software', points: 1 },
      { text: 'Frontend Developer / UX Engineer', track: 'web', points: 1 }
    ]
  },

  // ========================================
  // BLOQUE 4: TU PERSONALIDAD DE TRABAJO (5 preguntas)
  // ========================================
  {
    id: 16,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: 'Tienes una laptop vieja. ¿Qué proyecto te emociona más?',
    answers: [
      { text: 'Convertirla en un servidor casero con Linux', track: 'redes', points: 1 },
      { text: 'Automatizar tareas con Python', track: 'software', points: 1 },
      { text: 'Diseñar un portafolio web en ella', track: 'web', points: 1 }
    ]
  },
  {
    id: 17,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: '¿Qué tan disciplinado eres siguiendo normas y estándares?',
    isScale: true,
    scaleType: 'discipline',
    answers: [
      { text: '1 - Poco disciplinado', scale: { web: 0.2 } },
      { text: '2', scale: { software: 0.2 } },
      { text: '3', scale: { redes: 0.3, software: 0.3, web: 0.3 } },
      { text: '4', scale: { redes: 0.7, software: 0.5 } },
      { text: '5 - Muy disciplinado', scale: { redes: 1, software: 0.7 } }
    ]
  },
  {
    id: 18,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: 'Debes modernizar una app antigua. Empiezas por:',
    answers: [
      { text: 'Migrarla a la nube', track: 'redes', points: 1 },
      { text: 'Reescribir el código para hacerlo limpio', track: 'software', points: 1 },
      { text: 'Rediseñar la interfaz completa', track: 'web', points: 1 }
    ]
  },
  {
    id: 19,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: '¿Qué tipo de video técnico verías completo?',
    answers: [
      { text: 'Montando un Data Center en casa', track: 'redes', points: 1 },
      { text: 'Resolviendo retos de programación', track: 'software', points: 1 },
      { text: 'Clonando la interfaz de Netflix', track: 'web', points: 1 }
    ]
  },
  {
    id: 20,
    block: '🎯 BLOQUE 4: TU PERSONALIDAD DE TRABAJO',
    question: '¿Cómo te gusta trabajar en equipo?',
    answers: [
      { text: 'Estructurado, asegurando la infraestructura', track: 'redes', points: 1 },
      { text: 'Con sprints, roles y organización clara', track: 'software', points: 1 },
      { text: 'Revisando prototipos y diseños', track: 'web', points: 1 }
    ]
  }
];

/**
 * Configuración del sistema de puntuación
 */
export const QUIZ_CONFIG = {
  totalQuestions: 20,
  scaleQuestionIds: [2, 5, 8, 11, 14, 17], // Preguntas con escala que no se mezclan
  blocks: [
    { id: 1, name: 'Tu Instinto Técnico', emoji: '🎯', questionRange: [1, 5] },
    { id: 2, name: 'Mentalidad y Resolución de Problemas', emoji: '🧠', questionRange: [6, 10] },
    { id: 3, name: 'Preferencias y Futuro Profesional', emoji: '💻', questionRange: [11, 15] },
    { id: 4, name: 'Tu Personalidad de Trabajo', emoji: '🎯', questionRange: [16, 20] },
  ],
} as const;

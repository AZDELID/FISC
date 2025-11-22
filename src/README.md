# 🎓 Plataforma Web - Ingeniería de Sistemas y Computación

Plataforma web moderna e interactiva para estudiantes de Ingeniería de Sistemas (19-23 años) que les ayuda a entender su ruta académica y elegir su área de especialización en el 7º semestre.

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura de Carpetas](#-estructura-de-carpetas)
- [Guía de Desarrollo](#-guía-de-desarrollo)
- [Optimizaciones Implementadas](#-optimizaciones-implementadas)
- [Accesibilidad](#-accesibilidad)
- [Visual Studio](#-visual-studio)

---

## ✨ Características

### 🏠 **5 Secciones Principales**

1. **Página de Inicio** - Hero section con presentación de la plataforma
2. **Roadmap Visual** - 46 cursos organizados por semestres con códigos, créditos y requisitos
3. **Comparación de Áreas** - 3 áreas electivas (Redes/Servidores/Cloud, Desarrollo de Software, Desarrollo Web)
4. **Quiz Interactivo** - 20 preguntas con sistema de puntuación balanceado
5. **Resultados Personalizados** - Recomendación basada en 4 bloques temáticos

### 🎨 **Diseño Moderno**

- **Colores Tech**: Azul (#4A6DFF), Púrpura (#7A5BFF), Verde Menta (#56F0C3)
- **Tipografía**: Poppins (configurada en globals.css)
- **Microinteracciones**: Transiciones suaves y animaciones
- **Responsive**: Adaptado a móvil, tablet y desktop
- **Dark Theme**: Gradientes oscuros profesionales

### 🧠 **Sistema de Quiz Inteligente**

- 20 preguntas divididas en 4 bloques temáticos
- Respuestas mezcladas aleatoriamente (excepto preguntas de escala)
- Preguntas de escala 1-5 con orden fijo para evitar patrones
- Sistema de puntuación balanceado multi-track
- Resultados personalizados con análisis detallado

---

## 🚀 Tecnologías

### **Frontend**
- **React 18** - Biblioteca UI con Hooks
- **TypeScript** - Tipado estático y seguridad
- **Tailwind CSS v4** - Estilos utility-first
- **Lucide React** - Iconos modernos
- **Vite** - Build tool rápido

### **Componentes UI**
- **Shadcn/ui** - Componentes accesibles y personalizables
- **Motion/React** - Animaciones fluidas

---

## 🏗 Arquitectura del Proyecto

### **Patrones de Diseño Implementados**

1. **Separación de Responsabilidades**
   - Lógica separada de UI (Custom Hooks)
   - Componentes presentacionales vs contenedores
   - Datos centralizados en `/data`

2. **Composición de Componentes**
   - Componentes pequeños y reutilizables
   - Props tipadas con TypeScript
   - Componentes de layout compartidos

3. **Estado Centralizado**
   - Custom hooks para manejo de estado complejo
   - Estado local solo cuando es necesario

4. **Design Tokens**
   - Colores centralizados en `/constants/colors.ts`
   - Sistema de diseño consistente

---

## 📦 Instalación

### **Prerrequisitos**
- Node.js 18+ 
- npm o yarn

### **Pasos**

```bash
# 1. Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd plataforma-ingenieria-sistemas

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Build para producción
npm run build

# 5. Preview de producción
npm run preview
```

### **Dependencias Principales**

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^4.0.0",
  "lucide-react": "latest",
  "motion": "latest"
}
```

---

## 🎮 Uso

### **Navegación**

La aplicación tiene 5 páginas principales accesibles desde el menú de navegación:

- **Inicio** - Vista principal con hero section
- **Ruta de Cursos** - Roadmap completo de la carrera
- **Áreas Electivas** - Comparación detallada de las 3 ramas
- **Hacer Quiz** - Quiz vocacional interactivo
- **Resultados** - Página dinámica con resultados del quiz

### **Sistema de Quiz**

El quiz funciona de la siguiente manera:

1. **20 preguntas** organizadas en **4 bloques temáticos**
2. Preguntas normales: respuestas **mezcladas aleatoriamente**
3. Preguntas de escala (IDs: 2, 5, 8, 11, 14, 17): **orden fijo**
   - 1ra posición: "1..." → ⭐
   - 2da posición: "2" → ⭐⭐
   - 3ra posición: "3" → ⭐⭐⭐
   - 4ta posición: "4" → ⭐⭐⭐⭐
   - 5ta posición: "5..." → ⭐⭐⭐⭐⭐
4. Al finalizar: análisis automático y recomendación de área

---

## 📁 Estructura de Carpetas

```
plataforma-ingenieria-sistemas/
│
├── 📁 components/              # Componentes React
│   ├── 📁 layout/             # Componentes de layout
│   │   ├── Navigation.tsx     # Barra de navegación
│   │   └── Footer.tsx         # Pie de página
│   │
│   ├── 📁 quiz/               # Componentes del quiz
│   │   ├── QuizProgress.tsx   # Barra de progreso
│   │   ├── QuizQuestion.tsx   # Pregunta
│   │   ├── QuizAnswers.tsx    # Lista de respuestas
│   │   └── QuizNavigation.tsx # Navegación
│   │
│   ├── 📁 ui/                 # Componentes Shadcn/ui
│   │   └── ...                # 40+ componentes
│   │
│   ├── Home.tsx               # Página de inicio
│   ├── Roadmap.tsx            # Ruta de cursos
│   ├── TracksComparison.tsx   # Comparación de áreas
│   ├── Quiz.tsx               # Quiz original
│   ├── Quiz.refactored.tsx    # Quiz refactorizado ✨
│   ├── TrackResult.tsx        # Resultados
│   └── Resources.tsx          # Recursos adicionales
│
├── 📁 hooks/                  # Custom Hooks
│   ├── useNavigation.ts       # Hook de navegación
│   └── useQuizLogic.ts        # Lógica del quiz
│
├── 📁 types/                  # TypeScript Types
│   └── quiz.types.ts          # Tipos del quiz
│
├── 📁 data/                   # Datos estáticos
│   └── quiz-questions.ts      # 20 preguntas del quiz
│
├── 📁 constants/              # Constantes globales
│   ├── colors.ts              # Sistema de colores
│   └── navigation.ts          # Configuración de rutas
│
├── 📁 styles/                 # Estilos globales
│   └── globals.css            # Tailwind + tokens CSS
│
├── App.tsx                    # App original
├── App.refactored.tsx         # App refactorizado ✨
├── README.md                  # Documentación
└── package.json               # Dependencias
```

---

## 💻 Guía de Desarrollo

### **1. Crear un Nuevo Componente**

```tsx
// /components/MiComponente.tsx
/**
 * Componente: MiComponente
 * Descripción: [Descripción breve]
 */

interface MiComponenteProps {
  // Props tipadas
  title: string;
  onClick: () => void;
}

export function MiComponente({ title, onClick }: MiComponenteProps) {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-[#4A6DFF] text-white rounded-xl"
    >
      {title}
    </button>
  );
}
```

### **2. Crear un Custom Hook**

```tsx
// /hooks/useMiHook.ts
/**
 * Custom Hook: useMiHook
 * Descripción: [Descripción breve]
 */

import { useState, useCallback } from 'react';

export function useMiHook() {
  const [state, setState] = useState(0);

  const increment = useCallback(() => {
    setState(prev => prev + 1);
  }, []);

  return { state, increment };
}
```

### **3. Agregar Nuevos Colores**

```tsx
// /constants/colors.ts
export const COLORS = {
  // ... colores existentes
  
  newColor: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
  },
};
```

### **4. Agregar Nueva Página**

1. Crear el componente en `/components/MiPagina.tsx`
2. Agregar el tipo en `/constants/navigation.ts`
3. Agregar la ruta en `NAVIGATION_ITEMS`
4. Renderizar en `App.tsx` o `App.refactored.tsx`

---

## ⚡ Optimizaciones Implementadas

### **1. Rendimiento**
- ✅ Componentes con React.memo para evitar re-renders
- ✅ useCallback para funciones estables
- ✅ Lazy loading de imágenes con ImageWithFallback
- ✅ Transiciones CSS en lugar de JS cuando es posible

### **2. Escalabilidad**
- ✅ Arquitectura modular y componible
- ✅ Separación de lógica y presentación
- ✅ Tipos TypeScript para prevención de errores
- ✅ Constantes centralizadas

### **3. Mantenibilidad**
- ✅ Código documentado con JSDoc
- ✅ Nombres descriptivos y consistentes
- ✅ Estructura de carpetas clara
- ✅ Componentes pequeños y enfocados

### **4. Reducción de Código Repetido**
- ✅ Custom hooks para lógica compartida
- ✅ Componentes reutilizables
- ✅ Utility functions centralizadas
- ✅ Design tokens para estilos

---

## ♿ Accesibilidad

### **Implementaciones WCAG 2.1**

- ✅ **Roles ARIA**: navigation, main, contentinfo, progressbar, radio, radiogroup
- ✅ **Labels**: aria-label, aria-labelledby en todos los controles
- ✅ **Estados**: aria-checked, aria-expanded, aria-valuenow
- ✅ **Contraste**: Cumple nivel AA en todos los textos
- ✅ **Navegación por teclado**: Tab, Enter, Escape
- ✅ **Semántica HTML**: header, nav, main, article, footer
- ✅ **Focus visible**: Outline en todos los elementos interactivos

---

## 🖥 Visual Studio

### **Abrir en Visual Studio Code**

```bash
# Opción 1: Desde la terminal
code .

# Opción 2: Abrir VS Code y usar File > Open Folder
```

### **Extensiones Recomendadas**

1. **ES7+ React/Redux/React-Native snippets** - Snippets de React
2. **Tailwind CSS IntelliSense** - Autocompletado de Tailwind
3. **TypeScript Vue Plugin (Volar)** - Soporte TypeScript mejorado
4. **Prettier** - Formateo de código
5. **ESLint** - Linting de JavaScript/TypeScript

### **Configuración Recomendada**

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

### **Migrar a .NET MAUI (Opcional)**

Si deseas convertir este proyecto a .NET MAUI para aplicación nativa:

1. **Estructura Base**:
   ```
   MauiApp/
   ├── MauiProgram.cs
   ├── App.xaml
   ├── MainPage.xaml
   └── Platforms/
   ```

2. **Componentes Web View**:
   - Usar `BlazorWebView` para renderizar la UI de React
   - O recrear componentes en XAML/C#

3. **Comunicación**:
   - JavaScript Interop para llamar funciones C#
   - Event handlers para navegación nativa

---

## 📊 Comparación: Versión Original vs Refactorizada

### **App.tsx Original**
- ❌ 142 líneas
- ❌ Lógica mezclada con UI
- ❌ Difícil de testear

### **App.refactored.tsx + Hooks**
- ✅ 45 líneas (68% menos código)
- ✅ Lógica separada en hooks
- ✅ Fácil de testear y mantener
- ✅ Reutilizable

### **Quiz.tsx Original**
- ❌ 289 líneas
- ❌ Todo en un archivo
- ❌ Difícil de modificar

### **Quiz.refactored.tsx + Módulos**
- ✅ 72 líneas (75% menos código)
- ✅ 5 componentes modulares
- ✅ 1 custom hook con lógica
- ✅ Fácil de extender

---

## 🎯 Próximos Pasos

### **Mejoras Futuras**

1. **Testing**
   - [ ] Tests unitarios con Jest
   - [ ] Tests de integración con React Testing Library
   - [ ] Tests E2E con Playwright

2. **Performance**
   - [ ] Code splitting por ruta
   - [ ] Lazy loading de páginas
   - [ ] Service Worker para cache

3. **Features**
   - [ ] Guardar progreso del quiz en localStorage
   - [ ] Exportar resultados como PDF
   - [ ] Modo claro/oscuro
   - [ ] Internacionalización (i18n)

4. **Backend**
   - [ ] API para guardar resultados
   - [ ] Dashboard de administración
   - [ ] Analytics de uso

---

## 👨‍💻 Autor

**PJ** © 2025 - Todos los derechos reservados

---

## 📄 Licencia

Este proyecto es privado y no tiene licencia pública. Todos los derechos reservados.

---

## 🤝 Contribuir

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Soporte

Para preguntas o soporte, contacta a: [Información por agregar]

---

**¡Gracias por usar la Plataforma de Ingeniería de Sistemas!** 🎓✨

# 🗺 Mapa del Proyecto - Navegación Visual

Índice visual de todos los archivos del proyecto con descripciones.

---

## 📚 Documentación (7 archivos)

| Archivo | Descripción | Léelo cuando... |
|---------|-------------|-----------------|
| **📖 README.md** | Guía completa del proyecto | Quieras entender todo |
| **⚡ QUICK_START.md** | Inicio rápido en 5 minutos | Sea tu primera vez |
| **📊 SUMMARY.md** | Resumen ejecutivo | Necesites overview |
| **🏗 ARQUITECTURA.md** | Decisiones técnicas | Quieras entender el "por qué" |
| **🔄 MIGRATION_GUIDE.md** | Cómo migrar versiones | Vayas a migrar código |
| **🖥 VISUAL_STUDIO_GUIDE.md** | Integración VS/.NET | Uses Visual Studio |
| **📝 CHANGELOG.md** | Historial de cambios | Quieras ver qué cambió |

---

## 🎯 Archivos Principales (2 archivos)

| Archivo | Descripción | Líneas |
|---------|-------------|--------|
| **App.tsx** | App original | 142 |
| **✨ App.refactored.tsx** | App refactorizado (NUEVO) | 45 |

---

## 🧩 Componentes de Páginas (7 archivos)

| Archivo | Descripción | Responsabilidad |
|---------|-------------|----------------|
| **Home.tsx** | Página de inicio | Hero section y presentación |
| **Roadmap.tsx** | Ruta académica | 46 cursos por semestres |
| **TracksComparison.tsx** | Comparación de áreas | 3 áreas electivas |
| **TrackDetail.tsx** | Detalle de área | Info específica de rama |
| **TrackResult.tsx** | Resultados del quiz | Recomendación personalizada |
| **Resources.tsx** | Recursos adicionales | Links y materiales |
| **Quiz.tsx** / **✨ Quiz.refactored.tsx** | Quiz interactivo | 20 preguntas (Original: 289 líneas / Nuevo: 72 líneas) |

---

## 🏗 Componentes de Layout (2 archivos)

| Archivo | Responsabilidad | Usado en |
|---------|----------------|----------|
| **Navigation.tsx** | Barra de navegación | Todas las páginas |
| **Footer.tsx** | Pie de página | Todas las páginas |

---

## 🎯 Componentes del Quiz (4 archivos)

| Archivo | Responsabilidad | Líneas |
|---------|----------------|--------|
| **QuizProgress.tsx** | Barra de progreso | ~25 |
| **QuizQuestion.tsx** | Mostrar pregunta | ~30 |
| **QuizAnswers.tsx** | Lista de respuestas | ~50 |
| **QuizNavigation.tsx** | Botones navegación | ~35 |

---

## 🪝 Custom Hooks (2 archivos)

| Archivo | Responsabilidad | Usado en |
|---------|----------------|----------|
| **useQuizLogic.ts** | Lógica del quiz (estado, puntuación, navegación) | Quiz.refactored.tsx |
| **useNavigation.ts** | Navegación global (páginas, menú móvil) | App.refactored.tsx |

---

## 📊 Datos (1 archivo)

| Archivo | Contenido | Modificar para... |
|---------|-----------|-------------------|
| **quiz-questions.ts** | 20 preguntas en 4 bloques | Agregar/cambiar preguntas |

---

## 🎨 Constantes (2 archivos)

| Archivo | Contenido | Modificar para... |
|---------|-----------|-------------------|
| **colors.ts** | Sistema de colores (primary, tracks, backgrounds) | Cambiar colores de la app |
| **navigation.ts** | Configuración de rutas (páginas, labels) | Agregar/cambiar páginas |

---

## 📘 Tipos TypeScript (1 archivo)

| Archivo | Contenido | Para... |
|---------|-----------|---------|
| **quiz.types.ts** | Interfaces y tipos del quiz | Entender estructura de datos |

---

## 🎨 Componentes UI (40+ archivos)

Ubicación: `/components/ui/`

Componentes de **Shadcn/ui** - No modificar directamente.

<details>
<summary>Ver lista completa (click para expandir)</summary>

- accordion.tsx - Acordeones
- alert-dialog.tsx - Diálogos de alerta
- alert.tsx - Alertas
- aspect-ratio.tsx - Ratios de aspecto
- avatar.tsx - Avatares
- badge.tsx - Badges
- breadcrumb.tsx - Migas de pan
- button.tsx - Botones
- calendar.tsx - Calendario
- card.tsx - Tarjetas
- carousel.tsx - Carruseles
- chart.tsx - Gráficos
- checkbox.tsx - Checkboxes
- collapsible.tsx - Colapsables
- command.tsx - Comandos
- context-menu.tsx - Menús contextuales
- dialog.tsx - Diálogos
- drawer.tsx - Drawers
- dropdown-menu.tsx - Menús desplegables
- form.tsx - Formularios
- hover-card.tsx - Tarjetas hover
- input-otp.tsx - Input OTP
- input.tsx - Inputs
- label.tsx - Labels
- menubar.tsx - Barras de menú
- navigation-menu.tsx - Menús de navegación
- pagination.tsx - Paginación
- popover.tsx - Popovers
- progress.tsx - Barras de progreso
- radio-group.tsx - Radio buttons
- resizable.tsx - Redimensionables
- scroll-area.tsx - Áreas de scroll
- select.tsx - Selects
- separator.tsx - Separadores
- sheet.tsx - Sheets
- sidebar.tsx - Sidebars
- skeleton.tsx - Skeletons
- slider.tsx - Sliders
- sonner.tsx - Toast notifications
- switch.tsx - Switches
- table.tsx - Tablas
- tabs.tsx - Tabs
- textarea.tsx - Textareas
- toggle-group.tsx - Grupos de toggles
- toggle.tsx - Toggles
- tooltip.tsx - Tooltips
- use-mobile.ts - Hook para móvil
- utils.ts - Utilidades

</details>

---

## ⚙️ Configuración (6 archivos)

| Archivo | Propósito |
|---------|-----------|
| **.vscode/settings.json** | Configuración de VS Code |
| **.vscode/extensions.json** | Extensiones recomendadas |
| **.prettierrc.json** | Configuración de formateo |
| **tsconfig.json** | Configuración de TypeScript |
| **styles/globals.css** | Estilos globales y Tailwind |
| **guidelines/Guidelines.md** | Guías del proyecto |

---

## 📁 Estructura Visual del Proyecto

```
📦 PROYECTO
│
├── 📚 DOCUMENTACIÓN
│   ├── README.md                    ← Empieza aquí
│   ├── QUICK_START.md               ← Inicio rápido
│   ├── SUMMARY.md                   ← Resumen
│   ├── ARQUITECTURA.md              ← Detalles técnicos
│   ├── MIGRATION_GUIDE.md           ← Cómo migrar
│   ├── VISUAL_STUDIO_GUIDE.md       ← VS/.NET
│   ├── CHANGELOG.md                 ← Historial
│   └── PROJECT_MAP.md               ← Este archivo
│
├── 🎯 ARCHIVOS PRINCIPALES
│   ├── App.tsx                      ← Original
│   └── App.refactored.tsx           ← Refactorizado ✨
│
├── 🧩 COMPONENTES
│   ├── 📄 Páginas (7)
│   │   ├── Home.tsx
│   │   ├── Roadmap.tsx
│   │   ├── TracksComparison.tsx
│   │   ├── TrackDetail.tsx
│   │   ├── TrackResult.tsx
│   │   ├── Resources.tsx
│   │   ├── Quiz.tsx                 ← Original
│   │   └── Quiz.refactored.tsx      ← Refactorizado ✨
│   │
│   ├── 🏗 Layout (2)
│   │   ├── Navigation.tsx           ← Barra nav ✨
│   │   └── Footer.tsx               ← Footer ✨
│   │
│   ├── 🎯 Quiz (4)                  ← Nuevos ✨
│   │   ├── QuizProgress.tsx
│   │   ├── QuizQuestion.tsx
│   │   ├── QuizAnswers.tsx
│   │   └── QuizNavigation.tsx
│   │
│   └── 🎨 UI (40+)
│       └── Shadcn components
│
├── 🪝 HOOKS (2)                     ← Nuevos ✨
│   ├── useQuizLogic.ts
│   └── useNavigation.ts
│
├── 📊 DATOS (1)                     ← Nuevo ✨
│   └── quiz-questions.ts
│
├── 🎨 CONSTANTES (2)                ← Nuevos ✨
│   ├── colors.ts
│   └── navigation.ts
│
├── 📘 TIPOS (1)                     ← Nuevo ✨
│   └── quiz.types.ts
│
└── ⚙️ CONFIGURACIÓN (6)
    ├── .vscode/settings.json
    ├── .vscode/extensions.json
    ├── .prettierrc.json
    ├── tsconfig.json
    ├── styles/globals.css
    └── guidelines/Guidelines.md
```

---

## 🎯 Rutas de Aprendizaje

### **📍 Ruta 1: "Soy nuevo en el proyecto"**

```
1. QUICK_START.md         (5 min)
2. Explorar carpetas      (10 min)
3. SUMMARY.md             (10 min)
4. README.md              (30 min)
5. Código refactorizado   (30 min)
```

### **📍 Ruta 2: "Quiero migrar el código"**

```
1. SUMMARY.md             (10 min)
2. MIGRATION_GUIDE.md     (15 min)
3. Hacer backup           (5 min)
4. Seguir pasos           (20 min)
5. Testear                (30 min)
```

### **📍 Ruta 3: "Voy a agregar features"**

```
1. README.md → Desarrollo (15 min)
2. ARQUITECTURA.md        (30 min)
3. Ver hooks personalizados (20 min)
4. Probar crear componente (1 hora)
```

### **📍 Ruta 4: "Necesito integrar con .NET"**

```
1. VISUAL_STUDIO_GUIDE.md (30 min)
2. Elegir estrategia      (decisión)
3. Seguir pasos           (variable)
```

---

## 🔍 Búsqueda Rápida

### **"¿Dónde está...?"**

| Busco... | Está en... |
|----------|------------|
| **Preguntas del quiz** | `/data/quiz-questions.ts` |
| **Colores de la app** | `/constants/colors.ts` |
| **Lógica del quiz** | `/hooks/useQuizLogic.ts` |
| **Lógica de navegación** | `/hooks/useNavigation.ts` |
| **Barra de navegación** | `/components/layout/Navigation.tsx` |
| **Componente de progreso** | `/components/quiz/QuizProgress.tsx` |
| **Tipos TypeScript** | `/types/quiz.types.ts` |
| **Configuración de páginas** | `/constants/navigation.ts` |
| **Estilos globales** | `/styles/globals.css` |

---

## 🎨 Mapa de Dependencias

### **App.refactored.tsx depende de:**
```
├── useNavigation (hook)
├── Navigation (layout)
├── Footer (layout)
├── Home (página)
├── Roadmap (página)
├── TracksComparison (página)
├── Quiz.refactored (página)
├── TrackResult (página)
└── Resources (página)
```

### **Quiz.refactored.tsx depende de:**
```
├── useQuizLogic (hook)
├── QuizProgress (componente)
├── QuizQuestion (componente)
├── QuizAnswers (componente)
├── QuizNavigation (componente)
└── QUIZ_QUESTIONS (datos)
```

### **useQuizLogic depende de:**
```
├── QUIZ_QUESTIONS (datos)
├── quiz.types (tipos)
└── React hooks (useState, useCallback, useEffect)
```

---

## 📊 Archivos por Tamaño

### **Grandes (>200 líneas)**
- ❌ `Quiz.tsx` - 289 líneas (versión original)
- ❌ `App.tsx` - 142 líneas (versión original)

### **Medianos (50-200 líneas)**
- ✅ `useQuizLogic.ts` - ~150 líneas (pero lógica pura)
- ✅ `quiz-questions.ts` - ~280 líneas (pero solo datos)

### **Pequeños (<50 líneas)**
- ✅ `App.refactored.tsx` - 45 líneas
- ✅ `Quiz.refactored.tsx` - 72 líneas
- ✅ `QuizProgress.tsx` - 25 líneas
- ✅ `QuizQuestion.tsx` - 30 líneas
- ✅ `QuizNavigation.tsx` - 35 líneas
- ✅ `Navigation.tsx` - ~70 líneas
- ✅ `Footer.tsx` - ~50 líneas

---

## 🏆 Archivos Clave

### **🥇 Top 5 para entender el proyecto**

1. **App.refactored.tsx** - Punto de entrada
2. **useQuizLogic.ts** - Lógica principal
3. **quiz-questions.ts** - Datos del quiz
4. **colors.ts** - Sistema de diseño
5. **navigation.ts** - Estructura de páginas

### **🥈 Top 5 para modificar features**

1. **quiz-questions.ts** - Agregar preguntas
2. **colors.ts** - Cambiar colores
3. **navigation.ts** - Agregar páginas
4. **useQuizLogic.ts** - Cambiar algoritmo
5. **Quiz.refactored.tsx** - Cambiar UI

---

## 💡 Tips de Navegación

### **En VS Code**

```
Ctrl+P (Cmd+P en Mac)  →  Buscar archivo rápido
Ctrl+Shift+F           →  Buscar en archivos
Ctrl+Click             →  Ir a definición
Alt+←                  →  Volver atrás
Ctrl+Space             →  IntelliSense
```

### **En el Navegador**

```
Ctrl+Shift+I           →  DevTools
React DevTools         →  Ver componentes
Ctrl+R                 →  Recargar
Ctrl+Shift+R           →  Hard reload
```

---

## 🎯 Checklist de Exploración

**Primera vez en el proyecto:**

- [ ] Abrir QUICK_START.md
- [ ] Explorar estructura de carpetas
- [ ] Abrir App.refactored.tsx
- [ ] Ver componentes modulares
- [ ] Leer hooks personalizados
- [ ] Revisar datos y constantes
- [ ] Ver tipos TypeScript
- [ ] Leer ARQUITECTURA.md

---

**Última actualización**: 2025  
**Versión**: 2.0.0  
**Total de archivos**: 90+

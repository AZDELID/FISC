# 🔄 Guía de Migración - Versión Original a Refactorizada

Esta guía te ayudará a migrar del código original a la versión refactorizada.

---

## 📋 Tabla de Contenidos

- [¿Por qué migrar?](#-por-qué-migrar)
- [Cambios principales](#-cambios-principales)
- [Guía paso a paso](#-guía-paso-a-paso)
- [Comparación lado a lado](#-comparación-lado-a-lado)
- [Breaking Changes](#-breaking-changes)
- [Testing](#-testing)

---

## 🤔 ¿Por qué migrar?

### **Beneficios de la Versión Refactorizada**

1. **Menos código** - 75% menos líneas en componentes principales
2. **Más mantenible** - Lógica separada de UI
3. **Más testeable** - Hooks y componentes aislados
4. **Mejor performance** - Componentes más pequeños
5. **Escalable** - Fácil agregar nuevas features
6. **Tipado completo** - TypeScript al 100%
7. **Documentado** - Comentarios y JSDoc

---

## 📦 Cambios Principales

### **1. Estructura de Archivos**

#### **Antes**
```
/
├── App.tsx (142 líneas - todo mezclado)
└── components/
    └── Quiz.tsx (289 líneas - todo mezclado)
```

#### **Después**
```
/
├── App.refactored.tsx (45 líneas)
├── constants/
│   ├── colors.ts
│   └── navigation.ts
├── types/
│   └── quiz.types.ts
├── data/
│   └── quiz-questions.ts
├── hooks/
│   ├── useQuizLogic.ts
│   └── useNavigation.ts
└── components/
    ├── layout/
    │   ├── Navigation.tsx
    │   └── Footer.tsx
    ├── quiz/
    │   ├── QuizProgress.tsx
    │   ├── QuizQuestion.tsx
    │   ├── QuizAnswers.tsx
    │   └── QuizNavigation.tsx
    └── Quiz.refactored.tsx (72 líneas)
```

---

### **2. Separación de Lógica y UI**

#### **Antes - Todo en un componente**
```tsx
function Quiz({ onComplete }) {
  // 50 líneas de estado
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ ... });
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // ... más estado
  
  // 100 líneas de lógica
  const shuffleAnswers = () => { /* lógica compleja */ }
  const handleNext = () => { /* más lógica */ }
  const calculateWinner = () => { /* algoritmo */ }
  
  // 150 líneas de JSX
  return <div>{ /* mucho JSX */ }</div>
}
```

#### **Después - Separado en módulos**
```tsx
// Hook con lógica
function useQuizLogic(onComplete) {
  // Todo el estado y lógica aquí
  return { /* API pública */ }
}

// Componente solo UI
function Quiz({ onComplete }) {
  const quizLogic = useQuizLogic(onComplete);
  
  return (
    <div>
      <QuizProgress {...quizLogic} />
      <QuizQuestion {...quizLogic} />
      <QuizAnswers {...quizLogic} />
      <QuizNavigation {...quizLogic} />
    </div>
  );
}
```

---

## 🚀 Guía Paso a Paso

### **Paso 1: Instalar Nuevos Archivos**

Los archivos ya están creados en tu proyecto:

```
✅ /constants/colors.ts
✅ /constants/navigation.ts
✅ /types/quiz.types.ts
✅ /data/quiz-questions.ts
✅ /hooks/useQuizLogic.ts
✅ /hooks/useNavigation.ts
✅ /components/layout/Navigation.tsx
✅ /components/layout/Footer.tsx
✅ /components/quiz/*.tsx (4 archivos)
✅ /App.refactored.tsx
✅ /components/Quiz.refactored.tsx
```

---

### **Paso 2: Cambiar el Punto de Entrada**

#### **Opción A: Reemplazar archivos (Recomendado)**

```bash
# Backup de archivos originales
mv App.tsx App.original.tsx
mv components/Quiz.tsx components/Quiz.original.tsx

# Usar versiones refactorizadas
mv App.refactored.tsx App.tsx
mv components/Quiz.refactored.tsx components/Quiz.tsx
```

#### **Opción B: Coexistencia temporal**

Mantener ambas versiones y cambiar import en `main.tsx`:

```tsx
// main.tsx
import App from './App.refactored'; // Usar versión nueva
// import App from './App'; // Versión original
```

---

### **Paso 3: Actualizar Imports**

Si otros archivos importan componentes movidos:

```tsx
// ❌ ANTES
import { Quiz } from './components/Quiz';

// ✅ DESPUÉS
import { Quiz } from './components/Quiz'; // Mismo si reemplazaste
// O
import { Quiz } from './components/Quiz.refactored'; // Si coexisten
```

---

### **Paso 4: Verificar Funcionamiento**

```bash
# Iniciar servidor de desarrollo
npm run dev

# Navegar a http://localhost:5173
# Probar todas las páginas
# Hacer el quiz completo
```

---

### **Paso 5: Eliminar Archivos Antiguos (Opcional)**

Una vez verificado que todo funciona:

```bash
# Eliminar backups si no los necesitas
rm App.original.tsx
rm components/Quiz.original.tsx
```

---

## 🔍 Comparación Lado a Lado

### **App.tsx**

#### **Antes**
```tsx
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [quizResult, setQuizResult] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleQuizComplete = (result) => {
    setQuizResult(result);
    setCurrentPage('result');
  };
  
  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div>
      <nav>
        {/* 50 líneas de navegación */}
      </nav>
      
      <main>
        {/* Renderizado condicional */}
      </main>
      
      <footer>
        {/* 40 líneas de footer */}
      </footer>
    </div>
  );
}
```

#### **Después**
```tsx
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
    <div>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
        onNavigate={navigateTo}
      />
      
      <main>
        {/* Renderizado condicional */}
      </main>
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
```

**Beneficios**:
- ✅ 68% menos código
- ✅ Lógica encapsulada en hook
- ✅ Componentes reutilizables
- ✅ Más fácil de testear

---

### **Quiz.tsx**

#### **Antes**
```tsx
export function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ redes: 0, software: 0, web: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<Answer[]>([]);
  const [answerMapping, setAnswerMapping] = useState<number[]>([]);

  const shuffleAnswers = (answers: Answer[], questionIndex: number) => {
    // 20 líneas de lógica
  };

  const handleAnswerSelect = (index: number) => {
    // Lógica
  };

  const handleNext = () => {
    // 50 líneas de lógica compleja
  };

  const handleBack = () => {
    // 20 líneas
  };

  // 150 líneas de JSX con toda la UI
  return <div>{/* JSX complejo */}</div>;
}
```

#### **Después**
```tsx
export function Quiz({ onComplete }: QuizProps) {
  const {
    currentQuestion,
    selectedAnswer,
    isAnimating,
    shuffledAnswers,
    progress,
    question,
    showBlockHeader,
    handleAnswerSelect,
    handleNext,
    handleBack,
  } = useQuizLogic(onComplete);

  return (
    <div>
      <header>{/* Título */}</header>
      
      <QuizProgress
        currentQuestion={currentQuestion}
        totalQuestions={QUIZ_QUESTIONS.length}
        progress={progress}
      />
      
      {showBlockHeader && <div>{question.block}</div>}
      
      <article>
        <QuizQuestion
          question={question}
          currentQuestionNumber={currentQuestion + 1}
        />
        
        <QuizAnswers
          answers={shuffledAnswers}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleAnswerSelect}
          isScale={question.isScale || false}
        />
        
        <QuizNavigation
          currentQuestion={currentQuestion}
          totalQuestions={QUIZ_QUESTIONS.length}
          selectedAnswer={selectedAnswer}
          onBack={handleBack}
          onNext={handleNext}
        />
      </article>
      
      <footer>{/* Info */}</footer>
    </div>
  );
}
```

**Beneficios**:
- ✅ 75% menos código en componente
- ✅ Lógica movida a `useQuizLogic`
- ✅ UI dividida en 4 componentes pequeños
- ✅ Fácil de entender y modificar

---

## ⚠️ Breaking Changes

### **1. Imports de Datos**

```tsx
// ❌ ANTES - Datos definidos en componente
const questions: Question[] = [ /* inline */ ];

// ✅ DESPUÉS - Datos en archivo separado
import { QUIZ_QUESTIONS } from '../data/quiz-questions';
```

### **2. Tipos**

```tsx
// ❌ ANTES - Tipos inline
interface Answer {
  text: string;
  track?: string;
  // ...
}

// ✅ DESPUÉS - Tipos centralizados
import type { Answer, Question } from '../types/quiz.types';
```

### **3. Colores**

```tsx
// ❌ ANTES - Colores hardcoded
<div className="bg-[#4A6DFF]">

// ✅ DESPUÉS - Usar constantes
import { COLORS } from '../constants/colors';
// O mantener Tailwind directo (ambos válidos)
```

---

## 🧪 Testing

### **Antes de Migrar - Tests Manuales**

1. ✅ Navegar por todas las páginas
2. ✅ Completar el quiz
3. ✅ Ver resultados
4. ✅ Menú móvil funciona
5. ✅ Navegación entre páginas

### **Después de Migrar - Mismo Testing**

Ejecutar los mismos tests y verificar que todo funcione igual.

### **Tests Automatizados (Opcional)**

```tsx
// tests/hooks/useQuizLogic.test.ts
import { renderHook, act } from '@testing-library/react';
import { useQuizLogic } from '../../hooks/useQuizLogic';

test('should increment question on next', () => {
  const { result } = renderHook(() => useQuizLogic(jest.fn()));
  
  act(() => {
    result.current.handleAnswerSelect(0);
    result.current.handleNext();
  });
  
  expect(result.current.currentQuestion).toBe(1);
});
```

---

## 🎯 Checklist de Migración

### **Pre-Migración**
- [ ] Hacer backup del proyecto actual
- [ ] Commit de cambios pendientes en Git
- [ ] Verificar que la versión original funciona

### **Durante Migración**
- [ ] Copiar nuevos archivos al proyecto
- [ ] Reemplazar o renombrar archivos
- [ ] Actualizar imports si es necesario
- [ ] Compilar sin errores (`npm run build`)

### **Post-Migración**
- [ ] Probar todas las páginas
- [ ] Completar el quiz de inicio a fin
- [ ] Verificar responsive (móvil/desktop)
- [ ] Verificar navegación
- [ ] Commit de cambios en Git

---

## 🆘 Problemas Comunes

### **Error: Cannot find module './constants/colors'**

**Solución**: Verificar que el archivo existe y el path es correcto:

```tsx
// Si estás en /components/Quiz.tsx
import { COLORS } from '../constants/colors';

// Si estás en /components/quiz/QuizAnswers.tsx
import { COLORS } from '../../constants/colors';
```

---

### **Error: Type 'PageType' is not assignable**

**Solución**: Importar tipos correctamente:

```tsx
import type { PageType } from '../constants/navigation';
// No: import { PageType } (sin 'type')
```

---

### **Warning: React Hook useEffect has a missing dependency**

**Solución**: Ya manejado con `useCallback` en los hooks, pero si aparece:

```tsx
// Agregar dependencia
useEffect(() => {
  // código
}, [dependency]);

// O usar useCallback
const memoizedFn = useCallback(() => {
  // código
}, [deps]);
```

---

## 📚 Recursos Adicionales

- **README.md** - Documentación general
- **ARQUITECTURA.md** - Detalles técnicos
- **VISUAL_STUDIO_GUIDE.md** - Guía para VS
- **CHANGELOG.md** - Historial de cambios

---

## ✅ Siguiente Paso

Una vez migrado exitosamente:

1. **Explora la nueva estructura** - Familiarízate con los nuevos archivos
2. **Lee ARQUITECTURA.md** - Entiende las decisiones técnicas
3. **Agrega features** - Prueba agregar una nueva funcionalidad
4. **Escribe tests** - Aprovecha la nueva estructura testeable

---

**¡Felicidades por migrar a una arquitectura más profesional!** 🎉

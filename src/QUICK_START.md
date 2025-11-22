# ⚡ Quick Start - Inicio Rápido

Guía de 5 minutos para empezar con la versión refactorizada.

---

## 🚀 Instalación Rápida

```bash
# 1. Clonar/Descargar proyecto
cd tu-proyecto

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor
npm run dev

# 4. Abrir navegador
# → http://localhost:5173
```

✅ **Listo! La aplicación está corriendo.**

---

## 📂 Archivos Principales

### **Ver el código refactorizado**

```bash
# Componentes principales
/App.refactored.tsx              # ← App principal (45 líneas)
/components/Quiz.refactored.tsx  # ← Quiz (72 líneas)

# Lógica separada
/hooks/useQuizLogic.ts           # ← Lógica del quiz
/hooks/useNavigation.ts          # ← Lógica de navegación

# Datos
/data/quiz-questions.ts          # ← 20 preguntas
/constants/colors.ts             # ← Colores
/constants/navigation.ts         # ← Rutas

# Componentes modulares
/components/quiz/QuizProgress.tsx
/components/quiz/QuizQuestion.tsx
/components/quiz/QuizAnswers.tsx
/components/quiz/QuizNavigation.tsx

/components/layout/Navigation.tsx
/components/layout/Footer.tsx
```

---

## 🔄 Usar Versión Refactorizada

### **Opción 1: Reemplazar (Recomendado)**

```bash
# Backup originales
mv App.tsx App.original.tsx
mv components/Quiz.tsx components/Quiz.original.tsx

# Usar refactorizados
mv App.refactored.tsx App.tsx
mv components/Quiz.refactored.tsx components/Quiz.tsx

# Reiniciar servidor
npm run dev
```

### **Opción 2: Solo probar**

```tsx
// main.tsx
import App from './App.refactored'; // ← Cambiar aquí
```

---

## 📖 Documentación

| Documento | Qué contiene | Cuándo leer |
|-----------|--------------|-------------|
| **README.md** | Guía completa | 📌 Primero |
| **SUMMARY.md** | Resumen ejecutivo | Para overview rápido |
| **MIGRATION_GUIDE.md** | Cómo migrar | Antes de cambiar código |
| **ARQUITECTURA.md** | Decisiones técnicas | Para entender el "por qué" |
| **VISUAL_STUDIO_GUIDE.md** | Integración VS/.NET | Si usas Visual Studio |
| **CHANGELOG.md** | Historial | Para ver cambios |

---

## 🎯 Flujo de Trabajo Recomendado

### **Día 1: Familiarización**
```
1. ✅ Leer SUMMARY.md (10 min)
2. ✅ Explorar estructura de carpetas (15 min)
3. ✅ Ver archivos refactorizados (30 min)
4. ✅ Comparar con originales (20 min)
```

### **Día 2: Migración**
```
1. ✅ Leer MIGRATION_GUIDE.md (15 min)
2. ✅ Hacer backup (5 min)
3. ✅ Migrar archivos (10 min)
4. ✅ Testear funcionamiento (30 min)
```

### **Día 3+: Desarrollo**
```
1. ✅ Leer ARQUITECTURA.md (30 min)
2. ✅ Agregar tu primera feature (variable)
3. ✅ Explorar documentación según necesites
```

---

## 🛠 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo
npm run build            # Build para producción
npm run preview          # Preview de build

# Limpieza
rm -rf node_modules dist # Limpiar cache
npm install              # Reinstalar

# Git
git status               # Ver cambios
git add .                # Agregar todos
git commit -m "msg"      # Commit
```

---

## 💡 Tips Rápidos

### **Modificar Colores**
```typescript
// /constants/colors.ts
export const COLORS = {
  primary: {
    blue: '#TU_COLOR', // ← Aquí
  }
}
```

### **Agregar Pregunta al Quiz**
```typescript
// /data/quiz-questions.ts
export const QUIZ_QUESTIONS = [
  // ... preguntas existentes
  {
    id: 21,
    question: 'Tu pregunta?',
    answers: [...]
  }
]
```

### **Crear Nueva Página**
```typescript
// 1. /components/MiPagina.tsx
export function MiPagina() { return <div>Hola</div> }

// 2. /constants/navigation.ts
export type PageType = 'home' | 'mipagina'

// 3. App.tsx
{currentPage === 'mipagina' && <MiPagina />}
```

---

## 🐛 Solución Rápida de Problemas

### **Puerto 5173 en uso**
```bash
# Cambiar puerto
npm run dev -- --port 3000
```

### **Errores de TypeScript**
```bash
# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### **Hot reload no funciona**
```bash
# Reiniciar servidor
Ctrl+C
npm run dev
```

---

## 📱 Contacto Rápido

- **Problemas técnicos**: Ver documentación correspondiente
- **Preguntas arquitectura**: Leer ARQUITECTURA.md
- **Integración VS**: Leer VISUAL_STUDIO_GUIDE.md

---

## ✅ Checklist de Inicio

**Primera vez usando el proyecto:**

- [ ] Instalar dependencias (`npm install`)
- [ ] Iniciar servidor (`npm run dev`)
- [ ] Abrir navegador (http://localhost:5173)
- [ ] Navegar por todas las páginas
- [ ] Completar el quiz
- [ ] Leer SUMMARY.md
- [ ] Explorar estructura de carpetas
- [ ] Revisar archivos refactorizados

**Migrando a versión refactorizada:**

- [ ] Leer MIGRATION_GUIDE.md completo
- [ ] Hacer backup del código original
- [ ] Commit de cambios pendientes
- [ ] Seguir pasos de migración
- [ ] Testear todas las funcionalidades
- [ ] Commit de versión refactorizada

**Empezando a desarrollar:**

- [ ] Leer README.md sección desarrollo
- [ ] Familiarizarse con hooks personalizados
- [ ] Entender estructura de componentes
- [ ] Probar crear un componente pequeño
- [ ] Leer ARQUITECTURA.md para decisiones técnicas

---

## 🎓 Recursos de Aprendizaje

### **Si eres nuevo en:**

**React Hooks**
- [Documentación Oficial](https://react.dev/learn)
- Ver `/hooks/useQuizLogic.ts` como ejemplo

**TypeScript**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- Ver `/types/quiz.types.ts` como ejemplo

**Arquitectura Clean**
- Leer `ARQUITECTURA.md` de este proyecto
- Estudiar separación de carpetas

**Tailwind CSS**
- [Documentación](https://tailwindcss.com/docs)
- Ver componentes existentes

---

## 🎯 Primeros Pasos Recomendados

1. **5 minutos**: Instalar y correr el proyecto
2. **10 minutos**: Leer SUMMARY.md
3. **20 minutos**: Explorar código refactorizado
4. **30 minutos**: Leer README.md completo
5. **1 hora**: Entender arquitectura
6. **2 horas**: Hacer primera modificación

---

## 🚀 ¡Listo para Empezar!

Ya tienes todo lo necesario para:

✅ Correr el proyecto  
✅ Entender la estructura  
✅ Empezar a desarrollar  
✅ Migrar a versión refactorizada  
✅ Integrar con Visual Studio  

**¡Éxito en tu proyecto!** 🎉

---

**Actualizado**: 2025  
**Versión**: 2.0.0

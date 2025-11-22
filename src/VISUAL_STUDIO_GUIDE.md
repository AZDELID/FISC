# 🖥 Guía para Visual Studio y .NET

Esta guía te ayudará a trabajar con este proyecto en Visual Studio y, opcionalmente, migrarlo a .NET MAUI.

---

## 📋 Tabla de Contenidos

- [Abrir en Visual Studio Code](#-abrir-en-visual-studio-code)
- [Abrir en Visual Studio 2022](#-abrir-en-visual-studio-2022)
- [Migración a .NET MAUI](#-migración-a-net-maui)
- [Integración con ASP.NET Core](#-integración-con-aspnet-core)

---

## 💻 Abrir en Visual Studio Code

### **Opción 1: Desde la Terminal**

```bash
# Navegar a la carpeta del proyecto
cd ruta/al/proyecto

# Abrir Visual Studio Code
code .
```

### **Opción 2: Desde Visual Studio Code**

1. Abrir VS Code
2. **File → Open Folder**
3. Seleccionar la carpeta del proyecto
4. Listo ✅

---

### **Extensiones Recomendadas para VS Code**

Instala estas extensiones para una mejor experiencia de desarrollo:

#### **Esenciales**

```json
{
  "recommendations": [
    // React y TypeScript
    "dsznajder.es7-react-js-snippets",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    
    // Tailwind CSS
    "bradlc.vscode-tailwindcss",
    
    // TypeScript
    "ms-vscode.vscode-typescript-next",
    
    // Utilidades
    "christian-kohler.path-intellisense",
    "formulahendry.auto-rename-tag",
    "naumovs.color-highlight"
  ]
}
```

#### **Instalación Rápida**

Crear archivo `.vscode/extensions.json` con el contenido anterior, VS Code te sugerirá instalarlas automáticamente.

---

### **Configuración Recomendada de VS Code**

Crear archivo `.vscode/settings.json`:

```json
{
  // Formateo automático
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  
  // ESLint
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  
  // TypeScript
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  
  // Tailwind CSS
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    "className\\s*=\\s*[\"'`]([^\"'`]*)[\"'`]"
  ],
  
  // Archivos
  "files.exclude": {
    "**/node_modules": true,
    "**/.git": true,
    "**/dist": true
  },
  
  // Editor
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.rulers": [80, 120],
  "editor.wordWrap": "on"
}
```

---

## 🏢 Abrir en Visual Studio 2022

Visual Studio 2022 no es ideal para proyectos React/Node.js, pero si deseas usarlo:

### **Opción 1: Abrir como Carpeta**

1. Visual Studio 2022
2. **File → Open → Folder**
3. Seleccionar carpeta del proyecto
4. VS detectará automáticamente el proyecto Node.js

### **Opción 2: Crear Solución**

1. **File → New → Project**
2. Buscar "Blank Solution"
3. **Add → Existing Web Site** → Seleccionar carpeta
4. Configurar Node.js Tools

---

### **Instalar Node.js Tools for Visual Studio**

1. Abrir **Visual Studio Installer**
2. **Modify** tu instalación de VS 2022
3. En **Individual Components**, buscar:
   - ✅ Node.js development support
   - ✅ JavaScript and TypeScript language support
4. **Install** y reiniciar VS

---

## 🚀 Migración a .NET MAUI

Si deseas crear una aplicación nativa multiplataforma con .NET MAUI:

### **Arquitectura Recomendada**

```
MauiApp/
├── 📁 MauiApp/                    # Proyecto .NET MAUI
│   ├── MauiProgram.cs
│   ├── App.xaml
│   ├── MainPage.xaml
│   ├── 📁 Platforms/
│   │   ├── Android/
│   │   ├── iOS/
│   │   ├── Windows/
│   │   └── MacCatalyst/
│   ├── 📁 Resources/              # Assets nativos
│   │   ├── Images/
│   │   ├── Fonts/
│   │   └── Styles/
│   └── 📁 wwwroot/                # Contenido web (React build)
│       └── ...                    # Aquí va tu build de React
│
└── 📁 ReactApp/                   # Tu proyecto React actual
    └── ...                        # Código actual
```

---

### **Opción 1: Usar WebView (Recomendado)**

Mantener tu UI de React y embeber en WebView nativo:

#### **Paso 1: Build de React**

```bash
# En tu proyecto React actual
npm run build
# Genera carpeta 'dist' con HTML/CSS/JS
```

#### **Paso 2: Crear Proyecto MAUI**

```bash
dotnet new maui -n MauiApp
```

#### **Paso 3: Configurar WebView**

```csharp
// MainPage.xaml.cs
public partial class MainPage : ContentPage
{
    public MainPage()
    {
        InitializeComponent();
        
        var webView = new WebView
        {
            Source = new HtmlWebViewSource
            {
                // Cargar tu React build
                Html = LoadReactApp()
            }
        };
        
        Content = webView;
    }
    
    private string LoadReactApp()
    {
        // Leer index.html del build de React
        using var stream = FileSystem.OpenAppPackageFileAsync("wwwroot/index.html").Result;
        using var reader = new StreamReader(stream);
        return reader.ReadToEnd();
    }
}
```

#### **Paso 4: Copiar Build de React**

```bash
# Copiar dist/ de React a wwwroot/ de MAUI
cp -r ReactApp/dist/* MauiApp/wwwroot/
```

---

### **Opción 2: Blazor Hybrid**

Reescribir componentes en Blazor (C# + Razor):

#### **Paso 1: Crear Proyecto Blazor MAUI**

```bash
dotnet new maui-blazor -n MauiBlazorApp
```

#### **Paso 2: Convertir Componentes**

```csharp
// Quiz.razor
@page "/quiz"

<div class="quiz-container">
    <h1>@Title</h1>
    
    @foreach (var question in questions)
    {
        <div class="question">
            <p>@question.Text</p>
            <button @onclick="() => SelectAnswer(question)">
                Responder
            </button>
        </div>
    }
</div>

@code {
    private string Title = "Descubre tu Área Ideal";
    private List<Question> questions = new();
    
    protected override void OnInitialized()
    {
        // Cargar preguntas
        questions = QuizService.GetQuestions();
    }
    
    private void SelectAnswer(Question question)
    {
        // Lógica de respuesta
    }
}
```

---

### **Opción 3: React Native (Alternativa)**

Si prefieres mantener React:

```bash
# Crear proyecto React Native
npx react-native init MauiEquivalent

# Instalar React Native Web
npm install react-native-web

# Reutilizar componentes de React
```

---

## 🔗 Integración con ASP.NET Core

Si deseas agregar un backend .NET a tu proyecto React:

### **Arquitectura Full Stack**

```
FullStackApp/
├── 📁 ClientApp/           # Tu proyecto React actual
│   ├── package.json
│   └── src/
│
└── 📁 ServerApp/           # Backend ASP.NET Core
    ├── Program.cs
    ├── Controllers/
    ├── Services/
    └── Models/
```

---

### **Paso 1: Crear Proyecto ASP.NET Core**

```bash
# Crear API
dotnet new webapi -n ServerApp

# Navegar a carpeta
cd ServerApp

# Restaurar dependencias
dotnet restore
```

---

### **Paso 2: Configurar CORS**

```csharp
// Program.cs
var builder = WebApplication.CreateBuilder(args);

// Agregar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // Puerto de Vite
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

// Usar CORS
app.UseCors("AllowReactApp");

app.MapControllers();
app.Run();
```

---

### **Paso 3: Crear API Controller**

```csharp
// Controllers/QuizController.cs
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class QuizController : ControllerBase
{
    [HttpPost("submit")]
    public IActionResult SubmitQuizResult([FromBody] QuizResult result)
    {
        // Guardar en base de datos
        // Procesar resultado
        
        return Ok(new { 
            message = "Resultado guardado exitosamente",
            recommendedTrack = result.Track 
        });
    }
    
    [HttpGet("questions")]
    public IActionResult GetQuestions()
    {
        // Retornar preguntas desde DB
        var questions = _quizService.GetAllQuestions();
        return Ok(questions);
    }
}

public class QuizResult
{
    public string Track { get; set; }
    public Dictionary<string, int> Scores { get; set; }
}
```

---

### **Paso 4: Conectar React con API**

```typescript
// /services/api.ts
const API_BASE_URL = 'http://localhost:5000/api';

export async function submitQuizResult(result: QuizResult): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/quiz/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(result),
  });
  
  if (!response.ok) {
    throw new Error('Error al enviar resultado');
  }
  
  return response.json();
}

// Usar en componente
function Quiz() {
  const handleComplete = async (result: QuizResult) => {
    try {
      await submitQuizResult(result);
      console.log('Resultado guardado');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return <QuizComponent onComplete={handleComplete} />;
}
```

---

### **Paso 5: Configurar SQL Server (Opcional)**

```csharp
// appsettings.json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=QuizDB;Trusted_Connection=True;"
  }
}

// Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Models/QuizResultEntity.cs
public class QuizResultEntity
{
    public int Id { get; set; }
    public string UserId { get; set; }
    public string Track { get; set; }
    public int RedesScore { get; set; }
    public int SoftwareScore { get; set; }
    public int WebScore { get; set; }
    public DateTime CompletedAt { get; set; }
}
```

---

## 🛠 Herramientas Adicionales

### **Visual Studio 2022 - Características Útiles**

1. **IntelliSense Mejorado**
   - Autocompletado de código
   - Sugerencias de tipos
   - Documentación inline

2. **Debugging**
   - Breakpoints en TypeScript/JavaScript
   - Watch variables
   - Call stack

3. **Git Integration**
   - Source control integrado
   - Diff viewer
   - Merge tools

---

### **Rider (JetBrains) - Alternativa Recomendada**

Si tienes licencia de JetBrains, **Rider** es excelente para proyectos full-stack:

```bash
# Abrir proyecto en Rider
rider .
```

**Ventajas de Rider**:
- ✅ Mejor soporte para React + TypeScript
- ✅ Refactoring avanzado
- ✅ Integración perfecta con .NET
- ✅ Performance superior

---

## 📦 Scripts de Build para Integración

### **package.json - Scripts Adicionales**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    
    // Nuevos scripts para integración
    "build:dotnet": "npm run build && npm run copy:dotnet",
    "copy:dotnet": "xcopy /E /I /Y dist ..\\MauiApp\\wwwroot",
    "dev:fullstack": "concurrently \"npm run dev\" \"cd ../ServerApp && dotnet run\""
  }
}
```

---

## 🎯 Recomendaciones

### **Para Desarrollo Web Puro (React + Node.js)**
👉 **Visual Studio Code** - La mejor opción

### **Para Aplicación Nativa (MAUI)**
👉 **Visual Studio 2022** - Soporte completo de MAUI

### **Para Full Stack (.NET + React)**
👉 **Rider** o **Visual Studio 2022** con Node.js Tools

### **Para Mobile (iOS + Android)**
👉 **React Native** o **.NET MAUI** con WebView

---

## 🚦 Próximos Pasos

1. ✅ Elegir tu entorno de desarrollo
2. ✅ Instalar extensiones/herramientas recomendadas
3. ✅ Decidir si necesitas backend (.NET o Node.js)
4. ✅ Configurar integración si es necesario
5. ✅ Empezar a desarrollar

---

## 📞 Soporte Técnico

**Problemas comunes**:

1. **Node.js no reconocido en VS 2022**
   - Instalar Node.js Tools for Visual Studio

2. **CORS errors con ASP.NET**
   - Verificar configuración de CORS en Program.cs

3. **Build falla en MAUI**
   - Verificar que wwwroot/ tiene archivos del build de React

4. **Hot Reload no funciona**
   - Reiniciar servidor de desarrollo
   - Verificar puertos no estén en uso

---

**¡Listo para desarrollar!** 🚀

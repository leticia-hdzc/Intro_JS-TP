# Sistema de Gestión de Biblioteca

## Descripción
Trabajo práctico del curso de Introducción a JavaScript en ADA ITW, sobre un sistema de gestión de biblioteca desarrollado en JavaScript que permite administrar libros, usuarios y préstamos. Incluye funcionalidades para búsqueda, ordenamiento, reportes estadísticos y una interfaz de usuario interactiva por consola.

## Características
- **Gestión de Libros**: Agregar, buscar, ordenar y eliminar libros
- **Gestión de Usuarios**: Registrar, buscar y eliminar usuarios
- **Sistema de Préstamos**: Prestar y devolver libros con control de disponibilidad
- **Reportes Estadísticos**: Generar reportes detallados con estadísticas
- **Búsqueda Avanzada**: Filtros por título, autor y género
- **Ordenamiento**: Algoritmo bubble sort para ordenar por título o año
- **Normalización de Datos**: Limpieza y formato de datos
- **Interfaz Interactiva**: Menú por consola fácil de usar

## Tecnologías Utilizadas
- **JavaScript (Node.js)**: Lenguaje principal
- **prompt-sync**: Librería para entrada de datos por consola
- **Algoritmos de ordenamiento**: Bubble sort implementado manualmente
- **Métodos de arrays**: filter, map, reduce, forEach para procesamiento de datos

## Instalación

### Prerrequisitos
- Node.js (versión 12 o superior)
- npm (incluido con Node.js)

Verificar instalación:
```bash
node --version
npm --version
```

### Pasos de instalación
1. Clona el repositorio
```bash
git clone https://github.com/leticia-hdzc/Intro_JS-TP
```

2. Navega al directorio del proyecto
```bash
cd Intro_JS-TP
```

3. Instala las dependencias
```bash
npm install prompt-sync
```

## Uso

### Ejecución del programa
```bash
node "Leticia_Hernandez_Castillo.js"
```

### Funcionalidades del menú principal
El sistema presenta un menú interactivo con las siguientes opciones:

1. **Agregar libro** - Añadir nuevos libros al sistema
2. **Buscar libro** - Buscar por título, autor o género
3. **Ordenar libros** - Ordenar por título o año de publicación
4. **Borrar libro** - Eliminar libros por ID
5. **Registrar usuario** - Agregar nuevos usuarios
6. **Mostrar usuarios** - Listar todos los usuarios registrados
7. **Buscar usuario** - Buscar usuarios por email
8. **Borrar usuario** - Eliminar usuarios del sistema
9. **Prestar libro** - Realizar préstamos a usuarios
10. **Devolver libro** - Procesar devoluciones
11. **Generar reporte** - Estadísticas completas del sistema
12. **Libros con varias palabras** - Análisis de títulos
13. **Calcular estadísticas** - Métricas avanzadas
14. **Normalizar datos** - Limpieza de formato de datos

### Ejemplos de uso
```bash
# Ejecutar el programa
node "Leticia_Hernandez_Castillo.js"

# Seleccionar opción del menú (ejemplo: agregar libro)
# Ingrese su opción: 1
# ID del libro: 11
# Título: Don Quijote de la Mancha
# Autor: Miguel de Cervantes
# Año: 1605
# Género: Novela
```

## Estructura del Proyecto
```
Leticia_Hernandez-Intro_JS-TP/
├── Leticia_Hernandez_Castillo.js # Archivo principal con todo el código
├── README.md                     # Documentación del proyecto
├── package.json                  # Configuración de dependencias
└── node_modules/                 # Dependencias instaladas
```

## Datos Predefinidos
El sistema incluye datos de ejemplo:
- **10 libros** con variedad de géneros y años de publicación
- **5 usuarios** registrados
- **Algunos préstamos** ya realizados para demostrar funcionalidad

## Funcionalidades Técnicas Implementadas

### Algoritmos
- **Bubble Sort**: Implementación manual para ordenamiento
- **Búsqueda Lineal**: Para localizar libros y usuarios
- **Filtrado Avanzado**: Usando métodos de arrays nativos

### Métodos de JavaScript Utilizados
- `filter()`: Filtrar libros disponibles y por criterios
- `map()`: Transformar datos para reportes
- `reduce()`: Calcular estadísticas y agrupaciones
- `forEach()`: Iteración para mostrar datos
- `Math.min()`, `Math.max()`, `Math.round()`: Cálculos estadísticos

### Validaciones
- Verificación de disponibilidad de libros
- Control de préstamos por usuario
- Validación de IDs únicos
- Normalización de datos de entrada



Link del Proyecto: [https://github.com/leticia-hdzc/Intro_JS-TP]

const prompt = require('prompt-sync')();

// ****************************************
// TP : SISTEMA DE GESTIÓN DE BIBLIOTECA
// ****************************************

// 1 : ESTRUCTURA DE DATOS

// Array de libros con 10 libros de ejemplo

let libros = [
    {
        id: 1,
        titulo: "En el camino",
        autor: "Jack Kerouac",
        anio: 1957,
        genero: "Autobiografía",
        disponible: true
    },
    {
        id: 2,
        titulo: "Los hermanos Karamazov",
        autor: "Fyodor Dostoyevsky",
        anio: 1880,
        genero: "Novela",
        disponible: false
    },
    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        anio: 1949,
        genero: "Distopía",
        disponible: true
    },
    {
        id: 4,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        anio: 1813,
        genero: "Romance",
        disponible: true
    },
    {
        id: 5,
        titulo: "El talento de Mr. Ripley",
        autor: "Patricia Highsmith",
        anio: 1955,
        genero: "Novela psicológica",
        disponible: false
    },
    {
        id: 6,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        anio: 1943,
        genero: "Fábula",
        disponible: true
    },
    {
        id: 7,
        titulo: "Hamlet",
        autor: "William Shakespeare",
        anio: 1603,
        genero: "Teatro",
        disponible: true
    },
    {
        id: 8,
        titulo: "El Aleph",
        autor: "Jorge Luis Borges",
        anio: 1949,
        genero: "Ficción",
        disponible: true
    },
    {
        id: 9,
        titulo: "Rayuela",
        autor: "Julio Cortázar",
        anio: 1963,
        genero: "Novela experimental",
        disponible: false
    },
    {
        id: 10,
        titulo: "El cuento de la criada",
        autor: "Margaret Atwood",
        anio: 1985,
        genero: "Distopía",
        disponible: true
    }
];

// Array de usuarios con 5 usuarios de ejemplo

let usuarios = [
    {
        id: 1,
        nombre: "Carmen Hernández",
        email: "carmen@gmail.com",
        librosPrestados: [2, 5]
    },
    {
        id: 2,
        nombre: "Juan Mendoza",
        email: "juan@gmail.com",
        librosPrestados: [9]
    },
    {
        id: 3,
        nombre: "Arturo López",
        email: "ana@gmail.com",
        librosPrestados: []
    },
    {
        id: 4,
        nombre: "Raquel Rodríguez",
        email: "carlos@gmail.com",
        librosPrestados: []
    },
    {
        id: 5,
        nombre: "Sofía Castillo",
        email: "sofia@gmail.com",
        librosPrestados: []
    }
];

// 2 : FUNCIONES PARA LA GESTIÓN DE LIBROS

// Función para agregar un nuevo libro
function agregarLibro(id, titulo, autor, anio, genero) {

    let nuevoLibro = {
        id: id,
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero,
        disponible: true
    };
    
    libros.push(nuevoLibro);
    console.log(`\nLibro agregado exitosamente: ${titulo}`);
}

// Función para buscar libros
function buscarLibro(criterio, valor) {
    let resultados = []; // Array para guardar los resultados
    
    // Recorremos todos los libros uno por uno
    for (let i = 0; i < libros.length; i++) {
        let libro = libros[i];
        
        // Verificar el criterio de búsqueda
        if (criterio === "titulo" && libro.titulo.toLowerCase().includes(valor.toLowerCase())) {
            resultados.push(libro);
        } else if (criterio === "autor" && libro.autor.toLowerCase().includes(valor.toLowerCase())) {
            resultados.push(libro);
        } else if (criterio === "genero" && libro.genero.toLowerCase().includes(valor.toLowerCase())) {
            resultados.push(libro);
        }
    }
    
    return resultados;
}

// Función para ordenar libros con bubble sort
function ordenarLibros(criterio) {
    
    let librosOrdenados = [...libros]; // Copia del array para no modificar el original
    
    for (let i = 0; i < librosOrdenados.length - 1; i++) {
        for (let j = 0; j < librosOrdenados.length - 1 - i; j++) {
            let debeIntercambiar = false;
            
            if (criterio === "titulo") {
                // Compara por títulos alfabéticamente
                if (librosOrdenados[j].titulo > librosOrdenados[j + 1].titulo) {
                    debeIntercambiar = true;
                }
            } else if (criterio === "anio") {
                // Compara por años
                if (librosOrdenados[j].anio > librosOrdenados[j + 1].anio) {
                    debeIntercambiar = true;
                }
            }
            
            // Intercambia elementos
            if (debeIntercambiar) {
                let temp = librosOrdenados[j];
                librosOrdenados[j] = librosOrdenados[j + 1];
                librosOrdenados[j + 1] = temp;
            }
        }
    }
    
    // Mostrar los libros ordenados en la terminal
    console.log("Libros ordenados por", criterio + ":");
    librosOrdenados.forEach(libro => {
        console.log(`${libro.anio} - ${libro.titulo} - ${libro.autor}`);
    });
    
    return librosOrdenados;
}

// Función para borrar un libro por ID
function borrarLibro(id) {
    let indice = -1;
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === id) {
            indice = i;
            break;
        }
    }
    
    if (indice !== -1) {
        let libroEliminado = libros[indice];
        libros.splice(indice, 1);
        console.log("Libro eliminado:", libroEliminado.titulo);
        return true;
    } else {
        console.log("No se encontró un libro con ID:", id);
        return false;
    }
}

// 3: GESTIÓN DE USUARIOS

// Función para registrar un nuevo usuario
function registrarUsuario(nombre, email) {

    let nuevoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
    
    let nuevoUsuario = {
        id: nuevoId,
        nombre: nombre,
        email: email,
        librosPrestados: []
    };
    

    usuarios.push(nuevoUsuario);
    console.log("Usuario registrado:", nombre);
    return nuevoUsuario;
}

// Función para mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
    console.log("Lista de todos los usuarios:");
    usuarios.forEach(usuario => {
        console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Email: ${usuario.email}`);
    });
    return usuarios;
}

// Función para buscar un usuario por email
function buscarUsuario(email) {

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email.toLowerCase() === email.toLowerCase()) {
            return usuarios[i];
        }
    }
    
    console.log("No se encontró usuario con email:", email);
    return null;
}

// Función para borrar un usuario
function borrarUsuario(nombre, email) {

    let indice = -1;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombre && usuarios[i].email === email) {
            indice = i;
            break;
        }
    }
    
    if (indice !== -1) {
        let usuarioEliminado = usuarios[indice];
        usuarios.splice(indice, 1);
        console.log("Usuario eliminado:", usuarioEliminado.nombre);
        return true;
    } else {
        console.log("No se encontró el usuario especificado");
        return false;
    }
}

// 4: SISTEMA DE PRÉSTAMOS

// Función para prestar un libro
function prestarLibro(idLibro, idUsuario) {

    let libro = null;
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === idLibro) {
            libro = libros[i];
            break;
        }
    }
    
    // Buscar el usuario
    let usuario = null;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === idUsuario) {
            usuario = usuarios[i];
            break;
        }
    }
    
    // Verificar que el libro y usuario existan
    if (!libro) {
        console.log("No se encontró el libro con ID:", idLibro);
        return false;
    }
    
    if (!usuario) {
        console.log("No se encontró el usuario con ID:", idUsuario);
        return false;
    }
    
    // Verificar que el libro esté disponible
    if (!libro.disponible) {
        console.log("El libro no está disponible:", libro.titulo);
        return false;
    }
    
    // Realizar el préstamo
    libro.disponible = false; // Marcar como no disponible
    usuario.librosPrestados.push(idLibro); // Agregar a la lista del usuario
    
    console.log(`Libro "${libro.titulo}" prestado a ${usuario.nombre}`);
    return true;
}

// Función para devolver un libro
function devolverLibro(idLibro, idUsuario) {

    let libro = null;
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].id === idLibro) {
            libro = libros[i];
            break;
        }
    }
    
    // Buscar el usuario
    let usuario = null;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === idUsuario) {
            usuario = usuarios[i];
            break;
        }
    }
    
    // Verificar que el libro y usuario existan
    if (!libro || !usuario) {
        console.log("No se encontró el libro o el usuario");
        return false;
    }
    
    // Verificar que el usuario tenga el libro prestado
    let indiceLibro = usuario.librosPrestados.indexOf(idLibro);
    if (indiceLibro === -1) {
        console.log("El usuario no tiene este libro prestado");
        return false;
    }
    
    // Realizar la devolución
    libro.disponible = true; // Marcar como disponible
    usuario.librosPrestados.splice(indiceLibro, 1); // Quitar de la lista del usuario
    
    console.log(`Libro "${libro.titulo}" devuelto por ${usuario.nombre}`);
    return true;
}

// 5: SISTEMA DE PRÉSTAMOS

// Función para generar reporte
function generarReporteLibros() {
    console.log("*** REPORTE DE LIBROS ***");
    
    // Total de libros
    let totalLibros = libros.length;
    console.log("\nCantidad total de libros:", totalLibros);
    
    // Libros prestados (Método Filter)
    let librosPrestados = libros.filter(libro => !libro.disponible);
    console.log("\nCantidad de libros prestados:", librosPrestados.length);
    
    // Libros por género (Método Reduce)
    let librosPorGenero = libros.reduce((contador, libro) => {
        contador[libro.genero] = (contador[libro.genero] || 0) + 1;
        return contador;
    }, {});
    
    console.log("Libros por género:");
    for (let genero in librosPorGenero) {
        console.log(`  ${genero}: ${librosPorGenero[genero]}`);
    }
    
    // Libro más antiguo y más nuevo (Método reduce)
    let libroMasAntiguo = libros.reduce((antiguo, libro) => 
        libro.anio < antiguo.anio ? libro : antiguo
    );
    
    let libroMasNuevo = libros.reduce((nuevo, libro) => 
        libro.anio > nuevo.anio ? libro : nuevo
    );
    
    console.log("\nLibro más antiguo:", libroMasAntiguo.titulo, "(" + libroMasAntiguo.anio + ")");
    console.log("\nLibro más nuevo:", libroMasNuevo.titulo, "(" + libroMasNuevo.anio + ")");
}

// 6: IDENTIFICACIÓN AVANZADA DE LIBROS

// Función para encontrar libros con palabras en el título
function librosConPalabrasEnTitulo() {
    // Filtrar libros que tienen más de una palabra en el título
    let librosConVariasPalabras = libros.filter(libro => {
        let titulo = libro.titulo.trim();

        // Verificar que solo contenga letras y espacios
        let soloLetrasYEspacios = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(titulo);
        
        if (!soloLetrasYEspacios) {
            return false;
        }
        
        let palabras = titulo.split(' ').filter(palabra => palabra.length > 0);
        
        return palabras.length > 1; // Más de una palabra
    });
    
    // Extraer solo los títulos (Método map)
    let titulos = librosConVariasPalabras.map(libro => libro.titulo);
    
    console.log("\nLibros con más de una palabra en el título:");
    titulos.forEach(titulo => console.log("- " + titulo));
    
    return titulos;
}

// 7: CÁLCULOS ESTADÍSTICOS

// Función para calcular estadísticas usando el objeto Math
function calcularEstadisticas() {
    console.log("*** ESTADÍSTICAS ***");
    
    // Promedio de años de publicación
    let sumaAnios = libros.reduce((suma, libro) => suma + libro.anio, 0);
    let promedioAnios = Math.round(sumaAnios / libros.length);
    console.log("\nPromedio de años de publicación:", promedioAnios);
    
    // Año más frecuente
    let contadorAnios = {};
    libros.forEach(libro => {
        contadorAnios[libro.anio] = (contadorAnios[libro.anio] || 0) + 1;
    });
    
    let anioMasFrecuente = Object.keys(contadorAnios).reduce((a, b) => 
        contadorAnios[a] > contadorAnios[b] ? a : b
    );
    console.log("\nAño de publicación más frecuente:", anioMasFrecuente);
    
    // Diferencia entre el libro más antiguo y más nuevo
    let anios = libros.map(libro => libro.anio);
    let anioMinimo = Math.min(...anios);
    let anioMaximo = Math.max(...anios);
    let diferencia = anioMaximo - anioMinimo;
    
    console.log("\nDiferencia entre el libro más antiguo y más nuevo:", diferencia, "años");
}

// 8: MANEJO DE CADENAS

// Función para normalizar datos usando métodos de strings
function normalizarDatos() {
    console.log("Normalizando datos...");
    
    // Convertir títulos a mayúsculas
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase();
    });
    
    // Eliminar espacios en blanco de nombres de autores
    libros.forEach(libro => {
        libro.autor = libro.autor.trim();
    });
    
    // Formatear emails a minúsculas
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    });
    
    console.log("Datos normalizados exitosamente");
}

// 9: INTERFAZ DE USUARIO

// Función del menú principal
function menuPrincipal() {
    let continuar = true;
    
    while (continuar) {
        // Mostrar opciones del menú
        let opcion = prompt(`
**** BIENVENIDA/O AL SISTEMA DE GESTIÓN DE LA BIBLIOTECA ****

1. Agregar libro
2. Buscar libro
3. Ordenar libros
4. Borrar libro
5. Registrar usuario
6. Mostrar usuarios
7. Buscar usuario
8. Borrar usuario
9. Prestar libro
10. Devolver libro
11. Generar reporte
12. Libros con varias palabras
13. Calcular estadísticas
14. Normalizar datos
0. Salir

Ingrese su opción:`);
        
        // Procesar la opción elegida
        switch (opcion) {
            case "1":
                let id = parseInt(prompt("\nID del libro: "));
                let titulo = prompt("Título: ");
                let autor = prompt("Autor: ");
                let anio = parseInt(prompt("Año: "));
                let genero = prompt("Género: ");
                agregarLibro(id, titulo, autor, anio, genero);
                break;
                
            case "2":
                let criterio = prompt("\nBuscar por (titulo/autor/genero): ");
                let valor = prompt("Valor a buscar: ");
                let resultados = buscarLibro(criterio, valor);
                console.log("\nResultados encontrados: ", resultados);
                break;
                
            case "3":
                let criterioOrden = prompt("\nOrdenar por (titulo/anio): ");
                ordenarLibros(criterioOrden);
                break;
                
            case "4":
                let idBorrar = parseInt(prompt("\nID del libro a borrar: "));
                borrarLibro(idBorrar);
                break;
                
            case "5":
                let nombreUsuario = prompt("\nNombre del usuario: ");
                let emailUsuario = prompt("Email del usuario: ");
                registrarUsuario(nombreUsuario, emailUsuario);
                break;
                
            case "6":
                mostrarTodosLosUsuarios();
                break;
                
            case "7":
                let emailBuscar = prompt("\nEmail del usuario: ");
                let usuarioEncontrado = buscarUsuario(emailBuscar);
                if (usuarioEncontrado) {
                    console.log("\nUsuario encontrado: ", usuarioEncontrado);
                }
                break;
                
            case "8":
                let nombreBorrar = prompt("\nNombre del usuario: ");
                let emailBorrar = prompt("Email del usuario: ");
                borrarUsuario(nombreBorrar, emailBorrar);
                break;
                
            case "9":
                let idLibroPrestamo = parseInt(prompt("\nID del libro:"));
                let idUsuarioPrestamo = parseInt(prompt("ID del usuario:"));
                prestarLibro(idLibroPrestamo, idUsuarioPrestamo);
                break;
                
            case "10":
                let idLibroDevolucion = parseInt(prompt("\nID del libro:"));
                let idUsuarioDevolucion = parseInt(prompt("ID del usuario:"));
                devolverLibro(idLibroDevolucion, idUsuarioDevolucion);
                break;
                
            case "11":
                generarReporteLibros();
                break;
                
            case "12":
                librosConPalabrasEnTitulo();
                break;
                
            case "13":
                calcularEstadisticas();
                break;
                
            case "14":
                normalizarDatos();
                break;
                
            case "0":
                continuar = false;
                console.log("\n¡Gracias por usar el sistema!");
                break;
                
            default:
                alert("\nOpción no válida. Intente nuevamente.");
        }
    }
}


menuPrincipal();
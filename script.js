// script.js - Funciones JavaScript para todas las páginas

// =============================================
// FUNCIONES GENERALES
// =============================================

console.log("JavaScript cargado correctamente");

// Función para mostrar mensaje de carga
function mostrarMensajeCarga() {
    console.log("Página cargada correctamente");
}

// =============================================
// FUNCIONES PARA PÁGINA PRINCIPAL (index.html)
// =============================================

function inicializarPaginaPrincipal() {
    console.log("Inicializando página principal...");
    
    // a. Mensaje de bienvenida
    alert("¡Bienvenido a nuestro sitio web interactivo!");
    
    // b. Preguntar por el nombre
    let userName = prompt("Por favor, ingresa tu nombre para personalizar tu experiencia:");
    
    // c. Dar la bienvenida al usuario y d. Mostrar nombre en página
    if(userName && userName.trim() !== '') {
        alert(`¡Hola ${userName}! Bienvenido/a a nuestra página principal.`);
        mostrarNombreUsuario(userName);
    } else {
        alert("¡Bienvenido! Esperamos que disfrutes de nuestro sitio web.");
    }
}

function mostrarNombreUsuario(nombre) {
    const userDisplay = document.getElementById('user-display');
    if(userDisplay) {
        userDisplay.innerHTML = 
            `<p class="user-greeting">Hola, <span class="user-name">${nombre}</span>. ¡Es un placer tenerte aquí!</p>`;
    }
}

// =============================================
// FUNCIONES PARA GALERÍA (pagina2.html)
// =============================================

function inicializarGaleria() {
    console.log("Inicializando galería...");
    
    // a. Mensaje de bienvenida
    alert("¡Bienvenido a nuestra galería de imágenes!");
    
    // b. Preguntar por la edad y verificar acceso
    verificarEdadGaleria();
}

function verificarEdadGaleria() {
    let userAge = prompt("Para acceder a la galería, por favor ingresa tu edad:");
    const contenido = document.getElementById('contenido-pagina');
    
    if(!contenido) return;
    
    if(userAge && parseInt(userAge) > 20) {
        // Mostrar galería si es mayor de 20
        mostrarGaleria();
        alert("¡Acceso concedido! Disfruta de nuestra galería.");
    } else {
        // Mostrar mensaje de acceso denegado
        mostrarAccesoDenegado(userAge);
        alert("Acceso denegado. Debes ser mayor de 20 años para ver la galería.");
    }
}

function mostrarGaleria() {
    const contenido = document.getElementById('contenido-pagina');
    contenido.innerHTML = `
        <section class="gallery">
            <h2>Nuestra Galería</h2>
            <div class="image-grid">
                <div class="image-item animation-1">
                    <img src="https://picsum.photos/300/200?random=1" alt="Imagen 1" onerror="this.src='https://via.placeholder.com/300x200/3498db/ffffff?text=Imagen+1'">
                    <p>Animación de Rotación</p>
                </div>
                <div class="image-item animation-2">
                    <img src="https://picsum.photos/300/200?random=2" alt="Imagen 2" onerror="this.src='https://via.placeholder.com/300x200/e74c3c/ffffff?text=Imagen+2'">
                    <p>Animación de Escala</p>
                </div>
                <div class="image-item animation-3">
                    <img src="https://picsum.photos/300/200?random=3" alt="Imagen 3" onerror="this.src='https://via.placeholder.com/300x200/2ecc71/ffffff?text=Imagen+3'">
                    <p>Animación de Desplazamiento</p>
                </div>
                <div class="image-item animation-4">
                    <img src="https://picsum.photos/300/200?random=4" alt="Imagen 4" onerror="this.src='https://via.placeholder.com/300x200/f39c12/ffffff?text=Imagen+4'">
                    <p>Animación de Opacidad</p>
                </div>
                <div class="image-item animation-5">
                    <img src="https://picsum.photos/300/200?random=5" alt="Imagen 5" onerror="this.src='https://via.placeholder.com/300x200/9b59b6/ffffff?text=Imagen+5'">
                    <p>Animación Combinada</p>
                </div>
            </div>
        </section>
    `;
}

function mostrarAccesoDenegado(edad) {
    const contenido = document.getElementById('contenido-pagina');
    contenido.innerHTML = `
        <section class="access-denied">
            <h2>Acceso Restringido</h2>
            <div class="denied-message">
                <p>Lo sentimos, no cumples con la edad mínima requerida para acceder a esta galería.</p>
                <p>Debes ser mayor de 20 años para ver las imágenes.</p>
                <p>Tu edad ingresada: <strong>${edad || 'No especificada'}</strong></p>
                <p>Por favor, regresa cuando cumplas la edad requerida.</p>
            </div>
        </section>
    `;
}

// =============================================
// FUNCIONES PARA CALCULADORA (pagina3.html)
// =============================================

// Función para multiplicar
function multiplicar() {
    let num1 = parseFloat(prompt("Ingresa el primer número para multiplicar:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número para multiplicar:"));
    
    if(!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 * num2;
        mostrarResultado(`El resultado de ${num1} × ${num2} = ${resultado}`);
    } else {
        alert("Por favor ingresa números válidos.");
    }
}

// Función para elevar al cuadrado
function elevarCuadrado() {
    let num = parseFloat(prompt("Ingresa un número para elevarlo al cuadrado:"));
    
    if(!isNaN(num)) {
        let resultado = num * num;
        mostrarResultado(`El resultado de ${num}² = ${resultado}`);
    } else {
        alert("Por favor ingresa un número válido.");
    }
}

// Función para restar
function restar() {
    let num1 = parseFloat(prompt("Ingresa el primer número para restar:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número para restar:"));
    
    if(!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 - num2;
        mostrarResultado(`El resultado de ${num1} - ${num2} = ${resultado}`);
    } else {
        alert("Por favor ingresa números válidos.");
    }
}

// Función para sumar
function sumar() {
    let num1 = parseFloat(prompt("Ingresa el primer número para sumar:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número para sumar:"));
    
    if(!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 + num2;
        mostrarResultado(`El resultado de ${num1} + ${num2} = ${resultado}`);
    } else {
        alert("Por favor ingresa números válidos.");
    }
}

// Función para mostrar resultados en la calculadora
function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    if(resultadoDiv) {
        resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
        
        // Limpiar el resultado después de 5 segundos
        setTimeout(() => {
            resultadoDiv.innerHTML = '';
        }, 5000);
    }
}

// =============================================
// INICIALIZACIÓN AUTOMÁTICA
// =============================================

// Detectar en qué página estamos y ejecutar las funciones correspondientes
document.addEventListener('DOMContentLoaded', function() {
    mostrarMensajeCarga();
    
    const currentPage = window.location.pathname;
    
    // Verificar si estamos en la página principal
    if(currentPage.includes('index.html') || currentPage === '/' || currentPage.endsWith('/')) {
        setTimeout(inicializarPaginaPrincipal, 500);
    }
    
    // Verificar si estamos en la galería
    if(currentPage.includes('pagina2.html')) {
        setTimeout(inicializarGaleria, 500);
    }
    
    // La calculadora no necesita inicialización automática porque usa botones
    if(currentPage.includes('pagina3.html')) {
        console.log("Calculadora cargada - lista para usar");
    }
});

// Función auxiliar para validar números
function esNumeroValido(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
                                              }

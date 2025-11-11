// script.js - JavaScript optimizado para todas las páginas

console.log("Sistema cargado");

// ===== DETECCIÓN DE PÁGINA =====
function detectarPagina() {
    const path = window.location.pathname;
    
    if(path.includes('index.html') || path === '/' || path.endsWith('/')) {
        setTimeout(inicializarPrincipal, 100);
    } else if(path.includes('pagina2.html')) {
        setTimeout(inicializarGaleria, 100);
    }
    // pagina3.html no necesita inicialización automática
}

// ===== PÁGINA PRINCIPAL =====
function inicializarPrincipal() {
    alert("¡Bienvenido a nuestro sitio web interactivo!");
    
    const userName = prompt("Por favor, ingresa tu nombre:");
    
    if(userName && userName.trim()) {
        alert(`¡Hola ${userName}! Bienvenido/a a nuestra página principal.`);
        mostrarNombreUsuario(userName);
    }
}

function mostrarNombreUsuario(nombre) {
    const userDisplay = document.getElementById('user-display');
    if(userDisplay) {
        userDisplay.innerHTML = 
            `<p class="user-greeting">Hola, <span class="user-name">${nombre}</span>. ¡Es un placer tenerte aquí!</p>`;
    }
}

// ===== GALERÍA =====
function inicializarGaleria() {
    alert("¡Bienvenido a nuestra galería de imágenes!");
    verificarEdad();
}

function verificarEdad() {
    const edad = prompt("Para acceder a la galería, por favor ingresa tu edad:");
    const contenido = document.getElementById('contenido-pagina');
    
    if(!contenido) return;
    
    if(edad && parseInt(edad) > 20) {
        mostrarGaleria();
        alert("¡Acceso concedido! Disfruta de nuestra galería.");
    } else {
        mostrarAccesoDenegado(edad);
        alert("Acceso denegado. Debes ser mayor de 20 años para ver la galería.");
    }
}

function mostrarGaleria() {
    const imagenes = [
        { tipo: 'animation-1', texto: 'Animación de Rotación' },
        { tipo: 'animation-2', texto: 'Animación de Escala' },
        { tipo: 'animation-1', texto: 'Animación de Desplazamiento' },
        { tipo: 'animation-2', texto: 'Animación de Opacidad' },
        { tipo: 'animation-1', texto: 'Animación Combinada' }
    ];
    
    const galeriaHTML = imagenes.map((img, index) => `
        <div class="image-item ${img.tipo}">
            <img src="https://picsum.photos/300/200?random=${index + 1}" 
                 alt="Imagen ${index + 1}"
                 onerror="this.src='https://via.placeholder.com/300x200/3498db/ffffff?text=Imagen+${index + 1}'">
            <p>${img.texto}</p>
        </div>
    `).join('');
    
    document.getElementById('contenido-pagina').innerHTML = `
        <section class="gallery">
            <h2>Nuestra Galería</h2>
            <div class="image-grid">${galeriaHTML}</div>
        </section>
    `;
}

function mostrarAccesoDenegado(edad) {
    document.getElementById('contenido-pagina').innerHTML = `
        <section class="access-denied">
            <h2>Acceso Restringido</h2>
            <div class="denied-message">
                <p>Lo sentimos, no cumples con la edad mínima requerida para acceder a esta galería.</p>
                <p>Debes ser mayor de 20 años para ver las imágenes.</p>
                <p>Tu edad ingresada: <strong>${edad || 'No especificada'}</strong></p>
            </div>
        </section>
    `;
}

// ===== CALCULADORA =====
function multiplicar() {
    const num1 = obtenerNumero("primer número para multiplicar");
    const num2 = obtenerNumero("segundo número para multiplicar");
    
    if(num1 !== null && num2 !== null) {
        mostrarResultado(`El resultado de ${num1} × ${num2} = ${num1 * num2}`);
    }
}

function elevarCuadrado() {
    const num = obtenerNumero("número para elevarlo al cuadrado");
    
    if(num !== null) {
        mostrarResultado(`El resultado de ${num}² = ${num * num}`);
    }
}

function restar() {
    const num1 = obtenerNumero("primer número para restar");
    const num2 = obtenerNumero("segundo número para restar");
    
    if(num1 !== null && num2 !== null) {
        mostrarResultado(`El resultado de ${num1} - ${num2} = ${num1 - num2}`);
    }
}

function sumar() {
    const num1 = obtenerNumero("primer número para sumar");
    const num2 = obtenerNumero("segundo número para sumar");
    
    if(num1 !== null && num2 !== null) {
        mostrarResultado(`El resultado de ${num1} + ${num2} = ${num1 + num2}`);
    }
}

function obtenerNumero(mensaje) {
    const input = prompt(`Ingresa el ${mensaje}:`);
    const numero = parseFloat(input);
    
    if(isNaN(numero)) {
        alert("Por favor ingresa un número válido.");
        return null;
    }
    
    return numero;
}

function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    if(resultadoDiv) {
        resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
        setTimeout(() => resultadoDiv.innerHTML = '', 5000);
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', detectarPagina);

// script.js - JavaScript optimizado

console.log("Sistema cargado");

// ===== DETECCIÓN DE PÁGINA =====
function detectarPagina() {
    const path = window.location.pathname;
    
    if(path.includes('index.html') || path === '/' || path.endsWith('/')) {
        inicializarPrincipal();
    } else if(path.includes('pagina2.html')) {
        inicializarGaleria();
    }
}

// ===== PÁGINA PRINCIPAL =====
function inicializarPrincipal() {
    alert("¡Bienvenido a nuestro sitio web interactivo!");
    
    const userName = prompt("Por favor, ingresa tu nombre:");
    
    if(userName && userName.trim()) {
        alert(`¡Hola ${userName}! Bienvenido/a.`);
        document.getElementById('user-display').innerHTML = 
            `<p class="user-greeting">Hola, <span class="user-name">${userName}</span></p>`;
    }
}

// ===== GALERÍA =====
function inicializarGaleria() {
    alert("¡Bienvenido a nuestra galería!");
    verificarEdad();
}

function verificarEdad() {
    const edad = prompt("Para acceder, ingresa tu edad:");
    const contenido = document.getElementById('contenido-pagina');
    
    if(!contenido) return;
    
    if(edad && parseInt(edad) > 20) {
        mostrarGaleria();
        alert("¡Acceso concedido!");
    } else {
        mostrarAccesoDenegado(edad);
        alert("Acceso denegado. Debes ser mayor de 20 años.");
    }
}

function mostrarGaleria() {
    const imagenes = [
        { tipo: 'animation-1', texto: 'Rotación' },
        { tipo: 'animation-2', texto: 'Escala' },
        { tipo: 'animation-1', texto: 'Desplazamiento' },
        { tipo: 'animation-2', texto: 'Opacidad' },
        { tipo: 'animation-1', texto: 'Combinada' }
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
                <p>Debes ser mayor de 20 años para ver la galería.</p>
                <p>Edad ingresada: <strong>${edad || 'No especificada'}</strong></p>
            </div>
        </section>
    `;
}

// ===== CALCULADORA =====
function calcularOperacion(operacion) {
    switch(operacion) {
        case 'multiplicar':
            calcularMultiplicacion();
            break;
        case 'cuadrado':
            calcularCuadrado();
            break;
        case 'restar':
            calcularResta();
            break;
        case 'sumar':
            calcularSuma();
            break;
    }
}

function calcularMultiplicacion() {
    const num1 = obtenerNumero("primer número para multiplicar");
    const num2 = obtenerNumero("segundo número para multiplicar");
    
    if(num1 !== null && num2 !== null) {
        mostrarResultado(`${num1} × ${num2} = ${num1 * num2}`);
    }
}

function calcularCuadrado() {
    const num = obtenerNumero("número para elevar al cuadrado");
    
    if(num !== null) {
        mostrarResultado(`${num}² = ${num * num}`);
    }
}

function calcularResta() {
    const num1 = obtenerNumero("primer número para restar");
    const num2 = obtenerNumero("segundo número para restar");
    
    if(num1 !== null && num2 !== null) {
        mostrarResultado(`${num1} - ${num2} = ${num1 - num2}`);
    }
}

function calcularSuma() {
    const num1 = obtenerNumero("primer número para sumar");
    const num2 = obtenerNumero("segundo número para sumar");
    
    if(num1 !== null && num2 !== null) {
        mostrarResultado(`${num1} + ${num2} = ${num1 + num2}`);
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

// script.js - Solo modificamos la función mostrarGaleria

// ... (todo el código anterior se mantiene igual) ...

function mostrarGaleria() {
    const imagenes = [
        { 
            tipo: 'animation-1', 
            texto: 'Rotación 3D',
            descripcion: 'Giro completo en 3D con perspectiva'
        },
        { 
            tipo: 'animation-2', 
            texto: 'Pulso y Brillo',
            descripcion: 'Escala y cambio de brillo alternante'
        },
        { 
            tipo: 'animation-3', 
            texto: 'Rebote Lateral',
            descripcion: 'Movimiento de lado a lado con efecto rebote'
        },
        { 
            tipo: 'animation-4', 
            texto: 'Desenfoque Suave',
            descripcion: 'Transición de opacidad y desenfoque'
        },
        { 
            tipo: 'animation-5', 
            texto: 'Sacudida Inclinada',
            descripcion: 'Movimiento de inclinación oscilante'
        }
    ];
    
    const galeriaHTML = imagenes.map((img, index) => `
        <div class="image-item ${img.tipo}">
            <img src="https://picsum.photos/300/200?random=${index + 1}" 
                 alt="${img.texto}"
                 onerror="this.src='https://via.placeholder.com/300x200/3498db/ffffff?text=Imagen+${index + 1}'">
            <p><strong>${img.texto}</strong></p>
            <small>${img.descripcion}</small>
        </div>
    `).join('');
    
    document.getElementById('contenido-pagina').innerHTML = `
        <section class="gallery">
            <h2>Galería con 5 Animaciones Diferentes</h2>
            <p class="description">Pasa el cursor sobre cada imagen para ver su animación única</p>
            <div class="image-grid">${galeriaHTML}</div>
        </section>
    `;
}

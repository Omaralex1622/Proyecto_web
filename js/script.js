// Selecciona los botones "Ver más" y las ventanas emergentes
const botonesVerMas = {
    python: document.querySelector('.boton-analisis'),
    bi: document.querySelector('.boton-bi'),
    excel: document.querySelector('.boton-excel')
};

const ventanas = {
    python: document.getElementById('ventana-python'),
    bi: document.getElementById('ventana-bi'),
    excel: document.getElementById('ventana-excel')
};

const overlay = document.querySelector('.overlay');

// Función para mostrar la ventana correspondiente
Object.keys(botonesVerMas).forEach(servicio => {
    botonesVerMas[servicio].addEventListener('click', () => {
        ventanas[servicio].classList.add('mostrar'); // Muestra la ventana
        overlay.classList.add('mostrar'); // Muestra el fondo oscuro
    });
});

// // Cambia el color del h2 dinámicamente
// const coloresH2 = {
//     python: '#0056b3', // Azul
//     bi: '#ff8000', // Naranja
//     excel: '#66cc66' // Verde
// };

// Object.keys(ventanas).forEach(servicio => {
//     const ventana = ventanas[servicio];
//     const h2 = ventana.querySelector('.texto-ventana h2');
//     h2.style.color = coloresH2[servicio];
// });

// // Función para cerrar las ventanas
const botonesCerrar = document.querySelectorAll('.cerrar');
 botonesCerrar.forEach(boton => {
     boton.addEventListener('click', () => {
         Object.values(ventanas).forEach(ventana => ventana.classList.remove('mostrar')); // Oculta todas las ventanas
         overlay.classList.remove('mostrar'); // Oculta el fondo oscuro
     });
 });

// Cierra la ventana al hacer clic en el fondo oscuro
overlay.addEventListener('click', () => {
    Object.values(ventanas).forEach(ventana => ventana.classList.remove('mostrar'));
    overlay.classList.remove('mostrar');
});

// Selecciona los botones
const botonInicio = document.querySelector('.button-inicio');
const botonAcerca = document.querySelector('.button-acerca');
const botonContacto = document.querySelector('.button-contacto');

// Agrega eventos de clic para redirigir a las secciones
botonInicio.addEventListener('click', () => {
    console.log('Botón Inicio clickeado');
    document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
});

botonAcerca.addEventListener('click', () => {
    console.log('Botón Acerca clickeado');
    document.getElementById('acerca').scrollIntoView({ behavior: 'smooth' });
});

botonContacto.addEventListener('click', () => {
    console.log('Botón Contacto clickeado');
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
});

// Selecciona el botón "Back to Top"
const botonBackToTop = document.querySelector('.button-back-to-top');

// Agrega un evento de clic para redirigir al inicio
botonBackToTop.addEventListener('click', () => {
    document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
    console.log('Botón Back to Top clickeado');
});


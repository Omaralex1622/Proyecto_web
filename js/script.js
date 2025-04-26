// Selecciona todos los botones "Ver más"
const botonesVerMas = document.querySelectorAll('.boton-analisis, .boton-bi, .boton-excel');

// Selecciona el formulario
const formulario = document.querySelector('#formulario');

// Agrega un evento de clic a cada botón
botonesVerMas.forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        formulario.style.display = 'block'; // Muestra el formulario
        formulario.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave hacia el formulario
    });
});

// Botón para cerrar el formulario
const botonCerrar = document.querySelector('.cerrar');
botonCerrar.addEventListener('click', () => {
    formulario.style.display = 'none'; // Oculta el formulario
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


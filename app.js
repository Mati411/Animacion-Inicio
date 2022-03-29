const cortina = document.querySelector('.cortina');
const border = document.querySelector('.intro-borde');
const backgroundLogo = document.querySelector('.intro-circulo');
const logo = document.querySelector('.intro-titulo');
const navbar = document.querySelector('.navbar');
const textoPostIntro = document.querySelector('.intro-texto');


setTimeout(() => {
    cortina.style.animation = 'cortinaIntro 1s ease-in-out forwards';
    backgroundLogo.style.animation = 'unsize 1.5s ease-in-out forwards';
    border.style.animation = 'fadeOut .5s ease-in-out forwards';
    logo.style.animation = 'resizeTitulo 1.5s ease-in-out forwards';
    navbar.style.animation = 'fadeIn 1s ease-in-out forwards';
    textoPostIntro.style.animation = 'fadeIn 2.5s ease-in-out forwards';
}, 2450);
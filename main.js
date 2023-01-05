const iconoBar = document.querySelector('.icono__bar');
const nav = document.querySelector('.nav__none');
const iconoClose = document.querySelector('.icono__bar__close');

iconoBar.addEventListener('click', mostrar);
function mostrar() {
    nav.classList.remove('nav__none');
}

iconoClose.addEventListener('click', ocultar);
function ocultar() {
    nav.classList.add('nav__none');
}
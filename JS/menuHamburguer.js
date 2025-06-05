const hamburguer = document.querySelector('.hamburguer');
const menuMobile = document.querySelector('.menu-mobile');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    menuMobile.classList.toggle('active');
});
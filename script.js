const hamBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamBurger.addEventListener('click',  () => {
  hamBurger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
});
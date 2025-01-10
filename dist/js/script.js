// Toggle mobile menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const header = document.querySelector('#header');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('bg-white/95', 'shadow-md');
    header.classList.remove('mt-4');
  } else {
    header.classList.remove('bg-white/95', 'shadow-md');
    header.classList.add('mt-4');
  }
});
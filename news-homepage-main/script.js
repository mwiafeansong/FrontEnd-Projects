const backdrop = document.querySelector('.backdrop');
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.remove('invisible');
  nav.classList.add('visible');
  backdrop.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('visible');
  nav.classList.add('invisible');
  backdrop.style.display = 'none';
});

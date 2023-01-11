const hamburger =  document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const menu = document.querySelector('ul');

hamburger.addEventListener('click', (e) => {
    closeIcon.style.display = 'block';
    e.target.style.display = 'none';
    menu.style.width = '100%';
})

closeIcon.addEventListener('click', (e) => {
    e.target.style.display = 'none';
    hamburger.style.display = 'block';
    menu.style.width = '0';
})
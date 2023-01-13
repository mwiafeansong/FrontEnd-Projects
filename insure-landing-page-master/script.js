const hamburger =  document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const menu = document.querySelector('ul');

hamburger.addEventListener('click', (e) => {
    closeIcon.style.visibility = 'visible';
    e.target.style.visibility = 'hidden';
    menu.style.width = '100%';
})

closeIcon.addEventListener('click', (e) => {
    e.target.style.visibility = 'hidden';
    hamburger.style.visibility = 'visible';
    menu.style.width = '0';
})
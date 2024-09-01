const nav = document.getElementById('nav');
const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');

openNav.addEventListener('click', () => nav.classList.add('nav--show'))
closeNav.addEventListener('click', () => nav.classList.remove('nav--show'))
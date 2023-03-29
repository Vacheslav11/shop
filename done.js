'use strict';

const button = document.querySelector('.menu__mobile_button');
const menu = document.getElementById( 'menu__mobile-text')

button.addEventListener('click', () => {
    button.classList.toggle('active');
    menu.classList.toggle( 'show')
});
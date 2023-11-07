const navBar = document.querySelector('header nav');
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const line3 = document.querySelector('#line3');

function onOffMenu (){
    line1.classList.toggle('line-menu1')
    line2.classList.toggle('line-menu2')
    line3.classList.toggle('line-menu3')
    navBar.classList.toggle('nav');
}
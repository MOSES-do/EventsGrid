const hamIcon = document.querySelector(".header__nav--hamburger");
const navBar = document.querySelector(".header__nav--links");
const burgerLine1 = document.querySelector(".line-1");
const burgerLine2 = document.querySelector(".line-2");

function openNav() {

    burgerLine1.classList.toggle("line-1-toggled");
    burgerLine2.classList.toggle("line-2-toggled");

    navBar.classList.toggle('display-nav');
}
hamIcon.addEventListener('click', openNav);

console.log(hamIcon, navBar);
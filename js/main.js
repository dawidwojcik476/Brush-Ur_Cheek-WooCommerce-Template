const menuBtn = document.querySelector('.menu-link');
const mainMenu = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');
const logoImg = document.querySelector('.logo');
const contact = document.querySelector('.contact');
const headerBgc = document.querySelector('.headerbgc');
let menuOpen = false;


const menu = () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        mainMenu.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        mainMenu.classList.remove('open');
        menuOpen = false;
    }
}

const stickymenu = () => {
    if (window.scrollY > (500)) {
        navBar.classList.add("sticky");
        logoImg.classList.add("sticky");
        contact.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
        logoImg.classList.remove("sticky");
        contact.classList.remove("sticky");
    }
}

menuBtn.addEventListener('click', menu)
// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrending = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrending.classList.add('show')
        // for (i=0; i < navItems.length; i++) {
        //     navItems[i].classList.add('show')
        // }
        navItems.forEach(item => item.classList.add('show'));

        // 
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrending.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // 
        showMenu = false;

    }
}

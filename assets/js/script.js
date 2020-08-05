const menuButton = document.querySelectorAll(".menu-icon");
const navMenu = document.querySelectorAll(".nav-menu");

const menuNav = ()=> {
   navMenu.forEach((nav) => {
       nav.classList.toggle('show-menu');
   });
}

menuButton.forEach((menu) => {
    menu.addEventListener('click', ()=> {
        menuNav();
    });
});

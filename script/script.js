


window.addEventListener("DOMContentLoaded", function() {
  navFuncionalidad();
});

let nav = document.querySelector(".header-mobile");
let navMenu = document.querySelector(".nav-menu");
let navToggle = document.querySelector(".nav-toggle");

// header-mobile

function navFuncionalidad() {
  nav.addEventListener("click", (e) => {
    if(e.target.classList.contains("nav-toggle") || e.target.classList.contains("icon-bar")) {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("mostrar-nav");
      nav.classList.toggle("background-active");
    }
  });
}

// fin header-mobile

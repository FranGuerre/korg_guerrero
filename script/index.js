const filminas = [
  {
    titulo:"ARP 2600",
    img: "img/hero-1.png"
  },
  {
    titulo:"modwave",
    img: "img/hero-2.png"
  },
  {
    titulo:"modstate",
    img: "img/hero-3.png"
  }
]

window.addEventListener("DOMContentLoaded", function() {
  hero();
});

let heroTitulo = document.querySelector(".hero__titulo");
let heroImg = document.querySelector(".hero__img");

let x = 0;

function hero() {

  heroTitulo.innerText = filminas[x].titulo;
  heroImg.src = filminas[x].img;
  heroImg.alt = `Sintetizador ${filminas[x].titulo}`;

  x++;
  if(x >= filminas.length) {
    x = 0;
  }

  setTimeout("hero()",10000);

}

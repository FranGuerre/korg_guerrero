const sintes = [
  {
    modelo: "Kronos",
    img: "https://cdn.korg.com/ar/products/upload/8561a78fdf52ed2f7cf377a610c7655c_pc.png",
    categoria: 1,
    info: "Te presentamos KRONOS. Creado por KORG para satisfacer las necesidades de los intérpretes y productores más exigentes, y de los músicos más futuristas, KRONOS incorpora más de 50 años de experiencia en innovación y producción musical. Con nueve motores diferentes de síntesis y un completo conjunto de herramientas de interpretación y producción, KRONOS es sencillamente el sintetizador más versátil jamás fabricado."
  },
    {
    modelo: "Nautilus",
    img: "https://cdn.korg.com/ar/products/upload/4ccbb9189330445d5bf972ef3bed2ab5_pc.png",
    categoria: 1,
      info: "NAUTILUS supera los límites de lo que un sintetizador de interpretación y workstation puede hacer. Con la potencia de nueve motores impulsando un nuevo enfoque de sonidos, completo sampling, grabación de audio, efectos y potencia de procesamiento, simplemente no hay otro sintetizador que ofrezca más para explorar sonidos, con funciones para lograrlo más rápido que nunca."
  },
    {
    modelo: "Krome Ex Copper",
    img: "https://cdn.korg.com/ar/products/upload/42dbf4dd75420e96873d9718ea41dd0d_pc.png",
    categoria: 1,
      info: "Ahora disponible en un color completamente nuevo, el sintetizador KROME EX es un auténtico campeón que ofrece sonidos de alta calidad que puedes usar de inmediato con un énfasis en básicos futuros, todo ello en un diseño ligero y portátil. Se trata de una edición especial de KROME EX con un vibrante panel de color cobre, que tiene un aspecto muy atractivo bajo cualquier iluminación."
  },
  {
    modelo: "Kross",
    img: "https://cdn.korg.com/ar/products/upload/fa07835013d0e57b2db16f12a86f2e12_pc.png",
    categoria: 1,
    info: "KROSS 2, el esperado sucesor de KROSS, es un Workstation compacto y portátil con una enorme variedad de sonidos. Manteniendo su identidad como instrumento ultra ligero, compacto y capaz de funcionar con baterías, este nuevo modelo mejora en gran medida la funcionalidad y los sonidos de KROSS. Además de un total de más de mil sonidos preset, ahora se ha añadido expansión de memoria PCM."
  },
  {
    modelo: "miniKORG 700FS",
    img: "https://cdn.korg.com/ar/products/upload/1aba914db7521c9bb585b494cede5c56_pc.png",
    categoria: 2,
    info: "El miniKORG 700FS es un auténtico renacimiento del miniKORG 700S, (una versión mejorada del miniKORG 700) que fue lanzado al año siguiente. El miniKORG 700FS revisado ofrece funcionalidad adicional, como un arpegiador, reverberación de resorte y aftertouch."
  },
  {
    modelo: "Prologue",
    img: "https://cdn.korg.com/ar/products/upload/099965790d9cab8f657bba57015877c7_pc.png",
    categoria: 2,
    info: "Prologue es un sintetizador profesional avanzado y completamente programable. Precedido por el polifónico de cuatro voces minilogue y el monofónico monologue, presentamos el esperado debut del buque insignia: el Prologue."
  },
  {
    modelo: "ARP 2600M",
    img: "https://cdn.korg.com/ar/products/upload/61bc711af2c753b634f56a4703e17340_pc.png",
    categoria: 2,
    info: "El ARP 2600 es sin duda el sintetizador más icónico y reconocible de todos los tiempos. Ha sido utilizado en innumerables grabaciones, partituras de películas, programas de televisión y bandas sonoras de juegos desde su aparición desde los años 70 hasta la actualidad: el sonido del ARP 2600 sigue siendo una parte esencial del mundo de la música."
  },
  {
    modelo: "Minilogue xd PW",
    img: "https://cdn.korg.com/ar/products/upload/8a0c58866c7f46fbbb3aa78f94eb56ac_pc.png",
    categoria: 2,
    info: "El minilogue xd es el último sintetizador polifónico analógico de KORG y un potentísimo instrumento musical. Ahora, está disponible en un elegante color blanco perlado de edición limitada. El minilogue xd PW combina un maravilloso sonido con un bonito diseño que destaca tanto en el escenario como en el estudio."
  },
  {
    modelo: "Arp Odyssey",
    img: "https://cdn.korg.com/ar/products/upload/36db66fcbcb877a629703eac7ee6b6ed_pc.png",
    categoria: 2,
    info: "ARP Odyssey fue un sintetizador analógico producido en 1972 por el fabricante americano ARP Instruments, Inc., que rápidamente obtuvo un gran éxito entre los músicos.  Muy respetado por su gran relación calidad-precio, facilidad de interpretación y portabilidad, ARP Odyssey experimentó varias mejoras durante su historia. Reverenciado por músicos de todos los estilos como un clásico histórico, su sonido puede escucharse en numerosas canciones clásicas."
  },
  {
    modelo: "Modwave",
    img: "https://cdn.korg.com/ar/products/upload/eea4821a485cf93ee6ff4bb01771491c_pc.png",
    categoria: 3,
    info: "El modwave se basa en el legado DW y lo transforma en un moderno sinte monstruoso, con osciladores de tabla de ondas increíblemente profundos, magníficos filtros, modulación extraordinariamente flexible, polifonía sin igual, completa secuenciación de patrones y un control en tiempo real práctico e intuitivo."
  },
  {
    modelo: "Opsix",
    img: "https://cdn.korg.com/ar/products/upload/91892c2fcbd2fe1c6f0421f9ea4b92a9_pc.png",
    categoria: 3,
    info: "El opsix representa una nueva y expansiva reimaginación de la síntesis digital clásica. Al igual que Korg hizo rediseñando la secuencia de ondas de una manera más potente, más musical y más accesible con wavestate, ese también es el enfoque de la generación de sonido FM del opsix, que ha dado como resultado otro sintetizador increíblemente flexible y único."
  },
  {
    modelo: "Wavestate",
    img: "https://cdn.korg.com/ar/products/upload/3dbd799890bfcedfff395ca1537551dc_pc.png",
    categoria: 3,
    info: "KORG se enorgullece en anunciar el siguiente paso en la síntesis digital: el wavestate. Con Wave Sequencing 2.0 radicalmente reinventada, wavestate ofrece sonidos sorprendentes y evolutivos con un extensivo control."
  },
  {
    modelo: "MS-20 V2",
    img: "https://cdn.korg.com/ar/products/upload/d2635c6bb961c98642267ee55ee4328e_pc.png",
    categoria: 4,
    info: "All of the analog sounds and behaviors are realistically reproduced by CMT, KORG’s proprietary electronic Circuit Modeling Technology, and this latest software gives you the powerful sound that only the MS-20 can deliver."
  },
  {
    modelo: "Triton",
    img: "https://cdn.korg.com/ar/products/upload/df5e801242c7b1f9e7a0f2c7ac4f3e68_pc.png",
    categoria: 4,
    info: "The plug-in faithfully reproduces the HI (Hyper Integrated) synthesis system down to the smallest details and contains every one of the vast number of preset programs. Reclaim the true masterpiece sound that characterizes so many hit songs."
  },
  {
    modelo: "Polysix V2",
    img: "https://cdn.korg.com/ar/products/upload/b195fdbb7f40184b7aafd8b83a964bd9_pc.png",
    categoria: 4,
    info: "While the Polysix V2 in this KORG Collection has been based on the software-emulated Polysix from 2004, it has been refined for modern production environments. In addition to the often-requested high-resolution and scalable interface, we have added two new multi-effects."
  },
  ]

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
let solapas = document.querySelectorAll(".solapa");

let nav = document.querySelector(".header-mobile");
let navMenu = document.querySelector(".nav-menu");
let navToggle = document.querySelector(".nav-toggle");

let heroTitulo = document.querySelector(".hero__titulo");
let heroImg = document.querySelector(".hero__img");

let x = 0;

window.addEventListener("DOMContentLoaded", function() {
  hero();
  navFuncionalidad();
  cargarSolapas();
  funcionalidadSolapas();
  funcionalidadFiltros();
});

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


function hero() {

  heroTitulo.innerText = filminas[x].titulo;
  heroImg.src = filminas[x].img;

  x++;
  if(x >= filminas.length) {
    x = 0;
  }

  setTimeout("hero()",10000);

}



// solapas.html

/*
agregar un listener a cada solapa. en caso de click
se le agrega clases a esa solapa y se le quita a las demás
*/


function funcionalidadSolapas() {
  solapas.forEach(solapa => {
    solapa.addEventListener("click", () => {
      // resetea las solapas
      solapas.forEach(item => {
        item.children[0].classList.remove("borde-solapa-activa");
        item.classList.remove("mostrar-solapa");
      });
      // activa la solapa que fue clickeada
      solapa.children[0].classList.toggle("borde-solapa-activa");
      solapa.classList.toggle("mostrar-solapa");
    });
  });
}

/*
poblar solapas. leer id de solapa para poblarlo con los productos que coincidan en la categoría
*/
function cargarSolapas() {
  let arrSintes = [], id;

  solapas.forEach(solapa => {
    id = parseInt(solapa.id[solapa.id.length - 1], 10);
    arrSintes = [];

    for(let i = 0; i < sintes.length; i++) {
      if(sintes[i].categoria === id) {
        arrSintes.push(`<li class="contenido__producto">
                        <img src="${sintes[i].img}" alt="${sintes[i].modelo}">
                        <h4>${sintes[i].modelo}</h4>
                        <p>${sintes[i].info}</p>
                        </li>`);
      }
    }
    arrSintes = arrSintes.join("");
    solapa.children[1].innerHTML = arrSintes;
  });
}

//          soporte.html

let filtros = document.querySelector(".filtros");

function funcionalidadFiltros() {
  filtros.addEventListener("click", (e) => {
    if(e.target.classList.contains("filtro")) {
      let id = e.target.id;
      id = id.split("-");
      id = id[1];

      if(!e.target.classList.contains("btn-active")) {
        document.querySelectorAll(".filtro").forEach(function(f) {
          f.classList.remove("btn-active");
        });
        e.target.classList.add("btn-active");
      }

      // e.target.classList.remove("active");
      seleccionarCategoria(id);
    }
  });
}

function seleccionarCategoria(v) {
  let arrCategorias = ['preguntas-sintetizadores', 'preguntas-workstation','preguntas-software'];
  let idCategoria = `preguntas-${v}`;
  let indexCategoria = arrCategorias.indexOf(idCategoria);

  if (indexCategoria !== -1) {
    arrCategorias.splice(indexCategoria, 1);

    if(!document.getElementById(idCategoria).classList.contains("categoria-visible")) {
      document.getElementById(idCategoria).classList.add("categoria-visible");
      document.getElementById(arrCategorias[0]).classList.remove("categoria-visible");
      document.getElementById(arrCategorias[1]).classList.remove("categoria-visible");
    }
  }
}

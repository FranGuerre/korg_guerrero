window.addEventListener("DOMContentLoaded", function(){
  funcionalidadFiltros();
});

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

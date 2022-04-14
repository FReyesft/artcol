const grid = new Muuri(".grid", {
    layout: {
      rounding: false,
    },
  });
  
  window.addEventListener("load", () => {
    grid.refreshItems().layout();
    document.getElementById("grid").classList.add("imagenes-cargadas");
    //Se agregan listeners para filtrar por categoria
    const enlaces = document.querySelectorAll("#categorias a");
    enlaces.forEach((elemento) => {
      elemento.addEventListener("click", (evento) => {
        evento.preventDefault();
        enlaces.forEach((enlace) => enlace.classList.remove("activo"));
        evento.target.classList.add("activo");
  
        const categoria = evento.target.innerHTML.toLowerCase();
        categoria === "todos"
          ? grid.filter("[data-categoria]")
          : grid.filter(`[data-categoria="${categoria}"]`);
      });
    });
    //Se agregan los listeners para la barra de busqueda
    document
      .querySelector("#barra-busqueda")
      .addEventListener("input", (evento) => {
        const busqueda = evento.target.value;
        grid.filter((item) =>
          item.getElement().dataset.etiquetas.includes(busqueda)
        );
      });
    //listener para imagenes
    const overlay = document.getElementById("overlay");
    document.querySelectorAll(".grid .item img").forEach((elemento) => {
      elemento.addEventListener("click", () => {
        const ruta = elemento.getAttribute("src");
        const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
        const price = elemento.parentNode.parentNode.dataset.price;
  
        overlay.classList.add("activo");
        document.querySelector("#overlay img").src = ruta;
        document.querySelector("#overlay .descripcion").innerHTML = descripcion;
        document.querySelector("#overlay .price").innerHTML = price;
        //cambiar el href de whatsapp
        document.querySelector(".float").href = `https://api.whatsapp.com/send?phone=+57 3204351465&text=Hola. Me gustaria preguntar por el producto ${descripcion}`;
      });
    });
    //Listener de boton para cerrar
    document.querySelector("#btn-cerrar-popup").addEventListener("click", () => {
      overlay.classList.remove("activo");
    });
    //Listener de overlay
    overlay.addEventListener("click", (evento) => {
      evento.target.id === "overlay" ? overlay.classList.remove("activo") : "";
    });
  });
  
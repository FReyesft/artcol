window.addEventListener("load", function () {
  let images = [];
  images[0] = "/src/assets/product01.PNG";
  images[1] = "/src/assets/product02.PNG";
  images[2] = "/src/assets/product03.PNG";
  images[3] = "/src/assets/product04.PNG";
  images[4] = "/src/assets/product05.PNG";
  images[5] = "/src/assets/product06.PNG";
  images[6] = "/src/assets/product07.PNG";

  let imagesWallpapers = [];
  imagesWallpapers[0] = "/src/assets/wallpaper01.jpg";
  imagesWallpapers[1] = "/src/assets/wallpaper02.png";
  imagesWallpapers[2] = "/src/assets/wallpaper03.png";

  function changeWallpaper() {
    let time = 4000;
    let i = 0;
    setInterval(function () {
      document.slider01.src = imagesWallpapers[i];
      i++;
      if (i === imagesWallpapers.length) {
        i = 0;
      }
    }, time);
  }
  changeWallpaper();
});

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
      document.querySelector(".float").href = `https://api.whatsapp.com/send?phone=+57 3142325833&text=Hola. Me gustaria preguntar por el producto ${descripcion}`;
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

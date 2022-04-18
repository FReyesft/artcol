const time = 5000
window.addEventListener("load", function () {
  let images = [];
  images[0] = "./assets/product19.PNG";
  images[1] = "./assets/product02.PNG";
  images[2] = "./assets/product03.PNG";
  images[3] = "./assets/product30.PNG";
  images[4] = "./assets/product01.PNG";
  images[5] = "./assets/product21.PNG";
  images[6] = "./assets/product14.PNG";  

  let imagesWallpapers = [];
  imagesWallpapers[0] = "./assets/fondoWallpapernuevo.PNG";
  imagesWallpapers[1] = "./assets/product12.PNG";
  imagesWallpapers[2] = "./assets/imagen03.PNG";

  function changeWallpaper() {
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

  function changeProduct1() {
    let i = 1;
    setInterval(function () {
      document.item.src = images[i];
      i++;
      if (i === images.length) {
        i = 0;
      }
    }, time);
  }
  changeProduct1();

  function changeProduct2() {
    let i = 2;
    setInterval(function () {
      document.item2.src = images[i];
      i++;
      if (i === images.length) {
        i = 0;
      }
    }, time);
  }
  changeProduct2();

  function changeProduct3() {
    let i = 3;
    setInterval(function () {
      document.item3.src = images[i];
      i++;
      if (i === images.length) {
        i = 0;
      }
    }, time);
  }
  changeProduct3();

  function changeProduct4() {
    let i = 4;
    setInterval(function () {
      document.item4.src = images[i];
      i++;
      if (i === images.length) {
        i = 0;
      }
    }, time);
  }
  changeProduct4();
});

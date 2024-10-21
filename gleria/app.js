let img = document.getElementsByClassName("image");
let idImage = document.querySelectorAll(".image-container"); // Usar la clase
let boxImagenes = document.querySelector(".box-imagenes");
let contentImagenes = document.querySelector(".content-imagenes");
let boxLargeImagen = document.querySelector(".box-large-imagen");
let boxImagen = document.getElementById("box-imagen");
let body = document.querySelector("body"); // Corregido para seleccionar correctamente el cuerpo
let close = document.querySelector(".close");

// Agregar evento a todas las imágenes pequeñas
for (const idimagen of idImage) {
  idimagen.addEventListener("click", (event) => {
    boxImagenes.classList.add('resize-box-imagenes');
    contentImagenes.classList.add('content-image-resize');
    boxLargeImagen.classList.add('block-imagen');
    body.classList.add('resize-body');
  });
}

let n = 0;
function seleccionar(n) {
  let obj = img.item(n);
  boxImagen.src = obj.src;
}

// Cerrar la vista de la imagen grande
close.addEventListener("click", (event) => {
  boxImagenes.classList.remove('resize-box-imagenes');
  contentImagenes.classList.remove('content-image-resize');
  boxLargeImagen.classList.remove('block-imagen');
  body.classList.remove('resize-body');
});

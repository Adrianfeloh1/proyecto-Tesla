/* Función para cambiar de imagen en la prueba 
de manejo al dar click en cada botón */

const changeModel = (model) => {
    /* capturo el elemento img desde el id */
  const imageModel = document.getElementById("modelImage"); 
  /* cambio el atributo de la ruta de la imagen */
  imageModel.src = "./assets/images/menu-" + model + ".avif";
}

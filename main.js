
let navList;
let imageModel;

/* Función para cambiar de imagen en la prueba */

window.onload = () => {
  /* capturo el elementos */
  navList = document.getElementById("navList")
  imageModel = document.getElementById("modelImage");  
} 

/* Función para mostrar u ocultar la barra de navegación 
al hacer clic en el botón de menú */

const toggleMenu = () => {
/*   Si la barra de navegación está visible, la oculta; 
de lo contrario, la muestra
 */  if (navList.style.display === "block") {
    navList.style.display = "none";
  } else {
    navList.style.display = "block";
  }
}


const changeImageModel = (model) => {    
  /* cambio el atributo de la ruta de la imagen */
  imageModel.src = "./assets/images/menu-" + model + ".avif";
}





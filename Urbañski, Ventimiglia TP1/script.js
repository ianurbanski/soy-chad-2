
/*seccion boton volver arriba*/


function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}


/*seccion formulario*/


document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); 

    // valida el formulario
    if (formulario.checkValidity()) {
      
      const nombre = document.getElementById("nombreYApellido").value;
      const email = document.getElementById("email").value;

      localStorage.setItem("nombreUsuario", nombre);
      localStorage.setItem("emailUsuario", email);

      // Renvia a pantalla gracias
      window.location.href = "gracias.html";
    } else {
      formulario.reportValidity();
    }
  });
});






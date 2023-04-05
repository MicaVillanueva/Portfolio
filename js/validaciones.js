const nombre = document.getElementById("nombre");
nombre.addEventListener("input", function (event) {
  if (nombre.validity.valueMissing) {
    nombre.setCustomValidity("El campo nombre no puede estar vacio");
  } else {
    nombre.setCustomValidity("");
  }
});

const email = document.getElementById("email");
email.addEventListener("input", function (event) {
    if (email.validity.valueMissing) {
        nombre.setCustomValidity("El campo nombre no puede estar vacio");
      } 
    if (email.validity.typeMismatch) {
    email.setCustomValidity("El formato debe ser email@dominio.com");
    } else {
    email.setCustomValidity("");
  }
});

const asunto = document.getElementById("asunto");
asunto.addEventListener("input", function (event) {
  if (asunto.validity.valueMissing) {
    asunto.setCustomValidity("El campo asunto no puede estar vacio");
  } else {
    asunto.setCustomValidity("");
  }
});

const mensaje = document.getElementById("mensaje");

mensaje.addEventListener("input", function (event) {
  if (mensaje.validity.valueMissing) {
    mensaje.setCustomValidity("El campo mensaje no puede estar vacio");
  } else {
    mensaje.setCustomValidity("");
  }
});













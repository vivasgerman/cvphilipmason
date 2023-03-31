const btnMostrar = document.getElementById("btnMostrar");
const formulario = document.getElementById("formulario");

btnMostrar.addEventListener("click", () => {
  formulario.style.display = "block";
});

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  console.log(email);
  // Agregar aquí el código para enviar el mensaje
  formulario.reset();
  formulario.style.display = "none";
});
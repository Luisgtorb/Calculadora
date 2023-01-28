const btnSuma = document.querySelector("[data-btnSuma]");
const btnResta = document.querySelector("[data-btnResta]");
const btnMultiplica = document.querySelector("[data-btnMultiplica]");
const btnDivide = document.querySelector("[data-btnDivide]");
const btnBorra = document.querySelector("[data-btnBorra]");
const container = document.querySelector(".container");
let valorUno = document.querySelector("[data-uno]");
let valorDos = document.querySelector("[data-dos]");


function sumar(valorUno,valorDos) {
  let resultado = parseFloat(valorUno.value) + parseFloat(valorDos.value);
  crearRespuesta("El resultado de la suma es " + resultado);
  console.log("El resultado es " + resultado);
  valorUno.value = " ";
  valorDos.value = " ";
}

function restar(valorUno,valorDos) {
  let resultado = parseFloat(valorUno.value) - parseFloat(valorDos.value);
  crearRespuesta("El resultado de la resta es " + resultado);
  console.log("El resultado es " + resultado);
  valorUno.value = " ";
  valorDos.value = " ";
  borrarRespuesta();
}

function multiplicar(valorUno,valorDos) {
  let resultado = parseFloat(valorUno.value) * parseFloat(valorDos.value);
  crearRespuesta("El resultado de la multiplicación es " + resultado);
  console.log("El resultado es " + resultado);
  valorUno.value = " ";
  valorDos.value = " ";
}

function dividir(valorUno,valorDos) {
  let resultado = parseFloat(valorUno.value) / parseFloat(valorDos.value);
  crearRespuesta("El resultado de la división es " + resultado);
  console.log("El resultado es " + resultado);
  valorUno.value = " ";
  valorDos.value = " ";
}

function crearRespuesta(texto) {
  const respuesta = document.createElement("p");
  respuesta.classList.add("result")
  respuesta.innerHTML = texto;
  container.appendChild(respuesta);
  console.log(respuesta);

  btnBorra.addEventListener("click", (event) =>{
    respuesta.remove();
  })
}

function inputs() {
  valorUno.setAttribute("minlength", "1");
  valorUno.setAttribute("maxlength", "6");
  valorUno.setAttribute("onkeypress", "return validaNumeros(event)");
  valorDos.setAttribute("minlength", "1");
  valorDos.setAttribute("minlength", "6");
  valorDos.setAttribute("onkeypress", "return validaNumeros(event)");
}

inputs();

function validaNumeros(event) {
  let key = event.keyCode || event.which;
  let board = String.fromCharCode(key);
  let numb = "0123456789.";

  if(numb.indexOf(board) == -1) {
    return false;
  }
}

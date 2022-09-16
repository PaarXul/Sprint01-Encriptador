//* Se inicializa las variables de input trae el valor que trae el textarea y mensaje trae el valor que contiene el Div de mensaje
let input = document.querySelector("#texto");
let mensaje = document.querySelector("#mensaje");

//*trae la acción a realizar de los botones de encriptar, desencriptar y copiar
const encriptarTexto = document.querySelector("#Encriptar");
const desencriptarTexto = document.querySelector("#Desencriptar");
const copiarTexto = document.querySelector("#copias");

//función que trae el valor obtenido del textarea, este pasa a convertir las mayúsculas a minúsculas, se recorre cada contenido del textarea y pasa a convertir cada carácter que sea (a,e,i,o,u).
function encriptar() {
  let textoEntrada = input.value.toLowerCase();
  let nuevoTexto = "";
  for (let i = 0; i < textoEntrada.length; i++) {
    switch (textoEntrada[i]) {
      case "a":
        nuevoTexto += "ai";
        break;
      case "e":
        nuevoTexto += "enter";
        break;
      case "i":
        nuevoTexto += "imes";
        break;
      case "o":
        nuevoTexto += "ober";
        break;
      case "u":
        nuevoTexto += "ufat";
        break;

      default:
        nuevoTexto += textoEntrada[i];
        break;
    }
  }

  obtenerMensaje(nuevoTexto);
}

//* Realiza la misma función que encriptar, con la diferencia que se utiliza la función replaceAll la cual reemplaza los caracteres exactos.
function desencriptar() {
  let textoEntrada = input.value.toLowerCase();

  if (textoEntrada.includes("ai", 0)) {
    textoEntrada = textoEntrada.replaceAll("ai", "a");
  }
  if (textoEntrada.includes("enter", 0)) {
    textoEntrada = textoEntrada.replaceAll("enter", "e");
  }
  if (textoEntrada.includes("imes", 0)) {
    textoEntrada = textoEntrada.replaceAll("imes", "i");
  }
  if (textoEntrada.includes("ober", 0)) {
    textoEntrada = textoEntrada.replaceAll("ober", "o");
  }
  if (textoEntrada.includes("ufat", 0)) {
    textoEntrada = textoEntrada.replaceAll("ufat", "u");
  }
  obtenerMensaje(textoEntrada);
}

//* el valor obtenido de las funciones encriptar o desencriptar, pasa a ser enviado a la pantalla principal mediante el set de los valores que contiene DIV mensaje.
function obtenerMensaje(nuevoTexto) {
  mensaje.textContent = "";
  let mensajeIngresado = document.createElement("textarea");
  mensajeIngresado.classList.add("textoEncriptado");
  mensaje.setAttribute("id", "obtenerMensaje");
  mensajeIngresado.setAttribute("cols", "20");
  mensajeIngresado.setAttribute("rows", "10");
  mensajeIngresado.value = nuevoTexto;
  mensajeIngresado.setAttribute("readonly", "true");
  mensaje.appendChild(mensajeIngresado);
  copiarMensaje(mensajeIngresado);
}
//* selecciona todo el valor contenido en el area del resultado obtenido de las función obtener mensaje y copia el contenido.
function copiarMensaje(mensajeIngresado) {
  let copiar = document.createElement("button");
  copiar.classList.add("copiarTextoBtn");
  copiar.innerHTML = "copiar";
  mensaje.setAttribute("id", "copiarMensaje");
  copiar.addEventListener("click", (e) => {
    console.log(mensajeIngresado);
    let copiado = mensajeIngresado;
    copiado.select();
    document.execCommand("copy");
  });
  mensaje.appendChild(copiar);
}
// Captura los eventos del botón encriptar y desencriptar para ejecutar las acciones de las funciones.
encriptarTexto.addEventListener("click", encriptar);
desencriptarTexto.addEventListener("click", desencriptar);


function soloLetras(e) {
  var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = " abcdefghijklmnñopqrstuvwxyz",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
}
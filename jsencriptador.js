let input = document.querySelector("#texto");
let mensaje = document.querySelector("#mensaje");

const encriptarTexto = document.querySelector("#Encriptar");
const desencriptarTexto = document.querySelector("#Desencriptar");
const copiarTexto = document.querySelector("#copias");

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
encriptarTexto.addEventListener("click", encriptar);
desencriptarTexto.addEventListener("click", desencriptar);

// valores necesarios para que el programa funcione
var textoInicial = document.getElementById("texto-encriptar");
var textoEncriptado = document.getElementById("texto-desencriptar");
var accionEncriptar = document.querySelector("#encriptar");
var accionDesencriptar = document.querySelector("#desencriptar");
// falta agregar el boton de copiar


// creamos la funcion para encriptar
accionEncriptar.onclick = function(){
    // pasamos el texto a minuscula
    var textoMinuscula = textoInicial.value.toLowerCase();
    // encriptamos el texto
    let resultado = textoMinuscula.replace(/e/,"enter").replace(/i/,"imes").replace(/a/,"ai").replace(/o/,"ober").replace(/u/,"ufat");

// insertamos el texto encriptado en la pagina
document.getElementById("texto-desencriptar").value = resultado;
// eliminamos el texto encriptado
document.getElementById("texto-encriptar").value = "";
// sacamos la imagen y la reemplazamos por el textarea
var imgContenedor = document.querySelector(".mostrar");
imgContenedor.classList.remove("mostrar");
imgContenedor.classList.add("ocultar");
var textArea = document.querySelector(".ocultar")
textArea.classList.remove("ocultar")
};

// creamos la funcion para desencriptar
accionDesencriptar.onclick = function(){
    //pasamos el texto a minuscula
    var textoMinuscula = textoInicial.value.toLowerCase();
    // desencriptamos el texto
    let resultado = textoMinuscula.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");

    //insertar el texto desencriptado en la pagina
    document.getElementById("texto-desencriptar").value = resultado;
    // borramos el texto introducido
    document.getElementById("texto-encriptar").value = "";
    var imgContenedor = document.querySelector(".mostrar");
    imgContenedor.classList.remove("mostrar");
    imgContenedor.classList.add("ocultar");
    var textArea = document.querySelector(".ocultar")
    textArea.classList.remove("ocultar")
};
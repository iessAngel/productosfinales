// Do while para pedir 1 en caso de cifrado, 2 en caso de descifrado
do {
    var opcionElegida = prompt("Elija 1 para cifrar o 2 para descifrar");
  if (opcionElegida == 1) {
    // Le pedimos al usuario introduzca la opción para cifrar o descifrar
    var mensajeParaCifrar = prompt("Introduce mensaje para cifrar:");
    // Checar si el mensaje no tiene números y no es una cadena vacía
    if (mensajeValido(mensajeParaCifrar)) {
        // Cifrar con cipher() la palabra actual.
        cipher(mensajeParaCifrar);
    }
  } else if (opcionElegida == 2) {
    // Le pedimos al usuario el input con la palabra para desccifrar
    var mensajeParaDescifrar = prompt("Introduce mensaje para descifrar:");
    // Checar si el mensaje no tiene números y no es una cadena vacía
    if (mensajeValido(mensajeParaDescifrar)) {
        // Descifrar con descipher() la palabra actual.
        descipher(mensajeParaDescifrar);
    }
  }
  // Si la opción elegida es diferente a 1 o 2 o una cadena vacia, volver a pedir una opción.
} while (!opcionElegida || opcionElegida === " " || opcionElegida != 1  || opcionElegida !=2)

//PASO 1 CIPHER MENSAJE
function cipher(mensajeParaCifrar) {
    // Creamos una cadena vacia para el mensaje cifrado
    var mensajeCifrado = "";
    // Convertimos a la cadena ingresada en mayúsculas
    mensajeParaCifrar = mensajeParaCifrar.toUpperCase();

    // creamos un for para identificar la longitud del mensaje
	for (i = 0 ; i < mensajeParaCifrar.length; i++) {
        // Obtenemos la posición unicode actual
        posicionUnicode = mensajeParaCifrar.charCodeAt(i);
        // Asignamos con la posición unicode del nuevo caracter ASCII
        var posicionCifrada = ((posicionUnicode-65+33) % 26) + 65;
        // Concatenamos a mensaje cifrado el nuevo caracter
		mensajeCifrado += String.fromCharCode(posicionCifrada);
    }

    // Le mostramos al usuario el mensaje cifrado
	alert("El mensaje cifrado es: " + mensajeCifrado);
}

//PASO 2 DESCIPHER MENSAJE
function descipher(mensajeParaDescifrar) {
    // creamos una cadena vacia para el mensaje cifrado
    var mensajeDescifrado = "";
    // convertimos a la cadena ingresada en mayúsculas
    mensajeParaDescifrar = mensajeParaDescifrar.toUpperCase();

    // creamos un for para identificar la longitud del mensaje
	for (i = 0 ; i < mensajeParaDescifrar.length; i++) {
        // obtenemos la posición unicode actual
        var posicionUnicode = mensajeParaDescifrar.charCodeAt(i);
        // asignamos con la posición unicode del nuevo caracter ASCII
        var posicionDescifrada = ((posicionUnicode-65-7+26) % 26) + 65;
        // concatenamos a mensajeDescifrado el nuevo caracter
        mensajeDescifrado += String.fromCharCode(posicionDescifrada);
    }

    // mostramos al usuario el mensaje descifrado
    alert("El mensaje descifrado es: " + mensajeDescifrado);
}

function mensajeValido(mensaje) {
    // Si el mensaje es vacio, null o contiene números, mostramos un mensaje de error
    if (!mensaje || mensaje === " " || /\d/.test(mensaje)) {
        alert("El mensaje ingresado es inválido porque contiene espacios o números");
        return false;
    }
    return true;
}









/*function descipher(mensajeParaDescifrar) {
    // Creamos una cadena vacia para el mensaje cifrado
    var mensajeDescifrado = "";
    // Convertimos a la cadena ingresada en mayúsculas
    mensajeParaDescifrar = mensajeParaDescifrar.toUpperCase();

    // Iteramos con un for el largo del mensaje
	for (i = 0 ; i < mensajeParaDescifrar.length; i++) {
        // Obtenemos la posición unicode actual
        var posicionUnicode = mensajeParaDescifrar.charCodeAt(i);
        // Asignamos con la posición unicode del nuevo caracter ASCII
        var posicionDescifrada = ((posicionUnicode-65-7+26) % 26) + 65;
        // Concatenamos a mensajeDescifrado el nuevo caracter
        mensajeDescifrado += String.fromCharCode(posicionDescifrada);
    } */

/*    var mensaje = prompt("Ingrese una frase");
//creamos la variable mensaje que lanzará un prompt en donde ingresas la frase
function cipher(mensaje,parametro){
//creamos una cadena vacía para el mensaje cifrado
  var encryptedMessage = "";
  parametro = 33;
//iteramos con un for el largo del mensaje
    for(var i = 0; i < mensaje.length; i++){
      encryptedMessage += String.fromCharCode((mensaje.charCodeAt(i)- 65 + parametro)%26 + 65);
    }return encryptedMessage;
}
document.write("Tu mensaje cifrado es " + cipher(mensaje));

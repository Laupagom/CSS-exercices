/* 

var numero = 30;

if (numero < 20) { // si numero es menor que 20. es true por lo tanto se ejecutaría la sentencia dentro de IF
    console.log("el número es menor")
} else { // si numero es mayor que 20 no se efecutaría la sentencia de IF, si no la de ELSE
    console.log("el número es mayor")
}


var peces = 51;

if ( peces < 20) {
    console.log ("Tengo 20 peces para comer");
} else if (peces == 50) {
    console.log("Tengo 50 peces para comer");
} else {
    console.log ("No tengo peces para comer");
}


*/


//SOLICITAMOS A UN USUARIO LA CONTRASEÑA

var contrasena = prompt("Introduce tu contraseña");
console.log(contrasena);

//longitud de contraseña
var longitud = 5;


 if (contrasena.length < longitud) {
     alert("Contraseña demasiado corta, usa al menos " + longitud + " caracteres.");
 } else {
     alert("Contraseña adecuada")
 }
// ARIMÉTICOS no hace falta definirlos
/*var numero1 = 20;
var numero2 = 77;*/
 /* 


{
    console.log(numero1 + numero2); // Adición
    console.log(numero1 - numero2); // Sustración
    console.log(numero1 * numero2); // Multiplicación
    console.log(numero1 / numero2); // División
    console.log(numero1++); // Incremento y decremento. Si se pone en la posició sufijo, el nº que devuelve sigue siendo 20, si se pone en prefijo 21.
    console.log(numero1 % numero2);  // Módulo (resto)

}
 */

 //COMPARACIÓN Comparán valores y devuelven valores Booleanos ( true o false )
/*
 {
    console.log(numero1 == numero2); // Igualdad (laxa). convierte el tipo del uno en el otro 20 == "20", true
    console.log(numero1 === numero2); // Igualdad estricta. no convierte 20 === "20" false
    console.log(numero1 != numero2); // Desigualdad (laxa) convierte
    console.log(numero1 !== numero2); // Desigualdad estricta. no convierte
    console.log(numero1 > numero2); // Mayor que
    console.log(numero1 >= numero2);  // Mayor e igual que
    console.log(numero1 < numero2);  // Menor que
    console.log(numero1 <= numero2);  // Menor e igual que


}
*/
 
// OPERADOR TERNARIO

/*

var aceptado = true;

if (aceptado === true) {
    alert ("aceptado");
} else {
    alert ("no aceptado");
}

//es lo mismo que: 
alert ((aceptado === true) ? "aceptado" : "no aceptado"); // aceptado es ture, si(?) no es aceptado es (:) no aceptado.

*/


// OPERADORES DE ASIGNACIÓN

  /*  console.log(numero1 = numero2); // Asignación El numero2 sobreescribe al numero1
    console.log(numero1 += numero2); // Aisgnación de edición.  numero1= numero1 + numero 2
    console.log(numero1 -= numero2); // Asignación de sustración. numero1 = numero1 - numero2
    console.log(numero1 *= numero2); // Asignación de multiplicación. 
    console.log(numero1 /= numero2); // Asignación de división.
    console.log(numero1 %= numero2); // Asignación de resto. numero1 = numero1 % numero 2. 
*/


//OPERADORES DE STRING son operadores ariméticos , pero que si se utilizan con STRING se concatenan


{
    var texto1 = "Hola";
    var texto2 = "Mundo";

    var combinacion = texto1 + texto2;
    console.log(combinacion);

    texto1 += texto2;

    console.log(texto1);


}

//OPERADORES LÓGICOS
/* function saludar() {
    console.log("Hola, ¿cómo estas?");
}

mostramos el interior de la función en consola 
console.log(saludar);

pero queremos invocar esta función 
saludar(); 
*/

/*
//con parámetros
function saludarJuan() {
    console.log("Hola Juan, ¿cómo estas?");
}

function saludarMaria() {
    console.log("Hola Maria, ¿cómo estas?");
}

function saludarLuis() {
    console.log("Hola Luis, ¿cómo estas?");
}


saludarJuan();
saludarMaria();
saludarLuis();

// para no repetirnos utilizamos parámetros

*/
/*
function saludar(nombre){
    console.log("Hola" + nombre + " y feliz día");
}

saludar("Juan");
saludar("Maria");
saludar("Luis");
*/

//las funciones pueden aceptar más de un parámetro
/*

function saludar(nombre, momentoDia){
    console.log("Hola " + nombre + " y feliz " + momentoDia + ".");
}

saludar("Juan", "día");
saludar("Maria", "tarde");
saludar("Luis", "noche"); 

*/

function sumaCuadrados(a, b) {
    //decimos que es a y b
    var cuadradoA = Math.pow(a, 2);
    var cuadradoB = Math.pow(b, 2);
    var suma = cuadradoA + cuadradoB;
    return suma;
}hg

var resultado = sumaCuadrados(10, 55);
console.log(resultado);
// AND: && (las dos expresionles. deben ser true, para que en general, devuelva TRUE)

//console.log(true && false); //false
//console.log(true && true); //trueÇ
//console.log(false && false); //false

// or: || (una de las dos expresiones, deben ser true, para que en genera, devuelva true)
//console.log(true || false);  //true
//console.log(true || true);  //true
//console.log(false || false);  //false


//console.log(((true || false) && (false && false) || (true || true)));
//console.log (true && false || true);
//console.log(false || true);
//console.log(true);


/*for (var contador = 1; contador <= 100; contador++) {
 if ((contador >= 60) && (contador <= 70) || (contador == 55)) {//buscamos el rango
    console.log(contador);
}
}*/

for (var contador = 100; contador >= 1; contador--) {
  if ((contador >= 70) && (contador <= 90) || (contador == 22)) {
        console.log(contador);
}
}